import { Clock, CalendarBlank } from "@phosphor-icons/react";
import { format, formatDistance } from "date-fns";
import Image from "next/image";
import { GetPostsQuery } from "src/graphql/generated/graphql";

type Post = GetPostsQuery["posts"]["0"];
type Layout = "vertical" | "horizontal";

type BlogSectionPostCardProps = {
  post: Post;
  layout: Layout;
};

type BlogSectionPostCardVerticalProps = Pick<BlogSectionPostCardProps, "post">;

const BlogSectionPostCardVertical = (
  props: BlogSectionPostCardVerticalProps
) => {
  const {
    post: { thumbnail, heading, abstract, updatedAt },
  } = props;

  const distance = formatDistance(new Date(updatedAt), new Date(), {
    addSuffix: true,
  });

  const date = format(new Date(updatedAt), "MMM dd, yyyy");

  return (
    <div className="h-full cursor-pointer">
      <figure className="aspect-video relative rounded-lg overflow-hidden">
        <Image
          src={thumbnail.url}
          fill
          alt={thumbnail.id}
          className="object-cover"
        />
      </figure>

      <div className="py-4">
        <div className="flex gap-1">
          <Clock color="#6b7280" />
          <span className="text-xs text-zinc-500">{distance}</span>
        </div>

        <div className="mt-2 flex flex-col gap-1">
          <h3 className="text-lg font-semibold leading-6 text-zinc-50">
            {heading}
          </h3>
          <p className="text-zinc-400 text-xs line-clamp-3">{abstract}</p>
        </div>
      </div>
    </div>
  );
};

const BlogSectionPostCardHorizontal = (
  props: BlogSectionPostCardVerticalProps
) => {
  const {
    post: { thumbnail, heading, abstract, updatedAt },
  } = props;

  const distance = formatDistance(new Date(updatedAt), new Date(), {
    addSuffix: true,
  });

  return (
    <div className="cursor-pointer flex">
      <figure className="w-3/5 aspect-video relative rounded-lg overflow-hidden">
        <Image
          src={thumbnail.url}
          fill
          alt={thumbnail.id}
          className="object-cover"
        />
      </figure>

      <div className="px-6 w-2/5 flex flex-col justify-end">
        <div className="flex gap-1">
          <Clock color="#6b7280" />
          <span className="text-xs text-zinc-500">{distance}</span>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          <h3 className="text-4xl font-semibold text-zinc-50">{heading}</h3>
          <p className="text-zinc-500 text-sm line-clamp-3">{abstract}</p>
        </div>
      </div>
    </div>
  );
};

export const BlogSectionPostCard = (props: BlogSectionPostCardProps) => {
  const { post, layout = "vertical" } = props;

  const blogSectionPostCardByLayout: Record<
    Layout,
    typeof BlogSectionPostCardVertical
  > = {
    horizontal: BlogSectionPostCardHorizontal,
    vertical: BlogSectionPostCardVertical,
  };

  const Card = blogSectionPostCardByLayout[layout];

  return <Card post={post} />;
};
