import React, { useEffect, useState } from 'react'

const Time = () => {

    const [container, setContainer] = useState(0)


    useEffect(() => {
        // setContainer(container + 0.0002)

        if(container.toFixed(0) > 120){
            setContainer(0)
        }

    }, [container])
    return (
        <div>
            <h1>{container.toFixed(0)}</h1>
        </div>
    )
}

export default Time