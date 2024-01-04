import sweet from "./project_thumbnails/sweetlee.PNG";
import feat from "./project_thumbnails/featcode.PNG";
import mysite from "./project_thumbnails/mysite.PNG";

export const projects = [
  {
    title: "SweetLee Desserts Website",
    dates: "December 10, 2023 - ongoing",
    link: "https://sweetleedesserts.com/",
    link_name: "www.sweetleedesserts.com",
    desc: "The SweetLee Desserts Website is an online platform that provides an immersive experience, allowing users to explore a delectable assortment of treats while emphasizing a visually appealing design. The site demonstrates proficiency in the use of React and frontend technologies to create an engaging, and fully responsive website. This project showcases an amalgamation of design aesthetics and functionality, catering to both the visual and practical aspects of web development.",
    langs: ["React", "Javascript", "HTML", "CSS"],
    feats: {
      "Responsive Design":
        "Leveraging React and CSS, the website boasts a responsive layout, ensuring seamless navigation and optimal viewing across various devices.",
      "Product Showcase":
        "Through carefully designed sections and a visually appealing presentation, the website showcases SweetLee's diverse dessert catalog.",
      "Smooth Navigation":
        "Intuitive navigation menus and user-friendly interfaces facilitate effortless browsing, enabling visitors to explore different dessert categories and discover detailed product information effortlessly.",
      "Ordering System Integration":
        "Integration with an ordering system (if applicable) ensures a streamlined experience for customers, allowing for convenient browsing and purchase of SweetLee's delectable offerings.",
    },
    thumb: sweet,
  },
  {
    title: "My Website",
    dates: "December 14, 2023 - ongoing",
    link: "https://github.com/sskibin22/my-website",
    link_name: "My Website Repository",
    desc: "Voluptate duis et non irure consectetur pariatur laboris laborenisi culpa reprehenderit est ea nulla. Irure proident sunt duis eulaborum sit culpa ut ut cupidatat. Exercitation fugiat veniam animvoluptate ullamco aute nulla sint fugiat id adipisicing doloresint et. Aliqua eu esse qui anim laboris irure. Excepteurconsectetur laboris deserunt in tempor incididunt sint voluptatesint aute voluptate.",
    langs: ["React", "Javascript", "HTML", "CSS"],
    feats: {
      "Responsive Design":
        "Leveraging React and CSS, the website boasts a responsive layout, ensuring seamless navigation and optimal viewing across various devices.",
      "Product Showcase":
        "Through carefully designed sections and a visually appealing presentation, the website showcases SweetLee's diverse dessert catalog, enticing visitors with tantalizing images and descriptions.",
      "Smooth Navigation":
        "Intuitive navigation menus and user-friendly interfaces facilitate effortless browsing, enabling visitors to explore different dessert categories and discover detailed product information effortlessly.",
      "Ordering System Integration":
        "Integration with an ordering system (if applicable) ensures a streamlined experience for customers, allowing for convenient browsing and purchase of SweetLee's delectable offerings.",
    },
    thumb: mysite,
  },
  {
    title: "FeatCode Desktop App",
    dates: "July 31, 2023 - August 11, 2023",
    link: "https://github.com/sskibin22/FeatCode",
    link_name: "FeatCode Repository",
    desc: "FeatCode is a dynamic platform designed to elevate programmers' problem-solving abilities by emulating a realistic interview experience. Through meticulous data management and thoughtful interface design, this project curates a space for programmers to refine their coding prowess through an interactive application resembling LeetCode.",
    langs: ["Python", "SQLite", "Javascript"],
    feats: {
      "Web Scraping LeetCode's Top Interview Problems":
        "A JavaScript script was employed to scrape LeetCode's top interview problem URLs, enabling the collection of pertinent problem data. This data was then organized into a structured file for further processing.",
      "Data Cleaning and Processing with Python":
        "Python scripts were developed to preprocess the acquired data, eliminating duplicate entries and refining the dataset into a cleaner, more usable format.",
      "PROBLEMS Database Creation with SQLite and Python":
      "Leveraging SQLite and Python, a PROBLEMS database was initialized and populated using the cleaned dataset, ensuring a well-organized repository of coding problems.",
      "Front-End Development with Python's Tkinter":
        "The GUI development was accomplished using Python's tkinter library, creating an intuitive and user-friendly interface. Custom layouts were designed, comprising a main window and problem window, enhancing the user experience.",
    },
    thumb: feat,
  },
];
