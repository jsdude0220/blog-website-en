import React from 'react';
import IMG2 from '../../assets/2.png';
import IMG3 from '../../assets/3.png';
import IMG5 from '../../assets/5.png';
import IMG7 from '../../assets/7.jpeg';
import IMG8 from '../../assets/8.jpeg';

const Section1 = () => {
  return (
    <div className='bg-white w-[100%] py-[100px] font-Mulish'>
      <div className='max-w-[1100px] mx-auto px-12 pt-[62px] -sm:px-4 text-center font-IBM space-y-4'>
        <p className='text-[20px] leading-[1.3] font-[700] text-[#ca5879]'>
          Von "schwerfällig" zu strahlend schön
        </p>
        <p className='text-[44px] -sm:text-[22px] leading-[1.2] font-[700]'>
          Adelsexperte erklärt die zwei Seiten der Fürstin Charlène
        </p>
        <p className='text-[14px] leading-[1.3] font-[400] text-[#ca5879]'>
          09. Mai 2023 um 18:39 Uhr
        </p>
        <img
          // src={'https://aisvip-a.akamaihd.net/vms/6458ffa265ef5294530117f2/960x0/image.jpg'}
          src={'https://public.onlyfans.com/files/x/xx/xxl/xxl7t37psfnqx1ehjqljp9ve75ahlnox1664210323/237936482/header.jpg'}
          className='w-full bg-center bg-contain cursor-pointer'
        />
      </div>
      <div className='max-w-[1100px] pt-[30px] flex flex-row -lg:flex-col justify-center items-start space-x-6 -lg:space-x-0 -lg:space-y-8 mx-auto px-12 -sm:px-4'>
        <div className='flex flex-1 flex-col justify-start items-center space-y-20 p-4'>
          <div className='w-full flex flex-col justify-start items-start space-y-6 text-[#222]'>
            <p className='text-[20px] font-[700] leading-[24px]'>
              von Michael Begasse, Claudia Spitzkowski und Charlotte Reppenhagen
            </p>
            <p className='text-[18px] font-[600] leading-[32px]'>
              Größer hätte der Unterschied kaum sein können! Der Einladung zu König Charles’ (74) Krönung sind natürlich auch Fürst Albert (65) und Fürstin Charlène (45) von Monaco gefolgt. Während die ehemalige Schwimmerin zur Krönungszeremonie noch etwas „schwerfällig“ wirkte, wie Michael Begasse bemerkte, strahlte sie später am Abend so wunderschön wie selten zuvor. Im Video oben erklärt unser Adelsexperte die zwei Seiten der monegassischen Fürstin.
            </p>
          </div>
          <div className='w-full flex flex-col justify-start items-start space-y-6 text-[#222]'>
            <p className='text-[20px] font-[700] leading-[24px]'>
              Fürstin Charlène wirkte bei Krönung zuerst etwas "schwerfällig
            </p>
            <p className='text-[18px] font-[600] leading-[32px]'>
              Im Rahmen der Krönung von König Charles hatte Fürstin Charlène zwei Auftritte. An der Seite ihres Ehemanns wurde sie beim Betreten der Westminster Abbey vor der historischen Krönungszeremonie gesichtet. Während Albert wach und aktiv wirkte, schien Charlène an seiner Seite fast wie ein Geist neben ihm zu schweben. Sie wirkte eher passiv; ein Eindruck, den nicht zuletzt auch ihr cremefarbenes Ensemble aus Blazer und Midi-Rock verstärkte. Dazu kombinierte die Fürstin ein fließendes Cape, helle Pumps und einen farblich passenden Hut.
            </p>
            <p className='text-[18px] font-[600] leading-[32px]'>
              „Ich fand sie ein bisschen schwerfällig“, erinnert sich Adelsexperte Michael Begasse im Interview mit VIP.de, „auch das Kleid [war] ein ganz kleines bisschen unvorteilhaft.“ Die Fürstin blickte viel auf den Boden herunter und schien an der aufgeregten Spannung, die sich über die Gäste gelegt hatte, nicht teilhaben können.
            </p>
          </div>
          <div className='w-full'>
            <img
              // src="https://aisvip-a.akamaihd.net/masters/2000709/1686x0/adelsexperte-erklaert-die-zwei-seiten-der-fuerstin-charlene.jpg"
              src={IMG2}
              className='w-full bg-center bg-contain'
            />
            <div className='w-full p-8 text-[18px] leading-[22px] text-left text-[#ca5879] italic bg-[#ca587930]'>
              <p>
                Fürst Albert und Fürstin Charlène betreten die Westminster Abbey.
              </p>
              <p>
                © Toby Melville, Pool via AP
              </p>
            </div>
          </div>
          <div className='w-full flex flex-col justify-start items-start space-y-6 text-[#222]'>
            <p className='text-[20px] font-[700] leading-[24px]'>
              Und plötzlich geht es anders! So schön kann Charlène strahlen
            </p>
            <p className='text-[18px] font-[600] leading-[32px]'>
              Am Abend folgte dann der überraschende Umschwung: In einem hellblauen Jumpsuit mit eleganten Raffungen und glitzernden Details strahlte Charlène wie keine andere! Ihr zweiter Auftritt wirkte, als habe man die Fürstin ausgetauscht. Plötzlich stand sie selbstbewusst(er) neben ihrem Albert, schaute nach vorn und lächelte.
            </p>
            <p className='text-[18px] font-[600] leading-[32px]'>
              Michael Begasse erinnert an ihre lange Erkrankung  und erklärt ihren wunderbaren zweiten Auftritt: „Charlène hat meiner Einschätzung nach noch nicht wieder die Kraft, so einen richtigen, langen Arbeitstag zu machen. Das ist quasi das royale ‚Hamburger Modell‘, so würde ich das mal nennen“, schmunzelt er. „Charlène kann strahlen, wenn sie gesund ist, wenn sie gut drauf ist. Dann ist sie bildschön.“ Er betont: Die Fürstin sei keine Schauspielerin. „Man sieht es ihr auch an, wenn es ihr nicht gut geht.“
            </p>
            <p className='text-[18px] font-[600] leading-[32px]'>
              <span>Lese-Tipp: </span>
              <a target="_blank" className='underline' href="https://www.vip.de/cms/fuerst-albert-sehnt-sich-nach-seinen-40ern-damals-war-ich-freier-5036331.html">
                Fürst Albert gesteht überraschend: Er sehnt sich nach seinen 40ern zurück! „Damals war ich freier“
              </a>
            </p>
          </div>
          <div className='w-full'>
            <img
              // src="https://aisvip-a.akamaihd.net/masters/2000714/1686x0/adelsexperte-erklaert-die-zwei-seiten-der-fuerstin-charlene.jpg"
              src={IMG3}
              className='w-full bg-center bg-contain'
            />
            <div className='w-full p-8 text-[18px] leading-[22px] text-left text-[#ca5879] italic bg-[#ca587930]'>
              <p>
                Was für ein Hammer-Auftritt! Am Abend des 6. Mai strahlte Fürstin Charlène neben Fürst Albert wie selten zuvor.
              </p>
              <p>
                © IMAGO/Cover-Images
              </p>
            </div>
          </div>
          <div className='w-full flex flex-col justify-start items-start space-y-6 text-[#222]'>
            <p className='text-[20px] font-[700] leading-[24px]'>
              Michael Begasse ist überzeugt: Charlène hat noch langen Weg vor sich
            </p>
            <p className='text-[18px] font-[600] leading-[32px]'>
              Unser Adelsexperte spricht Charlène seinen Respekt aus. „Sie ist ein Mensch und ich habe auch Respekt davor, dass sie – obwohl es ihr nicht gut geht – in die Öffentlichkeit geht.“ Er glaubt, dass auch bei Charlène und Albert die negativen Schlagzeiten, Ehe-Gerüchte und Scheidungsspekulationen mitschwingen, wenn es um die Planung eines Events geht. Wäre die Fürstin nicht zur Krönung gekommen, „hätten alle wieder Gerüchte gestreut“.
            </p>
            <p className='text-[18px] font-[600] leading-[32px]'>
              Er ist aber auch davon überzeugt, dass sie „eine Frau [ist], die einen schweren Weg begonnen hat“. Und: „Dieser Weg ist, meiner Einschätzung nach, noch lange nicht vorbei.“
            </p>
          </div>
        </div>
        <div className='w-[300px] -sm:w-full flex flex-col justify-start items-center space-y-16 p-4'>
          <div className='w-full flex flex-col justify-start items-start space-y-8'>
            <div className='w-full text-left text-[14px] border-b-[2px] border-b-[#222] py-[2px]'>
              <span className='py-[5px] px-[12px] bg-[#222] text-white'>NEW POSTS</span>
            </div>
            <div className='grid grid-cols-1 gap-y-4 text-[13px] leading-[20px] font-[700]'>
              <div className='flex flex-col justify-start items-start cursor-pointer'>
                <img 
                  // src={'https://images.outbrainimg.com/transform/v3/eyJpdSI6IjgyZjViMDFkOWMzODRmYTAyN2E2YjMyZjIyM2EyZWE1NDVlMTc3ZjM3M2ZiM2I2NmE4M2YyYzFkODhkYTQ1NzQiLCJ3IjozMTAsImgiOjE3NSwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp'} 
                  src={IMG5} 
                  className='w-full' 
                />
                <p className='bg-[#ca587920] p-4 w-full'>
                  <span className='text-[14px] text-[#ca5879] font-bold text-left'>
                    Capital One Shopping
                  </span><br />
                  <span className='text-[#333] text-[14px] font-[700]'>
                    Airlines Hate When Travelers Do This (But Can't Stop Them)!
                  </span>
                </p>
              </div>
              <div className='flex flex-col justify-start items-start cursor-pointer'>
                <img 
                  // src={'https://images.outbrainimg.com/transform/v3/eyJpdSI6IjRjNTRmOGQ5YjMzYzBmN2ZkODExMmYxMDNjMmI5YmJmOTFlMGJmZTMxNDI0Y2Y1NmQ5ZjUzYzYyNzE3OWUxOTgiLCJ3Ijo0ODAsImgiOjI3MCwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp'} 
                  src={IMG7} 
                  className='w-full' 
                />
                <p className='bg-[#ca587920] p-4 w-full'>
                  <span className='text-[14px] text-[#ca5879] font-bold text-left'>
                    PARTNER-SERVICE
                  </span><br />
                  <span className='text-[#333] text-[14px] font-[700]'>
                    Tipps zum Abnehmen: So…
                  </span>
                </p>
              </div>
              <div className='flex flex-col justify-start items-start cursor-pointer'>
                <img 
                  // src={'https://images.outbrainimg.com/transform/v3/eyJpdSI6IjhiNDZjMWJlNTllYTc4NTNiYmRlZmViYTI4MWJmMmRkY2RlZmE2NzYzZTU5MDZkMWZjNWU3MzhiYTY2N2IxYjciLCJ3IjozMTAsImgiOjE3NSwiZCI6MS41LCJjcyI6MCwiZiI6NH0.webp'} 
                  src={IMG8} 
                  className='w-full' 
                />
                <p className='bg-[#ca587920] p-4 w-full'>
                  <span className='text-[14px] text-[#ca5879] font-bold text-left'>
                    Alessia Herren
                  </span><br />
                  <span className='text-[#333] text-[14px] font-[700]'>
                    "Endlich habe ich meine Figur wieder"
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1;