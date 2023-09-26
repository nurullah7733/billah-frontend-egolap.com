const createParams = (obj) => {
  return new URLSearchParams(
    Object.fromEntries(
      Object.entries(obj).filter(([, value]) => value !== undefined)
    )
  ).toString();
};

export default createParams;
