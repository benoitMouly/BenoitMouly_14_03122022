import BasicModal  from './utils/Modal.jsx';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getInfos } from '../features/user/userSlice';

import DatePickerCustom from './utils/DatePicker.jsx';
import BasicSelect from './utils/SelectCustom.jsx';

import '../components/Form.css'

const FormNew = () => {
    const [dateofbirth, setBirth]  = useState("");
    const [startdate, setStart]  = useState("");
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastame] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState('')

    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    const handleClose = () => {
      setOpen(false);
        navigate('/listing')
    }



    const getDateBirth = (dateofbirth) => {
        setBirth(dateofbirth)
        console.log(dateofbirth)
      }

      const getDateStart = (startdate) => {
        setStart(startdate)
        console.log(startdate)
      }

      const getState = (state) => {
        setState(state)
      }

      const getDepartment = (department) => {
        setDepartment(department)
      }

    const dispatch = useDispatch()

    const onCreate = e =>  {
        e.preventDefault();
        const postData = {
            firstname, lastname, startdate, department, dateofbirth, street, city, state, zipCode
        }
        submitForm(postData)
      }


      const submitForm = (data) => {
        dispatch(getInfos(data))
        setOpen(true)
      }

    return (
        <div>
        <div className='form'>
            <form onSubmit={onCreate}>
            <div className='form-elt global-infos'>
                <p>Informations générales</p>
                <label htmlFor="firstname">First Name : </label>
                <input type="text" id="name" name="firstname" 
                    size="10" onChange={(e) => setFirstname(e.target.value)} ></input>

                <label htmlFor="lastname">Last Name : </label>
                <input type="text" id="name" name="lastname"  size="10"  onChange={(e) => setLastame(e.target.value)} ></input>
                <label htmlFor="dateofbirth">Date de naissance : </label>
                <div className='pickerdateofbirth'>
                    <DatePickerCustom getDate={getDateBirth} className="dateofbirth"/>
                </div>
                <label htmlFor="startdate">Date de début de contrat : </label>
                <div className='pickerstartdate'>
                    <DatePickerCustom getDate={getDateStart} className="startdate"/>
                </div>

            </div>

            {/* adressesInfos */}
            <div className='form-elt adress-infos'>
            <p> Adresse</p>
                <label htmlFor="street">Street : </label>
                <input type="text" id="street" name="street" 
                size="10" onChange={(e) => setStreet(e.target.value)} ></input>
        
                <label htmlFor="city">City : </label>
                <input type="text" id="city" name="city"  size="10" onChange={(e) => setCity(e.target.value)} ></input>

                <div className="form-elt">
                    <p>State</p>
                    <BasicSelect  className="state" getSelect={getState} />
                </div>
                


                <label htmlFor="zipcode">Zip code : </label>
                <input type="text" id="zipcode" name="zipcode"  size="10" onChange={(e) => setZipCode(e.target.value)} ></input>
                
            </div>

            {/* department*/}
            <div className='form-elt department-infos'>
                <p> Pôle</p>

                <BasicSelect  getSelect={getDepartment} className="department" />
        </div>

        {/* Send btn */}
        <div className="save-btn">
            <input type="submit"  className="save-button" value="Save"/>
            <div className="basic-modal">
            <BasicModal open={open} onClose={handleClose}/>
            </div>
         
        </div>
        </form>
        </div>
    </div>
    );


};

export default FormNew;