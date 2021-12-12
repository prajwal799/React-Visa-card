import "./module.css";
const Visa = ({
  cardholder,
  cardnumber,
  cardmonth,
  cardyear,
  cardcvc,
  cardamount
}) => {
  console.log(cardnumber[0]);
  return (
    <>
      <div className="visa_card">
        <h2 className="visa">Visa</h2>
        <img
          src="https://image.shutterstock.com/image-illustration/credit-card-chip-gold-isolated-260nw-490290904.jpg"
          width="40px"
          style={{
            marginRight: "200px",
            marginTop: "20px",
            borderRadius: "4px"
          }}
        />
        <h3 className="cardNumber">
          {cardnumber[0]}
          {cardnumber[1]}
          {cardnumber[2]}
          {cardnumber[3]} {cardnumber[4]}
          {cardnumber[5]}
          {cardnumber[6]}
          {cardnumber[7]} {cardnumber[8]}
          {cardnumber[9]}
          {cardnumber[10]}
          {cardnumber[11]} {cardnumber[12]}
          {cardnumber[13]}
          {cardnumber[14]}
          {cardnumber[15]}
        </h3>
        <table className="table_visa">
          <tr>
            <th>Card Holder</th>
            <th>EXPS</th>
            <th>CVC</th>
          </tr>
          <tr>
            <td>{cardholder}</td>
            <td>
              {cardmonth}/{cardyear}
            </td>
            <td>{cardcvc}</td>
          </tr>
        </table>
      </div>
    </>
  );
};
export default Visa;
