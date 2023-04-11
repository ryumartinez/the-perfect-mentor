//@ts-nocheck

import React from 'react'
import { useTable ,useExpanded} from 'react-table'

const defaultPropGetter = () => ({})

// Expose some prop getters for headers, rows and cells, or more if you want!
function Table({
  columns,
  data,
  getHeaderProps = defaultPropGetter,
  getColumnProps = defaultPropGetter,
  getRowProps = defaultPropGetter,
  getCellProps = defaultPropGetter,
  renderRowSubComponent = defaultPropGetter,
  tableProps,
  tableBodyProps
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  },useExpanded)

  return (
    <table {...getTableProps(tableProps)}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                // Return an array of prop objects and react-table will merge them appropriately
                {...column.getHeaderProps([
                  getColumnProps(column),
                  getHeaderProps(column),
                ])}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps(tableBodyProps)}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
           <>
            <tr {...row.getRowProps(getRowProps(row))}>
              {row.cells.map(cell => {
                return (
                  <td
                    // Return an array of prop objects and react-table will merge them appropriately
                    {...cell.getCellProps(
                      getCellProps(cell),
                    )}
                      
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
            
             {row.isExpanded ? (
                  <tr>
                    <td colSpan={10}>
                      
                      {renderRowSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}
          </>  
          )
        })}
      </tbody>
    </table>
  )
}

export default Table