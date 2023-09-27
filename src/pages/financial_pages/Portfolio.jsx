
// import '../../styles/Investments.css';

const Portfolio = ({ portfolioItems }) => {
  return (
    <div>
      <h1>Portfolio</h1>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Sub Total</th>
          </tr>
        </thead>
        <tbody>
          {portfolioItems.map((item, index) => (
            <tr key={index}>
              <td>{item.symbol}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.subTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Portfolio;
