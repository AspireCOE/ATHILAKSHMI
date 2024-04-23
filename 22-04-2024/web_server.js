const express=require('express');
const app=express();
const path=require('path')
const PORT=4040;
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})
app.get('/new-page(.html)?',(req,res)=>{ // ?-if .html extension present or not also give output
    res.sendFile(path.join(__dirname,'views','contact.html'));
})
//  make sure that the 'views' directory is configured as a static directory using the express.static middleware.
app.use(express.static(path.join(__dirname, 'views')));
// Redirect from /old-page or /old-page.html to contact.html
app.get('/oldpage(.html)?', (req, res) => {
    res.redirect(301,'contact.html');
});
//any wrong url it will redirect to 404 page
app.get('/*',(req,res)=>{ // ?-if .html extension present or not also give output
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})
app.listen(PORT,()=> console.log(`Server running on port ${PORT}`));