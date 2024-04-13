/*
    back-bay-fens/attractions
*/
'use client'

import React from 'react'
import ParkTitle from '@/components/ParkTitle'
import MenuButton from '@/components/MenuButton'
import ParkNav from '@/components/ParkNav'
import backmap from '/public/img/back-bay-map.png'
import menu_icon from '/public/img/menu_icon.png'
import Image from 'next/image'
import MenuButton2 from '@/components/MenuButton2'
import SingleAttraction from '@/components/SingleAttraction'
import AttractionInformation from '@/components/AttractionInformation'
import { useRef } from 'react'

export default function BackBayAttractions () {
  /* TODO: Update for BackBay */
  const options = [
    'Athletic Facilities',
    'James P. Kelleher Rose Garden',
    'War Memorials',
    'Japanese Bell',
    'Shattuck Emerald Necklace Visitor Center',
    'Fenway Victory Gardens',
    'Boylston Bridge'
  ]

  /* Update here for as many attractions */
  const descriptionRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null)
  ]

  const ATTRACTION_START = 25

  return (
    <div className='bg-custom-HistoryBackgroundGreen h-full w-full'>
      <div className='flex justify-center items-center h-screen'>
        <ParkNav page={'Attractions'} park={'back-bay-fens'} />
        {/* TODO: Update menu button to accomodate scrolling */}
        <MenuButton2 options={options} />
        {/* <Image className="absolute top-20 right-10" src={menu_icon} alt="Menu Icon" width={150} height={150}/> */}
        <div>
          <Image
            className='m-auto'
            src={backmap}
            alt='Back Bay Fens Map'
            width={2048} /* iPad width */
            height={800}
          />
          {/* TODO: Update positions of these attractions on the map */}
          <div
            className='relative bottom-96 left-20'
            onClick={() => {
              descriptionRefs[0].current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <SingleAttraction
              number={ATTRACTION_START + 0}
              image={'/img/gray_box.jpeg'}
            />
          </div>
          <div
            className='relative bottom-80 left-96'
            onClick={() => {
              descriptionRefs[1].current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <SingleAttraction
              number={ATTRACTION_START + 1}
              image={'/img/gray_box.jpeg'}
            />
          </div>
          <div
            className='relative bottom-96 left-116'
            onClick={() => {
              descriptionRefs[2].current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <SingleAttraction
              number={ATTRACTION_START + 2}
              image={'/img/gray_box.jpeg'}
            />
          </div>
          <div
            className='relative left-40 bottom-20'
            onClick={() => {
              descriptionRefs[3].current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <SingleAttraction
              number={ATTRACTION_START + 3}
              image={'/img/gray_box.jpeg'}
            />
          </div>
          <div
            className='relative left-40 bottom-20'
            onClick={() => {
              descriptionRefs[4].current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <SingleAttraction
              number={ATTRACTION_START + 4}
              image={'/img/gray_box.jpeg'}
            />
          </div>
          <div
            className='relative left-40 bottom-20'
            onClick={() => {
              descriptionRefs[5].current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <SingleAttraction
              number={ATTRACTION_START + 5}
              image={'/img/gray_box.jpeg'}
            />
          </div>
          <div
            className='relative left-40 bottom-20'
            onClick={() => {
              descriptionRefs[6].current?.scrollIntoView({
                behavior: 'smooth'
              })
            }}
          >
            <SingleAttraction
              number={ATTRACTION_START + 6}
              image={'/img/gray_box.jpeg'}
            />
          </div>
        </div>
        {/* QUESTRIAL is broken */}
        <p className='text-white font-orelega text-6xl absolute bottom-0 left-0 ml-10 mb-20'>
          Back Bay Fens{' '}
        </p>
      </div>

      <div className='bg-custom-HistoryBackgroundGreen w-full'>
        {' '}
        <div ref={descriptionRefs[0]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 0}
            attractionName={'Athletic Facilities'}
            attractionText={
              'The Joseph Lee Playground area features softball, \
			      soccer, lacrosse, football, basketball and a recreational running \
			      track. One of the didamonds is named in honor of Roberto Clemente \
            -- the first Latin American elected to the Baseball Hall of Fame.'
            }
          />
        </div>
        <div ref={descriptionRefs[1]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 1}
            attractionName={'James P. Kelleher Rose Garden'}
            attractionText={
              "Designed by landscape artchitect Arthur Shurcliff in the 1920s \
				       this garden was restored by the City of Boston and Emerald \
				       Necklace Conservancy. Combining the best of old and new roses, \
				        today's garden includes over 1,500 plants representing 200 \
				        different varieties. "
            }
          />
        </div>
        <div ref={descriptionRefs[2]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 2}
            attractionName={'War Memorials'}
            attractionText={
              'The World War II, Vietnam and Korean War Memorial, behind the \
              Kelleher Rose Garden, is a favorite picnic site for area residents.'
            }
          />
        </div>
        <div ref={descriptionRefs[3]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 3}
            attractionName={'Japanese Bell'}
            attractionText={
              'Found on a scrap heap in Yakosuka, this beautiful bronze \
              17th-century temple bell was brought back to sailors on the USS \
              Boston in 1945. In 1953, the Japanese government announced that the\
              bell should remain in Boston as a gesture of peace.'
            }
          />
        </div>
        <div ref={descriptionRefs[4]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 4}
            attractionName={'Shattuck Emerald Necklace Visitor Center'}
            attractionText={
              "Designed by H.H Richardson in 1882, the building is one of a pair\
              that housed the fates used to regulate the Stony Brook's flow\
              into the Fens. This gatehouse, no longer in operation, was\
              converted in 2010 to a vistor center and offices of the\
              Emerald Necklace Conservancy."
            }
          />
        </div>
        <div ref={descriptionRefs[5]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 5}
            attractionName={'Fenway Victory Gardens'}
            attractionText={
              'Victory Gardens were cultivated during World War II to ease demand\
              on wartime food supply. The Fenway gardens are among the few\
              to remain in continuous cultivation. Today, 500 plots are tended\
              by community gardeners and feature a bounty of flowers\
              and vegetables.'
            }
          />
        </div>
        <div ref={descriptionRefs[6]}>
          <AttractionInformation
            attractionNumber={ATTRACTION_START + 6}
            attractionName={'Boylston Bridge'}
            attractionText={
              'Designed by prominent 19th-century architect H.H. Richardson\
              this bridge is constructed of Cape Ann granite. Projecting bays\
              offer sweeping views across the Fens.'
            }
          />
        </div>
        {/* Lengthen page */}
      </div>
    </div>
  )
}
