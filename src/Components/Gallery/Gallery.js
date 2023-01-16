import React, { useState } from "react";
import "./Gallery.css";
import { staticPictures, dynamicPictures } from "../../data";

export default function Gallery() {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className="gallery">
        {staticPictures.map((staticPicture) => (
          <div key={staticPicture.id} className={`img-${staticPicture.id}`}>
            <img loading="lazy" src={staticPicture.img} alt="" />
          </div>
        ))}
        {showMore && (
          <>
            {dynamicPictures.map((dynamicPicture) => (
              <div
                key={dynamicPicture.id}
                className={`img-${dynamicPicture.id}`}
              >
                <img loading="lazy" src={dynamicPicture.img} alt="" />
              </div>
            ))}
          </>
        )}
      </div>
      {!showMore && (
        <button
          className="show-more-btn"
          onClick={() => {
            setShowMore(true);
          }}
        >
          نمایش بیشتر
        </button>
      )}
    </>
  );
}
