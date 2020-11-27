import React, { Component } from 'react'
import DashboardCharts from "./DashboardCharts"
import CollegeFakeDb from "../server/collegeDb/college.json"
import StudentFakeDb from "../server/studentDb/student.json"
import {CollegeDetails} from "../context"
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
            collegeTable:'',
            rowData:[],
            Tables:{
                CollegeTable:[
                    {
                        headerName: 'id',
                        field: 'id',
                        sortable: true,
                        filter: true,
                        checkboxSelection: true,
                        headerCheckboxSelectionFilteredOnly: true,
                        headerCheckboxSelection: true,
                        cellRendererFramework: params => {
                            return(
                              <div
                              style={{cursor:"pointer"}}
                              onClick={(e)=>{
                                this.props.history.push('/College-details')
                                CollegeDetails(params.data)
                              }
                            }
                            >
                              <span>{params.data.id}</span>
                            </div>
                            )
                        }
                      },
                      {
                        headerName: 'Name',
                        field: 'Name',
                        sortable: true,
                        filter: true,
                        cellRendererFramework: params => {
                            return(
                              <div
                              style={{cursor:"pointer"}}
                              onClick={(e)=>{
                                this.props.history.push('/College-details')
                                CollegeDetails(params.data)
                              }
                            }
                            >
                              <span>{params.data.Name}</span>
                            </div>
                            )
                        }
                      },
                      {
                        headerName: 'City',
                        field: 'City',
                        sortable: true,
                        filter: true,
                        cellRendererFramework: params => {
                            return(
                              <div
                              style={{cursor:"pointer"}}
                              onClick={(e)=>{
                                this.props.history.push('/College-details')
                                CollegeDetails(params.data)
                              }
                            }
                            >
                              <span>{params.data.City}</span>
                            </div>
                            )
                        }
                      },
                      {
                        headerName: 'State',
                        field: 'State',
                        sortable: true,
                        filter: true,
                        cellRendererFramework: params => {
                            return(
                              <div
                              style={{cursor:"pointer"}}
                              onClick={(e)=>{
                                this.props.history.push('/College-details')
                                CollegeDetails(params.data)
                              }
                            }
                            >
                              <span>{params.data.State}</span>
                            </div>
                            )
                        }
                      },
                      {
                        headerName: 'Country',
                        field: 'Country',
                        sortable: true,
                        filter: true,
                        cellRendererFramework: params => {
                            return(
                              <div
                              style={{cursor:"pointer"}}
                              onClick={(e)=>{
                                this.props.history.push('/College-details')
                                CollegeDetails(params.data)
                              }
                            }
                            >
                              <span>{params.data.Country}</span>
                            </div>
                            )
                        }
                      },
                      {
                        headerName: 'Year',
                        field: 'Year',
                        sortable: true,
                        filter: true,
                        cellRendererFramework: params => {
                            return(
                              <div
                              style={{cursor:"pointer"}}
                              onClick={(e)=>{
                                this.props.history.push('/College-details')
                                CollegeDetails(params.data)
                              }
                            }
                            >
                              <span>{params.data.Year}</span>
                            </div>
                            )
                        }
                      },
                      {
                        headerName: 'Courses',
                        field: 'Courses',
                        sortable: true,
                        filter: true,
                        cellRendererFramework: params => {
                            return(
                              <div
                              style={{cursor:"pointer"}}
                              onClick={(e)=>{
                                this.props.history.push('/College-details')
                                CollegeDetails(params.data)
                              }
                            }
                            >
                              <span>{params.data.Courses}</span>
                            </div>
                            )
                        }
                      },
                      {
                        headerName: 'No of Student',
                        field: 'Noofstudents',
                        sortable: true,
                        filter: true,
                        cellRendererFramework: params => {
                            return(
                              <div
                              style={{cursor:"pointer"}}
                              onClick={(e)=>{
                                this.props.history.push('/College-details')
                                CollegeDetails(params.data)
                              }
                            }
                            >
                              <span>{params.data.Noofstudents}</span>
                            </div>
                            )
                        }
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
        const {CollegeTable} = Tables
        if(prevState.selectedTable !== selectedTable){
            if(selectedTable.includes('Haryana') || selectedTable.includes('Punjab') || selectedTable.includes('Himachal') ){
                const rowData = CollegeFakeDb.data.filter((data)=>data.State ===selectedTable)
                return  this.setState({ActiveTable:CollegeTable,rowData})
            }else{
                const rowData = CollegeFakeDb.data.filter((data)=>data.Courses.includes(selectedTable))
                return  this.setState({ActiveTable:CollegeTable,rowData})
            }
        }
    }


    onGridReady = params => {
        this.gridApi = params.api
        this.gridColumnApi = params.columnApi
      }

    render() {
        const {rowData,ActiveTable} = this.state
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
           
           <div className="row">
               <div className="col-md-12">
               <div class="card">
    {rowData.length >0 ? <div class="card-header"><div class="card-title">Table Basic</div></div>:null}
    {rowData.length >0 ? <div class="card-body">
        <div class="table-responsive">
        <Table className="TableCustom" 
              onGridReady={this.onGridReady}
              rowData={rowData}
              columns={ActiveTable}
             />
        </div>
    </div>:null}
    </div>

              
               </div>
           </div>
                </div>
            </div>
            
            </>
        )
    }
}
