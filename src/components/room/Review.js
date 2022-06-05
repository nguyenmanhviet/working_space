import Rating from "@mui/material/Rating";
import classes from './Review.module.css';
import { useState, useEffect } from "react";

const Review = (props) => {
    const [personReview, getPersonReview] = useState("");

    

    return (
        <div className={classes.review}>
          <div className={classes.imageReview}>
            <img
              src='https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg'
            ></img>
          </div>
          <div className={classes.inforReview}>
            <h2 className={classes.nameUser}>{props.review.name}</h2>
            <div>
            <Rating
              className={classes.stars}
              name="half-rating-read"
              defaultValue={props.review.rating}
              precision={0.5}
              readOnly
            />
            <span className={classes.timeReview}>{props.review.time}</span>
            </div>
            <div className={classes.comment}>
                <p>{props.review.comment}</p>
            </div>
          </div>
        </div>
    );
}

export default Review;