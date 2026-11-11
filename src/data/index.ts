export type ProfileData = {
  username: string
  avatar: string
  avatarLight: string
  avatarAlt: string
}

export type LinkData = {
  title: string
  url: string | null
}

export type SocialLinkData = LinkData & { icon: string }

// URLs não constam nos SVGs; preencha os destinos reais quando disponíveis.
export const profile: ProfileData = {
  username: '@seu.perfil',
  avatar,
  avatarLight,
  avatarAlt: 'Foto de perfil',
}
export const links: LinkData[] = [
  { title: 'Inscreva-se no Curso', url: null },
  { title: 'Baixe meu e-book', url: null },
  { title: 'Veja meu portfólio', url: null },
  { title: 'Conheça meu curso', url: null },
]
export const socialLinks: SocialLinkData[] = [
  { title: 'GitHub', icon: github, url: 'https://github.com/Arthurdias256' },
  { title: 'Instagram', icon: instagram, url: 'https://www.instagram.com/arthurd_009/' },
  { title: 'YouTube', icon: youtube, url: null },
  { title: 'LinkedIn', icon: linkedin, url: 'https://www.linkedin.com/in/francisco-arthur-dias-da-silva-ba68a41a2/' },
]
import avatar from '../assets/avatar.png'
import avatarLight from '../assets/avatar-light.png'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'
import linkedin from '../assets/linkedin.svg'
