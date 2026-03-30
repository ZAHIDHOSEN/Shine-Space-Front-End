import Link from "next/link";



export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">

      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-4">

        {/* Logo + Description */}
        <div>
          <h2 className="text-xl font-bold text-white">Shine Space</h2>
          <p className="text-sm mt-3">
            Find your dream property with Shine Space. We connect buyers,
            sellers, and agents in one trusted platform.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/agents">Our Agents</Link></li>
            <li><Link href="/property">Properties</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/help">Help Center</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: zahidhosen203@gamil.com</li>
            <li>Phone: +880 1793397830</li>
            <li>Location: Bangladesh</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} Shine Space. All rights reserved.
      </div>

    </footer>
  )
}
