import React from "react"
import download from "downloadjs"
import JSZip from "jszip"
import tw, { styled } from "twin.macro"

import { useIsMobile } from "@hooks"
import { logOutboundLink, logDownload, icons, iconsLength } from "@utils"
import { Logo, Button, OutboundLink } from "@components"

const StyledHero = styled.section`
  ${tw`mt-16 sm:mt-20 mb-6 sm:mb-10 max-w-2xl flex flex-col space-y-6 sm:space-y-10`}

  .ready-for {
    ${tw`w-max px-6 py-4 flex items-center space-x-6 rounded-md bg-gray-100 border-2 border-gray-200`}

    &::before {
      content: "Ready for";
      ${tw`mr-5 text-xs text-gray-400`}
    }

    svg {
      ${tw`h-5`}
    }
  }

  h1 {
    ${tw`flex flex-col`}

    &::after {
      content: "Lovingly hand-crafted";
      ${tw`w-max mt-5 text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500`}
    }
  }

  p {
    ${tw`text-justify`}

    a {
      ${tw`text-blue-500 hover:underline`}
    }
  }

  .buttons {
    ${tw`flex items-center space-x-5`}
  }
`

const generateZip = () => {
  const zip = new JSZip()

  Object.values(icons).forEach(icon =>
    zip.file(`${icon.name}.svg`, icon.toSvg())
  )

  return zip.generateAsync({ type: "blob" })
}

const author = (
  <OutboundLink
    href="https://alexperronnet.io"
    onClick={() => logOutboundLink("author")}
  >
    @alexperronnet
  </OutboundLink>
)

export default function Hero() {
  const { isMobile } = useIsMobile()
  const [generated, setGenerated] = React.useState(false)
  const [downloaded, setDownloaded] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDownloaded(false)
    }, 2500)

    return () => clearTimeout(timeout)
  }, [downloaded])

  return (
    <StyledHero>
      {!isMobile && (
        <div className="ready-for">
          <Logo name="figma" />
          <Logo name="adobe-xd" />
          <Logo name="sketch" />
        </div>
      )}
      <h1>
        Premium open source icons
      </h1>
      <p>
        Devfont is a beautiful set of {iconsLength}+ premium open source neutral-style icons elaborately crafted for designers and developers. All of the icons are free for both personal and commercial use. Made by {author}.
      </p>
      {!isMobile && (
        <div className="buttons">
          <Button
            href="https://github.com/alexperronnet/devfont"
            icon="git-branch"
            color="blue"
            onClick={() => logOutboundLink("GitHub")}
          >
            Get started
          </Button>
          <Button
            as="button"
            icon={
              generated
                ? "package"
                : `${downloaded ? "check" : "file-zip"}`
            }
            color={
              generated
                ? "yellow"
                : `${downloaded ? "green" : "gray"}`
            }
            onClick={async () => {
              setGenerated(true)
              const zip = await generateZip()
              download(zip, "devfont.zip")
              logDownload("devfont.zip")
              setGenerated(false)
              setDownloaded(true)
            }}
            disabled={generated + downloaded && "true"}
          >
            {
              generated
                ? "Creating archive"
                : `${downloaded ? "Downladed" : "Download all"}`
            }
          </Button>
        </div>
      )}
    </StyledHero>
  )
}