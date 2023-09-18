// Generated with utils/create-component.js
import React from "react";

import {
  useTable, useSortBy, useBlockLayout, useResizeColumns
} from 'react-table';

import "./Table.scss";

export const Table = ({ columns, data }) => {

  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: 400,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
      columns,
      data,
      defaultColumn,
    },
    useSortBy,
    useBlockLayout,
    useResizeColumns,
  )

  return (
    <div className="lp__table--wrapper">
      <div className="table" {...getTableProps()}>
        <div>
          {headerGroups.map(headerGroup => (
            <div className="tr" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <>
                  <div
                    className="th"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render('Header')}
                    {/* TODO: needs to change the icon from our library */}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                    <div {...column.getResizerProps()} />
                  </div>
                </>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <div className="tr" {...row.getRowProps()}>
                {
                  row.cells.map(cell => (
                    <div className="td" {...cell.getCellProps()}>{cell.render('Cell')}</div>
                  ))
                }
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
};
