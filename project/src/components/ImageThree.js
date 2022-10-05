import { Parallax } from "react-parallax";
import SpaceStation from "../imgs/spaceStation.jpg";

const ImageThree = () => (
  <Parallax className="image" bgImage={SpaceStation} strength={800}>
    <div className="content">
      <span className="img-txt">a trip to space</span>
    </div>
  </Parallax>
);

export default ImageThree;
