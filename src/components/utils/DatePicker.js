// // import { current } from "@reduxjs/toolkit";
// // import { fireEvent } from "@testing-library/react";
// import { current } from "@reduxjs/toolkit";
// import dayjs from "dayjs/dayjs";
// // import { isElement } from "react-dom/test-utils";
// import { useEffect, useRef, useState } from "react";

// const DatePickerCustom = () => {



//   useEffect(() => {
//     createTable();
//     hydrateMonthScroller();
//     hydrateYearScroller();
//     eventOnDays();
//     switchDisplayDays();
// }, [])



// const [displayDateRef] = useState('');
// const dates = useState()

// const inputRef = useRef('');
// const tableref = useRef('');
// const datepicker  = useRef('');
// const selectMonthes = useRef('');
// const selectYears = useRef('');

// const selectedMonth = useRef('')
// const selectedYear = useRef('')

// const displayCurrentDate = (b) => {
//   inputRef.current.value = b;
// }


// const monthRef = useRef(null)
// const yearRef = useRef(null)
  
//   let date = dayjs();
//   let daysInMonth = dayjs(date, "YYYY-MM").daysInMonth() // 29
//   let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
//   let currentDate = date.format('DD/MM/YYYY');

  
//   // let showDatePicker = document.querySelector('#datepicker');
//   let showDatePicker = datepicker.current
//   let displayDate = document.querySelector('.displayDate');
//   let dateOfBirth = document.querySelector('.dateofbirth')

//   let swipeDate;
//   let currentMonth = date.format('MM')
//   let currentYear = date.format('Y')




// /*
// Création de la table calendar 
// */
// const createTable = () => {

//   let table = tableref.current
//   let b = dayjs().format('DD/MM/YYYY')
  
//   for(let i = 0; i < 6; i++){ // 5 lignes
//     let row = table.insertRow();

//       for(let t = 0; t < 7; t++){ // 7 colonnes
//           let cell = row.insertCell();
//           let btn = document.createElement("button")
//           btn.classList.add('choosingDay')
//           cell.appendChild(btn)
          
//       }
      
//   }
//   switchDisplayDays(table, b);
// }


// /*
// Hydrate déroulants selectMonth
// */

// const hydrateMonthScroller = () => {
// let selectMonth = monthRef.current
// let defaultMonthOption = document.createElement('option')
// defaultMonthOption.value = date.format('MM');
// defaultMonthOption.innerHTML = date.format('MMMM')
// selectMonth.appendChild(defaultMonthOption)

//   for(const [index, w] of months.entries()){
//     let createOption = document.createElement('option');
//     createOption.innerHTML = w
//     selectMonth.appendChild(createOption)
//     createOption.setAttribute('value', index+1)
//     createOption.classList.add('monthOption')
//   }
// }

// /*
// Hydrate déroulants selectYear
// */
// const hydrateYearScroller = () => {
// let selectYear = yearRef.current
// let defaultYearOption = document.createElement('option')
// defaultYearOption.value = date.format('YYYY');
// defaultYearOption.innerHTML = date.format('YYYY')
// selectYear.appendChild(defaultYearOption)

//   let startDate = 1949;
//   let endDate = 2049;
//   while(startDate < endDate){
//     startDate ++;
//     let createOption = document.createElement('option');
//     createOption.innerHTML = startDate;
//     createOption.value = startDate;
//     createOption.classList.add('yearOption')
//     selectYear.appendChild(createOption)

//   }

// }

// let previousMonth = document.querySelector('.previousMonth'); // btn previousMonth
// let nextMonth = document.querySelector('.nextMonth'); // btn nextMonth


// /*
// Toggle calendar appearance ; à mettre dans une fonction une fois la refacto React 
// */

// const toggleDateOpen = (e) => {
//   switchDisplayDays(e, daysInMonth)
//   let showDatePicker = datepicker.current
//   showDatePicker.classList.toggle( 'dateHided')
//   document.addEventListener('click', function(event) {
//     if (!event.target.closest('.dateofbirth')) { // IF le closest qui remonte au parent n'a pas la classe dateofbirth, alors on est pas dessus
//       showDatePicker.classList.add('dateHided');
//     }
//   });
// }



