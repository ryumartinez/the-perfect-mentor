//@ts-nocheck
import React from 'react'

//tengo que copiar el resto de la doc de como hacer un subcomoponent
//El subcomponent va a ser un form que va a actualizar la data
//Ese componente va a hacerle un optimistic update a la tabla
//Lo unico que me queda es poner los estilos. Para la columna status voy a poner un className condicional
//
const TableLayout = ({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
  renderRowSubComponent
}) => {


  return (
    <table {...getTableProps()}>

      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>



     <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              // Use a React.Fragment here so the table markup is still valid
              <React.Fragment >
                <tr {...row.getRowProps({className:row.values.status})}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps(
                        {}
                      )}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
                {/*
                    If the row is in an expanded state, render a row with a
                    column that fills the entire length of the table.
                  */}
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={10}>
                      {/*
                          Inside it, call our renderRowSubComponent function. In reality,
                          you could pass whatever you want as props to
                          a component like this, including the entire
                          table instance. But for this example, we'll just
                          pass the row
                        */}
                      {renderRowSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            )
          })}
        </tbody>


      
    </table>
  );
}

export default TableLayout