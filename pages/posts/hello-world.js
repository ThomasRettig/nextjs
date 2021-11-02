import Head from 'next/head'
import Link from 'next/link'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Hello, world!</title>
      </Head>
      <h1>Hello, world!</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
