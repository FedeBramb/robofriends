import React from 'react';

// css: overflow-y jsx: overflowY
// 'scroll' css way scrollable
const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;