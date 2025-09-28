import { FaOm } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="bg-yellow-800 flex justify-between px-5 h-20 items-center text-xl">
        <div className="font-bold pl-5">
          <Link to="/">
            <FaOm size={40} />
          </Link>
        </div>
        <div>
          <ul className="flex gap-10 font-medium">
            <li>
              <Link to="/">Today</Link>
            </li>
            <Link to="/history">History</Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
