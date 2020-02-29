import React from "react"
var moment = require("moment")

class Weather extends React.Component {
  render() {
    let tempArray = this.props.item
    const htmlDoc = []
    if (tempArray) {
      Object.keys(tempArray).forEach(index => {
        console.log("in true")
        htmlDoc.push(
          <div className="jumbotron fadeInLeft" key={index}>
            <div>
              <p>
                <strong>
                  {moment(tempArray[index].dt_txt).format("MMMM Do YYYY")}
                </strong>
              </p>
              <img
                src={
                  "http://openweathermap.org/img/w/" +
                  tempArray[index].weather[0].icon +
                  ".png"
                }
              ></img>
              <p>
                <strong>{tempArray[index].weather[0].description}</strong>
              </p>
            </div>
            <div>
              <p>
                Temperature: <strong>{tempArray[index].main.temp}°F</strong>
              </p>
              <p>
                Low: <strong>{tempArray[index].main.temp_min}°F</strong>
              </p>
              <p>
                High: <strong>{tempArray[index].main.temp_max}°F</strong>
              </p>
            </div>
            <div>
              <p>
                Wind: <strong>{tempArray[index].wind.speed}mph</strong>
              </p>
              <p>
                Pressure: <strong>{tempArray[index].main.pressure}atm</strong>{" "}
              </p>
              <p>
                Wind-Direction: <strong>{tempArray[index].wind.deg}°</strong>
              </p>
            </div>
          </div>
        )
      })
    } else {
      console.log("")
    }
    return <div className="container-fluid">{htmlDoc}</div>
  }
}
export default Weather
