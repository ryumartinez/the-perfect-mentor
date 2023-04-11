//@ts-nocheck

import React from 'react' 
import EditTableForm from '~/components/EditTableForm'
import Table from '~/components/Table'
import { api } from '~/utils/api'
const table2 = () => {
const { data: apiResponse, isLoading } = api.user.showAllUsers.useQuery()
const columns = [ 
       
    {
         Header: 'Name',
         accessor: 'name', // accessor is the "key" in the data
       },
        {
         Header: 'Age',
         accessor: 'age', // accessor is the "key" in the data
       },
       {
         Header: 'Emails',
         accessor: 'email',
       },
       {
         Header: 'Role',
         accessor: 'role', // accessor is the "key" in the data
       },
        {
         Header: 'Status',
         accessor: 'status', // accessor is the "key" in the data
       },
       {
        // Make an expander cell
        Header: "", // No header
        id: 'expander', // It needs an ID
        Cell: ({ row }:any) => (
          // Use Cell to render an expander for each row.
          // We can use the getToggleRowExpandedProps prop-getter
          // to build the expander.
          <span {...row.getToggleRowExpandedProps()}>
            {row.isExpanded ? '👇' : '👉'}
          </span>
        ),
      },
]
 const renderRowSubComponent = React.useCallback(
    ({ row }:any) => (
      <EditTableForm row = {row}/>
    ),
    []
  )

if(apiResponse){
    
  return (
    <Table 
    data={apiResponse} 
    columns={columns}
    renderRowSubComponent={renderRowSubComponent}
    tableProps={[{className:"tabla"}]}
    getRowProps={row=>({className:row.values.status})}
    getCellProps={(cell)=>({className:cell.column.Header})}
    />
  );

  }
  return (<h1>loading...</h1>)
}

export default table2