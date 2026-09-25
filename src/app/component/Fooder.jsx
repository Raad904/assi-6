import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#0c1214] border-t border-[#273034] shrink-0 my-4">

            <div className="container-width mx-auto px-4 md:px-6">

                <div className="flex min-h-[84px] items-center justify-between">

                    <div className="flex items-center gap-2">

                        <Image
                            src="/images/logo.png"
                            alt="FITLOG Logo"
                            width={30}
                            height={30}
                            className="object-contain"
                        />

                        <span className="text-white text-xl font-bold">
                            FITLOG
                        </span>

                    </div>

         
                    <p className="text-xs text-[#697278]">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;