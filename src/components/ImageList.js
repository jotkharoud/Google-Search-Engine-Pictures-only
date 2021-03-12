import './ImageList.css'
import React from 'react'
import ImageCard from './ImageCard'

const ImageList = props =>{
   const images =  props.images.map((image)=>{
     return <ImageCard key = {image.id} image= {image} />
    })
    return(
        <div className = "image-list">{images}</div>
    )
}
//we are adding description , id and urls of images as a functional component
//key is  for unique

export default ImageList