import Image from 'next/image'
import Link from 'next/link'
export default function Main() {
  return (
    <section className="flex-col flex items-center mt-16">
            <Link href="https://instagram.com/mobi_leo">

            <Image
            className="cursor-pointer"
        layout="fixed"
        src="https://instagram.fsdu5-1.fna.fbcdn.net/v/t51.2885-15/e35/121235323_1034363926991662_8717067879844545786_n.jpg?_nc_ht=instagram.fsdu5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=ynto3FwqmcAAX8OXyEG&tp=1&oh=fd4cfbc929222b4a1a73b120f4d4b061&oe=6000AB9A"
        alt="Deixe a rua la fora, tire seus sapatos"
        width={460}
        height={460}
        />
        </Link>
        
        <ul className="mt-4">
        <li className="text-gray-300 text-center" >Marcenaria personalizada</li>
            <li className="text-gray-300 text-center" >Madeiras maciças, MDF e compensado</li>
        </ul>

    </section>
  )
}
