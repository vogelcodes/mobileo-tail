import Container from './container'

export default function Footer() {
  return (
    <footer className=" text-gray-500">
      <Container>
        <div className="flex pt-4 flex-col align-bottom">
            <a
              href={'https://instagram.com/mobi_leo'}
              className="text-center mx-3 font-bold hover:underline "
            >
                      mobileo.mobi -       {new Date().getFullYear()}

            </a>
          </div>
      </Container>
    </footer>
  )
}
