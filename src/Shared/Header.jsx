import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[url('15.jpg')]">
      <Link className="flex justify-center items-center p-2 gap-2" to="/">
        <img className=" w-12 h-12" src="../../public/more/logo1.png" alt="" />
        <p className="text-white">Espresso Emporium</p>
      </Link>
    </div>
  );
};

export default Header;
