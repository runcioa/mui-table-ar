import React, { useState } from 'react';
import Materialtable from 'material-table'
import { ThemeProvider, createTheme } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

function App() {

  const defaultMaterialTheme = createTheme();

  const [tableData, setTableData] = useState([
    { name: "Antonio", email: "abc@abc.com", phone: 5456465465, age: null, gender: "M", city: "Chennai", fee: 787654 },
    { name: "Pippo", email: "pippo@abc.com", phone: 1111111111, age: 45, gender: "F", city: "Dubai", fee: 45645654 },
    { name: "Pluto", email: "pluto@abc.com", phone: 2222222222, age: 35, gender: "M", city: "Rome", fee: 13654 },
    { name: "asdasf", email: "pluto@abc.com", phone: 2222222222, age: 35, gender: "M", city: "Rome", fee: 13654 },
    { name: "sdfgsdg", email: "pluto@abc.com", phone: 2222222222, age: 35, gender: "M", city: "Rome", fee: 13654 },
    { name: "werwet", email: "pluto@abc.com", phone: 2222222222, age: 35, gender: "M", city: "Rome", fee: 13654 },
    { name: "sadfsd", email: "pluto@abc.com", phone: 2222222222, age: 35, gender: "M", city: "Rome", fee: 13654 },
  ]);

  const columns = [
    { title: "Name", field: "name" },
    { title: "Email", field: "email", filterPlaceholder: "Filter by email" },
    { title: "Phone Number", field: "phone", align: "right", sorting: false, filtering: false, export: false },
    { title: "Age", field: "age", emptyValue: () => (<em>null</em>), defaultSort: "asc", searchable: false },
    { title: "Gender", field: "gender", lookup: { M: "Male", F: "Female" } },
    { title: "City", field: "city" },
    { title: "School Fee", field: "fee", type: "currency", currencySetting: { currencyCode: "EUR", minimumFractionDigits: 0 } },
  ]


  return (
    <div style={{ width: '100%', height: '100%' }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <ThemeProvider theme={defaultMaterialTheme}>
        <Materialtable columns={columns} data={tableData} title="Student information"
        actions={[
          {icon:()=><EditIcon />,
          position:'auto',
          onClick:(e,data)=>console.log(data)
        }]
      } 
        options={{ sorting: true, search: true, searchText: "", searchFieldAlignment: "left", searchAutoFocus: true, searchFieldVariant: "standard", filtering: true, paging: true, pageSizeOptions: [2, 5, 10, 20, 25, 50, 100], pageSize: 10, paginationType: 'stepped', paginationPosition: 'bottom', exportButton: true, exportAllData: true, exportFileName: "Table_Data", exportDelimiter: ";",  actionsColumnIndex: -1,
        toolbarButtonAlignment:'right' }} />
      </ThemeProvider>
    </div>
  );
}

export default App;

// Arrivato 1.05 Grouping