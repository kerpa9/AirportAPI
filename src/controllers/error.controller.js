import { envs } from "../config/enviroments/enviroments.js";
import { AppError } from "../errors/appError.js";
import { Error } from "../models/error.model.js";

const handleCastError22001 = (err, res) =>
  new AppError("Value too long for type on attribute in database", 400);

const handleCastError23505 = (err, res) =>
  new AppError("Duplicate field value: please use another value", 400);

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err,
  });
};

const sendErrorProd = async (err, res) => {
  await Error.create({
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
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
    // console.log(envs.NODE_ENV);
    let error = err;

    if (err.parent?.code === "22001") error = handleCastError22001();
    if (err.parent?.code === "23505") error = handleCastError23505();

    sendErrorProd(error, res);
  }
};
