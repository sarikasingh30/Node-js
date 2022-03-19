const app=require("./index");
const connection=require("./configs/db");
app.listen(5000, async()=>{
    try {
        await connection();
        console.log("Listening To Port 5000")
    } catch (error) {
        console.log("Oops Something Got Wrong",error)
    }
});