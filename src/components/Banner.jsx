import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      <img
        className="bg-cover object-none object-bottom"
        src="Banner3.png"
        alt=""
      />
      <div className="absolute  top-[40%] left-1/2">
        <h2 className="mb-4">Hello Man</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          aut praesentium natus fugiat quidem odio, earum ad maiores incidunt
          odit, est reiciendis. Doloremque esse similique iste aliquid aperiam.
          Quaerat necessitatibus culpa debitis adipisci odio dignissimos aliquam
          non dolores! Porro ut earum officia quos perferendis inventore?
        </p>
        <button className="btn mt-8">Learn More</button>
      </div>
    </div>
  );
};

export default Banner;
