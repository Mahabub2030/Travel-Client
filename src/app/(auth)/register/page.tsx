import RegisterForm from "@/components/modules/Authentication/RegisterFormComponent";
import { Metadata } from "next";
import Image from "next/image";
import regImg from "../.../../../../../public/reg.jpg";
export const metadata: Metadata = {
  title: "Register - Travel Buddy Finder",
  description: "Jim the best community of travelers.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen w-full flex bg-background">
      {/* Left Side: Professional Travel Visual (Server Component Logic) */}
      <div className="hidden lg:flex w-1/2 relative bg-gray-900 text-white flex-col justify-between p-12 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={regImg}
            alt="Travel Adventure"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Content over image */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold tracking-wide">
            Travel Buddy Finder
          </h3>
        </div>

        <div className="relative z-10 max-w-lg">
          <blockquote className="space-y-2">
            <p className="text-lg font-medium leading-relaxed">
              &ldquo;I found my best travel buddies through Travel Buddy Finder.
              We explored the mountains of Nepal together, and it was an
              experience of a lifetime. Highly recommended for solo
              travelers!&rdquo;
            </p>
            <footer className="text-sm font-semibold text-gray-300">
              — Mahabub (Adapted)
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Right Side: Register Form (Client Component Injection) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative">
        {/* Background blobs for aesthetics */}
        <div className="absolute top-0 right-0 -z-10 w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-3xl opacity-50 dark:bg-blue-900/20" />

        <RegisterForm />
      </div>
    </div>
  );
}
