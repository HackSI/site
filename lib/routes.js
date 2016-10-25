'use strict';
const currentYear = (new Date()).getFullYear();

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
        handler: (req, res) => {
            res.view('home', { title: 'home', currentYear: currentYear });
        }
    },
    {
        method: 'GET',
        path: '/register',
        handler: (req, res) => {
            res.redirect('https://hacksi2016.eventbrite.com');
        }
    },
    {
        method: 'GET',
        path: '/register/forms',
        handler: (req, res) => {
            res.view('register', { title: 'register', currentYear: currentYear });
        }
    },
    {
        method: 'GET',
        path: '/register/forms/pdf',
        handler: (req, res) => {
            res.file('./static/forms/HackSIAssumptionofRiskForm.pdf');
        }
    },
    {
        method: 'GET',
        path: '/volunteer',
        handler: (req, res) => {
            res.redirect('https://docs.google.com/forms/d/1_V-AT64U3ZarmQE15I8Sm_gxxjzf6bY_kNaaewPDkyU/viewform');
        }
    },
    {
        method: 'GET',
        path: '/cfp',
        handler: (req, res) => {
            res.redirect('http://goo.gl/forms/SUR5XDWcQWQt6ekf2');
        }
    },
    {
        method: 'GET',
        path: '/about',
        handler: (req, res) => {
            res.view('about', { title: 'about', currentYear: currentYear });
        }
    },
    {
        method: 'GET',
        path: '/sponsors',
        handler: (req, res) => {
            res.view('sponsors', { title: 'sponsors', currentYear: currentYear });
        }
    },
    {
        method: 'GET',
        path: '/sponsors/levels',
        handler: (req, res) => {
            res.view('sponsors-levels', { title: 'sponsors', currentYear: currentYear });
        }
    },
    {
        method: 'GET',
        path: '/sponsors/letter',
        handler: (req, res) => {
            res.view('sponsor-letter', { title: 'sponsors', currentYear: currentYear });
        }
    },
    {
        method: 'GET',
        path: '/sponsors/letter/print', 
        handler: (req, res) => {
            res.view('letter', { title: 'sponsors', currentYear: currentYear }, { layout: 'print' });
        }
    },
    {
        method: 'GET',
        path: '/contact',
        handler: (req, res) => {
            res.view('contact', { title: 'contact', currentYear: currentYear });
        }
    },
    {
        method: 'GET',
        path: '/schedule',
        handler: (req, res) => {
            res.view('schedule', { title: 'schedule', currentYear: currentYear });
        }
    },
    {
        method: 'GET',
        path: '/faq',
        handler: (req, res) => {
            res.view('faq', { title: 'faq', currentYear: currentYear });
        }
    },
    {
        method: 'GET',
        path: '/code',
        handler: (req, res) => {
            res.view('code', { title: 'code of conduct', currentYear: currentYear });
        }
    },
    {
        method: 'GET',
        path: '/press',
        handler: (req, res) => {
            res.view('press', { title: 'press', currentYear: currentYear });
        }
    },
    {
        method: 'GET',
        path: '/twitter',
        handler: (req, res) => {
            res.redirect('https://twitter.com/hacksi');
        }
    },
    {
        method: 'GET',
        path: '/github',
        handler: (req, res) => {
            res.redirect('https://github.com/HackSI');
        }
    },
    {
        method: 'GET',
        path: '/facebook',
        handler: (req, res) => {
            res.redirect('https://facebook.com/HackSouthernIllinois');
        }
    },
    {
        method: 'GET',
        path: '/google',
        handler: (req, res) => {
            res.redirect('https://plus.google.com/communities/108109882393061170322');
        }
    },
    {
        method: 'GET',
        path: '/flickr',
        handler: (req, res) => {
            res.redirect('https://flickr.com/groups/hacksi/');
        }
    },
    {
        method: 'GET',
        path: '/live',
        handler: (req, res) => {
            res.view('live', { title: 'live', currentYear: currentYear });
        }
    },
    {
        method: 'GET',
        path: '/ssg',
        handler: (req, res) => {
            res.view('ssg', { title: 'ssg', currentYear: currentYear });
        }
    },
    {
        method: 'GET',
        path: '/{path*}',
        handler: (req, res) => {
            //console.log(req);
            res.redirect('/');
        }
    },
    {
        method: 'GET',
        path: '/tracker',
        handler: (req, res) => {
            res.redirect('https://goo.gl/forms/kMBP91WEGUZ4mCtK2');
        }
    },
    {
        method: 'GET',
        path: '/timer',
        handler: (req, res) => {
            let duration = req.query.duration || 120;
            const min = req.query.minutes;
            const sec = req.query.seconds;

            if (min || sec) {
                duration = 0;
                if (min) {
                    duration = Number(min) * 60;
                }
                if (sec) {
                    duration += Number(sec);
                }
            }

            res.view('timer', { title: 'timer', duration: duration, currentYear: currentYear });
        }
    },
    {
        method: 'GET',
        path: '/survey',
        handler: (req, res) => {
            res.redirect('https://goo.gl/forms/g6tEwCpMVOPoXmEI2');
        }
    },
    {
        method: 'GET',
        path: '/steam',
        handler: (req, res) => {
            res.redirect('https://support.steampowered.com/kb_article.php?ref=5414-TFBN-1352');
        }
    },
    {
        method: 'GET',
        path: '/.well-known/acme-challenge/pDgBc5MrDuMqbg62mufheKjjrgOqc1NMemRDgmAkuD0',
        handler: (req, res) => {
            res('pDgBc5MrDuMqbg62mufheKjjrgOqc1NMemRDgmAkuD0.IEmiz9fyhGlb2DVtkj-3U3PXjdYfB3rvnyzPNopUCh4');
        }
    },
    {
        method: "POST",
        path: "/api/pi",
        handler: require('./api').post,
        config: {
            validate: require('./api').validate
        }
    },
    {
        method: "DELETE",
        path: "/api/pi",
        handler: require('./api').delete,
        config: {
            validate: require('./api').deleteValidate
        }
    },
    {
        method: "GET",
        path: "/api/pi",
        handler: require('./api').get
    }
];
