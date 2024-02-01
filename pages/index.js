import Image from "next/image";
import { GraphQLClient, gql } from "graphql-request";
import NewsCard from "@/components/NewsCard";
import HeroSection from "@/components/HeroSection";

const graphcms = new GraphQLClient('https://api-ap-northeast-1.hygraph.com/v2/clrvjrjf20fz801w66jsp5lh9/master');

const QUERY = gql `
query MyQuery {
  posts {
    slug
    title
    author
    description
    tags
    publishDate
    content {
      markdown
    }
    coverImage {
      url
    }
  }
}
`

export async function getStaticProps() {
  const {posts} = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}

export default function Home({posts}) {
  return (
    <div>
      <HeroSection posts={posts} />
      <div className="flex flex-wrap gap-2 justify-between p-1 w-screen md:w-[900px] mx-auto">
        {posts.map((post) => (
          <NewsCard description={post.description} author={post.author} title={post.title} coverImage={post.coverImage.url} tags={post.tags} date={post.publishDate}/>
      ))}
      </div>
    </div>
  );
}
