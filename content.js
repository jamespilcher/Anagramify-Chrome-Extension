window.onload = anagramifyPage;

function shuffleWord(word){
    shuffledWord = word.split("");
    n = shuffledWord.length;
    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = shuffledWord[i];
        shuffledWord[i] = shuffledWord[j];
        shuffledWord[j] = tmp;
    }
    return shuffledWord.join("");
}

function wordReplacer(text,word){
    shuffledWord = shuffleWord(word);
    console.log(shuffledWord);
    text = text.replace(word, shuffledWord);
    return text;
}

function anagramifyNode(text){
    var anagrammed_text = text;
    var wordList = text.match(/\b(\w+)\b/g);
    if ( (wordList != null) ){
        for (var i = 0; i < wordList.length; i++) {
            var word = wordList[i];
            console.log(word);
            anagrammed_text = wordReplacer(anagrammed_text, word);
        }
    }
    return anagrammed_text;
}

function anagramifyPage(){
    var elements = document.getElementsByTagName('*');
    var ignoreTags = ['script', 'style'];
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (ignoreTags.includes(element.tagName.toLowerCase())) {
            continue;
        }
        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];
            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = anagramifyNode(text);
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
