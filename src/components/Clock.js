 
import AnalogClock from "ras-react-component"

function Clock() {

  const style = {
    numerals: "digit",
    showMinuteScale: true,
    showHourScale: true,
    showNumbers: true,
    radialDirectionOfNumbers: false,
    colorOfScalesAndNumbers: `black`,
    hourHandColor: `#151515`,
    minuteHandColor: `black`,
    secondHandColor: `red`,
    firstCircleColor: `white`,
    secondCircleColor: `white`,
    thirdCircleColor: `white`,
    fourthCircleColor: `black`,
    centerDotColor: `black`,
    width: 300,
    numberSize: 150,
    // iana: `Europe/Dublin`,
  }

  
  return (
    <>
      <div >
      <AnalogClock characteristics={style} />
      </div>
    </>
  );
}

export default Clock