"use client";
import { useState } from "react"

export default function Hellolist() {

  const date = new Date()
  const [counter, setCounter] = useState(date.getTime())

  function incrementcounter() {setCounter(date.getTime())}

  return (<div> helloworld list of crap!!!! {counter}</div>)
}