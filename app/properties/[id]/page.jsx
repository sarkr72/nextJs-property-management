'use client'
import React from 'react'
import {useRouter, useParams }  from 'next/navigation'

 const PropertyPage = () => {
    const router = useRouter();
    const {id} = useParams();

  return (
    <div><button>property page</button></div>
  )
}

export default PropertyPage;
