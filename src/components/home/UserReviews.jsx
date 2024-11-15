import React from "react";
import ReviewCard from "../ReviewCard";

export default function UserReviews() {
  return (
      <div className='lg:flex items-center justify-between gap-4'>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
    </div>
  );
}
