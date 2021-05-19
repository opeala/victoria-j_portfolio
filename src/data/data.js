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
      }
    ]
  },
  {
    id: 2,
    name: "about",
    content : [
      {
        // html: 'about html',
      }
    ]
  },
  {
    id: 3,
    name: "gallery",
    content : [
      {
        // html: 'gallery html',
      }
    ]
  },
  {
    id: 4,
    name: "contact",
    content : [
      {
        // html: 'contact html',
      }
    ]
  },
]


const MOCK_DATA = {
  HEADER,
  NAVBAR_DATA,
  CONTENT_DATA,
};
export default MOCK_DATA;
