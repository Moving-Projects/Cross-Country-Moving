'use client'

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useEffect, useState } from 'react';

export default function DatePickerElement () {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    if (window.innerWidth < 1024) setIsMobile(true); else setIsMobile(false);

    const onResize = () => {
        setIsMobile(window.innerWidth < 1024);
    }

    window.addEventListener("resize", onResize);

    return () => {
        window.removeEventListener("resize", onResize);
    }
}, []);

if (isMobile === null) return;

    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker disablePast 

            slotProps={{ 
              textField: {
                required: true,
                InputProps: {
                  placeholder: "Date *",
                  style: {fontSize: isMobile ? 14 : 16, fontWeight: 'regular', fontFamily: 'Barlow'}
                },
                sx: {
                  '& input': {    
                        paddingY: isMobile ? '.5rem' : '.65rem',
                        paddingX: isMobile ? '1rem' : '2rem',
                        height: isMobile ? 'auto' : '3.25rem',
                        boxSizing: 'border-box'
                      },
                      '& fieldset': {
                        borderRadius: '1.5rem',
                        borderColor: '#1e1e1e',
                        paddingY: '.5rem',
                      },
                      '& input::placeholder': {
                        fontWeight: 'regular'
                      }
                }
              },
              layout: {
                sx: {
                  '.MuiPickersCalendarHeader-labelContainer': {
                    fontSize: 16
                  },
                  '.MuiPickersDay-root': {
                    fontSize: 12
                  }
                }
              }
            }}
            />
        </LocalizationProvider>
    )
}