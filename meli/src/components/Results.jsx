import React from 'react'
import { NumericFormat } from 'react-number-format';
import { useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { Details } from './Details';

export const Results = ({results}) => {
  let [searchParams, setSearchParams] = useSearchParams();

  const setVals=(e)=>{
    const t = searchParams.get('search');
    const l = searchParams.get('location');
    setSearchParams({location:l,search:t,id:e.id});
  }

  return (
     results === null ? <></>: (
      searchParams.get('id') === null ?
     <ol className="list-group">
       {results.length === 0?
        <div className="card mt-5 mb-5">
          <div className="row">
            <div className="col-12 col-md-4 text-center">
              <FontAwesomeIcon className='mt-2' size='4x' icon={faSearchLocation}></FontAwesomeIcon>
            </div>
            <div className="col-12 col-md-8">
              <div className="card-body">
                  <h5 className="card-title"><strong>No hay publicaciones que coincidan con tu b&uacute;squeda.</strong></h5>
                  <ul>
                    <li><strong>Revisa la ortograf&iacute;a</strong> de la palabra.</li>
                    <li><strong>Utiliza palabras m&aacute;s gen&eacute;ricas</strong> o menos palabras.</li>
                    <li>Navega por las categor&iacute;as para encontrar un producto similar</li>
                  </ul>
              </div>
            </div>
          </div>
        </div>:
       results.map((e)=>{
         return <li className='list-group-item p-4' key={e.id} onClick={()=>setVals(e)}>
          <div className="row">
            <div className="col-2">
              <img src={e.thumbnail}></img>
            </div>
            <div className="col-8">
              <p><NumericFormat value={e.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
              <p>{e.title}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-4 offset-8">{e.address.state_name}</div>
          </div>
         </li>
       })}
     </ol>:<Details />)
  )
}
