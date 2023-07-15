import axios from "axios";

export class ContactPageService{
  private url!: string;
  constructor(){
  }
  listContact(page:number = 1, pageSize:number = 3) {
    return axios.get(
      process.env.REACT_APP_BASE_URL!+'list-contact',
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

  registerContact(params: any) {
    return axios.post(
      process.env.REACT_APP_BASE_URL!+'register-contact',
      params
    ).then(response => {
      return response.data;
    }).catch(error => {
      return error;
    });
  }

  toggleFavorite(params: any) {
    return axios.patch(
      process.env.REACT_APP_BASE_URL!+'toggle-favorite',
      params
    ).then(response => {
      return response.data;
    }).catch(error => {
      return error;
    });
  }
}