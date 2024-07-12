export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex-col-center-center p-4 bg-black">
      <div className="w-full h-full p-8 rounded-xl bg-white">{children}</div>
    </div>
  );
}