// /*
// CurrentDate dans le champ texte
// */

// let btnhome = document.querySelector('.homeDay');


// const homeDate = (e, b) => {
//   swipeDate = dayjs().format('DD/MM/YYYY') 
  
//   // displayCurrentDate(b);
//   b = dayjs().format('DD/MM/YYYY')
//   displayCurrentDate(b)
//   let monthsOption = tableref.current.querySelectorAll('.monthOption')
//   let yearsOption = tableref.current.querySelectorAll('.yearOption');
//   updateMonth(swipeDate, monthsOption) // input select follows the current month selected
//   updateYear(swipeDate, yearsOption);
//   switchDisplayDays(e, daysInMonth);
// }

// /*
// Playing with btn months
// */

// const updateNextMonth = (e, b ) => {

//   let currentdayjs = inputRef.current.value
//   let nextMonthTimeStamp = dayjs(currentdayjs, 'DD/MM/YYYY').toDate();
//   swipeDate = dayjs(nextMonthTimeStamp).add(1, 'month') 
//   let year = swipeDate.format('Y')
//   let sanitizedMonth  = swipeDate.format('M').padStart(2, '0') // adding 0 when number < 10
//   b = swipeDate.format('DD/' + sanitizedMonth + '/' + year) 
//   let monthsOption = tableref.current.querySelectorAll('.monthOption')
//   let yearsOption = tableref.current.querySelectorAll('.yearOption');
  
//   updateMonth(b, monthsOption) // input select follows the current month selected
//   updateYear(b, yearsOption);
//   displayCurrentDate(b)
//   switchDisplayDays(e, b);
// }

// const updatePreviousMonth = (e, b) =>{
//   let currentdayjs = inputRef.current.value
//   console.log('AVANT INITIALISATION')
//   console.log(currentdayjs)
//   let previousMonthTimeStamp = dayjs(currentdayjs, 'DD/MM/YYYY').toDate();
//   swipeDate = dayjs(previousMonthTimeStamp).subtract(1, 'month')
//   let year = swipeDate.format('Y')
//   let sanitizedMonth  = swipeDate.format('M').padStart(2, '0') // adding 0 when number < 10
//   b = swipeDate.format('DD/' + sanitizedMonth + '/' + year) 
//   let monthsOption = tableref.current.querySelectorAll('.monthOption')
//   let yearsOption = tableref.current.querySelectorAll('.yearOption');
//   updateMonth(b, monthsOption)
//   updateYear(b, yearsOption);
//   displayCurrentDate(b);
//   switchDisplayDays(e, b);
// }


// /*
// Event on déroulant 
// */

// const changeMonth = (e, b) => {
//     let previousTimeStamp = dayjs(b, 'DD/MM/YYYY').toDate(); // Converting string to date
//     swipeDate = dayjs(previousTimeStamp)
//     let year = yearRef.current.value
//     let month = monthRef.current.value
//     let sanitizedMonth = month.padStart(2, '0')
//     b = swipeDate.format('DD/' + sanitizedMonth + '/' + year) 
//     console.log(b)

//     displayCurrentDate(b);
//     switchDisplayDays(e, b);
// }


// const changeYear = (e, b) => {

//   let previousTimeStamp = dayjs(b, 'DD/MM/YYYY').toDate();
//   swipeDate = dayjs(previousTimeStamp)
//   let sanitizedYear  = e.padStart(2, '0') // adding 0 when number < 10
//   let month = monthRef.current.value
//   let sanitizedMonth = month.padStart(2, '0')
//   b = swipeDate.format('DD/' + sanitizedMonth + '/' + sanitizedYear) 
//   displayCurrentDate(b)
//   switchDisplayDays(e, b);
// }

// /*
// Event on days
// */

