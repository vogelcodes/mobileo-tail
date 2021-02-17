import Link from 'next/link'
import {ImWhatsapp, ImInstagram} from 'react-icons/im'


export default function IndexPage() {
  const links = [
    { href: 'https://instagram.com/mobi_leo', label: 'Instagram', icon:<ImInstagram/> },
    { href: 'https://wa.me/5521981697373?text=Oi%2C+tudo+bem%3F+Eu+gostaria+de+fazer+um+or%C3%A7amento.', label: 'Whatsapp', icon:<ImWhatsapp/> },
  ]
  
  return <div>
      <Head>
        <title>Mobileo.mobi | Marcenaria Personalizada</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <div className="min-h-screen text-gray-200 bg-bg flex flex-col">

            <nav className="flex w-full h-12 lg:h-32 md:px-36 bg-green items-center justify-between px-4">
              <div className="text-md lg:text-4xl h-8 lg:h-16 lg:pt-2 button-bg px-3 border-brown border-2 rounded-lg">
                <div className="shadow-md">
                  
                  mobileo.mobi</div>
                  </div>
              <ul className="flex gap-1 md:gap-5 h-8 items-center ">
                {links.map(item=>
                <li key={item.label}className="button-bg border-gray-400 border-brown border-2 rounded-lg px-2"><a className="flex" href={item.href}><div className="p-1">{item.icon}</div><div className="hidden sm:block">{item.label}</div></a></li>
                )}
              </ul>
            </nav>
            <main className="flex flex-1 flex-col button-bg justify-around items-center bg-bg">
                  <div className="p-2 grid md:grid-cols-2 gap-3 items-center">
                    <img className="w-96 rounded-lg shadow-lg"src="/1.jpg"/>
                    <img className="w-96 rounded-lg shadow-lg"src="/2.jpg"/>
                    <img className="w-96 rounded-lg shadow-lg"src="/3.jpg"/>
                    <img className="w-96 rounded-lg shadow-lg"src="/4.jpg"/>
                  </div>
                  <ul className="flex flex-col py-4 gap-4 text-xl text-center text-yellow-900">
        <li className="shadow-lg" >Marcenaria personalizada</li>
            <li className="shadow-lg" >Madeiras maciças, MDF e compensado</li>
            <li className="shadow-lg"><a className="text-sm underline flex justify-center items-center gap-1 " href="https://wa.me/5521981697373?text=Oi%2C+tudo+bem%3F+Eu+gostaria+de+fazer+um+or%C3%A7amento.">
              <ImWhatsapp /> (21) 98169-7373<br/>Solicitar orçamento
              </a></li>

        </ul>

            </main>
        <footer className="text-center py-3 text-green"> mobileo.mobi -       {new Date().getFullYear()}</footer>
                </div>
    
         </div>
}