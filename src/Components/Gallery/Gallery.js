import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Gallery.css";
import { staticPictures, dynamicPictures } from "../../data";

export default function Gallery() {
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("load", () => setLoading(false));
    setLoading(false);
  }, [location]);

  return (
    <>
      <div className="gallery">
        {loading && (
          <div class="loading">
            درحال دریافت اطلاعات
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        )}
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
