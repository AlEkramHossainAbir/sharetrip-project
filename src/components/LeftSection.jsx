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
        <div className='left-shadow rounded-md bg-white mb-3'>
            <div className='p-3 d-flex justify-content-between pb-4 div-1'>
                <span className='sort-style text-sm font-medium text-black'>Sort & Filter</span>
                <span className='reset-stye font-medium text-base'>Reset</span>

            </div>
            <div className='p-3'>
                <div className='pt-2 div-2 pb-2'>
                    <span className='price-style font-medium text-base'>Price Range</span>
                    
                </div>
                <div className='pt-2 pb-2'>
                    <div className='d-flex justify-content-between mt-2 text-black'>
                       <div>
                       <span className='text-xs font-normal'>Minimum Price</span>
                       <br/>
                        <span className='text-base font-bold'>500</span>
                       </div>
                        <div>
                        <span className='text-xs font-normal'>Maximum Price</span>
                        <br/>
                        <span className='text-base font-bold'>3,213</span>
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
                    <span className='price-style font-medium'>Class</span>
                    </div>

                    <div className='mt-2 pb-4 font-normal'>
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
                    <span className='price-style font-medium'>Schedule</span>
            </div>

            <div className='pt-4 pb-2'>

            <span className='price-styles text-sm font-medium'>Departure Time</span>

            <div className='mt-3  d-flex px-2' style={{border:'1px solid #F3F3F6'}}>
                
                   

                    <div className='div-5 w-6 h-6 opacity-50  me-2'>

                    </div>

                    <div>
                    <span className='text-2xl font-medium text-black'>00:00{' '}-{' '}05:59</span>
                    </div>


                 
            
                    

             </div>

            <div className=' mt-2 d-flex px-2' style={{border:'1px solid #F3F3F6'}}>
                
                   

                    <div className='div-5 w-6 h-6 opacity-50 me-2'>

                    </div>

                    <div>
                    <span className='text-2xl font-medium text-black'>06:00{' '}-{' '}11:59</span>
                    </div>


                
            
                    

             </div>

            <div className=' mt-2 d-flex px-2' style={{border:'1px solid #F3F3F6'}}>
                
                   

                    <div className='div-5 w-6 h-6 opacity-50 me-2'>

                    </div>

                    <div>
                    <span className='text-2xl font-medium text-black'>12:00{' '}-{' '}17:59</span>
                    </div>


                
            
                    

             </div>

            <div className=' mt-2 d-flex px-2' style={{border:'1px solid #F3F3F6'}}>
                
                   

                    <div className='div-5 w-6 h-6 opacity-50 me-2'>

                    </div>

                    <div>
                    <span className='text-2xl font-medium text-black'>18:00{' '}-{' '}23:59</span>
                    </div>


                
            
                    

             </div>
                
            </div>




            </div>
          
            
        </div>
    );
};

export default LeftSection;