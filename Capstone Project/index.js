import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const posts = []; // Array to store posts
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true })); // To parse form data
app.use(express.static('public')); // To serve CSS

app.listen(3000, () => console.log('Server running on port 3000'));

app.get('/',(req,res)=>{
   res.render('home.ejs',{posts});
});

app.get('/compose', (req, res) => {
  res.render('compose');
});

app.post('/compose', (req, res) => {
  const { title, content } = req.body;
  posts.push({ title, content });
  res.redirect('/');
});

app.get('/edit/:id',(req,res)=>{
    const id = req.params.id;
    const post = posts[id];
    if(post){
       res.render('edit', { post, id });
    }
    else{
        res.status(404).send("Post not found");
    }
});

app.post('/edit/:id',(req,res)=>{
    const id = req.params.id;
    const title = req.body.title;
    const content = req.body.content;
    posts[id] = {title,content};
    res.redirect('/');
    
});

app.post('/delete/:id', (req, res) => {
  const id = req.params.id;
  posts.splice(id, 1);
  res.redirect('/');
});

app.get('/posts/:id',(req,res)=>{
  const id = req.params.id;
  const post = posts[id];
  if(post){
    res.render('post',{post});
  }
  else{
    res.status(404).send("Post not found");
  }
});
