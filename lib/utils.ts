import { Post } from "#site/content";
import { type ClassValue, clsx } from "clsx";
import { longFormatters } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formateDate(input: string | number): string {
  const date = new Date(input);

  return date.toLocaleDateString("en-Us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;

    return 0;
  });
}
