const matches = document.querySelectorAll('.match')
const selectedMatch = ''

function toggleSelected() {
    this.classList.toggle('selected')
}


const select = matches.forEach( match => match.addEventListener('click', toggleSelected))

//if not already selected, select it
matches.forEach((match) => {
    match.onclick = () => {
        const selectedArr = document.querySelectorAll(".selected")
        
        if (selectedArr.length !== 0) {
            selectedArr.forEach((selectedMatch) => {
                selectedMatch.classList.remove("selected")
            })
            
            match.classList.add("selected")
        }
    }  
})


const selectWinnerBtn = document.querySelector(".button.next")

selectWinnerBtn.onclick = () => {
    const selectedHomeTeam = document.querySelector(".selected>#home").innerHTML
    const selectedAwayTeam = document.querySelector(".selected>#away").innerHTML

    localStorage.setItem("selectedHomeTeam", selectedHomeTeam)
    localStorage.setItem("selectedAwayTeam", selectedAwayTeam)

    sessionStorage.setItem("Test1", "ONE")
}