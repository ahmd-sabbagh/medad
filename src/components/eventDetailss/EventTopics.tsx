import { smale_mask_1, smale_mask_2 } from '@/assets'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EventTopics = () => {
    const t = useTranslations()
  return (
    <div className="mt-8 ">
      <div className="flex flex-col gap-3 justify-center">

      <h3 className="font-bold text-xl lg:text-3xl">{t("Event topics")}</h3>
        <div className='grid gap-4 grid-cols-2 lg:grid-cols-4 '>
            {[1,2,3,4,5,6,7,8].map((idx) => (
                <div className='bg-white shadow-lg h-[80px] flex justify-center items-center relative rounded-xl' style={{overflow:"hidden"}} key={idx}>
                  <div className="bg-images-smale  left-0 ">
                    <div className="grid grid-cols-2 gap-4">
                    <Image  className="c_img_1" src={smale_mask_1} alt="" />
                      <div className=""></div>
                      <div className=""></div>
                    <Image className="c_img_2" src={smale_mask_2} alt="" />
                    </div>
                  </div>
                    <p className='font-bold text-lg text-center'>{"الدراسات الشرعيه والتأصيليه"}</p>
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