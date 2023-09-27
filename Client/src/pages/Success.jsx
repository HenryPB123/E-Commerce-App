import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  // console.log("location", location);
  return <div>SUCCESS</div>;
};

export default Success;
