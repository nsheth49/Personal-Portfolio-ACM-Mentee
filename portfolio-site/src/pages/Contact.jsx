import "./Contact.css"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted (I will get back to you ASAP)!");
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };


    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p className="subtitle">Let's connect or work together! 🚀</p>

            <div className="contact-icons">
                <a href="mailto:niketsheth31@gmail.com?subject=Hello%20Niket" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                </a>
                <a href="https://github.com/nsheth49" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/niket-sheth-cs/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>

                <input type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                <input type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} required />
                <textarea placeholder="Your Message" name="message" value={formData.message} onChange={handleChange} required></textarea>

                <button type="submit">Send Message</button>

            </form>
        </div>
    );
}

export default Contact;



//   return (
//     <div>
//       <h1>Contact</h1>

//       <p>Email: your@email.com</p>
//       <p>LinkedIn: add later</p>

//       <form style={{ marginTop: "20px" }}>
//         <input type="text" placeholder="Your Name" /><br /><br />
//         <input type="email" placeholder="Your Email" /><br /><br />
//         <textarea placeholder="Your Message"></textarea><br /><br />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
//}

//export default Contact;