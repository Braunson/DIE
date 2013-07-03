# DIE IE! DIE!

## Rationale
**Internet Explorer** has devoured lifetimes of developer [person-hours](https://en.wikipedia.org/wiki/Man-hour).

It is time for humanity to move on. This tiny library can help.

[Try it here.](https://ryanatkn.github.com/DIE)

## Usage
Include DIE.js and call `window.DIE(n)`, where `n` is the minimum version of IE you wish to support.
If IE is detected below `n`, this library gives friendly upgrade instructions to the user.
`window.DIE` exposes its functions so it can be used any way you like.

    DIE(minIEVersionSupported) // returns DIE.isDead and calls DIE.killItWithIre() if dead
    DIE.getIEVersion()
    DIE.killItWithIre() // displays message to unsupported users

## We :heart: the web
DIE.js is a project of respect and love, not of snark and hate.
We the web's developers wish to deliver a modern web experience that delights 
and empowers its users, but reliance on obsolete tools is hindering innovation.
Let's focus on the progress that helps everyone win.

## License
MIT