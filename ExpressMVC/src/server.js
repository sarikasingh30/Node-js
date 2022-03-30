const app=require("./index");
const connect=require("./configs/db");
app.listen(5020, async()=>{
    try {
        await connect();
        console.log("Listening to port 5020");
    } catch (error) {
        console.log("ERROR!=",error);
    }
})