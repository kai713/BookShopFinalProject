import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../store/BookSlice';
import BookCard from '../components/BookCard';

const BooksPage = () => {
    const dispatch = useDispatch();
    const { books, loading, error } = useSelector((state) => state.books);

    useEffect(() => {
        dispatch(fetchBooks()); // Загружаем книги при монтировании компонента
    }, [dispatch]);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Каталог Книг</h1>

            {/* Отображение ошибок или индикатора загрузки */}
            {loading && <p>Загрузка...</p>}
            {error && <p className="text-red-500">Ошибка: {error}</p>}


            {/* Список книг */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {books.map((book) => (
                    <BookCard key={book.bookId} book={book} />
                ))}
            </div>
        </div>
    );
};

export default BooksPage;
