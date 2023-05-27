import express from 'express'
import { createUser,getAllUser } from '../controllers/user.js'
import multer from 'multer'
const router=express.Router()





const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `public/upload/`)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
  
  const upload = multer({ storage: storage })






router.post('/user',upload.single('profile'),createUser)
router.get('/user',getAllUser)


export default router 