import React from 'react';
import { Table as BSTable } from 'reactstrap';

export interface ITableProps {
  /**
   * display with striped
   *
   * @default false
   */
  striped?: boolean;
  /**
   * display with bordered
   *
   * @default false
   */
  bordered?: boolean;
  dataSource: Array<{ [key: string]: any; }>;
  columns: Array<{ title: string; key: string; }>;
}

export const Table = ({ striped = false, bordered = false, dataSource, columns }: ITableProps) => {
  return (
    <BSTable bordered={bordered} striped={striped}>
      <thead>
        <tr>
          {columns.map(({ title }) => <th key={`thead-${title}`}>{title}</th>)}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((rowData, index: number) => (
          <tr key={`tr-${index}`}>
            {columns.map(({ key }) => <td key={`td-${key}`}>{rowData[key]}</td>)}
          </tr>
        ))}
      </tbody>
    </BSTable>
  );
};

export default Table;
