"use client"

import type React from "react"

import Link from "next/link"
import { Settings, Search, ImageIcon, Mail, User, Grid, LogOut } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)
  const appsButtonRef = useRef<HTMLButtonElement>(null)
  const profileButtonRef = useRef<HTMLButtonElement>(null)

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Close apps menu when clicking outside
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        appsButtonRef.current &&
        !appsButtonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false)
      }

      // Close profile menu when clicking outside
      if (
        profileOpen &&
        profileRef.current &&
        !profileRef.current.contains(event.target as Node) &&
        profileButtonRef.current &&
        !profileButtonRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen, profileOpen])

  return (
    <header className="flex justify-end items-center p-4 h-16">
      <nav className="flex items-center space-x-4 text-sm">
        <Link
          href="https://mail.google.com"
          className="text-white hover:underline transition-colors duration-200 px-2 py-1 rounded-md hover:bg-white/10"
        >
          Gmail
        </Link>
        <Link
          href="https://www.google.com/imghp"
          className="text-white hover:underline transition-colors duration-200 px-2 py-1 rounded-md hover:bg-white/10"
        >
          Images
        </Link>

        {/* Apps menu button */}
        <button
          ref={appsButtonRef}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
          onClick={() => {
            setMenuOpen(!menuOpen)
            if (profileOpen) setProfileOpen(false)
          }}
          aria-label="Google apps"
          aria-expanded={menuOpen}
          aria-haspopup="true"
        >
          <Grid className="w-5 h-5 text-white" />
        </button>

        {/* Profile button */}
        <button
          ref={profileButtonRef}
          className="w-8 h-8 rounded-full bg-[#1a73e8] text-white flex items-center justify-center text-sm font-medium hover:shadow-md transition-shadow duration-200"
          onClick={() => {
            setProfileOpen(!profileOpen)
            if (menuOpen) setMenuOpen(false)
          }}
          aria-label="Google Account"
          aria-expanded={profileOpen}
          aria-haspopup="true"
        >
          G
        </button>
      </nav>

      {/* Apps dropdown menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 right-4 bg-white/90 backdrop-blur-md shadow-lg rounded-lg p-4 w-80 z-20 grid grid-cols-3 gap-4"
        >
          <AppMenuItem icon={<Search className="w-5 h-5" />} name="Search" />
          <AppMenuItem icon={<Mail className="w-5 h-5" />} name="Gmail" />
          <AppMenuItem icon={<ImageIcon className="w-5 h-5" />} name="Images" />
          <AppMenuItem icon={<Grid className="w-5 h-5" />} name="Maps" />
          <AppMenuItem icon={<Grid className="w-5 h-5" />} name="Drive" />
          <AppMenuItem icon={<Grid className="w-5 h-5" />} name="Calendar" />
          <AppMenuItem icon={<Grid className="w-5 h-5" />} name="Photos" />
          <AppMenuItem icon={<Grid className="w-5 h-5" />} name="Meet" />
          <AppMenuItem icon={<Grid className="w-5 h-5" />} name="Docs" />
        </div>
      )}

      {/* Profile dropdown menu */}
      {profileOpen && (
        <div
          ref={profileRef}
          className="absolute top-16 right-4 bg-white/90 backdrop-blur-md shadow-lg rounded-lg p-4 w-80 z-20"
        >
          <div className="flex items-center space-x-4 border-b border-gray-200 pb-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#1a73e8] text-white flex items-center justify-center text-xl font-medium">
              G
            </div>
            <div>
              <p className="font-medium text-gray-800">Google User</p>
              <p className="text-sm text-gray-600">user@gmail.com</p>
            </div>
          </div>

          <div className="space-y-2">
            <ProfileMenuItem icon={<User className="w-4 h-4" />} name="Manage your Google Account" />
            <ProfileMenuItem icon={<Settings className="w-4 h-4" />} name="Settings" />
            <ProfileMenuItem icon={<LogOut className="w-4 h-4" />} name="Sign out" />
          </div>
        </div>
      )}
    </header>
  )
}

// App menu item component
function AppMenuItem({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <a
      href="#"
      className="flex flex-col items-center justify-center p-3 rounded-lg hover:bg-black/5 transition-colors duration-200"
    >
      <div className="text-gray-700 mb-1">{icon}</div>
      <span className="text-xs text-gray-800">{name}</span>
    </a>
  )
}

// Profile menu item component
function ProfileMenuItem({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <a href="#" className="flex items-center space-x-3 p-2 rounded-md hover:bg-black/5 transition-colors duration-200">
      <div className="text-gray-700">{icon}</div>
      <span className="text-sm text-gray-800">{name}</span>
    </a>
  )
}
