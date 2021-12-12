import { useState } from "react";
import Visa from "./Visa"
const Form = () => {
  const [iscard , setCardNumber] = useState({
    nameholder:"",
    cardnum:"",
    month:"",
    year:"",
    cvc:"",
    amount:""
  });
  if(iscard.cardnum.length > 16 || 
    iscard.month.length > 2 ||
     iscard.year.length > 4 ||
      iscard.cvc.length > 3){
      alert("please put right information")
  }

  const handleUpdate = (e) => {
     const {name,value} = e.target;
     setCardNumber({...iscard , 
    [name] : value
     })
  }
    function pay(){
      if(iscard.cardnum.length == 16 && 
        iscard.month.length == 2 &&
         iscard.year.length == 4 &&
          iscard.cvc.length == 3  && iscard.amount.length > 0){
      alert("Payment is succesfull");
        return
      }
    }
  
  return (
    <>
    <div  className="AllCard">
      <div>
      <Visa   cardholder={iscard.nameholder}
             cardnumber={iscard.cardnum} 
             cardmonth={iscard.month} 
             cardyear={iscard.year} 
             cardcvc={iscard.cvc}
             cardamount={iscard.amount}
        />
      </div>
        <div>
          <h3>Payment Detalis</h3>
          <label>CardHolder name</label><br />
          <input className="input_box" type="text" value={iscard.nameholder} name="nameholder"  placeholder="Holder Name" onChange={handleUpdate} /><br />
          <label>Card Number</label><br />
           <input  className="input_box" type="number" value={iscard.cardnum} name="cardnum" maxLength="12" placeholder="card number" onChange={handleUpdate} /><br />
          
           <div style={{display:"flex"}}>
             <table className="table_form">
               <tr>
                 <th className="expiry_month_lable"><label>Expiry Month</label></th>
                 <th><lable>Expiry year</lable></th>
                 <th> <label>CVC</label></th>
               </tr>
               <tr>
                 <td> <input  className="input_small" type="number" value={iscard.month} name="month" placeholder="month" onChange={handleUpdate} /></td>
                 <td><input  className="input_small" type="number" value={iscard.year} name="year" placeholder="year" onChange={handleUpdate} /></td>
                 <td><input className="input_small" type="number" value={iscard.cvc} name="cvc" placeholder="cvc" onChange={handleUpdate} /></td>
               </tr>
             </table>
           </div>
          
           <label>Payment amount:</label><br />
           <input className="input_box" type="number" value={iscard.amount} name="amount" placeholder="Amount"  onChange={handleUpdate}/>
          <br /><br /> <button className="pay" onClick={pay}>PAY</button>
        </div>
    </div>
    </>
  )
}
export default Form;