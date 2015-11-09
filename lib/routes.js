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
            res.redirect('/');
        }
    },
    {
        method: 'GET',
        path: '/register/forms',
        handler: function (req, res) {
            res.view('register', { title: 'register' });
        }
    },
    {
        method: 'GET',
        path: '/register/forms/pdf',
        handler: function (req, res) {
            res.file('./static/forms/HackSIAssumptionofRiskForm.pdf');
        }
    },
    {
        method: 'GET',
        path: '/volunteer',
        handler: function (req, res) {
            res.redirect('/');
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
        path: '/faq',
        handler: function (req, res) {
            res.view('faq', { title: 'faq' });
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
        path: '/ssg',
        handler: function (req, res) {
            res.view('ssg', { title: 'ssg' });
        }
    },
    {
        method: 'GET',
        path: '/{path*}',
        handler: function (req, res) {
            //console.log(req);
            res.redirect('/');
        }
    },
    {
        method: 'GET',
        path: '/tracker',
        handler: function (req, res) {
            res.redirect('/');
        }
    },
    {
        method: 'GET',
        path: '/timer',
        handler: function (req, res) {
            var duration = req.query.duration || 120,
                min = req.query.minutes,
                sec = req.query.seconds;

            if (min || sec) {
                duration = 0;
                if (min) {
                    duration = Number(min) * 60;
                }
                if (sec) {
                    duration += Number(sec);
                }
            }

            res.view('timer', { title: 'timer', duration: duration});
        }
    },
    {
        method: 'GET',
        path: '/survey',
        handler: function (req, res) {
            res.redirect('https://docs.google.com/forms/d/15PzBdBlceMITXCxMN_7_l9xQqKt3ceNgjXpca7j4_Z0');
        }
    }
]
