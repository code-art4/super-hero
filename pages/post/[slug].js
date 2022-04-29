import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../lib/client';

function urlFor(source) {
    return imageUrlBuilder(client).image(source)
}

const Post = ({ post }) => {
    const { title = 'Missing title', name = 'Missing name', categories, image, _id } = post
    return (
        <article key={_id}>
            <h1>{title}</h1>
            <span>By {name}</span>
            {categories && (
                <ul>
                    Posted in
                    {categories.map(category => <li key={category}>{category}</li>)}
                </ul>
            )}
            {image && (
                <div>
                    <img
                        src={urlFor(image)
                            .width(50)
                            .url()}
                    />
                </div>
            )}
        </article>
    )
}

const query = groq`*[_type == "superhero" && slug.current == $slug][0]{
  name, "gender": appearance{
        gender
    }, image, _id
}`

export async function getStaticPaths() {
    const paths = await client.fetch(
        groq`*[_type == "superhero" && defined(slug.current)][].slug.current`
    )

    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: true,
    }
}

export async function getStaticProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = "" } = context.params
    const post = await client.fetch(query, { slug })
    return {
        props: {
            post
        }
    }
}
export default Post