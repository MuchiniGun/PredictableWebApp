document.querySelector("#home").
    innerHTML = localStorage.getItem("selectedHomeTeam")

document.querySelector("#away").
    innerHTML = localStorage.getItem("selectedAwayTeam")
<<<<<<< HEAD
=======


const teams = document.querySelectorAll('.team')
const winInputOne = document.querySelector('#win-team-1')
const winInputTwo = document.querySelector('#win-team-2')

winInputOne.style.visibility = 'hidden'
winInputTwo.style.visibility = 'hidden'


function toggleSelected() {
    this.classList.toggle('selected')
}


const select = teams.forEach( match => match.addEventListener('click', toggleSelected))
//if not already selected, select it
teams.forEach((team) => {
    team.onclick = () => {
        const selectedArr = document.querySelectorAll(".selected")
        
        if (selectedArr.length !== 0) {
            selectedArr.forEach((selectedTeam) => {
                selectedTeam.classList.remove("selected")
                winInputOne.checked = false
                winInputOne.checked = false
            })
            
            team.classList.add("selected")

            if(selectedArr[0].classList.contains("selected")) {
                winInputOne.checked = true
            }
            if(selectedArr[1].classList.contains("selected")) {
                winInputTwo.checked = true
            } 
            
        }
       
    }  
})
>>>>>>> 9c8dc37 (adding missing files)
