import { NavLink } from "react-router";

export default function BaseLink(props) {
    return (
        <NavLink
            className={({ isActive }) =>
                isActive ? "underline font-bold text-gray-900" : null
            }
            to={props.to}
            end={props.end ? true : false}
        >
            {props.children}
        </NavLink>
    );
}
