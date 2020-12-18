import Link from 'next/link'
import {ImWhatsapp, ImInstagram} from 'react-icons/im'


export default function IndexPage() {
  const links = [
    { href: 'https://instagram.com/mobi_leo', label: 'Instagram', icon:<ImInstagram/> },
    { href: 'https://wa.me/5521981697373?text=Oi%2C+tudo+bem%3F+Eu+gostaria+de+fazer+um+or%C3%A7amento.', label: 'Whatsapp', icon:<ImWhatsapp/> },
  ]
  
  return <div>
            <div className="min-h-screen text-yellow bg-bg flex flex-col">

            <nav className="flex w-full h-12 md:h-32 md:px-36 bg-green items-center justify-between px-1">
              <div className="text-md md:text-4xl bg- h-8 md:h-16 md:pt-2 bg-bg px-3 border-brown border-2 rounded-lg">
                mobileo.mobi</div>
              <ul className="flex xs:gap-1 md:gap-5 h-8 items-center ">
                {links.map(item=>
                <li key={item.label}className=" border-gray-400 bg-bg border-brown border-2 rounded-lg px-2"><a className="flex" href={item.href}><div className="pt-1 pr-1">{item.icon}</div><div className="">{item.label}</div></a></li>
                )}
              </ul>
            </nav>
            <main className="flex flex-1 flex-col justify-around items-center bg-bg">
                  <div className="pt-2 grid md:grid-cols-2 gap-3 items-center">
                    <img className="w-96 rounded-lg"src="https://instagram.fsdu5-1.fna.fbcdn.net/v/t51.2885-15/e35/121235323_1034363926991662_8717067879844545786_n.jpg?_nc_ht=instagram.fsdu5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=ynto3FwqmcAAX8OXyEG&tp=1&oh=fd4cfbc929222b4a1a73b120f4d4b061&oe=6000AB9A"/>
                    <img className="w-96 rounded-lg"src="https://instagram.fsdu5-1.fna.fbcdn.net/v/t51.2885-15/e35/131011939_1293549251030098_8448164086003615459_n.jpg?_nc_ht=instagram.fsdu5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Uh1AWuTSEEgAX_TsMvP&tp=1&oh=2f3712c5de4191e928ed163f4a83b448&oe=6007C57E"/>
                    <img className="w-96 rounded-lg"src="https://instagram.fsdu5-1.fna.fbcdn.net/v/t51.2885-15/e35/130556329_381807462908232_8986100931247910605_n.jpg?_nc_ht=instagram.fsdu5-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=AxPG_j5o-08AX8HYII2&tp=1&oh=270c0761b4246704ddfab82de1997dee&oe=60079D75"/>
                    <img className="w-96 rounded-lg"src="https://instagram.fsdu5-1.fna.fbcdn.net/v/t51.2885-15/e35/130968278_1096001024163994_7316578535084707412_n.jpg?_nc_ht=instagram.fsdu5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=ypH_XQmzBZIAX_ZTrZH&tp=1&oh=3738516fcd0b399d4c8cd2e852424293&oe=600530D8"/>
                  </div>
                  <ul className="flex flex-col gap-4 text-xl text-center text-yellow-900">
        <li className="" >Marcenaria personalizada</li>
            <li className="" >Madeiras maciças, MDF e compensado</li>
            <li><a className="text-sm underline flex justify-center items-center gap-1 " href="https://wa.me/5521981697373?text=Oi%2C+tudo+bem%3F+Eu+gostaria+de+fazer+um+or%C3%A7amento.">
              <ImWhatsapp /> (21) 98169-7373<br/>Solicitar orçamento
              </a></li>

        </ul>

            </main>
        <footer className="text-center py-3 text-green"> mobileo.mobi -       {new Date().getFullYear()}</footer>
                </div>
    
         </div>
}