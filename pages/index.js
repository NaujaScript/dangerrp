import Nav from '../components/Nav'
import Showcase from '../components/Showcase'
import Ad from '../components/Ad'
import About from '../components/About'
import Transport from '../components/Transport'
import Footer from '../components/Footer'
import IndexPage from '../components/IndexPage'

export default function Home() {
  return (
    <body className="bg-navy-blue">
      <header>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" />
        <div>
          <IndexPage></IndexPage>
          <Nav></Nav>
          <Showcase></Showcase>
          <Ad></Ad>
          <About></About>
          <Transport></Transport>
          <Footer></Footer>
        </div>
      </header>
    </body>
  )
}