import Link from "next/link";
import { IoChevronForwardCircleSharp, IoOpenOutline } from "react-icons/io5";
import Image from "next/image";
import { FC } from "react";
import { ItemListItem, ItemListProps } from "@/lib/models";
import { format } from "date-fns";
const ItemList: FC<ItemListProps> = ({
  path,
  items,
  itemPageOptions,
  title,
}) => {
  return (
    <div>
      <div className="flex mt-4 justify-between">
        <h3 className=" text-xl font-semibold">{title}</h3>
        {itemPageOptions && (
          <Link
            className="text-blue-500 group font-medium"
            href={itemPageOptions.link}
          >
            {itemPageOptions.title}
            <IoChevronForwardCircleSharp
              size={18}
              className="inline-block ml-1 duration-75 transition-transform group-hover:translate-x-1"
            />
          </Link>
        )}
      </div>
      <div className=" overflow-x-scroll pb-3">
        <div className="flex gap-4">
          {items.map((item) => (
            <ProjectCard path={path} item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProjectCard: FC<{
  item: ItemListItem;
  path: string;
  autoFillWidth?: boolean;
}> = ({ path, item, autoFillWidth }) => {
  const coverImgDimensions = item.coverImage?.metadata.dimensions;
  return (
    <Link href={`${path}/${item.slug?.current}`}>
      <div className={` group cursor-pointer relative`}>
        <span className="absolute opacity-0 translate-x-10 scale-75 group-hover:scale-100 duration-200 transition-all group-hover:opacity-100 group-hover:translate-x-0 flex items-center text-sm right-0 top-2 z-10 bg-blue-500 text-white rounded-full px-4 py-1">
          <IoOpenOutline className="mr-1" />
          Learn More
        </span>
        <div
          className={`md:w-[320px] px-4 py-4 h-[355px]  rounded-xl bg-white ${
            autoFillWidth ? "w-full" : "w-[260px]"
          }`}
        >
          <div className="overflow-hidden h-[140px]  md:h-[160px] rounded-md">
            {item.coverImage ? (
              <Image
                width={coverImgDimensions?.width}
                height={coverImgDimensions?.height}
                className=" object-cover h-[140px]  md:h-[160px] rounded-md"
                alt={item.title + " cover image"}
                src={item.coverImage?.url}
              />
            ) : (
              <div className="h-[140px]  md:h-[160px] rounded-md bg-gray-100"></div>
            )}
          </div>

          <div className="flex mt-3 h-[130px] flex-col justify-between">
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-xs mt-1 text-gray-500">
                {new Date(item.publishedAt).toLocaleDateString()}
              </p>
              <p className="mt-1 line-clamp-2 text-sm font-medium text-gray-400">
                {item.description}
              </p>
            </div>
            <div className="flex mt-2 flex-wrap gap-2">
              {item.tags?.map((tag) => (
                <div
                  key={tag}
                  className="font-medium text-xs text-gray-600 bg-gray-100 rounded-lg px-3 py-2"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemList;
