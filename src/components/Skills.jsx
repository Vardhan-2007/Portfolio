import { motion } from 'framer-motion'
import {
  SiPython, SiJavascript, SiCplusplus, SiMysql,
  SiReact, SiVite, SiTailwindcss, SiNodedotjs,
  SiNumpy, SiPandas,
  SiGit, SiGithub,
} from 'react-icons/si'

import { FiZap ,FiCode, FiMonitor} from 'react-icons/fi'
import { skills } from '../data/index'

const iconMap = {
  SiPython:           <SiPython />,
  SiJavascript:       <SiJavascript />,
  SiCplusplus:        <SiCplusplus />,
  SiJava:             <FiCode />,
  SiMysql:            <SiMysql />,
  SiReact:            <SiReact />,
  SiVite:             <SiVite />,
  SiTailwindcss:      <SiTailwindcss />,
  SiNodedotjs:        <SiNodedotjs />,
  SiNumpy:            <SiNumpy />,
  SiPandas:           <SiPandas />,
  SiGit:              <SiGit />,
  SiGithub:           <SiGithub />,
  SiVisualstudiocode: <FiMonitor />,
  FiZap:              <FiZap />,
}

const categoryColors = {
  'Languages':  '#f59e0b',
  'Frameworks': '#06b6d4',
  'AI / ML':    '#7c3aed',
  'Tools':      '#ec4899',
}

function SkillPill({ skill, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.05, transition: { duration: 0.2 } }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        padding: '0.65rem 1.1rem',
        borderRadius: '10px',
        backgroundColor: `${color}12`,
        border: `1px solid ${color}30`,
        cursor: 'default',
        transition: 'background-color 0.2s ease, border-color 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = `${color}22`
        e.currentTarget.style.borderColor = `${color}60`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = `${color}12`
        e.currentTarget.style.borderColor = `${color}30`
      }}
    >
      <span style={{ color: color, fontSize: '1.1rem', display: 'flex' }}>
        {iconMap[skill.icon]}
      </span>
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.875rem',
        fontWeight: '500',
        color: 'var(--text-primary)',
      }}>
        {skill.name}
      </span>
    </motion.div>
  )
}

function CategoryBlock({ category, skillList, index }) {
  const color = categoryColors[category] || '#7c3aed'

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        backgroundColor: 'var(--bg-card)',
        borderRadius: '16px',
        padding: '1.75rem',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: color,
          boxShadow: `0 0 8px ${color}`,
        }} />
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1rem',
          fontWeight: '700',
          color: color,
          letterSpacing: '0.05em',
        }}>
          {category}
        </h3>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
        {skillList.map((skill, i) => (
          <SkillPill key={skill.name} skill={skill} color={color} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

function Skills() {
  return (
    <section
      id="skills"
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
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          fontWeight: '600',
          letterSpacing: '0.2em',
          color: 'var(--accent-violet)',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}>
          What I work with
        </p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '800',
          color: 'var(--text-primary)',
          marginBottom: '1rem',
        }}>
          Skills
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          color: 'var(--text-muted)',
          maxWidth: '500px',
          lineHeight: '1.7',
          marginBottom: '4rem',
        }}>
          Languages, frameworks, and tools I use to build
          full-stack applications and AI-powered systems.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
      }}>
        {Object.entries(skills).map(([category, skillList], index) => (
          <CategoryBlock
            key={category}
            category={category}
            skillList={skillList}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills