import Link from 'next/link'
import {ImWhatsapp, ImInstagram} from 'react-icons/im'


export default function IndexPage() {
  const links = [
    { href: 'https://instagram.com/mobi_leo', label: 'Instagram', icon:<ImInstagram/> },
    { href: 'https://wa.me/5521981697373?text=Oi%2C+tudo+bem%3F+Eu+gostaria+de+fazer+um+or%C3%A7amento.', label: 'Whatsapp', icon:<ImWhatsapp/> },
  ]
  
  return <div>
            <div className="min-h-screen flex flex-col">

            <nav className="flex w-full h-12 md:h-32 md:px-36 bg-yellow-900 items-center justify-between px-2">
              <div className="text-md md:text-4xl bg-gray-200 h-8 md:h-16 md:pt-2 px-3 border-yellow-900 border-2 rounded-lg">mobileo.mobi</div>
              <ul className="flex gap-1 h-8 items-center ">
                {links.map(item=>
                <li className=" border-gray-400 bg-gray-200 rounded px-2"><a className="flex" href={item.href}><div className="pt-1 pr-1">{item.icon}</div><div className="">{item.label}</div></a></li>
                )}
              </ul>
            </nav>
            <main className="flex flex-1 flex-col justify-between items-center bg-yellow-200">
                  <div className="pt-8 md:pt-16">
                    <img className="w-96"src="https://instagram.fsdu5-1.fna.fbcdn.net/v/t51.2885-15/e35/121235323_1034363926991662_8717067879844545786_n.jpg?_nc_ht=instagram.fsdu5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=ynto3FwqmcAAX8OXyEG&tp=1&oh=fd4cfbc929222b4a1a73b120f4d4b061&oe=6000AB9A"/>
                  </div>
                  <ul className="text-xl text-center text-yellow-900 mt-4">
        <li className="" >Marcenaria personalizada</li>
            <li className="" >Madeiras maciças, MDF e compensado</li>
            <li><a className="flex justify-center items-center gap-1 " href="https://wa.me/5521981697373?text=Oi%2C+tudo+bem%3F+Eu+gostaria+de+fazer+um+or%C3%A7amento.">
              <ImWhatsapp /> (21) 98169-7373
              </a></li>

        </ul>
        <footer> mobileo.mobi -       {new Date().getFullYear()}</footer>

            </main>
                </div>
    
         </div>
}