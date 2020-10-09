import { ICar } from "./ICar"
export interface ICarList {
  rowsPerPage: number;
  totalItems: number;
  totalPAges: number;
  data: ICar[];
}