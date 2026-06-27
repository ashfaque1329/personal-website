<template>
  <section>
    <h2 class="section-title" style="font-size: 1.6rem;">
      <i class="fas fa-envelope"></i> Get in Touch
    </h2>
    <div class="glass contact-container">
      <div class="contact-grid">
        <div class="contact-info">
          <h3>Let's Connect</h3>
          <p>Have a project in mind or need consultation in AI/ML, Quantum Machine Learning, or Tech Architecture? I'm here to help.</p>
          <div class="contact-details">
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <strong>Location</strong>
                <span>Bengaluru, India</span>
              </div>
            </div>
          </div>
          <div class="social-links">
            <a href="https://linkedin.com/in/ashfaque1329" target="_blank" class="social-link">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/ashfaque1329" target="_blank" class="social-link">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" v-model="form.name" required placeholder="Your full name" />
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" v-model="form.email" required placeholder="you@example.com" />
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <select id="subject" v-model="form.subject">
              <option value="">Select a topic...</option>
              <option value="AI Consultation">AI/ML Consultation</option>
              <option value="Quantum Machine Learning">Quantum Machine Learning</option>
              <option value="Tech Architecture">Tech Architecture</option>
              <option value="Project Collaboration">Project Collaboration</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" required placeholder="Tell me about your project or consultation needs..." rows="4"></textarea>
          </div>
          <button type="submit" class="submit-btn" :disabled="submitting">
            <i class="fas fa-paper-plane"></i>
            {{ submitting ? 'Sending...' : 'Send Message' }}
          </button>
          <div v-if="formSuccess" class="success-message">
            <i class="fas fa-check-circle"></i> Message sent successfully! I'll get back to you soon.
          </div>
          <div v-if="formError" class="error-message">
            <i class="fas fa-exclamation-circle"></i> {{ formError }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitting = ref(false)
const formSuccess = ref(false)
const formError = ref('')

const submitForm = async () => {
  submitting.value = true
  formSuccess.value = false
  formError.value = ''

  try {
    // Create a proper Formspree endpoint:
    // 1. Go to https://formspree.io/
    // 2. Create a free account
    // 3. Create a new form with your email (ashfaque1329@gmail.com)
    // 4. Replace the URL below with your form endpoint
    const response = await fetch('https://formspree.io/f/xjgqwjba', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject || 'Consultation Request',
        message: form.value.message,
        _replyto: form.value.email
      })
    })

    if (!response.ok) {
      throw new Error('Failed to send message')
    }

    const data = await response.json()
    console.log('Form submitted successfully:', data)

    formSuccess.value = true

    // Reset form after success
    setTimeout(() => {
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
      formSuccess.value = false
    }, 5000)

  } catch (error) {
    console.error('Form error:', error)
    formError.value = 'Failed to send message. Please try again or connect via LinkedIn.'
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.contact-container {
  padding: 1.8rem 2.2rem;
  margin-bottom: 2.5rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
}

.contact-info h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0d2b3e;
  margin-bottom: 0.5rem;
}

.contact-info p {
  color: #1a3a4a;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact-item i {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(32, 178, 170, 0.1);
  border-radius: 50%;
  color: #20b2aa;
  font-size: 1rem;
  flex-shrink: 0;
}

.contact-item div {
  display: flex;
  flex-direction: column;
}

.contact-item strong {
  color: #0d2b3e;
  font-weight: 600;
  font-size: 0.85rem;
}

.contact-item span {
  color: #1a3a4a;
  font-size: 0.95rem;
}

.social-links {
  display: flex;
  gap: 0.8rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  background: rgba(32, 178, 170, 0.08);
  border-radius: 50%;
  color: #20b2aa;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: rgba(32, 178, 170, 0.15);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(32, 178, 170, 0.2);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.form-group label {
  font-weight: 600;
  color: #0d2b3e;
  font-size: 0.9rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.7rem 1rem;
  border: 2px solid rgba(32, 178, 170, 0.15);
  border-radius: 0.8rem;
  font-size: 0.95rem;
  font-family: inherit;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.5);
  color: #1a3a4a;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #20b2aa;
  box-shadow: 0 0 0 3px rgba(32, 178, 170, 0.1);
  background: white;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-btn {
  padding: 0.8rem 1.5rem;
  background: linear-gradient(135deg, #20b2aa, #1a9e97);
  color: white;
  border: none;
  border-radius: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(32, 178, 170, 0.3);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success-message {
  padding: 0.8rem 1rem;
  background: rgba(32, 178, 170, 0.1);
  border: 1px solid #20b2aa;
  border-radius: 0.8rem;
  color: #0d5c5a;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.success-message i {
  color: #20b2aa;
  font-size: 1.2rem;
}

.error-message {
  padding: 0.8rem 1rem;
  background: rgba(231, 76, 60, 0.1);
  border: 1px solid #e74c3c;
  border-radius: 0.8rem;
  color: #c0392b;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.error-message i {
  color: #e74c3c;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>