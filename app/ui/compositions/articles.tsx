import { Article } from '../components/article'
import { Grid } from '../components/grid'
import { Heading } from '../components/typograph'

export const Articles = () => {
  return (
    <>
      <Heading
        size="subtitle"
        as="h2"
        className="mb-6 col-span-full max-w-5xl mx-auto px-9 md:px-16 text-neutral-300"
      >
        Articles
      </Heading>
      <Grid as="section" className="text-neutral-300 mb-28 gap-y-10">
        <Article
          title="Blog? Remix? How dit it start?"
          excerpt="A brief history about my website and blog."
          publishedAt="2022-03-10"
          slug="blog-remix-how-did-it-start"
          tag="remix"
        />
      </Grid>
    </>
  )
}
