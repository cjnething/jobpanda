var React = require('react');
var Reflux = require('reflux');
var mui = require('material-ui');
var LeftNav = mui.LeftNav;
var JobList = require('./JobList.jsx');
var JobStore = require('../stores/JobStore.jsx');
var Modal = require('react-modal');
var DoughnutChart = require('react-chartjs').Doughnut;
var RadarChart = require('react-chartjs').Radar;
var LineChart = require('react-chartjs').Line;
var InsightStore = require('../stores/InsightStore.jsx');
var Insight = require('./Insight.jsx');
var EditModal = require('./EditModal.jsx')


//Set Material-UI Vars
var Tabs = mui.Tabs,
    Tab = mui.Tab,
    TextField = mui.TextField,
    Paper = mui.Paper;

var appElement = document.getElementById('app');
Modal.setAppElement(appElement);
Modal.injectCSS();

var JobListBox = React.createClass({
  mixins: [Reflux.connect(JobStore, "jobs")],
  // onChange: function(jobs) {
  //   this.setState({
  //     jobs: jobs
  //   });
  // },
  // componentDidMount: function() {
  //   this.listenTo(JobStore, this.onChange);
  // },
  render: function() {
    return (
      <div className="job-list-box">
        <Paper z="1">
          <Tabs> 
            <Tab label="My Jobs"> 
              <div className="tab-template-container"> 
                <JobList jobs={this.state.jobs} onEdit={this.props.onChange} openModal={this.props.openModal} />
              </div> 
            </Tab> 
            <Tab label="My Insights" > 
              <Insight />
            </Tab> 
        </Tabs>
       </Paper>    
    </div>

      );
  }
})

module.exports = JobListBox;


