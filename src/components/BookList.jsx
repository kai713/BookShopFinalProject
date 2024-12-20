import React, {useState, useEffect} from "react";
import axios from "axios";
import BookCard from "./BookCardMain"; // Импортируем компонент карточки книги
import "../styles/BookList.css";

function BookList() {
    const [books, setBooks] = useState([]); // Состояние для хранения списка книг
    const [loading, setLoading] = useState(true); // Состояние для загрузки
    const [error, setError] = useState(null); // Состояние для ошибок

    // Функция для рандомизации массива
    const getRandomBooks = (books, count) => {
        const shuffled = [...books].sort(() => 0.5 - Math.random()); // Рандомизация массива
        return shuffled.slice(0, count); // Возвращаем первые `count` элементов
    };

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get("https://676534c152b2a7619f5ec072.mockapi.io/books");
                const randomBooks = getRandomBooks(response.data, 5); // Получаем 5 случайных книг
                setBooks(randomBooks);
            } catch (err) {
                setError("Ошибка загрузки данных.");
            } finally {
                setLoading(false); // Убираем индикатор загрузки
            }
        };

        fetchBooks();
    }, []);

    if (loading) return <div className="text-center text-gray-500">Загрузка...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (
        <div className="book-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {books.map((book) => (
                <BookCard key={book.id} book={book}/> // Передаём данные книги в BookCardMain
            ))}
        </div>
    );
}

export default BookList;
