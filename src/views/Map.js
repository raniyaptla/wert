
import React from "react";
// reactstrap components
import { Button } from "reactstrap";


import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";



function Map() {
  const invoiceData = [
    {
      customerID: 189,
      name: "John Doe",
      date: "2024-02-03",
      expiryDate: "2024-03-03",
      totalAmt: "Rs.50,000",
      credit: "Rs.10,000",
      status: "Pending",
      payment: "Not Paid",
    },
    {
      customerID: 232,
      name: "Jane Smith",
      date: "2024-02-04",
      expiryDate: "2024-03-04",
      totalAmt: "Rs.45,000",
      credit: "Rs.8,000",
      status: "Approved",
      payment: "Paid",
    },
    {
      customerID: 365,
      name: "Bob Johnson",
      date: "2024-02-05",
      expiryDate: "2024-03-05",
      totalAmt: "Rs.55,000",
      credit: "Rs.12,000",
      status: "Pending",
      payment: "Not Paid",
    },
    {
      customerID: 89,
      name: "Alice Brown",
      date: "2024-02-06",
      expiryDate: "2024-03-06",
      totalAmt: "Rs.40,000",
      credit: "Rs.5,000",
      status: "Approved",
      payment: "Paid",
    },
    {
      customerID: 154,
      name: "Charlie Davis",
      date: "2024-02-07",
      expiryDate: "2024-03-07",
      totalAmt: "Rs.60,000",
      credit: "Rs.15,000",
      status: "Pending",
      payment: "Not Paid",
    },
    {
      customerID: 23,
      name: "Eva Wilson",
      date: "2024-02-08",
      expiryDate: "2024-03-08",
      totalAmt: "Rs.48,000",
      credit: "Rs.7,000",
      status: "Approved",
      payment: "Paid",
    },
    {
      customerID: 87,
      name: "David Smith",
      date: "2024-02-09",
      expiryDate: "2024-03-09",
      totalAmt: "Rs.52,000",
      credit: "Rs.9,000",
      status: "Pending",
      payment: "Not Paid",
    },
    {
      customerID: 32,
      name: "Grace Miller",
      date: "2024-02-10",
      expiryDate: "2024-03-10",
      totalAmt: "Rs.43,000",
      credit: "Rs.6,000",
      status: "Approved",
      payment: "Paid",
    },
    {
      customerID: 236,
      name: "Frank White",
      date: "2024-02-11",
      expiryDate: "2024-03-11",
      totalAmt: "Rs.57,000",
      credit: "Rs.11,000",
      status: "Pending",
      payment: "Not Paid",
    },
    {
      customerID: 410,
      name: "Olivia Davis",
      date: "2024-02-12",
      expiryDate: "2024-03-12",
      totalAmt: "Rs.65,000",
      credit: "Rs.20,000",
      status: "Approved",
      payment: "Paid",
    },
    {
      customerID: 101,
      name: "Samuel Johnson",
      date: "2024-02-13",
      expiryDate: "2024-03-13",
      totalAmt: "Rs.42,000",
      credit: "Rs.8,000",
      status: "Approved",
      payment: "Paid",
    },
    {
      customerID: 6,
      name: "Sophie Wilson",
      date: "2024-02-14",
      expiryDate: "2024-03-14",
      totalAmt: "Rs.53,000",
      credit: "Rs.15,000",
      status: "Pending",
      payment: "Not Paid",
    },
    
    // Add data for the remaining 5 customers
    // ...
  ];

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Car Invoice List</CardTitle>
                
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Customer ID</th>
                      <th>Name</th>
                      <th>Date</th>
                      <th>Expiry Date</th>
                      <th>Amount</th>
                      <th>Credit</th>
                      <th>Status</th>
                      <th>Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceData.map((invoice, index) => (
                      <tr key={index}>
                        <td>{invoice.customerID}</td>
                        <td>{invoice.name}</td>
                        <td>{invoice.date}</td>
                        <td>{invoice.expiryDate}</td>
                        <td >{invoice.totalAmt}</td>
                        <td >{invoice.credit}</td>
                        <td>{invoice.status}</td>
                        <td>{invoice.payment}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <Button color="primary" onClick={handleUpdateClick}>
      Update
    </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
const handleUpdateClick = () => {
  // Handle update logic here
  console.log("Update button clicked");
};

export default Map;
