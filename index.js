let stepRecordNumber = 0;
let peakRecordNumber = 0;
let stepRecord = 0;
let peakRecord = 0;
let steps = 0;
let peak = 0;

function collatzProcedure(num) {
  //En guardclause for å se om tallet er større enn 0 eller om det er et helt tall.
  if (num < 1 || !Number.isInteger(num))
    return console.log(`Please use a whole number above 0`);
  //starter loopen, konsollogger at loopen er startet.
  console.log(
    `Running the Collatz Procedure on all numbers between 1 and ${num}`
  );
  //lager en loop som kjører gjennom alle tallene mellom 1 og num.
  for (let i = 0; i < num; i++) {
    //har i+1 som input parameter i numberLoop fordi i er 0, men vil starte på 1.
    numberLoop(i + 1);
    //skjekker etter loopen er ferdig om stepRecord og peakRecord skal oppdateres.
    if (stepRecord < steps) {
      stepRecord = steps;
      stepRecordNumber = i + 1;
    }
    if (peakRecord < peak) {
      peakRecord = peak;
      peakRecordNumber = i + 1;
    }
  }
  //konsoll logger svarene når loopen er ferdig.
  console.log(
    `The interger with the most steps was ${stepRecordNumber}, with ${stepRecord} steps`
  );
  console.log(
    `The interger with the highest peak was ${peakRecordNumber}, with a peak of ${peakRecord}`
  );
}

function numberLoop(inputNum) {
  //resetter peak og steps
  peak = 0;
  steps = 0;

  //lager en ny variabel checkNum.
  let checkNum = inputNum;

  //lager en while loop, som kjører så lenge checkNum ikke er 1.
  while (checkNum !== 1) {
    //incrementer steps hver gang loopen kjører.
    steps++;

    //skjekker om peak er mindre enn checkNum. Kjører den her i tillfelle orginal inputtet er peaken.
    peak < checkNum ? (peak = checkNum) : peak;

    //ser om checkNum er odd eller even. og gjør opperasjonene på det.
    if (checkNum % 2) {
      checkNum = checkNum * 3 + 1;
    } else checkNum = checkNum / 2;
  }
}

collatzProcedure(5000000);
