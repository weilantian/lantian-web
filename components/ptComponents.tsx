import { urlFor } from "@/lib/sanity";

export const ptComponents = {
  block: {
    warning: ({ children }: any) => (
      <div className="bg-yellow-100 not-prose border-l-4  border-yellow-500 text-yellow-700 p-2">
        <p className="font-bold ">Warning</p>
        <p>{children}</p>
      </div>
    ),
  },
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="flex w-full not-prose  bg-gray-50 flex-col rounded-md justify-center">
          <img
            className="w-full w-auto py-4 max-h-[700px] object-contain"
            alt={value.caption || " "}
            loading="lazy"
            src={urlFor(value).url()}
          />

          <span className="text-gray-400 mb-4 mt-1 font-medium text-center text-sm">
            {value.caption}
          </span>
        </div>
      );
    },
  },
};
