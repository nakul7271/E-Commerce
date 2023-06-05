
import React from "react";
import StarSvg from "../StarSvg";

const ReviewCard = (props) => {


    
    return <>
    <div className="flex my-5">
            <div className="mx-4">
              <img src={props.url} alt=""></img>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <span className="font-semibold text-slate-900 mr-4">
                  {props.name}
                </span>
                <span className="flex">
                  {props.star>0&&<StarSvg />}
                  {props.star>1&&<StarSvg />}
                  {props.star>2&&<StarSvg />}
                  {props.star>3&&<StarSvg />}
                  {props.star>4&&<StarSvg />}
                </span>
              </div>
                <div className="text-slate-700">{props.message }</div>
            </div>
          </div>
    </>
}


export default ReviewCard;
