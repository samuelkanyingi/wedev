/*
let date = 0;
let days = ["mon","tue","wednesday","thursday","friday"]
let khan =["kwasi", "kwame","kwaki","kwak","kwaq"]

let dateSelected = days[date]
let khanNames = khan[date]
console.log('Your birthday is '+dateSelected+'  and khan name is '+khanNames )
*/
function getFormInput(){
    var date = document.getElementById('dateInput').value
    if ( date == null || date == ""){
        alert("Date of Birth must be filled")
        return false;
    }
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
            const names = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame']
            return names[dayIndex];
        }

        //This code block evaluates for the Female Akan Name based on the dayindex above.
        const getFemaleAkanName = (dayIndex)=>{
            const names = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
            return names[dayIndex];
        }


        if(male.checked){
            var gender = 'Male'
            var akanName = getMaleAkanName(dayIndex)

        }else if(female.checked){
            var gender = 'Female'
            var akanName = getFemaleAkanName(dayIndex)
        }
        //$('p span').css('color','green')

        //Display Akan Name
        console.log(akanName)

        document.getElementById('displayName').innerHTML ='<div class="alert alert-dark" role="alert"> Congratulations!!! <br> Your Akan Name is: <span class="text-info">'+akanName+'</span> you are a <span class="text-info">'+gender+'</span> born on a <span class="text-info">'+dayName+'</span> </div>'


}