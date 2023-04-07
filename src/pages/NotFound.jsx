import React from 'react';

/**
 * If url path doesnt have any page attached, returning this page by default
 * @component react
 * @returns {JsxElement} 
 */

const NotFound = () => {
    return (
        <div>
            <p>Désolé cette page n'existe pas</p>
        </div>
    );
};

export default NotFound;