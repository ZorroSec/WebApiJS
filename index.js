const express = require('express')
const app = express()
app.use('./app/css/', express.static('/app/css/'))
app.use('./app/js/', express.static('/app/js/'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/app/view/index.html')
})

app.listen(3000, (err, done)=>{
    if(!err){
        console.log({ message: 'sucess' })
    }
})