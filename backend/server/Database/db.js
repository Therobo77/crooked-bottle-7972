
import mongoose from "mongoose";

export const Connection = async () =>{
    const url="mongodb://nitinguatam09:1EhFYUHeZd2FIytk@ac-iv3flcp-shard-00-00.kglxhui.mongodb.net:27017,ac-iv3flcp-shard-00-01.kglxhui.mongodb.net:27017,ac-iv3flcp-shard-00-02.kglxhui.mongodb.net:27017/?ssl=true&replicaSet=atlas-nnnqlj-shard-0&authSource=admin&retryWrites=true&w=majority"
    try{
       await mongoose.set('strictQuery',false).connect(url,{useUnifiedTopology:true,useNewUrlParser:true})
       console.log("Database Connected success")
    }
    catch(error){
        console.log("error",error.massage);
    }
}