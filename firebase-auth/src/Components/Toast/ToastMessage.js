import React from "react";
import { toast } from "react-toastify";

const ToastMessage = ({ key }) => {
  switch (key) {
    case "SUCCESS":
      return toast.success("Login Success!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "success1",
      });

    default:
      break;
  }
};

export default ToastMessage;
