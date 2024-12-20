import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromCart, updateQuantity, setCoupon, applyCouponDiscount} from '../store/cartSlice';

const CartPage = () => {
    const {items, coupon, discountAmount} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const [localCoupon, setLocalCoupon] = useState(coupon);

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const taxes = subtotal * 0.12; // пример налога 12%
    const shipping = 500; // пример фикс. стоимости доставки
    const total = subtotal + taxes + shipping - discountAmount;

    const handleUpdateQuantity = (bookId, quantity) => {
        dispatch(updateQuantity({bookId, quantity: Number(quantity)}));
    };

    const applyCoupon = () => {
        dispatch(setCoupon(localCoupon));
        dispatch(applyCouponDiscount());
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Корзина</h1>
            {items.length === 0 ? (
                <p>Ваша корзина пуста</p>
            ) : (
                <div className="flex flex-col space-y-4">
                    <table className="w-full border-collapse">
                        <thead>
                        <tr className="border-b">
                            <th className="py-2 text-left">Название</th>
                            <th className="py-2 text-left">Автор</th>
                            <th className="py-2 text-left">Количество</th>
                            <th className="py-2 text-left">Цена</th>
                            <th className="py-2 text-left"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map(item => (
                            <tr key={item.bookId} className="border-b">
                                <td className="py-2">{item.title}</td>
                                <td>{item.author}</td>
                                <td>
                                    <input
                                        type="number"
                                        className="border w-16 p-1"
                                        min="1"
                                        value={item.quantity}
                                        onChange={(e) => handleUpdateQuantity(item.bookId, e.target.value)}
                                    />
                                </td>
                                <td>{item.price * item.quantity} KZT</td>
                                <td>
                                    <button className="text-red-500"
                                            onClick={() => dispatch(removeFromCart(item.bookId))}>
                                        Удалить
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 justify-end">
                        <div className="flex flex-col">
                            <label htmlFor="coupon" className="mb-1 font-bold">Скидочный купон:</label>
                            <input
                                id="coupon"
                                type="text"
                                className="border p-2"
                                value={localCoupon}
                                onChange={(e) => setLocalCoupon(e.target.value)}
                            />
                            <button onClick={applyCoupon} className="bg-blue-500 text-white p-2 mt-2 rounded">Применить
                                купон
                            </button>
                        </div>
                        <div className="border p-4 flex flex-col">
                            <p>Подытог: {subtotal} KZT</p>
                            <p>Налог: {taxes.toFixed(2)} KZT</p>
                            <p>Доставка: {shipping} KZT</p>
                            {discountAmount > 0 && <p>Скидка по купону: -{discountAmount.toFixed(2)} KZT</p>}
                            <p className="font-bold mt-2">Итого: {total.toFixed(2)} KZT</p>
                            <button className="bg-green-500 text-white p-2 mt-4 rounded">Оформить заказ</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
