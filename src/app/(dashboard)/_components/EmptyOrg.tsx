import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={
          "https://img.freepik.com/free-vector/graphic-designer-concept-illustration_114360-338.jpg?w=826&t=st=1707106506~exp=1707107106~hmac=6b9666a853ace432b4be6c4801d7a821c4d92826679fe66e4cc5770577c1f107"
        }
        alt="Empty"
        height={200}
        width={200}
      />
      <h2 className="text-2xl font-semibold mt-6">Welcome to SketchHub</h2>
      <p className="text-muted-foreground text-sm mt-2 ">
        Create an organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size={"lg"}>Create organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
