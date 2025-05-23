"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { IconMenu2, IconX, IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export function Mainnavbar() {
  return (
    <nav className="relative top-0 w-full flex flex-row items-start justify-between mt-20 shadow-md">
      <Navbar className="top-2" />
    </nav>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="relative flex items-center justify-between h-30 mb-10">
          {/* Logo */}
          <div className="h-full w-[300px] sm:w-[400px]">
            <Image
              src="/careerproject.svg"
              role='none'
              alt="Long Logo"
              width={400}
              height={50}
            />
          </div>

          {/* Desktop nav links */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2
                hidden lg:flex flex-nowrap space-x-7 items-center
                h-1/2 mt-23 border-2 rounded-full px-4 border-gray-300
                whitespace-nowrap">
            <Link href="/" passHref tabIndex={0}>
              <MenuItem setActive={setActive} active={active} item="Home" tabIndex={0} />
            </Link>
            <MenuItem
              setActive={setActive}
              active={active}
              item="About Us"
              onClick={() => router.push("/pages/About/")}
              tabIndex={0}
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/pages/About/CHPTeam/" tabIndex={-1}>
                  CHP Teams
                </HoveredLink>
                <HoveredLink href="/pages/About/SubAwards/" tabIndex={-1}>
                  Sub-Awards
                </HoveredLink>
                <HoveredLink href="/pages/About/Consultants/" tabIndex={-1}>
                  Consultants
                </HoveredLink>
                <HoveredLink
                  href="/chpinfo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CHP Infographic"
                >
                  CHP Infographic
                </HoveredLink>
              </div>
            </MenuItem>
            <Link href="/pages/PartneringAgencies/" passHref>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Partnering Agencies"
                tabIndex={0}
              />
            </Link>
            <MenuItem setActive={setActive} active={active} item="Resources" tabIndex={0}>
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/pages/Resources/PeopleWithDisabilities">
                  Resources for People with Disabilities
                </HoveredLink>
                <HoveredLink href="/pages/Resources/FamilyMembers/">
                  Resources for Family Members
                </HoveredLink>
                <HoveredLink href="/pages/Resources/VR&HSP/">
                  Resources for VR & Health Service Providers
                </HoveredLink>
                <HoveredLink href="/pages/Resources/Employers/">
                  Resources for Employers
                </HoveredLink>
              </div>
            </MenuItem>
            <MenuItem
              setActive={setActive}
              active={active}
              item="News and Events"
              tabIndex={0}
            >
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/pages/NewsEvents/NewsUpdates/">
                  News and Updates
                </HoveredLink>
              </div>
            </MenuItem>
            <Link href="/pages/ContactUs/" passHref>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Contact Us"
                tabIndex={0}
              />
            </Link>

            <MenuItem setActive={setActive} active={active} item="Forms">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/forms/1/ReferralForm">Referral Form</HoveredLink>
                <HoveredLink href="/forms/1/ReferralSurvey">Referral Survey</HoveredLink>
                <HoveredLink href="/forms/1/EligibilityScreeningAssessment">Eligibility Screening Assessment</HoveredLink>
                <HoveredLink href="/forms/1/IntakeForm">Intake Form</HoveredLink>
                <HoveredLink href="/Adminpage">Admin dashboard</HoveredLink>
              </div>
            </MenuItem>
          </div>
          

          {/* Login & Mobile Toggle */}
          <div className="flex items-center space-x-4">

          <button className="bg-[#5D1725] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full h-12 text-sm font-semibold leading-6 text-white inline-block min-w-[150px] max-w-[200px]" onClick={() => router.push("/Adminpage/")} tabIndex={0}>
            <div className="relative flex justify-center items-center space-x-2 z-10 rounded-full bg-[#5D1725] px-4 h-12 ring-1 ring-white/10">
              <span>
                Login
              </span>
            </div>
          </button>

          <button className="bg-[#5D1725] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full h-12 text-sm font-semibold leading-6 text-white inline-block min-w-[150px] max-w-[200px]" onClick={() => router.push("/pages/Referral/")} tabIndex={0}>
            <div className="relative flex justify-center items-center space-x-2 z-10 rounded-full bg-[#5D1725] px-4 h-12 ring-1 ring-white/10">
              <span>
                Make a Referral
              </span>
            </div>
          </button>
            <div className="lg:hidden">
              <button
                aria-label="Toggle navigation menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <IconX size={32} /> : <IconMenu2 size={32} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-black z-40 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center space-y-4 text-center">
            <HoveredLink href="/" isPrimary>
              Home
            </HoveredLink>

            <Dropdown title="About Us">
              <HoveredLink href="/pages/About/CHPTeam/">
                CHP Teams
              </HoveredLink>
              <HoveredLink href="/pages/About/SubAwards/">
                Sub-Awards
              </HoveredLink>
              <HoveredLink href="/pages/About/Consultants/">
                Consultants
              </HoveredLink>
              <HoveredLink
                href="/chpinfo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CHP Infographic/Brochure"
              >
                CHP Infographic/Brochure
              </HoveredLink>
            </Dropdown>

            <HoveredLink href="/pages/PartneringAgencies/" isPrimary>
              Partnering Agencies
            </HoveredLink>

            <Dropdown title="Resources">
              <HoveredLink href="/pages/Resources/PeopleWithDisabilities">
                Resources for People with Disabilities
              </HoveredLink>
              <HoveredLink href="/pages/Resources/FamilyMembers/">
                Resources for Family Members
              </HoveredLink>
              <HoveredLink href="/pages/Resources/VR&HSP/">
                Resources for VR & Health Service Providers
              </HoveredLink>
              <HoveredLink href="/pages/Resources/Employers/">
                Resources for Employers
              </HoveredLink>
            </Dropdown>

            <Dropdown title="News & Events">
              <HoveredLink href="/pages/NewsEvents/NewsUpdates/">
                News and Updates
              </HoveredLink>
            </Dropdown>

            <HoveredLink href="/pages/ContactUs/" isPrimary>
              Contact Us
            </HoveredLink>
          </div>
        </div>
      )}
    </>
  );
}

function Dropdown({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-gray-700 font-semibold transition-transform transform hover:scale-110 px-4 py-3"
        tabIndex={0}
        aria-expanded={open}
        aria-controls={`dropdown-${title.replace(/\s+/g, "-").toLowerCase()}`}
      >
        {title}
        <span className="ml-2 inline-block">
          {open ? <IconChevronUp size={16} role="none"/> : <IconChevronDown role="none"size={16} />}
        </span>
      </button>
      {open && (
        <div
          className="flex flex-col items-center space-y-2 mt-2"
          id={`dropdown-${title.replace(/\s+/g, "-").toLowerCase()}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Mainnavbar;