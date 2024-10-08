window.addEventListener("load", function ()
{
    let numberofclicks = 0;

    //get tag reference
    let clickcountertag = document.getElementById("clickcounter");
    let clickbuttontag = document.getElementById("clickbutton");

    //define a function for updating the click counter.
    let clickbuttonupdate= function()
    {
        numberofclicks++;

        clickcountertag.innerText = numberofclicks;
    };

    //call function every time the button is clicked
    clickbuttontag.addEventListener("click", clickbuttonupdate);
});