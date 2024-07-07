import Image from "next/image";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <>
      <div className="skeleton">
        <div class="background">
          <Menu />
          <div className="content">
            <p>15:25</p>
          </div>
        </div>
      </div>
    </>
  );
}
