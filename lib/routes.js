'use strict';
const fs = require('fs');
const path = require('path');
const currentYear = (new Date()).getFullYear();

const members = require('./board.json');
Object.keys(members).forEach(i => {return members[i].id = i;});

const banners = fs.readdirSync(path.join(__dirname, '../static/img/banner')).map((item) => {
    return `/static/img/banner/${item}`;
});

const getBanners = () => {
    const items = [].concat(banners).sort(() => {return Math.random() * 2 - 1;});
    items.forEach((file, key) => {
        const show = key === 0 ? ' show' : '';
        items[key] = `<img src="${file}" class="banner-img${show}">`;
    });
    return items.join('\n');
};

module.exports = [
    {
        method: 'GET',
        path: '/favicon.ico',
        handler: {
            file: './static/favicon.ico'
        },
        config: {
            cache: {
                expiresIn: 86400000,
                privacy: 'public'
            }
        }
    },
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
            res.view('home', { title: 'home', currentYear: currentYear, banners: getBanners() });
        }
    },
    {
        method: 'GET',
        path: '/register',
        handler: (req, res) => {
            res.redirect('https://hacksi2017.eventbrite.com');
        }
    },
    {
        method: 'GET',
        path: '/register/forms',
        handler: (req, res) => {
            res.view('register', { title: 'register', currentYear: currentYear, banners: getBanners() });
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
            res.redirect('https://hacksi2017.eventbrite.com');
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
            res.view('about', { title: 'about', currentYear: currentYear, banners: getBanners() });
        }
    },
    {
        method: 'GET',
        path: '/board',
        handler: (req, res) => {
            const board = [];
            Object.keys(members).forEach(i => {
                board.push(members[i]);
            });
            board.splice(board.length - 1, 0, {}); //Insert empty spot to skip a grid
            res.view('board', { title: 'foundation board', currentYear: currentYear, members: board, banners: getBanners() });
        }
    },
    {
        method: 'GET',
        path: '/board/{user}',
        handler: (req, res) => {
            const u = req.params.user;
            if (!members[u]) {
                return res.redirect('/board');
            }
            if (!members[u].bio) {
                members[u].bio = fs.readFileSync(path.join(__dirname, `../views/board-${u}.handlebars`), 'utf8');
            }
            res.view(`board-profile`, { title: 'foundation board', currentYear: currentYear, member: members[u], bio: members[u].bio, banners: getBanners() });
        }
    },
    {
        method: 'GET',
        path: '/sponsors',
        handler: (req, res) => {
            res.view('sponsors', { title: 'sponsors', currentYear: currentYear, banners: getBanners() });
        }
    },
    {
        method: 'GET',
        path: '/sponsors/levels',
        handler: (req, res) => {
            res.view('sponsors-levels', { title: 'sponsors', currentYear: currentYear, banners: getBanners() });
        }
    },
    {
        method: 'GET',
        path: '/sponsors/letter',
        handler: (req, res) => {
            res.view('sponsor-letter', { title: 'sponsors', currentYear: currentYear, banners: getBanners() });
        }
    },
    {
        method: 'GET',
        path: '/sponsors/letter/print', 
        handler: (req, res) => {
            res.view('letter', { title: 'sponsors', currentYear: currentYear, banners: getBanners() }, { layout: 'print' });
        }
    },
    {
        method: 'GET',
        path: '/contact',
        handler: (req, res) => {
            res.view('contact', { title: 'contact', currentYear: currentYear, banners: getBanners() });
        }
    },
    {
        method: 'GET',
        path: '/schedule',
        handler: (req, res) => {
            res.view('schedule', { title: 'schedule', currentYear: currentYear, banners: getBanners() });
        }
    },
    {
        method: 'GET',
        path: '/faq',
        handler: (req, res) => {
            res.view('faq', { title: 'faq', currentYear: currentYear, banners: getBanners() });
        }
    },
    {
        method: 'GET',
        path: '/code',
        handler: (req, res) => {
            res.view('code', { title: 'code of conduct', currentYear: currentYear, banners: getBanners() });
        }
    },
    {
        method: 'GET',
        path: '/press',
        handler: (req, res) => {
            fs.readFile('./views/data/news.json', (err, data) => {
                var content = JSON.parse(data);
                res.view('press', content);
            });
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
            res.redirect('https://www.flickr.com/groups/hacksi/pool/');
        }
    },
    {
        method: 'GET',
        path: '/live',
        handler: (req, res) => {
            res.view('live', { title: 'live', currentYear: currentYear, banners: getBanners() });
        }
    },
    {
        method: 'GET',
        path: '/ssg',
        handler: (req, res) => {
            res.view('ssg', { title: 'ssg', currentYear: currentYear, banners: getBanners() });
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
            res.redirect('https://goo.gl/forms/gcCYNx7glsAX8Znb2');
        }
    },
    {
        method: 'GET',
        path: '/timer',
        handler: (req, res) => {
            let duration = req.query.duration || 120;
            const min = req.query.minutes;
            const sec = req.query.seconds;
            
            /*istanbul ignore next*/
            if (min || sec) {
                duration = 0;
                if (min) {
                    duration = Number(min) * 60;
                }
                if (sec) {
                    duration += Number(sec);
                }
            }

            res.view('timer', { title: 'timer', duration: duration, currentYear: currentYear, banners: getBanners() });
        }
    },
    {
        method: 'GET',
        path: '/survey',
        handler: (req, res) => {
            res.redirect('https://www.surveymonkey.com/r/6Z2K3SG');
        }
    },
    {
        method: 'GET',
        path: '/donate',
        handler: (req, res) => {
            res.redirect('https://paypal.me/HackSIOrg');
        }
    },
    {
        method: 'GET',
        path: '/shop',
        handler: (req, res) => {
            res.redirect('https://hacksi.threadless.com/');
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
    },
    {
        method: "GET",
        path: "/hashtag",
        handler: (req, res) => {
            res.redirect('https://twitter.com/search?f=tweets&vertical=default&q=%23HackSI&src=typd');
        }
    },
    {
        method: "GET",
        path: "/wallpaper",
        handler: (req, res) => {
            res.view('wallpaper', { title: 'wallpaper' });
        }
    },
    {
        method: "GET",
        path: "/machines",
        handler: (req, res) => {
            const list = require('./api').list;
            list((items) => {
                items.forEach((o) => {
                    o.stamp = (new Date(o.stamp)).toISOString();
                });
                res.view('machines', { title: 'known machines', machines: items });
            });
        }
    },
    {
        method: "GET",
        path: "/present",
        handler: (req, res) => {
            res.redirect('https://meet.google.com/qre-spka-fcd');
        }
    }
];
