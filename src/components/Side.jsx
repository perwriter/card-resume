import React from 'react'
import Image from "next/image";
import { Facebook, Linkedin, Twitter, Github } from "lucide-react";

const Side = () => {
    const socialPlatforms = [
        { name: "facebook", href: "https://facebook.com", icon: Facebook, color: "#3b5998" },
        { name: "linkedin", href: "https://linkedin.com", icon: Linkedin, color: "#0077b5" },
        { name: "twitter", href: "https://twitter.com", icon: Twitter, color: "#1da1f2" },
        { name: "github", href: "https://github.com", icon: Github, color: "#171515" },
      ];
  return (
    <div>
              {/* Left Sidebar */}
      <aside className="bg-white rounded-xl p-6 w-[300px] flex flex-col items-center text-center">
        <div className="w-48 h-48 bg-orange-500 rounded-xl overflow-hidden mb-6">
          <Image
            src="/passportphoto.png?height=192&width=192"
            alt="Profile"
            height={192}
            width={192}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl font-bold mb-2">Kimiri Peter Macharia</h1>
        <p className="text-gray-600 mb-8">Website Developer</p>

        {/* Social Links */}
        <div className="flex gap-4 mb-12">
      {socialPlatforms.map(({ name, href, icon: Icon, color }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors"
          style={{ backgroundColor: color }}
        >
          <Icon size={24} className="text-white" />
        </a>
      ))}
    </div>

        {/* Contact Information */}
        <div className="w-full space-y-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8">
              <img
                src="/phone.svg?height=32&width=32"
                alt="Phone"
                className="w-full h-full"
              />
            </div>
            <div className="text-left">
              <p className="text-gray-600 text-sm">Phone</p>
              <p>+254715990719</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-8 h-8">
              <img
                src="/email.svg?height=32&width=32"
                alt="Email"
                className="w-full h-full"
              />
            </div>
            <div className="text-left">
              <p className="text-gray-600 text-sm">Email</p>
              <p>perwriters@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-8 h-8">
              <img
                src="/location.svg?height=32&width=32"
                alt="Location"
                className="w-full h-full"
              />
            </div>
            <div className="text-left">
              <p className="text-gray-600 text-sm">Location</p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
          <img
            src="/placeholder.svg?height=24&width=24"
            alt="Download"
            className="w-6 h-6"
          />
          Download Resume
        </button>
      </aside>
    </div>
  )
}

export default Side