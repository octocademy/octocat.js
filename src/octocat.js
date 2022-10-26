System.register([], function(_export, _context) {
  'use strict'

  return {
    setters: [],
    execute: function() {
      function _asyncToGenerator(fn) {
        return function() {
          var gen = fn.apply(this, arguments)
          return new Promise(function(resolve, reject) {
            function step(key, arg) {
              try {
                var info = gen[key](arg)
                var value = info.value
              } catch (error) {
                reject(error)
                return
              }

              if (info.done) {
                resolve(value)
              } else {
                return Promise.resolve(value).then(
                  function(value) {
                    step('next', value)
                  },
                  function(err) {
                    step('throw', err)
                  },
                )
              }
            }

            return step('next')
          })
        }
      }

      // OctocatOptions = {
      //   bodyColors: {},
      //   bottoms: {},
      //   eyeColors: {},
      //   eyes: {},
      //   eyewear: {},
      //   faceColors: {},
      //   facialHair: {},
      //   footwear: {},
      //   hair: {},
      //   hairColors: {},
      //   headgear: {},
      //   accessories: {},
      //   mouths: {},
      //   props: {},
      //   tops: {} 
      // }

      const OctocatOptions = {
        bodyColors: {
          options: [
            {
              primary: '#282828',
              underside: '#494949',
              suctions: '#99C7C9',
            },
            {
              primary: '#282828',
              underside: '#99C7C9',
              suctions: '#494949',
            },
            {
              primary: '#52467A',
              underside: '#9DA2C9',
              suctions: '#D6BCA5',
            },
            {
              primary: '#6B438C',
              underside: '#B7D5A5',
              suctions: '#E8D575',
            },
            {
              primary: '#7F5797',
              underside: '#A69CB1',
              suctions: '#EEBCB8',
            },
            {
              primary: '#9E4D9E',
              underside: '#B1BDC9',
              suctions: '#DFC562',
            },
            {
              primary: '#941D1D',
              underside: '#CE8D8D',
              suctions: '#D6D58B',
            },
            {
              primary: '#B0591A',
              underside: '#F4E1A0',
              suctions: '#7A9E98',
            },
            {
              primary: '#874E23',
              underside: '#E6BD9F',
              suctions: '#B7E7EA',
            },
            {
              primary: '#695131',
              underside: '#FDE5C6',
              suctions: '#BD7586',
            },
            {
              primary: '#6D6D63',
              underside: '#E2BD43',
              suctions: '#7A9E98',
            },
            {
              primary: '#AD943D',
              underside: '#F4E1A0',
              suctions: '#7A9E98',
            },
            {
              primary: '#84872F',
              underside: '#CDCF8A',
              suctions: '#876D5D',
            },
            {
              primary: '#557542',
              underside: '#B7D5A5',
              suctions: '#D8DAF0',
            },
            {
              primary: '#457A6D',
              underside: '#B98DBD',
              suctions: '#A1D4C8',
            },
            {
              primary: '#46828E',
              underside: '#494959',
              suctions: '#7C6983',
            },
            {
              primary: '#4F6AB0',
              underside: '#89B7CC',
              suctions: '#694E61',
            },
            {
              primary: '#5F6196',
              underside: '#C69848',
              suctions: '#E1CFC5',
            },
          ],
        },
        bottoms: {
          options: [
            {
              name: 'French bottoms',
              new: true,
              image: '41_Bottom_French_v1.svg',
              icon: '41_Bottom_French.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Panda bottoms',
              new: true,
              image: '40_Bottom_Panda_v1.svg',
              icon: '40_Bottom_Panda.svg',
              position: 'front',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Hockey bottoms',
              new: true,
              image: '42_Bottom_Hockey.svg',
              icon: '42_Bottom_Hockey.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Lederhosen',
              image: '24_Bottom_Lederhosen_v1.svg',
              icon: 'Bottom_Lederhosen.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Dirndl',
              image: '25_Bottom_Dirndl_v1.svg',
              icon: 'Bottom_Dirndl.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'German Football Shorts',
              image: '34_Bottom_GermanFootballShorts_v1.svg',
              icon: 'Bottom_GermanFootballShorts.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Kraftwerk Pants',
              image: '35_Bottom_KraftwerkPants_v1.svg',
              icon: 'Bottom-KraftwerkPants.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Adidas Tracksuit',
              image: '36_Bottom_AdidasTracksuit_v1.svg',
              icon: 'Bottom-AdidasTracksuit.svg',
              position: 'front',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Astronaut pants',
              image: '37_Bottom_Astronaut_v1.svg',
              icon: 'Bottom_Astronaut.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Yoga pants',
              image: '38_Bottom_Yogapants_v1.svg',
              icon: 'Bottom_Yogapants.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Shorts',
              image: '39_Bottom_Newshorts_v1.svg',
              icon: 'Bottom-Newshorts.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Jeans',
              image: '01_Bottom_JeanRegular_Pants_v01.svg',
              icon: 'bottom-cowboyjeans.svg',
              position: 'back',
              rules: [
                {
                  rule: 'xl-pants',
                },
              ],
            },
            {
              name: 'Ripped Jeans',
              image: '02_Bottom_JeansRipped_Pants_v01.svg',
              icon: 'bottom-jeansripped.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Cuffed Jeans',
              image: '03_Bottom_JeansCuffed_Pants_v01.svg',
              icon: 'bottom-jeanscuffed.svg',
              position: 'front',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Bell Bottoms',
              image: '04_Bottoms_BellBottoms_Pants.svg',
              icon: 'bottom-bellbottoms.svg',
              position: 'front',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Suit Pants',
              image: '05_Bottom_BizSuit_Pants.svg',
              icon: 'bottom-businesssuitpants.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Mini Skirt',
              image: '06_Bottoms_Mini_Skirt.svg',
              icon: 'bottom-miniskirt.svg',
              rules: [
                {
                  rule: 'shorts',
                },
              ],
            },
            {
              name: 'Midi Skirt',
              image: '07_Bottoms_Midi_Skirt_v02.svg',
              icon: 'bottom-midiskirt.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Maxi Skirt',
              image: '08_Bottom_Maxi_Skirt_v01.svg',
              icon: 'bottom-maxiskirt.svg',
              position: 'front',
              rules: [
                {
                  rule: 'xl-pants',
                },
              ],
            },
            {
              name: 'Snow Pants',
              image: '09_Bottom_Snow_Pants_v01.svg',
              icon: 'bottom-snow-pants.svg',
              position: 'front',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Cyclist Shorts',
              image: '10_Bottom_Cyclist_Shorts_v01.svg',
              icon: 'bottom-cyclistshorts.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'PJ Pants',
              image: '11_Bottom_PJs_Pants_v02.svg',
              icon: 'bottom-pjpants.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Superhero Tights',
              image: '12_Bottom_SuperHero_Tights.svg',
              icon: 'bottom-superherotights.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Firefighter Pants',
              image: '13_Bottom_Firefighter_Pants_v01.svg',
              position: 'front',
              icon: 'bottom-firefighter-pants.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Scuba Pants',
              image: '15_Bottom_Scuba_WetSuit_v01.svg',
              icon: 'bottom-wetsuit.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Dancer Tights',
              image: '17_Bottoms_Dancer_LegWarmersTights.svg',
              icon: 'bottom-dancertights.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Bunny Suit',
              image: '18_Bottom_BunnySuit_v01.svg',
              icon: 'bottom-bunnysuit.svg',
              position: 'front',
              rules: [
                {
                  rule: 'xl-pants',
                },
              ],
            },
            {
              name: 'Armor Suit',
              image: '19_Bottom_ArmorSuit_v01.svg',
              icon: 'bottom-armorsuit.svg',
              rules: [
                {
                  rule: 'xl-pants',
                },
                {
                  rule: 'xxl-pants',
                },
              ],
            },
            {
              name: 'Swim Trunks',
              image: '20_Bottom_SwimTrunks_v01.svg',
              icon: 'bottom-swimtrunks.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Overalls',
              image: '21_Bottom_Overalls_v01.svg',
              icon: 'bottom-overalls.svg',
              position: 'front',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Kilt',
              image: '22_Bottom_Kilt_v01.svg',
              icon: 'bottom-kilt.svg',
              rules: [
                {
                  rule: 'xl-pants',
                },
              ],
            },
            {
              name: 'Soccer Shorts',
              image: '23_Bottom_SoccerShorts_v01.svg',
              icon: 'bottom-soccershorts.svg',
              rules: [
                {
                  rule: 'shorts',
                },
              ],
            },
          ],
        },
        eyeColors: {
          options: [
            {
              color: '#503B37',
            },
            {
              color: '#701B09',
            },
            {
              color: '#A34F3E',
            },
            {
              color: '#B3682B',
            },
            {
              color: '#A4886F',
            },
            {
              color: '#B0A83E',
            },
            {
              color: '#5D5913',
            },
            {
              color: '#5D8D33',
            },
            {
              color: '#9DC877',
            },
            {
              color: '#9EA294',
            },
            {
              color: '#829382',
            },
            {
              color: '#719694',
            },
            {
              color: '#5DB088',
            },
            {
              color: '#54A0B9',
            },
            {
              color: '#135C38',
            },
            {
              color: '#0F4456',
            },
            {
              color: '#717CA0',
            },
            {
              color: '#5675B8',
            },
            {
              color: '#716EC1',
            },
            {
              color: '#9274A1',
            },
            {
              color: '#42185A',
            },
            {
              color: '#A64A7D',
            },
            {
              color: '#5A0630',
            },
          ],
        },
        eyes: {
          options: [
            {
              name: 'Neutral',
              image: '07_EyeExpress_Neutral.svg',
              icon: '07-eyeexpress-neutral.svg',
              isActive: true,
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Contempt',
              new: true,
              image: '16_EyeExpress_Contempt.svg',
              icon: '16-eyeexpress-Contempt.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Smirk',
              new: true,
              image: '17_EyeExpress_Smirk.svg',
              icon: '17-eyeexpress-Smirk.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Mascara Open',
              new: true,
              image: '18_EyeExpress_MascaraOpen.svg',
              icon: '17-eyeexpress-MascaraOpen.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Mascara closed',
              new: true,
              image: '19_EyesExpress_MascaraClosed.svg',
              icon: '17-eyeexpress-MascaraClosed.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Crosseye',
              new: true,
              image: '20_EyeExpress_Crosseyed.svg',
              icon: '17-eyeexpress-Crosseyed.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Happy Closed',
              image: '01_EyeExpress_HappyClosed.svg',
              icon: '01-eyeexpresion-happyclosed.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Happy Open',
              image: '02_EyeExpress_HappyOpen.svg',
              icon: '02-eyeexpression-happyopen.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Sad',
              image: '03_EyeExpress_Sad.svg',
              icon: '03-eyeexpress-sad.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Confused',
              image: '04_EyeExpress_Confused.svg',
              icon: '04-eyeexpress-confused.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Excited Open',
              image: '05_EyeExpress_ExcitedOpen.svg',
              icon: '05-eyeexpress-excitedopen.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Excited Closed',
              image: '06_EyeExpress_ExcitedClosed.svg',
              icon: '06-eyeexpress-excitedclosed.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Tired',
              image: '08_EyeExpress_Tired.svg',
              icon: '08-eyeexpress-tired.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Angry',
              image: '10_EyeExpress_Angry.svg',
              icon: '10-eyeexpress-angry.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Chillin',
              image: '09_EyeExpress_Chillin.svg',
              icon: '09-eyeexpress-chillin.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Winking',
              image: '15_EyeExpress_Winking.svg',
              icon: '15-eyeexpress-winking.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Heart Eyes',
              image: '11_EyeExpress_HeartEyes.svg',
              icon: '11-eyeexpress-hearteyes.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Starstruck',
              image: '12_EyeExpress_Starstruck.svg',
              icon: '12-eyeexpress-starstruck.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Zany',
              image: '13_EyeExpress_Zany.svg',
              icon: '13-eyeexpress-zany.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
          ],
        },
        eyewear: {
          options: [
            {
              name: 'Scuba Goggles',
              image: '01_Eyewear_ScubaGoggles_v01.svg',
              icon: 'eyewear-scubagoggles.svg',
              moreObjects: [
                {
                  object: '01_Eyewear_ScubaGoggles_v01-back.svg',
                },
              ],
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Oculus Rift',
              image: '03_Eyewear_OculusRift.svg',
              icon: 'Eyewear-oculusrift.svg',
              moreObjects: [
                {
                  object: '03_Eyewear_OculusRift-back.svg',
                },
              ],
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Mardi Gras Mask',
              image: '04_Eyewear_MardiGraMask.svg',
              icon: 'Eyewear-mardigramask.svg',
              moreObjects: [
                {
                  object: '04_Eyewear_MardiGraMask-back.svg',
                },
              ],
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Glasses Round',
              image: '05_Eyewear_Eyewear_GlassesRound_.svg',
              icon: 'Eyewear-glassesround.svg',
              position: 'middle',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Glasses Tortoise Shell',
              image: '06_Eyewear_GlassesTortoiseShell.svg',
              icon: 'Eyewear-glassestortoiseshell.svg',
              moreObjects: [
                {
                  object: '06_Eyewear_GlassesTortoiseShell-back.svg',
                },
              ],
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Glasses Bifocals',
              image: '07_Eyewear_GlassesBifocals.svg',
              icon: 'Eyewear-glassesbifocals.svg',
              position: 'middle',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Monocle',
              image: '08_Eyewear_Monocle.svg',
              icon: 'Eyewear-monocle.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Eyepatch',
              image: '09_Eyewear_Eyepatch.svg',
              icon: 'Eyewear-eyepatch.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Sports Paint',
              image: '10_Eyewear_SportsPaint.svg',
              icon: 'Eyewear-sportpaint.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Sunglasses Heart Shaped',
              image: '11_Eyewear_SunglassesHeartShaped.svg',
              icon: 'Eyewear-sunglassesheartshapes.svg',
              moreObjects: [
                {
                  object: '11_Eyewear_SunglassesHeartShaped-back.svg',
                },
              ],
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Sunglasses Ray Bans',
              image: '12_Eyewear_SunglassesRayBans.svg',
              icon: 'Eyewear-sunglassesraybans.svg',
              moreObjects: [
                {
                  object: '12_Eyewear_SunglassesRayBans-back.svg',
                },
              ],
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Sunglasses Alien Eyes',
              image: '13_Eyewear_SunglassesAlienEyes.svg',
              icon: 'Eyewear-eyeglassesalieneyes.svg',
              moreObjects: [
                {
                  object: '13_Eyewear_SunglassesAlienEyes-back.svg',
                },
              ],
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Sunglasses Aviators',
              image: '14_Eyewear_SunglassesAviators.svg',
              icon: 'Eyewear-sunglassesaviators.svg',
              moreObjects: [
                {
                  object: '14_Eyewear_SunglassesAviators-back.svg',
                },
              ],
              position: null,
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Sunglasses Circular',
              image: '15_Eyewear_SunglassesCircular.svg',
              icon: 'Eyewear-sunglassescircular.svg',
              moreObjects: [
                {
                  object: '15_Eyewear_SunglassesCircular-back.svg',
                },
              ],
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Sunglasses Sporty',
              image: '16_Eyewear_SunglassesSporty.svg',
              icon: 'Eyewear-sunglassessporty.svg',
              moreObjects: [
                {
                  object: '16_Eyewear_SunglassesSporty-back.svg',
                },
              ],
              rules: [
                {
                  rule: null,
                },
              ],
            },
          ],
        },
        puddleColors: {
          options: [
            {
              color: '#503B37',
            },
            {
              color: '#701B09',
            },
            {
              color: '#A34F3E',
            },
            {
              color: '#B3682B',
            },
            {
              color: '#A4886F',
            },
            {
              color: '#B0A83E',
            },
            {
              color: '#5D5913',
            },
            {
              color: '#5D8D33',
            },
            {
              color: '#9DC877',
            },
            {
              color: '#9EA294',
            },
            {
              color: '#829382',
            },
            {
              color: '#719694',
            },
            {
              color: '#5DB088',
            },
            {
              color: '#54A0B9',
            },
            {
              color: '#135C38',
            },
            {
              color: '#0F4456',
            },
            {
              color: '#717CA0',
            },
            {
              color: '#5675B8',
            },
            {
              color: '#716EC1',
            },
            {
              color: '#9274A1',
            },
            {
              color: '#42185A',
            },
            {
              color: '#A64A7D',
            },
            {
              color: '#5A0630',
            },
            {
              color: '#5CDFF2',
            },
          ],
        },
        faceColors: {
          options: [
            {
              face: '#FFC5AF',
              nose: '#A34F3E',
            },
            {
              face: '#D9B6A5',
              nose: '#814B41',
            },
            {
              face: '#c8ab9f',
              nose: '#73382C',
            },
            {
              face: '#AB806C',
              nose: '#453E2D',
            },
            {
              face: '#F7EFCD',
              nose: '#A37D76',
            },
            {
              face: '#E0DBB8',
              nose: '#A37D76',
            },
            {
              face: '#A09C7D',
              nose: '#7E5E6F',
            },
            {
              face: '#F6F4B7',
              nose: '#A39866',
            },
            {
              face: '#FFEBBB',
              nose: '#A37C40',
            },
            {
              face: '#CEAF82',
              nose: '#A34F3E',
            },
            {
              face: '#A88C5B',
              nose: '#63504C',
            },
            {
              face: '#947F74',
              nose: '#6D5145',
            },
            {
              face: '#967D62',
              nose: '#6A372D',
            },
            {
              face: '#7C6C54',
              nose: '#3D2517',
            },
            {
              face: '#785B4F',
              nose: '#453E2D',
            },
            {
              face: '#89B7CC',
              nose: '#446660',
            },
            {
              face: '#99C7C9',
              nose: '#494949',
            },
            {
              face: '#CDCF8A',
              nose: '#84872F',
            },
            {
              face: '#B7D5A5',
              nose: '#457A6D',
            },
            {
              face: '#7A9E98',
              nose: '#4C335B',
            },
            {
              face: '#9DA2C9',
              nose: '#52467A',
            },
            {
              face: '#B98DBD',
              nose: '#694E61',
            },
            {
              face: '#A69CB1',
              nose: '#495677',
            },
          ],
        },
        facialHair: {
          options: [
            {
              name: 'French Mustache',
              new: true,
              image: '09_FacialHair_FrenchMustache_v1.svg',
              icon: '09_facialhair-frenchmustache.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Cowboy Mustache',
              image: '05_FacialHair_CowboyMustache_v01.svg',
              icon: 'facialhair-cowboymustache.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Dali Mustache',
              image: '08_FacialHair_DaliMustache_v02.svg',
              icon: 'facialhair-dalimustache.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Mutton Chops',
              image: '04_FacialHair_MuttonChops_v02.svg',
              icon: 'facialhair-muttonchops.svg',
              position: 'low',
              moreObjects: [
                {
                  object: '04_FacialHair_MuttonChops_v02-back.svg',
                  position: 'back',
                },
              ],
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Wizard Beard',
              image: '01_FacialHair_WizardBeard_v02.svg',
              icon: 'facialhair-wizardbeard.svg',
              position: 'low',
              moreObjects: [
                {
                  object: '01_FacialHair_WizardBeard_v02-back.svg',
                  position: 'back',
                },
              ],
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Full Beard',
              image: '02_FacialHair_FullBeard_v03.svg',
              icon: 'facialhair-fullbeard.svg',
              position: 'low',
              moreObjects: [
                {
                  object: '02_FacialHair_FullBeard_v03-back.svg',
                  position: 'back',
                },
              ],
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Stubble shadow',
              image: '03_FacialHair_Stubble5Shadow_v02.svg',
              icon: 'facialhair-stubbleshadows.svg',
              position: 'back',
              rules: [
                {
                  rule: 'back-facial-hair',
                },
              ],
            },
            {
              name: 'Goatee',
              image: '06_FacialHair_Goatee_v01.svg',
              icon: 'facialhair-goatee.svg',
              position: 'back',
              rules: [
                {
                  rule: 'back-facial-hair',
                },
              ],
            },
            {
              name: 'Soul Patch',
              image: '07_FacialHair_SoulPatch_v01.svg',
              icon: 'facialhair-soulpatch.svg',
              position: 'back',
              rules: [
                {
                  rule: 'back-facial-hair',
                },
              ],
            },
          ],
        },
        footwear: {
          options: [
            {
              name: 'French Shoes',
              new: true,
              image: '30_Footwear_French_v1.svg',
              icon: '30_Footwear_French.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Panda Shoes',
              new: true,
              image: '31_Footwear_Panda_v1.svg',
              icon: '31_footwear_Panda.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Kimono',
              new: true,
              image: '32_Footwear_Kimono_v1.svg',
              icon: '32_Footwear_Kimono.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Hockey',
              new: true,
              image: '33_Footwear_Hockey.svg',
              icon: '33_Footwear_Hockey.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Lederhosen',
              image: '24_Footwear_Lederhosen.svg',
              icon: 'Footwear_Lederhosen.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Dirndl',
              image: '25_Footwear_Dirndl_v1.svg',
              icon: 'Footwear_dirndl.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Football Cleats',
              image: '26_Footwear_GermanFootballCleats_v1.svg',
              icon: 'Footwear_GermanFootballCleats.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Kraftwerk Shoes',
              image: '27_Footwear_KraftwerkShoes_v1.svg',
              icon: 'Footwear_KraftwerkShoes.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Tracksuit',
              image: '28_Footwear_AdidasTracksuit_v2.svg',
              icon: 'Footwear-AdidasTracksuit.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Astronaut',
              image: '29_Footwear_Astronaut_v1.svg',
              icon: 'Footwear_Astronaut.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Cowboy Boots',
              image: '01_Footwear_Cowboy_Boots_v01.svg',
              icon: 'footwear-cowboyboots.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Platform Shoes',
              image: '02_Footwear_Platform_Shoes_v01.svg',
              icon: 'footwear-platformshoes.svg',
              position: null,
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'High Heels',
              image: '03_Footwear_HighHeels_v03.svg',
              icon: 'footwear-highheels.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Dress Shoes',
              image: '04_Footwear_MensDress_Shoes_v02.svg',
              icon: 'footwear-mendressshoes.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Snow Boots',
              image: '05_Footwear_Snow_Boots_v01.svg',
              icon: 'footwear-snow-boots.svg',
              position: null,
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Cyclist Shoes',
              image: '06_Footwear_Cyclist_Shoes_v01.svg',
              icon: 'footwear-cyclistshoes.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Pajama Slippers',
              image: '07_Footwear_PJ_Slippers_v01.svg',
              icon: 'footwear-pj-slippers.svg',
              position: null,
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Superhero Boots',
              image: '08_Footwear_Superhero_Boots_v01.svg',
              icon: 'footwear-superheroboots.svg',
              position: null,
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Firefighter Boots',
              image: '09_Footwear_Firefighter_Boots_v01.svg',
              icon: 'footwear-firefighter-boots.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Wizard Sandals',
              image: '10_Footwear_Wizard_Sandals_v01.svg',
              icon: 'footwear-wizard-sandals.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Scuba Flippers',
              image: '12_Footwear_Scuba_Flippers_v01.svg',
              icon: 'footwear-scuba-flippers.svg',
              position: null,
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Ballet Shoes',
              image: '13_Footwear_Ballet_Shoes_v02.svg',
              icon: 'footwear-balletshoes.svg',
              position: null,
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Bunny Suit',
              image: '14_Footwear_BunnySuit_v01.svg',
              icon: 'footwear-bunnysuit.svg',
              position: null,
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Armor Suit Boots',
              image: '15_Footwear_ArmorSuit_Boots_v01.svg',
              icon: 'footwear-armorsuit-boots.svg',
              position: 'front',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Combat Boots',
              image: '16_Footwear_Combat_Boots_v01.svg',
              icon: 'footwear-combatboots.svg',
              position: null,
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Clogs',
              image: '17_Footwear_Clogs_v01.svg',
              icon: 'footwear-clogs.svg',
              position: null,
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Cleats',
              image: '18_Footwear_Cleats_v01.svg',
              icon: 'footwear-cleats.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'High Tops',
              image: '19_Footwear_HighTops_Sneakers_v01.svg',
              icon: 'footwear-hightopsneakers.svg',
              position: null,
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Athletic Shoes',
              image: '20_Footwear_Athletic_Shoes_v01.svg',
              icon: 'footwear-athleticshoes.svg',
              position: null,
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Converse Shoes',
              image: '21_Footwear_ConverseVans_Shoes_v01.svg',
              icon: 'footwear-converseshoes.svg',
              position: null,
              rules: [
                {
                  rule: null,
                },
              ],
            },
          ],
        },
        hair: {
          options: [
            {
              name: 'Curly Long',
              new: true,
              image: '30_Hair_CurlyLong_v1-back.svg',
              position: 'back',
              icon: '30_Hair_CurlyLong.svg',
              moreObjects: [
                {
                  object: '30_Hair_CurlyLong_v1-front.svg',
                },
              ],
              rules: null,
            },
            {
              name: 'Braided Bun',
              new: true,
              image: '28_Hair_BraidedBun_v1.svg',
              icon: '28_Hair_BraidedBun.svg',
              rules: null,
            },
            {
              name: 'Afro Bun',
              new: true,
              image: '29_Hair_AfroBun_v1.svg',
              icon: '29_Hair_AfroBun.svg',
              rules: null,
            },
            {
              name: 'Afro Side Part',
              new: true,
              image: '31_Hair_AfroSidePart_v1.svg',
              icon: '31_Hair_AfroSidePart.svg',
              rules: null,
            },
            {
              name: 'Pixie',
              image: '10_Hair_Pixie_v03.svg',
              icon: 'hair-pixie.svg',
              rules: null,
            },
            {
              name: 'Bob',
              image: '11_Hair_Bob_v03-back.svg',
              icon: 'hair-bob.svg',
              moreObjects: [
                {
                  object: '11_Hair_Bob_v03-front.svg',
                },
              ],
              rules: null,
            },
            {
              name: 'Rainbow Streak',
              image: '12_Hair_RainbowStreak_v03-back.svg',
              icon: 'hair-rainbowstreak.svg',
              moreObjects: [
                {
                  object: '12_Hair_RainbowStreak_v03-front.svg',
                },
              ],
              rules: null,
            },
            {
              name: 'Dip dyed',
              image: '13_Hair_DipDyed_v03-back.svg',
              moreObjects: [
                {
                  object: '13_Hair_DipDyed_v03-front.svg',
                },
              ],
              icon: 'hair-dipdyed.svg',
              rules: null,
            },
            {
              name: 'Pigtails',
              image: '14_Hair_Pigtails_v03-back.svg',
              icon: 'hair-pigtails.svg',
              moreObjects: [
                {
                  object: '14_Hair_Pigtails_v03-front.svg',
                },
              ],
              rules: null,
            },
            {
              name: 'Milkmaid Braids',
              image: '15_Hair_MilkmaidBraids_v03-back.svg',
              icon: 'hair-milkmaidbraids.svg',
              moreObjects: [
                {
                  object: '15_Hair_MilkmaidBraids_v03-front.svg',
                },
              ],
              rules: null,
            },
            {
              name: 'Front Bangs',
              image: '16_Hair_FrontBangs_v03-back.svg',
              icon: 'hair-frontbangs.svg',
              moreObjects: [
                {
                  object: '16_Hair_FrontBangs_v03-front.svg',
                },
              ],
              rules: null,
            },
            {
              name: 'Shaved',
              image: '17_Hair_Shaved_v01.svg',
              icon: 'hair-shaved.svg',
              rules: null,
            },
            {
              name: 'Pompadour',
              image: '08_Hair_Pompadour_v03.svg',
              icon: 'hair-pompadour.svg',
              rules: null,
            },
            {
              name: 'Curly Short',
              image: '18_Hair_CurlyShort_v03.svg',
              icon: 'hair-curlyshort.svg',
              rules: null,
            },
            {
              name: 'Soft Waves Short',
              image: '19_Hair_SoftWavesShort_v03.svg',
              icon: 'hair-softwavesshort.svg',
              rules: null,
            },
            {
              name: 'Undercut',
              image: '06_Hair_Undercut_v03.svg',
              icon: 'hair-undercut.svg',
              rules: null,
            },
            {
              name: 'Soft Waves Long',
              image: '20_Hair_SoftWavesLong-back.svg',
              icon: 'hair-softwaveslong.svg',
              moreObjects: [
                {
                  object: '20_Hair_SoftWavesLong-front.svg',
                },
              ],
              rules: null,
            },
            {
              name: 'Bangs Straight Medium',
              image: '22_Hair_SidePartBangsStraightMed_v03.svg',
              icon: 'hair-sidepartsbangsstraightmed.svg',
              rules: null,
            },
            {
              name: 'Bangs Wavy Medium',
              image: '23_Hair_SidePartBangsWavytMed_v03-back.svg',
              icon: 'hair-sidepartswavymed.svg',
              moreObjects: [
                {
                  object: '23_Hair_SidePartBangsWavytMed_v03-front.svg',
                },
              ],
              rules: null,
            },
            {
              name: 'Bangs Curly Medium',
              image: '24_Hair_SidePartBangsCurlyMed_v03-back.svg',
              icon: 'hair-sidepartbangcurlymed.svg',
              moreObjects: [
                {
                  object: '24_Hair_SidePartBangsCurlyMed_v03-front.svg',
                },
              ],
              rules: null,
            },
            {
              name: 'Ponytail Low',
              image: '25_Hair_PonytailLow_v03.svg',
              icon: 'hair-ponytaillow.svg',
              rules: null,
            },
            {
              name: 'Mullet',
              image: '09_Hair_Mullet_v03-back.svg',
              icon: 'hair-mullet.svg',
              moreObjects: [
                {
                  object: '09_Hair_Mullet_v03-front.svg',
                },
              ],
              rules: null,
            },
            {
              name: 'Flattop',
              image: '03_Hair_Flattop_v03.svg',
              icon: 'hair-flattop.svg',
              rules: null,
            },
            {
              name: 'Kraftwerk Slicked',
              image: '27_Hair_KraftwerkSlicked_v1.svg',
              icon: 'hair-KraftwerkSlicked.svg',
            },
            {
              name: 'Short dreadlocks',
              image: '04_Hair_DreadlocksShort_v03.svg',
              icon: 'hair-dreadlocksshort.svg',
              rules: [
                {
                  rule: 'medium-hair',
                },
              ],
            },
            {
              name: 'Medium dreadlocks',
              image: '05_Hair_DreadlocksMedium_v01.svg',
              icon: 'hair-dreadlocksmedium.svg',
              rules: [
                {
                  rule: 'big-hair',
                },
              ],
            },
            {
              name: 'Mohawk',
              image: '01_Hair_Mohawk_v01.svg',
              icon: 'hair-mohawk.svg',
              rules: [
                {
                  rule: 'big-hair',
                },
              ],
            },
            {
              name: 'Afro',
              image: '02_Hair_Afro_v02-back.svg',
              icon: 'hair-afro.svg',
              moreObjects: [
                {
                  object: '02_Hair_Afro_v02-front.svg',
                },
              ],
              rules: [
                {
                  rule: 'big-hair',
                },
              ],
            },
            {
              name: 'Bun',
              image: '07_Hair_Bun_v03.svg',
              icon: 'hair-bun.svg',
              moreObjects: [
                {
                  object: '07_Hair_Bun_v03-front.svg',
                },
              ],
              rules: [
                {
                  rule: 'big-hair',
                },
              ],
            },
            {
              name: 'Ponytail',
              image: '21_Hair_Ponytail_v01-back.svg',
              icon: 'hair-ponytail.svg',
              moreObjects: [
                {
                  object: '21_Hair_Ponytail_v01-front.svg',
                },
              ],
              rules: [
                {
                  rule: 'big-hair',
                },
              ],
            },
            {
              name: 'Afro Tight',
              image: '26_Hair_AfroTight_v1.svg',
              icon: 'Hair_AfroTight.svg',
              rules: [
                {
                  rule: 'big-hair',
                },
              ],
            },
          ],
        },
        hairColors: {
          options: [
            {
              color: '#000000',
            },
            {
              color: '#38405D',
            },
            {
              color: '#543123',
            },
            {
              color: '#724437',
            },
            {
              color: '#854242',
            },
            {
              color: '#976144',
            },
            {
              color: '#9F592A',
            },
            {
              color: '#B66932',
            },
            {
              color: '#C9A467',
            },
            {
              color: '#D2CCBE',
            },
            {
              color: '#B1BDC9',
            },
            {
              color: '#E6F1F2',
            },
            {
              color: '#FFEEDE',
            },
            {
              color: '#B89D7A',
            },
            {
              color: '#E2AB8A',
            },
            {
              color: '#CE8D8D',
            },
            {
              color: '#D7B373',
            },
            {
              color: '#D7D22C',
            },
            {
              color: '#FFB600',
            },
            {
              color: '#D66B1C',
            },
            {
              color: '#D61B3A',
            },
            {
              color: '#E245BF',
            },
            {
              color: '#9E4D9E',
            },
            {
              color: '#4A106B',
            },
            {
              color: '#2C3EC1',
            },
            {
              color: '#27C1AA',
            },
            {
              color: '#8CC3B9',
            },
            {
              color: '#19D51F',
            },
            {
              color: '#87DD1E',
            },
            {
              color: '#83D08C',
            },
            {
              color: '#6F6F6F',
            },
          ],
        },
        headgear: {
          options: [
            {
              name: 'Hockey Helmet',
              new: true,
              image: '40_Headgear_Hockey-back.svg',
              position: 'back',
              icon: '40_Headgear_Hockey.svg',
              moreObjects: [
                {
                  object: '40_Headgear_Hockey-front.svg',
                },
              ],
              rules: [
                {
                  rule: 'no-big-hair',
                },
                {
                  rule: 'hide-whiskers',
                },
              ],
            },
            {
              name: 'Aussie',
              new: true,
              image: '39_Headgear_Aussie_v1-back.svg',
              position: 'back',
              icon: '39_Headgear_Aussie.svg',
              moreObjects: [
                {
                  object: '39_Headgear_Aussie_v1-front.svg',
                },
              ],
              rules: [
                {
                  rule: 'no-big-hair',
                },
              ],
            },
            {
              name: 'Dashiki',
              new: true,
              image: '37_Headgear_Dashiki_v1-back.svg',
              position: 'back',
              icon: '37_Headgear_Dashiki.svg',
              moreObjects: [
                {
                  object: '37_Headgear_Dashiki_v1-front.svg',
                },
              ],
              rules: [
                {
                  rule: 'no-big-hair',
                },
              ],
            },
            {
              name: 'Kimono',
              new: true,
              image: '36_Headgear_Kimono_v1.svg',
              icon: '36_Headgear_kimono.svg',
              position: 'back',
            },
            {
              name: 'French Hat',
              new: true,
              image: '34_Headgear_French_v1.svg',
              icon: '34_Headgear_French.svg',
              rules: [
                {
                  rule: 'no-big-hair',
                },
              ],
            },
            {
              name: 'Panda head',
              new: true,
              image: '35_Headgear_Panda_v1.svg',
              icon: '35_Headgear_Panda.svg',
              moreObjects: [
                {
                  object: '35_Headgear_Panda_v1-back.svg',
                  position: 'back',
                },
              ],
              rules: [
                {
                  rule: 'no-hair',
                },
                {
                  rule: 'hide-ears',
                },
                {
                  rule: 'hide-whiskers',
                },
              ],
            },
            {
              name: 'Lederhosen Hat',
              image: '28_HeadGear_LederhosenHat_v1.svg',
              icon: 'HeadGear_LederhosenHat.svg',
              moreObjects: [
                {
                  object: '28_HeadGear_LederhosenHat_v1-back.svg',
                  position: 'back',
                },
              ],
              rules: [
                {
                  rule: 'no-big-hair',
                },
              ],
            },
            {
              name: 'Dirndl Flower Crown',
              image: '29_HeadGear_DirndlFlowerCrown_v1.svg',
              icon: 'HeadGear_DirndlFlowerCrown.svg',
              rules: null,
            },
            {
              name: 'Bucket Hat',
              image: '30_HeadGear_AdidasTracksuitBuckethat_v1.svg',
              icon: 'HeadGear-AdidasTracksuitBuckethat.svg',
              moreObjects: [
                {
                  object: '30_HeadGear_AdidasTracksuitBuckethat_v1-back.svg',
                  position: 'back',
                },
              ],
              rules: [
                {
                  rule: 'hide-ears',
                },
                {
                  rule: 'no-big-hair',
                },
              ],
            },
            {
              name: 'Astronaut Helmet',
              image: '31_HeadGear_AstronautHelmet_v1.svg',
              icon: 'HeadGear_AstronautHelmet.svg',
              rules: [
                {
                  rule: 'no-hair',
                },
                {
                  rule: 'hide-low-facehair',
                },
              ],
            },
            {
              name: 'Sombrero',
              image: '32_HeadGear_Sombrero_v1.svg',
              icon: 'HeadGear_Sombrero.svg',
              moreObjects: [
                {
                  object: '32_HeadGear_Sombrero_v1-back.svg',
                  position: 'back',
                },
              ],
              rules: [
                {
                  rule: 'no-big-hair',
                },
              ],
            },
            {
              name: 'Chullo',
              image: '33_HeadGear_Chullo_v1.svg',
              icon: 'Headgear_Chullo.svg',
              moreObjects: [
                {
                  object: '33_HeadGear_Chullo_v1-back.svg',
                  position: 'back',
                },
              ],
              rules: [
                {
                  rule: 'hide-ears',
                },
                {
                  rule: 'no-hair',
                },
              ],
            },
            {
              name: 'Headphones',
              image: '16_HeadGear_Headphones_v1.svg',
              icon: 'headgear-headphones.svg',
              moreObjects: [
                {
                  object: '16_HeadGear_Headphones_v1-back.svg',
                  position: 'middle',
                },
              ],
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Bow',
              image: '23_HeadGear_Bow_v1.svg',
              icon: 'headgear-bow.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Bandana',
              image: '15_HeadGear_Bandana_v1.svg',
              icon: 'headgear-bandana.svg',
              position: 'front',
              rules: null,
            },
            {
              name: 'Sweatband',
              image: '19_HeadGear_Sweatband_v1.svg',
              icon: 'headgear-sweatband.svg',
              position: 'front',
              rules: null,
            },
            {
              name: 'Crown',
              image: '24_HeadGear_Crown_v1.svg',
              icon: 'headgear-crown.svg',
              position: 'front',
              rules: null,
            },
            {
              name: 'Superhero Crown',
              image: '26_HeadGear_SuperheroCrown_v1.svg',
              icon: 'headgear-superherocrown.svg',
              position: 'front',
              rules: null,
            },
            {
              name: 'Wizard Hat',
              image: '07_HeadGear_WizardHat_v02.svg',
              icon: 'headgear-wizardhat.svg',
              moreObjects: [
                {
                  object: '07_HeadGear_WizardHat_v02-back.svg',
                  position: 'back',
                },
              ],
              rules: [
                {
                  rule: 'no-big-hair',
                },
              ],
            },
            {
              name: 'Snapback',
              image: '18_HeadGear_Snapback_v1.svg',
              icon: 'headgear-snapback.svg',
              moreObjects: [
                {
                  object: '18_HeadGear_Snapback_v1-back.svg',
                  position: 'back',
                },
              ],
              rules: [
                {
                  rule: 'hide-ears',
                },
                {
                  rule: 'no-big-hair',
                },
              ],
            },
            {
              name: 'Dad Cap',
              image: '17_HeadGear_DadCap_v2.svg',
              icon: 'headgear-dadcap.svg',
              position: 'front',
              moreObjects: [
                {
                  object: '17_HeadGear_DadCap_v2-back.svg',
                  position: 'back',
                },
              ],
              rules: [
                {
                  rule: 'no-big-hair',
                },
              ],
            },
            {
              name: 'Newsie Cap',
              image: '20_HeadGear_NewsieCap_v1.svg',
              icon: 'headgear-newsiecap.svg',
              position: 'front',
              rules: [
                {
                  rule: 'no-big-hair',
                },
              ],
            },
            {
              name: 'Fedora',
              image: '21_HeadGear_Fedora_v1.svg',
              icon: 'headgear-fedora.svg',
              position: 'front',
              rules: [
                {
                  rule: 'hide-ears',
                },
                {
                  rule: 'no-big-hair',
                },
              ],
            },
            {
              name: 'Jester Hat',
              image: '22_HeadGear_JesterHat_v1.svg',
              icon: 'headgear-jesterhat.svg',
              position: 'front',
              rules: [
                {
                  rule: 'hide-ears',
                },
                {
                  rule: 'no-big-hair',
                },
              ],
            },
            {
              name: 'Snowboard Helmet',
              image: '02_HeadGear_SnowboardingHelmet_v01.svg',
              icon: 'headgear-snowbaordinghelmet.svg',
              moreObjects: [
                {
                  object: '02_HeadGear_SnowboardingHelmet_v01-back.svg',
                  position: 'middle',
                },
              ],
              rules: [
                {
                  rule: 'hide-ears',
                },
                {
                  rule: 'no-big-hair',
                },
              ],
            },
            {
              name: 'Cowboy Hat',
              image: '01_HeadGear_CowboyHat_v01.svg',
              icon: 'headgear-cowboyhat.svg',
              position: 'front',
              rules: [
                {
                  rule: 'no-big-hair',
                },
              ],
            },
            {
              name: 'Viking Helmet',
              image: '25_HeadGear_VikingHelmet_v4.svg',
              icon: 'headgear-vikinghelmet.svg',
              position: 'front',
              moreObjects: [
                {
                  object: '25_HeadGear_VikingHelmet_v4-back.svg',
                  position: 'back',
                },
              ],
              rules: [
                {
                  rule: 'no-big-hair',
                },
                {
                  rule: 'no-medium-hair',
                },
                {
                  rule: 'hide-ears',
                },
              ],
            },
            {
              name: 'Cyclist Helmet',
              image: '04_HeadGear_CyclistHelmet_v01.svg',
              icon: 'headgear-cyclisthelmet.svg',
              rules: [
                {
                  rule: 'hide-ears',
                },
                {
                  rule: 'no-big-hair',
                },
                {
                  rule: 'no-medium-hair',
                },
              ],
            },
            {
              name: 'Pajama Cap',
              image: '05_HeadGear_PJSleepingCap_v01.svg',
              icon: 'headgear-pjsleepingcap.svg',
              rules: [
                {
                  rule: 'no-big-hair',
                },
                {
                  rule: 'no-medium-hair',
                },
              ],
            },
            {
              name: 'Firefighter Hard Hat',
              image: '06_HeadGear_FirefighterHardHat_v01.svg',
              icon: 'headgear-firefighterhardhat.svg',
              moreObjects: [
                {
                  object: '06_HeadGear_FirefighterHardHat_v01-back.svg',
                  position: 'back',
                },
              ],
              rules: [
                {
                  rule: 'no-hair',
                },
              ],
            },
            {
              name: 'Bunny Suit',
              image: '09_HeadGear_BunnySuit_v01.svg',
              icon: 'headgear-bunnysuit.svg',
              moreObjects: [
                {
                  object: '09_HeadGear_BunnySuit_v01-back.svg',
                  position: 'back',
                },
              ],
              rules: [
                {
                  rule: 'hide-ears',
                },
                {
                  rule: 'no-hair',
                },
                {
                  rule: 'hide-whiskers',
                },
                {
                  rule: 'hide-low-facehair',
                },
              ],
            },
            {
              name: 'Armor Helmet',
              image: '11_HeadGear_ArmorHelmet_v02.svg',
              icon: 'headgear-armorhelmet.svg',
              moreObjects: [
                {
                  object: '11_HeadGear_ArmorHelmet_v02-back.svg',
                  position: 'back',
                },
              ],
              rules: [
                {
                  rule: 'no-hair',
                },
              ],
            },
            {
              name: 'Hijab',
              image: '10_HeadGear_Hijab_v01.svg',
              icon: 'headgear-hijab.svg',
              moreObjects: [
                {
                  object: '10_HeadGear_Hijab_v01-back.svg',
                  position: 'back',
                },
              ],
              rules: [
                {
                  rule: 'hide-ears',
                },
                {
                  rule: 'no-hair',
                },
                {
                  rule: 'hide-whiskers',
                },
                {
                  rule: 'no-big-collars',
                },
                {
                  rule: 'hide-low-facehair',
                },
              ],
            },
            {
              name: 'Turban',
              image: '12_HeadGear_Turban_v1.svg',
              icon: 'headgear-turban.svg',
              rules: [
                {
                  rule: 'no-hair',
                },
              ],
            },
            {
              name: 'Head Wrap',
              image: '14_HeadGear_HeadWrap_v1.svg',
              icon: 'headgear-headwrap.svg',
              rules: [
                {
                  rule: 'no-hair',
                },
                {
                  rule: 'hide-ears',
                },
              ],
            },
            {
              name: 'Scubahead',
              image: '27_HeadGear_ScubaHead_v01.svg',
              icon: 'headgear-scubahead.svg',
              rules: [
                {
                  rule: 'no-hair',
                },
                {
                  rule: 'hide-ears',
                },
                {
                  rule: 'hide-whiskers',
                },
                {
                  rule: 'hide-low-facehair',
                },
              ],
            },
          ],
        },
        accessories: {
          options: [
            {
              name: 'Freckles',
              new: true,
              image: '19_Misc_Freckles.svg',
              icon: '19_Misc_Freckles.svg',
              position: 'middle',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Scarf',
              new: true,
              image: '18_Misc_Scarf_v1.svg',
              icon: '18_Misc_Scarf.svg',
              position: 'middle',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Cowboy Buckle Belt',
              image: '01_Misc_CowboyBuckleBelt._v01.svg',
              icon: 'misc-cowboybuckle.svg',
              position: 'middle',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Dress Buckle Belt',
              image: '02_Misc_DressBuckleBelt_v01.svg',
              icon: 'misc-dressbucklebelt.svg',
              position: 'middle',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Bow Tie',
              image: '03_Misc_TiesBow_v01.svg',
              icon: 'misc-tiesbow.svg',
              position: 'front',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Bolo Tie',
              image: '04_Misc_TiesBolo_v01.svg',
              icon: 'misc-tiesbolo.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Ties Oxford',
              image: '05_Misc_TiesOxford_v01.svg',
              icon: 'misc-tiesoxford.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Messenger Bag',
              image: '06_Misc_MessengerBag_Misc_v01.svg',
              icon: 'misc-messengerbag.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Cape',
              image: '07_Misc_Cape_Misc._v01.svg',
              icon: 'misc-cape.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Camera',
              image: '09_Misc_Camera_v01.svg',
              icon: 'misc-camera.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Jewlery Gold Chain',
              image: '10_Misc_JewelryGoldChain_01.svg',
              icon: 'misc-jewelrygoldchain.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Pearls',
              image: '11_Misc_JewelryPearls_v01.svg',
              icon: 'misc-jewelrypearls.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Watch',
              image: '12_Misc_JewelryWatch_v01.svg',
              icon: 'misc-jewelrywatch.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Bracelet',
              image: '13_Misc_JewelryBracelet_v01.svg',
              icon: 'misc-jewelrybracelet.svg',
              position: 'middle',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Earrings',
              image: '14_Misc_PiercingsEarrings_v01.svg',
              icon: 'misc-piercingearrings.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Nose Ring',
              image: '15_Misc_PiercingsNoseRings_v01.svg',
              icon: 'misc-piercingnoserings.svg',
              position: 'front',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Eyebrow Ring',
              image: '16_Misc_PiercingsEyebrowRings_v01.svg',
              icon: 'misc-piercingeyebrowrings.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Tattoo',
              image: '17_Misc_Tattoo_v01.svg',
              icon: 'misc-tattoo.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
          ],
        },
        mouths: {
          options: [
            {
              name: 'Neutral',
              image: '07_MouthExpress_Neutral.svg',
              icon: '07_MouthExpress_Neutral.svg',
              isActive: true,
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Canines',
              new: true,
              image: '16_MouthExpress_Canines.svg',
              icon: '16_mouthexpression-Canines.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Underbite',
              new: true,
              image: '17_MouthExpress_Underbite.svg',
              icon: '17_mouthexpression-Underbite.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Lipstick Smile',
              new: true,
              image: '18_MouthExpress_LipstickSmile.svg',
              icon: '18_mouthexpression-LipstickSmile.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Goofy',
              new: true,
              image: '19_MouthExpress_Goofy.svg',
              icon: '19_mouthexpression-Goofy.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Happy Closed',
              image: '01_MouthExpress_HappyClosed.svg',
              icon: '01_MouthExpress_HappyClosed.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Happy Open',
              image: '02_MouthExpress_HappyOpen.svg',
              icon: '02_MouthExpress_HappyOpen.svg',
              rules: [
                {
                  rule: 'no-back-facialhair',
                },
              ],
            },
            {
              name: 'Sad',
              image: '03_MouthExpress_Sad.svg',
              icon: '03_MouthExpress_Sad.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Confused',
              image: '04_MouthExpress_Confused.svg',
              icon: '04_MouthExpress_Confused.svg',
              rules: [
                {
                  rule: 'no-back-facialhair',
                },
              ],
            },
            {
              name: 'Excited Open',
              image: '05_MouthExpress_ExcitedOpen.svg',
              icon: '05_MouthExpress_ExcitedOpen.svg',
              rules: null,
            },
            {
              name: 'Excited Closed',
              image: '06_MouthExpress_ExcitedClosed.svg',
              icon: '06_MouthExpress_ExcitedClosed.svg',
              position: 'back',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Express',
              image: '08_MouthExpress_Tired.svg',
              icon: '08_MouthExpress_Tired.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Chillin',
              image: '09_MouthExpress_Chillin.svg',
              icon: '09_MouthExpress_Chillin.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Angry',
              image: '10_MouthExpress_Angry.svg',
              icon: '10_MouthExpress_Angry.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Heart Eyes',
              image: '11_MouthExpress_HeartEyes.svg',
              icon: '11_MouthExpress_HeartEyes.svg',
              rules: [
                {
                  rule: 'no-back-facialhair',
                },
              ],
            },
            {
              name: 'Starstruck',
              image: '12_MouthExpress_Starstruck.svg',
              icon: '12_MouthExpress_Starstruck.svg',
              rules: [
                {
                  rule: 'no-back-facialhair',
                },
              ],
            },
            {
              name: 'Zany',
              image: '13_MouthExpress_Zany.svg',
              icon: '13_MouthExpress_Zany.svg',
              rules: [
                {
                  rule: 'no-back-facialhair',
                },
              ],
            },
            {
              name: 'Winking',
              image: '15_MouthExpress_Winking.svg',
              icon: '15_MouthExpressions_Winking.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
          ],
        },
        props: {
          options: [
            {
              name: 'Baguette',
              new: true,
              image: '36_Props_Baguette_v1.svg',
              icon: '36_Props_Baguette.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Panda',
              new: true,
              image: '37_Props_PullPanda_v1.svg',
              icon: '37_Props_PullPanda.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Hockey Stick',
              new: true,
              image: '38_Props_hockeystick_v1.svg',
              icon: '38_Props_hockeystick.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Football',
              new: true,
              image: '39_Props_football_v1.svg',
              icon: '39_Props_football.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Githawk',
              new: true,
              image: '40_Props_Githawk_v1.svg',
              icon: '40_Props_Githawk.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Semmle',
              new: true,
              image: '41_Props_Semmle_v1.svg',
              icon: '41_Props_Semmle.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Kimono',
              new: true,
              image: '42_Props_Kimono_v1.svg',
              icon: '42_Props_Kimono.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Aussie',
              new: true,
              image: '43_Props_Aussie_v1.svg',
              icon: '43_Props_Aussie.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Club Mate Bottle',
              image: '31_Props_ClubMateBottle_v1.svg',
              icon: 'props-ClubMateBottle.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Currywurst',
              image: '32_Props_Currywurst_v1.svg',
              icon: 'props-Currywurst.svg',
            },
            {
              name: 'Doner Kebap',
              image: '33_Props_DonerKebap_v1.svg',
              icon: 'Props_DonerKebap.svg',
            },
            {
              name: 'Sponsor Heart',
              image: '34_Props_SponsorHeart_v01.svg',
              icon: 'props-SponsorHeart.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Black Hole',
              image: '35_Props_M87Blackhole-V01.svg',
              icon: 'Props_Blackhole.svg',
            },
            {
              name: 'Lasso',
              image: '01_Props_Lasso_v01.svg',
              icon: 'props-lasso.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Laptop',
              image: '02_Props_Laptop_v01.svg',
              icon: 'props-laptop.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Tea Cup Mug',
              image: '03_Props_TeaCupMug_v03.svg',
              icon: 'props-teacupmug.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Smartphone',
              image: '04_Props_Smartphone_v01.svg',
              icon: 'props-smartphones.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Snowboard',
              image: '05_Props_Snowboard_v01.svg',
              icon: 'props-snowboard.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Newspaper',
              image: '06_Props_Newspaper_v01.svg',
              icon: 'props-newspaper.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Kryptonite',
              image: '07_Props_Kryptonite_v01.svg',
              icon: 'props-kryptonite.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Wizard Wand',
              image: '10_Props_WizardWand_v01.svg',
              icon: 'props-wizardwand.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Treasure',
              image: '13_Props_Treasure_v01.svg',
              icon: 'props-treasure.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Sword',
              image: '14_Props_Sword_v01.svg',
              icon: 'props-sword.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Ruby Gem',
              image: '16_Props_RubyGem_v01.svg',
              icon: 'props-rubygem.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Microphone',
              image: '17_Props_Microphone_v01.svg',
              icon: 'props-microphone.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Paintbrush',
              image: '18_Props_Paintbrush_v01.svg',
              icon: 'props-paintbrush.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Fishing Rod',
              image: '19_Props_FishingRod_v01.svg',
              icon: 'props-fishingrod.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Game Controller',
              image: '20_Props_GameController_v01.svg',
              icon: 'props-gamecontroller.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Prosthetic Hand',
              image: '21_Props_ProstheticHand_v01.svg',
              icon: 'props-prosthetichand.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Books',
              image: '22_Props_Books_v01.svg',
              icon: 'props-books.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Skateboard',
              image: '23_Props_Skateboard_v01.svg',
              icon: 'props-skateboard.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Soccer Ball',
              image: '24_Props_SoccerBall_v01.svg',
              icon: 'props-soccerball.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Magnifying Glass',
              image: '25_Props_MagnifyingGlass_v01.svg',
              icon: 'props-magnifyinglass.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Beachball',
              image: '26_Props_Beachball_v01.svg',
              icon: 'props-beachball.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Ship-It Squirrel',
              image: '27_Props_ShipItSquirrel_v01.svg',
              icon: 'props-shipitsquirrel.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Guitar',
              image: '29_Props_Guitar_v01.svg',
              icon: 'props-guitar.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
            {
              name: 'Boba Cup',
              image: '30_Props_BobaCup_v01.svg',
              icon: 'props-bobacup.svg',
              rules: [
                {
                  rule: 'hide-hand',
                },
              ],
            },
          ],
        },
        tops: {
          options: [
            {
              name: 'French Top',
              new: true,
              image: '43_Top_French_v1.svg',
              icon: '43_Top_French.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Panda Suit',
              new: true,
              image: '44_Top_Panda_v1.svg',
              icon: '44_Top_Panda.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Sari',
              new: true,
              image: '45_Top_Sari.svg',
              icon: '45_Top_Sari.svg',
              rules: [
                {
                  rule: 'no-pants',
                },
              ],
            },
            {
              name: 'Kimono',
              new: true,
              image: '46_Top_Kimono_v1.svg',
              icon: '46_Top_Kimono.svg',
              rules: [
                {
                  rule: 'no-pants',
                },
              ],
            },
            {
              name: 'Dashiki',
              new: true,
              image: '47_TopDashiki_v1.svg',
              icon: '47_Top_Dashiki.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Aussie',
              new: true,
              image: '48_Top_Aussie_v1.svg',
              icon: '48_Top_Aussie.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Chinese Dress',
              new: true,
              image: '49_Top_ChineseDress_v1.svg',
              icon: '49_Top_ChineseDress.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Hockey Jersey',
              new: true,
              image: '50_Top_HockeyJersey.svg',
              icon: '50_Top_HockeyJersey.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Lederhosen',
              image: '32_Top_Lederhosen_v1.svg',
              icon: 'Top_Lederhosen.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Dirndl',
              image: '33_Top_Dirndl_v1.svg',
              icon: 'Top_Dirndl.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Football Jersey',
              image: '34_Top_GermanFootballJersey_v1.svg',
              icon: 'Top_GermanFootballJersey.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Kraftwerk Shirt',
              image: '35_Top_KraftwerkShirt_v1.svg',
              icon: 'tops-kraftwerkShirt.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Tracksuit',
              image: '36_Top_AdidasTracksuit_v1.svg',
              icon: 'tops-adiddastracksuit.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Astronaut',
              image: '37_Top_Astronaut_v1.svg',
              icon: 'Top_Astronaut.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'T-shirt',
              image: '38_Top_NewTshirt_v1.svg',
              icon: 'Top_NewTshirt.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Button Up',
              image: '39_Top_NewButtonUp_v1.svg',
              icon: 'tops-NewButtonUP.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Dress',
              image: '40_Top_NewDress_v1.svg',
              icon: 'Top_NewDress.svg',
              rules: [
                {
                  rule: 'no-pants',
                },
              ],
            },
            {
              name: 'Poncho',
              image: '41_Top_Poncho_v1.svg',
              icon: 'Top_Pancho.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Retro Dress',
              image: '42_Top_NewRetroDress_v1.svg',
              icon: 'Top_NewRetroDress.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Cowboy Vest',
              image: '01_Top_Cowboy_Vest_Shirt_v01.svg',
              icon: 'tops-cowboyvest.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Hippie Shirt',
              image: '02_Tops_Hippie_Shirt.svg',
              icon: 'tops-hippieshirt.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Business Suit',
              image: '03_Top_BiznessSuit_JacketShirtTie.svg',
              icon: 'tops-businesssuit.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Ski Jacket',
              image: '04_Top_Ski_Jacket_v01.svg',
              icon: 'tops-ski-jacket.svg',
              rules: [
                {
                  rule: 'big-collar',
                },
              ],
            },
            {
              name: 'Cyclist Shirt',
              image: '05_Top_Cyclist_Shirt_v01.svg',
              icon: 'tops-cyclistshirt.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Pajama Shirt',
              image: '06_Top_PJs_Shirt_v01.svg',
              icon: 'tops-pjs-shirt.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Superhero Tights',
              image: '07_Top_SuperHero_Tights.svg',
              icon: 'tops-Superherotights.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Firefighter Jacket',
              image: '08_Top_Firefighter_Jacket_v01.svg',
              icon: 'tops-firefighter-jacket.svg',
              rules: [
                {
                  rule: 'big-collar',
                },
              ],
            },
            {
              name: 'Wizard Robe',
              image: '09_Top_Wizard_Robe_v01.svg',
              icon: 'tops-wizard-robe.svg',
              rules: [
                {
                  rule: 'no-pants',
                },
              ],
            },
            {
              name: 'Scuba Wetsuit',
              image: '11_Top_Scuba_Wetsuit_v01.svg',
              icon: 'tops-scuba-wetsuit.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Dancer Tights',
              image: '12_Top_Dancer_Tights.svg',
              icon: 'tops-dancertights.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Bunny Suit',
              image: '13_Top_BunnySuit_v01.svg',
              icon: 'tops-bunny-suit.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Armor Suit',
              image: '14_Top_ArmorSuit_v01.svg',
              icon: 'tops-armorsuit.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Tunic',
              image: '15_Top_Tunic.svg',
              icon: 'tops-tunic.svg',
              rules: [
                {
                  rule: 'no-xxl-pants',
                },
              ],
            },
            {
              name: 'Zip-up Hoodie',
              image: '16_Top_ZipUp_Hoodie.svg',
              icon: 'tops-zipuphoodie.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Long Sleeve Button Down',
              image: '17_Top_ButtonDownLong_Shirt.svg',
              icon: 'tops-buttondownlongshirt.svg',
              rules: [
                {
                  rule: 'no-xxl-pants',
                },
              ],
            },
            {
              name: 'Button Down Shirt',
              image: '18_Top_ButtonDownShort_Shirt.svg',
              icon: 'tops-buttondownshortshirt.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Sports Jersey',
              image: '19_Top_SportsJersey.svg',
              icon: 'tops-sportsjersey.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'GitHub Pride Shirt',
              image: '20_Top_GitHubPride_Shirts_v01.svg',
              icon: 'tops-githubpride-shirts.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Tank-top',
              image: '21_Top_TankTop_Shirt.svg',
              icon: 'tops-tanktop.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Lab Coat',
              image: '22_Top_Lab_Coat.svg',
              icon: 'tops-labcoat.svg',
              rules: [
                {
                  rule: 'no-xl-pants',
                },
                {
                  rule: 'no-shorts',
                },
              ],
            },
            {
              name: 'Leather Jacket',
              image: '23_Top_Leather_Jacket.svg',
              icon: 'tops-leatherjacket.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Flannel Shirt',
              image: '24_Top_Flannel_Shirt.svg',
              icon: 'tops-flannelshirt.svg',
              rules: [
                {
                  rule: 'no-xxl-pants',
                },
              ],
            },
            {
              name: 'Mini Dress',
              image: '25_Top_Mini_Dress.svg',
              icon: 'tops-minidress.svg',
              rules: [
                {
                  rule: 'no-xxl-pants',
                },
              ],
            },
            {
              name: 'Midi Dress',
              image: '26_Top_Midi_Dress.svg',
              icon: 'tops-mididress.svg',
              rules: [
                {
                  rule: 'no-pants',
                },
              ],
            },
            {
              name: 'Maxi Dress',
              image: '27_Top_Maxi_Dress.svg',
              icon: 'tops-maxidress.svg',
              rules: [
                {
                  rule: 'no-pants',
                },
              ],
            },
            {
              name: 'Hawaiian Shirt',
              image: '28_Top_Hawaiian_Shirt.svg',
              icon: 'tops-hawaiianshirt.svg',
              rules: [
                {
                  rule: 'no-xxl-pants',
                },
              ],
            },
            {
              name: 'Crop Top Blouse',
              image: '29_Top_CropTop_Blouse.svg',
              icon: 'tops-croptopblouse.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Barbarian Fur Vest',
              image: '30_Top_Barbarian_FurVest.svg',
              icon: 'tops-barbarianvest.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
            {
              name: 'Overalls',
              image: '31_Top_Overalls_v01.svg',
              icon: 'tops-overalls.svg',
              rules: [
                {
                  rule: null,
                },
              ],
            },
          ],
        },
      }

      _export('OctocatOptions', OctocatOptions)

      class Octocat {
        constructor() {
          this.base = null
          this.options = {
            bodyColor: null,
            bottom: null,
            eyeColor: null,
            eyes: 'Neutral',
            eyewear: null,
            faceColor: null,
            facialHair: null,
            facialHairColor: null,
            footwear: null,
            hair: null,
            hairColor: null,
            headgear: null,
            accessory: null,
            mouth: 'Neutral',
            prop: null,
            top: null,
            puddleColor: '#5CDFF2',
            stroke: null,
            strokeWidth: null,
            strokeOpacity: 1,
            fill: null,
          }
          this.cache = {}
          this.images = {}
          this.image = null
          this.ready = false
          this.rules = true
          this.drawing = false
          this.needsRedraw = false
          this.redraw()
        }

        setBodyColor(colors) {
          this.options.bodyColor = colors
          this.redraw()
        }

        setBottom(bottom) {
          this.options.bottom = bottom
          this.redraw()
        }

        setEyeColor(color) {
          this.options.eyeColor = color
          this.redraw()
        }

        setEyes(eyes) {
          this.options.eyes = eyes
          this.redraw()
        }

        setEyewear(eyewear) {
          this.options.eyewear = eyewear
          this.redraw()
        }

        setFaceColor(colors) {
          this.options.faceColor = colors
          this.redraw()
        }

        setFacialHair(facialHair) {
          this.options.facialHair = facialHair
          this.redraw()
        }

        setFacialHairColor(facialHairColor) {
          this.options.facialHairColor = facialHairColor
          this.redraw()
        }

        setFootwear(footwear) {
          this.options.footwear = footwear
          this.redraw()
        }

        setHair(hair) {
          this.options.hair = hair
          this.redraw()
        }

        setHairColor(hairColor) {
          this.options.hairColor = hairColor
          this.redraw()
        }

        setHeadgear(headgear) {
          this.options.headgear = headgear
          this.redraw()
        }

        setAccessory(accessory) {
          this.options.accessory = accessory
          this.redraw()
        }

        setMouth(mouth) {
          this.options.mouth = mouth
          this.redraw()
        }

        setProp(prop) {
          this.options.prop = prop
          this.redraw()
        }

        setTop(top) {
          this.options.top = top
          this.redraw()
        }

        setPuddleColor(puddleColor) {
          this.options.puddleColor = puddleColor
          this.redraw()
        }

        noPuddle() {
          this.options.puddleColor = null
          this.redraw()
        }

        setStroke(color, width, opacity) {
          this.options.stroke = color
          this.options.strokeWidth = width
          this.options.strokeOpacity = opacity === 0 ? 0 : opacity || 1
          this.redraw()
        }

        noStroke() {
          this.options.stroke = null
          this.options.strokeWidth = null
          this.options.strokeOpacity = null
          this.redraw()
        }

        setFill(color) {
          this.options.fill = color
          this.redraw()
        }

        noFill() {
          this.options.fill = null
          this.redraw()
        }

        fetchBase() {
          var _this = this

          return _asyncToGenerator(function*() {
            if (_this.base) return
            const baseResponse = yield fetch(
              'https://files.myoctocat.dev/objects/body/BaseOctocat_v1.svg?1',
            )
            _this.base = yield baseResponse.text()
          })()
        }

        fetchPart(path) {
          var _this2 = this

          return _asyncToGenerator(function*() {
            if (_this2.cache[path]) return
            const url = `https://files.myoctocat.dev/objects/${path}`
            const response = yield fetch(url)
            const text = yield response.text()
            let svg = new window.DOMParser().parseFromString(text, 'text/xml')
            svg = window.document.importNode(svg.documentElement, true)
            let g = svg.querySelectorAll('svg > g')
            const part = g[0].outerHTML
            _this2.cache[path] = part
          })()
        }

        findOption(category, key, value) {
          for (let i = 0; i < OctocatOptions[category].options.length; i++) {
            let option = OctocatOptions[category].options[i]
            if (option[key] === value) {
              return option
            }
          }
        }

        drawPart(path, position, classes, filter) {
          var _this3 = this

          return _asyncToGenerator(function*() {
            yield _this3.fetchPart(path)
            if (filter && filter !== position) return ''
            if (!filter && position !== '') return ''
            return `<g class='${classes} ${position}'>${_this3.cache[path]}</g>`
          })()
        }

        drawParts(setting, category, folder, key, filter) {
          var _this4 = this

          return _asyncToGenerator(function*() {
            if (!_this4.options[setting]) return ''
            let value = _this4.options[setting]
            let option = _this4.findOption(category, key, value)
            if (option) {
              let path = `${folder}/${option.image}`
              const rules = (option.rules || []).map(function(rule) {
                return rule.rule
              })
              const classes = `${category} ${rules.join(' ')}`
              const position = option.position || ''
              let content = ''
              content += yield _this4.drawPart(path, position, classes, filter)

              option.moreObjects = option.moreObjects || []
              for (var i = 0; i < option.moreObjects.length; i++) {
                let more = option.moreObjects[i]
                let morePath = `${folder}/${more.object}`
                content += yield _this4.drawPart(morePath, more.position || '', classes, filter)
              }
              return content
            }
          })()
        }

        remove(svg, selector) {
          const objects = svg.querySelectorAll(selector)
          for (var i = 0; i < objects.length; i++) {
            objects[i].remove()
          }
        }

        applyRules(svg) {
          if (!this.rules) return

          let noBigHair = svg.querySelectorAll('.no-big-hair')
          if (noBigHair.length) this.remove(svg, '.big-hair')

          let hideWhiskers = svg.querySelectorAll('.hide-whiskers')
          if (hideWhiskers.length) this.remove(svg, '#whiskers')

          let noHair = svg.querySelectorAll('.no-hair')
          if (noHair.length) this.remove(svg, '.hair')

          let hideEars = svg.querySelectorAll('.hide-ears')
          if (hideEars.length) this.remove(svg, '#ears')

          let noBigCollars = svg.querySelectorAll('.no-big-collars')
          if (noBigCollars.length) this.remove(svg, '.big-collar')

          let noMediumHair = svg.querySelectorAll('.no-medium-hair')
          if (noMediumHair.length) this.remove(svg, '.medium-hair')

          let hideLowFaceHair = svg.querySelectorAll('.hide-low-facehair')
          if (hideLowFaceHair.length) this.remove(svg, '.facialHair.low')

          let noPants = svg.querySelectorAll('.no-pants')
          if (noPants.length) this.remove(svg, '.bottoms')

          let noXlPants = svg.querySelectorAll('.no-xl-pants')
          if (noXlPants.length) this.remove(svg, '.xl-pants')

          let noXXlPants = svg.querySelectorAll('.no-xxl-pants')
          if (noXXlPants.length) this.remove(svg, '.xxl-pants')

          let noShorts = svg.querySelectorAll('.no-shorts')
          if (noShorts.length) this.remove(svg, '.shorts')

          let noBackFacialHair = svg.querySelectorAll('.no-back-facialhair')
          if (noBackFacialHair.length) this.remove(svg, '.facialHair.back')

          let hideHand = svg.querySelectorAll('.hide-hand')
          if (hideHand.length) this.remove(svg, '#hand')
        }

        noRules() {
          this.rules = false
        }

        colorCheck(svg) {
          if (this.options.bodyColor) {
            var bc = svg.querySelectorAll('.main-body-fill')
            for (var ai = 0; ai < bc.length; ai++) {
              bc[ai].setAttribute('fill', this.options.bodyColor.primary)
            }

            var sbc = svg.querySelectorAll('.secondary-body-fill')
            for (var ai = 0; ai < sbc.length; ai++) {
              sbc[ai].setAttribute('fill', this.options.bodyColor.underside)
            }

            // "teriary" sic
            var tbc = svg.querySelectorAll('.teriary-body-fill')
            for (var ai = 0; ai < tbc.length; ai++) {
              tbc[ai].setAttribute('fill', this.options.bodyColor.suctions)
            }
          }

          if (this.options.faceColor) {
            var fc = svg.querySelectorAll('.face-fill-color')
            for (var ai = 0; ai < fc.length; ai++) {
              fc[ai].setAttribute('fill', this.options.faceColor.face)
            }

            var fac = svg.querySelectorAll('.face-accent-fill-color')
            for (var aj = 0; aj < fac.length; aj++) {
              fac[aj].setAttribute('fill', this.options.faceColor.nose)
            }

            var eyeAccentObjects = svg.querySelectorAll(
              '.eyes [fill="#8D5548"], .eyes [fill="#8d5548"]',
            )
            for (var i = 0; i < eyeAccentObjects.length; i++) {
              eyeAccentObjects[i].setAttribute('fill', this.options.faceColor.nose)
            }
          }

          if (this.options.eyeColor) {
            var cec = svg.querySelectorAll('.eye-fill-color')
            for (var k = 0; k < cec.length; k++) {
              cec[k].setAttribute('fill', this.options.eyeColor)
            }
          }

          if (this.options.hairColor) {
            var hcc = svg.querySelectorAll('.hair [fill="#9F592A"]')
            for (var ai = 0; ai < hcc.length; ai++) {
              hcc[ai].setAttribute('fill', this.options.hairColor)
            }
          }

          if (this.options.facialHairColor) {
            var hcc = svg.querySelectorAll('.facialHair [fill="#9F592A"]')
            for (var ai = 0; ai < hcc.length; ai++) {
              hcc[ai].setAttribute('fill', this.options.facialHairColor)
            }
          }

          if (this.options.prop && this.options.bodyColor) {
            // Fix any body colors embedded in the prop visual
            var bc = svg.querySelectorAll('.props [fill="#282828"]')
            for (var bi = 0; bi < bc.length; bi++) {
              bc[bi].setAttribute('fill', this.options.bodyColor.primary)
            }

            var sc = svg.querySelectorAll('.props [fill="#494949"]')
            for (var si = 0; si < sc.length; si++) {
              sc[si].setAttribute('fill', this.options.bodyColor.underside)
            }

            var tc = svg.querySelectorAll('.props [fill="#99C7C9"]')
            for (var ti = 0; ti < tc.length; ti++) {
              tc[ti].setAttribute('fill', this.options.bodyColor.suctions)
            }
          }

          var pc = svg.querySelectorAll('#puddle ellipse')
          if (pc && pc.length === 1) {
            pc[0].setAttribute('fill', this.options.puddleColor ? this.options.puddleColor : 'none')
          }
        }

        // Placeholder for overriding
        customize(svg) {}

        redraw() {
          // Treat all of the options (as JSON) as the key
          const key = JSON.stringify(this.options)

          // Try to use the SVG image cache
          if (this.images[key]) {
            this.image = this.images[key]
            return
          }

          // Try to prevent simultaneous redraws, buffer all redraw calls until the next opportunity
          if (this.drawing) {
            this.needsRedraw = true
            return
          }
          this.drawing = true
          this.needsRedraw = false

          var _this5 = this

          return _asyncToGenerator(function*() {
            _this5.ready = false

            yield _this5.fetchBase()

            let hideEars = 0
            let hideHeadgear = 0
            let hideHand = 0

            let body = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0" y="0" width="2000px" height="2000px" viewBox="0 0 2000 2000" enable-background="new 0 0 2000 2000" xml:space="preserve">`
            body += ``
            if (_this5.options.fill) {
              body += `<style>\n`
              body += `* { fill: ${_this5.options.fill} }\n`
              body += `.face-accent-fill-color { stroke: none; }\n`
              body += `</style>`
            }
            body += `<defs><g id='octocat'>`
            body += yield _this5.drawParts('headgear', 'headgear', 'headgear', 'name', 'back')
            body += yield _this5.drawParts('hair', 'hair', 'hair', 'name', 'back')
            body += _this5.base
            body += yield _this5.drawParts('mouth', 'mouths', 'mouths', 'name', 'back')
            body += yield _this5.drawParts('facialHair', 'facialHair', 'faceHair', 'name', 'back')
            body += yield _this5.drawParts('eyes', 'eyes', 'eyes', 'name')
            body += yield _this5.drawParts('mouth', 'mouths', 'mouths', 'name')
            body += yield _this5.drawParts('footwear', 'footwear', 'footwear', 'name', 'back')
            body += yield _this5.drawParts('bottom', 'bottoms', 'bottoms', 'name')
            body += yield _this5.drawParts('footwear', 'footwear', 'footwear', 'name')
            body += yield _this5.drawParts('bottom', 'bottoms', 'bottoms', 'name', 'front')
            body += yield _this5.drawParts('footwear', 'footwear', 'footwear', 'front')
            body += yield _this5.drawParts('hair', 'hair', 'hair', 'name')
            body += yield _this5.drawParts('eyewear', 'eyewear', 'eyewear', 'name', 'back')
            body += yield _this5.drawParts('headgear', 'headgear', 'headgear', 'name', 'middle')
            body += yield _this5.drawParts('eyewear', 'eyewear', 'eyewear', 'name', 'middle')
            body += yield _this5.drawParts('accessory', 'accessories', 'misc', 'name', 'back')
            body += yield _this5.drawParts('top', 'tops', 'tops', 'name')
            body += yield _this5.drawParts('accessory', 'accessories', 'misc', 'name', 'middle')
            body += yield _this5.drawParts('accessory', 'accessories', 'misc', 'name')
            body += yield _this5.drawParts('facialHair', 'facialHair', 'faceHair', 'name')
            body += yield _this5.drawParts('facialHair', 'facialHair', 'faceHair', 'name', 'low')
            body += yield _this5.drawParts('hair', 'hair', 'hair', 'name', 'front')
            body += yield _this5.drawParts('headgear', 'headgear', 'headgear', 'name')
            body += yield _this5.drawParts('accessory', 'accessories', 'misc', 'name', 'front')
            body += yield _this5.drawParts('eyewear', 'eyewear', 'eyewear', 'name')
            body += yield _this5.drawParts('headgear', 'headgear', 'headgear', 'name', 'front')
            body += yield _this5.drawParts('facialHair', 'facialHair', 'faceHair', 'name', 'front')
            body += yield _this5.drawParts('prop', 'props', 'props', 'name')
            body += `</g></defs>`

            if (_this5.options.stroke) {
              body += `<use xlink:href='#octocat' stroke='${_this5.options.stroke}' stroke-width='${_this5.options.strokeWidth}' stroke-opacity='${_this5.options.strokeOpacity}' stroke-linejoin='round'/>`
            }

            body += `<use xlink:href='#octocat' /></svg>`

            // Adjust the colors
            let svg = new window.DOMParser().parseFromString(body, 'text/xml')
            svg = window.document.importNode(svg.documentElement, true)
            _this5.applyRules(svg)
            _this5.colorCheck(svg)
            _this5.customize(svg)
            body = svg.outerHTML

            const blob = new Blob([body], {type: 'image/svg+xml'})
            const url = URL.createObjectURL(blob)

            const image = document.createElement('img')
            image.onload = function() {
              URL.revokeObjectURL(url), {once: true}
              _this5.ready = true
              _this5.images[key] = image
              _this5.image = image
              _this5.drawing = false
              if (_this5.needsRedraw) {
                setTimeout(function() {
                  _this5.redraw()
                }, 1)
              }
            }
            image.src = url
          })()
        }

        blink(open, closed) {
          this.options.blinking = open || this.options.eyes || 'Neutral'
          this.options.closed = closed || 'Happy Closed'
          this.blinked()
        }

        noBlink() {
          this.optons.blinking = null
          this.options.closed = null
        }

        blinked() {
          if (!this.options.blinking) return
          let octocat = this
          setTimeout(() => {
            octocat.setEyes(octocat.options.closed)
            setTimeout(() => {
              octocat.setEyes(octocat.options.blinking)
              octocat.blinked()
            }, 250)
          }, 1500)
        }

        getRandomFeature(category) {
          let options = OctocatOptions[category].options
          let index = Math.floor(Math.random() * options.length)
          let option = options[index]
          return option
        }

        randomize(feature) {
          if (!feature || feature === 'bodyColor')
            this.options.bodyColor = this.getRandomFeature('bodyColors')
          if (!feature || feature === 'bottom')
            this.options.bottom = this.getRandomFeature('bottoms').name
          if (!feature || feature === 'eyeColor')
            this.options.eyeColor = this.getRandomFeature('eyeColors').color
          if (!feature || feature === 'eyes') this.options.eyes = this.getRandomFeature('eyes').name
          if (!feature || feature === 'eyewear')
            this.options.eyewear = this.getRandomFeature('eyewear').name
          if (!feature || feature === 'faceColor')
            this.options.faceColor = this.getRandomFeature('faceColors')
          if (!feature || feature === 'facialHair')
            this.options.facialHair = this.getRandomFeature('facialHair').name
          if (!feature || feature === 'facialHairColor')
            this.options.facialHairColor = this.getRandomFeature('hairColors').color
          if (!feature || feature === 'footwear')
            this.options.footwear = this.getRandomFeature('footwear').name
          if (!feature || feature === 'hair') this.options.hair = this.getRandomFeature('hair').name
          if (!feature || feature === 'hairColor')
            this.options.hairColor = this.getRandomFeature('hairColors').color
          if (!feature || feature === 'headgear')
            this.options.headgear = this.getRandomFeature('headgear').name
          if (!feature || feature === 'accessory')
            this.options.accessory = this.getRandomFeature('accessories').name
          if (!feature || feature === 'mouth')
            this.options.mouth = this.getRandomFeature('mouths').name
          if (!feature || feature === 'prop')
            this.options.prop = this.getRandomFeature('props').name
          if (!feature || feature === 'top') this.options.top = this.getRandomFeature('tops').name
          if (!feature || feature === 'puddleColor')
            this.options.puddleColor = this.getRandomFeature('puddleColors').color
          this.redraw()
        }

        draw(x, y, w, h) {
          if (!this.image) return
          drawingContext.drawImage(this.image, x || 0, y || 0, w || 300, h || 300)
        }

        invertocat() {
          return `
                         .mmMMMMMMMMMMMMMmm.
                     .mMMMMMMMMMMMMMMMMMMMMMMMm.
                  .mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMm.
                .MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM.
              .MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM.
             MMMMMMMM'  \`"MMMMM"""""""MMMM""\`  'MMMMMMMM
            MMMMMMMMM                           MMMMMMMMM
           MMMMMMMMMM:                         :MMMMMMMMMM
          .MMMMMMMMMM                           MMMMMMMMMM.
          MMMMMMMMM"                             "MMMMMMMMM
          MMMMMMMMM                               MMMMMMMMM
          MMMMMMMMM                               MMMMMMMMM
          MMMMMMMMMM                              MMMMMMMMMM
          \`MMMMMMMMMM                           MMMMMMMMMM\`
           MMMMMMMMMMMM.                     .MMMMMMMMMMMM
            MMMMMM  MMMMMMMMMM         MMMMMMMMMMMMMMMMMM
             MMMMMM  'MMMMMMM           MMMMMMMMMMMMMMMM
              \`MMMMMM  "MMMMM           MMMMMMMMMMMMMM\`
                \`MMMMMm                 MMMMMMMMMMMM\`
                  \`"MMMMMMMMM           MMMMMMMMM"\`
                     \`"MMMMMM           MMMMMM"\`
                         \`""M           M""\`
          `
        }

        ascii() {
          return `
                  MMM.           .MMM
                  MMMMMMMMMMMMMMMMMMM
                  MMMMMMMMMMMMMMMMMMM
                 MMMMMMMMMMMMMMMMMMMMM
                MMMMMMMMMMMMMMMMMMMMMMM
               MMMMMMMMMMMMMMMMMMMMMMMM
               MMMM::- -:::::::- -::MMMM
                MM~:~ 00~:::::~ 00~:~MM
           .. MMMMM::.00:::+:::.00::MMMMM ..
                 .MM::::: ._. :::::MM.
                    MMMM;:::::;MMMM
             -MM        MMMMMMM
             ^  M+     MMMMMMMMM
                 MMMMMMM MM MM MM
                      MM MM MM MM
                      MM MM MM MM
                   .~~MM~MM~MM~MM~~.
                ~~~~MM:~MM~~~MM~:MM~~~~
               ~~~~~~==~==~~~==~==~~~~~~
                ~~~~~~==~==~==~==~~~~~~
                    :~==~==~==~==~~`
        }
      }

      _export('default', Octocat)
    },
  }
})
