import { Instragram,Linkedin,Twitter,Whatsapp } from "../../Components/SocialMediaIcons/SocialMediaIcons"

    const ClassValue = "object-contain w-full h-full"

export const SocialData =[
    {
        Name: "Whatsapp",
        Icon: <Whatsapp className={ClassValue} />,
        Link: "https://wa.me/7010174548"
    },
    {
        Name: "Linkedin",
        Icon: <Linkedin className={ClassValue} />,
        Link: "https://www.linkedin.com/in/olalekan-esanola-0ba69a1b7/"
    },
    {
        Name: "Twitter",
        Icon: <Twitter className={ClassValue} />,
        Link: "https://www.linkedin.com/in/olalekan-esanola-0ba69a1b7/"
    },
    {
        Name: "Instagram",
        Icon: <Instragram className={ClassValue} />,
        Link: "https://www.linkedin.com/in/olalekan-esanola-0ba69a1b7/"
    }
]