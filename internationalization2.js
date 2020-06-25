localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

function localGreet(locale) {
  let region = extractRegion(locale);
  let language = extractLanguage(locale);

  switch(region) {
    case "US": return "Hey!";
    case "GB": return "Hello!";
    case "AU": return "Howdy!";
    default: return greet(language);
  }
}

function extractRegion(locale) {
  let regex = /[^A-Za-z0-9]/g;
  let newStr = locale.split(regex);
  return newStr[1];
}

function extractLanguage(locale) {
  let newStr = locale.split("_");
  return newStr[0];
}

function greet(language) {
  switch (language) {
    case "fr": return "Bonjour!";
    case "zh": return "Nǐ hǎo!";
    case "es": return "Hola!";
    case "nl": return "Goedendag";
    default: return "Hi!";
  }
}