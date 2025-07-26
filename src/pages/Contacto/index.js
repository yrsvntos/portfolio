import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './contacto.css';
import { Link } from "react-router-dom";



export default function Contactos(){

    const initialValues = {
        name: '',
        email: '',
        subject: '',
        message: '',

    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().email('Email inválido').required('Email obrigatório'),
        subject: Yup.string().required('Assunto obrigatório'),
        message: Yup.string().required('Mensagem obrigatória'),
    });

    const sendEmail = (values, actions) => {
        emailjs
          .send(
            'service_rgjt5lw',
            'template_u6kwe3f',
            values,
            '7PHjUFZxhA9SW4iUD'
          )
          .then(() => {
            toast.success('Mensagem enviada com sucesso!');
            actions.resetForm();
          })
          .catch(() => {
            toast.error('Erro ao enviar mensagem.');
          })
          .finally(() => {
            actions.setSubmitting(false);
          });
    };

    return(
        <>
            <main className="contacto">
                <div className="container">
                    <div className="py-5">
                        <h1 className="text-verde fw-bold mb-3">
                            Contactos.
                        </h1>
                        <p className="mb-4">
                            Entre em contacto comigo através do formulário ou pode enviar um email para <Link className="text-verde fw-bold" to="mailto:yrsvntos@gmail.com">yrsvntos@gmail.com</Link>
                        </p>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={sendEmail}
                        >
                            {({ isSubmitting, isValid, dirty }) => (
                            <Form>
                                <div className="mb-4">
                                    <label className="form-label">Nome <span className="text-danger">*</span></label>
                                    <Field type="text" name="name" className="form-control bg-transparent text-white" />
                                    <div className="text-danger small">
                                        <ErrorMessage name="name" />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label">Email <span className="text-danger">*</span></label>
                                    <Field type="email" name="email" className="form-control bg-transparent text-white"/>
                                    <div className="text-danger small">
                                        <ErrorMessage name="email" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Assunto <span className="text-danger">*</span></label>
                                    <Field type="text" name="subject" className="form-control bg-transparent text-white"/>
                                    <div className="text-danger small">
                                        <ErrorMessage name="subject" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label">Mensagem <span className="text-danger">*</span></label>
                                    <Field as="textarea" name="message" className="form-control bg-transparent text-white" rows="5"/>
                                    <div className="text-danger small">
                                        <ErrorMessage name="message" />
                                    </div>

                                </div>

                                <button 
                                    type="submit" 
                                    className="btn btn-md"
                                    style={{
                                        backgroundColor: isValid && dirty ? '#00A191' : '#00A191',
                                        opacity: isValid && dirty ? 1 : 0.5,
                                        color: '#fff',
                                        cursor: isValid && dirty ? 'pointer' : 'not-allowed',
                                    }}              
                                    disabled={!isValid || !dirty || isSubmitting}>
                                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                                </button>
                            </Form>
                            )}
                        </Formik>
                        <ToastContainer />

                    </div>
                </div>
            </main>
        </>
    );
}