import {
    abcHero,
    houseofjoyHero,
    photographyHero,
    Ber1,
    Ber2,
    Ist1,
    Ist2,
    Nor1,
    Nor2,
    Nat1,
    Nat2
} from './images';

export const heroContent = {
    heroText: 'Hello! I used to colour boxes in the land of clogs and windmills. Now I make boxes from scratch in the green and pleasant land.'
}

export const projects = [
    {
        path: '/houseofjoy',
        title: 'House of Joy',
        desc: undefined,
        source: undefined,
        heroImage: houseofjoyHero,
        heroCopy: 'To practice working with React.js and Styled Components, I redesigned and rewrote my portfolio. This project also allowed me to figure out version control on Github through the command line.',
        bodyCopy: [
            'Wireframing was done in Figma, going for a mobile-centric design. I went for a compact approach by having the About and Resume pages lay on top of the homepage. These two pages have the same width as most common tablets do (give or take 768 pixels wide), which allowed for more consistency compared to, say, using viewport width.',
            'I opted to have the navigation at the bottom for smartphones and at the top for other devices, opposed to using a \'classic\' hamburger menu which you see on many other websites. The reason behind this choice is that, quite frankly, I think the hamburger menu is not user-friendly, specially on mobile. The menu is not visible, it\'s not on the screen, unless you perform an action. Not to mention the fact that most people use them at the top of the screen, which a lot of users, including myself, can\'t reach with one hand.',
            'I went with a minimal and bold approach with a focus on colour. The original idea, which can be found in the earlier designs, was to go with full-size photographs instead of the coloured background. Performance wise this wouldn\'t have been the best, and I grew to like the gradient I created.',
            'The website is written using React.js and Styled Components / Styled System. The components in the library were created with reusability and minimal clutter in mind. Links to the several internal pages were created using React Router and responsiveness across platforms was achieved by using breakpoints.'
        ],
        projectTools: [
            'React.js',
            'JavaScript',
            'Styled Components',
            'Github',
            'Figma'
        ]
    },
    {
        path: '/abc',
        title: 'Alexandra Bradley Consulting',
        desc: 'I recently created a website for Alexandra Bradley, a London based consultant for children.',
        source: 'http://alexandrabradleyconsulting.com',
        heroImage: abcHero,
        heroCopy: 'Alexandra Bradley is an Early Years Education specalist based in London with a decade of experience teaching in some of the most prestigious educational establishments in the Central London area. Known for her honest and supportive mentoring role to parents and with her ethos of "happiness, safety and wellbeing of the child is paramount" she is perfectly placed to guide and help you navigate your child\'s early years.',
        bodyCopy: [
            'To enhance the digital presence for her brand, Alexandra Bradley Consulting, she requested a clean, simple and accessible website. Most of the design could be realized through basic html and css, JavaScript was used to create the hamburger menu and the accordeon component on the Services page.',
            'Alexandra loved the website and colleagues of Jackie Robson (Red Ventures, codereviewer) were well impressed by the fact I wrote clean and semantic code a week after picking development up. The positive feedback and my drive to keep improving my work and myself have had a massive impact on ability to pick up new things.',
            'Designs were provided by Leonardo Zem of Red Ventures.'
        ],
        projectTools: [
            'HTML & CSS',
            'JavaScript',
            'Figma',
            'Github']
    },
    {
        path: '/photography',
        title: 'Photography',
        desc: 'Photography is sort of my second love, I try to drag my camera with me wherever I go.',
        source: undefined,
        heroImage: photographyHero,
        heroCopy: 'I first played with cameras, both film and photo, when I was around 5 years old. My grandfather had a lot of them and always let me fiddle around with the older ones. It led to me purchasing my own DSLR with a 35mm f/1.8 prime lens years later.',
        bodyCopy: [
            'Wherever I go, I try to take my camera with me. I chose the 35mm lens because of two reasons. First, it reminds me of older analogue cameras, which more often than not used a lens with the same focal length. Secondly, this lens is in my opinion one of the most versatile lenses around, even more so when used when travelling. It allows for lovely experimenting with depth of field, it captures (almost) exactly what your eye sees, it is superb in lowlight situations and it is small and lightweight.',
        ],
        projectTools: [
            'Eyes',
            'Nikon D3200',
            'Nikkor 35mm f/1.8',
            'Adobe Lightroom'
        ],
        photos: [
            Ber1,
            Ber2,
            Ist1,
            Ist2,
            Nor1,
            Nor2,
            Nat1,
            Nat2
        ],

    },

]
