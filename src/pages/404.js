import Link from "next/link"
import Layout from "@components/layout"

export default function NotFoundPage() {
  const linkStyle = "text-blue-600 border-b-2 border-blue-100 hover:bg-blue-50 duration-200"

  return (
    <Layout pageTitle="Page Not Found">
      <section className="my-16 max-w-2xl">
        <h2 className="text-5xl text-red-600 font-bold mb-10">
          Error #404
        </h2>
        <h3 className="text-xl font-bold mb-3">
          The page cannot be found
        </h3>
        <p>
          You just hit a route that doesn't exist... the sadness. If you think something has gone wrong, feel free to drop me an email at {""}
          <a href="mailto:alex@alexperronnet.io" className={linkStyle}>
            alex@alexperronnet.io
          </a>
          {""} or {""}
          <Link href="/">
            <a className={linkStyle}>
              click this to go back home
            </a>
          </Link>.
        </p>
      </section>
    </Layout>
  )
}