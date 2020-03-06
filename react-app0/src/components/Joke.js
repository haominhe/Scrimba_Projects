import React from 'react';

function Joke(props) {
    // if (props.question) {
    //     return (
    //         <div>
    //             <p>Question: {props.question} Answer: {props.punchLine}</p>
    //             <br/>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <p>{props.punchLine}</p>
    //             <br/>
    //         </div>
    //     )
    // }

    return (
        <div>
            {/* style={{ display: !props.question && 'none' }} */}
            <p style={{ display: props.question ? 'block' : 'none' }}>Question: {props.question} </p>
            <p style={{ color: !props.question && '#888888' }}>Answer: {props.punchLine}</p>
            <br />
        </div>
    )


} export default Joke;