import { api } from "~/utils/api";
import React from "react";
import TableInstance from "./TableInstance";

const TableQuery = () => {

  const [tableData, setTableData] = React.useState(null);

  const { data: apiResponse, isLoading } = api.user.showAllUsers.useQuery()

  if(apiResponse){
  return (
    <TableInstance tableData={apiResponse}/>
  );
  }
  return (<h1>loading...</h1>)

}

export default TableQuery