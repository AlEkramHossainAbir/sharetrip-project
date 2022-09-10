import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const LeftSection = () => {

    function valuetext(value) {
        return `${value}°C`;
      }

      const [value, setValue] = React.useState([0, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    
    return (
        <div className='left-shadow mb-3'>
            <div className='p-3 d-flex justify-content-between pb-4 div-1'>
                <span className='sort-style'>Sort & Filter</span>
                <span className='reset-stye'>Reset</span>

            </div>
            <div className='p-3'>
                <div className='pt-2 div-2 pb-2'>
                    <span className='price-style'>Price Range</span>
                    
                </div>
                <div className='pt-2 pb-2'>
                    <div className='d-flex justify-content-between mt-2'>
                       <div>
                       <span className='range-style'>Minimum Price</span>
                       <br/>
                        <span className='amount-style'>500</span>
                       </div>
                        <div>
                        <span className='range-style'>Maximum Price</span>
                        <br/>
                        <span className='amount-style'>3,213</span>
                        </div>
                    </div>

                    <div className='d-flex justify-content-between mt-2 mb-3'>
                    <Box sx={{ width: '100%' }}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                    </Box>
                       

                    </div>

                    

                   
                    
                </div>
                

            </div>

            <div className='p-3 div-3'>
                    <div className='pt-3 div-2 pb-2'>
                    <span className='price-style'>Class</span>
                    </div>

                    <div className='mt-2 pb-4'>
                    <FormGroup>
                    <FormControlLabel control={<Checkbox  />} label="AC (40)" />
                    
                    </FormGroup>

                    <FormGroup>
                    <FormControlLabel control={<Checkbox  />} label="Non AC (40)" />
                    
                    </FormGroup>

                    </div>

                   

                   
                    
            </div>


            <div className='p-3 div-3'>

            <div className='pt-3 div-2 pb-2'>
                    <span className='price-style'>Schedule</span>
            </div>

            <div className='pt-4 pb-2'>

            <span className='price-styles'>Departure Time</span>

            <div className='mt-3  d-flex px-2' style={{border:'1px solid #F3F3F6'}}>
                
                   

                    <div className='div-5 me-2'>

                    </div>

                    <div>
                    <span className='span-style'>00:00{' '}-{' '}05:59</span>
                    </div>


                 
            
                    

             </div>

            <div className=' mt-2 d-flex px-2' style={{border:'1px solid #F3F3F6'}}>
                
                   

                    <div className='div-5 me-2'>

                    </div>

                    <div>
                    <span className='span-style'>06:00{' '}-{' '}11:59</span>
                    </div>


                
            
                    

             </div>

            <div className=' mt-2 d-flex px-2' style={{border:'1px solid #F3F3F6'}}>
                
                   

                    <div className='div-5 me-2'>

                    </div>

                    <div>
                    <span className='span-style'>12:00{' '}-{' '}17:59</span>
                    </div>


                
            
                    

             </div>

            <div className=' mt-2 d-flex px-2' style={{border:'1px solid #F3F3F6'}}>
                
                   

                    <div className='div-5 me-2'>

                    </div>

                    <div>
                    <span className='span-style'>18:00{' '}-{' '}23:59</span>
                    </div>


                
            
                    

             </div>
                
            </div>




            </div>
          
            
        </div>
    );
};

export default LeftSection;