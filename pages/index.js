import Head from 'next/head'
import Link from 'next/link'
import groq from 'groq'
import client from '../lib/client';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const Index = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>SupaH</title>
        <meta name="description" content="each website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=My+Soul&family=Roboto:wght@300;400;700&family=Whisper&display=swap" rel="stylesheet" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <header className="text-5xl text-center font-logo border-b py-6">SupaH</header>

      <main>
        <div className="max-w-[1500px] mx-auto mt-10 flex flex-wrap gap-y-[5rem] gap-x-2 items-center justify-evenly">
          {posts.length > 0 && posts.map(post => {
            return <div key={post._id} className="flex flex-col w-[490px] border rounded-xl overflow-hidden group hover:scale-[101%]" style={{
              transition: "all .5s ease-in-out"
            }}>
              <img
                src={urlFor(post.image)}
                alt={post.name}
                width={490}
                height={400}
                className="object-cover w-auto h-auto peer"
              />
              <div className="group-hover:px-4 group-hover:py-4 flex flex-col w-[0px] h-[0px] group-hover:w-[max-content] group-hover:h-[max-content]" style={{
                transition: "all .5s ease-in-out"
              }}>
                <span className="text-2xl font-light"><strong>{post.name}</strong></span>
                {/* <span className="font-light mt-3">Category: <br />{post.slug}</span> */}
              </div>
            </div>
          }
          )}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
      *[_type == "superhero"]{
  name, "gender": appearance{
        gender
    }, "image": image, _id, slug
}`)
  return {
    props: {
      posts
    }
  }
}

export default Index