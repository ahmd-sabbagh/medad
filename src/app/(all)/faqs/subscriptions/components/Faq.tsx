import { useState } from "react";
import { useLocale } from "next-intl"; // Get the locale

interface FaqProps {
    index: number;
    question: string;
    answer: string;
}

const Faq: React.FC<FaqProps> = ({ index, question, answer }) => {
    const [active, setActive] = useState(false);
    const locale = useLocale();
    const isRTL = locale === "ar" || locale === "he"; // Check if the language is RTL

    return (
        <div 
            className={`bg-white rounded-lg border w-full flex flex-col gap-4 ${isRTL ? 'rtl pr-6' : 'ltr pl-6'}`}  
            style={{ borderColor: '#E2AE6348' }}
        >
            <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setActive(!active)}
            >
                <div className={`flex justify-between items-center flex-row `}>
                    <span className="text-2xl">{index + 1}.</span>
                    <h3 
                        className={`text-xl font-bold ${isRTL ? 'text-right pr-2' : 'text-left pl-2'}`} 
                        style={{ marginBottom: 0 }}
                    >
                        {question}
                    </h3>
                </div>

                <div 
                    className={active 
                        ? `bg-[#E2AE63] px-8 py-4 flex items-center justify-center  ${isRTL ? 'rounded-tl-lg' : 'rounded-tr-lg'}`
                        : `bg-[#E2AE6348] px-8 py-4 flex items-center justify-center ${isRTL ? 'rounded-l-lg' : 'rounded-r-lg'}`
                    }
                >
                    <span className="text-4xl font-bold text-black">{active ? '-' : '+'}</span>
                </div>
            </div>

            <p className={active ? `text-lg mb-5 ${isRTL ? 'text-right mr-8' : 'text-left ml-8'}` : `hidden text-lg ml-16 ${isRTL ? 'text-right' : 'text-left'}`}>
                {answer}
            </p>
        </div>
    );
}

export default Faq;
