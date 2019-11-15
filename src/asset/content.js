import {
    abcHero,
    houseofjoyHero,
    photographyHero,
} from './images';

export const heroContent = {
    heroHello: 'Hello, my name is Joy',
    heroText: 'Hello. I used to design things in the land of clogs and windmills. Now I like building the internet in the capital of our green and pleasant land.',
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
            'I started with wireframing in Figma, going for a compact approach by having the About and Resume pages lay on top of the homepage. These two pages have the same width as most common tablets do (give or take 768 pixels wide), which allowed for more consistency compared to, say, using viewport width. For mobile, I opted to have the navigation at the bottom, opposed to using a \'classic\' hamburger menu which you see on many other websites. The reason behind this choice is that, quite frankly, I think the hamburger menu is not user-friendly, specially on mobile. The menu is not visible, it\'s not on the screen, unless you perform an action. Not to mention the fact that most people use them at the top of the screen, which a lot of users, including myself, can\'t reach with one hand.',
            'For the design I went with a minimal yet bold approach with a focus on large coloured visuals. ',
            'Snackie'],
        projectTools: ['React.js', 'Styled Components', 'JavaScript', 'Github', 'Figma']
    },
    {
        path: '/abc',
        title: 'Alexandra Bradley Consulting',
        desc: 'I recently created a website for Alexandra Bradley, a London based consultant for children.',
        source: 'http://alexandrabradleyconsulting.com',
        heroImage: abcHero,
        heroCopy: 'Alexandra Bradley is an Early Years Education specalist based in London with a decade of experience teaching in some of the most prestigious educational establishments in the Central London area. Known for her honest and supportive mentoring role to parents and with her ethos of "happiness, safety and wellbeing of the child is paramount" she is perfectly placed to guide and help you navigate your child\'s early years.',
        bodyCopy: [
            'To enhance the digital presence for her brand, Alexandra Bradley Consulting, she requested a clean, simple and accessible website.',
            'placeholder derp derp derp'
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
        heroCopy: 'x',
        bodyCopy: ['x', 'x'],
        projectTools: [
            'Nikon D3200',
            'Nikkor 35mm 1.8',
            'Adobe Lightroom']
    },

]
