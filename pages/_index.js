import Nav from '../components/nav'
import Container from '../components/container'
import Main from '../components/main'
import Footer from '../components/footer'
import Image from 'next/image'

export default function IndexPage() {
  return (
    <div className="container">
      <Nav />
      <Container>
      <Main/>
      <Footer/>
        </Container>
        
    </div>
  )
}
