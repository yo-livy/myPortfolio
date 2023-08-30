import { useForm, ValidationError } from '@formspree/react';
const ContactForm = () => {
  const [state, handleSubmit] = useForm("mgejaqlb");

  
  if (state.succeeded) {
      return <p className='msg'>Thanks for messaging!</p>;
  }
  return (
    <section id='contact'>
      <h2 className="title">Contact Me</h2>
      <form onSubmit={handleSubmit} className='contact' >
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Your email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='Your message'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='btn' type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
  </section>
  );
}

export default ContactForm;

// const Contact = () => {
//     return (
//       <section id="contact" className="contact">
//         <h2 className="title">Contact Me</h2>
//         <div className="envelope">
//           <input id="email" type="email" placeholder="Your Email" />
//           <textarea id="letter" placeholder="Your Message"></textarea>
//           <button className="btn">Send</button>
//         </div>
//       </section>
//     );
//   }

//   export default Contact;
  