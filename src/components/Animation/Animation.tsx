import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export const Animation = () => {
    const [isHidden, setIsHidden] = useState(false);
    const navigate = useNavigate();

    const handleClick = (path: string) => {
        setIsHidden(true);

        setTimeout(() => {
            navigate(path);
        }, 600);
    };


    return (
        <>
            <div className={`choice__wrap ${isHidden ? "hidden" : ""}`}>
                <Link
                    to="/"
                    className="choice__text"
                    onClick={() => handleClick("/commercial")}
                >
                    Комерційні будівлі
                </Link>

                <Link
                    to="/hotels"
                    className="choice__text"
                    onClick={() => handleClick("/hotels")}
                >
                    Готелі
                </Link>
            </div>
        </>
    );
};


