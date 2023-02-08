import Header from '../components/Header/Header'
// import Footer from '../components/Footer/Footer'
import Scrollbar from 'smooth-scrollbar'
import { useEffect } from 'react'
import './Layout.scss'

function Layout (props) {
  const pageContents = props.children

  useEffect(() => {
    const options = {}
    Scrollbar.init(document.getElementById('my-scrollbar'), options)
  }, [])

  return (
    <div id="my-scrollbar">
      <main>
        <Header />
        {pageContents}
        {/* <Footer /> */}
      </main>
    </div>
  )
}

export default Layout
