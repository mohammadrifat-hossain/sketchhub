import Image from "next/image";

export const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={
          "https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150696455.jpg?w=826&t=st=1707108694~exp=1707109294~hmac=84d0525272b61f1a9b68cd154d2e13b4c19be003867ce4ce0159193ce34d70ce"
        }
        height={260}
        width={260}
        alt="Empty"
      />
      <h2 className="text-2xl font-semibold mt-6">No results found!</h2>
      <p className=" text-muted-foreground text-sm mt-2">
        Try searching something else
      </p>
    </div>
  );
};
