import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    //map through images array
    return (
      <div key={id}>
        <img src={urls.regular} alt={description} />
      </div>
    );
  });

  return <div>{images}</div>;
};

export default ImageList;
