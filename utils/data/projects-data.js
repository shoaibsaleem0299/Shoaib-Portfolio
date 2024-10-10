import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Scan and GO',
        description: "Developed with Flutter featuring user authentication, self-checkout by scanning product barcodes, adding items to a virtual cart, and completing purchases via Stripe. Real-time communication with hardware is integrated using WebSocket for seamless interaction during checkout.",
        tools: ['Express', 'MongoDB', 'Stripe', 'Node', 'Flutter'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Yoo Local',
        description: 'Developed with Flutter, designed to offer a seamless shopping experience, where users can browse products, add items to their cart, and complete secure purchases. The app includes standard e-commerce functionalities such as user authentication, product categories, order tracking, and a streamlined checkout process.',
        tools: ['Express', 'MongoDB', 'Stripe', 'Node', 'Flutter'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Awesome E-commerce',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Tailwind', 'Stripe', 'Express',  'MongoDB', 'Node'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },