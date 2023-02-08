import Layout from '../../layout/Layout'
import ProjectCards from '../../components/ProjectCards/ProjectCards'
import Contact from '../../components/Contact/Contact'

function Home () {
  return (
    <Layout>
      <h1>
        I&apos;m Ashley, <br />a web developer.
      </h1>
      <ProjectCards />
      <Contact />
    </Layout>
  )
}

export default Home
