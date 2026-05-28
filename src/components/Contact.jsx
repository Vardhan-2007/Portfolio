import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
  FiMapPin,
} from 'react-icons/fi'

import { social, info } from '../data/index'

const socialLinks = [
  {
    icon: <FiGithub size={20} />,
    label: 'GitHub',
    href: social?.github || '#',
    color: '#06b6d4',
  },
  {
    icon: <FiLinkedin size={20} />,
    label: 'LinkedIn',
    href: social?.linkedin || '#',
    color: '#7c3aed',
  },
  {
    icon: <FiMail size={20} />,
    label: social?.email || 'Email',
    href: `mailto:${social?.email || ''}`,
    color: '#f59e0b',
  },
]

const inputStyle = {
  width: '100%',
  padding: '0.9rem 1.1rem',
  borderRadius: '10px',
  backgroundColor: 'var(--bg-card)',
  border: '1px solid rgba(255,255,255,0.08)',
  color: 'var(--text-primary)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.2s ease',
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setStatus('sending')

    try {
      const response = await fetch(
        'https://formspree.io/f/xykvlvgg',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )

      if (response.ok) {
        setStatus('success')

        setFormData({
          name: '',
          email: '',
          message: '',
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <>
      <section
        id="contact"
        style={{
          padding: '6rem 2rem',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            style={{
              fontSize: '0.8rem',
              fontWeight: '600',
              letterSpacing: '0.2em',
              color: 'var(--accent-pink)',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            Get in touch
          </p>

          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
            }}
          >
            Contact Me
          </h2>

          <p
            style={{
              color: 'var(--text-muted)',
              maxWidth: '500px',
              lineHeight: '1.7',
              marginBottom: '4rem',
            }}
          >
            Have a project in mind, want to collaborate,
            or just want to say hi?
          </p>
        </motion.div>

        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
          }}
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3
              style={{
                fontSize: '1.4rem',
                marginBottom: '1rem',
              }}
            >
              Let's build something together
            </h3>

            <p
              style={{
                color: 'var(--text-muted)',
                lineHeight: '1.8',
                marginBottom: '2rem',
              }}
            >
              I'm open to internships, freelance work,
              and collaborations.
            </p>

            {/* Location */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem',
              }}
            >
              <FiMapPin color="#06b6d4" />

              <span>
                Visakhapatnam, India
              </span>
            </div>

            {/* Social Links */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {socialLinks.map(
                ({ icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      backgroundColor: 'var(--bg-card)',
                      border:
                        '1px solid rgba(255,255,255,0.06)',
                      color: 'var(--text-primary)',
                      transition: '0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        'translateX(5px)'
                      e.currentTarget.style.borderColor =
                        color
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        'translateX(0)'
                      e.currentTarget.style.borderColor =
                        'rgba(255,255,255,0.06)'
                    }}
                  >
                    <span style={{ color }}>
                      {icon}
                    </span>

                    <span>{label}</span>
                  </a>
                )
              )}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                required
              />

              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                }}
                required
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                style={{
                  padding: '1rem',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  color: '#fff',
                  fontWeight: '600',
                  background:
                    'linear-gradient(135deg,var(--accent-violet),var(--accent-cyan))',
                }}
              >
                <FiSend
                  size={16}
                  style={{
                    display: 'inline',
                    marginRight: '8px',
                  }}
                />

                {status === 'sending'
                  ? 'Sending...'
                  : 'Send Message'}
              </button>

              {status === 'success' && (
                <p style={{ color: '#4ade80' }}>
                  Message sent successfully!
                </p>
              )}

              {status === 'error' && (
                <p style={{ color: '#f87171' }}>
                  Something went wrong.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop:
            '1px solid rgba(255,255,255,0.06)',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            color: 'var(--text-muted)',
          }}
        >
          Built with React + Vite + Framer Motion by{' '}
          <span
            style={{
              fontWeight: '600',
              color: 'var(--accent-cyan)',
            }}
          >
            {info?.fullName || 'Govardhan'}
          </span>
        </p>
      </footer>
    </>
  )
}

export default Contact