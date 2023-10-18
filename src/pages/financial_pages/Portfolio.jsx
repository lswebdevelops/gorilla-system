import  { useEffect, useState, useRef } from "react";

const Portfolio = ({ portfolioItems, totalPortfolio }) => {
  
  return (
    <div>
      <h1>My Purchases</h1>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Sub Total</th>
          </tr>
        </thead>
        <tbody>
          {portfolioItems.map((item, index) => (
            <tr key={index}>
              <td>{item.symbol}</td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.quantity}</td>
              <td>{item.subTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="total-portfolio-h2">
        Total: <span className="total-portfolio-span">$ {totalPortfolio}</span>
      </h2>
    </div>
  );
};

export default Portfolio;
