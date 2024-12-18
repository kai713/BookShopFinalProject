import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../store/cartSlice';

const BookDetailPage = () => {
    const { books } = useSelector(state => state.books);
    const dispatch = useDispatch();
    const { id } = useParams();
    const bookId = Number(id);

    const book = books.find(b => b.bookId === bookId);

    if (!book) {
        return <div className="p-4">Книга не найдена</div>;
    }

    const finalPrice = book.price - (book.discount || 0);

    // Связанные книги (условно те же автор, категория)
    const relatedBooks = books.filter(b => b.author.authorId === book.author.authorId && b.bookId !== book.bookId);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
            <p><strong>Автор:</strong> {book.author.name}</p>
            <p><strong>Категория:</strong> {book.category.name}</p>
            <p><strong>Цена:</strong> {book.discount > 0 ?
                (<span><span className="line-through">{book.price} KZT</span> {finalPrice} KZT</span>) :
                (`${book.price} KZT`)}
            </p>
            <p><strong>Год издания:</strong> {book.publishedYear}</p>
            <p><strong>Описание:</strong> {book.description}</p>
            <p><strong>Статус:</strong> {book.stockQuantity > 0 ? "В наличии" : "Нет в наличии"}</p>
            {book.stockQuantity > 0 && (
                <button
                    className="bg-green-500 text-white p-2 mt-4 rounded"
                    onClick={() => dispatch(addToCart({ book, quantity: 1 }))}
                >
                    Добавить в корзину
                </button>
            )}

            {relatedBooks.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Похожие книги</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {relatedBooks.map(rb => (
                            <div key={rb.bookId} className="border p-4">
                                <h3 className="font-bold">{rb.title}</h3>
                                <p>{rb.author.name}</p>
                                <p>{rb.price - (rb.discount||0)} KZT</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

export default BookDetailPage;
