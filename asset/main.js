function getFormInput(){
  var date = document.getElementById('dateInput').value
  const male = document.getElementById("maleRadio");
  const female = document.getElementById("femaleRadio");
  var dayIndex = new Date(date).getDay();

      //This one evaluates for the day of the week based on the day index
      const getDayName = (dayIndex) =>{
          const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          return days[dayIndex];
      }
      const dayName = getDayName(dayIndex)

      //This code block evaluates for the Male Akan Name based on the dayindex above.
      const getMaleAkanName = (dayIndex)=>{
         const names = ['6pm','7pm','8pm','9pm','4pm','2pm','1pm']
          return names[dayIndex];
      }

      //This code block evaluates for the Feale Akan Name based on the dayindex above.
      const getFemaleAkanName = (dayIndex)=>{
          const names = ['9pm','8pm','7pm','1pm','3pm','7pm','8am']
          return names[dayIndex];
      }


      if(male.checked){
          var gender = 'Male'
         var akanName = getMaleAkanName(dayIndex)

      }else if(female.checked){
          var gender = 'Female'
          var akanName = getFemaleAkanName(dayIndex)
      }

      //Display Akan Name
      console.log(akanName)

      document.getElementById('displayName').innerHTML ='<div class="alert alert-primary" role="alert"> Thank you for booking with us! <br> Your Time Visit is: <span class="text-danger">'+akanName+'</span>  Date of visit on a <span class="text-danger">'+dayName+'</span> </div>'


}

