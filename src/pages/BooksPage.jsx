import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
// В реальном приложении используйте axios:
// import axios from 'axios';
import BookCard from '../components/BookCard';
import BookFilters from '../components/BookFilters';

const BooksPage = () => {
    const { books } = useSelector(state => state.books);
    const [filter, setFilter] = useState({
        category: "",
        recommended: false,
        newArrivals: false,
        popular: false,
        discounted: false
    });
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    // Здесь можно было бы сделать запрос к бэкенду, но он пока не готов
    // Пример:
    // useEffect(() => {
    //   axios.get('/api/books')
    //     .then(res => {
    //       dispatch(setBooks(res.data));
    //     })
    //     .catch(err => console.error(err));
    // }, []);

    const filteredBooks = useMemo(() => {
        let result = [...books];
        if (search.trim()) {
            result = result.filter(b =>
                b.title.toLowerCase().includes(search.toLowerCase()) ||
                b.author.name.toLowerCase().includes(search.toLowerCase())
            );
        }
        if (filter.category) {
            result = result.filter(b => b.category.name === filter.category);
        }
        if (filter.recommended) {
            result = result.filter(b => b.isRecommended);
        }
        if (filter.newArrivals) {
            result = result.filter(b => b.isNewArrival);
        }
        if (filter.popular) {
            result = result.filter(b => b.isPopular);
        }
        if (filter.discounted) {
            result = result.filter(b => b.discount > 0);
        }

        // Сортировка
        switch (sort) {
            case 'price_asc':
                result.sort((a,b) => (a.price - (a.discount||0)) - (b.price - (b.discount||0)));
                break;
            case 'price_desc':
                result.sort((a,b) => (b.price - (b.discount||0)) - (a.price - (a.discount||0)));
                break;
            case 'date_added':
                result.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;
            case 'popular':
                // Допустим, популярные = isPopular true сверху
                result.sort((a,b) => (b.isPopular?1:0) - (a.isPopular?1:0));
                break;
            case 'discount':
                result.sort((a,b) => (b.discount||0) - (a.discount||0));
                break;
            default:
                break;
        }

        return result;
    }, [books, filter, search, sort]);

    const handleFilterChange = (f) => setFilter(f);
    const handleSearchChange = (s) => setSearch(s);
    const handleSortChange = (s) => setSort(s);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Каталог Книг</h1>
            <BookFilters onFilterChange={handleFilterChange} onSearchChange={handleSearchChange} onSortChange={handleSortChange}/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredBooks.map(book => (
                    <BookCard key={book.bookId} book={book}/>
                ))}
            </div>
        </div>
    );
};

export default BooksPage;
