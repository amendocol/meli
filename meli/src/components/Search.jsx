import React, {useState, useEffect}from 'react'
import { useSnapshot } from 'valtio';
import state from '../store/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'react-router-dom';
import { Results } from './Results';
import { Link } from 'react-router-dom';
export const Search = () => {

let [searchParams, setSearchParams] = useSearchParams();
const snap = useSnapshot(state);
const [ results, setResults ] = useState(null);
let [ toSearch, setToSearch ] = useState('');

const handleType = (event)=>{
    if (event.key === 'Enter' || event.key === 'intro') {
        event.preventDefault();
        send();
    }else{
        setToSearch(event.target.value);
    }
}
const req = ()=>{
    let s = searchParams.get('search');
    if(toSearch === '' && s !== null){
        setToSearch(s);
    }
    if(toSearch !== '' || s === null){
        const l = searchParams.get('location');
        setSearchParams({location:l,search:toSearch});
        send();
    }
}
const send =async()=>{
    if(searchParams.get('search') !==null){
        const l = searchParams.get('location');
        setSearchParams({location:(l || 'LA'),search:toSearch});
        const response = await fetch('http://localhost:8080/api/items?search=' +
        searchParams + '&&region=' + searchParams.get('location'),{
            method: 'GET',
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await response.json();
        setResults(data === false?[]:data.results);
    }else{setResults[[]]}
}
useEffect(()=>{
    req();
    send();
},[])
  return (
    <div className="">
        <div className="row align-items-center m-0 p-2 search">
            <div className="col-2 col-md-1 offset-1 d-none d-md-block">
                <Link to={'/'}>
                    <img className='ml-logoSearch' src={state.images[0]}></img>
                </Link>
            </div>
            <div className="col-12 col-md-9 align-self-center bg-light pointer">
                <form className="d-flex" role="search">
                    <input
                    autoFocus
                    className="form-control me-2 border-0"
                    id="search"
                    type="search"
                    placeholder="Nunca dejes de buscar"
                    aria-label="Search"
                    value={toSearch}
                    onChange={handleType}
                    onKeyDown={handleType}
                    />
                    <FontAwesomeIcon className='mt-2' icon={faMagnifyingGlass} onClick={()=>req()}/>
                </form>
            </div>
        </div>
        <section className="container list-group">
            <Results results = {results}/>
        </section>
    </div>
  )
}
