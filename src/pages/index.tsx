import { Menu } from "@/features/home/Menu";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-full bg-white">
      <Menu />
    </div>
  );
}
