import React, { Component } from 'react'
import DashboardCharts from "./DashboardCharts"
import CollegeFakeDb from "../server/collegeDb/college.json"

let $primary = "#7367F0",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292"

export default class index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            series:[],
            labels:["Haryana","Punjab","Himachal"],
            CourseSeries:[],
            CourseLabels:["computerScience","IT","Electronics"]
        }
    }

    fetchCollegesByState = () =>{
        let Haryana = 0
        let Punjab = 0
        let Himachal= 0
        CollegeFakeDb.data.map((result)=>{
            if(result.State === "Haryana" ){
                Haryana += 1
            }
            if(result.State === "Punjab"){
                Punjab += 1
            }
            if(result.State === "Himachal"){
                Himachal += 1
            }
        })
        const series = [Haryana,Punjab,Himachal]
        this.setState({series})
    }

    fetchCourses(){
        let computerScience = 0
        let IT = 0
        let Electronics = 0
        CollegeFakeDb.data.map((result)=>{
            if(result.Courses.includes('Computer science')){
                computerScience += 1
            }
            if(result.Courses.includes('Electronics')){
                Electronics += 1
            }
            if(result.Courses.includes('IT')){
                IT += 1
            }
        })
        const CourseSeries = [computerScience,IT,Electronics]
        this.setState({CourseSeries})
    }
    
    componentDidMount(){
        this.fetchCollegesByState()
        this.fetchCourses()
    }
    render() {
        return (
            <div>
            <DashboardCharts
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
              series={this.state.series}
              labels={this.state.labels}
            />
            <DashboardCharts
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
              series={this.state.CourseSeries}
              labels={this.state.CourseLabels}
            />
            </div>
        )
    }
}
