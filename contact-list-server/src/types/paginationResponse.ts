import { ContactList } from './listContactType';
export interface PaginationResponse {
  success: boolean;
  page: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
  data: ContactList[];
}