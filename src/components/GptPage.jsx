import Choose from './Choose'
import StoryOptions from './StoryOptions'

const GptPage = () => {
    return (
        <div className='w-full flex flex-col items-center text-white'>
            <div className='font-bold mt-16'>Food AI</div>
            <p className='w-[80%] md:w-[500px] text-center'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia recusandae quae molestiae corporis id provident
                inventore blanditiis in quibusdam illo.
            </p>
            <Choose />
           
            <button className='text-white mb-[200px] font-bold bg-indigo-500 rounded-3xl w-[250px] h-[50px] mt-4 hover:bg-green-500 duration-200 transition-all hover:scale-[105%]'>Start generation</button>
            

        </div>
    );
};

export default GptPage;
