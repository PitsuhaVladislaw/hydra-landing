import React from "react";
import '../index.css'

type ButtonProps = {
    params: string;
};

const Button: React.FC<ButtonProps> = ({ params }) => {
    const handleClick = () => {
        window.location.reload();
    };

    return (
        <button onClick={handleClick}>
        {params}
        </button>
    );
};

export default Button;