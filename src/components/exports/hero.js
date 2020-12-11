import React from "react"
import JSZip from "jszip"
import download from "downloadjs"
import { toast } from "react-toastify"
import tw, { styled } from "twin.macro"

import { useIsMobile } from "@hooks"
import { OutboundLink, PageTitle, Text, Icon, Button } from "@components"
import {
  eventOutbound,
  eventDownload,
  icons,
  version,
  iconsCount
} from "@utils"

export const Hero = () => {
  const { isMobile } = useIsMobile()

  return (
    <StyledHero>
      <PageTitle small="true">
        Open source icon set for designers &amp; developers
      </PageTitle>
      <Text small="true">
        Devfont is a beautiful set of premium open source neutral-style icons
        elaborately crafted for designers and developers. All of the icons are
        free for both personal and commercial use. Made by <Author />.
      </Text>
      {!isMobile && (
        <Stats.Wrapper>
          <Stats.Item>
            <Icon name="vector-beizer-02" />
            <span>{iconsCount} Icons</span>
          </Stats.Item>
          <Stats.Item>
            <Icon name="license" />
            <span>MIT Licensed</span>
          </Stats.Item>
          <Stats.Item>
            <Icon name="package" />
            <span>Version {version}</span>
          </Stats.Item>
        </Stats.Wrapper>
      )}
      {!isMobile && (
        <Buttons>
          <Button
            as={OutboundLink}
            blue="true"
            icon="git-branch"
            value="Get started"
            href="https://github.com/alexperronnet/devfont"
            onClick={() => eventOutbound("GitHub Homepage")}
          />
          <Button
            as="button"
            secondary="true"
            icon="arrow-fat-lines-down"
            value="Download all"
            onClick={async () => {
              const zip = await generateZip()
              download(zip, "devfont.zip")
              eventDownload("devfont.zip")
              toast.success("🎉 devfont.zip downloaded!")
            }}
          />
        </Buttons>
      )}
    </StyledHero>
  )
}

const Author = () => (
  <StyledLink
    href="https://alexperronnet.io"
    onClick={() => eventOutbound("alexperronnet.io")}
  >
    @alexperronnet
  </StyledLink>
)

const generateZip = () => {
  const zip = new JSZip()

  Object.values(icons).forEach(icon =>
    zip.file(`${icon.name}.svg`, icon.toSvg())
  )

  return zip.generateAsync({ type: "blob" })
}

const StyledHero = styled.section`
  ${tw`max-w-2xl my-12 sm:my-20 space-y-8 sm:space-y-10`}
`

const StyledLink = styled(OutboundLink)`
  ${tw`text-secondary hover:underline`}
`

const Stats = {
  Wrapper: styled.div`
    ${tw`flex space-x-8 items-center`}
  `,

  Item: styled.div`
    ${tw`flex space-x-3 items-center text-sm`}

    svg {
      ${tw`w-5 h-5`}
    }
  `
}

const Buttons = styled.div`
  ${tw`flex space-x-5 items-center`}
`
