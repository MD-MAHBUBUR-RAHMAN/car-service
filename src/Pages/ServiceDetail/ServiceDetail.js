import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h4>welcome to detail {serviceId}</h4>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
