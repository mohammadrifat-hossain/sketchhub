import { Room } from "@/components/Room"
import { Canvas } from "./_components/Canvas"
import { Loading } from "./_components/loading"


interface BoardIdPageProps{
  params: {
    boardid: string
  }
}

const BoardIdPage = ({params:{boardid}}: BoardIdPageProps) => {
  return (
    <Room roomId={boardid} fallback={<Loading />}>
      <Canvas boardId={boardid}/>
    </Room>
  )
}

export default BoardIdPage