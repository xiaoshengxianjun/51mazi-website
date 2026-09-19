/**
 * 官网同源 APK 入口。小米/夸克对跨域直链 api.51mazi.com 更容易失败，
 * 先打 www.51mazi.com/apk/*.apk 再 302 到 API。
 */
export default defineEventHandler((event) => {
  const filename = getRouterParam(event, 'filename') ?? ''
  if (!/^[A-Za-z0-9._-]+\.apk$/.test(filename)) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found' })
  }

  const apiBase = String(
    useRuntimeConfig().public.apiBase || 'https://api.51mazi.com',
  ).replace(/\/$/, '')

  return sendRedirect(
    event,
    `${apiBase}/api/download/app-stable/${encodeURIComponent(filename)}`,
    302,
  )
})
