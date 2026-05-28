import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/index'

// Reusable section heading style
const sectionLabel = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.8rem',
  fontWeight: '600',
  letterSpacing: '0.2em',
  color: 'var(--accent-cyan)',
  textTransform: 'uppercase',
  marginBottom: '0.75rem',
}

const sectionTitle = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  fontWeight: '800',
  color: 'var(--text-primary)',
  marginBottom: '1rem',
}

const sectionSubtitle = {
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  color: 'var(--text-muted)',
  maxWidth: '500px',
  lineHeight: '1.7',
  marginBottom: '4rem',
}

const colorMap = {
  '--accent-cyan': '#06b6d4',
  '--accent-violet': '#7c3aed',
  '--accent-amber': '#f59e0b',
  '--accent-pink': '#ec4899',
}

function ProjectCard({ project, index }) {
  const accentColor = colorMap[project.color] || '#7c3aed'

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: '16px',
        padding: '2rem',
        border: '1px solid rgba(255,255,255,0.06)',
        borderTop: `3px solid ${accentColor}`,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 20px 60px ${accentColor}25`
        e.currentTarget.style.borderColor = `${accentColor}40`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor =
          'rgba(255,255,255,0.06)'
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start'
        }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.3rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
          }}
        >
          {project.title}
        </h3>

        <div
          style={{
            display: 'flex',
            gap: '0.75rem'
          }}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              style={{
                color: 'var(--text-muted)',
                transition: 'color .2s ease'
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = accentColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  'var(--text-muted)')
              }
            >
              <FiGithub size={18} />
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label="Live Demo"
              style={{
                color: 'var(--text-muted)',
                transition: 'color .2s ease'
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = accentColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  'var(--text-muted)')
              }
            >
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9rem',
          color: 'var(--text-muted)',
          lineHeight: '1.7',
          flexGrow: 1
        }}
      >
        {project.description}
      </p>

      {/* Tags */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '.5rem'
        }}
      >
        {project.tags?.map((tag) => (
          <span
            key={tag}
            style={{
              padding: '0.3rem 0.75rem',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontWeight: '600',
              backgroundColor: `${accentColor}18`,
              color: accentColor,
              border: `1px solid ${accentColor}30`
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: '6rem 2rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p style={sectionLabel}>What I've built</p>

        <h2 style={sectionTitle}>
          Projects
        </h2>

        <p style={sectionSubtitle}>
          A selection of things I've built —
          from AI-powered productivity tools
          to educational simulators and
          data analysis systems.
        </p>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit,minmax(300px,1fr))',
          gap: '1.5rem'
        }}
      >
        {projects?.map((project, index) => (
          <ProjectCard
            key={project.id || index}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects