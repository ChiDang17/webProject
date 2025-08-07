"use client";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Filters } from '@/app/list_of_products/page';

type FiltersBarProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export const FiltersBar = ({ filters, setFilters }: FiltersBarProps) => {
    const [colors, setColors] = useState<string[]>([]);
    const [sizes, setSizes] = useState<number[]>([]);
    const [productTypes, setProductTypes] = useState<string[]>([]);

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

    function colorCheckbox(color: string) {
        if (filters.colors.includes(color)) {
            // if color is selected, remove from possible filter options & update filters
            setFilters({
                colors: filters.colors.filter(c => c !== color),
                sizes: filters.sizes,
                productTypes: filters.productTypes,
            });
        } else {
            // if color is not selected, add to possible filter options & update filters
            setFilters({
                colors: filters.colors.concat(color),
                sizes: filters.sizes,
                productTypes: filters.productTypes,
            });
        }
    }

    function sizeCheckbox(size: number) {
        if (filters.sizes.includes(size)) {
            setFilters({
                colors: filters.colors,
                sizes: filters.sizes.filter(s => s !== size),
                productTypes: filters.productTypes,
            });
        } else {
            setFilters({
                colors: filters.colors,
                sizes: filters.sizes.concat(size),
                productTypes: filters.productTypes,
            });
        }
    }

    function productTypeCheckbox(productType: string) {
        if (filters.productTypes.includes(productType)) {
            setFilters({
                colors: filters.colors,
                sizes: filters.sizes,
                productTypes: filters.productTypes.filter(p => p !== productType),
            });
        } else {
            setFilters({
                colors: filters.colors,
                sizes: filters.sizes,
                productTypes: filters.productTypes.concat(productType),
            });
        }
    }


    return (
        <div id='filter-box'>
            <div id='color-options'>
                <p>Colors:</p>
                    {colors.map(function(color) {
                        return (
                            <label key={color}>
                                <input
                                type="checkbox"
                                value={color}
                                checked={filters.colors.indexOf(color) !== -1}
                                onChange={() => colorCheckbox(color)}
                            />
                            {color}
                        </label>
                    );
                })}
            </div>

            <div id='size-options'>
                <p>Sizes:</p>
                    {sizes.map(function(size) {
                        return (
                            <label key={size}>
                                <input
                                    type="checkbox"
                                    value={size}
                                    checked={filters.sizes.indexOf(size) !== -1}
                                    onChange={() => sizeCheckbox(size)}
                                />
                            {size}
                        </label>
                    );
                })}
            </div>

            <div id='product-type-options'>
                <p>Jewellery Types:</p>
                    {productTypes.map(function(productType) {
                        return (
                            <label key={productType}>
                                <input
                                    type="checkbox"
                                    value={productType}
                                    checked={filters.productTypes.indexOf(productType) !== -1}
                                    onChange={() => productTypeCheckbox(productType)}
                                />
                            {productType}
                        </label>
                    );
                })}
            </div>
        </div>
    );
};
