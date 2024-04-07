"use client";
import React, { useState, useEffect } from 'react'
import HelloData from './api/hello'

// This gets called on every request
export default function HelloFetch() {

  const [data, setData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/hello')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      console.log('result json = ' + result)
      setData(result)
    }
 
    fetchData().catch((e) => {
      // handle the error as needed
      console.error('An error occurred while fetching the data: ', e)
    })
  }, [])
  console.log('data=' + data);
  // Pass data to the page via props
  return (<div> helloworld list of crap!!!! {data}</div>)
}
