import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { info, social } from '../data/index'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 2rem',
        position: 'relative',
        overflow: 'clip',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{ maxWidth: '800px', width: '100%', zIndex: 1 }}
      >
        <motion.p
          variants={itemVariants}
          style={{
            color: 'var(--accent-cyan)',
            fontFamily: 'var(--font-body)',
            fontSize: '1.1rem',
            fontWeight: '500',
            marginBottom: '0.75rem',
            letterSpacing: '0.05em',
          }}
        >
          Hi there, I'm 👋
        </motion.p>

        <motion.h1
          variants={itemVariants}
          style={{
            paddingBottom: '0.1em',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
            fontWeight: '800',
            lineHeight: '1.05',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #f1f5f9 0%, var(--accent-violet) 50%, var(--accent-cyan) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {info.name}.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            color: 'var(--text-muted)',
            maxWidth: '560px',
            marginBottom: '2.5rem',
            lineHeight: '1.7',
          }}
        >
          {info.tagline} — building intelligent tools and
          polished interfaces that actually work.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              padding: '0.85rem 2rem',
              background: 'linear-gradient(135deg, var(--accent-violet), var(--accent-cyan))',
              color: '#fff',
              borderRadius: '8px',
              fontFamily: 'var(--font-body)',
              fontWeight: '600',
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'opacity 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={e => { e.target.style.opacity = '0.85'; e.target.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)' }}
          >
            View Projects →
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '0.85rem 2rem',
              background: 'transparent',
              color: 'var(--text-primary)',
              borderRadius: '8px',
              fontFamily: 'var(--font-body)',
              fontWeight: '600',
              fontSize: '0.95rem',
              textDecoration: 'none',
              border: '1px solid rgba(124,58,237,0.5)',
              transition: 'border-color 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--accent-violet)'; e.target.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(124,58,237,0.5)'; e.target.style.transform = 'translateY(0)' }}
          >
            Download Resume ↗
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}
        >
          {[
            { icon: <FiGithub size={20} />,   href: social.github,   label: 'GitHub'   },
            { icon: <FiLinkedin size={20} />, href: social.linkedin, label: 'LinkedIn' },
            { icon: <FiMail size={20} />,     href: `mailto:${social.email}`, label: 'Email' },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              style={{
                color: 'var(--text-muted)',
                transition: 'color 0.2s ease, transform 0.2s ease',
                display: 'flex',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-cyan)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {icon}
            </a>
          ))}

          <span style={{ color: 'rgba(148,163,184,0.3)', fontSize: '1.2rem' }}>|</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            CGPA {info.cgpa} / 10.0
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--text-muted)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
        }}
      >
        <span>SCROLL</span>
        <FiArrowDown size={16} />
      </motion.div>
    </section>
  )
}

export default Hero