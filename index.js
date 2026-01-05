import ejs from "ejs"
import express from "express"
import { promises as fs } from "fs"

const app = express()
app.use(express.json())

app.use("/css", express.static("css"))
app.use("/fonts", express.static("fonts"))
app.use("/img", express.static("img"))
app.use("/libs", express.static("libs"))
app.use("/js", express.static("js"))

let namePage = [
    "/",
    "/login",
    "/profile",
    "/reset",
    "/signup",
    "/tables"
]

let usersInfo = [
    {
        IdNumber: "123",
        Name: "MuhammadAli",
        FirstName: "Raxmonov",
        LastName: "Alimovich",
        Birtday: "19.03.1993",
        Male: "M",
        PhoneNumber: +998977861070,
        Profession: "BackEnd",
        Comments: "mmm"
    },
    {
        IdNumber: "456",
        Name: "Umid",
        FirstName: "Muhiddinov",
        LastName: "Anvar o'g'li",
        Birtday: "09.07.1995",
        Male: "M",
        PhoneNumber: +998977861070,
        Profession: "Arch",
        Comments: "zzz"
    },
    {
        IdNumber: "789",
        Name: "Zilola",
        FirstName: "Asadova",
        LastName: "Jamshid qizi",
        Birtday: "15.10.2000",
        Male: "W",
        PhoneNumber: +998977861070,
        Profession: "Design",
        Comments: "www"
    }
]

app.get("/", async (req, res) => {
    let data = await fs.readFile("./index.html", "utf-8")
    let renderData = ejs.render(data, {
        title: "My_Dashboard",
        brand: "Home Page",
        userName: "MuhammadALI"
    })
    res.send(renderData)
})

app.get("/login", async (req, res) => {
    let data = await fs.readFile("./login.html", "utf-8")
    let renderData = ejs.render(data, {
        title: "My_Login"
    })
    res.send(renderData)
})

app.get("/profile", async (req, res) => {
    let data = await fs.readFile("./profile.html", "utf-8")
    let renderData = ejs.render(data, {
        title: "My_Profile",
        userName: "MuhammadALI"
    })
    res.send(renderData)
})

app.get("/reset", async (req, res) => {
    let data = await fs.readFile("./reset.html", "utf-8")
    let renderData = ejs.render(data, {
        title: "My_Reset"
    })
    res.send(renderData)
})

app.get("/signup", async (req, res) => {
    let data = await fs.readFile("./signup.html", "utf-8")
    let renderData = ejs.render(data, {
        title: "My_Signup"
    })
    res.send(renderData)
})

app.get("/tables", async (req, res) => {
    let data = await fs.readFile("./tables.html", "utf-8")
    let renderData = ejs.render(data, {
        title: "My_Tables",
        userName: "MuhammadALI",
        usersInfo,
    })
    res.send(renderData)
})

app.use(async (req, res) => {
    res.status(404).sendFile("error.html", { root: "." })
})

app.listen(3000, () => {
    console.log("port 3000");
})