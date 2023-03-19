import Nav from "../../components/Nav";

import { prisma } from "@db";

// async function getRecords() {
//   return await prisma.theme.findMany({
//     include: {
//       choices: true,
//       competence: {
//         include: {
//           area: true,
//         },
//       },
//     },
//   });
// }

export default async function Page({ params }: any) {
    console.log(params)
  return <div>My Post</div>;
}

export const dynamic = "force-dynamic";
