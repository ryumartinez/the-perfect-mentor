import { User } from "@prisma/client";
import React from "react"
import { useTable,useExpanded  } from "react-table";
import TableLayout from "~/layout/TableLayout";
import EditTableForm from "./EditTableForm";

type Props = {
    tableData: User[]
}

const TableInstance = ({tableData}:Props) => {

  const data = React.useMemo(()=>tableData,[])
  const columns = React.useMemo(
     () => [
          {
        // Make an expander cell
        Header: () => null, // No header
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
         Header: 'Id',
         accessor: 'id', // accessor is the "key" in the data
       },

     ],
     []
   )
   //@ts-ignore
  const tableInstance = useTable({ columns, data },useExpanded );
  
   const renderRowSubComponent = React.useCallback(
    ({ row }:any) => (
      <EditTableForm row = {row}/>
    ),
    []
  )
  
  return (
    <TableLayout {...tableInstance} renderRowSubComponent={renderRowSubComponent} />
  );
}

export default TableInstance