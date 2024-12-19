import React, { useState } from 'react';
import '../index.css';


const BookFilters = ({ onFilterChange, onSearchChange, onSortChange }) => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [recommended, setRecommended] = useState(false);
    const [newArrivals, setNewArrivals] = useState(false);
    const [popular, setPopular] = useState(false);
    const [discounted, setDiscounted] = useState(false);
    const [sort, setSort] = useState("");

    const handleFilter = () => {
        onFilterChange({
            category,
            recommended,
            newArrivals,
            popular,
            discounted
        });
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
        onSearchChange(e.target.value);
    };

    const handleSort = (e) => {
        setSort(e.target.value);
        onSortChange(e.target.value);
    }

    return (
        <div className="mb-4 p-4 border rounded flex flex-col space-y-2">
            <input
                type="text"
                placeholder="Поиск по названию, автору, ISBN"
                className="border p-2"
                value={search}
                onChange={handleSearch}
            />

            <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2">
                <option value="">Все категории</option>
                <option value="Фантастика">Фантастика</option>
                <option value="Детектив">Детектив</option>
            </select>

            <label className="flex items-center">
                <input type="checkbox" checked={recommended} onChange={() => {setRecommended(!recommended)}} className="mr-2"/>
                Рекомендованные
            </label>

            <label className="flex items-center">
                <input type="checkbox" checked={newArrivals} onChange={() => {setNewArrivals(!newArrivals)}} className="mr-2"/>
                Новые поступления
            </label>

            <label className="flex items-center">
                <input type="checkbox" checked={popular} onChange={() => {setPopular(!popular)}} className="mr-2"/>
                Популярные
            </label>

            <label className="flex items-center">
                <input type="checkbox" checked={discounted} onChange={() => {setDiscounted(!discounted)}} className="mr-2"/>
                Со скидками
            </label>

            <select value={sort} onChange={handleSort} className="border p-2">
                <option value="">Без сортировки</option>
                <option value="price_asc">Цена (возрастание)</option>
                <option value="price_desc">Цена (убывание)</option>
                <option value="date_added">По дате добавления</option>
                <option value="popular">По популярности</option>
                <option value="discount">По размеру скидки</option>
            </select>

            <button onClick={handleFilter} className="bg-blue-500 text-white p-2 rounded">Применить фильтр</button>
        </div>
    );
};

export default BookFilters;
