import React from "react";

export default function Banner() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/full-length-portrait-happy-young-woman-holding-shopping-bags-mobile-phone-isolated_231208-5590.jpg?t=st=1731690849~exp=1731694449~hmac=58d9a701b484469af1e061274539825c44d1d48aa5fcedcb5298f3505d1a4304&w=740)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Shopify!</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
