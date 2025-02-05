import Image from "next/image";
import * as Components from '../components/components.js';

export default function Home() {
  return (
    <main className="h-full flex-col justify-start">
      < Components.Sidebar />
    </main>
  );
}
