import { LinkButton } from './components/features/LinkButton'
import { Profile } from './components/features/Profile'
import { SocialLinks } from './components/features/SocialLinks'
import { ThemeToggle } from './components/ui/ThemeToggle'
import { links, profile, socialLinks } from './data'
import { useTheme } from './hooks/useTheme'
import './App.css'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <main className="page" data-theme={theme}>
      <div className="container">
      <Profile {...profile} theme={theme} />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      {links.length > 0 && (
        <nav className="main-links" aria-label="Links">
          <ul>
            {links.map((link) => (
              <li key={link.title}>
                <LinkButton {...link} />
              </li>
            ))}
          </ul>
        </nav>
      )}
      <SocialLinks links={socialLinks} />
      <footer>Feito com ♥ por Arthur Dias</footer>
      </div>
    </main>
  )
}

export default App
