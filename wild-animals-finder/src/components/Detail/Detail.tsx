import React from 'react';
import './Detail.scss';
import { DetailProps } from './Detail.ts';

const Detail: React.FC<DetailProps> = ({ img, url, title, description }) => {

  return (
    <>
      {title &&
        <div className="detail-container">
          <img className='detail-container__image' src={img} alt={`Image of ${title}`} key={url}/>
          <div className='detail-container__url'>{url}</div>
          <div className='detail-container__title'>{title}</div>
          <div className='detail-container__description'>{description}</div>
        </div>
      }
    </>
    
  );
};

export default Detail;
