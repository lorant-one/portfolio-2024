const baseURL = 'lorant.one'

const routes = {
    '/':        true,
    '/about':   true,
    '/work':    true,
    '/blog':    true,
    '/gallery': true,
    '/store':   true,
}

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {

}

const effects = {
    gradient: false,
    dots:     false,
    lines:    true,
}

const style = {
    theme:       'dark',         // dark | light
    neutral:     'gray',         // sand | gray | slate
    brand:       'cyan',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'indigo',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',     // color | contrast
    solidStyle:  'flat',         // flat | plastic
    border:      'playful',      // rounded | playful | conservative
    surface:     'translucent',  // filled | translucent
    transition:  'all'           // all | micro | macro
}

const display = {
    location: true,
    time:     true
}

const mailchimp = {
    action: 'https://once-ui.us21.list-manage.com/subscribe/post?u=c1a5a210340eb6c7bff33b2ba&amp;id=0462d244aa&amp;f_id=00cd5fe1f0',
    effects: {
        gradient: true,
        dots:     false,
        lines:    false,
    }
}

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL };