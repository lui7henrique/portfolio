import client from "src/graphql/client";
import { GetPostsQuery } from "src/graphql/generated/graphql";
import { GET_POSTS } from "src/graphql/queries";
import { BlogSectionPostCard } from "../BlogSectionPostCard";
import Link from "next/link";

const getPosts = async () => {
  try {
    const { posts } = await client.request<GetPostsQuery>(GET_POSTS);
    return posts;
  } catch {
    throw new Error("Error fetching posts.");
  }
};

export const BlogSection = async () => {
  const posts = await getPosts();

  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-screen-lg mx-auto px-4 ">
        <h3 className="text-3xl font-bold text-zinc-50">Blog</h3>

        <section className="mt-8 grid grid-cols-3 gap-6">
          {posts.reverse().map((post, index) => {
            const isFirst = index === 0;

            const delay = String(index * 200 + 200);
            const position = isFirst ? "fade-up" : "fade-right";

            return (
              <Link
                href={`/blog/${post.slug}`}
                className={isFirst ? "col-span-3" : ""}
                key={post.id}
              >
                <BlogSectionPostCard
                  post={post}
                  layout={isFirst ? "horizontal" : "vertical"}
                />
              </Link>
            );
          })}
        </section>
      </div>
    </section>
  );
};