// const eventOnDays = (e, b) => {
// let btnDayValueFill;
// let btnDays = tableref.current.querySelectorAll('.choosingDay');

// for(let i = 0; i < btnDays.length; i++){
//   // eslint-disable-next-line no-loop-func
//   btnDays[i].addEventListener('click', function(){
//     let btnDayValue = btnDays[i].innerHTML
//     let monthChoosed = monthRef.current.value
//     console.log(monthChoosed)
//     let sanitizedMonth  = monthChoosed.padStart(2, '0')
//     let yearChoosed = yearRef.current.value
//     btnDayValueFill = btnDayValue.padStart(2, '0'); 
//     e = date.format(btnDayValueFill + '/' + sanitizedMonth + '/' + yearChoosed) 

//     toggleDateOpen(showDatePicker);
//     displayCurrentDate(e)

//   })
// }
// }


// /*
// Update current month index
// */

// function updateMonth(date, elts){
//   let previousTimeStamp = dayjs(date, 'DD/MM/YYYY').toDate();
//   swipeDate = dayjs(previousTimeStamp)
//   console.log('SWWIIIPPPEE')
//   console.log(swipeDate)
//   let monthIndex = swipeDate.format('M')
 
//   for(let i = 0; i < elts.length; i++){
//     if(elts[i].value === monthIndex){
//       elts[i].setAttribute('selected', 'true')
//     } else{
//       elts[i].removeAttribute('selected', 'true')
//     }
//   }
// }

// /*
// Update current year index
// */

// function updateYear(date, elts){
//   let previousTimeStamp = dayjs(date, 'DD/MM/YYYY').toDate();
//   swipeDate = dayjs(previousTimeStamp)
  
//   let yearIndex = swipeDate.format('YYYY') 
//   for(let i = 0; i < elts.length; i++){
//     if(elts[i].value === yearIndex){
//       elts[i].setAttribute('selected', 'true')
//     } else{
//       elts[i].removeAttribute('selected', 'true')
//     }
//   }
// }

// /*
// Update current display
// */
// const switchDisplayDays = (e, b) => {
//   console.log('RIGGERR')
//   console.log(b)
//   let lastMonthDate = [];
//   let nextMonthDate = [];

//   // let previousMonthTimeStamp = dayjs(displayDateRef, 'DD/MM/YYYY').toDate();
//   let previousMonthTimeStamp = dayjs(b, 'DD/MM/YYYY').toDate(); // b is date passed and works with everything because daysInMonth gives a date
//   let previousMonthSanitize = dayjs(previousMonthTimeStamp).subtract(1, 'month').format('DD/MM/YYYY')// INDEX last day of last month
//   let lastDayPreviousMonthNumber = dayjs(previousMonthSanitize, 'DD/MM/YYYY').endOf('month').format('DD') // INT
//   let currentMonthTimeStamp = dayjs(b, 'DD/MM/YYYY').toDate();
//   let firstDay = dayjs(currentMonthTimeStamp).startOf('month').format('d')
//   // console.log(firstDay) // 4e jour de la semaine pour THURSDAY ça commence le SUNDAY /// DECEMBRE
//   let firstDayNumber = dayjs(currentMonthTimeStamp).startOf('month').format('DD') // numéro de la date pas du jour
//   let lastDayNumber = dayjs(currentMonthTimeStamp).endOf('month').format('DD')  // numéro de la date, pas numéru du jour

//   // SI le mois commence par THURSDAY, alors le premier jour du mois doit commencer sur l'index de THURSDAY
//   // On rempli les jours jusqu'au bout, si le dernier jour est SUNDAY, alors on doit terminer sur l'index de SUNDAY
//   // Et on rempli l'index du MOIS PRECEDENT et du MOIS SUIVANT

//     let dayz = tableref.current.querySelectorAll('.day-value');
    
//     let btns = tableref.current.querySelectorAll('.choosingDay')

