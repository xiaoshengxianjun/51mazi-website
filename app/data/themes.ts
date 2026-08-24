/** 官网首屏展示的五套主题截图，名称与配色对齐桌面端主题预设 */
export interface ThemeSlide {
  id: string
  name: string
  description: string
  src: string
  /** 主题主色，用于指示点与边框 */
  primary: string
  /** 主题画布色，用于截图占位 */
  surface: string
  /** 首屏浅色洗底，保持整页浅色，避免暗色主题反转整屏 */
  wash: string
}

export const THEME_SLIDES: ThemeSlide[] = [
  {
    id: 'light',
    name: '云白',
    description: '温润中性亮色',
    src: '/images/home1.png',
    primary: '#3d6b9e',
    surface: '#f7f6f3',
    wash: '#f4f2ee',
  },
  {
    id: 'yellow',
    name: '宣纸',
    description: '护眼暖米色调',
    src: '/images/home2.png',
    primary: '#8f7048',
    surface: '#f3ebe0',
    wash: '#f6efe4',
  },
  {
    id: 'green',
    name: '竹青',
    description: '浅灰绿底与竹青点缀',
    src: '/images/home3.png',
    primary: '#4a7c59',
    surface: '#f2f6f3',
    wash: '#eef4f0',
  },
  {
    id: 'dark',
    name: '墨夜',
    description: '深邃中性暗色',
    src: '/images/home4.png',
    primary: '#6b9fd4',
    surface: '#121214',
    wash: '#eef1f4',
  },
  {
    id: 'charcoal',
    name: '炭灰',
    description: '暖调深灰与琥珀点缀',
    src: '/images/home5.png',
    primary: '#c9a86c',
    surface: '#1a1816',
    wash: '#f3efe8',
  },
]
