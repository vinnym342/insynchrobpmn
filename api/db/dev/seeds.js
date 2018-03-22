const mongoose = require('mongoose')
const Group = require('../models/group')
const Employee = require('../models/employee')
const data = [
  {
    group: 'directors',
    name: 'Directors',
    members: [
      {
        name: 'David',
        id: mongoose.Types.ObjectId(),
        role: 'CEO'
      },
      {
        name: 'Matthew',
        id: mongoose.Types.ObjectId(),
        role: 'CFO'
      }
    ]
  },
  {
    group: 'headOfDepartments',
    name: 'Head Of Departments',
    members: [
      {
        name: 'VERGHESE',
        id: mongoose.Types.ObjectId(),
        role: 'Solution Architect'
      },
      {
        name: 'SHARMAN',
        id: mongoose.Types.ObjectId(),
        role: 'Sales Manager'
      },
      {
        name: 'SHEILA',
        id: mongoose.Types.ObjectId(),
        role: 'Account Manager'
      },
      {
        name: 'VIKAS',
        id: mongoose.Types.ObjectId(),
        role: 'Senior Manager'
      },
    ]
  },
  {
    group: 'techTeam',
    name: 'Tech Team',
    members: [
      {
        name: 'TE YIN CHIH',
        id: mongoose.Types.ObjectId(),
        role: 'Java Developers'
      },
      {
        name: 'BHUPESH',
        id: mongoose.Types.ObjectId(),
        role: 'Java Developers'
      },
      {
        name: 'VARUN',
        id: mongoose.Types.ObjectId(),
        role: 'Java Developers'
      },
      {
        name: 'TARUN',
        id: mongoose.Types.ObjectId(),
        role: 'Java Developers'
      }
    ]
  },
  {
    group: 'consultants',
    name: 'Consultants',
    members: [
      {
        name: 'JUDE JOSEPH',
        id: mongoose.Types.ObjectId(),
        role: 'Primavera Consultants'
      },
      {
        name: 'LOKESH',
        id: mongoose.Types.ObjectId(),
        role: 'Primavera Consultants'
      },
      {
        name: 'PRASANTH',
        id: mongoose.Types.ObjectId(),
        role: 'Primavera Consultants'
      },
      {
        name: 'SADAF',
        id: mongoose.Types.ObjectId(),
        role: 'Unifier Consultants'
      },
    ]
  },
  {
    group: 'financeAndAdmin',
    name: 'Finance And Admin',
    members: [
      {
        name: 'SHAILA',
        id: mongoose.Types.ObjectId(),
        role: 'HR'
      },
      {
        name: 'NURUL SYAMIMI',
        id: mongoose.Types.ObjectId(),
        role: 'Receptionist'
      },
      {
        name: 'HIBA FAROOQI',
        id: mongoose.Types.ObjectId(),
        role: 'Assistant Accountant'
      },
    ]
  }
]
data.forEach((groupData)=> {
  Group.create({group: groupData.name, name: groupData.name})
  .then((createdGroup) => {
    groupData.members.forEach((member)=> {
      Employee.create({__id: member.id,firstName: member.name, group: createdGroup._id})
    })
  })
})
