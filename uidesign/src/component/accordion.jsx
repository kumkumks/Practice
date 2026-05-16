import { faAngleDown, faAngleUp, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

const data = [{
    id: 1,
    question: 'Question 1 ?',
    ans: 'one answervhuhgoieh hgreig doioirfg ioerrgirei  rgifdvji'
},
{
    id: 2,
    question: 'Two ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptas accusamus cum?',
    ans: 'two answervhuhgoieh hgreig doioirfg ioerrgirei  rgifdvji'
},
{
    id: 3,
    question: 'Question 3 ?',
    ans: 'three answervhuhgoieh hgreig doioirfg ioerrgirei  rgifdvji'
}]

const Accordion = () => {    
    const[activeindex,setActiveIndex]=useState(null);

    const handleActive=(idx)=>{
     console.log(idx);
     setActiveIndex(activeindex===idx ? null : idx );
    }

    return (
        <div className='bg-gray-500 p-3.5 w-full rounded-2xl m-2 text-black'>
            {
                data.map((ele,index) => (
                    <div key={ele.id}>
                       <div className='bg-gray-500 p-2.5 m-2'>
                         <p >{ele.question}</p>
                         <FontAwesomeIcon  icon={activeindex === index  ? faAngleUp: faAngleDown} 
                         onClick={()=>{
                            handleActive(index)
                         }}
                         />
                         { activeindex===index ? <div className='bg-gray-300 p-2.5  m-2'>
                             <p>{ele.ans}</p>
                         </div> : ' '}
                        
                        </div>
                    </div>
                ))
}

        </div>
    )
}

export default Accordion