import type { ProfileData } from '../../data'
import type { Theme } from '../../hooks/useTheme'

export function Profile({ username, avatar, avatarLight, avatarAlt, theme }: ProfileData & { theme: Theme }) {
  return (
    <header className="profile">
      <img src={theme === 'light' ? avatarLight : avatar} alt={avatarAlt} />
      <p>{username}</p>
    </header>
  )
}
