import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-slate-100 bg-slate-50 py-8">
            <div className="max-w-310 mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                    <Image
                        alt="PeopleHub Logo"
                        className="h-5 w-5 object-contain"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ-VvN70np2m4tjHRkLaAprhsEUgjFn5kUFB9-zxI94Q0OISdizxX8uSotcsZYhbqWQtB1erxVgVsLT-g3A1YXX-i845GnqevWsZ341ZVjEZdcvz6YyAhcS2d8JI2OIBmOJbIFJJ5DmgBjuFGuPtnNprMT-HOsWHdwpSRNqKWj2OBKfTIj3JA85E4Y09oGJflETyRYRpXsQsdvPI1zsocgaVDPWQ-Q9xUomjU39Dc7R8v1UHB9ESCVWv-FBpp0KCZWXhA"
                        width={20}
                        height={20}
                        unoptimized
                    />
                    <span className="font-bold text-slate-700">PeopleHub</span>
                    <span>© 2025 PeopleHub Inc. All rights reserved.</span>
                </div>
                <div className="flex items-center gap-6 font-medium text-slate-600">
                    <Link className="hover:text-slate-900" href="/privacy">
                        Privacy Policy
                    </Link>
                    <Link className="hover:text-slate-900" href="/terms">
                        Terms of Service
                    </Link>
                    <Link className="hover:text-slate-900" href="/cookies">
                        Cookies
                    </Link>
                </div>
            </div>
        </footer>
    );
}