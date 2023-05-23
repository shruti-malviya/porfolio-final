const text = "Developer Shruti";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 150); // Adjust the typing speed (in milliseconds)
    }
}

typeWriter();
