import matchSorter from "match-sorter"
import createStore from "zustand"
import Layout from "@components/layout"
import tags from "devfont/data/tags.json"
import { version } from "devfont/package.json"

function importIcons(r, attrs) {
  return r.keys().map((fileName) => {

    const name = fileName.substr(2).replace(/\.svg$/, "")

    return {
      svg: r(fileName).default,
      tags: tags[name] || [],
      attrs,
      name
    }
  })
}

const iconsAll = importIcons(
  require.context("devfont/icons/optimized", false, /\.svg$/),
  {
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    fill: "none",
    height: 24,
    width: 24
  }
)

const useStore = createStore((set) => ({
  query: "",
  filter: undefined,
  search: (query) => {
    set({
      query,
      filter: query
        ? matchSorter(iconsAll, query, { keys: ["name", "tags"] }).map(
            (x) => x.name
          )
        : undefined
    })
  }
}))

function stringifyAttrs(attrs, filter = () => true) {
  let str = Object.keys(attrs)
    .filter(filter)
    .map((attr) =>
      /^[0-9.]+$/.test(attrs[attr])
        ? `${attr}={${attrs[attr]}}`
        : `${attr}="${attrs[attr]}"`
    )
    .join(" ")
  if (str) return ` ${str}`
  return str
}

function castArray(value) {
  return Array.isArray(value) ? value : [value]
}

function serialize(component) {
  let code = ""
  let { children, ...props } = component.props
  if (typeof component.type === "string") {
    if (children) {
      code += `<${component.type}${stringifyAttrs(props)}>${castArray(children)
        .map(serialize)
        .join("")}</${component.type}>`
    } else {
      code += `<${component.type}${stringifyAttrs(props)} />`
    }
  } else {
    code += castArray(children).map(serialize).join("")
  }
  return code
}

function copyIcon(icon, as) {
  let jsx =
    `<svg` +
    stringifyAttrs(
      { xmlns: "http://www.w3.org/2000/svg", ...icon.attrs },
      (a) => !["width", "height"].includes(a)
    ) +
    `>` +
    serialize(icon.svg) +
    `</svg>`

  let indent = 1
  jsx = jsx
    .replace(/(\/?>)(<\/?)/g, (_, gt, lt) => {
      let closing = /^\//.test(gt) || /\/$/.test(lt)
      let bothClosing = /^\//.test(gt) && /\/$/.test(lt)
      if (closing) {
        indent--
      }
      if (bothClosing) {
        indent--
      }
      let str = `${gt}\n` + "  ".repeat(Math.max(indent, 0)) + lt
      if (!closing) {
        indent++
      }
      return str
    })
    .replace(/"\/>/g, `" />`)

  if (as === "jsx") {
    return navigator.clipboard.writeText(jsx)
  }

  let svg = jsx
    .replace(/=\{([^}]+)\}/g, `="$1"`)
    .replace(
      /(\s)([a-z]+)="/gi,
      (_, ws, attr) =>
        ws +
        attr.replace(
          /([a-z])([A-Z])/g,
          (_, p1, p2) => `${p1}-${p2.toLowerCase()}`
        ) +
        `="`
    )
    .replace("view-box=", "viewBox=")

  return navigator.clipboard.writeText(svg)
}

const IconCard = React.memo(({ icon }) => {
  const [state, setState] = React.useState("idle")

  function copy(as) {
    if (state === "copied") return
    copyIcon(icon, as).then(() => {setState("copied")})
  }

  React.useEffect(() => {
    if (state === "copied") {
      const handler = window.setTimeout(() => {setState("idle")}, 1000)

      return () => {window.clearTimeout(handler)}
    }
  }, [state])

  const btnStyle = "w-1/2 py-5 hover:bg-blue-800 font-bold focus:outline-none duration-200"
  
  return (
    <li className="bg-blue-50 rounded-sm text-blue-600">
      <div className="flex flex-col items-center">
        <svg {...icon.attrs} className="mt-10">
          {icon.svg}
        </svg>
        <h3 className="text-xs mt-10 mb-10">
          {state === "copied" ? (
            "COPIED"
          ) : (
            `${icon.name}`
          )}
        </h3>
      </div>
      <div className="flex bg-blue-600 text-white text-xs">
        <button onClick={() => copy("svg")} className={btnStyle}>
          SVG
        </button>
        <button onClick={() => copy("jsx")} className={btnStyle}>
          JSX
        </button>
      </div>
    </li>
  )
})

