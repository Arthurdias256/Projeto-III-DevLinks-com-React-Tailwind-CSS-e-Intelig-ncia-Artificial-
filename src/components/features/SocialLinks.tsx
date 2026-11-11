import type { CSSProperties } from 'react'
import type { SocialLinkData } from '../../data'

type SocialLinksProps = { links: SocialLinkData[] }

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <nav className="social-links" aria-label="Redes sociais">
      <ul>
        {links.map(({ title, url, icon }) => {
          const image = <span className="social-icon" aria-hidden="true" style={{ maskImage: `url("${icon}")` } as CSSProperties} />
          return (
            <li key={title}>
              {url ? (
                <a href={url} aria-label={title} target="_blank" rel="noopener noreferrer">{image}</a>
              ) : (
                <span className="social-pending" role="img" aria-label={`${title} — link ainda não informado`}>{image}</span>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
