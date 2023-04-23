import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

export const Breadcrumb = ({breadcrumbs}) => {
    let [ item, setItem ] = useState(null);
    useEffect(()=>{
        send();
    },[])
    const send =async()=>{
        const response = await fetch('http://localhost:8080/api/breadcrumb?id=' +
        breadcrumbs.category_id,{
            method: 'GET',
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await response.json();
        setItem(data === false?null:data.path_from_root);
    }
  return (
    item === undefined || item === null? <></>:<nav aria-label="breadcrumb">
    <ol className="breadcrumb">
        {item.map((e)=>{
            return <li className="breadcrumb-item active" aria-current="page" key={e.id}>
            <Link to="#">{e.name}</Link>
          </li>
        })}
    </ol>
  </nav>
  
  )
}