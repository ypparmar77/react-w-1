import React from 'react'
// import "./style.css";
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom';
export default function Api_work() {
    
    const [Table, setTable] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            return res.json();
        })
        .then((Table)=>{
            setTable(Table);
        });
    },[]);

    if (!Table) {
        return (
          <>
            <div id='work_spinner' className="spinner-border text-success"></div>
          </>
        )
    }

  return (
    <div>
         <>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        {/* <th>UserID</th> */}
                        <th>Title</th>
                        <th>Body</th>
                        <th>Post</th>
                    </tr>
                </thead>
                <tbody>
                      {Table.map((Fetch) =>(
                                <tr key={Fetch.id}>
                                <td>{Fetch.id}</td>
                                {/* <td>{Fetch.userId}</td> */}
                                <td>{Fetch.title}</td>
                                <td>{Fetch.body}</td>
                                <td><Link className='btn btn-info' to={`/Api_work/Post_Work/${Fetch.id}`}>Post</Link></td>
                            </tr>
                            ))}
                            </tbody>
            </table>
        </>
    </div>
  )
}
