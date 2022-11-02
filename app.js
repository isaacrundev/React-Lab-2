const socialIcons = [
  {
    icon: "instagram",
    title: "Instagram",
  },
  {
    icon: "facebook-f",
    title: "Facbook",
  },
  {
    icon: "twitter",
    title: "Twitter",
  },
  {
    icon: "linkedin",
    title: "LinkedIn",
  },
  {
    icon: "youtube",
    title: "YouTube",
  },
  {
    icon: "github",
    title: "Github",
  },
];

const pics = (
  <div className="row">
    <SocialMediaComponents
      iconPic={socialIcons[0].icon}
      titleText={socialIcons[0].title}
    />
    <SocialMediaComponents
      iconPic={socialIcons[1].icon}
      titleText={socialIcons[1].title}
    />
    <SocialMediaComponents
      iconPic={socialIcons[2].icon}
      titleText={socialIcons[2].title}
    />
    <SocialMediaComponents
      iconPic={socialIcons[3].icon}
      titleText={socialIcons[3].title}
    />
    <SocialMediaComponents
      iconPic={socialIcons[4].icon}
      titleText={socialIcons[4].title}
    />
  </div>
);

ReactDOM.render(pics, document.getElementById("root"));
