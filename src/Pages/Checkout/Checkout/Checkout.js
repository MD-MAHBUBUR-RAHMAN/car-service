import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useServiceDetail from "../../../hooks/useServiceDetail";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios.post("http://localhost:5000/order", order).then((response) => {
      // console.log(response);
      const { data } = response;
      if (data.insertedId) {
        toast("your Order is booked!!");
        event.target.reset();
      }
    });
    // const url = `http://localhost:5000/order`;
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(order),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //   });
  };

  // const [user, setUser] = useState({
  //   name: "Ali Hossen",
  //   address: "Tajmohol Road Md.pur",
  //   email: "ahmed@gmail.com",
  //   phone: "01711111111",
  // });

  // const handleAddressChange = (event) => {
  //   // console.log(event.target.value);
  //   const { address, ...rest } = user;
  //   // console.log(address, ...rest)
  //   const newAddress = event.target.value;
  //   const newUser = { address: newAddress, ...rest };
  //   setUser(newUser);
  // };

  return (
    <div className="w-50 mx-auto">
      <h2>please confirm booking : {service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          type="text"
          name="name"
          value={user?.displayName}
          placeholder="Name"
          required
          readOnly
          disabled
        />
        <br />
        <input
          type="email"
          name="email"
          value={user?.email}
          placeholder="Email"
          required
          readOnly
          disabled
        />
        <br />
        <input
          type="text"
          name="service"
          value={service?.name}
          placeholder="Service"
          required
          readOnly
        />
        <br />
        <input
          type="text"
          name="address"
          placeholder="Address"
          aautoComplete="off"
          required
        />
        <br />
        <input type="text" name="phone" placeholder="Phone" required />
        <br />
        <input className="btn btn-primary" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;
<h2>please confirm your booking</h2>;
