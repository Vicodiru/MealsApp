import React from "react";

const page = ({ params }) => {
  return (
    <>
      <div>page</div>
      <div className="">{params.slug}</div>
    </>
  );
};

export default page;
