import { posts } from "#site/content";
import { Footer } from "@/components/footer";
import { PostItem } from "@/components/post-item";
import { sortPosts } from "@/lib/utils";
import { QueryPagination } from "@/components/query-pagination";

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default function Blog({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;

  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPost = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  return (
    <>
      <div className="container max-w-4xl px-6 lg:py-10 space-y-6 md:mt-24 mt-24">
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

        <QueryPagination
          totalPages={totalPages}
          className="mt-4 justify-center"
        />
      </div>
    </>
  );
}
