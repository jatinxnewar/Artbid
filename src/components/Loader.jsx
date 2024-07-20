import React from 'react';

const Loader = ({className1=" ",className2=" "}) => {
    return (
        <div className={`flex justify-center items-center bg-slate-100 ${className2}`}>
            <div className={` animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-teal-700 ${className1}`}></div>
        </div>
    );
};

export default Loader;