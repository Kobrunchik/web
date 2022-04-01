var express = require('express');
var router = express.Router();
var debug = require('debug')('router:articles')

const options = {
    verbose: console.debug
};
const db = require('better-sqlite3')('article.sqlite', options);



let articles =[
    {
        id: 1,
        image: 'https://picsum.photos/500/499',
        title: "Title",
        date: new Date(),
        text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.`
    },
    {
        id: 2,
        image: 'https://picsum.photos/499/501',
        title: "Title",
        date: new Date(),
        text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.`
    },
    {
        id: 3,
        image: 'https://picsum.photos/501/501',
        title: "Title",
        date: new Date(),
        text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam egestas wisi a erat.

`
    },
];
router.get('/', function(req, res, next) {
    const row = db.prepare('SELECT * FROM article').all();
    console.log(row);
    res.send(row);
});
/*router.get('/:id', function(req, res, next){
    const id = req.params.id
    console.debug (req.params);
    if(id-1 in articles) {
        const article = articles.find((a )=> a.id === Number.parseInt(id));
        res.send(article);
    }else{
        res.send('Not Found');
    }
});*/
router.get('/:id', function(req, res, next){
    const id1 = req.params.id
    const row = db.prepare('SELECT * FROM article WHERE id =?').get(id1);
    if(row){
        console.log(row);
        res.send(row);
    }else{
        res.sendStatus(404);
    }


});

/*router.post("/", function(req, res, next){
    const body = req.body;
    const article = {
        id: articles.length + 1,
        title: body.title,
        text: body.text,
        date: new Date()
    }
    articles.push(article);
    console.table(articles);
    res.send(article);

});*/

router.post("/", function(req, res, next){
    const body = req.body;

    const article = {
        image: body.image,
        title: body.title,
        date: new Date().toISOString(),
        text: body.text

    }
    const row = db.prepare('INSERT INTO article (image, title, date, text) VALUES (?, ?, ?, ?)');
    row.run(...Object.values(article))

    res.send(article);

});

/*router.patch("/:id", function(req, res, next){

    const body = req.body;
    const id = req.params.id;

    if(id) {
        const article = articles.find((a) => a.id === Number.parseInt(id));
        if (article) {
            article.title = body.title;
            article.text = body.text;
            res.send(article);
        } else {
            res.sendStatus(404);
        }
    }else{
            res.sendStatus(404);
    }
});*/

router.patch("/:id", function(req, res, next){

    const body = req.body;
    const id1 = req.params.id;

    if(id1) {
        const article = db.prepare('SELECT * FROM article WHERE id =?').get(id1);
        if (article) {
            Object.assign(article, body);
            const row = db.prepare('UPDATE article SET image=?, title=?, date=?, text=? WHERE id=?');
            const info = row.run(article.image, article.title, article.date, article.text, id1);
            console.debug(info);
            res.send(article);
        } else {
            res.sendStatus(404);
        }
    }else{
        res.sendStatus(404);
    }
});

/*router.delete("/:id", function(req, res, next){

    const id = req.params.id;

    if(id-1 in articles) {
        articles = articles.filter((a) => a.id !== Number.parseInt(id));
        res.sendStatus(200);
    }else{
        res.sendStatus(404);
    }
});*/

router.delete("/:id", function(req, res, next){

    const id = req.params.id;

    if(id) {
        db.prepare('DELETE FROM article WHERE id =?').run(id);
        res.sendStatus(200);
    }else{
        res.sendStatus(404);
    }
});

module.exports = router;