

import emailjs from 'emailjs-com';

function Contact() {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_8oop2kj','template_eim3a8i',e.target,'vuTY47KiOsexBDWrl').then(res=>console.log(res)).catch(err=>console.log(err));
    }
  return (
    <styledDiv  className="flex flex-col md:flex-row bg-teal-400 mt-[56px] h-[calc(100vh-56px)] p-8">
    {/* left*/}
    <div className='md:w-1/2 md:items-center text-left  flex flex-col mt-4  mb-6 md:mb-0'>
      <h1 className='text-white  lg:text-12xl font-bold text-6xl'>YOUR</h1>
      <h1 className='text-white  lg:text-12xl font-bold text-6xl '>SOCIAL </h1>
      <h1 className='text-white  lg:text-12xl font-bold text-6xl'>MEDIA </h1>
      <h1 className='text-white  lg:text-12xl font-bold text-6xl '>DESERVES </h1>
    
      <h1 className='text-white  lg:text-12xl font-bold text-6xl '>A BOOST </h1>
      
      <p className='text-black text-2xl md:text-4xl lg:text-4xl'>our team is ready </p>
    </div>
    {/*right */}
    <div className='md:w-1/2  p-8 rounded-lg shadow-lg'>
    {/*form*/}
    <form className='space-y-2 md:space-y-4 lg:space-y-4' onSubmit={sendEmail}>
    {/*div for name */}
      <div className='flex space-y-4 space-x-0 md:space-y-0 md:space-x-2  flex-col md:flex-row'>
      <input type="text" name='firstName' placeholder="First Name" className="md:w-1/2 p-2 border w-full border-gray-300 rounded" />
        <input type="text" name='lastName' placeholder="Last Name" className="md:w-1/2 p-2 border w-full border-gray-300 rounded" />
      </div>
      <input name='email' type='email' placeholder='Email Address' className='w-full border p-2 rounded border-gray-300' />
      <input name='company' type='text' placeholder='Company Name' className='w-full border p-2 rounded border-gray-300' />
      <input name='phone' type='tel' placeholder='Phone Number' className='w-full border p-2 rounded border-gray-300' />
      <input name='website' type='url' placeholder='Company website' className='w-full border p-2 rounded border-gray-300' />
      <select name='budget' className="w-full p-2 border border-gray-300 rounded">
            <option>Monthly budget...</option>
            <option>Less than $1,000</option>
            <option>$1,000 - $5,000</option>
            <option>$5,000 - $10,000</option>
            <option>More than $10,000</option>
          </select>
          
          <select name='employee' className="w-full p-2 border border-gray-300 rounded">
            <option className='text-grey'>Number of employees...</option>
            <option >1-10</option>
            <option>11-50</option>
            <option>51-200</option>
            <option>201-500</option>
            <option>501+</option>
          </select>
          <textarea name='message' className='w-full p-2 border border-gray-300 rounded' placeholder='how can we help?' rows={4}>
            
          </textarea>
          <button type='submit' className='p-2 text-white bg-black'>SCHEDULE CONSULTATION</button>
    </form>
    </div>
    
    

    </styledDiv>
  )
}

export default Contact