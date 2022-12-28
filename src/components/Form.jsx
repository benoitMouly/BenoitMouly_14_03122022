import BasicModal  from './utils/Modal.jsx';
import React, { useEffect } from 'react';
import DatePickerCustom from './utils/DatePicker.js';
import BasicSelect from './utils/SelectCustom.jsx';
// import datepickervanilla from './utils/DatePicker.js'
// import datepickervanilla from './utils/DatePicker.js';


const FormNew = () => {
    // useEffect(() => {
    //     datepickervanilla();
    // }, [])

// datepickervanilla();

    return (
        <div>
        <div className='form'>
            <div className='form-elt global-infos'>
                <p>Informations générales</p>
            <label htmlFor="firstname">First Name : </label>
            <input type="text" id="name" name="firstname" required
                size="10"></input>

            <label htmlFor="lastname">Last Name : </label>
            <input type="text" id="name" name="lastname" required size="10"></input>
            <DatePickerCustom className="dateofbirth"/>
            <DatePickerCustom className="startdate"/>
        </div>

            {/* adressesInfos */}
            <div className='form-elt adress-infos'>
            <p> Adresse</p>
                <label htmlFor="street">Street : </label>
                <input type="text" id="street" name="street" required
                    size="10"></input>
        
                <label htmlFor="city">City : </label>
                <input type="text" id="city" name="city" required size="10"></input>

                <BasicSelect  className="state"/>


                <label htmlFor="zipcode">Zip code : </label>
                <input type="text" id="zipcode" name="zipcode" required size="10"></input>
                
            </div>

            {/* department*/}
            <div className='form-elt department-infos'>
            <p> Pôle</p>
            {/* <label htmlFor="department">Department : </label>

            <select name="department" id="department">
                <option value="">--Please choose a department--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select> */}
            <BasicSelect  className="department"/>
        </div>

        {/* Send btn */}
        <div className="save-btn">
            <input type="submit"  className="save-button" value="Save"/>
            <BasicModal />
        </div>
        
        </div>
        </div>
    );


};

export default FormNew;