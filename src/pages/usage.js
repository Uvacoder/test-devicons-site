import React from "react"
import Prism from "prismjs"
import tw, { styled } from "twin.macro"

import { logOutboundLink, iconsLength } from "@utils"
import { Container, Layout, OutboundLink, Code } from "@components"

const StyledSection = styled(Container)`
  ${tw`py-14 sm:py-20 flex flex-col space-y-8`}

  .section {
    ${tw`flex flex-col space-y-5`}

    p {
      ${tw`text-justify`}
    }

    a {
      ${tw`text-blue-500 hover:underline`}
    }
  }
`

const author = (
  <OutboundLink
    href="https://alexperronnet.io"
    onClick={() => logOutboundLink("author")}
  >
    @alexperronnet
  </OutboundLink>
)

const github = (
  <OutboundLink
    href="https://github.com/alexperronnet/devfont"
    onClick={() => logOutboundLink("GitHub")}
  >
    GitHub
  </OutboundLink>
)

const devfont = (
  <OutboundLink
    href="https://unpkg.com/devfont/dist/devfont.js"
    onClick={() => logOutboundLink("devfont.js")}
  >
    devfont.js
  </OutboundLink>
)

const devfontMin = (
  <OutboundLink
    href="https://unpkg.com/devfont/dist/devfont.min.js"
    onClick={() => logOutboundLink("devont.min.js")}
  >
    devfont.min.js
  </OutboundLink>
)

const sprite = (
  <OutboundLink
    href="https://unpkg.com/devfont/dist/devfont-sprite.svg"
    onClick={() => logOutboundLink("sprite")}
  >
    devfont-sprite.svg
  </OutboundLink>
)

const guidelines = (
  <OutboundLink
    href="https://github.com/alexperronnet/devfont/blob/master/contributing.md"
    onClick={() => logOutboundLink("contribution guidelines")}
  >
    contribution guidelines
  </OutboundLink>
)

const license = (
  <OutboundLink
    href="https://github.com/alexperronnet/devfont/blob/master/license.md"
    onClick={() => logOutboundLink("License")}
  >
    MIT License
  </OutboundLink>
)

const snippet = {
  npm: "npm install devfont",
  yarn: "yarn add devfont",
  script: `<script src="path/to/dist/devfont.js" />`,
  cdn: `<script src="https://unpkg.com/devfont" />`,
  use: `<i data-devfont="circle" />`,
  require: `const devfont = require("devfont")`,
  replace: `<script>
  devfont.replace()
</script>`,
  html: `<!DOCTYPE html>
<html lang="en">
  <script src="https://unpkg.com/devfont" />
  <body>

    <!-- example icon -->
    <i data-devfont="circle" />

    <script>
      devfont.replace()
    </>
  </body>
</html>`,
  use2: `devfont.icons.x
// {
//    name: "x",
//    contents: "<line ... /><line ... />",
//    tags: ["cancel", "close", "delete", "remove"],
//    attrs: {
//      class: "devfont devfont-x",
//      xmlns: "http://www.w3.org/2000/svg",
//      width: 24,
//      height: 24,
//      viewBox: "0 0 24 24",
//      fill: "none",
//      stroke: "currentColor",
//      "stroke-width": 2,
//      "stroke-linecap": "round",
//      "stroke-linejoin": "round",
//    },
//    toSvg: [Function],
// }

devfont.icons.x.toSvg()
// <svg class="devfont devfont-x" ...><line ... /><line ... /></svg>

devfont.icons.x.toSvg({ class: "foo bar", "stroke-width": 1, color: "red" })
// <svg class="devfont devfont-x foo bar" stroke-width="1" color="red" ...><line ... /><line ... /></svg>
`,
  use3: `<svg
  width="24"
  height="24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <use xlink:href="path/to/devfont-sprite.svg#circle"/>
</svg>
`,
  css: `.devfont {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
`,
  class: `<svg class="devfont">
  <use xlink:href="path/to/dist/devfont-sprite.svg#circle"/>
</svg>
`
}

export default function Usage() {
  React.useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <Layout title="Get started">
      <StyledSection as="section" size="small">
        <div className="section">
          <h1>What is Devfont?</h1>
          <p>
            Devfont is a open source icon set with {iconsLength}+ hand crafted icons. Devfont was made with love by {author}. Please take a second to star this project on {github}.
          </p>
        </div>
        <div className="section">
          <h2>Quick start</h2>
          <p>
            Simply copy and paste the following code snippet into a blank HTML file to begin prototyping with Devfont.
          </p>
          <Code language="html" snippet={snippet.html} />
        </div>
        <div className="section">
          <h2>Usage</h2>
          <p>
            At its core, Devfont is a collection of SVG files. This means that you can use Devfont in all the same ways you can use SVGs (e.g. img, background-image, inline, object, embed, iframe).
          </p>
          <p>
            The following are additional ways you can use Devfont.
          </p>
          <h3>Client-side JavaScript</h3>
          <h4>
            1. Install
          </h4>
          <Code language="bash" snippet={snippet.npm} />
          <Code language="bash" snippet={snippet.yarn} />
          <p>
            Or just copy {devfont} or {devfontMin} into your project directory.
          </p>
          <h4>
            2. Include
          </h4>
          <Code language="html" snippet={snippet.script} />
          <p>Or load the script from a CDN provider</p>
          <Code language="html" snippet={snippet.cdn} />
          <p>After including the script, Devfont will be available as a global variable.</p>
          <h4>
            3. Use
          </h4>
          <p>
            To use an icon on your page, add a data-devfont attribute with the icon name to an element:
          </p>
          <Code language="html" snippet={snippet.use} />
          <h4>
            4. Replace
          </h4>
          <p>
            Call the devfont.replace() method:
          </p>
          <Code language="html" snippet={snippet.replace} />
          <p>
            All elements that have a data-devfont attribute will be replaced with SVG markup corresponding to their data-devfont attribute value.
          </p>
          <h3>Node</h3>
          <h4>1. Install</h4>
          <Code language="bash" snippet={snippet.npm} />
          <Code language="bash" snippet={snippet.yarn} />
          <h4>2. Require</h4>
          <Code language="javascript" snippet={snippet.require} />
          <h4>3. Use</h4>
          <Code language="javascript" snippet={snippet.use2} />
          <h3>SVG Sprite</h3>
          <h4>1. Install</h4>
          <Code language="bash" snippet={snippet.npm} />
          <Code language="bash" snippet={snippet.yarn} />
          <p>
            Or just copy {sprite} into your project directory.
          </p>
          <h4>2. Use</h4>
          <Code language="html" snippet={snippet.use3} />
          <p>However, this markup can be simplified using a simple CSS class to avoid repetition of SVG attributes between icons:</p>
          <Code language="css" snippet={snippet.css} />
          <Code language="html" snippet={snippet.class} />
          <h2>Contributing</h2>
          <p>
            For more informations on how to contribute to Devfont project please see the {guidelines}.
          </p>
          <h2>License</h2>
          <p>
            Devfont is licensed under the {license}. All the icons are free for both personal and commercial use.
          </p>
        </div>
      </StyledSection>
    </Layout>
  )
}