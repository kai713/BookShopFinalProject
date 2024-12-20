import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../store/BookSlice';
import BookCard from '../components/BookCardMain';

const BooksPage = () => {
    const dispatch = useDispatch();
    const { books, loading, error } = useSelector((state) => state.books);
    const [displayedBooks, setDisplayedBooks] = useState([]); // Книги, которые отображаются
    const loaderRef = useRef(null); // Ссылка на контейнер для скролла

    useEffect(() => {
        // Загружаем книги один раз
        dispatch(fetchBooks());
    }, [dispatch]);

    useEffect(() => {
        if (books.length > 0) {
            setDisplayedBooks(books.slice(0, 15)); // Загружаем первые 15 книг в скролл
        }
    }, [books]);

    return (
        <div className="p-2 bg-gray-50 min-h-50">
            {error && <p className="text-center text-red-500">{error}</p>}

            {/* Контейнер для горизонтального скролла */}
            <div
                className="flex overflow-x-auto overflow-y-hidden bg-white shadow-md rounded-lg p-4 space-x-4 custom-scrollbar"
                ref={loaderRef}
                style={{
                    maxWidth: '100%',
                    scrollSnapType: 'x mandatory', // Плавная прокрутка
                }}
            >
                {displayedBooks.map((book) => (
                    <div
                        key={book.bookId}
                        className="flex-shrink-0"
                        style={{
                            minWidth: '240px', // Минимальная ширина для каждой карточки
                            flex: '0 0 auto',
                            scrollSnapAlign: 'start', // Прокрутка останавливается на карточке
                        }}
                    >
                        <BookCard book={book} />
                    </div>
                ))}
            </div>

            {loading && <div className="text-center mt-4">Загрузка...</div>}
        </div>
    );
};

export default BooksPage;
