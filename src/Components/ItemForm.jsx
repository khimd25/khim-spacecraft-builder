import React, { useState } from 'react';
import styles from './ItemForm.module.css'; 

const INITIAL_DATA = {
    name: '',
    quantity: '',
  purpose: '',
    };



    const ItemForm = ({ onAddItem }) => {
        const [form, setForm] = useState(INITIAL_DATA);
        const [errors, setErrors] = useState({});

        const validate = () => {
            const errs = {};
            if (!form.name.trim()) errs.name = 'Required';
            if (!form.quantity.trim()) errs.quantity = 'Required';
            if (!form.purpose.trim()) errs.purpose = 'Required';
            return errs;
        };

        const handleChange = (e) => {
            const { name, value } = e.target;
            setForm((f)=> ({ ...f, [name]: value }));
            setErrors((errs) => ({ ...errs, [name]: undefined}));
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            const errs = validate();
            if (Object.keys(errs).length > 0) {
                setErrors(errs);
                return;
            }
            onAddItem({...form, quantity: Number(form.quantity) });
            setForm(INITIAL_DATA);
            setErrors({});

        };


        const inputStyle = (field) => ({
            border: errors[field] ? '1px solid red' : '1px solid #ccc',
            padding: '0.5rem',
            width: '100%',
            boxSizing: 'border-box',
        });

        return (
            <>
                <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }} className="item-form">
                    <div>
                        <label>
                            Item Name:
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                style={inputStyle('name')}
                            />
                        </label>
                        {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
                    </div>
                    <div>
                        <label>
                            Quantity:
                            <input
                                name="quantity"
                                value={form.quantity}
                                onChange={handleChange}
                                style={inputStyle('quantity')}
                            />
                        </label>
                        {errors.quantity && <small style={{ color: 'red' }}>{errors.quantity}</small>}
                    </div>
                    <div>
                        <label>
                            Purpose:
                            <input
                                name="purpose"
                                value={form.purpose}
                                onChange={handleChange}
                                style={inputStyle('purpose')}
                            />
                        </label>
                        {errors.purpose && <small style={{ color: 'red' }}>{errors.purpose}</small>}
                    </div>
                    <button type="submit"
                    className= "btn btn-add"
                    style={{ padding: '0.5rem 1rem', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
                        Add Item 
                    </button>
                </form>
            </>
        );
    }
export default ItemForm;