//     for(let i = 0; i < btns.length; i++){
//       btns[i].classList.remove('beforeFirstDay')
//       btns[i].classList.remove('lastDayOfCurrentMonth')
//       btns[i].classList.remove('afterLastDayOfCurrentMonth')
//       btns[i].classList.remove('afterFirstDay')

//     }
//           let firstDayFound = 0;
//           let daytobegin;
//           let daytoend;

//           for(let i = 0; i < 7; i++){
//             if((firstDay ) === dayz[i].getAttribute('datavalue')){
//               btns[i].innerHTML = firstDayNumber
//               firstDayFound = i // Found the day of the first week from current month
//             }
//           }



        

//           btns.forEach((element, index) => {

//               if(index === firstDayFound){
//                 element.innerHTML = parseInt(firstDayNumber)
//                 element.classList.add('firstDay')
//                 daytobegin = index;
               
//               } else if(index < firstDayFound){
//                 lastMonthDate.push(lastDayPreviousMonthNumber - index);
//                 lastMonthDate.sort()
//                 element.classList.add('beforeFirstDay')
//               } else if(index > firstDayFound){
//                 if(parseInt(daytobegin) > parseInt(lastDayNumber)){
//                   element.classList.add('afterLastDayOfCurrentMonth')
//                   element.innerHTML = parseInt(daytobegin) - parseInt(lastDayNumber)
//                 } 
//                 else {
//                 nextMonthDate.push(parseInt(index) - parseInt(firstDayFound) + 1);
//                 element.classList.add('afterFirstDay')
//                 }
//               }
  
//           });

//           let beforeDays = tableref.current.querySelectorAll('.beforeFirstDay')
//           let afterDays = tableref.current.querySelectorAll('.afterFirstDay')
          
          
//           lastMonthDate.forEach((lastDates, index) => {
//               beforeDays[index].innerHTML = lastDates
//           })


//           nextMonthDate.forEach((afterDates, index) => {
//             if(parseInt(afterDates) === parseInt(lastDayNumber)){
//               afterDays[index].classList.add('lastDayOfCurrentMonth')
//               afterDays[index].innerHTML = afterDates
//               daytoend = afterDates
//             } else if(parseInt(afterDates) < parseInt(lastDayNumber)){
//               afterDays[index].innerHTML = afterDates
//             } else {
//               afterDays[index].classList.add('afterLastDayOfCurrentMonth')
//             }
//           })

//           let afterLastDays = tableref.current.querySelectorAll('.afterLastDayOfCurrentMonth')

//           for(let i = 0; i < afterLastDays.length; i++){
//             afterLastDays[i].innerHTML = i +1
//           }
// }


//   return (
// <div>
// <div className="dateofbirth">
//             <label htmlFor="date-birth">Date de naissance : </label>
//                     <input typeof = "text" className='displayDate' ref={inputRef} defaultValue={currentDate}  onClick={(e) => toggleDateOpen(e.target.value, currentDate)}></input>
//                     <div id="datepicker" ref={datepicker} className='dateHided'>
//                             <div className="first-row btns-spec">
//                                     <button className='previousMonth' onClick={(e) => updatePreviousMonth()}> prev </button>
//                                     <button className='homeDay' onClick={(e) => homeDate(e.target.value, currentDate)}>home</button>
//                                     <select className='selectMonth'  ref={monthRef} defaultValue={currentMonth} onChange={(e) => changeMonth(e.target.value, currentDate)}>
                                        
//                                     </select>
//                                     <select className='selectYear'  ref={yearRef} defaultValue={currentYear} onChange={(e) => changeYear(e.target.value, currentDate)}></select>
//                                     <button className='nextMonth' onClick={(e) => updateNextMonth()} > next </button>
//                             </div>
//                             <div className="second-row">
//                                 <table ref={tableref}>
//                                     <tbody>
//                                     <tr className='days-label'>
//                                         <th className='day-value' datavalue="0">Sun</th>
//                                         <th className='day-value' datavalue="1">Mon</th>
//                                         <th className='day-value' datavalue="2">Tues</th>
//                                         <th className='day-value' datavalue="3">Wed</th>
//                                         <th className='day-value' datavalue="4">Thur</th>
//                                         <th className='day-value' datavalue="5">Fri</th>
//                                         <th className='day-value' datavalue="6">Sat</th>
//                                     </tr>
//                                     <tr className='days-btn'>

