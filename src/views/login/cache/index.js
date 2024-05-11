/**
 * 获取localStorage
 * @param {*} key
 * @returns value or ''
 */
function getLocalStorage (key) {
  return localStorage?.[key] || ''
}

/**
 * 设置localStorage
 * @param {*} key
 * @param {*} value
 */
function setLocalStorage (key, value) {
  if (!key) return console.warn('localStorage.setItem is have not key')
  if (!value) return console.warn('localStorage.setItem is have not value')
  try {
    localStorage[key] = typeof value === 'string' ? value : JSON.stringify(value)
  } catch (oException) {
    if (oException.name === 'QuotaExceededError') console.warn('超出本地存储限额！')
    else console.warn(oException?.message || oException)
  }
}

/**
 * 删除localStorage key为空则删除所有
 * @param {*} key
 */
function clearLocalStorage (key) {
  if (key) localStorage.removeItem(key)
  else localStorage.clear()
}

export {
  getLocalStorage,
  setLocalStorage,
  clearLocalStorage
}
