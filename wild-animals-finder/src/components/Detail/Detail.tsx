import React from 'react';
import './Detail.scss';
import { DetailProps } from './Detail.ts';

const Detail: React.FC<DetailProps> = ({ img, url, title, subtitle }) => {

  return (
    <div className="item-container">
      <img src={img} alt={`Image of ${title}`} />
      <p className='item-container__url'>{url}</p>
      <p className='item-container__title'>{title}</p>
      <p className='item-container__subtitle'>{subtitle}</p>
    </div>
  );
};

export default Detail;
