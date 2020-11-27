import React, { Component } from "react";
import Table from "./table";
import studentdb from "../server/studentDb/student.json";
import collagedb from "../server/collegeDb/college.json";
import { UserContext, studentDetails } from "../context";

export default class CollegeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CollageDetails: [],
      students: [],
      similarCollages: [],
      series: [],
      labels: ["Haryana", "Punjab", "Himachal"],
      CourseSeries: [],
      CourseLabels: ["computerScience", "IT", "Electronics"],
      selectedTable: "",
      Tables: {
        StudentTable: [
          {
            headerName: "id",
            field: "id",
            sortable: true,
            filter: true,
            checkboxSelection: true,
            cellRendererFramework: (params) => {
              return (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    this.props.history.push("/student-Details");
                    studentDetails(params.data);
                  }}
                >
                  <span>{params.data.id}</span>
                </div>
              );
            },
          },
          {
            headerName: "Skills",
            field: "Skills",
            sortable: true,
            filter: true,
          },
          {
            headerName: "Year of Batch",
            field: "Yearofbatch",
            sortable: true,
            filter: true,
          },
          {
            headerName: "colleage_id",
            field: "colleage_id",
            sortable: true,
            filter: true,
          },
        ],
        CollegeTable: [
          {
            headerName: "id",
            field: "id",
            sortable: true,
            filter: true,
            checkboxSelection: true,
            headerCheckboxSelectionFilteredOnly: true,
            headerCheckboxSelection: true,
          },
          {
            headerName: "Name",
            field: "Name",
            sortable: true,
            filter: true,
          },
          {
            headerName: "City",
            field: "City",
            sortable: true,
            filter: true,
          },
          {
            headerName: "State",
            field: "State",
            sortable: true,
            filter: true,
          },
          {
            headerName: "Country",
            field: "Country",
            sortable: true,
            filter: true,
          },
          {
            headerName: "Year",
            field: "Year",
            sortable: true,
            filter: true,
          },
          {
            headerName: "Courses",
            field: "Courses",
            sortable: true,
            filter: true,
          },
          {
            headerName: "No of Student",
            field: "Noofstudents",
            sortable: true,
            filter: true,
          },
        ],
      },
    };
  }

  componentDidMount() {
    this.setState({
      CollageDetails: UserContext._currentValue,
    });
    console.log(this.state.CollageDetails);
    let filterStudents = [];
    studentdb.data.map((re) => {
      if (re.colleage_id === UserContext._currentValue.id) {
        return filterStudents.push(re);
      }
    });
    let similarCollages = [];
    collagedb.data.map((result) => {
      if (result.Courses.includes(UserContext._currentValue.Courses)) {
        return similarCollages.push(result);
      }
    });
    return this.setState({
      students: filterStudents,
      similarCollages,
    });
  }

  render() {
    const { CollageDetails, Tables } = this.state;
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
                                    <div>{CollageDetails.id}</div>
                                  </div>
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                      Name
                                    </div>
                                    <div>{CollageDetails.Name}</div>
                                  </div>
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                      City
                                    </div>
                                    <div>{CollageDetails.City}</div>
                                  </div>
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                      State
                                    </div>
                                    <div class="text-truncate">
                                      <span>{CollageDetails.State}</span>
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
                                    <div>{CollageDetails.Country}</div>
                                  </div>
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                      Year
                                    </div>
                                    <div>
                                      <span>{CollageDetails.Year}</span>
                                    </div>
                                  </div>
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                      Courses
                                    </div>
                                    <div>
                                      <span>{CollageDetails.Courses}</span>
                                    </div>
                                  </div>
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                      No of Student
                                    </div>
                                    <div>
                                      <span>{CollageDetails.Noofstudents}</span>
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
                    <div class="card-title">Students</div>
                  </div>
                  <div class="card-body">
                    <Table
                      className="TableCustom"
                      onGridReady={this.onGridReady}
                      rowData={this.state.students}
                      columns={this.state.Tables.StudentTable}
                    />
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="card">
                  <div class="card-header">
                    <div class="card-title">Similar Collages</div>
                  </div>
                  <div class="card-body">
                    <Table
                      className="TableCustom"
                      onGridReady={this.onGridReady}
                      rowData={this.state.similarCollages}
                      columns={this.state.Tables.CollegeTable}
                    />
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
