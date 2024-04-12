import HeaderNav from "../_lib/ui/header";
import FootorBar from "../_lib/ui/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full overflow-hidden">
      <HeaderNav />
      <div className=" w-full min-h-screen">{children}</div>

      <FootorBar />
    </div>
  );
}
