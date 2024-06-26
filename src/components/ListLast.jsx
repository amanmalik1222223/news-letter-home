import React from 'react';
import img1 from '../assets/image-retro-pcs.jpg'
import img2 from '../assets/image-top-laptops.jpg'
import img3 from '../assets/image-gaming-growth.jpg'
import SubList from './SubList'

function ListLast() {
    const props1={
        img:        img1,
        id:         '01',
        subheading: 'Reviving Retro PCs',
        para:       'What happens when old PCs are given modern upgrades?'
      }
      const props2={
        img:        img2,
        id:         '02',
        subheading: 'Top 10 Laptops of 2022',
        para:       'Our best picks for various needs and budgets.'
      }
      const props3={
        img:        img3,
        id:         '03',
        subheading: 'The Growth of Gaming',
        para:       'How the pandemic has sparked fresh opportunities.'
      }
    return (
        <div className='flex flex-row  md:px-[200px] md:pt-[120px] md:pb-[50px] px-[20px] py-[20px] justify-between item-center'>
            <div className='flex flex-col md:flex-row gap-6 md:justify-between'>
                <SubList {...props1} />
                <SubList {...props2} />
                <SubList {...props3} />
            </div>
        </div>
    );
}

export default ListLast;