import texts from '../texts'

import anjaImg from '../assets/images/Team/anja.webp'
import milosImg from '../assets/images/Team/milos.webp'

import imgBlog1 from '../assets/images/Blog/Diversity.jpeg'
import imgBlog2 from "../assets/images/Blog/Odbojka.jpeg";

const en = texts.en.translation

const data = {
  en: [
    {
      title: en.title_who,
      texts: [en.who_text1, en.who_text2, en.who_text3, en.who_text4]
    },
    {
      title: en.title_team,
      images: [anjaImg, milosImg],
      texts: [
        en.team1_text1,
        en.team1_text2,
        en.team1_text3,
        en.who_text4,
        en.team1_text5,

        en.team_contact1,
        en.team2_text1,
        en.team2_text2,
        en.team_contact2
      ]
    },

    {
      title: en.title_vm,
      texts: [en.vm_text1, en.vm_text2, en.vm_text3]
    },
    {
      title: en.chemicals.title,
      texts: [
        en.chemicals.text1,
        en.chemicals.text2,
        en.chemicals.text3,
        en.chemicals.text4,
        en.chemicals.text5,
        en.chemicals.text6,
        en.chemicals.text7
      ]
    },
    {
      title: en.plicy.title,
      texts: [
        en.plicy.sub1,
        en.plicy.text1,
        en.plicy.text2,
        en.plicy.text3.text,
        en.plicy.text3.textI,
        en.plicy.text4,
        en.plicy.sub2,
        en.plicy.text5,
        en.plicy.sub3,
        en.plicy.text6,
        en.plicy.text6ul.li1,
        en.plicy.text6ul.li2,
        en.plicy.text6ul.li3,
        en.plicy.text6ul.li4,
        en.plicy.text7,
        en.plicy.text8,
        en.plicy.text9,
        en.plicy.text9ul.li1,
        en.plicy.text9ul.li2,
        en.plicy.text9ul.li3
      ]
    },
    {
      title: en.blog.title,
      images: [imgBlog1, imgBlog2],
      texts: [en.blog.text1, en.blog.blog1.title, en.blog.blog1.text]
    }
  ]
};

export default data;