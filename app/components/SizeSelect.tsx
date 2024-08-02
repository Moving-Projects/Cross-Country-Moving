'use client'

import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { useEffect, useState } from "react";

export default function SizeSelect () {
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
        <Select required placeholder="Moving Size *" 
            name="size"
            sx={{
                borderRadius: '1.5rem',
                backgroundColor: 'transparent',
                borderColor: "#1e1e1e",
                paddingY: isMobile ? '.5rem' : '.65rem',
                paddingX: isMobile ? '1rem' : '2rem',
                height: isMobile ? 'auto' : '3.25rem',
                fontSize: isMobile ? 14 : 16,
                boxSizing: 'border-box',
                fontWeight: 'regular',
                fontFamily: 'Barlow',
            }}>
            <Option value="studio" sx={{fontFamily: 'Barlow'}}>Studio</Option>
            <Option value="1-bedroom" sx={{fontFamily: 'Barlow'}}>1 Bedroom</Option>
            <Option value="2-bedroom" sx={{fontFamily: 'Barlow'}}>2 Bedroom</Option>
            <Option value="3-bedroom" sx={{fontFamily: 'Barlow'}}>3 Bedroom</Option>
            <Option value="4-bedroom" sx={{fontFamily: 'Barlow'}}>4+ Bedroom</Option>
            <Option value="office" sx={{fontFamily: 'Barlow'}}>Office/Commercial</Option>
            <Option value="other" sx={{fontFamily: 'Barlow'}}>Other</Option>
        </Select>
    )
}