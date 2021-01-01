export function fetchImage(src: HTMLImageElement['src']) {
  return new Promise((resolve, reject) => {
    const img = new Image()

    img.src = src
    img.onload = resolve
    img.onerror = reject
  })
}
