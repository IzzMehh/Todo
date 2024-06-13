import React from 'react'

function InputBox() {
  return (
    <div className='flex justify-center'>
        <div className='w-[90%]'>
            <input type="text" name="" id="" placeholder='What do you need to do?' className='bg-[#FDD2D2] input-outline h-[62px] w-[90%] transition-all  font-text-font text-xl rounded-l-[15px] px-4 text-black' />
            <button type='sumbit' className='bg-[#1E212F] w-[10%] h-[60px] rounded-r-[15px]'><span><ion-icon name="add-outline"></ion-icon></span> Add</button>
        </div>
    </div>
  )
}

export default InputBox