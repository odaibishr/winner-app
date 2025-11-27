import emailjs from '@emailjs/browser';


export const sendEmail = async ({ name, email, message }) => {
    try {
        await emailjs.send(import.meta.env.NEXT_PUBLIC_EMAIL_SERVICE_ID , import.meta.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID , {
            name,
            email,
            message,
        },
            {
                publicKey: import.meta.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
            }
    )
    .then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
                console.log('FAILED...', error);
            },
        );
    } catch (error) {
        console.log("Email sent failed", error);
    }
}