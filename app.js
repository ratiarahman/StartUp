var text = 'The Biggest Startup Event of the year';
var curr = 0; //variable for current position
var Write = function write(){

	//target eelement to write to
    var elem = document.getElementById('target');

    //append next character to the text content
    elem.textContent += text.charAt(curr);

    //update the current position
    curr++;

    // if we're not yet in the end of the string
    // we have a little (20ms) pause before we write the next character
    if (curr < text.length)
        window.setTimeout(write, 70);
};

//calling the function
Write();
// document.getElementById('music').play();
