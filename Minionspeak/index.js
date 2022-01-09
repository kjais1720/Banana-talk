const textBox = document.querySelector('#inputText')
const translatedBox = document.querySelector('#translatedText');
const button = document.querySelector('#submit');


const minionUrl = "https://api.funtranslations.com/translate/minion.json?text=";

let fetchData = () =>{
    const text = textBox.value;
    if (text !== ''){
        fetch(minionUrl+text)
        .then(response => response.json())
        .then(data => {
            const translatedText = data.contents.translated;
            typeText(translatedText);
        })
        .catch(err =>{
            console.log(err);
            if(err.code == 429) alert("The limit for API requests per hour has exceeded, please try after some time");
            else alert("Ther's an error, please retry, if the error persists, retry after some time")
        });

    }
    
}

let typeText = text =>{
    let finalText;
    var counter=0;
   
    const typing = setInterval(()=>{
        if(counter<text.length){
            finalText = text.slice(0,counter+1);
            translatedBox.innerHTML = finalText;
            counter++;
        } else{
            clearInterval(typing);
        }
    },100);
    translatedBox.innerHTML = `<p>${text}</p>`;
    responsiveVoice.speak("The translated text is "+ text);
}

document.addEventListener('keypress',(e)=>{
    if (e.key==='Enter'){
        e.preventDefault();
        fetchData();
    }
})
