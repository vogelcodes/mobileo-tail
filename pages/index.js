import Link from 'next/link'
import {ImWhatsapp, ImInstagram} from 'react-icons/im'


export default function IndexPage() {
  const links = [
    { href: 'https://instagram.com/mobi_leo', label: 'Instagram', icon:<ImInstagram/> },
    { href: 'https://wa.me/5521981697373?text=Oi%2C+tudo+bem%3F+Eu+gostaria+de+fazer+um+or%C3%A7amento.', label: 'Whatsapp', icon:<ImWhatsapp/> },
  ]
  
  return <div>
            <div className="min-h-screen text-yellow bg-bg flex flex-col">

            <nav className="flex w-full h-12 md:h-32 md:px-36 bg-green items-center justify-between px-2">
              <div className="text-md md:text-4xl bg- h-8 md:h-16 md:pt-2 bg-bg px-3 border-brown border-2 rounded-lg">
                mobileo.mobi</div>
              <ul className="flex gap-2 md:gap-5 h-8 items-center ">
                {links.map(item=>
                <li key={item.label}className=" border-gray-400 bg-bg border-brown border-2 rounded-lg px-2"><a className="flex" href={item.href}><div className="pt-1 pr-1">{item.icon}</div><div className="">{item.label}</div></a></li>
                )}
              </ul>
            </nav>
            <main className="flex flex-1 flex-col justify-around items-center bg-bg">
                  <div className="">
                    <img className="w-96"src="https://instagram.fsdu5-1.fna.fbcdn.net/v/t51.2885-15/e35/121235323_1034363926991662_8717067879844545786_n.jpg?_nc_ht=instagram.fsdu5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=ynto3FwqmcAAX8OXyEG&tp=1&oh=fd4cfbc929222b4a1a73b120f4d4b061&oe=6000AB9A"/>
                  </div>
                  <ul className="flex flex-col gap-4 text-xl text-center text-yellow-900">
        <li className="" >Marcenaria personalizada</li>
            <li className="" >Madeiras maciças, MDF e compensado</li>
            <li><a className="flex justify-center items-center gap-1 " href="https://wa.me/5521981697373?text=Oi%2C+tudo+bem%3F+Eu+gostaria+de+fazer+um+or%C3%A7amento.">
              <ImWhatsapp /> (21) 98169-7373
              </a></li>

        </ul>

            </main>
        <footer className="text-center pb-3"> mobileo.mobi -       {new Date().getFullYear()}</footer>
                </div>
    
         </div>
}