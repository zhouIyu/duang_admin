/**
 * 设置标签名称
 * @param title {string} 标题
 */
export function setTitle (title: string) {
  const appTitle = import.meta.env.VITE_APP_NAME
  document.title = `${title} | ${appTitle}`
}
