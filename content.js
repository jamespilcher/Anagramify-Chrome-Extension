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

function isValidWordList(wordList){
    return true;
}

function anagramifyNode(text){
    var anagramed_text = text;
    var wordList = text.match(/\b(\w+)\b/g);

    if ( (wordList != null) && isValidWordList(wordList) ){
        for (var i = 0; i < wordList.length; i++) {
            var word = wordList[i];
            console.log(word);
            anagramed_text = wordReplacer(anagramed_text, word);
            console.log(anagramed_text);
        }
    }
    return anagramed_text;
}

function anagramifyPage(){
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var ignoreTags = ['script', 'style'];
        if (ignoreTags.includes(element.tagName.toLowerCase())) {
            console.log("skipped");
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
