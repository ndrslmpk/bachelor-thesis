import React from 'react';

function SvgContainer(props, path, className) {
    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export default SvgContainer;