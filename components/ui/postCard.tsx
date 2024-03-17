import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
interface CardProps {
  title: string;
  description: string;
  authorUsername: string;
  authorProfilePhoto: string;
  images: string[];
}

const PostCard: React.FC<CardProps> = ({
  title,
  description,
  authorUsername,
  authorProfilePhoto,
  images,
}) => {

    const [currentImage,setCurrentImage]=useState<string>("");
    const [imageNo,setImageNo]=useState(0);
    useEffect(()=>{
        if(!(images.length==0)){
            setCurrentImage(images[0]);
        }
    },[])
  return (
    <div className="bg-card text-white rounded-lg overflow-hidden shadow-md w-full">
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center">
          <img className="w-8 h-8 rounded-full mr-2" src={authorProfilePhoto} alt="Author" />
          <span className="font-semibold text-white">{authorUsername}</span>
        </div>
      </div>
      <div className="px-4 py-2">
        <h2 className="text-lg font-semibold text-white mb-2">{title}</h2>
        <p className="text-gray-100 mb-4">{description}</p>
        <div className='flex items-center'>
            <span className={`${(imageNo==0)?"hidden":""}`} onClick={()=>{
            setCurrentImage(images[imageNo-1]);
            setImageNo((prev)=>(prev-1));
          }}><FontAwesomeIcon icon={faArrowLeft}/></span>
          <img className="w-full mb-4" src={currentImage} alt={`img`} />
          <span className={`${(imageNo==(images.length-1))?"hidden":""}`} onClick={()=>{
            setCurrentImage(images[imageNo+1]);
            setImageNo((prev)=>(prev+1));
          }}><FontAwesomeIcon icon={faArrowRight}/></span>
        </div>

      </div>
      <div className="flex justify-between px-4 py-2 border-t">
        <div className="flex">
          <span className="mr-2 text-white cursor-pointer">Like</span>
          <span className="text-white cursor-pointer">Comment</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
