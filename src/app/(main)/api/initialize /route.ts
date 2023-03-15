import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@db";

export async function GET(request: NextRequest) {
  const initialized: any[] = [];

  const areas = await prisma.area.create({
    data: [
      // EntreComp
      {
        name: "Ideas and Opportunities",
        competences: {
          create: [
            {
              name: "Spotting opportunities",
              theme: {
                create: [
                  { name: "Identify, create and seize opportunities" },
                  { name: "Focus on challenges" },
                  { name: "Uncover needs" },
                  { name: "Analyse the context" },
                ],
              },
            },
            {
              name: "Creativity",
              theme: {
                create: [
                  { name: "Be curious and open" },
                  { name: "Develop ideas" },
                  { name: "Define problems" },
                  { name: "Design value" },
                ],
              },
            },
            {
              name: "Vision",
              theme: {
                create: [
                  { name: "Imagine" },
                  { name: "Think strategically" },
                  { name: "Guide action" },
                ],
              },
            },
            {
              name: "Valuing ideas",
              theme: {
                create: [
                  { name: "Recognise the value of ideas" },
                  { name: "Share and protect ideas" },
                  { name: "Guide action" },
                ],
              },
            },
            {
              name: "Ethical and sustainable thinking",
              theme: {
                create: [
                  { name: "Behave ethically" },
                  { name: "Think sustainably" },
                  { name: "Assess impact" },
                  { name: "Be accountable" },
                ],
              },
            },
          ],
        },
      },
      {
        name: "Resources",
        competences: {
          create: [
            {
              name: "Self-awareness and self-efficacy",
              theme: {
                create: [
                  { name: "Follow your aspirations" },
                  { name: "Identify your strengths and weaknesses" },
                  { name: "Believe in your ability" },
                  { name: "Shape your future" },
                ],
              },
            },
            {
              name: "Motivation and perseverance",
              theme: {
                create: [
                  { name: "Stay driven" },
                  { name: "Be determined" },
                  { name: "Focus on what keeps you motivated" },
                  { name: "Be resilient" },
                  { name: "Don’t give up" },
                ],
              },
            },
            {
              name: "Mobilizing resources",
              theme: {
                create: [
                  { name: "Manage resources (material and non material)" },
                  { name: "Use resources responsibly" },
                  { name: "Make the most of your time" },
                  { name: "Get support" },
                ],
              },
            },
            {
              name: "Financial and economic literacy",
              theme: {
                create: [
                  { name: "Understand economic and financial concepts" },
                  { name: "Budget" },
                  { name: "Find funding" },
                  { name: "Understand taxation" },
                ],
              },
            },
            {
              name: "Mobilizing others",
              theme: {
                create: [
                  { name: "Inspire and get inspired" },
                  { name: "Persuade" },
                  { name: "Communicate effectively" },
                  { name: "Use media effectively" },
                ],
              },
            },
          ],
        },
      },
      {
        name: "Into Action",
        competences: {
          create: [
            {
              name: "Taking the initiative",
              theme: {
                create: [
                  { name: "Take responsibility" },
                  { name: "Work independently" },
                  { name: "Take action" },
                ],
              },
            },
            {
              name: "Planning and management",
              theme: {
                create: [
                  { name: "Define goals" },
                  { name: "Plan and organize" },
                  { name: "Develop sustainable business plans" },
                  { name: "Define priorities" },
                  { name: "Monitor your progress" },
                  { name: "Be flexible and adapt to changes" },
                ],
              },
            },
            {
              name: "Coping with uncertainty, ambiguity and risk",
              theme: {
                create: [
                  { name: "Cope with uncertainty and ambiguity" },
                  { name: "Calculate risk" },
                  { name: "Manage risk" },
                ],
              },
            },
            {
              name: "Working with others",
              theme: {
                create: [
                  { name: "Accept diversity (people’s differences)" },
                  { name: "Develop emotional intelligence" },
                  { name: "Listen actively" },
                  { name: "Team up" },
                  { name: "Work together" },
                  { name: "Expand your network" },
                ],
              },
            },
            {
              name: "Learning through experience",
              theme: {
                create: [
                  { name: "Reflect" },
                  { name: "Learn to learn" },
                  { name: "Learn from experience" },
                ],
              },
            },
          ],
        },
      },
      // DigComp
      {
        name: "Information and Data Literacy",
        competences: {
          create: [
            {
              name: "Browsing, searching and filtering information, data and digital content",
            },
            { name: "Evaluating data, information and digital content" },
            { name: "Managing data, information and digital content" },
          ],
        },
      },
      {
        name: "Communication and Collaboration",
        competences: {
          create: [
            { name: "Interacting through digital technologies" },
            {
              name: "Sharing information and content through digital technologies",
            },
            { name: "Engaging in citizenship through digital technologies" },
            { name: "Collaborating through digital technologies" },
            { name: "Netiquette" },
            { name: "Managing digital identity" },
          ],
        },
      },
      {
        name: "Digital Content Creationn",
        competences: {
          create: [
            { name: "Developing digital content" },
            { name: "Integrating and re-elaborating digital content" },
            { name: "Copyright and licences" },
            { name: "Programming" },
          ],
        },
      },
      {
        name: "Safety",
        competences: {
          create: [
            { name: "Protecting devices" },
            { name: "Protecting personal data and privacy" },
            { name: "Protecting health and well-being" },
            { name: "Protecting the environment" },
          ],
        },
      },
      {
        name: "Problem Solving",
        competences: {
          create: [
            { name: "Solving technical problems" },
            { name: "Identifying needs and technological responses" },
            { name: "Creatively using digital technologies" },
            { name: "Identifying digital competence gaps" },
          ],
        },
      },
    ],
  });

  return NextResponse.json(initialized);
}
