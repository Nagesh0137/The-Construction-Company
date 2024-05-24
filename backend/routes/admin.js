var express=require('express');
var router=express.Router();
var exe=require('../connection');


var checklogin = function(req, res, next) {
    if (req.session.admin_login_id == undefined) { 
        res.redirect('/admin/admin_login');
    } else {
        next();
    }
}


router.get('/',function(req,res){
    res.render('admin/home.ejs')
})
router.get('/home',async(req,res)=>{
    var home_slider=await exe(`select * from home_slider`)
    var obj={'home_slider':home_slider}
    console.log(home_slider)
    res.render('admin/home_page.ejs',obj)
})
router.post('/update_slider',async (req,res)=>{
    var d=req.body;
    // var sql=`create table home_slider(home_slider_id int primary key auto_increment,first_heading text,main_heading text,main_animated_heading text,third_heading text,slider_image text)`
    if(req.files){
        var file_name=new Date().getTime()+'.png';
        req.files.slider_image.mv('public/uploads/'+file_name);
        console.log(file_name)
    }
    var sql=`update home_slider set  first_heading='${d.first_heading}',main_heading ='${d.main_heading}',main_animated_heading='${d.main_animated_heading}',third_heading='${d.third_heading}',slider_image='${file_name}'`
    var data=await exe(sql)
    console.log(req.files)
    // res.send(data)
    res.redirect('/admin/home')
})
router.get('/our_service',async (req,res)=>{
    var sql=`select * from our_service`;
    var our_service=await exe(sql)
    var obj={'our_service':our_service}
    res.render('admin/our_service.ejs',obj)
})

router.post('/our_service',async(req,res)=>{
    var d=req.body;
    if(req.files){
        var file_name=new Date().getTime()+'.png';
        req.files.our_service_image.mv('public/uploads/'+file_name);
        console.log(file_name)
    }
    // var sql=`create table our_service(our_service_id int primary key auto_increment,our_service_image text, our_service_heading text)`;
    var sql=`insert into our_service(our_service_image,our_service_heading)values('${file_name}','${d.our_service_heading}')`
    var data=await exe(sql);
    // res.send(data)    
    res.redirect('/admin/our_service')
})
router.get('/who_are_you',async(req,res)=>{
    var sql=`select * from who_are_you`
    var who_are_you=await exe(sql);
    var obj={'who_are_you':who_are_you}
    res.render('admin/who_are_you.ejs',obj)
})
router.post('/who_are_you',async(req,res)=>{
    var d=req.body;
    if(req.files){
        var file_name=new Date().getTime()+'.png';
        req.files.who_are_you_image.mv('public/uploads/'+file_name);
        console.log(file_name)
    }
    // var sql=`create table who_are_you(who_are_you_id int primary key auto_increment,who_are_you_image text,who_are_you_heading text,who_are_you_sub_heading text,who_are_you_description text)`;
    var sql=`update who_are_you set who_are_you_image ='${file_name}',who_are_you_heading='${d.who_are_you_heading}',who_are_you_sub_heading='${d.who_are_you_sub_heading}',who_are_you_description='${d.who_are_you_description}'`
    var data=await exe(sql)
    res.redirect('/admin/who_are_you')
})

router.get('/get_slider',async(req,res)=>{
    var sql=`select * from home_slider`
    var data=await exe(sql);
    res.json(data)
})
router.get('/our_services',async(req,res)=>{
    var sql=`select * from our_service`
    var data=await exe(sql);
    res.json(data)
})
router.get('/our_project',async(req,res)=>{
    res.render('admin/our_project.ejs')
})
router.post('/save_our_project',async(req,res)=>{
    var d=req.body;
    if(req.files){
        var file_name=new Date().getTime()+'.png';
        req.files.project_image.mv('public/uploads/'+file_name);
        console.log(file_name)
    }
    // var sql=`create table our_project(our_project_id int primary key auto_increment,project_heading text,project_image text)`
    var sql=`insert into our_project (project_heading,project_image)values('${d.project_heading}','${file_name}')`
    var data=await exe(sql);
    // res.send(data)
    res.redirect('/admin/our_project')
})
router.get('/our_projects',async(req,res)=>{
    var sql=`select * from our_project`
    var data=await exe(sql);
    res.json(data)
})
module.exports=router;
