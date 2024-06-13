import React from 'react'


function Task() {
  return (
    <li className='bg-[#ffffff6d]  todo-completed p-4  rounded-xl flex items-center'>
        <div className='w-[44px]'>
            <button 
            onClick={(e)=>{
                (e.target.classList.contains('complete')?e.target.classList.remove('complete'):e.target.classList.add('complete') )
            }}
            className='w-[30px] h-[30px] complete outline-none rounded-full border-[#827EA3] border-2 flex justify-center items-center  '>
            <svg className='style' width="12" height="12" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" ></path></svg>
            </button>
        </div>
        <div className='w-[90%] text-xl  font-text-font font-semibold self-cente text-black '>Start Building a Todo App using React js</div>
        <div className='right-full flex' >
            <div className='star-wrapper'>
                <button 
                onMouseOver={(e)=>{
                    let labelDiv = e.target.closest('div').querySelector('span');
                    
                   labelDiv.classList.add('label')
                }}
                onMouseLeave={(e)=>{
                    let labelDiv = e.target.closest('div').querySelector('span');

                        labelDiv.classList.remove('label')
                 }}
                className='text-xl text-[#837a7f] outline-none hover:bg-[#0000000f] py-1 px-2 rounded-md'><ion-icon name="star-outline"></ion-icon></button>
                <div className='relative '>
                    <span className='bg-black p-4 text-center font-text-font font-semibold text-lg rounded-xl w-[200px] absolute left-[-70px] z-[-3] opacity-0 transition-all'>Mark as important</span>
                </div>
            </div>

            <div>
            <div className='option-wrapper'>
                <button 
                onMouseOver={(e)=>{
                    let labelDiv = e.target.closest('div').querySelector('span');
                   labelDiv.classList.add('label')
                }}
                onMouseLeave={(e)=>{
                    let labelDiv = e.target.closest('div').querySelector('span');
                        labelDiv.classList.remove('label')
                 }}
                 onClick={(e)=>{
                    let target = ((e.target.parentElement).parentElement.querySelector('.optionDiv'))
                    target.classList.contains('options') ? target.classList.remove('options') : target.classList.add('options')
                 }}
                className= 'text-xl text-[#837a7f] outline-none hover:bg-[#0000000f] py-1 px-2 rounded-md'><ion-icon name="ellipsis-horizontal-outline"></ion-icon></button>
                <div className='relative '>
                <span className='bg-black py-4 text-center font-text-font font-semibold text-lg rounded-xl w-[200px] absolute left-[-70px] z-[-3]  opacity-0 transition-all'>More Options</span>
                </div>
                <div className='relative'>
                <div className='optionDiv w-[250px]  text-[#000000d8] font-semibold p-2 bg-[white] font-text-font text-lg  rounded-2xl  absolute right-0  opacity-0 z-[-3]'>
                    <button className='p-4 rounded-2xl hover:text-black  hover:bg-[#00000019] cursor-pointer  w-full text-left'><ion-icon name="pencil-outline"></ion-icon> Edit task</button>
                    <button className='p-4 rounded-2xl hover:text-black hover:bg-[#00000019] cursor-pointer w-full text-left'><ion-icon name="ellipse-outline"></ion-icon> Mark as uncompleted</button>
                    <button className='p-4 rounded-2xl hover:text-black hover:bg-[#00000019] cursor-pointer w-full text-left'><ion-icon name="star-outline"></ion-icon> Mark as important</button>
                    <button className='p-4 rounded-2xl  hover:bg-[#ff52526b] text-red-600 cursor-pointer w-full text-left'><ion-icon name="trash-outline"></ion-icon> Delete task</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </li>
  )
}

export default Task