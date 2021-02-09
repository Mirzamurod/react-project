import mongoose from "mongoose"

const tableSchema = mongoose.Schema(
    {
        konf: {
            type: String,
            required: true,
        },
        masul: {
            type: String,
            required: true,
        },
        tE: {
            type: String,
            required: true,
        },
        bV: {
            type: String,
            required: true,
        },
        yT: {
            type: String,
            required: true,
        },
        iJQ: {
            type: String,
            required: true,
        },
        tV: {
            type: String,
            required: true,
        },
        sT: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const Table = mongoose.model('Table', tableSchema)

export default Table