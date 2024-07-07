import Image from "next/image";
import Menu from "@/components/Menu";
import { BsArrowRepeat } from "react-icons/bs";
import { GrFormNextLink } from "react-icons/gr";

export default function Home() {
  return (
    <>
      <div className="skeleton">
        <div class="background">
          <Menu />
          <div class="content">
            <p className="content__timer">15:25</p>
            <div className="content__flex">
              <div className="content__icon">
                <BsArrowRepeat fontSize={30} />
              </div>
              <span>Start</span>
              <div className="content__icon">
                <GrFormNextLink fontSize={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
