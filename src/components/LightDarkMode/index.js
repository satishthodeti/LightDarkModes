import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {modeStatus: true}

  isChangeMode = () => {
    const {modeStatus} = this.state
    this.setState({modeStatus: !modeStatus})
  }

  render() {
    const {modeStatus} = this.state
    return (
      <div className="bg">
        {modeStatus ? (
          <div className="bg1">
            <h1>Click to Change Me</h1>
            <button type="button" className="btn1" onClick={this.isChangeMode}>
              Light Mode
            </button>
          </div>
        ) : (
          <div className="bg2">
            <h2>Click to Change Me</h2>
            <button type="button" className="btn2" onClick={this.isChangeMode}>
              Dark Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default LightDarkMode
