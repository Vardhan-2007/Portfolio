import { motion } from 'framer-motion'
import { FiMapPin, FiBook, FiAward, FiCalendar } from 'react-icons/fi'
import { info } from '../data/index'
import profilePic from '../assets/profile.jpg'

const stats = [
  { icon: <FiAward size={18} />,    label: 'CGPA',     value: `${info.cgpa} / 10.0`  },
  { icon: <FiBook size={18} />,     label: 'Degree',   value: 'B.Tech CSE ( AI & ML )'            },
  { icon: <FiCalendar size={18} />, label: 'Year',     value: '3rd Year (2024–2028)'  },
  { icon: <FiMapPin size={18} />,   label: 'Location', value: 'Visakhapatnam, India'  },
]

function About() {
  return (
    <section
      id="about"
      style={{
        padding: '6rem 2rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
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
          color: 'var(--accent-amber)',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}>
          Who I am
        </p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '800',
          color: 'var(--text-primary)',
          marginBottom: '4rem',
        }}>
          About Me
        </h2>
      </motion.div>

      {/* Two column layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
      }}>

        {/* Left — Photo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ position: 'relative' }}>

            {/* Gradient border behind photo */}
            <div style={{
              position: 'absolute',
              inset: '-3px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, var(--accent-violet), var(--accent-cyan))',
              zIndex: 0,
            }} />

            {/* Photo */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              width: '280px',
              height: '320px',
              borderRadius: '18px',
              overflow: 'hidden',
            }}>
              <img
                src={profilePic}
                alt={info.fullName}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '50% 70%',
                  display: 'block',
                }}
              />
            </div>

          </div>
        </motion.div>

        {/* Right — Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >

          {/* Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: 'var(--text-primary)',
              lineHeight: '1.8',
            }}>
              I'm a <span style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>
              Computer Science Student</span> at {info.college},
              specializing in AI/ML and apart from that I'm also a Full-Stack Developer.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--text-muted)',
              lineHeight: '1.8',
            }}>
              I love building things that sit at the intersection of intelligent
              systems and great user experience — from AI-powered productivity tools
              to educational simulators. I'm driven by the idea that good software
              should be both smart and beautiful.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--text-muted)',
              lineHeight: '1.8',
            }}>
              When I'm not coding, I'm grinding LeetCode, exploring new AI models,
              or obsessing over UI details that most people won't notice but everyone
              will feel.
            </p>
          </div>

          {/* Stats grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0.75rem',
            marginTop: '0.5rem',
          }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '1rem',
                  borderRadius: '12px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <span style={{ color: 'var(--accent-cyan)', marginTop: '2px' }}>
                  {stat.icon}
                </span>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginBottom: '0.2rem',
                  }}>
                    {stat.label}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                  }}>
                    {stat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default About