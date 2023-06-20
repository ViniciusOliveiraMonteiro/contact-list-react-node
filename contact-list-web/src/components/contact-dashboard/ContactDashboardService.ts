import axios from "axios";

export class ContactDashboardService{
  private url!: string;
  constructor(){
    this.url = 'list-contact';
  }
  listContact(page:number = 1, pageSize:number = 3) {
    return axios.get(
      process.env.REACT_APP_BASE_URL!+this.url,
      {
        params: {
          page: page,
          pageSize: pageSize
        }
      }
    ).then(response => {
      return response.data;
    }).catch(error => {
      return error;
    });
  }
}