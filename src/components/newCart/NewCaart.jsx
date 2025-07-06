import React, { useState } from 'react'

import moment from 'moment'
import { useParams , useNavigate} from 'react-router-dom';

import { FcLike } from "react-icons/fc";
import { FaHeart ,FaCommentAlt} from "react-icons/fa";

import img from "../../assets/photo/defoldPhoto.jpg"

import cx from 'classnames';


import cls from './NewCart.module.css' // AntD ning reset CSSʼi
// import imgd from '../../assets/photo/defoldPhoto.jpg'


const MoreNew = ({props}) => {
  const [commit , setCommit] = useState(false)
  const [like , setLike] = useState(false)
  const dateTime = props?.creatdAt
  const dateOnly = moment(dateTime).format('YYYY-MM-DD');
  const navigate = useNavigate();
  const { id } = useParams();
  
  const handleClick = () => {
    navigate(`/news/newsSingle/${props.id}`);
    // yoki bu yerda fetch, navigate, log, post qilish mumkin
  };
  console.log(props.like);
  
  
return  props && <div
    className={cls.wrapper}
  
  >
    <div>
      <img  className={cls.img} src={img}  />

    </div>
    <div className={cls.cardInfo}>  
      <div className={cls.carfFuuter}>
        <div className={cls.card_left}>
          <div className={cls.card__left_avatart}>
            <img className={cls.avatart_img} src={img} alt="" />
          </div>
          <div className={cls.card__left_userName}>
              Murod M
          </div>
        </div>
        

        <div className={cls.card__right}>
          <FaCommentAlt onClick={()=> setCommit(!commit)} className={cx(cls.pointer, cls.like)}/>
  
          {like? <FcLike onClick={()=>setLike(!like)} className={cx(cls.pointer, cls.like)}/>: <FaHeart onClick={()=>setLike(!like)}  className={cx(cls.pointer, cls.like)}/>}
        </div>

       
      </div>

      {commit &&
        <div className={cx(cls.commitWrap )}>
          <div>
            <div className={cx(cls.commitWrap_name)}>
              Murod
            </div>
            <div className={cx(cls.commitWrap_tex)}>
                Lorem ipsum dolor sit.
            </div>
            
          </div>
        </div>}

       

    </div>
  </div>
}

export default MoreNew
