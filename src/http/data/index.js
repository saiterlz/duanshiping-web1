import axios from "../axios";
 
export const alldata=(data)=>{
  return axios({
    url:'/admin/articles/',
    method:'post',
    data
  })
}
 
 
export default {alldata}