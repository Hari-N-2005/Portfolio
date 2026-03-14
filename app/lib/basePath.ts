// process.env.NODE_ENV is replaced with a string literal at build time by webpack.
// In production builds (next build), this evaluates to '/Next-Portfolio'.
// In development (next dev), this evaluates to ''.
const basePath = process.env.NODE_ENV === 'production' ? '/Next-Portfolio' : ''

export default basePath
