import { CompanyIcon } from "src/components/CompanyIcon";
import client from "src/graphql/client";
import { GetPostsQuery } from "src/graphql/generated/graphql";
import { GET_POSTS } from "src/graphql/queries";

const getPosts = async () => {
  const posts = await client.request<GetPostsQuery>(GET_POSTS);

  return posts;
};

export default async function Posts() {
  const { posts } = await getPosts();

  return (
    <>
      <main className="max-w-screen-lg mx-auto px-4">
        <section className=" py-24 flex flex-col justify-center border-b">
          <div className="flex items-end justify-center gap-4">
            <h1 className="font-bold text-zinc-90 text-6xl lg:text-9xl">
              Posts
            </h1>
          </div>
        </section>

        <section className="py-16 flex flex-col gap-8">
          <div className="py-8 grid grid-cols-4 gap-8"></div>
        </section>
      </main>
    </>
  );
}
