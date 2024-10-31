import React, { useState } from 'react';

const CreateParty: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        tags: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // set random code
        setFormData({
            ...formData,
            code: Math.random().toString(36).substring(7),
        });

        // Handle form submission logic here
        

        console.log(formData);
    };

    return (
        <div>
            <h1>Create New Party</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="party name">Party Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="tags">Tags:</label>
                    <input
                        type="text"
                        id="tags"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Create Party</button>
            </form>
        </div>
    );
};

export default CreateParty;