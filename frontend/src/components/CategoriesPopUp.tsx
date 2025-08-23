"use client";
import React, { useEffect, useState } from 'react';
import { CategoriesBar } from './CategoriesBar';

type CategoriesBarPopUpProps = {
    isOpen: boolean;
    onClose: () => void;
}

export const CategoriesPopUp = ({isOpen, onClose}: CategoriesBarPopUpProps) => {
    if (typeof document === "undefined") return null;
    return (
        <div>
            <div
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-[999] ${
                isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={onClose}
            >
                
            </div>

            <div
                className={`fixed top-0 right-0 h-full w-80 shadow-lg transform transition-transform duration-300 z-[99999] ${
                isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ backgroundColor: '#e2c9abff', zIndex: 9999}}
            >
                <button onClick={onClose} className='close-filters-button' style={{fontSize: "1.5rem", paddingLeft: "1rem"}}>x</button>
                <div className="flex flex-col p-4 space-y-3">
                <CategoriesBar isVertical textColor='text-black'/>
                </div>
            </div>  
        </div>
    );
};

