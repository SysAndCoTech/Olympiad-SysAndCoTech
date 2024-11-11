import React, { useState } from "react";
import "./pay.css";
// import qr from "../../../assets/qr.png";
import defaultBg from "../../../assets/front.png";
import clickedBg from "../../../assets/back.png";

function Pay() {
  const [isClicked, setIsClicked] = useState(false);

  const handlePaymentClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="pay">
      <h2>Татвар</h2>
      <div
        className="payment"
        onClick={handlePaymentClick}
        style={{
          backgroundImage: `url(${isClicked ? clickedBg : defaultBg})`,
        }}
      >
        {/* {!isClicked && (
          <h1 style={{ justifyItems: "center", paddingTop: "10px" }}></h1>
        )} */}
        {isClicked && (
          <>
            {/* <div className="creditHeader fade-in">
              <h1>Банкны QR</h1>
              <img src={qr} alt="credit logo" width={250} height={250} />
            </div>

            <div className="creditTools">
              <img
                src="https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png"
                alt="visa card"
                height="80"
                className="credit-card-image"
                id="credit-card-image"
              />
              <form action="">
                БАНК
                <input
                  className="input-field"
                  type="text"
                  disabled="disabled"
                  value="ГОЛОМТ БАНК"
                ></input>
                ДАНСНЫ ДУГААР
                <input
                  className="input-field"
                  type="text"
                  disabled="disabled"
                  value="2205230332"
                ></input>
                <td className="input-field2">
                  ДАНСНЫ НЭР
                  <input
                    className="input-field1"
                    type="text"
                    disabled="disabled"
                    value="Ц.Төгөлдөр"
                  ></input>
                </td>
                <table className="half-input-table">
                  <tr>
                    <td>
                      ДАНСНЫ НЭР
                      <input
                        className="input-field"
                        type="text"
                        disabled="disabled"
                        value="Ц.Төгөлдөр"
                      ></input>
                    </td>
                    <td>
                      ГҮЙЛГЭЭНИЙ ДҮН
                      <input
                        className="input-field"
                        type="text"
                        disabled="disabled"
                        value="7,000₮"
                      ></input>
                    </td>
                  </tr>
                </table>
                ГҮЙЛГЭЭНИЙ УТГА
                <input
                  className="input-field"
                  type="text"
                  disabled="disabled"
                  value="Овог Нэр, Утасны дугаар"
                ></input>
              </form>
            </div> */}
          </>
        )}
      </div>
    </div>
  );
}

export default Pay;
