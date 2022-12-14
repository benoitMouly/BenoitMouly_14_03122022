import BasicModal  from './utils/Modal.jsx';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getInfos } from '../features/user/userSlice';
import Validator from "./utils/Validator.js"

import DatePickerCustom from './utils/DatePicker.jsx';
import BasicSelect from './utils/SelectCustom.jsx';

import '../components/Form.css'

const FormNew = () => {
    const [dateofbirth, setBirth]  = useState("");
    const [startdate, setStart]  = useState("");
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState('')

    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    let isValid = [];

    const handleClose = () => {
      setOpen(false);
        navigate('/listing')
    }

      const getFirstName = (firstname) => {
        Validator.validateString(firstname, document.querySelector('#firstname'), isValid)
        if(isValid.includes(true)){
          setFirstname(firstname)
        } else {
          setFirstname("")
        }
      }

      const getLastName = (lastname) => {
        Validator.validateString(lastname, document.querySelector('#lastname'), isValid)
        if(isValid.includes(true)){
          setLastname(lastname)
        } else {
          setLastname("")
        }
      }

      const getStreet = (street) => {
        Validator.validateString(street, document.querySelector('#street'), isValid)
        if(isValid.includes(true)){
          setStreet(street)
        } else {
          setStreet("")
        }
      }

      const getCity = (city) => {
        Validator.validateString(city,document.querySelector('#city'), isValid)
        if(isValid.includes(true)){
          setCity(city)
        } else {
          setCity("")
        }
      }

      const getDateBirth = (dateofbirth) => {
        Validator.validateDate(dateofbirth, document.querySelector('.pickerdateofbirth > div > input'), isValid)
        if(isValid.includes(true)){
          setBirth(dateofbirth)
        }
        // console.log(dateofbirth)
      }

      const getDateStart = (startdate) => {
        Validator.validateDate(startdate, document.querySelector('.pickerstartdate > div > input'), isValid)
        if(isValid.includes(true)){
          setStart(startdate)
        }
        // console.log(startdate)
      }

      const getState = (state) => {
        Validator.validatePostCode(state, document.querySelector('.state'), isValid)
        setState(state)
      }

      const getDepartment = (department) => {
        Validator.validatePostCode(department, document.querySelector('.department'), isValid)
        setDepartment(department)
      }

      const getZipCode = (zipCode) => {
        Validator.validatePostCode(zipCode, document.querySelector('#zipcode'), isValid)
        if(isValid.includes(true)){
        setZipCode(zipCode)
        }
      }

    const dispatch = useDispatch()

    const onCreate = (e) =>  {
        e.preventDefault();
        const postData = {
          firstname, lastname, startdate, department, dateofbirth, street, city, state, zipCode
        }
        
        if(Validator.hasEmptyProperties(postData)){
          e.preventDefault()
          Validator.validatePostCode(zipCode, document.querySelector('#zipcode'), isValid)
          Validator.validateString(firstname, document.querySelector('#firstname'), isValid)
          Validator.validateString(lastname, document.querySelector('#lastname'), isValid)
          Validator.validateString(street, document.querySelector('#street'), isValid)
          Validator.validateString(city,document.querySelector('#city'), isValid)
          Validator.validateDate(startdate, document.querySelector('.pickerstartdate > div > input'), isValid)
          Validator.validateDate(dateofbirth, document.querySelector('.pickerdateofbirth > div > input'), isValid)
          Validator.validatePostCode(state, document.querySelector('.state'), isValid)
          Validator.validatePostCode(department, document.querySelector('.department'), isValid)   
        } else {
          submitForm(postData)
        }      
      }
      
      const submitForm = (data) => {
        dispatch(getInfos(data))
        setOpen(true)
      }

    return (
        <>
            <form onSubmit={onCreate} className='form'>
            <div className='form-elt global-infos'>
                <h4 className='title-form_part'>Informations g??n??rales</h4>
                <label className="label-default" htmlFor="firstname">First Name : </label>
                <input type="text" id="firstname" name="firstname" 
                    size="10" onChange={(e) => getFirstName(e.target.value)} ></input>

                <label className="label-default" htmlFor="lastname">Last Name : </label>
                <input type="text" id="lastname" name="lastname"  size="10"  onChange={(e) => getLastName(e.target.value)} ></input>
                <label className="label-default" htmlFor="dateofbirth">Date de naissance : </label>
                <div className='pickerdateofbirth'>
                    <DatePickerCustom getDate={getDateBirth} className="dateofbirth"/>
                </div>
                <label className="label-default" htmlFor="startdate">Date de d??but de contrat : </label>
                <div className='pickerstartdate'>
                    <DatePickerCustom getDate={getDateStart} className="startdate"/>
                </div>

            </div>

            {/* adressesInfos */}
            <div className='form-elt adress-infos'>
            <h4 className='title-form_part'> Adresse</h4>
                <label className="label-default" htmlFor="street">Street : </label>
                <input type="text" id="street" name="street" 
                size="10" onChange={(e) => getStreet(e.target.value)} ></input>
        
                <label className="label-default" htmlFor="city">City : </label>
                <input type="text" id="city" name="city"  size="10" onChange={(e) => getCity(e.target.value)}  ></input>


                    <label className="label-default label-state">State :</label>
                    <BasicSelect  className="state" getSelect={getState} />
                
                


                <label className="label-default" htmlFor="zipcode">Zip code : </label>
                <input type="text" id="zipcode" name="zipcode"  size="10" onChange={(e) => getZipCode(e.target.value)} ></input>
                
            </div>

            {/* department*/}
            <div className='form-elt department-infos'>
                <h4 className='title-form_part'> P??le</h4>
                <label className="label-default label-department">Department :</label>
                <BasicSelect  getSelect={getDepartment} className="department" />
        </div>

        {/* Send btn */}
        <div className="save-btn">
            <input type="submit"  className="save-button" value="Add employee"/>
            <div className="basic-modal">
            <BasicModal open={open} onClose={handleClose}/>
            </div>
         
        </div>
        </form>

    </>
    );


};

export default FormNew;