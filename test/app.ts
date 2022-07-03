import * as express from 'express'
import { RegisterService } from '../src/main'
import { TestService, TestOtherService } from './service'

var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

RegisterService(app, [TestService])

TestOtherService.register(app)

var server = app.listen(3000, function () {
  // @ts-ignore
  var host = server.address().address
  // @ts-ignore
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
