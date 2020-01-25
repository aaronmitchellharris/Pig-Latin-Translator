function fix() {
    var input = $('#raw').val()
    var vowels = ["a","e","i","o","u","A","E","I","O","U"]
    var vowelsy = ["a","e","i","o","u","y","A","E","I","O","U","Y"]
    var words = input.split(" ")
    var letters = []
    var sentence = ""

    for (i=0; i<words.length; i++) {
        var first = false
        letters = words[i].split("")

        // space between words
        if (i != 0) {
            sentence += " "
        }

        // check if first letter is vowel
        for (j=0; j<vowels.length; j++) {
            if (letters[0] == vowels[j]) {
                sentence += words[i]
                sentence += "way"
                first = true
                break
            }
        }

        // proceed here if first letter is not vowel
        if (first == false) {
                var found = 0
                for (k=1; k<letters.length; k++) {
                    for (m=0; m<vowelsy.length; m++) {
                        var done = false
                        if (letters[k] == vowelsy[m]) {
                            found = k
                            done = true
                            break
                        }
                    }
                    if (done == true) {
                        break
                    }
                }

                if (letters[0] == letters[0].toUpperCase()) {
                    letters[0] = letters[0].toLowerCase()
                    sentence += letters[found].toUpperCase()

                    for (n=found+1; n<letters.length; n++) {
                        sentence += letters[n]
                    }
                    for (h=0; h<found; h++) {
                        sentence += letters[h]
                    }
                    sentence += "ay"
                }
                else {
                    for (n=found; n<letters.length; n++) {
                        sentence += letters[n]
                    }
                    for (h=0; h<found; h++) {
                        sentence += letters[h]
                    }
                    sentence += "ay"
                }
        }
    }





    $('#output').text(sentence)
}


document.getElementById("raw").addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        document.getElementById("btn").click();
    }
})