//                                     </tr>
//                                     </tbody>
//                                 </table>

//                             </div>
//                     </div>
//             </div>
// </div>
// )
// }

// export default DatePickerCustom;




// import { current } from "@reduxjs/toolkit";
// import { fireEvent } from "@testing-library/react";
import { useEffect, useRef, useState } from "react"
import { current } from "@reduxjs/toolkit"
// import dayjs from "dayjs/dayjs";
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)
// import { isElement } from "react-dom/test-utils";


const DatePickerCustom = () => {



  useEffect(() => {
    createTable();
    hydrateMonthScroller();
    hydrateYearScroller();
    eventOnDays();
    switchDisplayDays();
}, [])



const [displayDateRef] = useState('');
const dates = useState()

const inputRef = useRef('');
const tableref = useRef('');
const datepicker  = useRef('');
const selectMonthes = useRef('');
const selectYears = useRef('');

const selectedMonth = useRef('')
const selectedYear = useRef('')

const displayCurrentDate = (b) => {
  inputRef.current.value = b;
}


const monthRef = useRef(null)
const yearRef = useRef(null)
  
  let date = dayjs();
  let daysInMonth = dayjs(date, "YYYY-MM").daysInMonth() // 29
  let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  let currentDate = date.format('DD/MM/YYYY');

  
  // let showDatePicker = document.querySelector('#datepicker');
  let showDatePicker = datepicker.current
  let displayDate = document.querySelector('.displayDate');
  let dateOfBirth = document.querySelector('.dateofbirth')

  let swipeDate;
  let currentMonth = date.format('MM')
  let currentYear = date.format('Y')




/*
Création de la table calendar 
*/
const createTable = () => {

  let table = tableref.current
  let b = dayjs().format('DD/MM/YYYY')
  
  for(let i = 0; i < 6; i++){ // 5 lignes
    let row = table.insertRow();

      for(let t = 0; t < 7; t++){ // 7 colonnes
          let cell = row.insertCell();
          let btn = document.createElement("button")
          btn.classList.add('choosingDay')
          cell.appendChild(btn)
          
      }
      
  }

  switchDisplayDays(table, b);
}


/*
Hydrate déroulants selectMonth
*/

const hydrateMonthScroller = () => {
let selectMonth = monthRef.current
let defaultMonthOption = document.createElement('option')
defaultMonthOption.value = date.format('MM');
defaultMonthOption.innerHTML = date.format('MMMM')
selectMonth.appendChild(defaultMonthOption)

  for(const [index, w] of months.entries()){
    let createOption = document.createElement('option');
    createOption.innerHTML = w
    selectMonth.appendChild(createOption)
    createOption.setAttribute('value', index+1)
    createOption.classList.add('monthOption')
  }
}

/*
Hydrate déroulants selectYear
*/
const hydrateYearScroller = () => {
let selectYear = yearRef.current
let defaultYearOption = document.createElement('option')
defaultYearOption.value = date.format('YYYY');
defaultYearOption.innerHTML = date.format('YYYY')
selectYear.appendChild(defaultYearOption)

  let startDate = 1949;
  let endDate = 2049;
  while(startDate < endDate){
    startDate ++;
    let createOption = document.createElement('option');
    createOption.innerHTML = startDate;
    createOption.value = startDate;
    createOption.classList.add('yearOption')
    selectYear.appendChild(createOption)

  }

}

let previousMonth = document.querySelector('.previousMonth'); // btn previousMonth
let nextMonth = document.querySelector('.nextMonth'); // btn nextMonth


/*
Toggle calendar appearance ; à mettre dans une fonction une fois la refacto React 
*/

const toggleDateOpen = (e) => {
  switchDisplayDays(e, date)
  let showDatePicker = datepicker.current
  showDatePicker.classList.toggle( 'dateHided')
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.dateofbirth')) { // IF le closest qui remonte au parent n'a pas la classe dateofbirth, alors on est pas dessus
      showDatePicker.classList.add('dateHided');
    }
  });
}



