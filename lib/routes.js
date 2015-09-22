module.exports = [
    {
        method: 'GET',
        path: '/static/{path*}',
        handler: {
            directory: {
                path: './static',
                listing: false,
                index: false
            }
        }
    },
    {
        method: 'GET',
        path: '/',
        handler: function (req, res) {
            res.view('home', { title: 'home' });
        }
    },
    {
        method: 'GET',
        path: '/register',
        handler: function (req, res) {
            res.redirect('https://hacksi20.eventbrite.com');
        }
    },
    {
        method: 'GET',
        path: '/register/forms',
        handler: function (req, res) {
            res.file('./static/forms/HackSIAssumptionofRiskForm.pdf');
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: function (req, res) {
            res.view('about', { title: 'about' });
        }
    },
    {
        method: 'GET',
        path: '/sponsors',
        handler: function (req, res) {
            res.view('sponsors', { title: 'sponsors' });
        }
    },
    {
        method: 'GET',
        path: '/sponsors/levels',
        handler: function (req, res) {
            res.view('sponsors-levels', { title: 'sponsors' });
        }
    },
    {
        method : 'GET',
        path: '/sponsors/letter',
        handler: function (req, res) {
            res.view('sponsor-letter', { title: 'sponsors' });
        }
    },
    {
        method: 'GET',
        path: '/sponsors/letter/print', 
        handler: function (req, res) {
            res.view('letter', { title: 'sponsors' }, { layout: 'print' });
        }
    },
    {
        method: 'GET',
        path: '/contact',
        handler: function (req, res) {
            res.view('contact', { title: 'contact' });
        }
    },
    {
        method: 'GET',
        path: '/schedule',
        handler: function (req, res) {
            res.view('schedule', { title: 'schedule' });
        }
    },
    {
        method: 'GET',
        path: '/code',
        handler: function (req, res) {
            res.view('code', { title: 'code of conduct' });
        }
    },
    {
        method: 'GET',
        path: '/press',
        handler: function (req, res) {
            res.view('press', { title: 'press' });
        }
    },
    {
        method: 'GET',
        path: '/twitter',
        handler: function (req, res) {
            res.redirect('https://twitter.com/hacksi');
        }
    },
    {
        method: 'GET',
        path: '/github',
        handler: function (req, res) {
            res.redirect('https://github.com/HackSI');
            //console.log(req);
        }
    },
    {
        method: 'GET',
        path: '/facebook',
        handler: function (req, res) {
            res.redirect('https://facebook.com/HackSouthernIllinois');
        }
    },
    {
        method: 'GET',
        path: '/google',
        handler: function (req, res) {
            res.redirect('https://plus.google.com/communities/108109882393061170322');
        }
    },
    {
        method: 'GET',
        path: '/flickr',
        handler: function (req, res) {
            res.redirect('https://flickr.com/groups/hacksi/');
        }
    },
    {
        method: 'GET',
        path: '/live',
        handler: function (req, res) {
            res.view('live', { title: 'live' });
        }
    },
    {
        method: 'GET',
        path: '/{path*}',
        handler: function (req, res) {
            //console.log(req);
            res.redirect('/');
        }
    }
]
