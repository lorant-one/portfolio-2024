const baseURL = 'lorant.one'

const routes = {
    '/':        true,
    '/about':   true,
    '/work':    true,
    '/blog':    true,
    '/gallery': true,
    '/store':   true,
    '/invite':  true,
}

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {

}

const style = {
    theme:       'dark',         // dark | light
    neutral:     'gray',         // sand | gray | slate
    brand:       'blue',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'indigo',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',     // color | contrast
    solidStyle:  'flat',         // flat | plastic
    border:      'playful',      // rounded | playful | conservative
    surface:     'translucent',  // filled | translucent
    transition:  'all'           // all | micro | macro
}

const effects = {
    mask: {
        cursor: true,
        x: 0,
        y: 0,
        radius: 75
    },
    gradient: {
        display: true,
        x: 50,
        y: 0,
        width: 100,
        height: 100,
        tilt: 0,
        colorStart: 'brand-background-strong',
        colorEnd: 'static-transparent',
        opacity: 50
    },
    dots: {
        display: true,
        size: 2,
        color: 'brand-on-background-weak',
        opacity: 20
    },
    lines: {
        display: false,
        color: 'neutral-alpha-weak',
        opacity: 100
    },
    grid: {
        display: false,
        color: 'neutral-alpha-weak',
        opacity: 100,
        width: 'var(--static-space-32)',
        height: 'var(--static-space-32)'
    }
}

const mailchimp = {
    action: 'https://once-ui.us21.list-manage.com/subscribe/post?u=c1a5a210340eb6c7bff33b2ba&amp;id=0462d244aa&amp;f_id=00cd5fe1f0',
    effects: {
        mask: {
            cursor: false,
            x: 100,
            y: 0,
            radius: 100
        },
        gradient: {
            display: true,
            x: 100,
            y: 50,
            width: 100,
            height: 100,
            tilt: -45,
            colorStart: 'accent-background-strong',
            colorEnd: 'static-transparent',
            opacity: 100
        },
        dots: {
            display: false,
            size: 24,
            color: 'brand-on-background-weak',
            opacity: 100
        },
        lines: {
            display: false,
            color: 'neutral-alpha-weak',
            opacity: 100
        },
        grid: {
            display: true,
            color: 'neutral-alpha-weak',
            opacity: 100,
            width: 'var(--static-space-32)',
            height: 'var(--static-space-32)'
        }
    }
}

const display = {
    location: true,
    time:     true
}

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL };