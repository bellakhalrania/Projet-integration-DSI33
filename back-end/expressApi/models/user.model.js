const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

let schemaUser= mongoose.Schema({
    username:String,
    email:String,
    password:String,
})

var User=mongoose.model('user',schemaUser)
let url='mongodb://localhost:27017/Mentalhealth_db'

exports.register=(username,email,password)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url ).then(()=>{
            return User.findOne({email:email})
        }).then((doc)=>{
            if(doc){
                mongoose.disconnect()
                reject('this email is exist')
            }else{
                bcrypt.hash(password,10).then((hashedPassword)=>{
                    let user=new User({
                        username:username,
                        email:email,
                        password:hashedPassword
                    })
                    user.save().then((doc)=>{
                        mongoose.disconnect()
                        resolve(user)
                    }).catch((err)=>{
                        mongoose.disconnect()
                        reject(err)
                    })
                }).catch((err)=>{
                    mongoose.disconnect
                    reject(err)

                })
            }
        })
       
    })
}



var privatekey="this is rania  "
exports.login=(email,password)=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(url ).then(()=>{
            return User.findOne({email:email})
        }).then((User)=>{
            if(!User){
                mongoose.disconnect()
                reject('Mot de passe ou e-mail invalide ')
            }else{
                bcrypt.compare(password,User.password).then((same)=>{
                    if(same){
                        let token = jwt.sign({id:User._id,username:User.username},privatekey,{
                            expiresIn:'1h'
                        })
                        mongoose.disconnect()
                        resolve(token)
                        

                    }else{
                        mongoose.disconnect()
                        reject('Mot de passe ou e-mail invalide')
                    }
                }).catch((err)=>{
                    mongoose.disconnect()
                    reject(err)
                })
            }
           
            
        })
       
    })
}