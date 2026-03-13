import axios from "axios";
import React,{useEffect,useState} from "react";

export default function Apidemo1() {

  const [data,setData] = useState([])
  const [error,setError] = useState("")

  useEffect(()=>{

    axios.get("https://dummy-json.mock.beeceptor.com/companies")
    .then((response)=>{
      setData(response.data)
    })
    .catch((err)=>{
      setError(err.message)
    })

  },[])

  return (
    <div>

      <h2>Fetch Data</h2>

      {
        error ? <b>{error}</b> :
        data.length==0 ?
        <b>Loading...</b> :

        <table border={1}>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Industry</th>
            <th>CEO</th>
            <th>Country</th>
          </tr>

          {
            data.map((company,index)=>(
              <tr key={index}>
                <td>{company.id}</td>
                <td>{company.name}</td>
                <td>{company.industry}</td>
                <td>{company.ceoName}</td>
                <td>{company.country}</td>
              </tr>
            ))
          }

        </table>
      }

    </div>
  )
}
