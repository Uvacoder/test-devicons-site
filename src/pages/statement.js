import React from "react"
import tw, { styled } from "twin.macro"

import { eventOutbound } from "@utils"
import {
  Wrapper,
  ContainerSmall,
  PageTitle,
  PageSubtitle,
  Text,
  OutboundLink
} from "@components"

const Statement = () => (
  <Wrapper title="Statement">
    <ContainerSmall>
      <PageTitle>Black Lives Matter</PageTitle>
      <PageSubtitle>I say their names</PageSubtitle>
      <Text big="true">
        George Floyd, Tony McDade, Yassin Mohamed, Finan H. Berhe, Sean Reed,
        Steven Demarco Taylor, Breonna Taylor, Ariane McCree, Terrance Franklin,
        Miles Hall, Darius Tarver, William Green, Samuel David Mallard, Kwame
        Jones, De’von Bailey, Christopher Whitfield, Anthony Hill, De’Von
        Bailey, Eric Logan, Jamarion Robinson, Gregory Hill Jr, JaQuavion
        Slaton, Ryan Twyman, Brandon Webber, Jimmy Atchison, Willie McCoy,
        Emantic Fitzgerald Bradford J, D’ettrick Griffin, Jemel Roberson,
        DeAndre Ballard, Botham Shem Jean, Robert Lawrence White, Anthony Lamar
        Smith, Ramarley Graham, Manuel Loggins Jr, Trayvon Martin, Wendell
        Allen, Kendrec McDade, Larry Jackson Jr, Jonathan Ferrell, Jordan Baker,
        Victor White III, Dontre Hamilton, Eric Garner, John Crawford III,
        Michael Brown, Ezell Ford, Dante Parker, Kajieme Powell, Laquan
        McDonald, Akai Gurley, Tamir Rice, Rumain Brisbon, Jerame Reid, Charly
        Keunang, Tony Robinson, Walter Scott, Freddie Gray, Brendon Glenn,
        Samuel DuBose, Christian Taylor, Jamar Clark, Mario Woods, Quintonio
        LeGrier, Gregory Gunn, Akiel Denkins, Alton Sterling, Philando Castile,
        Terrence Sterling, Terence Crutcher, Keith Lamont Scott, Alfred Olango,
        Jordan Edwards, Stephon Clark, Danny Ray Thomas, DeJuan Guillory,
        Patrick Harmon, Jonathan Hart, Maurice Granton, Julius Johnson, Jamee
        Johnson, Michael Dean, and many, many, many others.
      </Text>
      <Text big="true">
        I acknowledge the systemic oppression of the Black community in the
        United States and around the world, and I raise my voices against racist
        practices and policing.
      </Text>
      <PageSubtitle>Supporting these organizations</PageSubtitle>
      <List.Wrapper>
        {organizations.map(organization => (
          <List.Item key={organization.title}>
            <StyledLink
              href={organization.href}
              onClick={() => eventOutbound(organization.title)}
            >
              {organization.title}
            </StyledLink>
          </List.Item>
        ))}
      </List.Wrapper>
    </ContainerSmall>
  </Wrapper>
)

const organizations = [
  {
    title: "Black Lives Matter",
    href: "https://blacklivesmatter.com"
  },
  {
    title: "National Bail Fund Network",
    href: "https://www.communityjusticeexchange.org/nbfn-directory"
  },
  {
    title: "George Floyd Memorial Fund",
    href: "https://www.gofundme.com/f/georgefloyd"
  },
  {
    title: "Advancement Project",
    href: "https://advancementproject.org/donate"
  },
  {
    title: "Equal Justice Initiative",
    href: "https://eji.org"
  },
  {
    title: "Know Your Rights Camp",
    href: "https://www.knowyourrightscamp.com"
  },
  {
    title: "NAACP Legal Defense and Education Fund",
    href: "https://www.naacpldf.org"
  }
]

const List = {
  Wrapper: styled.ul`
    ${tw`list-disc space-y-3`}
  `,

  Item: styled.li`
    ${tw`sm:text-lg`}

    &::marker {
      ${tw`text-secondary`}
    }
  `
}

const StyledLink = styled(OutboundLink)`
  ${tw`underline hover:text-secondary`}
`

export default Statement
