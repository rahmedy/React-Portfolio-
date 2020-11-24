import React from 'react'
import Main from '../../Main'
import { homeObjOne , homeObjTwo, homeObjThree} from './Data'

function Home() {
    return (
        <>
            <Main {...homeObjOne} />
            <Main {...homeObjThree} />
            <Main {...homeObjTwo} />

        </>
    )
}

export default Home
