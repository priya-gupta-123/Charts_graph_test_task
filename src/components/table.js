import React from 'react';
import {AgGridReact } from 'ag-grid-react';
import CollegeFakeDb from "../server/collegeDb/college.json"

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Table = (props) => {

    console.log(props.columns)
    return (
    <div style={{marginLeft:"20px"}}>
        <div className="ag-theme-alpine" style={ { height: 400, width: 1000,textAlign:"center" } }>
            <AgGridReact
                rowData={CollegeFakeDb.data}
                columnDefs={props.columns}
                >
            </AgGridReact>
        </div>
        </div>
    );
};

 export  default Table