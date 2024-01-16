export const NODE_ENV = 'development'

const env = (name) => {
    return (
        NODE_ENV === 'production' ? {
            NODE_ENV,
            serviceCharge: 0.05,
            serviceCharge1: 0.03,
            serviceCharge2: 0.025,
            nairaRate: 1323
        } : {
            NODE_ENV,
            serviceCharge: 0.05,
            nairaRate: 1323
        }
    )[name]
}

export const envVal = (dev, prod) => {
    return NODE_ENV === 'production' ? prod : dev
}

export default env