import { INTELTS_GITHUB_URL, INTELTS__LINK_URL, MYCHATAPP_GITHUB_URL, MYCHATAPP_LINK_URL } from "../config/project_url";
import img_src_chatapp from '../assets/images/chatapp.png'
import img_src_intelts from '../assets/images/intelts.png'

export const PROJECTS = [
    {
        name: 'My Chat App',
        description: [
            'This is the app for real-time chatting.',
            'It allow multiple users to communicate in a group.'
        ],
        techContents: [
            'ASP.NET',
            'Next.js',
            'Material UI',
            'SignalR'
        ],
        link_github: MYCHATAPP_GITHUB_URL,
        link_site: MYCHATAPP_LINK_URL,
        img_src: img_src_chatapp,
    },
    {
        name: 'Intelts',
        description: [
            'This is the app for practicing IELTS and behavioral interview.',
            'It generates questions via Gemini API.'
        ],
        techContents: [
            'Next.js',
            'Tailwind css',
            'Gemini API',
            'Speech Recognition',
            'Prisma',
            'NextAuth.js',
        ],
        link_github: INTELTS_GITHUB_URL,
        link_site: INTELTS__LINK_URL,
        img_src: img_src_intelts,
    },
]