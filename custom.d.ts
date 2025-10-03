declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'

declare module '*.{png,jpg,jpeg,gif}' {
  const content: string
  export default content
}

declare module '*.svg' {
  const value: any
  export default value
}

declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}
