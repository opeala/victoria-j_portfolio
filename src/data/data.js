/* eslint-disable prettier/prettier */
const HEADER = "Victoria Johnston";

const NAVBAR_DATA = [
  {
    id: 1,
    url: "/",
    label: "Home",
  },
  {
    id: 2,
    url: "/about",
    label: "About",
  },
  {
    id: 3,
    url: "/gallery",
    label: "Gallery",
  },
  {
    id: 4,
    url: "/contact",
    label: "Contact",
  },
];

const CONTENT_DATA = [
  {
    id: 1,
    name: "home",
    content : [
      {
        youtubeVideo: 'https://www.youtube.com/embed/1eC8j9v8RVI',
        youtubePlaceholder: 'https://img.youtube.com/vi/1eC8j9v8RVI/hqdefault.jpg',
        leftImage: './media/images/webgirl/webgirl_crouching.png',
        rightImage: './media/images/webgirl/webgirlhips.png',
      }
    ]
  },
  {
    id: 2,
    name: "about",
    content : [
      {
        // html: 'about html',
        copy: [
          {
            title: 'About',
            paragraphs: [
              'From as far back as I can remember I have been fascinated by cartoons. The art of taking a series of still images and tricking your brain into believing they are living, breathing, moving, talking beings was nothing short of magic to me growing up.',
              'Specialising in 2D animation in particular, with aspirations of working for a big studio, I have decided to embark on my own journey into the magical realm of animation and I invite you along with me through the pages of this website. Feel free to browse through some of the still images I have created and indulge me a little by sampling some of my own brand of magic.',
              'I am always interested in working with likeminded people and welcome the opportunity to connect via Facebook, Twitter, or LinkedIn. Alternatively, you are always welcome to email me directly and I shall endeavour to get back to you as soon as I can.',
              'I hope you enjoy your jaunt around my little corner of the web.',
              '- Victoria',
            ]
          }
        ],
        leftImage: './media/images/webgirl/webgirl_sitting.png',
        rightImage: './media/images/webgirl/webgirl_arms_folded_corrections2.png',
      }
    ]
  },
  {
    id: 3,
    name: "gallery",
    content : [
      {
        // html: 'gallery html',
        gallery: [
          {
            thumbnail: './media/images/gallery/thumbnails/gallery-50s-thumb.png',
            fullImage: './media/images/gallery/gallery-50s.png',
            alt: 'drawing of woman in 50s style clothing',
          },
          {
            thumbnail: './media/images/gallery/thumbnails/gallery-alice-thumb.png',
            fullImage: './media/images/gallery/gallery-alice.png',
            alt: 'alice in wonderland drawing',
          },
          {
            thumbnail: './media/images/gallery/thumbnails/gallery-ballet1-thumb.png',
            fullImage: './media/images/gallery/gallery-ballet1.png',
            alt: 'ballerina pose drawing',
          },
          {
            thumbnail: './media/images/gallery/thumbnails/gallery-ballet2-thumb.png',
            fullImage: './media/images/gallery/gallery-ballet2.png',
            alt: 'ballerina pose drawing',
          },
          {
            thumbnail: './media/images/gallery/thumbnails/gallery-coral-thumb.png',
            fullImage: './media/images/gallery/gallery-coral.png',
            alt: 'mermaid drawing',
          },
          {
            thumbnail: './media/images/gallery/thumbnails/gallery-dig-thumb.png',
            fullImage: './media/images/gallery/gallery-dig.png',
            alt: 'drawing of digger scooping some soil',
          },
          {
            thumbnail: './media/images/gallery/thumbnails/gallery-face-thumb.png',
            fullImage: './media/images/gallery/gallery-face.png',
            alt: 'drawing of a womans face',
          },
          {
            thumbnail: './media/images/gallery/thumbnails/gallery-fish-thumb.png',
            fullImage: './media/images/gallery/gallery-fish.png',
            alt: 'drawing of a fish',
          },
          {
            thumbnail: './media/images/gallery/thumbnails/gallery-halloween-thumb.png',
            fullImage: './media/images/gallery/gallery-halloween.png',
            alt: 'drawing of witch sat on a pumpkin',
          },
          {
            thumbnail: './media/images/gallery/thumbnails/gallery-knives-thumb.png',
            fullImage: './media/images/gallery/gallery-knives.png',
            alt: 'drawing of a woman brandishing knives',
          },
          {
            thumbnail: './media/images/gallery/thumbnails/gallery-laura-thumb.png',
            fullImage: './media/images/gallery/gallery-laura.png',
            alt: 'drawing of woman lying down',
          },
          {
            thumbnail: './media/images/gallery/thumbnails/gallery-oak-thumb.png',
            fullImage: './media/images/gallery/gallery-oak.png',
            alt: 'drawing of witch sat in tree',
          },
          {
            thumbnail: './media/images/gallery/thumbnails/gallery-rocket-thumb.png',
            fullImage: './media/images/gallery/gallery-rocket.png',
            alt: 'drawing of woman sat on a rocket',
          },
          {
            thumbnail: './media/images/gallery/thumbnails/gallery-shoes-thumb.png',
            fullImage: './media/images/gallery/gallery-shoes.png',
            alt: 'drawing of woman wearing only high heels',
          },
          {
            thumbnail: './media/images/gallery/thumbnails/gallery-snow-thumb.png',
            fullImage: './media/images/gallery/gallery-snow.png',
            alt: 'drawing of woman enjoying snow',
          },
          {
            thumbnail: './media/images/gallery/thumbnails/gallery-throw-thumb.png',
            fullImage: './media/images/gallery/gallery-throw.png',
            alt: 'drawing of person throwing a dart',
          },
          {
            thumbnail: './media/images/gallery/thumbnails/gallery-wil-e-thumb.png',
            fullImage: './media/images/gallery/gallery-wil-e.png',
            alt: 'drawing of famous cartoon coyote',
          },
        ],
        leftImage: './media/images/webgirl/web_girl_kick.png',
        rightImage: './media/images/webgirl/webgirl_kungfu.png',
      }
    ]
  },
  {
    id: 4,
    name: "contact",
    content : [
      {
        // html: 'contact html',
        copy: [
          {
            title: 'Contact',
            paragraphs: [
              'If you like my work and want to know more, please contact me via my email address <u>vajohnston @ yahoo . com</u> or at one of the social links featured below.',
            ]
          }
        ],
        leftImage: './media/images/webgirl/webgirl_umbrella.png',
        rightImage: './media/images/webgirl/webgirl_handstand.png',
      }
    ]
  },
]

