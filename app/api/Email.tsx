import * as React from 'react';
import { Html, Container, Tailwind, Img, Hr, Text, Section, Row, Column } from "@react-email/components";

export default function Email({props}: {props: FormData}) {
  return (
    <Html lang="en">
        <Tailwind>
            <Container>
                <Img src="https://www.crosscountrymoving.company/logo.png" alt="logo" className='mx-auto'/>
                <Hr className='my-4'/>
                <Section>
                    <Row className='mb-4'>
                        <Column className='text-xl font-bold mr-6'>Move details:</Column>
                    </Row>
                    <Row className='mb-2'>
                        <Column className='text-base mr-6'>Moving From: {props.get("moving-from")?.toString()}</Column>
                    </Row>
                    <Row className='mb-2'>
                        <Column className='text-base mr-6'>Moving To: {props.get("moving-to")?.toString()}</Column>
                    </Row>
                    <Row className='mb-2'>
                        <Column className='text-base'>Size: {props.get("size")?.toString()}</Column>
                    </Row>
                    <Row className='mb-4'>
                        <Column className='text-base'>Date: {props.get("date")?.toString()}</Column>
                    </Row>
                    <Row className='mb-2'>
                        <Column className='text-xl font-bold'>Client details:</Column>
                    </Row>
                    <Row className='mb-2'>
                        <Column className='text-base'>Name: {props.get("name")?.toString()}</Column>
                    </Row>
                    <Row className='mb-2'>
                        <Column className='text-base'>Email: {props.get("email")?.toString()}</Column>
                    </Row>
                    
                </Section>
            </Container>
        </Tailwind>
        
    </Html>
  );
}
