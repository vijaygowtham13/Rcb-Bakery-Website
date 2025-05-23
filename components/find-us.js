export function renderFindUs() {
  document.getElementById('find-us-section').innerHTML = `
    <section class="find-us-container">
      <h1>Visit Our Bakery</h1>
      <div class="find-us-content">
        <div class="store-details">
          <h2>Rcb Bakery</h2>
          <p>📍 123 Sweet Street, Dessert City, CA 90001</p>
          <p>📞 +1 (123) 456-7890</p>
          <p>🕒 Open: Mon – Sun | 8:00 AM – 8:00 PM</p>
        </div>
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.016391053086!2d-122.4194154846816!3d37.77492927975973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b2c4aafe3%3A0x89d86efc10c5afdd!2sBakery!5e0!3m2!1sen!2sus!4v1588964562139!5m2!1sen!2sus"
            width="100%"
            height="300"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
    
  `;
}


