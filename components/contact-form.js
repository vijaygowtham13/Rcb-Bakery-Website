export function renderContactForm() {
  document.getElementById("contact").innerHTML = `
    <section class="contact-container">
      <h2>Contact Us</h2>
      <div class="contact-wrapper">
        <!-- Contact Form -->
        <form class="contact-form">
          <label for="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" required />

          <label for="phone">Contact Number</label>
          <input type="tel" id="phone" placeholder="Enter your contact number" required />

          <label for="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email address" required />

          <label for="city">City</label>
          <input type="text" id="city" placeholder="Enter your city" required />

          <label for="subject">Subject</label>
          <input type="text" id="subject" placeholder="Subject of your message" required />

          <label for="message">Message</label>
          <textarea id="message" rows="5" placeholder="Write your message here..." required></textarea>

          <button type="submit">Send Message</button>
        </form>

        <!-- Contact Info -->
        <div class="contact-info">
          <h3>Visit Our Store</h3>
          <p><strong>Bakery Bliss HQ</strong></p>
          <p>123 Cupcake Avenue, Sweet Town</p>
          <p>Bakerville, BL 45678</p>

          <h3>Call or Email</h3>
          <p>📞 +1 (555) 123-4567</p>
          <p>✉️ vijay@bakerybliss.com</p>

          <h3>Working Hours</h3>
          <p>Mon–Sat: 8:00 AM – 8:00 PM</p>
          <p>Sun: 9:00 AM – 5:00 PM</p>
        </div>
      </div>
    </section>
  `;
}
