import type { LinkData } from '../../data'

export function LinkButton({ title, url }: LinkData) {
  if (!url) return <span className="link-button" aria-disabled="true">{title}</span>

  return (
    <a className="link-button" href={url} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  )
}
