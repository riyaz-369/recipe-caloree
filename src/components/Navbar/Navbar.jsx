import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <div>
            <div className="navbar flex justify-between">
                <div className="">
                    <a className="btn btn-ghost p-0 text-3xl font-bold">Recipe Calories</a>
                </div>
                <div>
                    <ul className="flex gap-12 opacity-80">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="flex-none gap-3">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="rounded-full border-none bg-gray-100 input" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <button className="btn btn-circle bg-green-400 text-2xl">
                            <CgProfile />
                        </button>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;