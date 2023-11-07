import React from 'react';
import './pay.css';
import qr from '../../../img/qr.png';


function Pay() {
  return (
    <div className='pay'>
      <h2>Хураамж</h2>
      <div className="payment">
        <div className='creditHeader'>
          <h1>Банкны QR </h1>
          <img src={qr} alt="credit logo" width={250} height={250}/>
        </div>
        
        <div className='creditTools'>
        <img src='https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png' alt='visa card' height='80' class='credit-card-image' id='credit-card-image'/>
        <form action="">
          БАНК
            <input class='input-field' type="text" disabled="disabled" value='ГОЛОМТ БАНК'></input>
            ДАНСНЫ ДУГААР
            <input class='input-field' type="text" disabled="disabled" value='2205230332'></input>
            <td className='input-field2'>
              ДАНСНЫ НЭР
              <input class='input-field1' type="text" disabled="disabled" value='Ц.Төгөлдөр'></input>
            </td>
            <table class='half-input-table'>
              <tr>
                <td>ДАНСНЫ НЭР
                  <input class='input-field' type="text" disabled="disabled" value='Ц.Төгөлдөр'></input>
                </td>
                <td>ГҮЙЛГЭЭНИЙ ДҮН
                  <input class='input-field' type="text" disabled="disabled" value='5,000₮'></input>
                </td>
              </tr>
            </table>
            ГҮЙЛГЭЭНИЙ УТГА
            <input class='input-field' type="text" disabled="disabled" value='Овог Нэр, Утасны дугаар'></input>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Pay
