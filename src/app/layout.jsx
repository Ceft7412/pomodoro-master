import ClientLayout from './ClientLayout'

export const metadata = {
  description: "Pomodoro master is an app that is easy to use and helps you to focus on your tasks. You can customize the app to your liking. Choose your aesthetic themes without hassle!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}