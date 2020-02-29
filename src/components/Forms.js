import React from "react"

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather} className="index">
        <div className="formData">
          <div className="form-group">
            <select
              name="city"
              className="form-control"
              id="selectOption"
              defaultValue={"DEFAULT"}
              onClick={this.props.getBackground}
            >
              <option value="DEFAULT" disabled>
                -- Select City --
              </option>
              <option value="Rochester">Rochester</option>
              <option value="New York">New York</option>
              <option value="Chicago">Chicago</option>
              <option value="Orlando">Orlando</option>
              <option value="San Francisco">San Francisco</option>
            </select>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Get forecast</button>
          </div>
        </div>
      </form>
    )
  }
}

export default Form
