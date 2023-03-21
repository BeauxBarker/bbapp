const btn = document.getElementById('btn')

btn.addEventListener('click', fetchActivity)

function fetchActivity(){
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then((responce) => responce.json())
    .then((data) => {
        document.getElementById('output').innerText =
        data.activity
    })
}

        