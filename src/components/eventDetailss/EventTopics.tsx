import { useTranslations } from 'next-intl'
import React from 'react'

const EventTopics = () => {
    const t = useTranslations()
  return (
    <div className="mt-8 md:mt-20">
      <h3 className="font-bold text-xl lg:text-3xl">{t("Event topics")}</h3>
        <div className='grid gap-4 grid-cols-2 lg:grid-cols-4 mt-5'>
            {[1,2,3,4,5,6,7,8].map((idx) => (
                <div className='bg-white shadow-lg rounded-xl p-4 md:p-8' key={idx}>
                    <p className='font-bold text-lg text-center'>{"الدراسات الشرعيه والتأصيليه"}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default EventTopics