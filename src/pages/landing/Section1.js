import React from 'react';
import { BsInstagram, BsFacebook, BsTwitter, BsPinterest } from 'react-icons/bs';
import IMG1 from '../../assets/1.png';
import IMG2 from '../../assets/2.png';
import IMG3 from '../../assets/3.png';
import IMG5 from '../../assets/5.png';
import IMG6 from '../../assets/6.jpeg';
import IMG7 from '../../assets/7.jpeg';
import IMG8 from '../../assets/8.jpeg';
import IMG9 from '../../assets/9.jpeg';

import NEWIMG1 from '../../assets/en/1.jpg';
import NEWIMG2 from '../../assets/en/2.jpg';
import NEWIMG3 from '../../assets/en/3.jpg';
import NEWIMG4 from '../../assets/en/4.jpg';
import NEWIMG5 from '../../assets/en/5.jpg';
import NEWIMG6 from '../../assets/en/6.jpg';

const Section1 = () => {
  return (
    <div className='bg-white w-[100%] pb-[100px] font-Mulish'>
      {/* <div className='max-w-[1200px] mx-auto px-12 pt-[62px] -sm:px-4'>
        <img
          src={'https://public.onlyfans.com/files/x/xx/xxl/xxl7t37psfnqx1ehjqljp9ve75ahlnox1664210323/237936482/header.jpg'}
          className='w-full bg-center bg-contain cursor-pointer'
          onClick={() => {
            window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
          }}
        />
      </div> */}
      <div className='max-w-[1200px] pt-[100px] flex flex-row -lg:flex-col justify-center items-start space-x-6 -lg:space-x-0 -lg:space-y-8 mx-auto px-12 -sm:px-4'>
        <div className='flex flex-1 flex-col justify-start items-center space-y-20 p-4'>
          <div className='w-full flex flex-col justify-start items-start space-y-6'>
            <p className='text-[28px] -sm:text-[20px] leading-[1.2] font-[700]'>
              15 problems that come with having big breasts and how to manage them
            </p>
            <p className='text-[18px] leading-[1.3] font-[400] text-[#747474] italic'>
              The interview with internet star Lexi
            </p>
            <div className='flex flex-row justify-start items-center w-full space-x-2 cursor-pointer'
              onClick={() => {
                window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
              }}
            >
              <div className='w-[35px] h-[35px] rounded-[3px] flex flex-row justify-center items-center bg-[#516eab]'>
                <BsFacebook className='text-white' />
              </div>
              <div className='w-[35px] h-[35px] rounded-[3px] flex flex-row justify-center items-center'
                style={{
                  background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'
                }}
              >
                <BsInstagram className='text-white' />
              </div>
              <div className='w-[35px] h-[35px] rounded-[3px] flex flex-row justify-center items-center bg-[#29c5f6]'>
                <BsTwitter className='text-white' />
              </div>
              <div className='w-[35px] h-[35px] rounded-[3px] flex flex-row justify-center items-center bg-[#ca212a]'>
                <BsPinterest className='text-white' />
              </div>
            </div>
            <div className='w-full flex flex-row -sm:flex-col -sm:space-x-0 -sm:space-y-8 justify-start items-start space-x-12 text-[15px] text-[#222] leading-[1.74] font-[500]'>
              <div className='relative w-[250px] -sm:w-full'>
                <img src={NEWIMG6} className='cursor-pointer'
                  onClick={() => {
                    window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
                  }}
                />
                <div
                  className='w-[120px] py-[5px] mx-auto mt-3 text-center bg-[#0074cc] rounded-[3px] text-white font-[700] text-[14px] -sm:text-[12px] cursor-pointer'
                  onClick={() => {
                    window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
                  }}
                >
                  View Profile
                </div>
                {/* <div
                  className='absolute top-[17px] -sm:top-[25px] right-[0px] px-2 py-[3px] bg-[#0074cc] rounded-[3px] text-white font-[700] text-[11px] cursor-pointer'
                  onClick={() => {
                    window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
                  }}
                >
                  View Profile
                </div> */}
              </div>
              <div className='flex flex-1 flex-col justify-start items-start'>
                <p>
                  Everyone admires ladies with big breasts. Those two bubbling melons on the chest are show stoppers anywhere. Sometimes, people don’t think having big breast issues is a thing. Why should they when it is one of the most sought-after procedures in cosmetic surgery?
                </p> <br />
                <p>
                  Big breasts make women feel sexy and wanted, especially if they package them well. Some have even gone ahead to find fame courtesy of their big boobs (who remembers Dorothy on Big Brother Naija?). However, there are big breast issues that make women want to think twice about having them. This article will talk about these issues and how to manage them.
                </p>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col justify-start items-start space-y-10 text-[#222]'>
            <p className='font-IBM text-[24px] -sm:text-[20px] font-[700] text-center -sm:text-left w-full'>
              Minor big breasts issues
            </p>
            <p className='font-IBM text-[18px] -sm:text-[16px] font-[500] text-center -sm:text-left w-full !mt-2'>
              Here are 10 minor issues women with big breasts always encounter
            </p>

            {/* question & answer list */}
            <div className='flex flex-col justify-start items-start w-full space-y-12'>
              <div className='flex flex-row justify-start items-start space-x-[20px]'>
                <div className='min-w-[35px] h-[35px] bg-[#222] text-center text-[22px] font-IBM text-white font-[700] mt-2'>1</div>
                <div className='flex flex-col justify-start items-start space-y-6'>
                  <p className='text-[22px] -sm:text-[18px] font-[600] font-IBM'>
                    Button-down shirt is a nightmare
                  </p>
                  <div className='font-Mulish text-[15px] -sm:text-[14px] flex flex-col justify-start items-start space-y-2'>
                    <p className='leading-[1.74]'>
                      A well-endowed woman with big breasts can’t wear button-down shirts. The buttons will disgrace you outside as they always pop open at an unexpected time and place. One minute you’re a regular decent woman, and the next minute you’re unintentionally doing a strip tease for the world to see. What a nightmare!
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex flex-row justify-start items-start space-x-[20px]'>
                <div className='min-w-[35px] h-[35px] bg-[#222] text-center text-[22px] font-IBM text-white font-[700] mt-2'>2</div>
                <div className='flex flex-col justify-start items-start space-y-6'>
                  <p className='text-[22px] -sm:text-[18px] font-[600] font-IBM'>
                    No cute bras that fit
                  </p>
                  <div className='font-Mulish text-[15px] w-full flex flex-col justify-start items-start space-y-4'>
                    <div className='relative'>
                      <img src={NEWIMG1} className='w-full'
                        onClick={() => {
                          window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
                        }}
                      />
                      <div
                        className='w-[120px] py-[5px] mx-auto mt-3 text-center bg-[#0074cc] rounded-[3px] text-white font-[700] text-[14px] -sm:text-[12px] cursor-pointer'
                        onClick={() => {
                          window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
                        }}
                      >
                        View Profile
                      </div>
                      {/* <div
                        className='absolute top-[55px] -sm:top-[25px] right-[15px] -sm:right-[5px] px-4 -sm:px-2 py-[5px] -sm:py-[3px] bg-[#0074cc] rounded-[3px] text-white font-[700] text-[12px] -sm:text-[11px] cursor-pointer'
                        onClick={() => {
                          window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
                        }}
                      >
                        View Profile
                      </div> */}
                    </div>
                    <p className='leading-[1.74]'>
                      All the lingerie stores you patronise have very cute bras you want to buy, but none of them fit because your breasts are too large. You’re stuck with choosing only the usual black and nude colours, that is, if you’re lucky to find your size.
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex flex-row justify-start items-start space-x-[20px]'>
                <div className='min-w-[35px] h-[35px] bg-[#222] text-center text-[22px] font-IBM text-white font-[700] mt-2'>3</div>
                <div className='flex flex-col justify-start items-start space-y-6'>
                  <p className='text-[22px] -sm:text-[18px] font-[600] font-IBM'>
                    Unwanted attention
                  </p>
                  <div className='font-Mulish text-[15px] -sm:text-[14px] flex flex-col justify-start items-start space-y-2'>
                    <p className='leading-[1.74]'>
                      Chai! this one is terrible, especially if you’re the shy, introverted type. All you want is to blend and disappear into the crowd. But your big breasts won’t let you have that because they are the beacon that calls everyone’s attention to you.
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex flex-row justify-start items-start space-x-[20px]'>
                <div className='min-w-[35px] h-[35px] bg-[#222] text-center text-[22px] font-IBM text-white font-[700] mt-2'>4</div>
                <div className='flex flex-col justify-start items-start space-y-6'>
                  <p className='text-[22px] -sm:text-[18px] font-[600] font-IBM'>
                    Sports bra is a scam
                  </p>
                  <div className='font-Mulish text-[15px] -sm:text-[14px] flex flex-col justify-start items-start space-y-2'>
                    <p className='leading-[1.74]'>
                      Do you think wearing a sports bra will help keep your big bouncy breasts in place so you can exercise in peace? Sorry aunty, it’s not going to work. Sports bras are the worst inventions for busty women. Don’t even think of doing cardio exercises on them. Your breasts go bounce sotay it will feel like they’re going to bounce off your chest to the floor.
                    </p>
                    {/* <img src='https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/girl2.jpg' className='w-[300px]' /> */}
                  </div>
                </div>
              </div>

              <div className='flex flex-row justify-start items-start space-x-[20px]'>
                <div className='min-w-[35px] h-[35px] bg-[#222] text-center text-[22px] font-IBM text-white font-[700] mt-2'>5</div>
                <div className='flex flex-col justify-start items-start space-y-6'>
                  <p className='text-[22px] -sm:text-[18px] font-[600] font-IBM'>
                    Everything you wear becomes sexual
                  </p>
                  <div className='font-Mulish text-[15px] -sm:text-[14px] flex flex-col justify-start items-start space-y-2'>
                    <p className='leading-[1.74]'>
                      As in eh, even if you’re dressed like a nun, your big breast makes you look like a sexy nun. Even turtle neck tops that look decent and normal for regular-breasted women will look like a club outfit on you.
                    </p>
                    {/* <img src='https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/girl2.jpg' className='w-[300px]' /> */}
                  </div>
                </div>
              </div>

              <div className='flex flex-row justify-start items-start space-x-[20px]'>
                <div className='min-w-[35px] h-[35px] bg-[#222] text-center text-[22px] font-IBM text-white font-[700] mt-2'>6</div>
                <div className='flex flex-col justify-start items-start space-y-6'>
                  <p className='text-[22px] -sm:text-[18px] font-[600] font-IBM'>
                    Backless outfits? Forget abourit
                  </p>
                  <div className='font-Mulish text-[15px] flex flex-col justify-start items-center space-y-8'>
                    <div className='relative'>
                      <img src={NEWIMG2} className='w-full'
                        onClick={() => {
                          window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
                        }}
                      />
                      <div
                        className='w-[120px] py-[5px] mx-auto mt-3 text-center bg-[#0074cc] rounded-[3px] text-white font-[700] text-[14px] -sm:text-[12px] cursor-pointer'
                        onClick={() => {
                          window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
                        }}
                      >
                        View Profile
                      </div>
                      {/* <div
                        className='absolute top-[50px] -sm:top-[25px] right-[15px] -sm:right-[5px] px-4 -sm:px-2 py-[5px] -sm:py-[3px] bg-[#0074cc] rounded-[3px] text-white font-[700] text-[12px] -sm:text-[11px] cursor-pointer'
                        onClick={() => {
                          window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
                        }}
                      >
                        View Profile
                      </div> */}
                    </div>
                    <p className='leading-[1.74]'>
                      They may be the rave on red carpets and other important events like that, but don’t even bother wearing them. It will only end in premium tears. Just admire women with smaller breasts who can wear them effortlessly. Pretend backless outfits don’t exist.
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex flex-row justify-start items-start space-x-[20px]'>
                <div className='min-w-[35px] h-[35px] bg-[#222] text-center text-[22px] font-IBM text-white font-[700] mt-2'>7</div>
                <div className='flex flex-col justify-start items-start space-y-6'>
                  <p className='text-[22px] -sm:text-[18px] font-[600] font-IBM'>
                    No bathing suits fit
                  </p>
                  <div className='font-Mulish text-[15px] -sm:text-[14px] flex flex-col justify-start items-start space-y-2'>
                    <p className='leading-[1.74]'>
                      Busty women in bikinis are the sexiest pictures. But what they won’t tell you is that it’s almost impossible to find bathing suits that fit. Some have to order customized sets, which means they are more expensive than the regular bikinis.
                    </p>
                    {/* <img src='https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/girl2.jpg' className='w-[300px]' /> */}
                  </div>
                </div>
              </div>

              <div className='flex flex-row justify-start items-start space-x-[20px]'>
                <div className='min-w-[35px] h-[35px] bg-[#222] text-center text-[22px] font-IBM text-white font-[700] mt-2'>8</div>
                <div className='flex flex-col justify-start items-start space-y-6'>
                  <p className='text-[22px] -sm:text-[18px] font-[600] font-IBM'>
                    No braless outing
                  </p>
                  <div className='font-Mulish text-[15px] -sm:text-[14px] flex flex-col justify-start items-start space-y-2'>
                    <p className='leading-[1.74]'>
                      You want to follow no bras geng with your big breasts? Ha! I pity you. By the time those two “girls” bounce up and down as you walk down the street, no one will tell you to wear a bra to keep them in one place. Not only that, you’ll get even more unwanted attention as your bouncy “aunties” will be evident to all to see. You don’t want that, do you? Oya leave #nobra for women with smaller breasts.
                    </p>
                    {/* <img src='https://demo.tagdiv.com/newspaper_pro/wp-content/uploads/2019/08/girl2.jpg' className='w-[300px]' /> */}
                  </div>
                </div>
              </div>

              <div className='flex flex-row justify-start items-start space-x-[20px]'>
                <div className='min-w-[35px] h-[35px] bg-[#222] text-center text-[22px] font-IBM text-white font-[700] mt-2'>9</div>
                <div className='flex flex-col justify-start items-start space-y-6'>
                  <p className='text-[22px] -sm:text-[18px] font-[600] font-IBM'>
                    Sleeping on your stomach is a problem
                  </p>
                  <div className='font-Mulish text-[15px] flex flex-col justify-start items-center space-y-8'>
                    <div className='relative'>
                      <img src={NEWIMG3} className='w-full'
                        onClick={() => {
                          window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
                        }}
                      />
                      <div
                        className='w-[120px] py-[5px] mx-auto mt-3 text-center bg-[#0074cc] rounded-[3px] text-white font-[700] text-[14px] -sm:text-[12px] cursor-pointer'
                        onClick={() => {
                          window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
                        }}
                      >
                        View Profile
                      </div>
                      {/* <div
                        className='absolute top-[50px] -sm:top-[25px] right-[15px] -sm:right-[5px] px-4 -sm:px-2 py-[5px] -sm:py-[3px] bg-[#0074cc] rounded-[3px] text-white font-[700] text-[12px] -sm:text-[11px] cursor-pointer'
                        onClick={() => {
                          window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
                        }}
                      >
                        View Profile
                      </div> */}
                    </div>
                    <p className='leading-[1.74]'>
                      Unless you enjoy suffering under your elevated melons, sleeping on your stomach is a nightmare. So you have to figure out the best sleeping position and stick with it.
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className='flex flex-row justify-start items-start space-x-[20px]'>
                <div className='min-w-[35px] h-[35px] bg-[#222] text-center text-[22px] font-IBM text-white font-[700] mt-2'>12</div>
                <div className='flex flex-col justify-start items-start space-y-6'>
                  <p className='text-[22px] -sm:text-[18px] font-[600] font-IBM'>
                    Wie gehst du damit um, dass du für viele Männer „nur eine Wichsvorlage" bist?
                  </p>
                  <div className='font-Mulish text-[15px] -sm:text-[14px] flex flex-col justify-start items-start space-y-2'>
                    <p className='leading-[1.74]'>
                      Mhhh - mehr bitte! Mich macht die Vorstellung wirklich geil, dass andere auf mich wichsen. Es ist ja auch ein riesiges Kompliment. Mein Beruf würde ansonsten auch keinen Sinn machen. Entweder man macht es aus Leidenschaft oder gar nicht.
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex flex-row justify-start items-start space-x-[20px]'>
                <div className='min-w-[35px] h-[35px] bg-[#222] text-center text-[22px] font-IBM text-white font-[700] mt-2'>13</div>
                <div className='flex flex-col justify-start items-start space-y-6'>
                  <p className='text-[22px] -sm:text-[18px] font-[600] font-IBM'>
                    In der Öffentlichkeit kommt der Beruf der Pornodarstellerin/des Camgirls nicht gut an, gelinde gesagt. Was möchtest du diesen Leuten gern einmal sagen?
                  </p>
                  <div className='font-Mulish text-[15px] -sm:text-[14px] flex flex-col justify-start items-start space-y-2'>
                    <p className='leading-[1.74]'>
                      Entspannt euch alle einmal und genießt das Leben! Ich bin der Meinung, dass Menschen, die mich oder meinen Beruf kritisieren, einfach selbst nur unzufrieden mit sich oder dem eigenen Beruf sind.
                    </p>
                  </div>
                </div>
              </div> */}

            </div>
          </div>
          <div className='w-full flex flex-row -sm:flex-col justify-center items-start space-x-4 -sm:space-x-0 -sm:space-y-6 border p-6'>
            <img 
              src={NEWIMG6} 
              className='w-[120px] h-[120px] -sm:w-full -sm:h-full object-cover cursor-pointer'
              onClick={() => {
                window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
              }}
            />
            <div className='flex flex-1 flex-col justify-start items-start space-y-2'>
              <p className='text-[15px] font-[700]'>Lexi</p>
              <a href="https://onlyfans.com/zeliamarieee/c5" className='text-[14px] italic text-[#444]'>https://onlyfans.com/zeliamarieee/c5</a>
              <p className='text-[14px]'>
                I want to be your online gf 🥰 <br />
                I answer all DMs & love to chat with you...so say hi, don’t be shy 🙈 !
                I run this page 💯 by myself so please don’t be rude, be patient, don’t be pushy...
              </p>
              <div className='flex flex-row justify-start items-center space-x-4 !mt-4 cursor-pointer'
                onClick={() => {
                  window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
                }}
              >
                <BsFacebook className='text-[#444]' />
                <BsInstagram className='text-[#444]' />
                <BsTwitter className='text-[#444]' />
                <BsPinterest className='text-[#444]' />
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col justify-start items-start space-y-8'>
            <div className='w-full text-left text-[14px] border-b-[2px] border-b-[#222] py-[2px]'>
              <span className='py-[5px] px-[12px] bg-[#222] text-white'>NEW POSTS</span>
            </div>
            <div className='grid grid-cols-3 -sm:grid-cols-1 gap-6 text-[13px] leading-[20px] font-[700]'>
              <div className='flex flex-col justify-start items-start space-y-2 cursor-pointer -sm:flex-row -sm:space-y-0 -sm:space-x-2'
                onClick={() => {
                  window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
                }}
              >
                <img src={NEWIMG4} className='w-full -sm:w-[100px]' />
                <p>Ready for Weekend 🍑</p>
              </div>
              <div className='flex flex-col justify-start items-start space-y-2 cursor-pointer -sm:flex-row -sm:space-y-0 -sm:space-x-2'
                onClick={() => {
                  window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
                }}
              >
                <img src={NEWIMG5} className='w-full -sm:w-[100px]' />
                <p>I know it's a bit late but how do i look in my costume? 🤭</p>
              </div>
              {/* <div className='flex flex-col justify-start items-start space-y-2 cursor-pointer -sm:flex-row -sm:space-y-0 -sm:space-x-2'
                onClick={() => {
                  window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
                }}
              >
                <img src={IMG9} className='w-full -sm:w-[100px]' />
                <p>What was your Christmas wish? 😊🎄DM me, baby, maybe I can help you with that 😈</p>
              </div> */}
            </div>
          </div>
        </div>
        <div className='w-[350px] flex flex-col justify-start items-center space-y-16 p-4 -lg:hidden'>
          <div className='flex flex-col justify-start items-center w-full space-y-2'>
            <img
              src={NEWIMG6}
              className='w-[120px] h-[120px] rounded-full cursor-pointer object-cover'
              onClick={() => {
                window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
              }}
            />
            <p className='text-[15px] font-[700]'>Lexi</p>
            <a href="https://onlyfans.com/zeliamarieee/c5" className='text-[12px] italic text-[#444]'>https://onlyfans.com/zeliamarieee/c5</a>
            <p className='text-[12px] text-center px-4'>
              I want to be your online gf 🥰 <br />
              I answer all DMs & love to chat with you...so say hi, don’t be shy 🙈 !
              I run this page 💯 by myself so please don’t be rude, be patient, don’t be pushy...
            </p>
          </div>
          <div className='w-full flex flex-col justify-start items-start space-y-8'>
            <div className='w-full text-left text-[14px] border-b-[2px] border-b-[#222] py-[2px]'>
              <span className='py-[5px] px-[12px] bg-[#222] text-white'>NEW POSTS</span>
            </div>
            <div className='grid grid-cols-1 gap-y-4 text-[13px] leading-[20px] font-[700]'>
              <div className='flex flex-row justify-start items-start space-x-2 cursor-pointer'
                onClick={() => {
                  window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
                }}
              >
                <img src={NEWIMG4} className='w-[100px]' />
                <p>
                  Ready for Weekend 🍑 <br />
                  <span className='text-[#767676] text-[11px] italic'>May 11, 2023</span>
                </p>
              </div>
              <div className='flex flex-row justify-start items-start space-x-2 cursor-pointer'
                onClick={() => {
                  window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
                }}
              >
                <img src={NEWIMG5} className='w-[100px]' />
                <p>
                  I know it's a bit late but how do i look in my costume? 🤭 <br />
                  <span className='text-[#767676] text-[11px] italic'>May 8, 2023</span>
                </p>
              </div>
              {/* <div className='flex flex-row justify-start items-start space-x-2 cursor-pointer'
                onClick={() => {
                  window.open('https://onlyfans.com/zeliamarieee/c5', "_blank", "noreferrer");
                }}
              >
                <img src={IMG9} className='w-[100px]' />
                <p>
                  What was your Christmas wish? 😊🎄DM me, baby... <br />
                  <span className='text-[#767676] text-[11px] italic'>Dec 27, 2022</span>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1;