'use client'

import { RenameModel } from "@/components/models/renameModel"
import { useEffect, useState } from "react"

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(()=>{
    setIsMounted(true)
  },[])



  if(!isMounted){
    return null
  }
  return (
    <>
      <RenameModel />
    </>
  )
}
