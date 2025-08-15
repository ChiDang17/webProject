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
        <div id='filter-box'>
            <p style={{paddingBottom: "20px", paddingTop: "20px"}}>Filters</p>
            <div id='color-options' style={{borderBottomColor: "black", borderBottomWidth: "1px", borderBottomStyle: "solid", padding : "10px", width: "250px", marginBottom: "20px"}}>
                <div onClick={() => setIsColorsOpen(!isColorsOpen)} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                    Colors ▼
                </div>
                {isColorsOpen && (
                    <ul>
                        {colors.map(function(color) {
                        return (
                            <label key={color} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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

            <div id='size-options' style={{borderBottomColor: "black", borderBottomWidth: "1px", borderBottomStyle: "solid", padding : "10px", width: "250px", marginBottom: "20px", paddingBottom: "10px"}}>
                <div onClick={() => setIsSizesOpen(!isSizesOpen)} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                    Sizes ▼
                </div>
                {isSizesOpen && (
                    <ul>
                        {sizes.map(function(size) {
                        return (
                            <label key={size} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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

             <div id='product-type-options' style={{borderBottomColor: "black", borderBottomWidth: "1px", borderBottomStyle: "solid", padding : "10px", width: "250px", marginBottom: "20px", paddingBottom: "10px"}}>
                <div onClick={() => setisProductTypesOpen(!isProductTypesOpen)} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                    Jewellery Types ▼
                </div>
                {isProductTypesOpen && (
                    <ul>
                        {productTypes.map(function(productType) {
                        return (
                            <label key={productType} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
           
            <div id='apply-all-filters' style={{outlineColor:"black", outlineStyle:"solid", outlineWidth:"1px", padding : "10px", width: "130px", textAlign: "center"}}>
                    <Link href={buildFilters()}>
                        Apply Filters
                    </Link>
            </div>
        </div>
    );
};
