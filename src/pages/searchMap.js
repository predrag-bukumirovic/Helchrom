import texts from '../texts'

const en = texts.en.translation

const data = {
  en: [
    {
      title: en.title_who,
      texts: [en.who_text1, en.who_text2, en.who_text3, en.who_text4]
    },
    {
      title: en.title_team,
      texts: [
        en.team1_text1,
        en.team1_text2,
        en.team1_text3,
        en.who_text4,
        en.team1_text5,
      
        en.team_contact1,
        en.team2_text1,
        en.team2_text2,
        en.team_contact2,
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
    }
  ]
};

export default data;