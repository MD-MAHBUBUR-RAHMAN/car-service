import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center mt-5">please add a service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="w-100 mt-3"
          placeholder="Description"
          {...register("description")}
        />
        <input placeholder="Price" type="number" {...register("price")} />
        <input placeholder="photo url" type="text" {...register("img")} />
        <input type="submit" value="add service" />
      </form>
    </div>
  );
};

export default AddService;
