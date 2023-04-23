import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';

export const Wellcome = () => {
    const snap = useSnapshot(state);
    return (
    <div className="container-fluid">
        <section className='row vh-100 justify-content-center align-items-center'>
        <header className={state.grid[0] + ' d-none d-md-block sticky-bottom'}>
            <h1 className='ml-logo img-fluid'><span className='d-none'>MercadoLibre</span></h1>
        </header>
        <nav className={state.grid[0] + ' ps-5'}>
            <ul className='col'>
            { state.locations.map((e)=>{
                return <li key={e.c} className='list-unstyled pointer'>
                    <Link to={"/items?location="+e.c}>
                        <div className="card mb-1">
                            <div className="row align-items-center g-0 p-0">
                            <div className="col-6">
                                <img src={'./'+ e.c + '.png'} className="rounded-start img-thumbnail" alt={e.p} />
                            </div>
                            <div className="col-6">
                                <div className="card-body">
                                <h5 className="card-title">
                                    <div className="row">
                                    <div className="col ml-blue bolder">
                                        {e.p}
                                    </div>
                                    <div className="col-1 d-none d-md-none d-xl-block">
                                        <FontAwesomeIcon  icon={faChevronRight} />
                                    </div>
                                    </div>
                                    </h5>
                                </div>
                            </div>
                            </div>
                        </div>
                    </Link>
                </li>
                })
            }
            </ul>
        </nav>
        </section>
        <Footer></Footer>
    </div>
    )
}