const FOOTER_DATA = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/victoria-johnston-237259185/",
    label: "Linkedin",
    logo: "./media/images/icons/linkedin-icon.svg"
  },
  {
    id: 2,
    url: "https://www.youtube.com/channel/UCAhUFjJYvUbfg-olVSU1rAg",
    label: "Youtube",
    logo: "./media/images/icons/youtube-icon.svg",
  },
  {
    id: 3,
    url: "https://twitter.com/Victoriaart81",
    label: "Twitter",
    logo: "./media/images/icons/twitter-icon.svg",
  },
  {
    id: 4,
    url: "https://www.instagram.com/toriart81/",
    label: "Instagram",
    logo: "./media/images/icons/instagram-icon.svg",
  },
  // {
  //   id: 5,
  //   url: "mailto:vajohnston@yahoo.com",
  //   label: "Email Address",
  //   logo: "./media/images/icons/email-icon.svg",
  // },
];

/* 
Supported content types:

youtubeVideo: <embed link for youtube video>,
youtubePlaceholder: <placeholder img url for youtube video eg: 'https://img.youtube.com/vi/1eC8j9v8RVI/hqdefault.jpg'>,
copy: [
  {
    title: <title goes here>,
    paragraphs: [
      'add in as many paragraphs as you like',
      'lorem ipsum',
    ]
  }
],
leftImage: <these are the images that go either side of the content on desktop>,
rightImage: <these are the images that go either side of the content on desktop>,

*/


const MOCK_DATA = {
  HEADER,
  NAVBAR_DATA,
  CONTENT_DATA,
  FOOTER_DATA,
};
export default MOCK_DATA;
