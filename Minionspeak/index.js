const textBox = document.querySelector('#inputText')
const translatedBox = document.querySelector('#translatedText');
const button = document.querySelector('#submit');


// button.addEventListener('click',translated);

const minionUrl = "https://api.funtranslations.com/translate/minion.json?text=";
const emojiUrl = "https://api.funtranslations.com/translate/emoji.json?text="

async function translated(){
    const text = textBox.value;
    if (text !== ''){
        // const res = await fetch(minionUrl+text);
        // const data= await res.json();
        // const translatedText = data.contents.translated;
        const translatedText = 'ko emmi na mamma te so ils sont ici'
        var counter=0;
        var finalText;
        const typing = setInterval(()=>{
            if(counter<translatedText.length){
                finalText = translatedText.slice(0,counter+1);
                translatedBox.innerHTML = finalText;
                counter++;
            } else{
                clearInterval(typing);
            }
        },100);
        // translatedBox.innerHTML = `<p>${data.contents.translated}</p>`;
    
        // responsiveVoice.speak("The translated text is "+ data.contents.translated);
    }
    
}

document.addEventListener('keypress',(e)=>{
    if (e.key==='Enter'){
        e.preventDefault();
        translated();
    }
})
