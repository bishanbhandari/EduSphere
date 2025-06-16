import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import White_arrow from '../../assets/white-arrow.png';

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "333f9bbf-e6b6-4987-a1c1-cdb3b48dfb7c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Feel free to reach out to EduSphere for any questions or support —
          we’re here to help you succeed!
        </p>

            <ul>
                <li> <img src={mail_icon} alt="" />Contact@EduSphere.org</li>
                <li> <img src={phone_icon} alt="" />9876541235</li>
                <li> <img src={location_icon} alt="" />77 Silverwood Cove</li>
            </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter your name" required />
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your number" required/>
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
            <button type="submit" className="btn dark-btn">submit <img src={White_arrow} alt="" /> </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
