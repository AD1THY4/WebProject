import SimpleImageSlider from "react-simple-image-slider";
import React from "react";
import useWindowSize from "./useWindowSize";

const images = [
  {
    url: "https://yt3.ggpht.com/ljpMPa4UuzF-SAFmfosyHiaaalAzOBcJSnyh2LZX4ZFQsE_8WltzJMn8oREssik5yauaQzrubw=s900-c-k-c0x00ffffff-no-rj",
  },
  { url: "https://miro.medium.com/max/1185/1*8J1TPCS6dLEYG9W-XJyr-Q.jpeg" },
  {
    url: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/logo_Iu2smSE.png",
  },
];

const ImageSlider = () => {
  const { width } = useWindowSize();
  return (
    <div>
      {width > 800 ? (
        <>
          <div>
            <SimpleImageSlider
              width={((1200 * 3) / 4) * 1.02}
              height={(600 * 6.4) / 9}
              images={images}
              slideDuration={3}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
            />
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              position: "center",
              height: 0,
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <SimpleImageSlider
              width={window.innerWidth}
              height={(window.outerHeight * 2) / 5}
              images={images}
              slideDuration={3}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default ImageSlider;
