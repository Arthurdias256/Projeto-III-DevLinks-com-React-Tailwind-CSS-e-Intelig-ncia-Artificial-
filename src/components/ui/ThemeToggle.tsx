import type { Theme } from '../../hooks/useTheme'
import moon from '../../assets/moon-stars.svg'
import sun from '../../assets/sun.svg'

type ThemeToggleProps = {
  theme: Theme
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button className="theme-toggle" type="button" onClick={onToggle} aria-label="Tema claro" aria-pressed={theme === 'light'}>
      <span className="theme-toggle__thumb"><img src={theme === 'light' ? sun : moon} alt="" /></span>
    </button>
  )
}
