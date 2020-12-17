import Link from 'next/link'
import {ImWhatsapp, ImInstagram} from 'react-icons/im'
const links = [
  { href: 'https://instagram.com/mobi_leo', label: 'Instagram', icon:<ImInstagram/> },
  { href: 'https://wa.me/5521981697373?text=Oi%2C+tudo+bem%3F+Eu+gostaria+de+fazer+um+or%C3%A7amento.', label: 'Whatsapp', icon:<ImWhatsapp/> },
]

export default function Nav() {
  return (
    <nav className=" bg-black px-6 p-4">
      <ul className="flex items-center justify-around">
        <li>
          <Link href="/">
            <a className="rounded px-2 text-gray-200 border-gray-500 border-4 md:text-4xl no-underline">
              mobileo.mobi
            </a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-4">
          {links.map(({ href, label, icon }) => (
            <li className="text-gray-500" key={`${href}${label}`}>
              <a href={href} className="flex flex-row no-underline align-middle">

               <div className="mt-1">{icon}</div> <div className="pl-2">
                              {label}
                              </div>
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  )
}
