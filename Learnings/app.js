const express=require('express');
const authRouter=require('./route/authRoute');
const app=express();
app.post('/',(req,res)=>{
    res.status(200).json({
        status:'success',
        message:'REST APIs are working'
    });
});

app.use('/api/v1/auth',authRouter); 

app.listen(3000,()=>{
    console.log('server running on http://localhost:3000',);
});




const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
});

const Post = sequelize.define('Post', {
  title: DataTypes.STRING,
  content: DataTypes.TEXT,
});

User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

async function run() {
  try {
   
    await sequelize.sync({ force: true }); 

    console.log('Tables synced successfully.');

    const user = await User.create({
      name: 'Aruna',
      email: 'aruna@gmail.com',
    });
    await User.create({
      name: 'pavi',
      email: 'pavi@gmail.com',
    });

    await Post.create({ title: 'Hello world', content: 'First post content', userId: user.id });
    await Post.create({ title: 'Sequelize', content: 'Second post content', userId: user.id });


    const posts = await Post.findAll({ include: User });
    console.log("All Posts with User Info:", JSON.stringify(posts));
    
  } catch (err) {
    console.error('Error:', err.message);
  }
}
run();
const emp=sequelize.define('emp',{
    name: DataTypes.STRING,
    email: DataTypes.STRING,
});
const Task=sequelize.define('task',{name:DataTypes.STRING},
    {timestamps:false});
async function set(){
    await sequelize.sync({force:true});
    await Task.create({name:"saru"});
    await Task.create({name:"annu"});
    emp.hasMany(Task);
Task.belongsTo(emp);
const tasks=await Task.findAll({include:emp});
console.log(JSON.stringify(tasks,null,2));
}
set();

