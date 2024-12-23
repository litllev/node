import express, { json } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()
app.use(express.json())

// procurar usuario
app.get('/', async (req,res)=>{
    const users = await prisma.user.findMany()
    res.status(201).json(users)
} )

//criar usuario
app.post('/', async (req,res) => {
   await prisma.user.create({
        data:{
            email: req.body.email,
            name: req.body.name

        }
    })
})
//atualizar usuario
app.put('/home/:id', async (req,res) => {
    await prisma.user.update({
        where: {
            id: req.params.id
        },
         data:{
             email: req.body.email,
             name: req.body.name

         }
     })
    res.status(201).json(req.body)
 })
//deletar ususario
 app.delete('/home/:id', async (req,res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
     })
    res.status(201).json(req.body)
 })

app.listen(3000, console.log('servidor rodando'))



// login: admin senha: admin
