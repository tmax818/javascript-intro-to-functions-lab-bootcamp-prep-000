function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
<<<<<<< HEAD
  if(string.toUpperCase() === string) {
    return "YES INDEED!";
  } else if(string === "I love you, Grandma.") {
    return "I love you, too.";
  } else {
=======
  if(string.toUpperCase === string) {
    return "YES INDEED!";
  } else if(string === "I love you, Grandma.") {
>>>>>>> 2181207a8bb03c1af8544fbd52fef87f6da73442
    return "I can\'t hear you!";
  }
  }