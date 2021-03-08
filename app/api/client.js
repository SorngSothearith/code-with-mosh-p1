import { create } from "apisauce";
import cache from "../utility/catche";

const apiClient = create({
  baseURL: "http://172.168.17.14:9000/api/",
});
const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  
  if (response.ok){
    cache.store(url, response.data)
    return  response
  } 
  const data = await cache.get(url)
  console.log(data)
  return data ? {ok:true ,data} : response
};

export default apiClient;
