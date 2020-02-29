import React from "react"
import Titles from "./components/Titles"
import Form from "./components/Forms"
import Weather from "./components/Weather"
import Nav from "./components/Nav"

const key = "299ac979ca424649438d4f5d5900f341"

class App extends React.Component {
  state = {
    item: " "
  }

  customStyle = {}
  //API call
  getWeather = async e => {
    console.log(e.target.value)
    e.preventDefault()
    let city = e.target.elements.city.value
    console.log(city)
    const call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},us&mode=json&appid=${key}&units=imperial`
    )
    const data = await call.json()
    console.log(data)

    const photoCall = await fetch(
      "https://api.unsplash.com/photos/random?client_id=85b872b221af666e43dea4c0a574a41456eee2d98755bffe199aa152f66c3901&query=" +
        city +
        "&orientation=landscape"
    )
    const dataPhoto = await photoCall.json()
    console.log(dataPhoto.urls.regular)

    this.customStyle = {
      backgroundImage: "url(" + dataPhoto.urls.regular + ")",
      WebkitTransition: "all",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "absolute",
      height: "100%"
    }

    if (city !== "DEFAULT") {
      console.log("in if")
      const list = data.list
      console.log(list)
      let tempList = []

      list.map((item, key) => {
        if (item.dt_txt.includes("15:00:00")) {
          tempList.push(item)
        }
        return true
      })
      console.log(tempList)

      this.setState({
        temp: tempList
      })
    }
  }

  render() {
    return (
      <div style={this.customStyle}>
        <Nav />
        <Titles />
        <div className="data">
          <Form getWeather={this.getWeather} />
          <Weather item={this.state.temp} />
        </div>
      </div>
    )
  }
}

export default App
