import React, {useState} from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const [nameError, setNameError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<boolean>(false);

    // Initialize your Public Key globally (Optional but recommended)
    // emailjs.init({ publicKey: 'vd0bjMEcW4BtkJDoa' });

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        // Reset and validate
        const isNameEmpty = name.trim() === '';
        const isEmailEmpty = email.trim() === '';
        const isMsgEmpty = message.trim() === '';

        setNameError(isNameEmpty);
        setEmailError(isEmailEmpty);
        setMessageError(isMsgEmpty);

        if (!isNameEmpty && !isEmailEmpty && !isMsgEmpty) {
            // Ensure these keys match your EmailJS Template placeholders!
            const templateParams = {
                name: name,
                email: email,
                message: message
            };

            emailjs.send(
                'service_2ivbcxa',
                'template_3l3k975',
                templateParams,
                { publicKey: 'vd0bjMEcW4BtkJDoa' }
            ).then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert("Message sent successfully!");
                    // Clear form
                    setName('');
                    setEmail('');
                    setMessage('');
                },
                (error) => {
                    console.log('FAILED...', error);
                    alert("Failed to send message. Please check the console for details.");
                },
            );
        }
    };

    return (
        <div id="contact">
            <div className="items-container">
                <div className="contact_wrapper">
                    <h1>Contact Me</h1>
                    <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        className='contact-form'
                        onSubmit={sendEmail} // Use onSubmit here
                    >
                        <div className='form-flex'>
                            <TextField
                                required
                                label="Your Name"
                                placeholder="What's your name?"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                error={nameError}
                                helperText={nameError ? "Please enter your name" : ""}
                            />
                            <TextField
                                required
                                label="Email / Phone"
                                placeholder="How can I reach you?"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={emailError}
                                helperText={emailError ? "Please enter your email or phone number" : ""}
                            />
                        </div>
                        <TextField
                            required
                            label="Message"
                            placeholder="Send me any inquiries or questions"
                            multiline
                            rows={10}
                            className="body-form"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            error={messageError}
                            helperText={messageError ? "Please enter the message" : ""}
                        />
                        <Button
                            type="submit" // Ensure type is submit
                            variant="contained"
                            endIcon={<SendIcon />}
                        >
                            Send
                        </Button>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default Contact;
