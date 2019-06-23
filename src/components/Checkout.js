import React from 'react';
import { Alert, Form, FormGroup, Input, Label, Button } from 'reactstrap';

function Checkout() {

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <Form>
            <h3 className="h5 mb-4 mt-4 text-md-center">Your order</h3>
            <Alert color="primary">
              Your order has been confirmed. The confirmation email is sent to youe address
            </Alert>
            <div className="product-list-box">
              <div className="box-inner-col description-col">
                <div className="product-img">
                  <img src="assets/images/canon1.png" alt="img" />
                </div>
                <div className="product-desc">
                  <h4 className="col-title mb-2">Canon EOS 200D Digital SLR Camera</h4>
                  <div className="rate">
                    <i className="icon-star checked"></i>
                    <i className="icon-star checked"></i>
                    <i className="icon-star checked"></i>
                    <i className="icon-star checked"></i>
                    <i className="icon-star checked"></i>
                    <span className="rate-amount ml-2 d-inline-block d-md-none">121</span>
                  </div>
                  <p className="rate-amount d-none d-md-block mt-1">11 reviews</p>
                  <p className="price-text mb-0 mt-2 d-inline-block d-md-none"><strong>€ 47.31</strong></p>
                </div>
              </div>
              <div className="box-inner-col price-col justify-content-center">
                <p className="mb-0 font-weight-light">Total:</p>
                <h4 className="col-title price-text mb-2">€ 491</h4>
              </div>
            </div>
            <h3 className="h5 mb-4 mt-5 text-md-center">Your details</h3>
            <div className="jumbotron jumbotron-light jumbotron-form mb-0">
              <div className="row">
                <div className="col-md-6">
                  <FormGroup>
                    <Label htmlFor="exampleInput">Name:</Label>
                    <Input type="text" className="form-control" id="exampleInput" placeholder="Some name"/>
                  </FormGroup>
                  <FormGroup className="mb-4">
                    <Label htmlFor="exampleInput2">Email:</Label>
                    <input type="email" className="form-control" id="exampleInput2" placeholder="email@gmail.com"/>
                  </FormGroup>
                </div>
                <div className="col-md-6">
                  <FormGroup>
                    <Label htmlFor="exampleInput3">Phone:</Label>
                    <input type="text" className="form-control" id="exampleInput3" placeholder="+44 7911 123456"/>
                  </FormGroup>
                  <FormGroup className="mb-4">
                    <Label htmlFor="exampleInput4">Address:</Label>
                    <Input type="text" className="form-control" id="exampleInput4"
                           placeholder="Westminster, London SW1A 0AA, UK"/>
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="text-center mt-2 mb-5 my-sm-5">
              <Button type="submit" color="primary" size="lg">Confirm and pay</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
