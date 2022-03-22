import React from "react"
import {Link} from "react-router-dom"

const Header = () => {
    return(
        <div>
        <h1>Welcome to Robby's Italian Art Page</h1>
        <h2>Here is my list of "TOP TIER" Italian Artists and Museums!</h2>
        <Link to='/Artists'>Artists</Link>
        <div></div>
        <Link to="/Museums">Museums</Link>
        </div>
    )

}

export default Header