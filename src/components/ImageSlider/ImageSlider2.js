import SimpleImageSlider from "react-simple-image-slider";
import React  from 'react';
const images = [
  { url: "https://yt3.ggpht.com/ljpMPa4UuzF-SAFmfosyHiaaalAzOBcJSnyh2LZX4ZFQsE_8WltzJMn8oREssik5yauaQzrubw=s900-c-k-c0x00ffffff-no-rj" },
  { url: "https://miro.medium.com/max/1185/1*8J1TPCS6dLEYG9W-XJyr-Q.jpeg" },
  { url: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/logo_Iu2smSE.png" },
  { url: "https://cdn.wallpapersafari.com/50/47/mELZvx.jpg" },
  { url: "https://imguhttps://i.imgur.com/hUX0EvJ.pngr.com/a/V4X2jML" },
  { url: "https://i.imgur.com/hUX0EvJ.png" },
  { url: "images/7.jpg" },
];

const ImageSlider2 = () => {
  return (
    <div  style={{position: 'top', height: 140, textAlign: 'center'}} >
      <SimpleImageSlider
        width={1297}
        height={480}
        images={images}
        slideDuration={0.01}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
      
    </div>
  );
}
export default ImageSlider2;