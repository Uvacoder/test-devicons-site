import Link from "next/link"
import Layout from "@components/layout"

function OutboundLink(props) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export default function StatementPage() {
  const linkStyle = "text-blue-600 border-b-2 border-blue-100 hover:bg-blue-50 duration-200"

  return (
    <Layout pageTitle="Black Lives Matter">
      <section className="my-16 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">
          <OutboundLink href="https://blacklivesmatter.com" className={linkStyle}>
            Black Lives Matter
          </OutboundLink>
        </h2>
        <h3 className="text-xl font-bold mb-10">
          <OutboundLink href="https://www.gofundme.com/f/georgefloyd" className={linkStyle}>
            George Floyd
          </OutboundLink>
        </h3>
        <p className="mb-10 text-justify">
          Tony McDade, Yassin Mohamed, Finan H. Berhe, Sean Reed, Steven Demarco Taylor, Breonna Taylor, Ariane McCree, Terrance Franklin, Miles Hall, Darius Tarver, William Green, Samuel David Mallard, Kwame Jones, De’von Bailey, Christopher Whitfield, Anthony Hill, De’Von Bailey, Eric Logan, Jamarion Robinson, Gregory Hill Jr, JaQuavion Slaton, Ryan Twyman, Brandon Webber, Jimmy Atchison, Willie McCoy, Emantic Fitzgerald Bradford J, D’ettrick Griffin, Jemel Roberson, DeAndre Ballard, Botham Shem Jean, Robert Lawrence White, Anthony Lamar Smith, Ramarley Graham, Manuel Loggins Jr, Trayvon Martin, Wendell Allen, Kendrec McDade, Larry Jackson Jr, Jonathan Ferrell, Jordan Baker, Victor White III, Dontre Hamilton, Eric Garner, John Crawford III, Michael Brown, Ezell Ford, Dante Parker, Kajieme Powell, Laquan McDonald, Akai Gurley, Tamir Rice, Rumain Brisbon, Jerame Reid, Charly Keunang, Tony Robinson, Walter Scott, Freddie Gray, Brendon Glenn, Samuel DuBose, Christian Taylor, Jamar Clark, Mario Woods, Quintonio LeGrier, Gregory Gunn, Akiel Denkins, Alton Sterling, Philando Castile, Terrence Sterling, Terence Crutcher, Keith Lamont Scott, Alfred Olango, Jordan Edwards, Stephon Clark, Danny Ray Thomas, DeJuan Guillory, Patrick Harmon, Jonathan Hart, Maurice Granton, Julius Johnson, Jamee Johnson, Michael Dean...
        </p>
        <p className="mb-10 text-justify">
          I believes that Black Lives Matter. <b>To be silent is to be complicit</b>. It is my responsibility and my honor to use my platform to amplify the voices of the oppressed and marginalized.
        </p>
        <p className="mb-16 text-justify">
          Organizations that could use your financial support include {""}
          <OutboundLink href="https://blacklivesmatter.com" className={linkStyle}>
            Black Lives Matter
          </OutboundLink>, the {""}
          <OutboundLink href="https://www.naacpldf.org" className={linkStyle}>
            NAACP Legal Defense and Educational Fund
          </OutboundLink>, the {""}
          <OutboundLink href="https://eji.org" className={linkStyle}>
            Equal Justice Initiative
          </OutboundLink>, {""}
          <OutboundLink href="https://colorofchange.org" className={linkStyle}>
            Color of Change
          </OutboundLink> and the {""}
          <OutboundLink href="https://www.gofundme.com/f/georgefloyd" className={linkStyle}>
            George Floyd Memorial Fund.
          </OutboundLink>
        </p>
        <Link href="/">
          <a className={linkStyle}>
            Click this to go back home.
          </a>
        </Link>
      </section>
    </Layout>
  )
}