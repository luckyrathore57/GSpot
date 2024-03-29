import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
interface CardProps {
  title: string;
  description?: string;
  authorUsername: string;
  images: string[];
}

const PostCard: React.FC<CardProps> = ({
  title,
  description,
  authorUsername,
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
    <div className="bg-slate-900 text-white rounded-lg overflow-hidden shadow-md w-full m-2">
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center">
          <span className="font-semibold text-white">{authorUsername}</span>
        </div>
      </div>
      <div className="px-4 py-2"> 
        <h2 className="text-lg font-semibold text-white mb-2">{title}</h2>
        <p className={`text-gray-100 mb-4 ${description?"":"hidden"}`}>{description}</p>
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
          <span className="mr-2 text-white cursor-pointer"><FontAwesomeIcon icon={faThumbsUp} /></span>
          <span className="text-white cursor-pointer"><FontAwesomeIcon icon={faComment} /></span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
