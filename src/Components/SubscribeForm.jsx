import React, { useState, useRef } from 'react';
import { db } from './Firebase/firebaseConfig'; // Adjust the path as necessary
import { collection, addDoc } from 'firebase/firestore';
import ContactMe from './ContactMe'
const SubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState(''); // State for phone number
    const [comment, setComment] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const [errors, setErrors] = useState({});
    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const commentRef = useRef(null);
    const successRef = useRef(null);

    const validate = () => {
        const newErrors = {};
        if (!email.trim()) {
            newErrors.email = "Please enter your email";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Please enter a valid email address. For example: jeff@abc.com.";
        }
        if (!name.trim()) {
            newErrors.name = "Please enter your name";
        }
        if (!phone.trim()) {
            newErrors.phone = "Please enter your phone number";
        }
        if (!comment.trim()) {
            newErrors.comment = "Please enter your comment";
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) {
            if (validationErrors.email) return emailRef.current.focus();
            if (validationErrors.name) return nameRef.current.focus();
            if (validationErrors.phone) return phoneRef.current.focus();
            if (validationErrors.comment) return commentRef.current.focus();
        }
        try {
            await addDoc(collection(db, 'contacts'), {
                email,
                name,
                phone, // Save phone number to Firestore
                comment,
                timestamp: new Date(),
            });
            setEmail('');
            setName('');
            setPhone(''); // Reset phone number field
            setComment('');
            setSuccess('Message successfully sent!');
            setTimeout(() => {
                successRef.current?.focus();
            }, 0);
            setErrors({});
            setError(null);
        } catch (error) {
            setError('Error sending message: ' + error.message);
        }
    };

    return (
        <>

            <div className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("hbgg.svg")' }}>

                <div className="flex items-center justify-center w-full min-h-screen bg-black bg-opacity-50 py-10">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-20 max-w-7xl mx-auto px-4">
                        <ContactMe />
                        <div className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-lg shadow-md max-w-md mx-auto">
                            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">For any Queries<br /> Please Reach out to us</h2>
                            <form onSubmit={handleSubmit} className="flex flex-col">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-4">
                                    Email <strong>*</strong>
                                    <input
                                        ref={emailRef}
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setErrors(prev => ({ ...prev, email: "" }));
                                        }}
                                        aria-invalid={!!errors.email}
                                        aria-describedby={errors.email ? "email-error" : ''}
                                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm outline-none sm:text-sm 
                                            ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-500 focus:ring-gray-800"}`}
                                        autoComplete='email'
                                    />
                                </label>
                                {errors.email && (
                                     <span
                                        id="email-error"
                                        role="alert"
                                        className="mt-1 flex items-center gap-2 text-sm text-red-600"
                                    >
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 flex-shrink-0"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        >
                                        <path d="M17.5 2.5L23 12L17.5 21.5H6.5L1 12L6.5 2.5H17.5ZM16.3469 4.5H7.65311L3.311 12L7.65311 19.5H16.3469L20.689 12L16.3469 4.5ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z" />
                                        </svg>

                                        {errors.email}
                                    </span>
                                    )}
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mt-4">
                                    Name <strong>*</strong>
                                    <input
                                        ref={nameRef}
                                        id="name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            setErrors(prev => ({ ...prev, name: "" }));
                                        }}
                                        aria-invalid={!!errors.name}
                                        aria-describedby={errors.name ? "name-error" : ''}
                                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm outline-none sm:text-sm 
                                            ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-500 focus:ring-gray-800"}`}
                                        autoComplete='name'
                                    />
                                </label>
                                {errors.name && (
                                     <span
                                        id="name-error"
                                        role="alert"
                                        className="mt-1 flex items-center gap-2 text-sm text-red-600"
                                    >
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 flex-shrink-0"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        >
                                        <path d="M17.5 2.5L23 12L17.5 21.5H6.5L1 12L6.5 2.5H17.5ZM16.3469 4.5H7.65311L3.311 12L7.65311 19.5H16.3469L20.689 12L16.3469 4.5ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z" />
                                        </svg>

                                        {errors.name}
                                    </span>
                                    )}
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mt-4">
                                    Phone Number <strong>*</strong>
                                    <input
                                        ref={phoneRef}
                                        id="phone"
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                            setErrors(prev => ({ ...prev, phone: "" }));
                                        }}
                                        aria-invalid={!!errors.phone}
                                        aria-describedby={errors.phone ? "phone-error" : undefined}
                                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm outline-none sm:text-sm 
                                            ${errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-500 focus:ring-gray-800"}`}
                                        autoComplete='tel'
                                    />
                                </label>
                                {errors.phone && (
                                    <span
                                        id="phone-error"
                                        role="alert"
                                        className="mt-1 flex items-center gap-2 text-sm text-red-600"
                                    >
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 flex-shrink-0"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        >
                                        <path d="M17.5 2.5L23 12L17.5 21.5H6.5L1 12L6.5 2.5H17.5ZM16.3469 4.5H7.65311L3.311 12L7.65311 19.5H16.3469L20.689 12L16.3469 4.5ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z" />
                                        </svg>

                                        {errors.phone}
                                    </span>
                                    )}
                                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mt-4">
                                    Comment <strong>*</strong>
                                    <textarea
                                        ref={commentRef}
                                        id="comment"
                                        value={comment}
                                        onChange={(e) => {
                                            setComment(e.target.value);
                                            setErrors(prev => ({ ...prev, comment: "" }));
                                        }}
                                        aria-invalid={!!errors.comment}
                                        aria-describedby={errors.comment ? "comment-error" : undefined}
                                        className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm outline-none sm:text-sm 
                                            ${errors.comment ? "border-red-500 focus:ring-red-500" : "border-gray-500 focus:ring-gray-800"}`}
                                        rows="4"
                                    />
                                </label>
                                {errors.comment && (
                                     <span
                                        id="comment-error"
                                        role="alert"
                                        className="mt-1 flex items-center gap-2 text-sm text-red-600"
                                    >
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 flex-shrink-0"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        >
                                        <path d="M17.5 2.5L23 12L17.5 21.5H6.5L1 12L6.5 2.5H17.5ZM16.3469 4.5H7.65311L3.311 12L7.65311 19.5H16.3469L20.689 12L16.3469 4.5ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z" />
                                        </svg>

                                        {errors.comment}
                                    </span>
                                    )}
                                <button
                                    type="submit"
                                    className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md focus:border-gray-800 focus:ring-2 ring-offset-1 focus:ring-gray-800"
                                >
                                    Submit
                                </button>
                                {error && <p className="mt-2 text-red-600 text-sm" role="alert">{error}</p>}
                                {success && (
                                    <p
                                        ref={successRef}
                                        tabIndex="-1"
                                        role="alert"
                                        className="mt-2 text-green-600 text-sm"
                                    >
                                        {success}
                                    </p>
                                )}
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default SubscribeForm;
