const router = require('express').Router()
const passport = require('passport')
const Employee = global.Employee
const User = global.User

router
.get('/employee-info', (req,res) => {
  User.findOne(req.user._id)
  .then((user =>{
    Employee.findOne(user.employeeId).populate('group','name')
    .then((employeeInfo)=>{
      res.send(employeeInfo)
    })
  }))
})
.get('/', (req,res) => {
  User.findOne(req.user._id)
  .then((user =>{
    Employee.findOne(user.employeeId).populate('group','name')
    .then((employeeInfo)=>{
      res.send({employeeInfo: employeeInfo,
        claims: [
          {
            name: 'example'
          }
      ]})
    })
  }))
})

module.exports = router
