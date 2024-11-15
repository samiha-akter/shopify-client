import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

export default function UserDropdown() {
  const { user, Logout } = useAuth();

    const handleLogout = () => {
        Logout();
    }
  const dropItems = (
    <>
      <li>
        <Link>Dashboard</Link>
      </li>
      <li>
        <button className="btn btn-secondary btn-sm btn-outline" onClick={handleLogout}>Logout</button>
      </li>
    </>
  );
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={`${user?.photoURL || "./user.png"}`} />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        {dropItems}
      </ul>
    </div>
  );
}
