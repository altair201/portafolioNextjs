import emailjs from "@emailjs/browser";

type FormData = {
  email: string;
  textarea: string;
  error: boolean;
};

export const EmailSend = ({ form }: { form: FormData }) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
  const apiKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;
  
  const formElement = document.createElement("form");
  formElement.innerHTML = `
    <input type="email" name="email" value="${form.email}">
    <textarea name="message">${form.textarea}</textarea>
  `;
  
  return new Promise((resolve, reject) => {
    emailjs.sendForm(serviceId, templateId, formElement, apiKey)
      .then((result) => {
        resolve('OK');
      })
      .catch((error) => {
        console.error(error);
        reject('Error al enviar el correo electrónico');
    });
  });
};


