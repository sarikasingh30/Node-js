const app=require("./index");
const connection=require("./configs/db");
app.listen(5800, async()=>{
    try {
        await connection();
        console.log("Listening To Port 5800");
    } catch (error) {
        console.log("Oops Something Got Wrong",error);
    }
});