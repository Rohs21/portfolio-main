import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
    const year = new Date().getFullYear();
    
    // Custom X (Twitter) SVG Icon Component
    const XIcon = ({ size = 18, className = '' }) => (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            className={className}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
    );
    
    // Custom LeetCode SVG Icon Component
    const LeetCodeIcon = ({ size = 18, className = '' }) => (
        <svg 
            width={size} 
            height={size} 
            viewBox="0 0 24 24" 
            className={className}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.037l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
        </svg>
    );
    
    const socialLinks = [
        { 
            icon: XIcon, 
            href: 'https://x.com/RohanSingh2104',
            label: 'X',
            isCustomIcon: true
        },
        { 
            icon: Github, 
            href: 'https://github.com/Rohs21',
            label: 'GitHub',
            isCustomIcon: false
        },
        { 
            icon: LeetCodeIcon, 
            href: 'https://leetcode.com/u/Rohan_s21/',
            label: 'LeetCode',
            isCustomIcon: true
        },
        { 
            icon: Mail, 
            href: 'mailto:rohans212004@gmail.com',
            label: 'Email',
            isCustomIcon: false
        },
        { 
            icon: Linkedin, 
            href: 'https://www.linkedin.com/in/rohan-singh212004/',
            label: 'LinkedIn',
            isCustomIcon: false
        }
    ];

    return (
        <footer className="w-full border-t border-neutral-200/30 dark:border-neutral-700/30 bg-white/5 dark:bg-black/10 backdrop-blur-md">
            <div className="max-w-4xl mx-auto px-6 py-8">
                {/* Main content container */}
                <div className="flex flex-col items-center space-y-4">
                    
                    {/* Made with love section */}
                    <div className="text-center space-y-1">
                        <div className="text-neutral-700 dark:text-neutral-300 text-sm font-medium tracking-wide">
                            Designed & Made with <span className="text-red-500 animate-pulse drop-shadow-sm">❤️</span>
                        </div>
                        <div className="text-neutral-600 dark:text-neutral-400 text-xs">
                            by <span className="font-semibold text-neutral-800 dark:text-neutral-200 bg-gradient-to-r from-neutral-700 to-neutral-900 dark:from-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent">Rohan Singh</span>
                        </div>
                    </div>
                    
                    {/* Enhanced Divider */}
                    <div className="relative w-24 h-px">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400/50 dark:via-neutral-500/50 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300/30 dark:via-neutral-600/30 to-transparent blur-sm"></div>
                    </div>
                    
                    {/* Social Media Links */}
                    <div className="flex items-center justify-center gap-3">
                        {socialLinks.map((social, index) => {
                            const IconComponent = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-10 h-10 bg-white/10 dark:bg-black/20 border border-neutral-200/20 dark:border-neutral-700/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-neutral-200/20 dark:hover:shadow-neutral-800/30 hover:border-neutral-300/30 dark:hover:border-neutral-600/40 hover:bg-white/20 dark:hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-neutral-500/50 focus:ring-offset-2 focus:ring-offset-transparent backdrop-blur-sm"
                                    aria-label={`Visit my ${social.label} profile`}
                                >
                                    {social.isCustomIcon ? (
                                        <IconComponent 
                                            size={17} 
                                            className="text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-all duration-300 drop-shadow-sm"
                                        />
                                    ) : (
                                        <IconComponent 
                                            size={17} 
                                            className="text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-all duration-300 drop-shadow-sm"
                                            strokeWidth={1.5}
                                        />
                                    )}
                                    
                                    {/* Enhanced Tooltip */}
                                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-neutral-900/90 dark:bg-neutral-100/90 text-white dark:text-neutral-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap backdrop-blur-sm border border-neutral-700/50 dark:border-neutral-300/50 shadow-lg">
                                        {social.label}
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-3 border-transparent border-t-neutral-900/90 dark:border-t-neutral-100/90"></div>
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                    
                    {/* Copyright */}
                    <div className="text-center pt-2">
                        <p className="text-xs text-neutral-500/80 dark:text-neutral-400/80 tracking-wider font-light">
                            © {year} Rohan Singh. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer