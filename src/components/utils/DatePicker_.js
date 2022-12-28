import { current } from "@reduxjs/toolkit";
import { fireEvent } from "@testing-library/react";
import moment from "moment/moment";
import { isElement } from "react-dom/test-utils";

const DatePickerCustom = () => {
  
  let date = moment();
  let daysInMonth = moment(date, "YYYY-MM").daysInMonth() // 29
  let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  let currentDate = date.format('DD/MM/YYYY');

  
  let showDatePicker = document.querySelector('#datepicker');
  let displayDate = document.querySelector('.displayDate');
  let dateOfBirth = document.querySelector('.dateofbirth')

  let swipeDate;
  displayDate.value = currentDate; // Initialize current date

  let selectMonth = document.querySelector('.selectMonth');
  selectMonth.value = date.format('MM')
  let selectYear = document.querySelector('.selectYear');
  selectYear.value = date.format('Y')


/*
Création de la table calendar 
*/

  let table = document.querySelector("table");
  
  for(let i = 0; i < 6; i++){ // 5 lignes
    let row = table.insertRow();

      for(let t = 0; t < 7; t++){ // 7 colonnes
          let cell = row.insertCell();
          let btn = document.createElement("button")
          btn.classList.add('choosingDay')
          cell.appendChild(btn)
          
      }
      
  }
  switchDisplayDays(table, swipeDate);

/*
Hydrate déroulants selectMonth
*/

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

/*
Hydrate déroulants selectYear
*/

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


let previousMonth = document.querySelector('.previousMonth'); // btn previousMonth
let nextMonth = document.querySelector('.nextMonth'); // btn nextMonth


/*
Toggle calendar appearance ; à mettre dans une fonction une fois la refacto React 
*/

function toggleDateOpen(elt){
  elt.classList.toggle( 'dateHided')
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.dateofbirth')) { // IF le closest qui remonte au parent n'a pas la classe dateofbirth, alors on est pas dessus
      showDatePicker.classList.add('dateHided');
    }
  });
}



displayDate.addEventListener('click', function(){
  toggleDateOpen(showDatePicker);

})



/*
CurrentDate dans le champ texte
*/

let btnhome = document.querySelector('.homeDay');

btnhome.addEventListener('click', function (){
  swipeDate = moment().format('DD/MM/YYYY') 
  displayDate.value = moment().format('DD/MM/YYYY')
  let monthsOption = document.querySelectorAll('.monthOption')
  let yearsOption = document.querySelectorAll('.yearOption');
  updateMonth(swipeDate, monthsOption) // input select follows the current month selected
  updateYear(swipeDate, yearsOption);
  switchDisplayDays(table, daysInMonth);

})

/*
Playing with btn months
*/

updateMonth(() =>  {

  let nextMonthTimeStamp = moment(displayDate.value, 'DD/MM/YYYY').toDate();
  swipeDate = moment(nextMonthTimeStamp).add(1, 'month').format('DD/MM/YYYY') 

  displayDate.value = swipeDate;
  let monthsOption = document.querySelectorAll('.monthOption')
  let yearsOption = document.querySelectorAll('.yearOption');
  
  updateMonth(swipeDate, monthsOption) // input select follows the current month selected
  updateYear(swipeDate, yearsOption);
  switchDisplayDays(table, daysInMonth);
})

// nextMonth.addEventListener('click', function(){

//   let nextMonthTimeStamp = moment(displayDate.value, 'DD/MM/YYYY').toDate();
//   swipeDate = moment(nextMonthTimeStamp).add(1, 'month').format('DD/MM/YYYY') 

//   displayDate.value = swipeDate;
//   let monthsOption = document.querySelectorAll('.monthOption')
//   let yearsOption = document.querySelectorAll('.yearOption');
  
//   updateMonth(swipeDate, monthsOption) // input select follows the current month selected
//   updateYear(swipeDate, yearsOption);
//   switchDisplayDays(table, daysInMonth);
// })

previousMonth.addEventListener('click', function(){

  let previousMonthTimeStamp = moment(displayDate.value, 'DD/MM/YYYY').toDate();
  swipeDate = moment(previousMonthTimeStamp).subtract(1, 'month').format('DD/MM/YYYY') 

  displayDate.value = swipeDate;
  let monthsOption = document.querySelectorAll('.monthOption')
  let yearsOption = document.querySelectorAll('.yearOption');

  updateMonth(swipeDate, monthsOption)
  updateYear(swipeDate, yearsOption);
  switchDisplayDays(table, daysInMonth);
})


/*
Event on déroulant 
*/

selectMonth.addEventListener('change', function(e){
  e.preventDefault()

  let previousTimeStamp = moment(displayDate.value, 'DD/MM/YYYY').toDate(); // Converting string to date
  swipeDate = moment(previousTimeStamp)
  let sanitizedMonth  = this.value.padStart(2, '0') // adding 0 when number < 10
  displayDate.value = swipeDate.format('DD/' + sanitizedMonth + '/YYYY') 
  switchDisplayDays(table, displayDate.value);
})

