import React, {useState} from "react";
import emailjs, {EmailJSResponseStatus} from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      reply_to: email,
      subject: subject,
      message: message,
    };

    emailjs.send('service_0ww29fa', 'template_9ss1unq', templateParams, 'RhI3ck56jC8RzM8ma')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        // Clear form fields
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      }, (error) => {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <>
      <section id="contact" class="contact">
        <div class="container">
          <div class="section-title">
            <h2>Contact</h2>
            <p>
              Feel free to contact me at below details for further discussion
            </p>
          </div>

          <div class="row" data-aos="fade-in">
            <div class="col-lg-5 d-flex align-items-stretch">
              <div class="info">
                <div class="address">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Scheme No. 78, Vijaynagar, Indore, MP</p>
                </div>

                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>7869028815yadav@gmail.com</p>
                </div>

                <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 7987603237</p>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.003979781717!2d75.88273612616979!3d22.76523357935502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302ba6fdf13c7%3A0x74463ccfeaeec4c!2sScheme%20Number%2078%2C%20Part%20II%2C%20Scheme%2078%2C%20Vijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1717415771918!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{border: 0, width: "100%"}}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>

            <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form role="form" class="php-email-form">
                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="name">Your Name</label>
                    <input
                      onChange={e => setName(e.target.value)}
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="name">Your Email</label>
                    <input
                      onChange={e => setEmail(e.target.value)}
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="name">Subject</label>
                  <input
                    onChange={e => setSubject(e.target.value)}
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="name">Message</label>
                  <textarea
                    onChange={e => setMessage(e.target.value)}
                    class="form-control"
                    name="message"
                    rows="10"
                    required></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  <button onClick={handleSubmit}>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
