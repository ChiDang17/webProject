"use client";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Filters } from '@/app/list_of_products/page';
import Link from 'next/link';
import { RiDropdownList } from 'react-icons/ri';

type FiltersBarProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>; // update state of filters
};

export const FiltersBar = ({ filters, setFilters }: FiltersBarProps) => {
    const [colors, setColors] = useState<string[]>([]);
    const [sizes, setSizes] = useState<number[]>([]);
    const [productTypes, setProductTypes] = useState<string[]>([]);

    // using temp states so filters don't update immediately on checkbox click
    // (want to update when "apply filters" is clicked)
    const [tempSelectedColors, setTempSelectedColors] = useState<string[]>([]);
    const [tempSelectedSizes, setTempSelectedSizes] = useState<number[]>([]);
    const [tempSelectedProductTypes, setTempSelectedProductTypes] = useState<string[]>([]);

    // for dropdowns
    const [isColorsOpen, setIsColorsOpen] = useState(false);
    const [isSizesOpen, setIsSizesOpen] = useState(false);
    const [isProductTypesOpen, setisProductTypesOpen] = useState(false);

    useEffect(() => {
        axios.get("https://cg0jnzdv-8080.usw2.devtunnels.ms/api/product/allColors")
            .then((response) => {
                setColors(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        axios.get("https://cg0jnzdv-8080.usw2.devtunnels.ms/api/product/allSizes")
            .then((response) => {
                setSizes(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        axios.get("https://cg0jnzdv-8080.usw2.devtunnels.ms/api/product/categories")
            .then((response) => {
                setProductTypes(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        setTempSelectedColors(filters.colors);
        setTempSelectedSizes(filters.sizes);
        setTempSelectedProductTypes(filters.productTypes);
    },[filters]);

    const colorCheckbox = (color: string) => {
        if (tempSelectedColors.includes(color)) {
            // if color is selected, remove from possible filter options
            let updatedColors = tempSelectedColors.filter(c => c !== color);
            setTempSelectedColors(updatedColors);
        } else {
            // if color is not selected, add to possible filter options
            setTempSelectedColors(tempSelectedColors.concat(color));
        }
    }

    const sizeCheckbox = (size: number) => {
        if (tempSelectedSizes.includes(size)) {
            let updatedSizes = tempSelectedSizes.filter(s => s !== size);
            setTempSelectedSizes(updatedSizes);
        } else {
            setTempSelectedSizes(tempSelectedSizes.concat(size));
        }
    }

    const productTypeCheckbox = (productType: string) => {
        if (tempSelectedProductTypes.includes(productType)) {
            let updatedProductTypes = tempSelectedProductTypes.filter(pt => pt !== productType);
            setTempSelectedProductTypes(updatedProductTypes);
        } else {
            setTempSelectedProductTypes(tempSelectedProductTypes.concat(productType));
        }
    }

    const buildFilters = () => {
        let params = new URLSearchParams();
        if (tempSelectedColors.length > 0) {
            params.append('colors', tempSelectedColors.join(','));
        }
        if (tempSelectedSizes.length > 0) {
            params.append('sizes', tempSelectedSizes.join(','));
        }
        if (tempSelectedProductTypes.length > 0) {
            params.append('productTypes', tempSelectedProductTypes.join(','));
        }
        return "/list_of_products?" + params.toString();
    }

    const applyFilters = () => {
        setFilters({
            colors: tempSelectedColors,
            sizes: tempSelectedSizes,
            productTypes: tempSelectedProductTypes,
        });
    }


    return (
        <div className='filter-box'>
            <p style={{paddingBottom: "20px", paddingTop: "20px", fontSize: 30}}>Filters</p>
            <div className='filter-options'>
                <div onClick={() => setIsColorsOpen(!isColorsOpen)} className='filter-clicked'>
                    <p>Colors</p>
                    <p style={{ marginLeft: "170px" }}>▼</p>
                </div>
                {isColorsOpen && (
                    <ul>
                        {colors.map(function(color) {
                        return (
                            <label key={color} className='filter-choices'>
                                <input
                                    type="checkbox"
                                    value={color}
                                    checked={tempSelectedColors.includes(color)}
                                    onChange={() => colorCheckbox(color)}
                                />
                                    {color}
                            </label>
                        );
                    })}
                    </ul>
                )}
            </div>

            <div className='filter-options'>
                <div onClick={() => setIsSizesOpen(!isSizesOpen)} className='filter-clicked'>
                    <p>Sizes</p>
                    <p style={{ marginLeft: "180px" }}>▼</p>
                </div>
                {isSizesOpen && (
                    <ul>
                        {sizes.map(function(size) {
                        return (
                            <label key={size} className='filter-choices'>
                                <input
                                    type="checkbox"
                                    value={size}
                                    checked={tempSelectedSizes.includes(size)}
                                    onChange={() => sizeCheckbox(size)}
                                />
                                    {size}
                            </label>
                        );
                    })}
                    </ul>
                )}
            </div>

             <div className='filter-options'>
                <div onClick={() => setisProductTypesOpen(!isProductTypesOpen)} className='filter-clicked'>
                    <p>Jewellery Types</p>
                    <p style={{ marginLeft: "150px" }}>▼</p>
                </div>
                {isProductTypesOpen && (
                    <ul>
                        {productTypes.map(function(productType) {
                        return (
                            <label key={productType} className='filter-choices'>
                                <input
                                    type="checkbox"
                                    value={productType}
                                    checked={tempSelectedProductTypes.includes(productType)}
                                    onChange={() => productTypeCheckbox(productType)}
                                />
                                {productType}
                            </label>
                        );
                    })}
                    </ul>
                )}
            </div>
           
            <div id='apply-all-filters' className='apply-filters-button'>
                    <Link href={buildFilters()}>
                        Apply Filters
                    </Link>
            </div>
        </div>
    );
};
