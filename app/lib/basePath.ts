const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() || ''
const basePath = rawBasePath
	? rawBasePath.startsWith('/')
		? rawBasePath
		: `/${rawBasePath}`
	: ''

export default basePath
