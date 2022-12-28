import React, { useEffect } from 'react';
// import DatePickerCustom from './utils/DatePicker.js';
// import datepickervanilla from './utils/DatePicker.js'
// import datepickervanilla from './utils/DatePicker.js';


const Form = () => {
    // useEffect(() => {
    //     datepickervanilla();
    // }, [])

// datepickervanilla();

    return (
        <div>
        <div className='form'>
            <div className='form-elt global-infos'>
            <label htmlFor="firstname">First Name : </label>
            <input type="text" id="name" name="firstname" required
                size="10"></input>

            <label htmlFor="lastname">Last Name : </label>
            <input type="text" id="name" name="lastname" required size="10"></input>

            <div className="dateofbirth">
            <label htmlFor="date-birth">Date de naissance : </label>
                    {/* <input typeof = "text" className='displayDate' onChange={datepickervanilla} ></input> */}
                    <div id="datepicker" className='dateHided'>
                            <div className="first-row btns-spec">
                                    {/* <button className='previousMonth' onChange={datepickervanilla}> prev </button> */}
                                    <button className='homeDay'>home</button>
                                    <select className='selectMonth'>
                                        
                                    </select>
                                    <select className='selectYear' ></select>
                                    <button className='nextMonth' > next </button>
                            </div>
                            <div className="second-row">
                                <table>
                                    <tbody>
                                    <tr className='days-label'>
                                        <th className='day-value' datavalue="0">Sun</th>
                                        <th className='day-value' datavalue="1">Mon</th>
                                        <th className='day-value' datavalue="2">Tues</th>
                                        <th className='day-value' datavalue="3">Wed</th>
                                        <th className='day-value' datavalue="4">Thur</th>
                                        <th className='day-value' datavalue="5">Fri</th>
                                        <th className='day-value' datavalue="6">Sat</th>
                                    </tr>
                                    <tr className='days-btn'>

                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                    </div>
            </div>
            {/* <DatePickerCustom /> */}
            <div className="startdate"></div>
            {/* <Datepicker/> */}
        </div>

            {/* adressesInfos */}
            <div className='form-elt adress-infos'>
                <label htmlFor="street">Street : </label>
                <input type="text" id="street" name="street" required
                    size="10"></input>
        
                <label htmlFor="city">City : </label>
                <input type="text" id="city" name="city" required size="10"></input>

                <label htmlFor="state">State : </label>

                <select name="state" id="state">
                    <option value="">--Please choose an option--</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="goldfish">Goldfish</option>
                </select>


                <label htmlFor="zipcode">Zip code : </label>
                <input type="text" id="zipcode" name="zipcode" required size="10"></input>
            </div>

            {/* department*/}
            <div className='form-elt department-infos'>
            <label htmlFor="department">Department : </label>

            <select name="department" id="department">
                <option value="">--Please choose a department--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>
        </div>

        {/* Send btn */}
        <div className="save-btn">
            <input type="submit"  className="save-button" value="Save"/>
        </div>
        
        </div>
        </div>
    );


};

// export default Form;