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
      {/* {posts.map((post) => (
        <NewsCard slug={post.slug} title={post.title} description={post.description} coverImage={post.coverImage}/>
      ))} */}
      
    </div>
  );
}
