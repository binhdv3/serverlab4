//cấu hình
const express = require('express');
const app = express();

const { engine } = require('express-handlebars');


app.engine("handlebars", engine({
    layoutsDir: "views/layouts"
}));

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Ba mươi sáu phố phường',
        message: 'Tôi là Đào Văn Bình!'
    });
});

app.listen(8080, () => {
    console.log('Server started on port 8080');
});