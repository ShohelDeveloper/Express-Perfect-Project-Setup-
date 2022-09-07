const router = require('express').Router()

router.get('/health', (_req,res) =>{
    // server error
    // throw new Error('Error')

    // my error
    const error = new Error('Hellow Error')
    error.status = 400
    throw error
    res.status(200).json({message:'Success'})
})

module.exports = router

