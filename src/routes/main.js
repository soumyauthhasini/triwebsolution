const express = require('express')
const triRoutes = express.Router()
const axios = require('axios')

triRoutes.get('', async(req, res) => {
    //res.render('index')

    try {
        const trywebAPI = await axios.get(`https://triwebsolution.com/dashboard/wp-json/tri_home/v1/homefields`)
        res.render('index', { articels : trywebAPI.data })
    } catch (err) {
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requierst){
            console.log(err.requierst)
        } else {
            console.error('Error', err.message)
        }
    }
})

module.exports = triRoutes