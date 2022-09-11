import React from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const RightSection = () => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [age, setAge] = React.useState('');
    const [age2, setAge2] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleChange2 = (event) => {
        setAge2(event.target.value);
    };

    return (
        <div className='mb-5'>
            <div className='mb-3'>
                <span className='right-1 font-medium text-base'>48 Available Buses</span>

            </div>
            <div className=''>


                <div className='mb-1 left-shadow rounded-md bg-white'>
                    <div className='row g-0'>

                        <div className='col-3 d-flex flex-wrap py-1 px-3'>
                            <div className='me-3'>
                                <img src="https://i.ibb.co/KXF2XKM/Vector-Stroke-1.png" alt="Vector-Stroke-1" className='img-fluid' />
                            </div>

                            <div>
                                <span className='right-2 text-sm font-normal '>Earliest Buses</span>

                            </div>


                        </div>

                        <div className='col-3 d-flex flex-wrap bg-style py-1 px-3'>
                            <div className='me-2'>
                                <img src="https://i.ibb.co/xgzGR2v/Icon.png" alt="Icon" className='img-fluid' />
                            </div>

                            <div>
                                <span className='rights-2 text-sm font-normal text-white'>Cheapest Buses</span>

                            </div>


                        </div>

                        <div className='col-3 d-flex flex-wrap py-1 px-3'>
                            <div className='me-3'>
                                <img src="https://i.ibb.co/rmtvzcD/Vector.png" alt="Vector" className='img-fluid' />
                            </div>

                            <div>
                                <span className='right-2 text-sm font-normal'>Available Seats</span>

                            </div>


                        </div>

                        <div className='col-3 d-flex flex-wrap py-1 px-3'>
                            <div className='me-3'>
                                <img src="https://i.ibb.co/rmtvzcD/Vector.png" alt="Vector" className='img-fluid' />
                            </div>

                            <div>
                                <span className='right-2 text-sm'>Fastest Trips</span>

                            </div>


                        </div>

                    </div>

                </div>

                <div className='row gx-0 gy-3 rounded-md bg-white mt-1'>

                    <div className='col-lg-8 col-md-8 col-sm-12 col-12 left-shadow'>

                        <div className=''>

                            <div className='p-3 d-flex justify-content-between'>

                                <span className='person-13 font-semibold text-base'>AC</span>
                                <div>
                                    <div className='name-bg-style py-1 lg:px-4 md:px-2 rounded-2xl'>
                                        <span className='text-lg font-semibold'>Hanif Enterprize</span>
                                    </div>

                                    <span className='person-14 relative text-sm font-normal'>31-DHK-CTG(D)</span>
                                </div>
                                <span className='person-13 font-semibold text-base'>
                                    <img src="https://i.ibb.co/pPfzBV5/Layer-2.png" alt="Layer-2" className='img-fluid' />
                                    {' '}
                                    55
                                </span>
                            </div>


                            <div className='row g-0 relative ' style={{top: '-15px' }}>

                                <div className='col-4 px-3'>

                                    <div>
                                        <span className='person-15 text-xs font-normal'>From</span>
                                    </div>
                                    <div>
                                        <span className='person-16 font-normal text-base'>DHAKA</span>
                                    </div>
                                    <div> 
                                        <span className='person-17 font-semibold text-base'>05:30 AM</span>
                                    </div>
                                    <div>
                                        <span className='person-18 text-sm font-normal'>Kolabagan Counter</span>
                                    </div>
                                    <div>
                                        <span className='person-15 text-xs font-normal'>23 June 2021</span>
                                    </div>
                                </div>


                                <div className='col-4 pe-3 mt-4'>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                        <img src="https://i.ibb.co/LnZTHBq/Vector-3.png" alt="Vector-3" className='img-fluid' />

                                        <img src="https://i.ibb.co/wdmY81R/bus-icon-260nw-454565515-1-Traced.png" alt="bus-icon-260nw-454565515-1-Traced" className='img-fluid' />

                                        <img src="https://i.ibb.co/tKcFzWS/Vector-3-1.png" alt="Vector-3-1" className='img-fluid' />

                                    </div>
                                    <div className='text-center mt-1 d-flex flex-column'>
                                        <span className='person-19 text-sm font-medium'>16 Seats available</span>

                                        <span className='person-15 text-xs font-normal'>6h 00m</span>

                                    </div>





                                </div>


                                <div className='col-4'>
                                    <div>
                                        <span className='person-15 text-xs font-normal'>To</span>
                                    </div>
                                    <div>
                                        <span className='person-16 font-normal text-base'>CHOTTOGRAM</span>
                                    </div>
                                    <div>
                                        <span className='person-17 font-semibold text-base'>11:30 PM</span>
                                    </div>
                                    <div>
                                        <span className='person-18 text-sm font-normal'>Dampara Counter</span>
                                    </div>
                                    <div>
                                        <span className='person-15 text-xs font-normal'>22 June 2021</span>
                                    </div>

                                </div>


                            </div>


                            <div className='row px-3 g-2 mt-1'>

                                <div className='col-6'>


                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Boarding Point</InputLabel>
                                        <Select
                                            style={{ height: '40px' }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="Boadring Point"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Kolabagan Counter</MenuItem>
                                            <MenuItem value={20}>Dampara Counter</MenuItem>

                                        </Select>
                                    </FormControl>


                                </div>

                                <div className='col-6'>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Dropping Point</InputLabel>
                                        <Select
                                            style={{ height: '40px' }}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age2}
                                            label="Dropping Point"
                                            onChange={handleChange2}
                                        >
                                            <MenuItem value={10}>Kolabagan Counter</MenuItem>
                                            <MenuItem value={20}>Dampara Counter</MenuItem>

                                        </Select>
                                    </FormControl>

                                </div>


                            </div>

                            <div className='custom-grid-css grid mt-3 px-lg-3 p-0'>

                                <div className='d-flex justify-content-evenly'>
                                    <img src="https://i.ibb.co/kQ9w5pz/Vector-2.png" alt="Vector-2" className='img-fluid' />
                                    <span className='person-20 text-sm font-medium'>3 Sold Out</span>
                                </div>

                                <div className='d-flex justify-content-evenly'>
                                    <img src="https://i.ibb.co/C1Q3wzG/Vector-3.png" alt="Vector-3" className='img-fluid' />
                                    <span className='person-20 text-sm font-medium'>2 Booked</span>
                                </div>

                                <div className='d-flex justify-content-evenly'>
                                    <img src="https://i.ibb.co/SBQLtnB/Seat.png" alt="Seat" className='img-fluid' />
                                    <span className='person-20 text-sm font-medium'>2 Selected</span>
                                </div>

                                <div className='d-flex justify-content-evenly'>
                                    <img src="https://i.ibb.co/H2Z7pq2/Seat-1.png" alt="Seat-1" className='img-fluid' />
                                    <span className='person-20 text-sm font-medium'>14 Available</span>
                                </div>

                                <div className='d-flex justify-content-evenly'>
                                    <img src="https://i.ibb.co/z2JCtk2/Seat-2.png" alt="Seat-2" className='img-fluid' />
                                    <span className='person-20 text-sm font-medium'>20 Blocked</span>
                                </div>


                            </div>




                        </div>




                    </div>


                    <div className='col-lg-4 col-md-4 col-sm-12 col-12 right-shadow bg-white'>

                        <div className='p-3 rounded-top' style={{ backgroundColor: '#E5F2FE' }}>
                            <div className='d-flex justify-content-end'>
                                <span className='person-1 font-semibold'>Per Person</span>
                            </div>

                            <div className='d-flex justify-content-end'>
                                <span className='person-2 text-2xl font-semibold'>BDT 750</span>
                            </div>

                            <div className='d-flex justify-content-end'>
                                <span className='person-3 font-semibold text-base'>BDT 775</span>
                            </div>

                            <div className='d-flex justify-content-end mt-3 mb-2'>
                                <Button variant="contained" style={{ backgroundColor: ' #1882FF' }}>VIEW SEATS</Button>


                            </div>

                            <div className='d-flex justify-content-end'>
                                <span className='person-4 text-sm font-medium'>Cancellation Policy</span>
                            </div>

                        </div>

                        <div className=''>

                            <div className='row- g-0 d-flex text-center p-3'>

                                <div className='col-6 p-1 rounded-3' style={{ backgroundColor: '#1882FF', color: 'white' }}>
                                    <span className='person-5 text-sm font-medium text-white'>SEAT INFO</span>
                                </div>

                                <div className='col-6 p-1 rounded-3' style={{ border: '1px solid #C7C7CC', color: '#8E8E93' }}>
                                    <span className='person-6 text-sm font-medium'>POLICY</span>
                                </div>

                            </div>


                            <div className='px-3 row'>

                                <div className='col-6 d-flex justify-content-between'>
                                    <img src="https://i.ibb.co/VYG6SYf/Vector-1.png" alt="Vector-1" className='img-fluid' />

                                    <span className='person-7 text-sm font-medium'>B4</span>

                                    <span className='person-7 text-sm font-medium'>B-Class</span>

                                </div>

                                <div className='col-6 d-flex justify-content-end'>
                                    <span className='text-sm font-medium'>BDT 750</span>
                                </div>


                            </div>

                            <div className='p-3 row'>

                                <div className='col-6 d-flex justify-content-between'>
                                    <img src="https://i.ibb.co/VYG6SYf/Vector-1.png" alt="Vector-1" className='img-fluid' />

                                    <span className='person-7 text-sm font-medium'>C4</span>

                                    <span className='person-7 text-sm font-medium'>B-Class</span>

                                </div>

                                <div className='col-6 d-flex justify-content-end'>
                                    <span className='text-sm font-medium'>BDT 750</span>
                                </div>





                            </div>

                            <div className='px-3 py-0 relative' style={{ top: '-10px' }}>

                                <hr style={{ border: '1 px solid #E0E0E1' }} />


                            </div>

                            <div className='px-3 d-flex justify-content-between relative text-sm font-medium' style={{ top: '-5px' }}>

                                <span className='person-7'>Charge: </span>
                                <span>BDT 50</span>

                            </div>

                            <div className='px-3 mb-4 d-flex justify-content-between relative text-sm font-medium'>

                                <span className='person-7'>Insurance: </span>
                                <span>BDT 20</span>

                            </div>

                            <div className='px-3 py-0 relative' style={{ top: '-10px' }}>

                                <hr style={{ border: '1 px solid #E0E0E1' }} />


                            </div>

                            <div className='px-3 d-flex justify-content-between text-sm font-medium relative'>

                                <span className='person-7'>Sub Total: </span>
                                <span>BDT 1,570</span>

                            </div>


                            <div className='mt-3 rounded-bottom bg-white font-normal'>

                                <div className='d-flex px-3'>

                                    <div>
                                        <Checkbox {...label} defaultChecked />
                                    </div>

                                    <div className='mt-2'>
                                        <span className='text-sm font-medium'>I want to avail <span className='person-11 text-sm font-medium'>Insurance Service</span></span>
                                    </div>

                                </div>

                                <div className='px-3 mt-2 pb-3 text-center'>
                                    <Button variant="contained" style={{ backgroundColor: ' #1882FF' }}>Select & Continue to return</Button>

                                </div>

                            </div>


                        </div>


                    </div>


                </div>

            </div>

        </div>
    );
};

export default RightSection;