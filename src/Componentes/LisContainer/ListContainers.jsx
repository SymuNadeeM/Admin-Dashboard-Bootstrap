import React from 'react';
import Table from 'react-bootstrap/Table';
import "./ListCon.css";

const ListContainers = () => {
  const items = [
    {
      id:124242,
      product:"Acer Nitro 5",
      img:"img1",
      customer:"Jhone Smith",
      data: "1 March",
      amount:243,
      method:"Cash on Delivery",
      status:"Approved"
    },
    {
      id:124243,
      product:"Acer Nitro 5",
      img:"img1",
      customer:"Jhone Smith",
      data: "1 March",
      amount:243,
      method:"Cash on Delivery",
      status:"Approved"
    },
    {
      id:124244,
      product:"Acer Nitro 5",
      img:"img1",
      customer:"Jhone Smith",
      data: "1 March",
      amount:243,
      method:"Cash on Delivery",
      status:"Approved"
    },
    {
      id:124245,
      product:"Acer Nitro 5",
      img:"img1",
      customer:"Jhone Smith",
      data: "1 March",
      amount:243,
      method:"Cash on Delivery",
      status:"Approved"
    },
    {
      id:124246,
      product:"Acer Nitro 5",
      img:"img1",
      customer:"Jhone Smith",
      data: "1 March",
      amount:243,
      method:"Cash on Delivery",
      status:"Approved"
    },
    {
      id:124247,
      product:"Acer Nitro 5",
      img:"img1",
      customer:"Jhone Smith",
      data: "1 March",
      amount:243,
      method:"Cash on Delivery",
      status:"Approved"
    },
    {
      id:124248,
      product:"Acer Nitro 5",
      img:"img1",
      customer:"Jhone Smith",
      data: "1 March",
      amount:243,
      method:"Cash on Delivery",
      status:"Approved"
    },
  ];
  return (
    <>
      <div className="container listcontainer">
         <div className="list_title">Latest Transaction</div>
        <div className="row">
          <div className="col-lg-12">
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Customer</th>
          <th>Data</th>
          <th>Amount</th>
          <th>Method</th>
          <th>Status</th>
          
        </tr>
      </thead>
      <tbody>
       
          {items.map((item)=>{
            return <>
            <tr>
                 <td>{item.id}</td>
                 <td>{item.product}</td>
                 <td>{item.customer}</td>
                 <td>{item.data}</td>
                 <td>{item.amount}</td>
                 <td>{item.method}</td>
                 <td>{item.status}</td> 
                 </tr>             
            </>
          })}
          
        
        
       
      </tbody>
    </Table>

          </div>
        </div>
      </div>
    </>
  );
};

export default ListContainers;