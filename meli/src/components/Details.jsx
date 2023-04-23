import React, {useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import { Breadcrumb } from './Breadcrumb';

export const Details = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    let [ item, setItem ] = useState(null);
    let [ description, setDescription ] = useState(null);

    useEffect(()=>{
        send();
        more();
    },[])
    const send =async()=>{
        const response = await fetch('http://localhost:8080/api/item?' +
        searchParams,{
            method: 'GET',
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await response.json();
        setItem(data === false?null:data);
    }
    const more =async()=>{
        const response = await fetch('http://localhost:8080/api/item?' +
        searchParams + '/description',{
            method: 'GET',
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await response.json();
        setDescription(data === false?null:data);
    }
  return (
        item === null || description === null ?(
            <div className="progress">
                <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: "100%" }}
                />
                </div>):
                (<section>
                    <Breadcrumb breadcrumbs={item}></Breadcrumb>
                <div className="card">
                     <div className="row">
                        <div className="col-12 col-md-4">
                        <img className='img-fluid rounded' src={item.pictures.length>0?item.pictures[0].url :item.thumbnail} alt={item.id} />
                        </div>
                        <div className="col-12 col-md-8">
                        <div className="card-body">
                            <small className="text-muted">{item.condition === 'new'?'Nuevo':'Segunda mano'}</small>
                            <h5 className="card-text">{item.title}</h5>
                            <h5 className="card-title"><strong><NumericFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></strong></h5>
                            <p className="card-text">
                            </p>
                        </div>
                        </div>
                        <div className="col-6 offset-6 col-md-4 offset-md-8">
                            <button className='col-10 btn btn-primary'>Comprar</button>
                        </div>
                    </div>
                    <div className="row p-4">
                        <div className="col-12">
                            <strong>Descripci&oacute;n del producto:</strong>
                            <p className='mt-3 description'>
                                {description.plain_text}
                            </p>
                        </div>
                    </div>
                </div>
                </section>)
  )
}
