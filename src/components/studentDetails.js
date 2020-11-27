import React, { Component } from "react";
import { studentContext } from "../context";

export default class studentDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentsDetails: [],
    };
  }
  componentDidMount() {
    console.log(studentContext._currentValue);
    this.setState({
      studentsDetails: studentContext._currentValue,
    });
  }

  render() {
    const { studentsDetails } = this.state;
    return (
      <div>
        <div className="mainContainer">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">&nbsp;</div>
              <div class="col-sm-6">
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
                                    <div>{studentsDetails.id}</div>
                                  </div>
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                      #NAME
                                    </div>
                                    <div>{studentsDetails.Name}</div>
                                  </div>
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                      Skills
                                    </div>
                                    <div>{studentsDetails.Skills}</div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-12 col-lg-5">
                                <div class="users-page-view-table">
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                      Year of Batch
                                    </div>
                                    <div>{studentsDetails.Yearofbatch}</div>
                                  </div>
                                  <div class="d-flex user-info">
                                    <div class="user-info-title font-weight-bold">
                                      colleage_id
                                    </div>
                                    <div>{studentsDetails.colleage_id}</div>
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
              <div className="col-sm-3">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
