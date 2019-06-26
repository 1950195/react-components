import React from 'react';
import { Table as BSTable } from 'reactstrap';

interface IRowData {
  [key: string]: any;
}

interface IColumn {
  title: string;
  key: string;
}

interface IRowProps<RowData extends IRowData, Column extends IColumn> {
  rowData: RowData;
  columns: Column[];
}

export interface ITableProps<RowData extends IRowData, Column extends IColumn> {
  striped?: boolean;
  bordered?: boolean;
  dataSource: RowData[];
  columns: Column[];
}

const Row = ({ rowData, columns }: IRowProps<IRowData, IColumn>) => (
  <tr>
    {columns.map(({ key }: IColumn) => <td key={`td-${key}`}>{rowData[key]}</td>)}
  </tr>
);

export const Table = ({ striped = false, bordered = false, dataSource, columns }: ITableProps<IRowData, IColumn>) => {
  return (
    <BSTable bordered={bordered} striped={striped}>
      <thead>
        <tr>
          {columns.map(({ title }: IColumn) => <th key={`thead-${title}`}>{title}</th>)}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((rowData: IRowData, index: number) => (
          <Row key={`tr-${index}`} {...{rowData, columns}} />
        ))}
      </tbody>
    </BSTable>
  );
};

export default Table;
