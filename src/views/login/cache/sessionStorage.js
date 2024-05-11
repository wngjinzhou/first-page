/**
 * 获取session
 * @param {*} key
 * @returns value or ''
 */
function getSession (key) {
  return sessionStorage?.[key] || ''
}

/**
   * 设置session
   * @param {*} key
   * @param {*} value
*/
function setSession (key, value) {
  if (!key) return console.warn('sessionStorage.setItem is have not key')
  if (!value) return console.warn('sessionStorage.setItem is have not value')
  sessionStorage[key] = typeof value === 'string' ? value : JSON.stringify(value)
}

/**
   * 删除session key为空则删除所有
   * @param {*} key
*/
function clearSession (key) {
  if (key) sessionStorage.removeItem(key)
  else sessionStorage.clear()
}

export {
  getSession,
  setSession,
  clearSession
}
