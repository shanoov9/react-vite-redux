import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import UserDataService from "../services/user.service";
import { setRecordAllUser, removeUser, toggleUser } from '../features/user/userReducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UserList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        UserDataService.getAll().then(data => {
            if (data.status == 200) {
                console.log(data.data)
                dispatch(setRecordAllUser(data.data.data));
            }
        })
    }, []);
    const users = useSelector(state => state.userReducer.users);
    const deleteRecord = (e) => {
        // e.preventDefault();
        UserDataService.delete(e.id).then(data => {
            if (data.status == 200) {
                toast("user was deleted successfully!");
                dispatch(removeUser(e.id));

            }
        })
    }
    const disableUser = (e) => {
        console.log(e)
        UserDataService.update(e.id, { status: true }).then(data => {
            if (data.status == 200) {
                toast("user was deleted successfully!");
                dispatch(removeUser(e.id));

            }
        })
    }
    return (
        <div>
            <>
                <div>Todos</div>
                <ul className="list-none">
                    {users.map((todo) => (
                        <li
                            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                            key={todo.id}
                        >
                            <div className={`text-white ${todo.status ? 'line-through' : ''}`}>{todo.firstName}</div>
                            <div className={`text-white ${todo.status ? 'line-through' : ''}`}>{todo.lastName}</div>
                            <div className={`text-white ${todo.status ? 'line-through' : ''}`}>{todo.emailId}</div>
                            <div className={`text-white ${todo.status ? 'line-through' : ''}`}>{todo.password}</div>
                            <div className="flex gap-2 items-center">
                                {!todo.status && <button
                                    onClick={() => disableUser(todo)}
                                    className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill='#333' width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" /></svg>
                                </button>}
                                <button
                                    onClick={() => deleteRecord(todo)}
                                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </>
        </div>
    )
}

export default UserList;