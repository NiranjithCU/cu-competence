import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@db";

export async function GET(request: NextRequest) {
  // Choice levels
  const levels = await prisma.choiceLevel.createMany({
    data: [
      { name: "Level 1", description: "Discover" },
      { name: "Level 2", description: "Explore" },
      { name: "Level 3", description: "Experiment" },
      { name: "Level 4", description: "Dare" },
      { name: "Level 5", description: "Improve" },
      { name: "Level 6", description: "Reinforce" },
      { name: "Level 7", description: "Expand" },
      { name: "Level 8", description: "Transform" },
    ],
  });

  //EntreComp
  const entreComp_1 = await prisma.area.create({
    data: {
      name: "Ideas and Opportunities",
      type: "Entrepreneurial",
      competences: {
        create: [
          {
            name: "Spotting opportunities",
            description: "Identify and seize opportunities to create value by exploring the social, cultural and economic landscape. Identify needs and challenges that need to be met. Establish new connections and bring together scattered elements of the landscape to create opportunities to create value.",
            themes: {
              create: [
                {
                  name: "Identify, create and seize opportunities",
                  choices: {
                    create: [
                      {
                        name: "I can find opportunities to help others.",
                        levelId: 1,
                      },
                      {
                        name: "I can recognise opportunities to create value in my community and surroundings.",
                        levelId: 2,
                      },
                      {
                        name: "I can explain what makes an opportunity to create value.",
                        levelId: 3,
                      },
                      {
                        name: "I can proactively look for opportunities to create value, including out of necessity.",
                        levelId: 4,
                      },
                      {
                        name: "I can describe different analytical approaches to identify entrepreneurial opportunities.",
                        levelId: 5,
                      },
                      {
                        name: "I can use my knowledge and understanding of the context to make opportunities to create value.",
                        levelId: 6,
                      },
                      {
                        name: "I can judge opportunities for creating value and decide whether to follow these up at different levels of the system I am working in (for example, micro, meso or macro).",
                        levelId: 7,
                      },
                      {
                        name: "I can spot and quickly take advantage of an opportunity.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Focus on challenges",
                  choices: {
                    create: [
                      {
                        name: "I can find different examples of challenges that need solutions.",
                        levelId: 1,
                      },
                      {
                        name: "I can recognise challenges in my community and surroundings that I can contribute to solving.",
                        levelId: 2,
                      },
                      {
                        name: "I can identify opportunities to solve problems in alternative ways.",
                        levelId: 3,
                      },
                      {
                        name: "I can redefine the description of a challenge, so that alternative opportunities address it may become apparent.",
                        levelId: 4,
                      },
                      {
                        name: "I can take apart established practices and challenge mainstream thought to create opportunities and look at challenges in different ways.",
                        levelId: 5,
                      },
                      {
                        name: "I can judge the right time to take an opportunity to create value.",
                        levelId: 6,
                      },
                      {
                        name: "I can cluster different opportunities or identify synergies among different opportunities to make the most out of them.",
                        levelId: 7,
                      },
                      {
                        name: "I can define opportunities where I can maintain a competitive advantage.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Uncover needs",
                  choices: {
                    create: [
                      {
                        name: "I can find examples of groups who have benefited from a solution to a given problem.",
                        levelId: 1,
                      },
                      {
                        name: "I can identify needs in my community and surroundings that have not been met.",
                        levelId: 2,
                      },
                      {
                        name: "I can explain that different groups may have different needs.",
                        levelId: 3,
                      },
                      {
                        name: "I can establish which user group, and which needs, I want to tackle through creating value.",
                        levelId: 4,
                      },
                      {
                        name: "I can carry out a needs analysis involving relevant stakeholders.",
                        levelId: 5,
                      },
                      {
                        name: "I can identify challenges related to the contrasting needs and interests of different stakeholders.",
                        levelId: 6,
                      },
                      {
                        name: "I can produce a ‘roadmap’ which matches the needs with the actions needed to deal with them and helps me create value.",
                        levelId: 7,
                      },
                      {
                        name: "I can design projects which aim to anticipate future needs.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Analyse the context",
                  choices: {
                    create: [
                      {
                        name: "I can tell the difference between different areas where value can be created (for example, at home, in the community, in the environment, or in the economy or society).",
                        levelId: 1,
                      },
                      {
                        name: "I can recognise the different roles the public, private and third sectors play in my region or country.",
                        levelId: 2,
                      },
                      {
                        name: "I can tell the difference between contexts for creating value (for example, communities and informal networks, existing organisations, the market).",
                        levelId: 3,
                      },
                      {
                        name: "I can identify my personal, social and professional opportunities for creating value, both in existing organisations or by setting up new ventures.",
                        levelId: 4,
                      },
                      {
                        name: "I can identify the boundaries of the system that are relevant to my (or my team's) value creating activity.",
                        levelId: 5,
                      },
                      {
                        name: "I can analyse an existing value creation activity by looking at it as a whole and identifying opportunities to develop it further.",
                        levelId: 6,
                      },
                      {
                        name: "I can monitor relevant trends and see how they create threats and new opportunities to create value.",
                        levelId: 7,
                      },
                      {
                        name: "I can promote a culture within my organisation that is open to spotting the weak signals of change, leading to new opportunities for creating value.",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Creativity",
            description: "Develop several ideas and opportunities to create value, including better solutions to existing and new challenges. Explore and experiment with innovative approaches. Combine knowledge and resources to achieve valuable effects.",
            themes: {
              create: [
                {
                  name: "Be curious and open",
                  choices: {
                    create: [
                      {
                        name: "I can show that I am curious about new things.",
                        levelId: 1,
                      },
                      {
                        name: "I can explore new ways to make use of existing resources.",
                        levelId: 2,
                      },
                      {
                        name: "I can experiment with my skills and competenceAreas in situations that are new to me.",
                        levelId: 3,
                      },
                      {
                        name: "I can actively search for new solutions that meet my needs.",
                        levelId: 4,
                      },
                      {
                        name: "I can actively search for new solutions that improve the value creating process.",
                        levelId: 5,
                      },
                      {
                        name: "I can combine my understanding of different contexts to transfer knowledge, ideas and solutions across different areas.",
                        levelId: 6,
                      },
                    ],
                  },
                },
                {
                  name: "Develop ideas",
                  choices: {
                    create: [
                      {
                        name: "I can develop ideas that solve problems that are relevant to me and my surroundings.",
                        levelId: 1,
                      },
                      {
                        name: "Alone and as part of a team, I can develop ideas that create value for others.",
                        levelId: 2,
                      },
                      {
                        name: "I can experiment with different techniques to generate alternative solutions to problems, using available resources in an effective way.",
                        levelId: 3,
                      },
                      {
                        name: "I can test the value of my solutions with end users.",
                        levelId: 4,
                      },
                      {
                        name: "I can describe different techniques to test innovative ideas with end users.",
                        levelId: 5,
                      },
                      {
                        name: "I can set up processes to involve stakeholders in finding, developing and testing ideas.",
                        levelId: 6,
                      },
                      {
                        name: "I can tailor a variety of ways of involving stakeholders to suit the needs of my value creating activity.",
                        levelId: 7,
                      },
                      {
                        name: "I can design new processes to involve stakeholders in generating, developing and testing ideas that create value.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Define problems",
                  choices: {
                    create: [
                      {
                        name: "I can approach open ended problems (problems that can have many solutions) with curiosity.",
                        levelId: 1,
                      },
                      {
                        name: "I can explore open ended problems in many ways so as to generate multiple solutions.",
                        levelId: 2,
                      },
                      {
                        name: "I can take part in group dynamics aimed at defining open ended problems.",
                        levelId: 3,
                      },
                      {
                        name: "I can reshape open ended problems to fit my skills.",
                        levelId: 4,
                      },
                      {
                        name: "I can describe and explain different approaches to shaping open ended problems and different problem solving strategies.",
                        levelId: 5,
                      },
                      {
                        name: "I can help others create value by encouraging experimentation and using creative techniques to approach problems and generate solutions.",
                        levelId: 6,
                      },
                      {
                        name: "I can initiate, develop, manage and complete a creative project.",
                        levelId: 7,
                      },
                      {
                        name: "I can use a mix of creative techniques to keep genera ting value over time.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Design value",
                  choices: {
                    create: [
                      {
                        name: "I can assemble objects that create value for me and others.",
                        levelId: 1,
                      },
                      {
                        name: "I can improve existing products, services and processes so that they better meet my needs or those of my peers and the community.",
                        levelId: 2,
                      },
                      {
                        name: "I can identify the basic functions that a prototype should have to illustrate the value of my idea.",
                        levelId: 3,
                      },
                      {
                        name: "I can assemble, test and progressively refine prototypes that simulate the value I want to create.",
                        levelId: 4,
                      },
                      {
                        name: "I can create (alone or with others) products or services that solve my problems and my needs.",
                        levelId: 5,
                      },
                      {
                        name: "I can develop and deliver value in stages, launching with the core features of my (or my team's) idea and progressively adding more.",
                        levelId: 6,
                      },
                      {
                        name: "I can apply different design approaches to create value through new products, processes or services.",
                        levelId: 7,
                      },
                      {
                        name: "I can design and put in place innovative processes to create value.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Be innovative",
                  choices: {
                    create: [
                      {
                        name: "I can find examples of innovative products, services and solutions.",
                        levelId: 1,
                      },
                      {
                        name: "I can describe how some innovations have transformed society.",
                        levelId: 2,
                      },
                      {
                        name: "I can tell the difference between types of innovations (for example, process versus product innovation and social innovation, incremental versus disruptive innovation).",
                        levelId: 3,
                      },
                      {
                        name: "I can judge if an idea, product or process is innovative or just new to me.",
                        levelId: 4,
                      },
                      {
                        name: "I can describe how innovations diffuse in society, culture and the market.",
                        levelId: 5,
                      },
                      {
                        name: "I can describe different levels of innovation (for example, incremental, breakthrough or transformational) and their role in value creating activities.",
                        levelId: 6,
                      },
                      {
                        name: "I can identify the steps needed to research the potential for an innovative idea in light of its development into an existing enterprise, a new venture or an opportunity for social change.",
                        levelId: 7,
                      },
                      {
                        name: "I can manage innovation processes that respond to emerging needs and make the most of opportunities as they become available.",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Vision",
            description: "Imagine the future. Develop a vision to turn ideas into action. Visualise future scenarios to help guide effort and action.",
            themes: {
              create: [
                {
                  name: "Imagine",
                  choices: {
                    create: [
                      {
                        name: "I can imagine a desirable future.",
                        levelId: 1,
                      },
                      {
                        name: "I can develop simple future scenarios where value is created for my community and surroundings.",
                        levelId: 2,
                      },
                      {
                        name: "I can develop (alone or with others) an inspiring vision for the future that involves others.",
                        levelId: 3,
                      },
                      {
                        name: "I can build future scenarios around my value creating activity.",
                        levelId: 4,
                      },
                      {
                        name: "I can use my understanding of the context to identify different strategic visions for creating value.",
                        levelId: 5,
                      },
                      {
                        name: "I can discuss my (or my team's) strategic vision for creating value.",
                        levelId: 6,
                      },
                      {
                        name: "I can develop (alone or with others) and compare different future scenarios.",
                        levelId: 7,
                      },
                      {
                        name: "I can show different audiences the benefits of my vision during turbulent times.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Think strategically",
                  choices: {
                    create: [
                      {
                        name: "I can explain what a vision is and what purpose it serves.",
                        levelId: 3,
                      },
                      {
                        name: "I am aware of what is needed to build a vision.",
                        levelId: 4,
                      },
                      {
                        name: "I can explain the role of a vision statement for strategic planning.",
                        levelId: 5,
                      },
                      {
                        name: "I can prepare a vision statement for my (or my team's) value creating activity that guides internal decision making throughout the whole process of creating value.",
                        levelId: 6,
                      },
                      {
                        name: "I can plan backwards from my vision to design the necessary strategy to achieve it.",
                        levelId: 7,
                      },
                      {
                        name: "I can encourage enthusiasm and a sense of belonging around a convincing vision.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Guide action",
                  choices: {
                    create: [
                      {
                        name: "My vision for creating value drives me to make the effort to turn ideas into action.",
                        levelId: 3,
                      },
                      {
                        name: "I can decide what type of vision for creating value I would like to contribute to.",
                        levelId: 4,
                      },
                      {
                        name: "I can identify the changes needed to achieve my vision.",
                        levelId: 5,
                      },
                      {
                        name: "I can promote initiatives for change and transformation that contribute to my vision.",
                        levelId: 6,
                      },
                      {
                        name: "I can identify challenges related to my (or my team's) vision, while respecting the different levels of the system and t he variety of stakeholders affected.",
                        levelId: 7,
                      },
                      {
                        name: "I can create (alone or with others) a ‘roadmap’ based on my vision for creating value.",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Valuing ideas",
            description: "Judge what value is in social, cultural and economic terms. Recognise the potential an idea has for creating value and identify suitable ways of making the most out of it.",
            themes: {
              create: [
                {
                  name: "Recognise the value of ideas",
                  choices: {
                    create: [
                      {
                        name: "I can find examples of ideas that have value for myself and others.",
                        levelId: 1,
                      },
                      {
                        name: "I can show how different groups, such as firms and institutions, create value in my community and surroundings.",
                        levelId: 2,
                      },
                      {
                        name: "I can tell the difference between social, cultural and economic value.",
                        levelId: 3,
                      },
                      {
                        name: "I can decide which type of value I want to act on and then choose the most appropriate pathway to do so.",
                        levelId: 4,
                      },
                      {
                        name: "I recognise the many forms of value that could be created through entrepreneurship, such as social, cultural or economic value.",
                        levelId: 5,
                      },
                      {
                        name: "I can break down a value chain into its different parts and identify how value is added in each part.",
                        levelId: 6,
                      },
                      {
                        name: "I can develop strategies to effectively make the mos t of opportunities to create value in my organisation or venture.",
                        levelId: 7,
                      },
                      {
                        name: "I can state the value of a new idea from different stakeholders' perspectives.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Share and protect ideas",
                  choices: {
                    create: [
                      {
                        name: "I can clarify that other people’s ideas can be used and acted on, while respecting their rights.",
                        levelId: 1,
                      },
                      {
                        name: "I can explain that ideas can be shared and circulated for the benefit of everyone or can be protected by certain rights, for example, copyrights or patents.",
                        levelId: 2,
                      },
                      {
                        name: "I can tell the difference between types of licences that can be used to sh are ideas and protect rights.",
                        levelId: 3,
                      },
                      {
                        name: "I can choose the most appropriate licence for the purpose of sharing and protecting the value created by my ideas.",
                        levelId: 4,
                      },
                      {
                        name: "I can tell the difference between trademarks, registered design rights, patents, geographical indications, trad e secrets, confidentiality agreements and copyright licences, including open, public domain licences such as creative commons.",
                        levelId: 5,
                      },
                      {
                        name: "When creating ideas with others, I can outline a dissemination and exploitation agreement that benefits all partners involved.",
                        levelId: 6,
                      },
                      {
                        name: "I can develop a tailored strategy on intellectual property rights that deals with geographic requirements.",
                        levelId: 7,
                      },
                      {
                        name: "I can develop a strategy on intellectual property rights that is tailored to the age of my portfolio.",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Ethical and sustainable thinking",
            description: "Assess the consequences of ideas that bring value and the effect of entrepreneurial action on the target community, the market, society and the environment. Reflect on how sustainable long-term social, cultural and economic goals are, and the course of action chosen. Act responsibly.",
            themes: {
              create: [
                {
                  name: "Behave ethically",
                  choices: {
                    create: [
                      {
                        name: "I can recognise behaviours that show integrity, honesty, responsibility, courage and commitment.",
                        levelId: 1,
                      },
                      {
                        name: "I can describe in my own words the importance of integrity and ethical values.",
                        levelId: 2,
                      },
                      {
                        name: "I can apply ethical thinking to consumption and production processes.",
                        levelId: 3,
                      },
                      {
                        name: "I am driven by honesty and integrity when taking decisions.",
                        levelId: 4,
                      },
                      {
                        name: "I can argue that ideas for creating value should be supported by ethics and values relating to gender, equality, fairness, social justice and environmental sustainability.",
                        levelId: 5,
                      },
                      {
                        name: "I can take responsibility for promoting ethical behaviour in my area of influence, (for example, by promoting gender balance highlighting inequalities and any lack of integrity).",
                        levelId: 6,
                      },
                      {
                        name: "I make it my priority to make sure that ethical behaviour is respected and promoted in my area of influence.",
                        levelId: 7,
                      },
                      {
                        name: "I take action against unethical behaviour.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Think sustainably",
                  choices: {
                    create: [
                      {
                        name: "I can list examples of environmentally friendly behaviour that benefits a community.",
                        levelId: 1,
                      },
                      {
                        name: "I can recognise examples of environmentally friendly behaviour by companies that creates value for society as a whole.",
                        levelId: 2,
                      },
                      {
                        name: "I can identify practices that are not sustainable and their implications for the environment.",
                        levelId: 3,
                      },
                      {
                        name: "I can produce a clear problem statement when faced with practices that are not sustainable.",
                        levelId: 4,
                      },
                      {
                        name: "I can discuss the impact an organisation has on the environment (and vice versa).",
                        levelId: 5,
                      },
                      {
                        name: "I can discuss the relationship between society and technical developments, relating to their implications for the environment.",
                        levelId: 6,
                      },
                      {
                        name: "I can choose adequate methods for analysing environmental impact based on their advantages and disadvantages.",
                        levelId: 7,
                      },
                      {
                        name: "I can contribute to self regulation discussions within my sector of operations.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Assess impact",
                  choices: {
                    create: [
                      {
                        name: "I can find and list examples of changes caused by human action in social, cultural, environmental or economic contexts.",
                        levelId: 1,
                      },
                      {
                        name: "I can tell the difference between the impact of a value creating activity on the target community and the broader impact on society.",
                        levelId: 2,
                      },
                      {
                        name: "I can identify the impact that taking up opportunities will have on me and my team, on the target group and on the surrounding community.",
                        levelId: 3,
                      },
                      {
                        name: "I can identify stakeholders who are affected by the change brought about by my (or my team's) value creating activity, including stakeholders who cannot speak up (for example, future generations, climate or nature).",
                        levelId: 4,
                      },
                      {
                        name: "I can analyse the implications of my value creating activity within the boundaries of the system I am working in.",
                        levelId: 5,
                      },
                      {
                        name: "I can define the purpose of the impact assessment, impact monitoring, and evaluation of impact.",
                        levelId: 6,
                      },
                      {
                        name: "I can choose ‘measure indicators’ to monitor and assess the impact of my value creating activity.",
                        levelId: 7,
                      },
                      {
                        name: "I can carry out impact assessment, impact monitoring, and impact evaluation on my value creating activity.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Be accountable",
                  choices: {
                    create: [
                      {
                        name: "I can tell the difference between accounting for use of resources and accounting for the impact of my value creating activity on stakeholders and the environment.",
                        levelId: 4,
                      },
                      {
                        name: "I can tell the difference between input, output, outcomes and impact.",
                        levelId: 5,
                      },
                      {
                        name: "I can discuss a range of accountability methods for both functional and strategic accountability.",
                        levelId: 6,
                      },
                      {
                        name: "I can use the accountability methods that hold me responsible to our internal and external stakeholders.",
                        levelId: 7,
                      },
                      {
                        name: "I can design ways to be accountable to all of our stakeholders.",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  const entreComp_2 = await prisma.area.create({
    data: {
      name: "Resources",
      type: "Entrepreneurial",
      competences: {
        create: [
          {
            name: "Self-awareness and self-efficacy",
            description:"Reflect on your needs, aspirations and wants in the short, medium and long term Identify and assess your individual and group strengths and weaknesses. Believe in your ability to influence the course of events, despite uncertainty, setbacks and temporary failures.",
            themes: {
              create: [
                {
                  name: "Follow your aspirations",
                  choices: {
                    create: [
                      {
                        name: "I can identify my needs, wants, interests and goals.",
                        levelId: 1,
                      },
                      {
                        name: "I can describe my needs, wants, interests and goals.",
                        levelId: 2,
                      },
                      {
                        name: "I can commit to fulfilling my needs, wants, interests and goals.",
                        levelId: 3,
                      },
                      {
                        name: "I can reflect on my individual and group needs, wants, interests and aspirations in relation to opportunities and future prospects.",
                        levelId: 4,
                      },
                      {
                        name: "I can translate my needs, wants, interests and aspirations into goals that help me reach them.",
                        levelId: 5,
                      },
                      {
                        name: "I can help others to reflect on their needs, wants, interests and aspirations and how they can turn these into goals.",
                        levelId: 6,
                      },
                    ],
                  },
                },
                {
                  name: "Identify your strengths and weaknesses",
                  choices: {
                    create: [
                      {
                        name: "I can identify things I am good at and things I am not good at.",
                        levelId: 2,
                      },
                      {
                        name: "I can judge my strengths and weaknesses and those of others in relation to opportunities for creating value.",
                        levelId: 3,
                      },
                      {
                        name: "I am driven by the desire to use my strengths and abilities to make the most of opportunities to create value.",
                        levelId: 4,
                      },
                      {
                        name: "I can team up with others to compensate for our weaknesses and add to our strengths.",
                        levelId: 5,
                      },
                      {
                        name: "I can help others identify their strengths and weaknesses.",
                        levelId: 6,
                      },
                    ],
                  },
                },
                {
                  name: "Believe in your ability",
                  choices: {
                    create: [
                      {
                        name: "I believe in my ability to do what I am asked successfully.",
                        levelId: 1,
                      },
                      {
                        name: "I believe in my ability to achieve what I intend to.",
                        levelId: 2,
                      },
                      {
                        name: "I can judge the control I have over my achievements (compared with any control from outside influences).",
                        levelId: 3,
                      },
                      {
                        name: "I believe I can influence people and situations for the better.",
                        levelId: 4,
                      },
                      {
                        name: "I believe in my ability to carry out what I have imagined and planned, despite obstacles, limited resources and resistance from others.",
                        levelId: 5,
                      },
                      {
                        name: "I believe in my ability to understand and take the good out of experiences that others may label as failures.",
                        levelId: 6,
                      },
                    ],
                  },
                },
                {
                  name: "Shape your future",
                  choices: {
                    create: [
                      {
                        name: "I can list different types of jobs and their key functions.",
                        levelId: 1,
                      },
                      {
                        name: "I can describe which qualities and abilities are needed for different jobs, and which of these qualities and abilities I have.",
                        levelId: 2,
                      },
                      {
                        name: "I can describe my skills and competenceAreas relating to career options, including selfemployment.",
                        levelId: 3,
                      },
                      {
                        name: "I can use my skills and competenceAreas to change my career path, as a result of new opportunities or from necessity.",
                        levelId: 4,
                      },
                      {
                        name: "I can discuss how a realistic understanding and evaluation of my personal attitudes, skills and knowledge can influence my decision-making, relationships with other people and quality of life.",
                        levelId: 5,
                      },
                      {
                        name: "I can choose professional development opportunities with my team and organisation based on a clear understanding our strengths and weaknesses.",
                        levelId: 6,
                      },
                      {
                        name: "I can design professional development strategies for my team and organisation based on a clear understanding our strengths and weaknesses, in relation to both current and future opportunities to create value.",
                        levelId: 7,
                      },
                      {
                        name: "I can design strategies to overcome my (or my team’s or organisation’s) weaknesses and to develop our strengths in anticipating future needs.",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Motivation and perseverance",
            description:"Be determined to turn ideas into action and satisfy your need to achieve. Be prepared to be patient and keep trying to achieve your long-term individual or group aims. Be resilient under pressure, adversity, and temporary failure.",
            themes: {
              create: [
                {
                  name: "Stay driven",
                  choices: {
                    create: [
                      {
                        name: "I am driven by the possibility to do or contribute to something that is good for me or for others.",
                        levelId: 1,
                      },
                      {
                        name: "I am motivated by the idea of creating value for myself and others.",
                        levelId: 2,
                      },
                      {
                        name: "I can anticipate the feeling of achieving my goals and this motivates me.",
                        levelId: 3,
                      },
                      {
                        name: "I can regulate my own behaviour to stay driven and achieve the benefits of turning ideas into action.",
                        levelId: 4,
                      },
                    ],
                  },
                },
                {
                  name: "Be determined",
                  choices: {
                    create: [
                      {
                        name: "I see tasks as challenges to do my best.",
                        levelId: 1,
                      },
                      { name: "I am motivated by challenges.", levelId: 2 },
                      {
                        name: "I can set challenges to motivate myself.",
                        levelId: 3,
                      },
                      {
                        name: "I am willing to put effort in and use resources to overcome challenges and achieve my (or my team's) goals.",
                        levelId: 4,
                      },
                      {
                        name: "I drive my effort by using my desire for achievement and belief in my ability to achieve.",
                        levelId: 5,
                      },
                      {
                        name: "I can coach others to stay motivated, encouraging them to commit to what they want to achieve.",
                        levelId: 6,
                      },
                      {
                        name: "I can create the right climate to motivate my team (for example, by celebrating successes, by learning from failures and by encouraging innovative ways to tackle problems).",
                        levelId: 7,
                      },
                      {
                        name: "I consider all outcomes as temporary solutions appropriate to their time and context, and so am motivated to make sure they develop in a continuous cycle of improvement and innovation.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Focus on what keeps you motivated",
                  choices: {
                    create: [
                      {
                        name: "I can recognise different ways of motivating myself and others to create value.",
                        levelId: 1,
                      },
                      {
                        name: "I can reflect on the social incentives associated with having a sense of initiative and creating value for myself and others.",
                        levelId: 3,
                      },
                      {
                        name: "I can tell the difference between personal and external factors that motivate me or others when creating value.",
                        levelId: 4,
                      },
                      {
                        name: "I can use strategies to stay motivated (for example, set goals, monitor performance and evaluate my progress).",
                        levelId: 5,
                      },
                      {
                        name: "I can use strategies to keep my team motivated and focused on creating value.",
                        levelId: 6,
                      },
                      {
                        name: "I can design effective ways to attract talented people and keep them motivated.",
                        levelId: 7,
                      },
                      {
                        name: "I can reward initiative, effort, and achievement appropriately within my team and organisation.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Be resilient",
                  choices: {
                    create: [
                      {
                        name: "I show passion and willingness to achieve my goals.",
                        levelId: 1,
                      },
                      {
                        name: "I am determined and persevere when trying to achieve my (or my team's) goals.",
                        levelId: 2,
                      },
                      {
                        name: "I can overcome simple adverse circumstances.",
                        levelId: 3,
                      },
                      {
                        name: "I can judge when it is not worth continuing with an idea.",
                        levelId: 4,
                      },
                      {
                        name: "I can persevere in the face of adversities when trying to achieve my goals.",
                        levelId: 5,
                      },
                      {
                        name: "I can devise strategies to overcome standard adverse circumstances.",
                        levelId: 6,
                      },
                      {
                        name: "I can cope with unexpected change, setbacks and failures (for example, job loss).",
                        levelId: 7,
                      },
                      {
                        name: "I can make sure that my team or organisation stay positive when making difficult decisions and dealing with failure.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Don’t give up",
                  choices: {
                    create: [
                      {
                        name: "I do not give up and I can keep going even when facing difficulties.",
                        levelId: 1,
                      },
                      {
                        name: "I am not afraid of working hard to achieve my goals.",
                        levelId: 2,
                      },
                      {
                        name: "I can delay achieving my goals in order to gain greater value, thanks to prolonged effort.",
                        levelId: 3,
                      },
                      {
                        name: "I can maintain effort and interest, despite setbacks.",
                        levelId: 4,
                      },
                      {
                        name: "I can celebrate short-term achievements, in order to stay motivated.",
                        levelId: 5,
                      },
                      {
                        name: "I can inspire others to work hard on their goals by showing passion and a strong sense of ownership.",
                        levelId: 6,
                      },
                      {
                        name: "I can stay focused on my vision and goals, despite challenges.",
                        levelId: 7,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Mobilizing resources",
            description: "Get and manage the material, non-material and digital resources needed to turn ideas into action. Make the most of limited resources. Get and manage the competences needed at any stage, including technical, legal, tax and digital competences (for example through suitable partnerships, networking, outsourcing and crowdsourcing).",
            themes: {
              create: [
                {
                  name: "Manage resources (material and non material)",
                  choices: {
                    create: [
                      {
                        name: "I recognise that resources are not unlimited.",
                        levelId: 1,
                      },
                      {
                        name: "I can appreciate the importance of sharing resources with others. .",
                        levelId: 2,
                      },
                      {
                        name: "I can experiment with different combinations of resources to turn my ideas into action.",
                        levelId: 3,
                      },
                      {
                        name: "I can get and manage the necessary resources to turn my idea into action.",
                        levelId: 4,
                      },
                      {
                        name: "I can develop a plan for dealing with limited resources when setting up my value-creating activity.",
                        levelId: 5,
                      },
                      {
                        name: "I can get together the necessary resources to develop my value-creating activity.",
                        levelId: 6,
                      },
                      {
                        name: "I can allocate enough resources to each step of my (or my team's) action plan and for the valuecreating activity (for example, time, finances, and my team’s skills, knowledge and experience).",
                        levelId: 7,
                      },
                      {
                        name: "I can judge the key resources needed to support an innovative idea or opportunity to develop an existing business, launch a new venture, or initiate a social enterprise.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Use resources responsibly",
                  choices: {
                    create: [
                      {
                        name: "I value my possessions and use them responsibly.",
                        levelId: 1,
                      },
                      {
                        name: "I can describe how resources last longer through reuse, repair and recycling.",
                        levelId: 2,
                      },
                      {
                        name: "I can discuss the principles of circular economy and resource efficiency.",
                        levelId: 3,
                      },
                      {
                        name: "I use resources responsibly and efficiently (for example, energy, materials in the supply chain or manufacturing process, public spaces).",
                        levelId: 4,
                      },
                      {
                        name: "I take into account the nonmaterial cost of using resources when taking decisions about my valuecreating activities.",
                        levelId: 5,
                      },
                      {
                        name: "I can choose and put in place effective resourcemanagement procedures (for example, lifecycle analysis, solid waste).",
                        levelId: 6,
                      },
                      {
                        name: "I can identify the opportunities that use resources efficiently and the circular economy brings to my organisation.",
                        levelId: 7,
                      },
                      {
                        name: "I can design and put in place innovative ways to lower the overall impact of my valuecreating activity on the environment, the community and society, and measure the improvement.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Make the most of your time",
                  choices: {
                    create: [
                      {
                        name: "I can recognise different uses for my time (for example, studying, playing, resting).",
                        levelId: 1,
                      },
                      {
                        name: "I value my time as a scarce resource.",
                        levelId: 2,
                      },
                      {
                        name: "I can discuss the need for investing time in different value-creating activities.",
                        levelId: 3,
                      },
                      {
                        name: "I can use my time effectively to achieve my goals.",
                        levelId: 4,
                      },
                      {
                        name: "I can manage my time effectively, using techniques and tools that help make me (or my team) productive.",
                        levelId: 5,
                      },
                      {
                        name: "I can help others manage their time effectively.",
                        levelId: 6,
                      },
                      {
                        name: "I can put in place effective timemanagement procedures.",
                        levelId: 7,
                      },
                      {
                        name: "I can develop effective timemanagement procedures that meet the specific needs of my valuecreating activity.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Get support",
                  choices: {
                    create: [
                      {
                        name: "I can look for help when I am having difficulty achieving what I have decided to do.",
                        levelId: 1,
                      },
                      {
                        name: "I can identify sources of help for my value-creating activity (for example, teachers, peers, mentors).",
                        levelId: 2,
                      },
                      {
                        name: "I can describe the concepts of division of labour and job specialisation.",
                        levelId: 3,
                      },
                      {
                        name: "I can find and list public and private services to support my value-creating activity (for example, incubator, social enterprise advisors, start-up angels, chamber of commerce).",
                        levelId: 4,
                      },
                      {
                        name: "I can find digital solutions (for example, free, paid for, or open-source) that can help me manage my valuecreating activities efficiently.",
                        levelId: 5,
                      },
                      {
                        name: "I can find support to help me take advantage of an opportunity to create value (for example, advisor or consultancy services, peer or mentor support).",
                        levelId: 6,
                      },
                      {
                        name: "I can effectively delegate tasks within and outside my organisation to make the most value (for example, outsourcing, partnering, acquisitions, crowdsourcing).",
                        levelId: 7,
                      },
                      {
                        name: "I can develop a network of flexible and responsive providers from outside the organisation who support my valuecreating activity.",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Financial and economic literacy",
            description: "Estimate the cost of turning an idea into a value-creating activity. Plan, put in place and evaluate financial decisions over time. Manage financing to make sure my value-creating activity can last over the long term.",
            themes: {
              create: [
                {
                  name: "Understand economic and financial concepts",
                  choices: {
                    create: [
                      {
                        name: "I can recall basic terminology and symbols related to money.",
                        levelId: 1,
                      },
                      {
                        name: "I can explain simple economic concepts (for example, supply and demand, market price, trade).",
                        levelId: 2,
                      },
                      {
                        name: "I can use the concept of opportunity costs and comparative advantage to explain why exchanges happen between individuals, regions and nations.",
                        levelId: 3,
                      },
                      {
                        name: "I can read income statements and balance sheets.",
                        levelId: 4,
                      },
                      {
                        name: "I can explain the difference between a balance sheet and a profitand-loss account.",
                        levelId: 5,
                      },
                      {
                        name: "I can build financial indicators (for example, return on investment).",
                        levelId: 6,
                      },
                      {
                        name: "I can use financial indicators to assess the financial health of a value-creating activity.",
                        levelId: 7,
                      },
                      {
                        name: "I can use financial indicators to compare the financial health of my value-creating activity with that of competitors.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Budget",
                  choices: {
                    create: [
                      {
                        name: "I can judge what to use my money for.",
                        levelId: 1,
                      },
                      {
                        name: "I can draw up a simple household budget in a responsible manner.",
                        levelId: 2,
                      },
                      {
                        name: "I can draw up a budget for a valuecreating activity.",
                        levelId: 3,
                      },
                      {
                        name: "I can judge the cash-flow needs of a value-creating activity.",
                        levelId: 4,
                      },
                      {
                        name: "I can apply the financial planning and forecasting concepts that I need to turn ideas into action (for example, profit or not for profit).",
                        levelId: 5,
                      },
                      {
                        name: "I can judge the cash-flow needs of a complex project.",
                        levelId: 6,
                      },
                      {
                        name: "I can judge the cash-flow needs of an organisation that handles many valuecreating activities that depend on each other.",
                        levelId: 7,
                      },
                      {
                        name: "I can create a plan for the financial and economic long-term sustainability of my (or my team's) valuecreating activity.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Find funding",
                  choices: {
                    create: [
                      {
                        name: "I can identify the main types of income for families, businesses, nonprofit organisations and the state.",
                        levelId: 1,
                      },
                      {
                        name: "I can describe the main role of banks in the economy and society.",
                        levelId: 2,
                      },
                      {
                        name: "I can explain that value-creating activities can take different forms (a business, a social enterprise, a non-profit organization and so on) and can have different structures of ownership (individual company, limited company, cooperative and so on).",
                        levelId: 3,
                      },
                      {
                        name: "I can identify public and private sources of funding for my value-creating activity (For example prizes,crowdfunding, and shares).",
                        levelId: 4,
                      },
                      {
                        name: "I can choose the most appropriate sources of funding to start up or expand a valuecreating activity.",
                        levelId: 5,
                      },
                      {
                        name: "I can apply for public or private business support programmes, financing schemes, public subsidies or calls for tender.",
                        levelId: 6,
                      },
                      {
                        name: "I can raise funds and secure revenue from different sources, and manage the diversity of those sources.",
                        levelId: 7,
                      },
                      {
                        name: "I can judge an opportunity as a possible investor.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Understand taxation",
                  choices: {
                    create: [
                      {
                        name: "I can outline the purpose of taxation.",
                        levelId: 1,
                      },
                      {
                        name: "I can explain how taxation finances the activities of a country and its part in providing public goods and services.",
                        levelId: 2,
                      },
                      {
                        name: "I can estimate the main accountancy and tax obligations I need to fulfil to meet the tax requirements for my activities.",
                        levelId: 4,
                      },
                      {
                        name: "I can estimate how my financial decisions (investments, buying assets, goods and so on) affect my tax.",
                        levelId: 5,
                      },
                      {
                        name: "I can make financial decisions based on current taxation schemes.",
                        levelId: 6,
                      },
                      {
                        name: "I can make financial decisions based on taxation schemes of different countries and territories.",
                        levelId: 7,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Mobilizing others",
            description:"Inspire and enthuse relevant stakeholders. Get the support needed to achieve valuable outcomes. Demonstrate effective communication, persuasion, negotiation and leadership.",
            themes: {
              create: [
                {
                  name: "Inspire and get inspired",
                  choices: {
                    create: [
                      {
                        name: "I show enthusiasm for challenges.",
                        levelId: 1,
                      },
                      {
                        name: "I am actively involved in creating value for others.",
                        levelId: 2,
                      },
                      {
                        name: "I do not get discouraged by difficulties.",
                        levelId: 3,
                      },
                      { name: "I can lead by example.", levelId: 4 },
                      {
                        name: "I can get endorsement from others to support my value-creating activity.",
                        levelId: 5,
                      },
                      {
                        name: "I can inspire others, despite challenging circumstances.",
                        levelId: 6,
                      },
                      {
                        name: "I can maintain momentum with my team, partners and stakeholders when involved in a challenging situation.",
                        levelId: 7,
                      },
                      {
                        name: "I can form coalitions to turn ideas into action.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Persuade",
                  choices: {
                    create: [
                      {
                        name: "I can persuade others by providing a number of arguments.",
                        levelId: 2,
                      },
                      {
                        name: "I can persuade others by providing evidence for my arguments.",
                        levelId: 3,
                      },
                      {
                        name: "I can persuade others by appealing to their emotions.",
                        levelId: 4,
                      },
                      {
                        name: "I can pitch effectively in front of potential investors or donors.",
                        levelId: 5,
                      },
                      {
                        name: "I can overcome resistance from those who will be affected by my (or my (team's) vision, innovative approach, and value - creating activity.",
                        levelId: 6,
                      },
                      {
                        name: "I can create a call to action that gets internal stakeholders on board, such as co-workers, partners, employees or senior managers.",
                        levelId: 7,
                      },
                      {
                        name: "I can negotiate support for ideas for creating value.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Communicate effectively",
                  choices: {
                    create: [
                      {
                        name: "I can communicate my ideas clearly to others.",
                        levelId: 1,
                      },
                      {
                        name: "I can communicate my team's ideas to others persuasively by using different methods (for example posters, videos, role-play).",
                        levelId: 2,
                      },
                      {
                        name: "I can communicate imaginative design solutions.",
                        levelId: 3,
                      },
                      {
                        name: "I can communicate the value of my (or my team's) idea to stakeholders from different backgrounds effectively.",
                        levelId: 4,
                      },
                      {
                        name: "I can communicate the vision for my (or my team's) venture in a way that inspires and persuades external groups, such as funders, partner organisations, volunteers, new members and affiliate supporters.",
                        levelId: 5,
                      },
                      {
                        name: "I can produce narratives and scenarios that motivate, inspire and direct people.",
                        levelId: 6,
                      },
                      {
                        name: "I can take part in constructive discussions with the community that my idea is targeted at.",
                        levelId: 7,
                      },
                      {
                        name: "I can get all relevant stakeholders to take responsibility to act on an opportunity for value creation.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Use media effectively",
                  choices: {
                    create: [
                      {
                        name: "I can provide examples of inspiring communication campaigns.",
                        levelId: 1,
                      },
                      {
                        name: "I can discuss how different media can be used to reach audiences in different ways.",
                        levelId: 2,
                      },
                      {
                        name: "I can use various methods, including social media, to communicate valuecreating ideas effectively.",
                        levelId: 3,
                      },
                      {
                        name: "I can use media appropriately, showing that I am aware of my audience and purpose.",
                        levelId: 4,
                      },
                      {
                        name: "I can influence opinions in relation to my value creating activity, through a planned approach to social media.",
                        levelId: 5,
                      },
                      {
                        name: "I can design effective social media campaigns to mobilize people in relation to my (or my team’s) value-creating activity.",
                        levelId: 6,
                      },
                      {
                        name: "I can define a communication strategy to mobilize people in relation to my (or my team’s) value creating activity.",
                        levelId: 7,
                      },
                      {
                        name: "I can sustain and increase the support for my vision.",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  const entreComp_3 = await prisma.area.create({
    data: {
      name: "Into Action",
      type: "Entrepreneurial",
      competences: {
        create: [
          {
            name: "Taking the initiative",
description:"Initiate processes that create value. Take up challenges. Act and work independently to achieve goals, stick to intentions and carry out planned tasks.",
            themes: {
              create: [
                {
                  name: "Take responsibility",
                  choices: {
                    create: [
                      {
                        name: "I can carry out the tasks I am given responsibly.",
                        levelId: 1,
                      },
                      {
                        name: "I am comfortable in taking responsibility in shared activities.",
                        levelId: 2,
                      },
                      {
                        name: "I can take individual and group responsibility to carry out simple tasks in value-creating activities.",
                        levelId: 3,
                      },
                      {
                        name: "I can take individual and group responsibility in value-creating activities.",
                        levelId: 4,
                      },
                      {
                        name: "I can delegate responsibility appropriately.",
                        levelId: 5,
                      },
                      {
                        name: "I can encourage others to take responsibility in value-creating activities.",
                        levelId: 6,
                      },
                      {
                        name: "I take responsibility in complex value-creating activities.",
                        levelId: 7,
                      },
                      {
                        name: "I can take responsibility in seizing new opportunities and when facing unprecedented challenges in value-creating activities.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Work independently",
                  choices: {
                    create: [
                      {
                        name: "I show some independence in carrying out tasks I am given.",
                        levelId: 1,
                      },
                      {
                        name: "I can work independently in simple value-creating activities.",
                        levelId: 2,
                      },
                      {
                        name: "I can initiate simple value-creating activities.",
                        levelId: 3,
                      },
                      {
                        name: "I am driven by the possibility of being able to initiate value-creating activities independently.",
                        levelId: 4,
                      },
                      {
                        name: "I can initiate value-creating activities alone and with others.",
                        levelId: 5,
                      },
                      {
                        name: "I can help others work independently.",
                        levelId: 6,
                      },
                      {
                        name: "I praise initiative taken by others and reward it appropriately within my team and organisation.",
                        levelId: 7,
                      },
                    ],
                  },
                },
                {
                  name: "Take action",
                  choices: {
                    create: [
                      {
                        name: "I can have a go at solving problems that affect my surroundings.",
                        levelId: 1,
                      },
                      {
                        name: "I show initiative in dealing with problems that affect my community.",
                        levelId: 2,
                      },
                      {
                        name: "I actively face challenges, solve problems and seize opportunities to create value.",
                        levelId: 4,
                      },
                      {
                        name: "I take action on new ideas and opportunities, which will add value to a new or existing value-creating venture.",
                        levelId: 5,
                      },
                      {
                        name: "I value others taking the initiative in solving problems and creating value.",
                        levelId: 6,
                      },
                      {
                        name: "I can encourage others to take the initiative in solving problems and creating value within my team and organisation.",
                        levelId: 7,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Planning and management",
            description:"Set long-, medium- and short-term goals. Define priorities and action plans. Adapt to unforeseen changes.",
            themes: {
              create: [
                {
                  name: "Define goals",
                  choices: {
                    create: [
                      {
                        name: "I can clarify what my goals are in a simple value-creating activity.",
                        levelId: 1,
                      },
                      {
                        name: "I can identify alternative goals to create value in a simple context.",
                        levelId: 2,
                      },
                      {
                        name: "I can describe my goals for the future in line with my strengths, ambitions, interests and achievements.",
                        levelId: 3,
                      },
                      {
                        name: "I can set short-term goals that I can act on.",
                        levelId: 4,
                      },
                      {
                        name: "I can define long-term goals arising from the vision for my (or my team's) value-creating activity.",
                        levelId: 5,
                      },
                      {
                        name: "I can match short-term, midterm and long-term goals to the vision for my (or my team's) value-creating activity.",
                        levelId: 6,
                      },
                      {
                        name: "I can design a strategy to achieve goals in line with my (or my team's) vision.",
                        levelId: 7,
                      },
                      {
                        name: "I can manage the balance between the need for creativity and for control so that my organisation’s capacity to achieve its goals is protected and nurtured.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Plan and organize",
                  choices: {
                    create: [
                      {
                        name: "I can carry out a simple plan for value-creating activities.",
                        levelId: 1,
                      },
                      {
                        name: "I can deal with a range of simple tasks at the same time without feeling uncomfortable.",
                        levelId: 2,
                      },
                      {
                        name: "I can create an action plan which identifies the necessary steps to achieve my goals.",
                        levelId: 3,
                      },
                      {
                        name: "I can allow for the possibility of changes to my plans.",
                        levelId: 4,
                      },
                      {
                        name: "I can summarise the basics of project management.",
                        levelId: 5,
                      },
                      {
                        name: "I can apply the basics of project management in managing a value-creating activity. .",
                        levelId: 6,
                      },
                      {
                        name: "I can develop and stick to a detailed project management plan, adjusting to changing circumstances to make sure goals are reached.",
                        levelId: 7,
                      },
                      {
                        name: "I can design managerial procedures to effectively deliver value in challenging circumstances.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Develop sustainable business plans",
                  choices: {
                    create: [
                      {
                        name: "I can develop a business model for my idea.",
                        levelId: 3,
                      },
                      {
                        name: "I can define the key elements that make up the business model necessary to deliver the value I have identified.",
                        levelId: 4,
                      },
                      {
                        name: "I can develop a business plan based on the model, describing how to achieve the value identified.",
                        levelId: 5,
                      },
                      {
                        name: "I can organise my value-creating activities using planning methods such as business and marketing plans.",
                        levelId: 6,
                      },
                      {
                        name: "I can keep my planning methods updated and adapt them to changing circumstances.",
                        levelId: 7,
                      },
                      {
                        name: "I can adapt my value-creating activity’s business model to face new challenges.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Define priorities",
                  choices: {
                    create: [
                      {
                        name: "I can recall the order of steps that was needed in a simple value-creating activity I took part in.",
                        levelId: 1,
                      },
                      {
                        name: "I can identify the basic steps that are needed in a value-creating activity.",
                        levelId: 2,
                      },
                      {
                        name: "I can prioritise the basic steps in a value creating activity.",
                        levelId: 3,
                      },
                      {
                        name: "I can set my own priorities and act on them.",
                        levelId: 4,
                      },
                      {
                        name: "I can define the priorities to meet my (or my team’s) vision.",
                        levelId: 5,
                      },
                      {
                        name: "I can stay focused on the priorities set, despite changing circumstances.",
                        levelId: 6,
                      },
                      {
                        name: "I can define priorities in uncertain circumstances, with partial or ambiguous information.",
                        levelId: 7,
                      },
                      {
                        name: "I can adapt my value creating activity’s business model to face new challenges.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Monitor your progress",
                  choices: {
                    create: [
                      {
                        name: "I can recognise how much progress I have made on a task.",
                        levelId: 1,
                      },
                      {
                        name: "I can monitor whether a task is going to plan.",
                        levelId: 2,
                      },
                      {
                        name: "I can identify different types of data that are necessary for monitoring the progress of a simple value-creating activity.",
                        levelId: 3,
                      },
                      {
                        name: "I can set basic milestones and observation indicators to monitor the progress of my value-creating activity.",
                        levelId: 4,
                      },
                      {
                        name: "I can describe different methods for performance and impact monitoring.",
                        levelId: 5,
                      },
                      {
                        name: "I can define what data is needed to monitor how effective my value-creating activities are and an appropriate way to collect them.",
                        levelId: 6,
                      },
                      {
                        name: "I can develop the performance indicators I (or my team) need to monitor progress towards a successful outcome in changing circumstances.",
                        levelId: 7,
                      },
                      {
                        name: "I can design and put in place a data-collection plan to monitor whether my venture is achieving its aims.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Be flexible and adapt to changes",
                  choices: {
                    create: [
                      { name: "I am open to changes.", levelId: 1 },
                      {
                        name: "I can confront and deal with changes in a constructive way.",
                        levelId: 2,
                      },
                      {
                        name: "I can change my plans based on the needs of my team.",
                        levelId: 3,
                      },
                      {
                        name: "I can adapt my plans to achieve my goals in light of changes that are outside my control.",
                        levelId: 4,
                      },
                      {
                        name: "I can embrace change that brings new opportunities for value creation.",
                        levelId: 5,
                      },
                      {
                        name: "I can anticipate and include change along the valuecreating process.",
                        levelId: 6,
                      },
                      {
                        name: "I can use the results of monitoring to adjust vision, aims, priorities, resource planning, action steps or any other aspect of the valuecreating process.",
                        levelId: 7,
                      },
                      {
                        name: "I can communicate effectively to the organisation the reason for changes and adjustments.",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Coping with uncertainty, ambiguity and risk",
            description:"Make decisions when the result of that decision is uncertain, when the information available is partial or ambiguous, or when there is a risk of unintended outcomes. Within the value-creating process, include structured ways of testing ideas and prototypes from the early stages, to reduce risks of failing. Handle fastmoving situations promptly and flexibly.",
            themes: {
              create: [
                {
                  name: "Cope with uncertainty and ambiguity",
                  choices: {
                    create: [
                      {
                        name: "I am not afraid of making mistakes while trying new things.",
                        levelId: 1,
                      },
                      {
                        name: "I explore my own ways to achieve things.",
                        levelId: 2,
                      },
                      {
                        name: "I can discuss the role that information plays in reducing uncertainty, ambiguity and risk.",
                        levelId: 3,
                      },
                      {
                        name: "I can actively look for, compare and contrast different sources of information that help me reduce ambiguity, uncertainty, and risks in making decisions.",
                        levelId: 4,
                      },
                      {
                        name: "I can find ways of making decisions when the information is incomplete.",
                        levelId: 5,
                      },
                      {
                        name: "I can pull together different viewpoints to take informed decisions when the degree of uncertainty is high.",
                        levelId: 6,
                      },
                      {
                        name: "I can make decisions evaluating the different elements in a situation that is uncertain and ambiguous.",
                        levelId: 7,
                      },
                      {
                        name: "I can set up appropriate strategies for collecting and monitoring data, which help me take decisions based on sound evidence.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Calculate risk",
                  choices: {
                    create: [
                      {
                        name: "I can identify examples of risks in my surroundings.",
                        levelId: 1,
                      },
                      {
                        name: "I can describe risks related to a simple value-creating activity in which I take part.",
                        levelId: 2,
                      },
                      {
                        name: "I can tell the difference between acceptable and unacceptable risks.",
                        levelId: 3,
                      },
                      {
                        name: "I can weigh up the risks and benefits of self-employment with alternative career options, and make choices that reflect my preferences.",
                        levelId: 4,
                      },
                      {
                        name: "I can apply the concept of affordable losses to make decisions when creating value.",
                        levelId: 5,
                      },
                      {
                        name: "I can compare value-creating activities based on a risk assessment.",
                        levelId: 6,
                      },
                      {
                        name: "I can assess the risks my venture is exposed to as conditions change.",
                        levelId: 7,
                      },
                      {
                        name: "I can evaluate high-risk long-term investments using a structured approach.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Manage risk",
                  choices: {
                    create: [
                      {
                        name: "I can critically evaluate the risks associated with an idea that creates value, taking into account a variety of factors.",
                        levelId: 3,
                      },
                      {
                        name: "I can critically evaluate the risks related to the formal setup of a value-creating venture in the area in which I work.",
                        levelId: 4,
                      },
                      {
                        name: "I can demonstrate that I can make decisions by weighing up both the risks and the expected benefits of a value-creating activity.",
                        levelId: 5,
                      },
                      {
                        name: "I can outline a risk management plan for guiding my (or my team's) choices while developing my value-creating activity.",
                        levelId: 6,
                      },
                      {
                        name: "I can use strategies to reduce the risks that may arise during the value-creating process.",
                        levelId: 7,
                      },
                      {
                        name: "I can come up with strategies to reduce the risk of my value-creating initiative becoming obsolete.",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Working with others",
            description:"Work together and cooperate with others to develop ideas and turn them into action. Network. Solve conflicts and face up to competition positively when necessary.",
            themes: {
              create: [
                {
                  name: "Accept diversity (people’s differences)",
                  choices: {
                    create: [
                      {
                        name: "I can show respect for others, their background and situations.",
                        levelId: 1,
                      },
                      {
                        name: "I am open to the worth that others can bring to value creating activities.",
                        levelId: 2,
                      },
                      {
                        name: "I can combine different contributions to create value.",
                        levelId: 3,
                      },
                      {
                        name: "I can value diversity as a possible source of ideas and opportunities.",
                        levelId: 4,
                      },
                      {
                        name: "I can support diversity within my team or organisation.",
                        levelId: 6,
                      },
                      {
                        name: "Outside of my organisation, I can find ideas that create value and make the most of them.",
                        levelId: 7,
                      },
                    ],
                  },
                },
                {
                  name: "Develop emotional intelligence",
                  choices: {
                    create: [
                      {
                        name: "I can show empathy towards others.",
                        levelId: 1,
                      },
                      {
                        name: "I can recognise the role of my emotions, attitudes and behaviours in shaping others people’s attitudes and behaviours and vice versa.",
                        levelId: 2,
                      },
                      {
                        name: "I can express my (or my team's) value creating ideas assertively.",
                        levelId: 3,
                      },
                      { name: "I can face and solve conflicts.", levelId: 4 },
                      {
                        name: "I can compromise where necessary.",
                        levelId: 5,
                      },
                      {
                        name: "I can deal with non assertive behaviour that hinders my (or my team's) value creating activities (for example, destructive attitudes, aggressive behaviour and so on).",
                        levelId: 6,
                      },
                      {
                        name: "I can manage conflicts effectively.",
                        levelId: 7,
                      },
                    ],
                  },
                },
                {
                  name: "Listen actively",
                  choices: {
                    create: [
                      {
                        name: "I can show empathy towards others.",
                        levelId: 1,
                      },
                      {
                        name: "I can discuss the benefits of listening to other people’s ideas for achieving my (or my team's) goals.",
                        levelId: 2,
                      },
                      {
                        name: "I can listen to other people’s ideas for creating value without showing prejudice.",
                        levelId: 3,
                      },
                      { name: "I can listen to my end users.", levelId: 4 },
                      {
                        name: "I can describe different techniques for managing relationships with end users.",
                        levelId: 5,
                      },
                      {
                        name: "I can put in place strategies to actively listen to my end users and act on their needs.",
                        levelId: 6,
                      },
                      {
                        name: "I can pull together information from a wide range of sources to understand my end users' needs.",
                        levelId: 7,
                      },
                    ],
                  },
                },
                {
                  name: "Team up",
                  choices: {
                    create: [
                      {
                        name: "I am open to working alone as well as with others, playing different roles and taking some responsibility.",
                        levelId: 1,
                      },
                      {
                        name: "I am willing to change my way of working in a group.",
                        levelId: 2,
                      },
                      {
                        name: "I can work with a range of individuals and teams.",
                        levelId: 3,
                      },
                      {
                        name: "I share the ownership of value creating activities with the members of my team.",
                        levelId: 4,
                      },
                      {
                        name: "I can build a team based on the individual knowledge, skills and attitudes of each member.",
                        levelId: 5,
                      },
                      {
                        name: "I can contribute to creating value by teaming up with distributed communities through digital technologies.",
                        levelId: 6,
                      },
                      {
                        name: "I can design physical and virtual spaces that encourage team members to work together.",
                        levelId: 7,
                      },
                      {
                        name: "I can build an organisation’s capacity to create value by encouraging people to work together.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Work together",
                  choices: {
                    create: [
                      {
                        name: "I am open to involving others in my value creating activities.",
                        levelId: 1,
                      },
                      {
                        name: "I can contribute to simple value creating activities.",
                        levelId: 2,
                      },
                      {
                        name: "I can contribute to group decision making constructively.",
                        levelId: 3,
                      },
                      {
                        name: "I can create a team of people who can work together in a value creating activity.",
                        levelId: 4,
                      },
                      {
                        name: "I can use techniques and tools that help people to work together.",
                        levelId: 5,
                      },
                      {
                        name: "I can give people the help and support they need to perform at their best within a team.",
                        levelId: 6,
                      },
                      {
                        name: "I can work with a remote team of people who can independently contribute to a value creating activity.",
                        levelId: 7,
                      },
                      {
                        name: "I can design working methods and incentives that enable team members to work well together.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Expand your network",
                  choices: {
                    create: [
                      {
                        name: "I can explain the meaning and forms of association, co-operation and peer to peer support (for example, family and other communities).",
                        levelId: 1,
                      },
                      {
                        name: "I am open to establishing new contacts and cooperation with others (individuals and groups).",
                        levelId: 2,
                      },
                      {
                        name: "I can use the relationships I have to get the support I need to turn ideas into action, including emotional support.",
                        levelId: 3,
                      },
                      {
                        name: "I can establish new relationships to get the support I need to turn ideas into action, including emotional support (for example, joining a mentor network).",
                        levelId: 4,
                      },
                      {
                        name: "I can use my network to find the right people to work on my (or my team's) value creating activity.",
                        levelId: 5,
                      },
                      {
                        name: "I proactively make contact with the right people inside and outside my organisation to support my (or my team's) value creating activity (for example, at conferences or on social media).",
                        levelId: 6,
                      },
                      {
                        name: "I can use my network to bring together different perspectives to inform my (or my team's) value creating process.",
                        levelId: 7,
                      },
                      {
                        name: "I can design effective processes to build networks of different or new stakeholders and keep them engaged.",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Learning through experience",
            description:"Use any initiative for value creation as a learning opportunity. Learn with others, including peers and mentors. Reflect and learn from both success and failure (your own and other people’s).",
            themes: {
              create: [
                {
                  name: "Reflect",
                  choices: {
                    create: [
                      {
                        name: "I can find examples of great failures that have created value.",
                        levelId: 1,
                      },
                      {
                        name: "I can provide examples of temporary failures that have led to valuable achievements.",
                        levelId: 2,
                      },
                      {
                        name: "I can reflect on failures (mine and other people’s), identify their causes and learn from them.",
                        levelId: 3,
                      },
                      {
                        name: "I can judge if and how I have achieved my goals, so that I can evaluate my performance and learn from it.",
                        levelId: 4,
                      },
                      {
                        name: "I can reflect on my (or my team's) achievements and temporary failures as things develop so as to learn and improve my ability to create value.",
                        levelId: 5,
                      },
                      {
                        name: "I can help others reflect on their achievements and temporary failures by providing honest and constructive feedback.",
                        levelId: 6,
                      },
                      {
                        name: "I can take my team or the organisation to a higher level of performance, based on the feedback collected and by learning lessons from achievements and failures.",
                        levelId: 7,
                      },
                    ],
                  },
                },
                {
                  name: "Learn to learn",
                  choices: {
                    create: [
                      {
                        name: "I can provide examples that show that my abilities and competence have increased with experience.",
                        levelId: 1,
                      },
                      {
                        name: "I can anticipate that my abilities and competence will grow with experience, through both successes and failures.",
                        levelId: 2,
                      },
                      {
                        name: "I can reflect on the relevance of my learning pathways for my future opportunities and choices.",
                        levelId: 3,
                      },
                      {
                        name: "I am always looking for opportunities to improve my strengths and reduce or compensate for my weaknesses.",
                        levelId: 4,
                      },
                      {
                        name: "I can find and choose opportunities to overcome my (or my team’s) weaknesses and to develop my (or my team’s) strengths.",
                        levelId: 5,
                      },
                      {
                        name: "I can help others develop their strengths and reduce or compensate for their weaknesses.",
                        levelId: 6,
                      },
                      {
                        name: "I can identify opportunities for self improvement in my organisation and beyond.",
                        levelId: 7,
                      },
                      {
                        name: "I can design and put in place a strategy for my venture to continue to generate value.",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "Learn from experience",
                  choices: {
                    create: [
                      {
                        name: "I can recognise what I have learnt from taking part in value creating activities.",
                        levelId: 1,
                      },
                      {
                        name: "I can reflect on my experience in taking part in value creating activities and learn from it.",
                        levelId: 2,
                      },
                      {
                        name: "I can reflect on my interaction with others (including peers and mentors) and learn from it.",
                        levelId: 3,
                      },
                      {
                        name: "I can filter the feedback provided by others and keep the good from it.",
                        levelId: 4,
                      },
                      {
                        name: "I can integrate lifelong learning into my personal development strategy and career progress.",
                        levelId: 5,
                      },
                      {
                        name: "I can help others reflect on their interaction with other people and help them learn from this interaction.",
                        levelId: 6,
                      },
                      {
                        name: "I can learn from the impact monitoring and evaluation activities that I have designed to track the progress of my value creating activity.",
                        levelId: 7,
                      },
                      {
                        name: "I can learn lessons from monitoring and evaluation processes and establish them into my organisation’s learning processes.",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  // DigComp
  const digComp_1 = await prisma.area.create({
    data: {
      name: "Information and Data Literacy",
      type: "Digital",
      competences: {
        create: [
          {
            name: "Browsing, searching and filtering information, data and digital content",
            description:
              "To articulate information needs , to search for data, information and content in digital environments, to access them and to navigate between them. To create and update personal search strategies.",
            themes: {
              create: [
                {
                  name: "I know that different search engines may give different search results, because they are influenced by commercial factors.",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know which words to use in order to find what I need quickly (e.g. to search online or within a document).",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "When I use a search engine, I can take advantage of its advanced features.",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know how to find a website I have visited before.",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Evaluating data, information and digital content",
            description:
              "To analyse, compare and critically evaluate the credibility and reliability of sources of data, information and digital content. To analyse, interpret and critically evaluate the data, information and digital content.",
            themes: {
              create: [
                {
                  name: "I know how to differentiate promoted content from other content I find or receive online (e.g. recognising an advert on social media or search engines).",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know how to identify the purpose of an online information source (e.g. to inform, influence, entertain, or sell).",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I critically check if the information I find online is reliable.",
                  choices: {
                    create: [
                      {
                        name: "Not at all",
                        levelId: 2,
                      },
                      {
                        name: "Not much/ very little",
                        levelId: 4,
                      },
                      {
                        name: "Yes I do/ Yes I am/ Yes it does",
                        levelId: 6,
                      },
                      {
                        name: "Very much",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I know that some information on the Internet is false (e.g. fake news).",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Managing data, information and digital content",
            description:
              "To organise, store and retrieve data, information, and content in digital environments. To organise and process them in a structured environment.",
            themes: {
              create: [
                {
                  name: "I know about different storage media (e.g. internal or external hard disk, USB memory, pen drive, memory card).",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know how to organise digital content (e.g. documents, images, videos) using folders or tagging to find them back later.",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know how to copy and move files (e.g. documents, images, videos) between folders, devices or on the cloud.",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know how to manage and analyze data using software (e.g. sorting, filtering, calculations).",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  const digComp_2 = await prisma.area.create({
    data: {
      name: "Communication and Collaboration",
      type: "Digital",
      competences: {
        create: [
          {
            name: "Interacting through digital technologies",
            description:
              "To interact through a variety of digital technologies and to understand appropriate digital communication means for a given context.",
            themes: {
              create: [
                {
                  name: "I know how to send, reply and forward e-mails.",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know that many communication services and social media are free of charge because they are paid for by advertising. ",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know how to use advanced videoconferencing features (e.g. moderating , recording audio and video).",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know which communication tools and services (e.g. phone, email, video conference, text message) are appropriate to use in different circumstances.",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Sharing information and content through digital technologies",
            description:
              "To share data, information and digital content with others through appropriate digital technologies. To act as an intermediary, to know about referencing and attribution practices.",
            themes: {
              create: [
                {
                  name: "I am open towards sharing digital content that I think might be interesting and useful to others",
                  choices: {
                    create: [
                      {
                        name: "Not at all",
                        levelId: 2,
                      },
                      {
                        name: "Not much/ very little",
                        levelId: 4,
                      },
                      {
                        name: "Yes I do/ Yes I am/ Yes it does",
                        levelId: 6,
                      },
                      {
                        name: "Very much",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I know how to use cloud services (e.g. Google Drive, DropBox and OneDrive) to share my files.",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I know how to change who I share content with (e.g. friends, friends of friends, everyone).",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I know how to reference the source of documents (e.g. the author or web address) that I found online.",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Engaging in citizenship through digital technologies",
            description:
              "To participate in society through the use of public and private digital services. To seek opportunities for self-empowerment and for participatory citizenship through appropriate digital technologies.",
            themes: {
              create: [
                {
                  name: "I know how to apply for a job using a digital platform (e.g. fill in a form, upload my CV and photo).",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know that many public services are available on the Internet (e.g. booking a health visit, submitting tax declaration, requesting birth, marriage, residence and other certificates).",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I know how to pay for goods and services that I buy online (e.g. using direct bank transfer, credit/debit cards, other online payment systems).  ",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "It matters to me to debate social or political issues online (e.g. in online forums, news sites, Facebook, Twitter).",
                  choices: {
                    create: [
                      {
                        name: "Not at all",
                        levelId: 2,
                      },
                      {
                        name: "Not much/ very little",
                        levelId: 4,
                      },
                      {
                        name: "Yes I do/ Yes I am/ Yes it does",
                        levelId: 6,
                      },
                      {
                        name: "Very much",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Collaborating through digital technologies",
            description:
              "To use digital tools and technologies for collaborative processes, and for co-construction and co-creation of data, resources and knowledge.",
            themes: {
              create: [
                {
                  name: "I understand the benefits of remote collaboration (e.g. reduced commuting time).",
                  choices: {
                    create: [
                      {
                        name: "Not at all",
                        levelId: 2,
                      },
                      {
                        name: "Not much/ very little",
                        levelId: 4,
                      },
                      {
                        name: "Yes I do/ Yes I am/ Yes it does",
                        levelId: 6,
                      },
                      {
                        name: "Very much",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I know how to edit a shared, online document.",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I know how to invite others and give appropriate permissions to collaborate on a shared document.",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Netiquette",
            description:
              "To be aware of behavioural norms and know-how while using digital technologies and interacting in digital environments. To adapt communication strategies to the specific audience and to be aware of cultural and generational diversity in digital environments.",
            themes: {
              create: [
                {
                  name: "I am aware that I should ask permission from a person before publishing or sharing photos about them.",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know how to recognise online messages and behaviors that attack certain groups or individuals (e.g. hate speech).",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I can take the right measures if someone is doing the wrong thing online (e.g. an offensive comment, threats).",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know how to behave online according to the situation (e.g. formal vs informal).",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Managing digital identity",
            description:
              "To create, and manage one or multiple digital identities, to be able to protect one’s own reputation, to deal with the data that one produces through several digital tools, environments and services.",
            themes: {
              create: [
                {
                  name: "I know my digital identity is everything that identifies me in online environments (e.g. usernames, likes and posts on social media, petitions signed online).",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know how to create a profile in digital environments for personal or professional purposes.",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know that the EU introduced regulation on The Right to Be Forgotten (i.e. to have one's private information removed from the Internet).",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know how to configure the settings in my Internet browser to prevent or limit cookies.",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  const digComp_3 = await prisma.area.create({
    data: {
      name: "Digital Content Creation",
      type: "Digital",
      competences: {
        create: [
          {
            name: "Developing digital content",
            description:
              "To create and edit digital content in different formats, to express oneself through digital means.",
            themes: {
              create: [
                {
                  name: "I know how to create and edit digital text files (e.g. Word, OpenDocument, Google Docs).",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I know how to express myself by creating digital content on the Internet (e.g. blog post, video on Youtube).",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I know how to produce a multimedia presentation with text, images, audio and video elements.",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "To express myself, I am careful to choose the right type of digital media depending on the audience and my aim (e.g. using social media to promote a project).",
                  choices: {
                    create: [
                      {
                        name: "Not at all",
                        levelId: 2,
                      },
                      {
                        name: "Not much/ very little",
                        levelId: 4,
                      },
                      {
                        name: "Yes I do/ Yes I am/ Yes it does",
                        levelId: 6,
                      },
                      {
                        name: "Very much",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Integrating and re-elaborating digital content",
            description:
              "To modify, refine and integrate new information and content into an existing body of knowledge and resources to create new, original and relevant content and knowledge.",
            themes: {
              create: [
                {
                  name: "I am keen to create new digital content by mixing and modifying existing digital resources (e.g. a presentation with photos and a soundtrack found on the Internet).",
                  choices: {
                    create: [
                      {
                        name: "Not at all",
                        levelId: 2,
                      },
                      {
                        name: "Not much/ very little",
                        levelId: 4,
                      },
                      {
                        name: "Yes I do/ Yes I am/ Yes it does",
                        levelId: 6,
                      },
                      {
                        name: "Very much",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know that some digital content can be reused and reworked legally (e.g. public domain or with Creative Commons licences).",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know how to edit or make changes to digital content that others have created (e.g. insert a text into an image, edit a wiki).",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know how to create something new by mixing different types of content (e.g. text and images).",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },

          {
            name: "Copyright and licences",
            description:
              "To understand how copyright and licences apply to digital information and content.",
            themes: {
              create: [
                {
                  name: "I am careful to follow the rules about  copyrights and licenses of digital content that I find.",
                  choices: {
                    create: [
                      {
                        name: "Not at all",
                        levelId: 2,
                      },
                      {
                        name: "Not much/ very little",
                        levelId: 4,
                      },
                      {
                        name: "Yes I do/ Yes I am/ Yes it does",
                        levelId: 6,
                      },
                      {
                        name: "Very much",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I know that downloading or sharing digital content (e.g. music, software, films) may have ethical or legal consequences.",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I can detect when digital content is made available illegally (e.g. software, movies, music, books, TV).",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I know which different types of licences apply to the use of digital content (e.g. Creative Commons licences).",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Programming",
            description:
              "To plan and develop a sequence of understandable instructions for a computing system to solve a given problem or to perform a specific task.",
            themes: {
              create: [
                {
                  name: "I am interested in finding out how a task can be broken down into steps so that it can be addressed by writing a computer program.",
                  choices: {
                    create: [
                      {
                        name: "Not at all",
                        levelId: 2,
                      },
                      {
                        name: "Not much/ very little",
                        levelId: 4,
                      },
                      {
                        name: "Yes I do/ Yes I am/ Yes it does",
                        levelId: 6,
                      },
                      {
                        name: "Very much",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know that programming languages (e.g. Python, Visual Basic, Java) are used to provide a digital device instructions to carry out a task.",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I can write scripts, macros and simple applications to automate the execution of a task.",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know that there could be different algorithmic solutions to accomplish a specific computational task (e.g. sorting and searching).",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  const digComp_4 = await prisma.area.create({
    data: {
      name: "Safety",
      type: "Digital",
      competences: {
        create: [
          {
            name: "Protecting devices",
            description:
              "To protect devices and digital content, and to understand risks and threats in digital environments. To know about safety and security measures and to have a due regard to reliability and privacy.",
            themes: {
              create: [
                {
                  name: "I understand the benefits and also the safety risks when using Internet-connected devices or systems (e.g. smart watches, smart home devices).",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know about the importance of keeping the operating system, antivirus and other software up-to-date in order to prevent security issues.",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know how to configure the settings of a firewall on different devices.",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know how to recover digital information and other content (e.g. photos, contacts) from a backup.",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Protecting personal data and privacy",
            description:
              "To protect personal data and privacy in digital environments. To understand how to use and share personally identifiable information while being able to protect oneself and others from damages. To understand that digital services use a “Privacy policy” to inform how personal data is used.",
            themes: {
              create: [
                {
                  name: "I know how to restrict or refuse access to my geographical location.",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I know how to check that the website where I am asked to provide personal data is secure (e.g. https sites, safety logo or certificate).",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I know how to check that the website where I am asked to provide personal data is secure (e.g. https sites, safety logo or certificate).",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I know which personal data I should not share and display online (e.g. on social media).",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I am careful about checking the privacy policies of the digital services that I use.",
                  choices: {
                    create: [
                      {
                        name: "Not at all",
                        levelId: 2,
                      },
                      {
                        name: "Not much/ very little",
                        levelId: 4,
                      },
                      {
                        name: "Yes I do/ Yes I am/ Yes it does",
                        levelId: 6,
                      },
                      {
                        name: "Very much",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Protecting health and well-being",
            description:
              "To be able to avoid health- risks and threats to physical and psychological well-being while using digital technologies. To be able to protect oneself and others from possible dangers in digital environments (e.g. cyber bullying). To be aware of digital technologies for social well-being and social inclusion.",
            themes: {
              create: [
                {
                  name: "I am aware that I should manage the time I spend on my digital devices",
                  choices: {
                    create: [
                      {
                        name: "Not at all",
                        levelId: 2,
                      },
                      {
                        name: "Not much/ very little",
                        levelId: 4,
                      },
                      {
                        name: "Yes I do/ Yes I am/ Yes it does",
                        levelId: 6,
                      },
                      {
                        name: "Very much",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know how to protect myself from unwanted and malicious online encounters and materials (e.g. spam messages,  identity theft e-mails).",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know about digital tools that can help older people or people with special needs.",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Protecting the environment",
            description:
              "To be aware of the environmental impact of digital technologies and their use",
            themes: {
              create: [
                {
                  name: "I seek out ways in which digital technologies could help me to live and consume in a more environmentally friendly way.",
                  choices: {
                    create: [
                      {
                        name: "Not at all",
                        levelId: 2,
                      },
                      {
                        name: "Not much/ very little",
                        levelId: 4,
                      },
                      {
                        name: "Yes I do/ Yes I am/ Yes it does",
                        levelId: 6,
                      },
                      {
                        name: "Very much",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know that old digital devices and consumables (e.g. computers, smartphones, batteries) must be appropriately disposed to minimise their environmental impact.",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know how to reduce the energy consumption of my devices (e.g. change settings, close apps, turn off wifi).",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know 'green' behaviours to follow when buying or using digital devices (e.g. purchase devices with Eco-label, restrain from unnecessary printing of digital files, do not leave mobile phones and laptop chargers connected without the device).",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  const digComp_5 = await prisma.area.create({
    data: {
      name: "Problem Solving",
      type: "Digital",
      competences: {
        create: [
          {
            name: "Solving technical problems",
            description:
              "To identify technical problems when operating devices and using digital environments, and to solve them (from trouble-shooting to solving more complex problems).",
            themes: {
              create: [
                {
                  name: "When I face a technical problem, I try step-by-step to identify the problem.",
                  choices: {
                    create: [
                      {
                        name: "Not at all",
                        levelId: 2,
                      },
                      {
                        name: "Not much/ very little",
                        levelId: 4,
                      },
                      {
                        name: "Yes I do/ Yes I am/ Yes it does",
                        levelId: 6,
                      },
                      {
                        name: "Very much",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I know some reasons why a digital device may fail to connect online (e.g. wrong wifi password, airplane mode on).  ",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "When I face a technical problem, I am able to find solutions on the Internet. ",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I am able to edit the configurations of the operating system of my digital devices to solve technical problems (e.g. automatic stop/start of services, modify registry keys)",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Identifying needs and technological responses",
            description:
              "To assess needs and to identify, evaluate, select and use digital tools and possible technological responses and to solve them. To adjust and customise digital environments to personal needs (e.g. accessibility).",
            themes: {
              create: [
                {
                  name: "I usually try to find out if there is a technology solution that might help me address a personal or professional need.",
                  choices: {
                    create: [
                      {
                        name: "Not at all",
                        levelId: 2,
                      },
                      {
                        name: "Not much/ very little",
                        levelId: 4,
                      },
                      {
                        name: "Yes I do/ Yes I am/ Yes it does",
                        levelId: 6,
                      },
                      {
                        name: "Very much",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know the main functions of the most common digital devices (computer, tablet, smartphone).",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know how to select the right tool, device or service to perform a given task (e.g. select a smartphone for my needs, choose a tool for a professional videocall).",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },

                {
                  name: "I know technical solutions that can improve the access and use of digital tools such as language translation, magnification or zoom and text-to-voice functionality.",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Creatively using digital technologies",
            description:
              "To use digital tools and technologies to create knowledge and to innovate processes and products. To engage individually and collectively in cognitive processing to understand and resolve conceptual problems and problem situations in digital environments.",
            themes: {
              create: [
                {
                  name: "I know that digital technology can be used as a powerful tool to innovate processes and products.",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I am willing to take part in challenges and contests, aimed at solving intellectual, social or practical problems through digital technologies.",
                  choices: {
                    create: [
                      {
                        name: "Not at all",
                        levelId: 2,
                      },
                      {
                        name: "Not much/ very little",
                        levelId: 4,
                      },
                      {
                        name: "Yes I do/ Yes I am/ Yes it does",
                        levelId: 6,
                      },
                      {
                        name: "Very much",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I can use data tools (e.g. databases, data mining and analysis software) that manage and organize complex information to make decisions and solve problems.",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Identifying digital competence gaps",
            description:
              "To understand where one’s own digital competence needs to be improved or updated. To be able to support others with their digital competence development. To seek opportunities for self-development and to keep up-to-date with the digital evolution.",
            themes: {
              create: [
                {
                  name: "I am willing to help people in my community improve their digital skills.",
                  choices: {
                    create: [
                      {
                        name: "Not at all",
                        levelId: 2,
                      },
                      {
                        name: "Not much/ very little",
                        levelId: 4,
                      },
                      {
                        name: "Yes I do/ Yes I am/ Yes it does",
                        levelId: 6,
                      },
                      {
                        name: "Very much",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I am curious about new digital devices and applications and I am keen to experiment with them whenever I find the opportunity.",
                  choices: {
                    create: [
                      {
                        name: "Not at all",
                        levelId: 2,
                      },
                      {
                        name: "Not much/ very little",
                        levelId: 4,
                      },
                      {
                        name: "Yes I do/ Yes I am/ Yes it does",
                        levelId: 6,
                      },
                      {
                        name: "Very much",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know how to use online learning tools to improve my digital skills (e.g. video tutorial, online courses).",
                  choices: {
                    create: [
                      {
                        name: "I don't know how to do it",
                        levelId: 2,
                      },
                      {
                        name: "I can do it with help",
                        levelId: 4,
                      },
                      {
                        name: "I can do it on my own",
                        levelId: 6,
                      },
                      {
                        name: "I can do it with confidence and, if needed, I can support/guide others",
                        levelId: 8,
                      },
                    ],
                  },
                },
                {
                  name: "I know about new trends in the digital world and how they impact on my personal or professional life.",
                  choices: {
                    create: [
                      {
                        name: "I have no knowledge of this / I never heard of this",
                        levelId: 2,
                      },
                      {
                        name: "I have only a limited understanding of this",
                        levelId: 4,
                      },
                      {
                        name: "I have a good understanding of this",
                        levelId: 6,
                      },
                      {
                        name: "I fully understand this topic/issue and I could explain it to others",
                        levelId: 8,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  return NextResponse.json([
    levels,
    entreComp_1,
    entreComp_2,
    entreComp_3,
    digComp_1,
    digComp_2,
    digComp_3,
    digComp_4,
    digComp_5,
  ]);
}
