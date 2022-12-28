import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return <>
        <div className="container  homemargin">
            <div className="row">
                <div className="col-md-4">
                    <div className='item' >
                        <h2>Meet Explorer !</h2>
                        <p>A futuristic AI powered Road and Payment Analyzer</p>
                        <Link to="/meetexplorer"><button className='btn btn-outline-primary'>Purchase Explorer Licenses</button></Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='item'>
                        <h2>Meet Examiner !</h2>
                        <p>A futuristic AI powered Road and Payment Analyzer</p>
                        <Link to="/meetexaminer"><button className='btn btn-outline-primary'>Purchase EXaminer Licenses</button></Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='item'>
                        <h2>Meet Reports !</h2>
                        <p>A futuristic AI powered Road and Payment Analyzer</p>
                        <Link to="/meetreports"><button className='btn btn-outline-primary'>Purchase Reports Licenses</button></Link>
                    </div>
                </div>
            </div>
        </div>




    </>
}
