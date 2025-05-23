"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  onClick, // Optional onClick property
  tabIndex = 0, // Add tabIndex prop with default
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  onClick?: () => void; // Optional click handler
  tabIndex?: number; // Add tabIndex to props
}) => {
  const isActive = active === item;

  return (
    <div
      onMouseEnter={() => setActive(item)}
      onFocus={() => setActive(item)} // Accessibility: open on focus
      className="relative"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] font-bold transition-transform transform flex items-center hover:rounded-lg hover:bg-gray-100 hover:bg-contain hover:px-2 hover:py-1"
        onClick={onClick}
        tabIndex={tabIndex} // Apply tabIndex here
        onBlur={() => setActive(null)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onClick?.();
          }
        }}
      >
        {item}
        {children && (
          <span className="ml-2">
            {isActive ? <IconChevronUp size={16} role="none"/> : <IconChevronDown size={16} role="none"/>}
          </span>
        )}
      </motion.p>
      {isActive && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          <div
            className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4"
            onMouseLeave={() => setActive(null)}
            onBlur={() => setActive(null)}
            tabIndex={-1}
          >
            <motion.div
              transition={transition}
              layoutId="active"
              className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-maroon-primary"
            >
              <motion.div layout className="w-max h-full p-4">
                {children}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative flex justify-center space-x-4 px-8 py-6 lg:mt-10"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, isPrimary = false , ...rest }: any) => {
  return (
    <Link
      {...rest}
      className={`transition-transform transform hover:scale-110 ${
        isPrimary
          ? "text-gray-700 font-semibold"
          : "text-gray-700 hover:text-gray-700"
      }`}
    >
      {children}
    </Link>
  );
};