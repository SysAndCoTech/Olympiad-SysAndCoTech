import React from "react";
import "./title.css";
import cloudImage from "../../assets/Uul.png";
import verticalImage from "../../assets/Main.png";
function Title() {
  return (
    <div id="about">
      <div className="titleback">
        <div className="cloud-container">
          <img src={cloudImage} alt="cloud" className="cloud cloud-1" />
          <img src={cloudImage} alt="cloud" className="cloud cloud-2" />
          <img src={cloudImage} alt="cloud" className="cloud cloud-3" />
        </div>
        <div className="bottom-container">
          <img src={verticalImage} alt="Vertical" className="vertical-image" />
          <div className="text-right">
            {" "}
            "Халз Бодолт" Программчлалын олимпиад нь оюутан залуусын чөлөөт
            цагийг зөв боловсон үр дүнтэй өнгөрүүлэх, мэдлэг боловсрол бүтээлч
            сэтгэлгээг хөгжүүлэх, программчлалын мэдлэгийг дээшлүүлэн, хоорондын
            өрсөлдөөнийг бий болгож , идэвх сонирхол, оролцоог нэмэгдүүлэх
            зорилготойгоор зохион байгуулагдаж байна.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
