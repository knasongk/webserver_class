window.onload = function() {
    var button1 = document.querySelector("#tour1");
    // add event listener to the id tour1 click
    button1.addEventListener("click",showTour1,false);

    var button2 = document.querySelector("#tour2");
    // add event listener to the id tour2 click
    button2.addEventListener("click",showTour2,false);
}

//when the button1 is click call showTour1() to fetch the tour1 from the server 
function showTour1() {
    fetch('/api/tour/1')
	.then(x =>x.text())
	.then(alert);
};

//when the button2 is click call showTour2() to fetch the tour1 from the server 
function showTour2() {
    fetch('/api/tour/2')
	.then(x =>x.text())
	.then(alert);
};
