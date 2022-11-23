const key = document.querySelector('.key-input')
const errorMessage = document.querySelector('#error-msg')
let userKey = document.querySelector('#userKey').value
const isTyping = false
const delayInMilliseconds = 1200
const subButton = document.querySelector('#subButton')
let users = [ 
    {username: 'Killa', key: '001Killa'},
    {username: 'Tino', key: '002Chami'},
    {username: 'Owen', key: '003Chini'},
    {username: 'Mwiza', key: '004Mwiza'},
    {username: 'Thami', key: '005Ches'},
    {username: 'Rhuli', key: '006Slayers'},
    {username: 'Khotso', key: '007Slider'},
    {username: 'Yadav', key: '008Yadav'},
<<<<<<< HEAD
    {username: 'Wavy', key: '009Wavy'},
    {username: 'Ketsi', key: '010Ketsi'},
    {key: '010Virgil'}
]

let points = [
    {key: '001Killa', matchday1: 4, matchday2: 0, matchday3: 0, matchday4: 0, matchday5: 0},
    {key: '002Chami', matchday1: 0, matchday2: 0, matchday3: 0, matchday4: 0, matchday5: 0},
    {key: '003Chini', matchday1: 0, matchday2: 0, matchday3: 0, matchday4: 0, matchday5: 0},
    {key: '004Mwiza', matchday1: 5, matchday2: 0, matchday3: 0, matchday4: 0, matchday5: 0},
    {key: '005Ches', matchday1: 0, matchday2: 0, matchday3: 0, matchday4: 0, matchday5: 0},
    {key: '006Slayers', matchday1: 0, matchday2: 0, matchday3: 0, matchday4: 0, matchday5: 0},
    {key: '007Slider', matchday1: 0, matchday2: 0, matchday3: 0, matchday4: 0, matchday5: 0},
    {key: '008Yadav', matchday1: 8, matchday2: 0, matchday3: 0, matchday4: 0, matchday5: 0},
    {key: '009Wavy', matchday1: 0, matchday2: 0, matchday3: 0, matchday4: 0, matchday5: 0}
=======
    {username: 'Wavy', key: '009Wavy'}
>>>>>>> cfd807d (temporary User check)
]


function getUserKey() {
    userKey = document.querySelector('#userKey').value;
        console.log('Your key is: ' + userKey);
}

function checkUser() {
    userKey = document.querySelector('#userKey').value;

    const regUser = users.filter(function(user) {
        if(userKey === user.key) {
            console.log(`Welcome ${user.username} !`)
            location.href = "/games.html";
<<<<<<< HEAD
<<<<<<< HEAD
            errorMessage.style.display = 'none'
=======
>>>>>>> cfd807d (temporary User check)
=======
            errorMessage.innerHTML = ""
>>>>>>> 3ed123e (slight change again)
        } 
    })

    if(regUser.length === 0) {
        errorMessage.innerHTML = `OH OH ! ${userKey} is not a registered user`
    }

    /*
    if(regUser) {
        console.log(`Welcome ${regUser.username} !`)
        //location.href = "/games.html";
    } else {
        console.log(`OH OH ! ${userKey} is not a registered user`)
    }*/

    //user => user.key===userKey ? console.log(`Welcome ${user.name}!`) : console.log(`OH OH ! ${userKey} is not a registered user`)

    // users.forEach(user => {
    //     if(users.key === userKey) {
    //         alert(`Welcome ${user.username} !`)
    //     }
    //     else {
    //         //alert(`Sorry, ${userKey} is not a registered key :(`)
    //     }
    // })
}

// key.addEventListener('keydown', typing)
// key.addEventListener('keyup', notTyping)


subButton.addEventListener('click',checkUser, false)
<<<<<<< HEAD


function addPoints() {
    let username = '';
    let key= '';
    let matchday1;
    let pta; // points to add

    users.forEach(user => {
        username = user.username || 'Not Found';
        key = user.key || 'Not Found';
        console.log(`Username: ${username}`, `Key: ${key}`)
    })
    
    points.forEach(point => {
        matchday1 = point.matchday1;
        console.log(`Key: ${point.key}`, `Matchday Point: ${matchday1}`)

    })

    
    
}
=======
>>>>>>> cfd807d (temporary User check)
