import axios from "axios";

export class RegisterFormService{
  private url!: string;
  constructor(){
    this.url = 'register-contact';
  }
  registerContact(params: any) {
    return axios.post(
      process.env.REACT_APP_BASE_URL!+this.url,
      params
    ).then(response => {
      return response.data;
    }).catch(error => {
      return error;
    });
  }
}