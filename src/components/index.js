import React, { Component } from 'react'
import DashboardCharts from "./DashboardCharts"
import CollegeFakeDb from "../server/collegeDb/college.json"
import StudentFakeDb from "../server/studentDb/student.json"
import Table from "./table"

let $primary = "#7367F0",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",

  $colorNewOne = "#00d2e2",
  $colorNewTwo = "#28c76f",
  $colorNewThree = "#ff9f43",

  $colorNewOneLight = "#2fe9f7",
  $colorNewTwoLight = "#67f5a6",
  $colorNewThreeLight = "#ffc792"



export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            series:[],
            labels:["Haryana","Punjab","Himachal"],
            CourseSeries:[],
            CourseLabels:["computerScience","IT","Electronics"],
            selectedTable:'',
            rowData:[],
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
                ],
                StudentTable:[
                    {
                        headerName: 'id',
                        field: 'id',
                        sortable: true,
                        filter: true,
                        checkboxSelection: true
                      },
                      {
                        headerName: 'Skills',
                        field: 'Skills',
                        sortable: true,
                        filter: true
                      },
                      {
                        headerName: 'Year of Batch',
                        field: 'Yearofbatch',
                        sortable: true,
                        filter: true
                      },
                      {
                        headerName: 'colleage_id',
                        field: 'colleage_id',
                        sortable: true,
                        filter: true,
                      },
                ]
            },
            ActiveTable:[]
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
        console.log(StudentFakeDb)
    }

    selectValueFromState =(selected)=>{
        const {labels} = this.state
        this.setState({selectedTable:labels[selected]})
    }

    selectValueFromCollege =(selected)=>{
        const {CourseLabels} = this.state
        this.setState({selectedTable:CourseLabels[selected]})
    }

    componentDidUpdate(prevProps,prevState){
        const {selectedTable,Tables} = this.state
        const {CollegeTable,StudentTable} = Tables
        if(prevState.selectedTable !== selectedTable){
            if(selectedTable.search('Haryana') || selectedTable.search('Punjab') || selectedTable.search('Himachal') ){
                const rowData = CollegeFakeDb.data.filter((data)=>data.State ===selectedTable)
                return  this.setState({ActiveTable:CollegeTable,rowData})
            }else{
                return  this.setState({ActiveTable:StudentTable})
            }
        }
    }


    render() {
        const {Tables,rowData,ActiveTable} = this.state
        return (
            <>
            <div className="GraphTable">
            <div className="container">
             <div className="row">
             <div className="col-sm-6">
             <DashboardCharts
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
              series={this.state.series}
              labels={this.state.labels}
              getSelectedValue={this.selectValueFromState}
            />
             </div>
             <div className="col-sm-6">
             <DashboardCharts
              primary={$colorNewOne}
              warning={$colorNewTwo}
              danger={$colorNewThree}
              primaryLight={$colorNewOneLight}
              warningLight={$colorNewTwoLight}
              dangerLight={$colorNewThreeLight}
              series={this.state.CourseSeries}
              labels={this.state.CourseLabels}
              getSelectedValue={this.selectValueFromCollege}
            />
        </div>
            </div>   
        </div>
            </div>
        {
        rowData.length !== 0 
        ? 
        <Table
             rowData={rowData}
             columns={ActiveTable}
        />
        :
        null
        }
            </>
        )
    }
}
