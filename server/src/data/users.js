import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin user',
        eamil: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmic: true
    },
    {
        name: 'Jhon Doe',
        eamil: 'Jhon@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Jane Doe',
        eamil: 'Jane@example.com',
        password: bcrypt.hashSync('123456', 10)

    }
]

export default users