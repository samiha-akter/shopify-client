import React from "react";
import Banner from "../components/home/Banner";
import FeaturedProducts from "../components/home/FeaturedProducts";
import UserReviews from "../components/home/UserReviews";
import Accordion from "../components/home/Accordion";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <div className="my-24">
          <h1 className="mb-16 text-2xl font-semibold text-center">
            Featured Products
          </h1>
          <FeaturedProducts />
        </div>
        <div className="my-24">
          <h1 className="mb-16 text-2xl font-semibold text-center">
            User Reviews
          </h1>
          <UserReviews />
        </div>
        <div className="my-24">
          <h1 className="mb-16 text-2xl font-semibold text-center">
            Frequently Asked Questions
          </h1>
          <Accordion />
        </div>
      </div>
    </div>
  );
}
