import { useSelector } from "react-redux";
import { Link } from "react-router-dom"


const SideBar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if (!isMenuOpen) return null;

    return (
        <div className="w-48 shadow-lg p-5">
            <ul>

                <li> <Link to="/">Home</Link>
                </li>
                <li>Shorts</li>
                <li>Subscription</li>
            </ul>
            <h1 className="font-bold pt-5">You</h1>
            <ul>
                <li>Your Channel</li>
                <li>History</li>
                <li>Your Videos</li>
                <li>Watch Later</li>
            </ul>
            <h1 className="font-bold pt-5">Explore</h1>
            <ul>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Music</li>
                <li>Films</li>
                <li>Sports</li>
            </ul>

        </div>
    );
};

export default SideBar;