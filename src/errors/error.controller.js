import { envs } from "../config/enviroments/enviroments.js";

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err,
  });
};

const sendErrorProd = async (err, res) => {
  if (err.isOperational) {
    // operational, trusted error: send message to client
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // Programming or other unknown error: don't leak error detail
    console.log("ERROR ✖️", err);
    res.status(500).json({
      status: "fail",
      message: "Something went very wrong",
    });
  }
};
export const globalErrorHandle = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  err.status = err.status || "fail";

  if (envs.NODE_ENV === "development") {
    sendErrorDev(err, res);
  }

  if (envs.NODE_ENV === "production") {
    sendErrorProd(err, res);
  }

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};
