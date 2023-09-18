import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pagesize=10
  state = {
    theme: 'light',
    btnname: 'Dark Mode',
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  // cahnge theme fnction start here----------------------------
  changetheme = () => {
    if (this.state.theme === 'light') {
      this.setState({
        theme: 'dark',
        btnname: 'Light Mode'

      })
      document.body.style.backgroundColor = '#504A4B'

    } else {
      this.setState({
        theme: 'light',
        btnname: 'Dark Mode',
      })
      document.body.style.backgroundColor = 'white'
    }

  }
  render() {
    return (
      <div>
        <Router>
          <Navbar theme={this.state.theme} btnname={this.state.btnname} changeTheme={this.changetheme} />
          <LoadingBar color='#f11946' progress={this.state.progress} />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress}  key='general' theme={this.state.theme} changeTheme={this.changetheme} pagesize={this.pagesize} country='us' category='general' />} />
            <Route exact path="/entertainment" element={ <News setProgress={this.setProgress}  key='entertainment' theme={this.state.theme} changeTheme={this.changetheme} pagesize={this.pagesize} country='us' category='entertainment '/>} />
            <Route exact path="/business" element={ <News setProgress={this.setProgress}  key='business' theme={this.state.theme} changeTheme={this.changetheme} pagesize={this.pagesize} country='us' category='business '/>} />
            <Route exact path="/health" element={ <News setProgress={this.setProgress}  key='health' theme={this.state.theme} changeTheme={this.changetheme} pagesize={this.pagesize} country='us' category='health '/>} />
            <Route exact path="/science" element={ <News setProgress={this.setProgress}  key='science' theme={this.state.theme} changeTheme={this.changetheme} pagesize={this.pagesize} country='us' category='science'/>} />
            <Route exact path="/sports" element={ <News setProgress={this.setProgress}  key='sports' theme={this.state.theme} changeTheme={this.changetheme} pagesize={this.pagesize} country='us' category='sports '/>} />
            <Route exact path="/technology" element={ <News setProgress={this.setProgress}  key='technology' theme={this.state.theme} changeTheme={this.changetheme} pagesize={this.pagesize} country='us' category='technology'/>} />
            <Route exact path="/general" element={ <News setProgress={this.setProgress}  key='general' theme={this.state.theme} changeTheme={this.changetheme} pagesize={this.pagesize} country='us' category='general'/>} />

          </Routes>

        </Router>
      </div>
    )
  }
}

