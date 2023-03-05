import "../global.css";
import AuthProvider from "../providers";

export const metadata = {
  title: "CU Competence | Self-Assessment Tool",
  description: "Self-assessment tool to evaluate competeces.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
