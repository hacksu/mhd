var User = require('./model');

module.exports = function (app) {

    app.route('/')
        .get(function (req, res) {
            res.send(req.session.user.email);
        });

    app.route('/register')
        .get(function (request, response) {
            response.render('users/register');
        })
        .post(function (req, res) {
            var user = new User({
                email: req.body.email,
                password: req.body.password
            });
            user.save();
            res.redirect('/login');
        });

    app.route('/login')
        .get(function (req, res) {
            res.render('users/login');
        })
        .post(function (req, res) {
            var email = req.body.email;
            var password = req.body.password;
            User.findOne({ email: email }, function (err, user) {
                if (user) {
                    req.session.user = user;
                    res.send(user.email);
                } else {
                    res.send('not found');
                }
            });
        });

};