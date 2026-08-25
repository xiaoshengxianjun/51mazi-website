import fallbackRelease from '../../public/releases.json'

/** 官网与桌面端对齐的产品常量（桌面端当前版本见 51mazi-tauri package.json） */
export const APP_NAME = '51码字'
export const APP_BRAND = '51mazi'
/** 与 public/releases.json 同步，发新版时只改那份清单 */
export const FALLBACK_APP_VERSION = fallbackRelease.version.replace(/^v/, '')
export const OFFICIAL_WEBSITE = 'https://www.51mazi.com'
export const CONTACT_EMAIL = 'fomazi@163.com'
export const QQ_GROUP = '777690109'
export const LICENSE_QQ = '3072693032'
export const DEFAULT_API_BASE = 'https://api.51mazi.com'
