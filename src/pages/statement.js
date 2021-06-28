import React from "react"
import tw, { styled } from "twin.macro"

import { logOutboundLink } from "@utils"
import { Layout, Container, OutboundLink } from "@components"

const StyledSection = styled(Container)`
  ${tw`py-14 sm:py-20 flex flex-col space-y-8`}

  p {
    ${tw`text-justify sm:text-lg`}
  }

  ul {
    ${tw`list-disc list-inside flex flex-col space-y-5`}

    li {
      ${tw`sm:text-lg`}

      a {
        ${tw`hover:underline hover:text-blue-500 duration-200`}
      }
    }
  }
`

const organizations = [
  {
    title: "Black Lives Matter",
    href: "https://blacklivesmatter.com/"
  },
  {
    title: "National Bail Fund Network",
    href: "https://www.communityjusticeexchange.org/nbfn-directory/"
  },
  {
    title: "George Floyd Memorial Fund",
    href: "https://www.gofundme.com/f/georgefloyd/"
  },
  {
    title: "Advancement Project",
    href: "https://advancementproject.org/donate/"
  },
  {
    title: "Equal Justice Initiative",
    href: "https://eji.org/"
  },
  {
    title: "Know Your Rights Camp",
    href: "https://www.knowyourrightscamp.com/"
  },
  {
    title: "NAACP Legal Defense and Education Fund",
    href: "https://www.naacpldf.org/"
  }
]

export default function Statement() {
  return (
    <Layout title="Statement">
      <StyledSection as="section" size="small">
        <h1>Black Lives Matter</h1>
        <h2>I say their names</h2>
        <p>
          Darius Tarver, William Green, Samuel David Mallard, Kwame Jones, De’von Bailey, Christopher Whitfield, Anthony Hill, De’Von Bailey, Eric Logan, Jamarion Robinson, Gregory Hill Jr, JaQuavion Slaton, Ryan Twyman, Brandon Webber, Jimmy Atchison, Willie McCoy, Emantic Fitzgerald Bradford J, D’ettrick Griffin, Jemel Roberson, DeAndre Ballard, Botham Shem Jean, Robert Lawrence White, Anthony Lamar Smith, Ramarley Graham, Manuel Loggins Jr, Trayvon Martin, Wendell Allen, Kendrec McDade, Larry Jackson Jr, Jonathan Ferrell, Jordan Baker, Victor White III, Dontre Hamilton, Eric Garner, John Crawford III, Michael Brown, Ezell Ford, Dante Parker, Kajieme Powell, Laquan McDonald, Akai Gurley, Tamir Rice, Rumain Brisbon, Jerame Reid, Charly Keunang, Tony Robinson, Walter Scott, Freddie Gray, Brendon Glenn, Samuel DuBose, Christian Taylor, Jamar Clark, Mario Woods, Quintonio LeGrier, Gregory Gunn, Akiel Denkins, Alton Sterling, Philando Castile, Terrence Sterling, Terence Crutcher, Keith Lamont Scott, Alfred Olango, Jordan Edwards, Stephon Clark, Danny Ray Thomas, DeJuan Guillory, Patrick Harmon, Jonathan Hart, Maurice Granton, Julius Johnson, Jamee Johnson, Michael Dean, and many, many, many others.
        </p>
        <p>
          I acknowledge the systemic oppression of the Black community in the United States and around the world, and I raise my voices against racist practices and policing.
        </p>
        <h2>Supporting these organizations</h2>
        <ul>
          {organizations.map(organization => (
            <li key={organization.title}>
              <OutboundLink
                href={organization.href}
                onClick={() => logOutboundLink(organization.title)}
              >
                {organization.title}
              </OutboundLink>
            </li>
          ))}
        </ul>
      </StyledSection>
    </Layout>
  )
}