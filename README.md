# Pig Latin Translator

This web app take a string of words as an input and outputs a translation into pig 
latin.

Rules for pig latin:
1. If the word begins with a vowel, add "way" to the end of the word.
2. If the word begins with a consonant, remove all letters starting from the beginning
up to the first vowel and place them at the end of the word. Add "ay" to the end of
the word.
3. "Y"/"y" is considered a consonant if it is the first letter of a word and is
considered a vowel otherwise.

### Built With

[Django 3.1.12](https://docs.djangoproject.com/en/3.0/) - Website Framework

[Bootstrap 4](https://getbootstrap.com/docs/4.3/getting-started/introduction/) - Website Stylization

### Hosted with

[Heroku](https://www.heroku.com/) - Website can be found here: https://piglatin.herokuapp.com/