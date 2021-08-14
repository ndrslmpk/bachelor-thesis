import React from 'react';

function ImgContainer(path, name, className) {
    return (
        <div className={className}>
            <img src={path} alt={name} className={className} />
        </div>
    );
}

export default ImgContainer;