/*
CurrentDate dans le champ texte
*/

let btnhome = document.querySelector('.homeDay');


const homeDate = (e, b) => {
  swipeDate = dayjs().format('DD/MM/YYYY') 
  
  // displayCurrentDate(b);
  b = dayjs().format('DD/MM/YYYY')
  displayCurrentDate(b)
  let monthsOption = tableref.current.querySelectorAll('.monthOption')
  let yearsOption = tableref.current.querySelectorAll('.yearOption');
  updateMonth(swipeDate, monthsOption) // input select follows the current month selected
  updateYear(swipeDate, yearsOption);
  switchDisplayDays(e, b);
}

/*
Playing with btn months
*/

const updateNextMonth = (e, b ) => {

  let currentdayjs = inputRef.current.value
  // currentdayjs = currentdayjs.toString()
  // let nextMonthTimeStamp = dayjs(currentdayjs, 'DD/MM/YYYY').toDate();
  let nextMonthTimeStamp = dayjs(currentdayjs, 'DD/MM/YYY').toDate()
  swipeDate = dayjs(nextMonthTimeStamp).add(1, 'month') 
  let year = dayjs(swipeDate).format('YYYY') // return string, we need int
  year = parseInt(year) + 100 // dayjs begins at 1900 
  yearRef.current.value = year
  // let sanitizedMonth  = swipeDate.format('M').padStart(2, '0') // adding 0 when number < 10
  // let sanitizedMonth = dayjs(swipeDate).format('M').padStart(2, '0')
  let sanitizedMonth = dayjs(swipeDate).format('MM') // return string, we need int
  monthRef.current.value = parseInt(sanitizedMonth)
  b = swipeDate.format('DD/' + sanitizedMonth + '/' + year) 
  // console.log('BBBBBBB')
  // console.log(b)
  let monthsOption = tableref.current.querySelectorAll('.monthOption')
  let yearsOption = tableref.current.querySelectorAll('.yearOption');
  
  updateMonth(b, monthsOption) // input select follows the current month selected
  updateYear(b, yearsOption);
  displayCurrentDate(b)
  switchDisplayDays(e, b);
}

const updatePreviousMonth = (e, b) =>{
  let currentdayjs = inputRef.current.value
  console.log('AVANT INITIALISATION')
  console.log(currentdayjs)
  let previousMonthTimeStamp = dayjs(currentdayjs, 'DD/MM/YYYY').toDate();
  swipeDate = dayjs(previousMonthTimeStamp).subtract(1, 'month')
  let year = dayjs(swipeDate).format('YYYY')
  yearRef.current.value = parseInt(year)
  let sanitizedMonth  = swipeDate.format('MM');
  monthRef.current.value = parseInt(sanitizedMonth)
  b = swipeDate.format('DD/' + sanitizedMonth + '/' + year) 
  let monthsOption = tableref.current.querySelectorAll('.monthOption')
  let yearsOption = tableref.current.querySelectorAll('.yearOption');
  updateMonth(b, monthsOption)
  updateYear(b, yearsOption);
  displayCurrentDate(b);
  switchDisplayDays(e, b);
}


/*
Event on déroulant 
*/

const changeMonth = (e, b) => {
    let previousTimeStamp = dayjs(b, 'DD/MM/YYYY').toDate(); // Converting string to date
    swipeDate = dayjs(previousTimeStamp)
    let year = yearRef.current.value
    let month = monthRef.current.value
    let sanitizedMonth = month.padStart(2, '0')
    b = swipeDate.format('DD/' + sanitizedMonth + '/' + year) 
    console.log(b)

    displayCurrentDate(b);
    switchDisplayDays(e, b);
}


