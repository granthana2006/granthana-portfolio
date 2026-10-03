import React, { useEffect } from "react";

const Intro = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 5800);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="cinematic-intro">
            <div className="intro-beam"></div>

            <div className="intro-content">
                <h1>GRANTHANA GM</h1>
                <p>Computer Science Engineer</p>
            </div>
        </div>
    );
};

export default Intro;