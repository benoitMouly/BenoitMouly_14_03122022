import React from 'react';
import FormNew from '../components/Form.jsx'

/**
 * Main page
 * @component react
 * @returns {JsxElement} 
 */

const Home = () => {
    return (
        <>
            <h3 className='title-page'>Create employee</h3>
            <FormNew/>
        </>
    );
};

export default Home;