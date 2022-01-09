console.log('Hello World!');

//let date = new Date()
//let topBarTime = document.getElementById('time')
//let currentDate = date.getFullYear()+" "+date.getMonth()+1+" "+date.getHours()+" "+date.getSeconds()
setInterval(
  function() {
    let date = new Date()
    let topBarTime = document.getElementById('time')
    let currentDate = date.getFullYear() + " " + date.getMonth() + 1 + " " + date.getHours() + " " + date.getMinutes() + " " + date.getSeconds()

    topBarTime.innerHTML = currentDate
    // console.log(date)
    
  }, 100)

setInterval(() => {
  window.addEventListener('load', () => {
    document.getElementById('refresh').innerHTML = '<i class="material-icons rfsh" id="refresh">refresh</i>'
  })
},500)

function loaded(){
    document.getElementById('refresh').innerHTML = '<i class="material-icons rfsh" id="refresh">refresh</i>'
}