$(".fa-bars").click(function(){
  $(".home-nav").css("width","20%")
  $(".bar").css("margin-left","21%")
  $(".text-party").css("margin-left","20%")
   
  
})

$(".fa-xmark").click(function(){
  $(".home-nav").css("width","0px")
  $(".bar").css("margin-left","20px")
  $(".text-party").css("margin-left","0px")
})




function countDown(date){
  let chooseDate = new Date(date);
  let nowDate = new Date()
  let diffDate =  (chooseDate -nowDate)/1000

 let days = Math.floor(diffDate/60/60/24);
 let hours = Math.floor((diffDate-(days * (24*60*60)))/3600)
let min = Math.floor(((diffDate-(days * (24*60*60)))-(hours * 3600 )) / 60)
let sec = Math.floor(((diffDate-(days * (24*60*60)))-(hours * 3600 )) - min*60)
$(".day").text(`${days } D`)
$(".hou").text(`${hours} H`)
$(".min").text(`${min} M`)
$(".sec").text(`${sec} S`)

 
}
setInterval(function(){
  countDown("10 october 2021 9:56:00")

},1000)
