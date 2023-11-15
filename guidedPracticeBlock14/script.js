const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];
console.log(instruments);

myInstruments.push("tuba");
myInstruments.push("bassoon");
myInstruments.splice("2,1");
myInstruments.unshift("saxophone");

function getFirstInstrument(myInstruments) {
  return myInstruments[0];
}
