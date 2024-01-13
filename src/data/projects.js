import ASURTIMG from "../assets/asurtit.png";
import BLC from "../assets/blc.png";
import CODEGEIST from "../assets/code-geist.png";
import LEAP2FUTURE from "../assets/leap2future.png";
import LIFEAUDIO from "../assets/life-audio-productions.png";
import PEOPLECOUNTER from "../assets/people-counter.jpeg";
import CYPOD from "../assets/cypod.png";
import ESTAFSAR from "../assets/estafsar.svg";
import YALASAFER from "../assets/yalasafer.jpeg";
import React from "react";
import AngularIcon from "../assets/icons/icons8-angular";
import FlaskIcon from "../assets/icons/icons8-flask";
import DjangoIcon from "../assets/icons/icons8-django";
import NodeIcon from "../assets/icons/icons8-nodejs";
import ReactIcon from "../assets/icons/icons8-react";
import TensorFlowIcon from "../assets/icons/icons8-tensorflow";
import JavascriptIcon from "../assets/icons/icons8-javascript";
import GoIcon from "../assets/icons/golang-1";
import GolangLogo from "../assets/golang.jpg";

export const PROJECTS = [
    {
        title: "Smart Account",
        description:"A budget planning app written in golang and reactJs",
        technologies: [
            {
                title: "GoLang",
                link: "https://go.dev/",
                icon: <GoIcon />
            },
            {
                title: "ReactJs",
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                icon: <ReactIcon />
            },
            // {
            //     title: "Grafana",
            //     link: "https://grafana.com/",
            //     icon: <GrafanaIcon />
            // }
        ],
        image: GolangLogo,
        link1: 'https://gist.github.com/peternabil/eb68d56599303f2f86aaec93f189db54'
    },
    {
        title: "People Counter",
        description: `Using YOLO(you only look once) algorithm i build a web app that counts the number of people in a given images and returns all object detection results on the image`,
        technologies:[
            {
                title: "flask",
                link: "https://flask.palletsprojects.com/en/3.0.x/",
                icon: <FlaskIcon />
            },
            {
                title: "tensorflow",
                link: "https://www.tensorflow.org/",
                icon: <TensorFlowIcon />,
            },
        ],
        image: PEOPLECOUNTER,
        link1: "https://github.com/peternabil/yolov3-tf-api", 
        link2: "",
    },
    {
        title: "Yala Safer From Home (Let's travel from home)",
        description: `I built a prototype for a machine learning image segmentation project in javascript using ML5.js and P5.js in a day. `,
        technologies: [
            {
                title: "javascript",
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                icon: <JavascriptIcon />
            },
            {
                title: "ml5 & p5.js",
                link: "https://ml5js.org/",
                icon: <JavascriptIcon />
            },

        ],
        image: YALASAFER,
        link1: "https://github.com/peternabil/yalasaferfromhome", 
        link2: "https://peternabil.github.io/yalasaferfromhome/",
    },
    {
        title: "Life audio Production",
        description: `In two weeks me & my team gathered the requirements from our client, built & deployed a website to show case the work of an Egyptian recording studio. `,
        technologies: [
            {
                title: "javascript/html/css",
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                icon: <JavascriptIcon />
            },
        ],
        image: LIFEAUDIO,
        link2: "https://lifeaudioproductions.com/", 
        link1: "",
    }
]

export const JOBS = [
    {
        title: "Full-Stack Software Engineer at Cypod technologies",
        titleLink:'https://cypod.com/',
        duration: "January 2023 - Present",
        description: `I manage and deliver different applications to cypod's end-to-end Iot solutions.
        adding features to legacy code as well as building a new dashboard and micro services
        for our gps trackers.`,
        technologies:[
            {
                title: "GoLang",
                link: "https://go.dev/",
                icon: <GoIcon />
            },
            {
                title: "flask",
                link: "https://flask.palletsprojects.com/en/3.0.x/",
                icon: <FlaskIcon />
            },
            {
                title: "javascript/html/css",
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                icon: <JavascriptIcon />
            },
            {
                title: "ReactJs",
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                icon: <ReactIcon />
            },
            {
                title: "NodeJs",
                link: "https://nodejs.org",
                icon: <NodeIcon />
            },
        ],
        type: "Current Position",
        image: CYPOD,
    },
    {
        title: "Junior Front-end developer at Estafsar",
        titleLink: "https://estafsar.com/",
        duration: "February 2021 – October 2021",
        description: `I delivered key features and packages in the company's different tools using angular
        and agile development methodologies.`,
        technologies:[
            {
                title: "Angular 10",
                link: "https://go.dev/",
                icon: <AngularIcon />
            },
        ],
        type: "Former Position",
        image: ESTAFSAR,
    }
]