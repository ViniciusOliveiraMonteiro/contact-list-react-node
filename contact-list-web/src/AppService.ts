import axios from "axios";

export class AppService{
  private url!: string;
  constructor(){
    this.url = 'list-contact';
  }
  listContact() {
    return axios.get(
      process.env.REACT_APP_BASE_URL!+this.url
    ).then(response => {
      return response.data;
    }).catch(error => {
      return error;
    });
  }
}