function IconGrid({ icons, filter }) {
  const [renderAll, setRenderAll] = React.useState(false)

  React.useEffect(() => {setRenderAll(true)}, [])

  const filteredIcons = filter
    ? icons
        .filter((icon) => filter.indexOf(icon.name) !== -1)
        .sort((a, b) => filter.indexOf(a.name) - filter.indexOf(b.name))
    : icons

  return (
    <ul
      className="my-8 grid gap-8"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))" }}
    >
      {filteredIcons.slice(0, renderAll ? undefined : 38).map((icon, i) => (
        <IconCard key={icon.name} icon={icon} />
      ))}
    </ul>
  )
}

function OutboundLink(props) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function Hero() {
  const btnStyle = "px-5 py-3 text-sm rounded-sm duration-200"
  
  return (
    <section className="my-16 max-w-2xl">
      <h2 className="text-2xl font-bold">
        Open source icon set for designers &amp; developers
      </h2>
      <p className="my-10 text-justify">
        Devfont is a premium, simply and beautiful set of {iconsAll.length} open source icons for designers and developers. Each icon is designed on a 24x24 grid with an emphasis on readability, consistency, simplicity, flexibility and perfect pixels. Of course, all the icons are free for both personal and commercial use.
      </p>
      <div className="flex items-center gap-5">
        <OutboundLink
          href="https://github.com/devfont/devfont"
          className={`${btnStyle} bg-blue-600 text-white hover:bg-blue-800`}
        >
          Get started
        </OutboundLink>
        <a
          href={`https://github.com/devfont/devfont/archive/v${version}.zip`}
          className={`${btnStyle} bg-gray-100 text-gray-600 hover:bg-gray-200`}
        >
          Download v{version}
        </a>
      </div>
    </section>
  )
}

function SearchBar() {
  const inputElement = React.useRef(null)
  const [searchQuery, setSearchQuery] = React.useState("")
  const search = useStore((state) => state.search)

  function handleKeyDown(event) {
    if (event.key === "/" && inputElement.current !== document.activeElement) {
      event.preventDefault()
      inputElement.current.focus()
    }
  }

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  React.useEffect(() => {
    const handler = window.setTimeout(() => {
      search(searchQuery)
    }, 100)
    return () => {
      window.clearTimeout(handler)
    }
  }, [searchQuery])

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="sticky top-0"
    >
      <input
        type="search"
        ref={inputElement}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={`Search all ${iconsAll.length} icons (Press "/" to focus)`}
        className="p-4 w-full rounded-sm border-2 border-blue-200 font-mono text-xs bg-blue-50 text-blue-600 placeholder-blue-600 focus:outline-none focus:placeholder-blue-200 focus:border-blue-600 focus:shadow-lg"
      />
    </form>
  )
}

function NoResults() {
  const query = useStore((state) => state.query)

  return (
    <div className="my-16 text-center">
      <h3 className="text-xl font-bold mb-5 break-words">
        There are no results found for {""}
        <span className="p-2 bg-red-50 text-red-600">
          {query}
        </span>
      </h3>
      <p>
        If you have a request for an icon you can {""}
        <OutboundLink
          href={`https://github.com/devfont/devfont/issues/new?template=icon_request.md&title=${query}+icon`}
          className="text-blue-600 border-b-2 border-blue-100 hover:bg-blue-50 duration-200"
        >
          open a new GitHub issue.
        </OutboundLink>
      </p>
    </div>
  )
}

function IconContainer() {
  const filter = useStore((state) => state.filter)

  if (filter && filter.length === 0) {
    return <NoResults />
  } else {
    return <IconGrid icons={iconsAll} filter={filter} />
  }
}

export default function HomePage() {
  return (
    <Layout pageTitle="Beautiful open source icon set">
      <Hero />
      <SearchBar />
      <IconContainer />
    </Layout>
  )
}