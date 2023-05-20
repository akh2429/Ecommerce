import React from 'react'

export default function RenderNestedObject(val) {
    return (
        <div>
            {Object.entries(val).map(([key, value]) => (<div key={key} >{key}:{value}</div>))}
        </div>
    )
}
