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
            { name: "Spotting opportunities" },
            { name: "Creativity" },
            { name: "Vision" },
            { name: "Valuing ideas" },
            { name: "Ethical and sustainable thinking" },
          ],
        },
      },
      {
        name: "Resources",
        competences: {
          create: [
            { name: "Self-awareness and self-efficacy" },
            { name: "Motivation and perseverance" },
            { name: "Mobilizing resources" },
            { name: "Financial and economic literacy" },
            { name: "Mobilizing others" },
          ],
        },
      },
      {
        name: "Into Action",
        competences: {
          create: [
            { name: "Taking the initiative" },
            { name: "Planning and management" },
            { name: "Coping with uncertainty, ambiguity and risk" },
            { name: "Working with others" },
            { name: "Learning through experience" },
          ],
        },
      },
      // DigComp
      {
        name: "Information and Data Literacy",
        competences: {
          create: [
            { name: "Browsing, searching and filtering information, data and digital content." },
            { name: "Evaluating data, information and digital content." },
            { name: "Managing data, information and digital content." },
          ],
        },
      },
      {
        name: "Communication and Collaboration",
        competences: {
          create: [
            { name: "Interacting through digital technologies." },
            { name: "Sharing information and content through digital technologies." },
            { name: "Engaging in citizenship through digital technologies." },
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
