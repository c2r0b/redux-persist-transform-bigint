import { createTransform } from 'redux-persist'
import { TransformConfig } from 'redux-persist/es/createTransform'

const fromBigInt = (value: any):unknown => {
    if (typeof value === 'bigint') {
        return value.toString() + '#bigint'
    }
    if (Array.isArray(value)) {
        return value.map((v) => fromBigInt(v))
    }
    if (typeof value === 'object') {
        return Object.fromEntries(
            Object.entries(value).map(([k, v]) => [k, fromBigInt(v)])
        )
    }
    return value
}

const toBigInt = (value: any):unknown => {
    if (typeof value === 'string') {
        const match = value.match(/^(.*)#bigint$/)
        if (match) {
            return BigInt(match[1])
        }
    }
    if (Array.isArray(value)) {
        return value.map((v) => toBigInt(v))
    }
    if (typeof value === 'object') {
        return Object.fromEntries(
            Object.entries(value).map(([k, v]) => [k, toBigInt(v)])
        )
    }
    return value
}

const createBigIntTransform = (config: TransformConfig = {}) => {
    return createTransform(
        (inboundState, _key) => {
            return fromBigInt(inboundState)
        },
        (outboundState, _key) => {
            return toBigInt(outboundState)
        },
        config
    )
}

export const BigIntTransform = createBigIntTransform()
export default createBigIntTransform
