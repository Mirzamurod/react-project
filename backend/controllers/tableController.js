import asyncHandler from 'express-async-handler'
import Table from '../models/tableModel.js'

// @desc    Get all tables
// @route   GET /api/tables
// @access  Private
const getTables = asyncHandler(async (req, res) => {
    const tables = await Table.find({})
    res.json(tables)
})

// @desc    Create new table
// @route   POST /api/tables
// @access  Private
const createTable = asyncHandler(async (req, res) => {
    const { konf, masul, tE, bV, yT, iJQ, tV, sT } = req.body

    if (
        konf.lenght === 0 &&
        masul === 0 &&
        tE === 0 &&
        bV === 0 &&
        yT === 0 &&
        iJQ === 0 &&
        tV === 0 &&
        sT === 0
    ) {
        res.status(400)
        throw new Error("Hammasini to'ldirish shart")
    } else {
        const table = new Table({
            konf,
            masul,
            tE,
            bV,
            yT,
            iJQ,
            tV,
            sT,
        })

        const createdTable = await table.save()

        res.status(201).json(createdTable)
    }
})

// @desc    Delete a table
// @route   DELETE /api/tables/:id
// @access  Private
const deleteTable = asyncHandler(async (req, res) => {
    const table = await Table.findById(req.params.id)

    if (table) {
        await table.remove()
        res.json({ message: 'O\'chirildi!' })
    } else {
        res.status(404)
        throw new Error('O\'chirilmadi')
    }
})

// @desc
// @route   PUT /api/tables/:id
// @access  Private
const updateTable = asyncHandler(async (req, res) => {
    const { konf, masul, tE, bV, yT, iJQ, tV, sT } = req.body

    const table = await Table.findById(req.params.id)

    if (table) {
        table.konf = konf
        table.masul = masul
        table.tE = tE
        table.bV = bV
        table.yT = yT
        table.iJQ = iJQ
        table.tV = tV
        table.sT = sT

        const updatedTable = await table.save()
        res.json(updatedTable)
    } else {
        res.status(404)
        throw new Error('Topilmadi')
    }
})

export {createTable, deleteTable, getTables, updateTable}