const changeYear = (e, b) => {

  let previousTimeStamp = dayjs(b, 'DD/MM/YYYY').toDate();
  swipeDate = dayjs(previousTimeStamp)
  let sanitizedYear  = e.padStart(2, '0') // adding 0 when number < 10
  let month = monthRef.current.value
  let sanitizedMonth = month.padStart(2, '0')
  b = swipeDate.format('DD/' + sanitizedMonth + '/' + sanitizedYear) 
  displayCurrentDate(b)
  switchDisplayDays(e, b);
}

/*
Event on days
*/

const eventOnDays = (e, b) => {
let btnDayValueFill;
let btnDays = tableref.current.querySelectorAll('.choosingDay');

for(let i = 0; i < btnDays.length; i++){
  // eslint-disable-next-line no-loop-func
  btnDays[i].addEventListener('click', function(){
    let btnDayValue = btnDays[i].innerHTML
    let monthChoosed = monthRef.current.value
    console.log(monthChoosed)
    let sanitizedMonth  = monthChoosed.padStart(2, '0')
    let yearChoosed = yearRef.current.value
    btnDayValueFill = btnDayValue.padStart(2, '0'); 
    e = date.format(btnDayValueFill + '/' + sanitizedMonth + '/' + yearChoosed) 

    toggleDateOpen(showDatePicker);
    displayCurrentDate(e)

  })
}
}


/*
Update current month index
*/

function updateMonth(date, elts){
  let previousTimeStamp = dayjs(date, 'DD/MM/YYYY').toDate();
  swipeDate = dayjs(previousTimeStamp)
  // console.log('SWWIIIPPPEE')
  // console.log(previousTimeStamp)
  let monthIndex = swipeDate.format('M')
 
  for(let i = 0; i < elts.length; i++){
    if(elts[i].value === monthIndex){
      elts[i].setAttribute('selected', 'true')
    } else{
      elts[i].removeAttribute('selected', 'true')
    }
  }
}

/*
Update current year index
*/

function updateYear(date, elts){
  let previousTimeStamp = dayjs(date, 'DD/MM/YYYY').toDate();
  swipeDate = dayjs(previousTimeStamp)
  
  let yearIndex = swipeDate.format('YYYY') 
  for(let i = 0; i < elts.length; i++){
    if(elts[i].value === yearIndex){
      elts[i].setAttribute('selected', 'true')
    } else{
      elts[i].removeAttribute('selected', 'true')
    }
  }
}

