document.querySelectorAll("*").forEach(el => {
    if(el.tagName == "H" || el.tagName == "P" || el.tagName == "SPAN"){
    el.addEventListener("mouseover", () => {
        speechSynthesis.cancel();
        var s = new SpeechSynthesisUtterance(el.innerText);
speechSynthesis.speak(s);
    });
    }
});
