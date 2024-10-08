window.addEventListener("load", function ()
{
    let numberofclicks = 0;

    //get tag reference
    let clickcountertag = document.getElementById("clickcounter");
    let clickbuttontag = document.getElementById("clickbutton");
    let congratsMessageTag = document.getElementById("congratsMessage"); // Add a tag to display the message

    //define a function for updating the click counter.
    let clickbuttonupdate= function()
    {
        numberofclicks++;

        clickcountertag.innerText = numberofclicks;

        // Display congrats message after 10 clicks
        if (numberofclicks === 10) {
            congratsMessageTag.innerText = "Congrats!";
        }
    };

    //call function every time the button is clicked
    clickbuttontag.addEventListener("click", clickbuttonupdate);
});