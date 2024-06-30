import React from 'react'
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import "../style/Contact.css"


const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <>
    <main>
      <section className='container d-flex flex-column justify-content-center align-items-center my-5'>
        <div className='text-center d-flex flex-column gap-2 my-4'>
        <h6 className='fw-bold'>Get In Touch</h6>
        <h1 className='fw-bold'>Contact me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className='d-md-flex gap-3 my-3'>
      <Form.Group className="mb-3 position-relative" controlId="formBasicEmail">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder=""  {...register("firstName", { required: true })} />
        {errors.firstName?.type === "required" && (
        <p role="alert" className='text-danger'>First name is required</p>
      )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="" {...register("lastName", { required: true })} />
        {errors.lastName?.type === "required" && (
        <p role="alert" className='text-danger'>Last name is required</p>
      )}
      </Form.Group>
      </div>

      <div className='d-md-flex gap-3 my-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="" {...register("mail", { required: "Email Address is required" })}  aria-invalid={errors.mail ? "true" : "false"}/>
      {errors.mail && <p role="alert" className='text-danger'>{errors.mail.message}</p>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="phone" placeholder="" {...register("phoneNumber", { required: true })}/>
      {errors.phoneNumber?.type === "required" && (
        <p role="alert" className='text-danger'>Phone number is required</p>
      )}
      </Form.Group>
      </div>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Label>Message</Form.Label>
      <textarea name="" id="" cols="95" rows="6" placeholder='Type your message...' className='w-100' {...register("text", { required: true })}></textarea>
      {errors.text?.type === "required" && (
        <p role="alert" className='text-danger'>Text is required</p>
      )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I accept the terms" className='' />
      </Form.Group>
      
      <button className='form-btn w-100 mb-5'>Submit</button>
    </Form>
      </section>
    </main>
   
    </>
  )
}

export default Contact