import { posts } from "#site/content";
import { Footer } from "@/components/footer";
import { PostItem } from "@/components/post-item";
import { sortPosts } from "@/lib/utils";

export default function Blog() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPost = sortedPosts;

  return (
    <>
      <div className="container max-w-4xl px-6 lg:py-10">
        <div
          className="flex flex-col items-start gap-4 md:flex-row md:justify-between
    md:gap-8"
        >
          <div className="flex-1 space-y-4">
            <h1 className="inline-block font-black text-4xl lg:text-5xl">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              My rumbling on all things in investing.
            </p>
          </div>
        </div>
        <hr className="mt-8" />
        {displayPost?.length > 0 ? (
          <ul className="flex flex-col">
            {displayPost.map((post) => {
              const { slug, date, title, description, authors } = post;
              return (
                <li key={slug}>
                  <PostItem
                    slug={slug}
                    date={date}
                    title={title}
                    description={description}
                    author={authors}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Nothing to see here yet!</p>
        )}
      </div>
      <Footer />
    </>
  );
}
