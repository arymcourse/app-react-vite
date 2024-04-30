import { useContext } from "react";
import { Context } from "../context/AppContext";
import { Link } from "react-router-dom";
import SolutionItem from "./SolutionItem";

const NavList = () => {
    const {navigation} = useContext(Context)
    return (
        <>
            {navigation.map(item => (
                <Link to={item.href} 
                    key={item.name}
                    className="text-sm font-semibold leading-6 text-gray-900">
                    {item.name}
                </Link>
            ))}
            <SolutionItem />
        </>
    )
}

export default NavList;