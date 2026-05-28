import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiAward, FiCode, FiZap, FiStar, FiCheckCircle, FiX, FiEye } from 'react-icons/fi'
import { achievements, certifications } from '../data/index'

const iconMap = {
  FiAward: <FiAward size={24} />,
  FiCode:  <FiCode size={24} />,
  FiZap:   <FiZap size={24} />,
  FiStar:  <FiStar size={24} />,
}

// Certificate lightbox modal
function CertModal({ image, title, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.85)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          backdropFilter: 'blur(8px)',
        }}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={e => e.stopPropagation()}
          style={{
            position: 'relative',
            maxWidth: '900px',
            width: '100%',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              zIndex: 10,
              background: 'rgba(0,0,0,0.6)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              cursor: 'pointer',
              backdropFilter: 'blur(4px)',
            }}
          >
            <FiX size={18} />
          </button>

          {/* Certificate image */}
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function HighlightCard({ item, index, onView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${item.color}40`
        e.currentTarget.style.boxShadow = `0 20px 60px ${item.color}20`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
        e.currentTarget.style.boxShadow = 'none'
      }}
      onClick={() => onView(item.image, item.title)}
    >
      {/* Certificate preview image */}
      <div style={{
        width: '100%',
        height: '160px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            filter: 'brightness(0.85)',
            transition: 'transform 0.3s ease',
          }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />

        {/* View overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0)',
          transition: 'background 0.2s ease',
          color: 'transparent',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(0,0,0,0.4)'
            e.currentTarget.style.color = '#fff'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(0,0,0,0)'
            e.currentTarget.style.color = 'transparent'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontFamily: 'var(--font-body)', fontWeight: '600' }}>
            <FiEye size={18} /> View Certificate
          </div>
        </div>
      </div>

      {/* Card content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${item.color}20 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />

        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '12px',
          backgroundColor: `${item.color}18`,
          border: `1px solid ${item.color}35`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: item.color,
        }}>
          {iconMap[item.icon]}
        </div>

        <div>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: '600',
            letterSpacing: '0.1em',
            color: item.color,
            textTransform: 'uppercase',
            marginBottom: '0.3rem',
          }}>
            {item.subtitle}
          </p>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.1rem',
            fontWeight: '800',
            color: 'var(--text-primary)',
            marginBottom: '0.5rem',
          }}>
            {item.title}
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            lineHeight: '1.7',
          }}>
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function CertCard({ cert, index, onView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onView(cert.image, cert.title)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem 1.25rem',
        borderRadius: '12px',
        backgroundColor: 'var(--bg-card)',
        border: '1px solid rgba(255,255,255,0.06)',
        cursor: 'pointer',
        transition: 'border-color 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${cert.color}40`
        e.currentTarget.style.boxShadow = `0 8px 30px ${cert.color}15`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Cert thumbnail */}
      <div style={{
        width: '64px',
        height: '44px',
        borderRadius: '8px',
        overflow: 'hidden',
        flexShrink: 0,
        border: `1px solid ${cert.color}30`,
      }}>
        <img
          src={cert.image}
          alt={cert.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>

      <FiCheckCircle size={18} style={{ color: cert.color, flexShrink: 0 }} />

      <div style={{ flex: 1 }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.95rem',
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginBottom: '0.2rem',
        }}>
          {cert.title}
        </p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
        }}>
          {cert.issuer}
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.75rem',
          fontWeight: '600',
          color: cert.color,
          backgroundColor: `${cert.color}15`,
          padding: '0.3rem 0.75rem',
          borderRadius: '999px',
          whiteSpace: 'nowrap',
        }}>
          {cert.date}
        </span>
        <FiEye size={16} style={{ color: 'var(--text-muted)' }} />
      </div>
    </motion.div>
  )
}

function Achievements() {
  const [modal, setModal] = useState(null)
  // modal = { image, title } or null

  return (
    <section
      id="achievements"
      style={{
        padding: '6rem 2rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      {/* Lightbox modal */}
      {modal && (
        <CertModal
          image={modal.image}
          title={modal.title}
          onClose={() => setModal(null)}
        />
      )}

      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          fontWeight: '600',
          letterSpacing: '0.2em',
          color: '#f59e0b',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}>
          What I've earned
        </p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '800',
          color: 'var(--text-primary)',
          marginBottom: '1rem',
        }}>
          Achievements
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          color: 'var(--text-muted)',
          maxWidth: '500px',
          lineHeight: '1.7',
          marginBottom: '4rem',
        }}>
          Awards, hackathons, workshops, and certifications.
          Click any card to view the certificate.
        </p>
      </motion.div>

      {/* Highlights grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        marginBottom: '4rem',
      }}>
        {achievements.map((item, index) => (
          <HighlightCard
            key={item.title}
            item={item}
            index={index}
            onView={(image, title) => setModal({ image, title })}
          />
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.3rem',
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <span style={{
            width: '4px',
            height: '20px',
            borderRadius: '2px',
            backgroundColor: 'var(--accent-cyan)',
            display: 'inline-block',
          }} />
          Certifications
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {certifications.map((cert, index) => (
            <CertCard
              key={cert.title}
              cert={cert}
              index={index}
              onView={(image, title) => setModal({ image, title })}
            />
          ))}
        </div>
      </motion.div>

    </section>
  )
}

export default Achievements