import React from 'react';
import {AgGridReact } from 'ag-grid-react';

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Table = (props) => {
    return (
    <div style={{marginLeft:"20px"}}>
        <div className="ag-theme-alpine1 ag-theme-material table" style={ { height: 400, width: '100%',textAlign:"center" } }>
            <AgGridReact
                onGridReady={props.onGridReady}
                rowData={props.rowData}
                columnDefs={props.columns}
                >
            </AgGridReact>
        </div>
        </div>
    );
};

 export  default Table