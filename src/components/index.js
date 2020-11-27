import React, { Component } from 'react'
import DashboardCharts from "./DashboardCharts"
import CollegeFakeDb from "../server/collegeDb/college.json"
import Table from "./table"

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
            CourseLabels:["computerScience","IT","Electronics"],
            selectedTable:'',
            Tables:{
                CollegeTable:[
                    {
                        headerName: 'id',
                        field: 'id',
                        sortable: true,
                        filter: true,
                        checkboxSelection: true
                      },
                      {
                        headerName: 'Name',
                        field: 'Name',
                        sortable: true,
                        filter: true
                      },
                      {
                        headerName: 'City',
                        field: 'City',
                        sortable: true,
                        filter: true
                      },
                      {
                        headerName: 'State',
                        field: 'State',
                        sortable: true,
                        filter: true,
                        checkboxSelection: true
                      },
                      {
                        headerName: 'Country',
                        field: 'Country',
                        sortable: true,
                        filter: true
                      },
                      {
                        headerName: 'Year',
                        field: 'Year',
                        sortable: true,
                        filter: true
                      },
                      {
                        headerName: 'No of Student',
                        field: 'Noofstudents',
                        sortable: true,
                        filter: true
                      }
                ]
            }
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
        console.log(CollegeFakeDb)
    }

    collegeSelected =(selected)=>{
        const {CourseLabels} = this.state
        this.setState({selectedTable:CourseLabels[selected]})
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.selectedTable !== this.state.selectedTable){
            console.log(this.state.selectedTable)
        }
    }


    render() {
    const {Tables} = this.state
        return (
            <div>
            {/* <DashboardCharts
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
            /> */}
            <DashboardCharts
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
              series={this.state.CourseSeries}
              labels={this.state.CourseLabels}
              getSelectedValue={this.collegeSelected}
            /> 
            <Table 
            // rowData={}
            columns={Tables.CollegeTable}
             />
            </div>
        )
    }
}
