import React, { Component } from "react";
// import { Table } from "reactstrap";
import Table from "./table"


export default class CollegeDetails extends Component {
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
                ]
            }
        }
    }

  render() {
    const {Tables} = this.state
    return (
      <>
        <div className="mainContainer">
          <div className="container">
            <div className="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <div class="card-title">College Details</div>
                  </div>
                  <div class="card-body">
                    <div col="12" class="mx-0 row">
                      <div class="pl-0 col-sm-12">
                        <div class="d-sm-flex d-block media">
                          <div class="mt-md-1 mt-0 media-left"></div>
                          <div class="media-body">
                            <div class="row">
                              <div class="col-sm-9 col-md-6 col-lg-5">
                                <div class="users-page-view-table">
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                      #ID
                                    </div>
                                    <div>121</div>
                                  </div>
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                      Name
                                    </div>
                                    <div>crystal</div>
                                  </div>
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                      City
                                    </div>
                                    <div>Crystal Hamilton</div>
                                  </div>
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                      State
                                    </div>
                                    <div class="text-truncate">
                                      <span>crystalhamilton@gmail.com</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-12 col-lg-5">
                                <div class="users-page-view-table">
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                      Country
                                    </div>
                                    <div>active</div>
                                  </div>
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                      Country
                                    </div>
                                    <div>admin</div>
                                  </div>
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                      Year
                                    </div>
                                    <div>
                                      <span>North Star Aviation Pvt Ltd</span>
                                    </div>
                                  </div>
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                      No of Student
                                    </div>
                                    <div>
                                      <span>North Star Aviation Pvt Ltd</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mainContainer">
          <div className="container">
            <div className="row">
              <div class="col-sm-12 col-md-6">
                <div class="card">
                  <div class="card-header">
                    <div class="card-title">Information</div>
                  </div>
                  <div class="card-body">
                  <Table className="TableCustom" 
             columns={Tables.CollegeTable}
             />
                   </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-6">
                <div class="card">
                  <div class="card-header">
                    <div class="card-title">Social Links</div>
                  </div>
                  <div class="card-body">
                  <Table className="TableCustom" 
             columns={Tables.CollegeTable}
             />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
        <div className="mainContainer">
          <div className="container">
            <div className="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="card-header">
                    <div class="card-title">Student Details</div>
                  </div>
                  <div class="card-body">
                    <div col="12" class="mx-0 row">
                      <div class="pl-0 col-sm-12">
                        <div class="d-sm-flex d-block media">
                          <div class="mt-md-1 mt-0 media-left"></div>
                          <div class="media-body">
                            <div class="row">
                              <div class="col-sm-9 col-md-6 col-lg-5">
                                <div class="users-page-view-table">
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                      #ID
                                    </div>
                                    <div>121</div>
                                  </div>
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                    Skills
                                    </div>
                                    <div>crystal</div>
                                  </div>
                                
                                                             </div>
                              </div>
                              <div class="col-md-12 col-lg-5">
                                <div class="users-page-view-table">
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                    Year of Batch
                                    </div>
                                    <div>active</div>
                                  </div>
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                    colleage_id
                                    </div>
                                    <div>admin</div>
                                  </div>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </>
    );
  }
}