selectYear.addEventListener('change', function(e){
  e.preventDefault()
  let previousTimeStamp = moment(displayDate.value, 'DD/MM/YYYY').toDate();
  swipeDate = moment(previousTimeStamp)
  let sanitizedYear  = this.value.padStart(2, '0') // adding 0 when number < 10
  displayDate.value = swipeDate.format('DD/MM/' + sanitizedYear) 

  switchDisplayDays(table, swipeDate);
})


/*
Event on days
*/

let btnDayValueFill;
let btnDays = document.querySelectorAll('.choosingDay');

for(let i = 0; i < btnDays.length; i++){
  // eslint-disable-next-line no-loop-func
  btnDays[i].addEventListener('click', function(){
    let btnDayValue = btnDays[i].innerHTML
    let monthChoosed = selectMonth.value
    let sanitizedMonth  = monthChoosed.padStart(2, '0') // adding 0 when number < 10
    let yearChoosed = selectYear.value
    btnDayValueFill = btnDayValue.padStart(2, '0'); 
    displayDate.value = date.format(btnDayValueFill + '/' + sanitizedMonth + '/' + yearChoosed) 

    toggleDateOpen(showDatePicker);

  })
}


/*
Update current month index
*/

function updateMonth(date, elts){
  let previousTimeStamp = moment(displayDate.value, 'DD/MM/YYYY').toDate();
  swipeDate = moment(previousTimeStamp)
  
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
  let previousTimeStamp = moment(displayDate.value, 'DD/MM/YYYY').toDate();
  swipeDate = moment(previousTimeStamp)
  
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
function switchDisplayDays(table, swipe){
  let lastMonthDate = [];
  let nextMonthDate = [];

  let previousMonthTimeStamp = moment(displayDate.value, 'DD/MM/YYYY').toDate();
  let previousMonthSanitize = moment(previousMonthTimeStamp).subtract(1, 'month').format('DD/MM/YYYY')
  // let lastDayPreviousMonth = moment(previousMonthSanitize, 'DD/MM/YYYY').endOf('month').format('d') // INDEX last day of last month
  let lastDayPreviousMonthNumber = moment(previousMonthSanitize, 'DD/MM/YYYY').endOf('month').format('DD') // INT

  // let nextMonthTimeStamp = moment(displayDate.value, 'DD/MM/YYYY').toDate();
  // let nextMonthSanitize = moment(nextMonthTimeStamp).add(1, 'month').format('DD/MM/YYYY')
  // let firstDayNextMonth = moment(nextMonthSanitize, 'DD/MM/YYYY').startOf('month').format('dd') // INDEX first day of next month
  // let firstDayNextMonthNumber = moment(nextMonthSanitize, 'DD/MM/YYYY').startOf('month').format('DD') // INT


  let currentMonthTimeStamp = moment(displayDate.value, 'DD/MM/YYYY').toDate();
  let firstDay = moment(currentMonthTimeStamp).startOf('month').format('d')
  // console.log(firstDay) // 4e jour de la semaine pour THURSDAY ça commence le SUNDAY /// DECEMBRE
  let firstDayNumber = moment(currentMonthTimeStamp).startOf('month').format('DD') // numéro de la date pas du jour
  let lastDayNumber = moment(currentMonthTimeStamp).endOf('month').format('DD')  // numéro de la date, pas numéru du jour
  // console.log(lastDay)

  // SI le mois commence par THURSDAY, alors le premier jour du mois doit commencer sur l'index de THURSDAY
  // On rempli les jours jusqu'au bout, si le dernier jour est SUNDAY, alors on doit terminer sur l'index de SUNDAY
  // Et on rempli l'index du MOIS PRECEDENT et du MOIS SUIVANT

    let dayz = document.querySelectorAll('.day-value');
    


    let btns = document.querySelectorAll('.choosingDay')
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
            console.log(dayz[i].getAttribute('datavalue'))
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

          let beforeDays = document.querySelectorAll('.beforeFirstDay')
          let afterDays = document.querySelectorAll('.afterFirstDay')
          
          
          lastMonthDate.forEach((lastDates, index) => {
              beforeDays[index].innerHTML = lastDates
          })


          nextMonthDate.forEach((afterDates, index) => {
            if(parseInt(afterDates) === parseInt(lastDayNumber)){
              afterDays[index].classList.add('lastDayOfCurrentMonth')
              // for (let i = 1; i <= 10; i++) {
              //   afterDates[i].padStart(2, '0');
              // }
              afterDays[index].innerHTML = afterDates
              daytoend = afterDates
            } else if(parseInt(afterDates) < parseInt(lastDayNumber)){
              afterDays[index].innerHTML = afterDates
            } else {
              afterDays[index].classList.add('afterLastDayOfCurrentMonth')
            }
          })

          let afterLastDays = document.querySelectorAll('.afterLastDayOfCurrentMonth')

          for(let i = 0; i < afterLastDays.length; i++){
            afterLastDays[i].innerHTML = i +1
          }
}

// render() {

  return (
<div>
<div className="dateofbirth">
            <label htmlFor="date-birth">Date de naissance : </label>
                    <input typeof = "text" className='displayDate' ></input>
                    <div id="datepicker" className='dateHided'>
                            <div className="first-row btns-spec">
                                    <button className='previousMonth' onClick={updateMonth}> prev </button>
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
</div>
)
// }
}

export default DatePickerCustom;