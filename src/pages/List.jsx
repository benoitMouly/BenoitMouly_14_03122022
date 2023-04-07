import React from 'react';
import Table from '../components/utils/Table';

/**
 * Listing of users, regrouping into an external component
 * @component react
 * @returns {JsxElement} 
 */

const Listing = () => {
    return (
    <>
        <h3 className='title-page'>Page listing</h3>
        <Table />
    </>
    );
};

export default Listing;