import Image from "next/image";

export const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={'https://media.istockphoto.com/id/1207706948/vector/favorite-window-tab-line-icon-website-bookmark-with-star-world-wide-web-vector-design.jpg?s=612x612&w=0&k=20&c=0nmrPDdK2TAQzXD9IN_WcfG-Rg0SyVEjdxC1ZdeqAcM='}
        height={180}
        width={180}
        alt="Empty"
      />
      <h2 className="text-2xl font-semibold mt-6">No favorite boards!</h2>
      <p className=" text-muted-foreground text-sm mt-2">
        Try favoriting a board
      </p>
    </div>
  );
};
