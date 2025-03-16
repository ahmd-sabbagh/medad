import { smale_mask_1, smale_mask_2 } from '@/assets'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EventTopics = ({ topics }) => {
    const t = useTranslations()
  return (
    <div className="mt-8 ">
      <div className="flex flex-col gap-3 justify-center">

      <h3 className="font-bold text-xl lg:text-3xl">{t("Event topics")}</h3>
        <div className='grid gap-4 grid-cols-2 lg:grid-cols-4 mt-5'>
            {topics?.map((topic) => (
                <div key={topic} className='bg-white shadow-lg rounded-xl p-4 md:p-8'>
                    <p className='font-bold text-lg text-center'>{topic}</p>
                </div>
            ))}
        </div>
        <div className="flex flex-col justify-center items-center">

        <Link href={"/events"} className="px-12  py-1 rounded-[4px] font-bolder text-lg bg-main text-white">{t("Join Request")}</Link>
        </div>
      </div>

    </div>
  )
}

export default EventTopics