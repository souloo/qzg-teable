import type { IUser } from '../../context';
import type { IGridTheme } from './configs';
export * from './renderers/cell-renderer/interface';

export interface IScrollState {
  scrollTop: number;
  scrollLeft: number;
  isScrolling: boolean;
}

export interface IPosition {
  x: number;
  y: number;
}

export interface IRegionPosition extends IPosition {
  rowIndex: number;
  columnIndex: number;
}

export interface IRectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

export enum SelectionRegionType {
  Rows = 'Rows',
  Columns = 'Columns',
  Cells = 'Cells',
  None = 'None',
}

export enum RegionType {
  Cell = 'Cell',
  ActiveCell = 'ActiveCell',
  RowHeader = 'RowHeader',
  AppendRow = 'AppendRow',
  ColumnHeader = 'ColumnHeader',
  AppendColumn = 'AppendColumn',
  ColumnHeaderMenu = 'ColumnHeaderMenu',
  ColumnDescription = 'ColumnDescription',
  ColumnResizeHandler = 'ColumnResizeHandler',
  RowHeaderDragHandler = 'RowHeaderDragHandler',
  RowHeaderExpandHandler = 'RowHeaderExpandHandler',
  RowHeaderCheckbox = 'RowHeaderCheckbox',
  ColumnStatistic = 'ColumnStatistic',
  RowCountLabel = 'RowCountLabel',
  AllCheckbox = 'AllCheckbox',
  FillHandler = 'FillHandler',
  Blank = 'Blank',
  None = 'None',
}

export type ICellRange = [colIndex: number, rowIndex: number]; // The beginning and the end come in pairs
export type IColumnRange = [colStartIndex: number, colEndIndex: number];
export type IRowRange = [rowStartIndex: number, rowEndIndex: number];
export type IRange = ICellRange | IColumnRange | IRowRange;

export interface IMouseState extends IRegionPosition {
  type: RegionType;
  isOutOfBounds: boolean;
}

enum RowType {
  Blank,
  Cell,
  Append,
  GroupHeader,
}

interface IRowBase {
  type: RowType;
}

interface ICellRow extends IRowBase {
  type: RowType.Cell;
}

interface IAppendRow extends IRowBase {
  type: RowType.Append;
}

interface IBlankRow extends IRowBase {
  type: RowType.Blank;
}

interface IGroupHeaderRow extends IRowBase {
  type: RowType.GroupHeader;
}

export type ILinearRow = ICellRow | IAppendRow | IGroupHeaderRow | IBlankRow;

export interface IColumnStatistics {
  [columnId: string]: IColumnStatistic | null;
}

export interface IColumnStatistic {
  total: string;
  [key: string]: string;
}

export interface IGridColumn {
  id?: string;
  name: string;
  icon?: string;
  width?: number;
  hasMenu?: boolean;
  readonly?: boolean;
  description?: string;
  customTheme?: Partial<IGridTheme>;
}

export interface IColumnResizeState {
  columnIndex: number;
  width: number;
  x: number;
}

export interface IDragState {
  type: DragRegionType;
  delta: number;
  ranges: IRange[];
  isDragging: boolean;
}

export enum DragRegionType {
  Rows = 'Rows',
  Columns = 'Columns',
  None = 'None',
}

export type IScrollDirection = -1 | 0 | 1;

export enum MouseButtonType {
  Left = 0,
  Center = 1,
  Right = 2,
}

export enum RowControlType {
  Drag = 'Drag',
  Expand = 'Expand',
  Checkbox = 'Checkbox',
}

export interface IRowControlItem {
  type: RowControlType;
  icon?: string;
}

export type ICellItem = [colIndex: number, rowIndex: number];

export type ICollaborator = {
  activeCell: ICellItem;
  user: Omit<IUser, 'phone'>;
  borderColor: string;
  timeStamp: number;
}[];

export type ICellPosition = [x: number, y: number];

export interface IPositionWithBounds {
  bounds: IRectangle;
  eventPosition: IPosition;
}

export enum DraggableType {
  All = 'all',
  None = 'none',
  Column = 'column',
  Row = 'row',
}

export enum GridCustomIcon {
  Description = 'description',
}

export enum SelectableType {
  All = 'all',
  None = 'none',
  Column = 'column',
  Row = 'row',
  Cell = 'cell',
}

export interface IActiveCellBound {
  rowIndex: number;
  columnIndex: number;
  width: number;
  height: number;
  totalHeight: number;
  scrollTop: number;
  scrollEnable: boolean;
}
