import { Parallax } from "react-parallax";
import Setellite from "../imgs/satellite.jpg";

const ImageTwo = () => (
  <Parallax className="image" bgImage={Setellite} strength={800}>
    <div className="content">
      <span className="img-txt">a trip to space</span>
    </div>
  </Parallax>
);

export default ImageTwo;
