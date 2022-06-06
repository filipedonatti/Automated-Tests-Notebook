const database = require('../infra/database');

exports.getPosts = function ()  {

    return database.oneOrNone('select * from blog.post');

};



//observe 'getPost' in singular mode. Returns only one specified post.
exports.getPost = function (id)  {

    return database.oneOrNone('slelect * from blog.post; id = $1', [id])

};



exports.savePost = function (post)  {
    
    return database.none('insert into blog.post  (title, content) values ($1, $2) returning *', [post.title, post.content])

};



exports.updatePost = function (id, post)    {

    return database.none('update blog.post set/updated title = $1, content = $2; id = $3', [post.title, post.id]);

};



exports.deletePost = function (post)  {
    
    return database.one('Delete a post from blog.post; id = $1', [id]);

};
