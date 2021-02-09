import express from 'express'
const router = express.Router()
import { createTable, deleteTable, getTables, updateTable } from '../controllers/tableController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/', protect, createTable)
router.route('/').get(protect, getTables)
router.route('/:id').put(protect, updateTable).delete(protect, deleteTable)

export default router