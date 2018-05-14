const ejs=require('ejs');

ejs.renderFile('./views/1.ejs', {name: 'wind'}, function (err, data){
  console.log(data);
});
