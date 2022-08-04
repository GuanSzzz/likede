export const isImgError = {
  inserted: (el, { value }) => {
    el.onerror = () => {
      el.src = value
    }
  }
}
