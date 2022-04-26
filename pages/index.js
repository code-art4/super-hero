/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import Link from 'next/Link'
import Image from 'next/image';
import { superheroList } from '../data/superHeroList';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SupaH</title>
        <meta name="description" content="Superhero website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=My+Soul&family=Roboto:wght@300;400;700&family=Whisper&display=swap" rel="stylesheet" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <header className="text-5xl text-center font-logo border-b py-6">SupaH</header>

      <main>
        <div className="max-w-[1500px] mx-auto mt-10 flex flex-wrap gap-y-[5rem] gap-x-2 items-center justify-evenly">
          {superheroList.map(superHero => {
            return <div key={superHero.id} className="flex flex-col w-[490px] border rounded-xl overflow-hidden group hover:scale-[101%] transition duration-1000 ease-in-out"><Image
              src={superHero.image}
              alt={superHero.name}
              width={490}
              height={400}
              className="object-cover w-auto h-auto peer"              
            />
              <div className="group-hover:px-4 group-hover:py-4 flex-col w-[0px] h-[0px] group-hover:w-[max-content] group-hover:h-[max-content] group-hover:flex transition-[height] duration-1000 ease-in-out">
              <span className="text-2xl font-light"><strong>{superHero.name}</strong></span>
              <span className="font-light mt-3">{superHero.category}</span>
              </div>
            </div>
          })}                       
        </div>
      </main>

      <footer>
        Made by
        <Link href="https://codeart4.com">
          <a className="font-whisper text-blue text-2xl ml-2">code_art4</a>
        </Link>
      </footer>
    </div>
  )
}
