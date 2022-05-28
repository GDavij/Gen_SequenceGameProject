import express from 'express'
import {networkInterfaces} from 'os'

const App = express()

//Set Server Configurations
App.set('view engine', 'ejs')
App.set('views', 'dist/views/pages')

//Set Server Use
App.use(express.static('dist'))
App.use('css', express.static(__dirname + 'public'))
App.use('js', express.static(__dirname + 'code'))

//Set Routes

App.get('/', (req:express.Request, res:express.Response) => {
    res.render('index')
})



// Config Networks 
const PORT = process.env.PORT || 8080
const Net:any = networkInterfaces()
const IP = Net.wlp0s20f3[0].address

// Set Listen

App.listen(PORT, () => {console.info(`
+/------------------------------------
Server-Status: 200
Server-Msg: Server Running Okay
Local-Host: http://localhost:${PORT}
Net-Host: http://${IP}:${PORT}
+/------------------------------------`)})