import React from "react";
import Bundles from "./Bundles";
import data from "./Data";

const Home = () => {
  return (
    <>
      <div className="home">
        {data.bundles.map((res, index) => {
          return (
            <Bundles
              id={res.id}
              title={res.title}
              img={res.img}
              desc={res.decs}
              price={res.price}
              key={index}
              item={res}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
