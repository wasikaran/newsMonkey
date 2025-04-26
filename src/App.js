import Navbar from './Navbar';
import News from './News';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useLoadingBar } from "react-top-loading-bar";
import LoadingBar from "react-top-loading-bar";


import React, { Component } from 'react'

export default class App extends Component {
  pageSize= 5;
  apikey = process.env.REACT_APP_API_KEY
  state = {
    progress : 15
  }
 setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
      <div>
      </div>
      <Router>
      <Navbar />
      <LoadingBar
        color="#f11946"
        progress={this.state.progress}
      />

      <Routes>
        <Route exact path="/" element={<News setProgress ={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general" />} />
        <Route exact path="/business" element={<News setProgress ={this.setProgress} apikey={this.apikey} key="business" pageSize={this.pageSize} country="in" category="business" />} />
        <Route exact path="/technology" element={<News setProgress ={this.setProgress} apikey={this.apikey} key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
        <Route exact path="/entertainment" element={<News setProgress ={this.setProgress} apikey={this.apikey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
        <Route exact path="/health" element={<News setProgress ={this.setProgress} apikey={this.apikey} key="health" pageSize={this.pageSize} country="in" category="health" />} />
        <Route exact path="/science" element={<News setProgress ={this.setProgress} apikey={this.apikey} key="science" pageSize={this.pageSize} country="in" category="science" />} />
        <Route exact path="/sports" element={<News setProgress ={this.setProgress} apikey={this.apikey} key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
        <Route exact path="/general" element={<News setProgress ={this.setProgress} apikey={this.apikey} key="general" pageSize={this.pageSize} country="in" category="general" />} />
      </Routes>
    </Router>
      </>
    )
  }
}