/*
Update current display
*/
const switchDisplayDays = (e, b) => {
  // console.log('RIGGERR')
  // console.log(b)
  let lastMonthDate = [];
  let nextMonthDate = [];

  // let previousMonthTimeStamp = dayjs(displayDateRef, 'DD/MM/YYYY').toDate();
  let previousMonthTimeStamp = dayjs(b, 'DD/MM/YYYY').toDate(); // b is date passed and works with everything because daysInMonth gives a date
  let previousMonthSanitize = dayjs(previousMonthTimeStamp).subtract(1, 'month').format('DD/MM/YYYY')// INDEX last day of last month
  let lastDayPreviousMonthNumber = dayjs(previousMonthSanitize, 'DD/MM/YYYY').endOf('month').format('DD') // INT
  let currentMonthTimeStamp = dayjs(b, 'DD/MM/YYYY').toDate();
  let firstDay = dayjs(currentMonthTimeStamp).startOf('month').format('d')
  console.log('FIRST DAY')
  console.log(b)
  // console.log(firstDay) // 4e jour de la semaine pour THURSDAY ça commence le SUNDAY /// DECEMBRE
  let firstDayNumber = dayjs(currentMonthTimeStamp).startOf('month').format('DD') // numéro de la date pas du jour
  let lastDayNumber = dayjs(currentMonthTimeStamp).endOf('month').format('DD')  // numéro de la date, pas numéru du jour

  // SI le mois commence par THURSDAY, alors le premier jour du mois doit commencer sur l'index de THURSDAY
  // On rempli les jours jusqu'au bout, si le dernier jour est SUNDAY, alors on doit terminer sur l'index de SUNDAY
  // Et on rempli l'index du MOIS PRECEDENT et du MOIS SUIVANT

    let dayz = tableref.current.querySelectorAll('.day-value');
    
    let btns = tableref.current.querySelectorAll('.choosingDay')

    for(let i = 0; i < btns.length; i++){
      btns[i].classList.remove('beforeFirstDay')
      btns[i].classList.remove('lastDayOfCurrentMonth')
      btns[i].classList.remove('afterLastDayOfCurrentMonth')
      btns[i].classList.remove('afterFirstDay')

    }
          let firstDayFound = 0;
          let daytobegin;
          let daytoend;

          for(let i = 0; i < 7; i++){
            if((firstDay ) === dayz[i].getAttribute('datavalue')){
              btns[i].innerHTML = firstDayNumber
              firstDayFound = i // Found the day of the first week from current month
            }
          }



        

          btns.forEach((element, index) => {

              if(index === firstDayFound){
                element.innerHTML = parseInt(firstDayNumber)
                element.classList.add('firstDay')
                daytobegin = index;
               
              } else if(index < firstDayFound){
                lastMonthDate.push(lastDayPreviousMonthNumber - index);
                lastMonthDate.sort()
                element.classList.add('beforeFirstDay')
              } else if(index > firstDayFound){
                if(parseInt(daytobegin) > parseInt(lastDayNumber)){
                  element.classList.add('afterLastDayOfCurrentMonth')
                  element.innerHTML = parseInt(daytobegin) - parseInt(lastDayNumber)
                } 
                else {
                nextMonthDate.push(parseInt(index) - parseInt(firstDayFound) + 1);
                element.classList.add('afterFirstDay')
                }
              }
  
          });

          let beforeDays = tableref.current.querySelectorAll('.beforeFirstDay')
          let afterDays = tableref.current.querySelectorAll('.afterFirstDay')
          
          
          lastMonthDate.forEach((lastDates, index) => {
              beforeDays[index].innerHTML = lastDates
          })


          nextMonthDate.forEach((afterDates, index) => {
            if(parseInt(afterDates) === parseInt(lastDayNumber)){
              afterDays[index].classList.add('lastDayOfCurrentMonth')
              afterDays[index].innerHTML = afterDates
              daytoend = afterDates
            } else if(parseInt(afterDates) < parseInt(lastDayNumber)){
              afterDays[index].innerHTML = afterDates
            } else {
              afterDays[index].classList.add('afterLastDayOfCurrentMonth')
            }
          })

          let afterLastDays = tableref.current.querySelectorAll('.afterLastDayOfCurrentMonth')

          for(let i = 0; i < afterLastDays.length; i++){
            afterLastDays[i].innerHTML = i +1
          }
}


  return (
<div>
<div className="dateofbirth">
            <label htmlFor="date-birth">Date de naissance : </label>
                    <input typeof = "text" className='displayDate' ref={inputRef} defaultValue={currentDate}  onClick={(e) => toggleDateOpen(e.target.value, currentDate)}></input>
                    <div id="datepicker" ref={datepicker} className='dateHided'>
                            <div className="first-row btns-spec">
                                    <button className='previousMonth' onClick={(e) => updatePreviousMonth()}> prev </button>
                                    <button className='homeDay' onClick={(e) => homeDate(e.target.value, currentDate)}>home</button>
                                    <select className='selectMonth'  ref={monthRef} defaultValue={currentMonth} onChange={(e) => changeMonth(e.target.value, currentDate)}>
                                        
                                    </select>
                                    <select className='selectYear'  ref={yearRef} defaultValue={currentYear} onChange={(e) => changeYear(e.target.value, currentDate)}></select>
                                    <button className='nextMonth' onClick={(e) => updateNextMonth()} > next </button>
                            </div>
                            <div className="second-row">
                                <table ref={tableref}>
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
</div>
)
}

export default DatePickerCustom;