function introduction(name){
    if (name === ("Aki")){
        return "Hi, my name is Aki."
    }
    if (name === ("Samip")){
        return "Hi, my name is Samip."
    }
}
function introductionWithLanguage(name, language){
    if (name, language === ("Aki","Samip"), ("Ember.js","React")) {
        return `Hi, my name is ${name} and I am learning to program in ${language}.`
    }
}
function introductionWithLanguageOptional(name = "Gracie", language = "JavaScript"){
    if (name, language === ("Aki","Samip"), ("Ember.js","React")) {
        return `Hi, my name is ${name} and I am learning to program in ${language}.`
    }
}