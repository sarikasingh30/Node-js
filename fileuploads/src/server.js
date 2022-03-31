const app=require("./index");
const connection=require("./configs/db");
app.listen(3600, async()=>{
    try {
        await connection();
        console.log("Listening To Port 3600");
    } catch (error) {
        console.log("Oops Something Got Wrong",error);
    }
});