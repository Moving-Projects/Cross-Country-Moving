'use client'

import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { useEffect, useState } from "react";

export default function () {
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

    return (
        <Select placeholder="Moving Size" 
            sx={{
                borderRadius: '1.5rem',
                backgroundColor: '#f1f1f1',
                borderColor: "#1e1e1e",
                paddingY: isMobile ? '.5rem' : '.65rem',
                paddingLeft: isMobile ? '1rem' : '2rem',
                height: isMobile ? 'auto' : '3.25rem',
                fontSize: isMobile ? 14 : 16,
                boxSizing: 'border-box'
            }}>
            <Option value="small">Small</Option>
            <Option value="medium">Medium</Option>
            <Option value="big">Big</Option>
        </Select>
    )
}