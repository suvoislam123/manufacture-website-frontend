import React, { useEffect, useState } from 'react';
import './Reviews.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ReviewItem from './ReviewItem';

const Reviews = () => {
        const [reviews, setReviews]=useState([])
        useEffect(()=>{
            fetch('https://ancient-ravine-45095.herokuapp.com/readreviews')
            .then(res=>res.json())
            .then(data=>setReviews(data))

        },[])

    return (
        <>
            <div className="container my-5">
            <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2>Customer Reviews</h2>
                            </div>
                        </div>
                    </div>
                <OwlCarousel className='owl-theme testimonial-carousel p-2' responsiveclassName='true' loop margin={10} nav>
                   
                {reviews.map((review)=>{
                    return <ReviewItem key={review._id} review={review}></ReviewItem>
                })}
            
                </OwlCarousel>
            </div>

        </>
    );
};

export default Reviews;