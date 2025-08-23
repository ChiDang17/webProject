import { Filters } from '@/app/list_of_products/page';
import React, { useState } from 'react';
import { FiltersBar } from './FiltersBar';

type FiltersPopUpProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  className?: string;
};

export const FiltersPopUp = ({ filters, setFilters, className }: FiltersPopUpProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="open-filters-button"
      >
        ⛯ Filters
      </button>

      {/* overlay behind filter popup so it stands out more & can close by clicking outside */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* slide out filter popup */}
      <div
        className={`fixed top-0 left-0 h-full w-80 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: '#e2c9abff' }}
      >
        <p className='filter-bar-title'>Filters</p>
        <button  className='close-filters-button'onClick={() => setIsOpen(false)}>✕</button>

        <FiltersBar filters={filters} setFilters={setFilters} className="filters-bar" />
      </div>

    </div>
  );
};
