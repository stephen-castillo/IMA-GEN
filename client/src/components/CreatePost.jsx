import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { getRandomPrompt } from '../util';
import { FormField, Loader } from '../components'

const CreatePost = () => {
    // navigate back to homepage once post is created
    const navigate = useNavigate();
    // useState field
    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: '',
    });
    
    // contact API while waiting for image
    const [generatingImg, setGeneratingImg] = useState(false);
    // Loading
    const [loading, setLoading] = useState(false);

    return (
        <div>CreatePost</div>
    )
}

export default CreatePost;