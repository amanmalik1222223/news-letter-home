import React from 'react';

function SubList(props) {
    return (
        <div className='flex flex-row w-full md-w-1//3 gap-3 items-center'>
            <div className='w-[100px]'>
                <img src={props.img} alt="" />
            </div>
            <div className='flex flex-col gap-2  py-2'>
                <h1 className='text-softOrange text-4xl font-bold'>{props.id}</h1>
                <h3 className='text-lg text-veryDarkBlue'>{props.subheading}</h3>
                <p className='text-sm text-darkGrayishBlue'>{props.para}</p>
            </div>
        </div>
    );
}

export default SubList;