export const catchError = (handleError) => {
  return (req, res, next) => handleError(req, res, next).catch(next);
};
