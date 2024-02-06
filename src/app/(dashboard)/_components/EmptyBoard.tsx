'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/useApiMutation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const EmptyBoard = () => {
  const router = useRouter()
  const {pending, mutate} = useApiMutation(api.board.create);
  const { organization } = useOrganization()

  const onClick = () =>{
    if(!organization) return;
    mutate({
      orgId: organization?.id,
      title: "Untitled"
    })
    .then((id)=>{
      toast.success('Board created')
      // redirect to '/board/${id}
      router.push(`/board/${id}`)
    })
    .catch((error)=>{
      toast.error('Failed to create board')
    })
  }
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={
          "https://img.freepik.com/free-vector/team-checklist-concept-illustration_114360-10085.jpg?w=826&t=st=1707109249~exp=1707109849~hmac=0d40d64f53f1ad0fb505144fa674816e36017bee389a1d8a846ead3d5c2705f0"
        }
        height={280}
        width={280}
        alt="Empty"
      />
      <h2 className="text-2xl font-semibold mt-6">Create your first board!</h2>
      <p className=" text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button onClick={onClick} disabled={pending} size={"lg"}>Create Board</Button>
      </div>
    </div>
  );
};
