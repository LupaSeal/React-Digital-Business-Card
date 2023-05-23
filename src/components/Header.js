import React from "react"

const Header = () => {
    return (
        <header className="header">
            <img className ="image" src= "./images/person.jpeg" />
            <h1 className="name">James Smith</h1>
            <span className="job">Software Engineer</span>
            <h6 className="site">www.javawithus.com</h6>

            <div className="buttons">
                <button className="email">
                <svg className="email-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M3.87 4h13.25C18.37 4 19 4.59 19 5.79v8.42c0 1.19-.63 1.79-1.88 1.79H3.87c-1.25 0-1.88-.6-1.88-1.79V5.79c0-1.2.63-1.79 1.88-1.79zm6.62 8.6l6.74-5.53c.24-.2.43-.66.13-1.07c-.29-.41-.82-.42-1.17-.17l-5.7 3.86L4.8 5.83c-.35-.25-.88-.24-1.17.17c-.3.41-.11.87.13 1.07z"/></svg>
                    <span className="email-text">Email</span></button>
                
                <button className="link">
                <svg className="link-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.336 18.339h-2.665v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.091v4.715ZM7.004 8.575a1.546 1.546 0 0 1-1.548-1.549a1.548 1.548 0 1 1 1.547 1.549Zm1.336 9.764H5.667V9.75H8.34v8.589ZM19.67 3H4.33C3.594 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.339C20.4 21 21 20.42 21 19.703V4.297C21 3.581 20.4 3 19.666 3h.003Z"/></svg>
                    <span className="link-text">Linkedln</span></button>
            </div>
        </header>
    )
}

export default Header