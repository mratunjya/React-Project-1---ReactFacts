import React from 'react'
import './MainBody.css'
import Points from'./Points'

function MainBody() {
    return (
        <div className="main-body">
            <h1>Fun facts about React</h1>
            <Points description={"Was first released in 2013"} />
            <Points description={"Was originally created by Jordan Walke"} />
            <Points description={"Has well over 100K stars on GitHub"} />
            <Points description={"Is maintained by Facebook"} />
            <Points description={"Powers thousands of enterprise apps, including mobile apps"} />
        </div>
    )
}

export default MainBody;