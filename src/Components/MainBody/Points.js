import React from 'react'
import './Points.css'

function Point(props) {
    return (
        <div className="flex point">
            <div className="blue-bullet"></div>
            <div>
                {props.description}
            </div>
        </div>
    )
}

export default Point;