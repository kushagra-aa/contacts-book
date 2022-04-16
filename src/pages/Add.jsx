import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Add = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const histroy = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmail = contacts.find((contact) => contact.email === email);
    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number)
    );

    // checks
    if (!email || !number || !name)
      return toast.warning("Please Fill All Fields");
    if (checkNumber) return toast.error("Number Already Exists");
    if (checkEmail) return toast.error("Email Already Exists");

    // sending the data to store
    const data = {
      id: contacts.length === 0 ? 0 : contacts[contacts.length - 1].id + 1,
      name: name,
      email: email,
      number: number,
    };
    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Contact Added Successfully");
    histroy(-1);
  };

  return (
    <div className="flex flex-col gap-9 items-center justify-center pt-20 w-screen">
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h1 className="capitalize text-5xl text-gray-100">add contact</h1>
        <p className=" text-sm w-9/12 md:w-1/2 lg:w-1/4 text-gray-400 text-center">
          Enter the details of your contact to add them to the Contact Book
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-max lg:w-1/4"
      >
        <div className="form-group">
          <label className="form-label inline-block mb-2 text-gray-200">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-200
        bg-gray-700 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-200 focus:bg-gray-700 focus:border-yellow-400 focus:outline-none"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label className="form-label inline-block mb-2 text-gray-200">
            Phone Number
          </label>
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="tel"
            className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-200
        bg-gray-700 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-200 focus:bg-gray-700 focus:border-yellow-400 focus:outline-none"
            placeholder="Enter number"
          />
        </div>
        <div className="form-group">
          <label className="form-label inline-block mb-2 text-gray-200">
            Email address
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-200
        bg-gray-700 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-200 focus:bg-gray-700 focus:border-yellow-400 focus:outline-none"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            className="
          w-full
          lg:w-1/3
          p-3
      bg-yellow-400
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-yellow-300 hover:shadow-lg
      focus:bg-yellow-300 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-yellow-600 active:shadow-lg
      transitional"
            value="Add Contact"
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
