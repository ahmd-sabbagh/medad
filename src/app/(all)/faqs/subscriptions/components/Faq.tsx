import { useState } from "react";

interface FaqProps {
    index: number;
    question: string;
    answer: string;
}

const Faq: React.FC<FaqProps> = ({ index, question, answer }) => {
    const [active, setActive] = useState(false);
    return (
        <div className="bg-white rounded-lg border w-full pr-6 flex flex-col gap-4"  style={{ borderColor: '#E2AE6348' }}>
            <div className="flex justify-between items-center  cursor-pointer"  onClick={() => setActive(!active)} >
                <div className="flex justify-between items-center">
                    <span className="text-2xl">{index + 2}.</span>
                    <h3 className="text-xl font-bold text-right pr-2" style={{ marginBottom: 0 }}>{question}</h3>
                </div>
                <div className={active ? 'bg-[#E2AE63] px-8 py-4 flex items-center justify-center rounded-tl-lg' : 'bg-[#E2AE6348] px-8 py-4 flex items-center justify-center rounded-l-lg'}>
                    <span className="text-4xl font-bold text-black">{active ? '-' :'+'}</span>
                </div>
            </div>
            <p className={active ? 'text-lg text-right ml-16' : 'hidden text-lg text-right ml-16'}>
                {answer}
            </p>
        </div>
    );
}

export default Faq;