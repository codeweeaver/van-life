import { PacmanLoader } from "react-spinners";

export const Loader = ({ color, size, speed }) => {
    return (
        <div className="h-[60vh] flex items-center justify-center">
            <PacmanLoader
                color={color ? color : "#FF8C38"}
                size={size ? size : 25}
                speedMultiplier={speed ? speed : 1}
            />
        </div>
    );
};
