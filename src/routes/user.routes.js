import axios from "axios";
import { ROUTES } from "./apiRoutes.routes";
axios.defaults.headers['x-access-token'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImlhdCI6MTYwNjA5MTIwNywiZXhwIjoxNjA2MTc3NjA3fQ.7OUZdtemwN_OFgQhSzjH21LdvAyXdx806ssySP1IwdM";
export const Login = async ({ password, email }) => {
  try {
    const response = await axios.post(ROUTES.LOGIN, {
      password,
      email,
    });
    return response;
  } catch (error) {
    return error.response;
  }
};


export const SaveUserForAdmin = async (data) => {
    
  try {
      console.log(ROUTES.SAVEUSERFORADMIN)
    const response = await axios.post(ROUTES.SAVEUSERFORADMIN, data, {
      headers: {
        
        "Content-Type": "multipart/form-data",
      },
     
    });
    
    return response
  } catch (error) {
      console.log(error)
      return error.response
  }
};


export const ReadUsuarios = async () => {
    
  try {
    const response =  await axios.get(ROUTES.READUSERFORADMIN);
    console.log(response)
    return response
  } catch (error) {
      console.log(error.response)
      return error.response
  }
};


