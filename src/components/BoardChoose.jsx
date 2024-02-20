import React, { useState } from "react";

function Card ({children, number}) {
    return (
        <li>
            <div className="card">
                <div className="number">{number}</div>
                <h4>{children}</h4>
                <div className="plus">+</div>
            </div>
        </li>
    )
}

const listOfUsers = ["Dr Team", "Mia Plays", "Keoxer", "Nickmerc", "Sammy", "Gamer", "John", "Peter", "David"]

export function BoadChoose() {
    const [activeButton, setActiveButton] = useState("Party");

    const handleClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className="choose">
            <p><strong>01.</strong> Choose Platform</p>

            <div className="choose-platform">
                <button className={activeButton === "Party" ? "active" : ""} onClick={() => handleClick("Party")}>
                    {activeButton === "Party" ? "🎉" : ""} Party
                </button>
                <button className={activeButton === "Matches" ? "active" : ""} onClick={() => handleClick("Matches")}>
                    {activeButton === "Matches" ? "🔥" : ""} Matches
                </button>
                <button className={activeButton === "Streams" ? "active" : ""} onClick={() => handleClick("Streams")}>
                {activeButton === "Streams" ? "🎥" : ""}  Streams
                </button>
            </div>

            <p><strong>02.</strong> Searching Game</p>

            <div className="seaching-games">
                <header>
                    <h4>COD Warzone</h4>
                    <svg height="40" width="40" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 7.82001H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 7.82001H4" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20 16.82H22" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2 16.82H12" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 11.82C10.2091 11.82 12 10.0291 12 7.82001C12 5.61087 10.2091 3.82001 8 3.82001C5.79086 3.82001 4 5.61087 4 7.82001C4 10.0291 5.79086 11.82 8 11.82Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16 20.82C18.2091 20.82 20 19.0291 20 16.82C20 14.6109 18.2091 12.82 16 12.82C13.7909 12.82 12 14.6109 12 16.82C12 19.0291 13.7909 20.82 16 20.82Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </header>
                
                <nav className="nav-choose">
                    <ul>
                        {
                            listOfUsers.map((user, index) => (
                                <Card key={index} number={index + 1}>{user}</Card>
                            ))
                        }
                    </ul>
                </nav>
                
                <footer>
                    <button><strong>Search Now</strong></button>
                </footer>
            </div>
        </div>
    );
}
