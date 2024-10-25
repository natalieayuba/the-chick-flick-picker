import CheckboxListItem from '../CheckboxListItem/CheckboxListItem';
import styles from './StreamingServices.module.css';

const StreamingServices = ({ prevAnswer, updateAnswers }) => {
  const services = [
    {
      id: 'netflix',
      name: 'Netflix',
      homePage: 'https://www.netflix.com/',
      themeColorCode: '#E50914',
      imageSet: {
        lightThemeImage:
          'https://media.movieofthenight.com/services/netflix/logo-light-theme.svg',
        darkThemeImage:
          'https://media.movieofthenight.com/services/netflix/logo-dark-theme.svg',
        whiteImage:
          'https://media.movieofthenight.com/services/netflix/logo-white.svg',
      },
      streamingOptionTypes: {
        addon: false,
        buy: false,
        rent: false,
        free: false,
        subscription: true,
      },
      addons: [],
    },
    {
      id: 'prime',
      name: 'Prime Video',
      homePage: 'https://www.amazon.co.uk/gp/video/storefront/',
      themeColorCode: '#00A8E1',
      imageSet: {
        lightThemeImage:
          'https://media.movieofthenight.com/services/prime/logo-light-theme.svg',
        darkThemeImage:
          'https://media.movieofthenight.com/services/prime/logo-dark-theme.svg',
        whiteImage:
          'https://media.movieofthenight.com/services/prime/logo-white.svg',
      },
      streamingOptionTypes: {
        addon: true,
        buy: true,
        rent: true,
        free: false,
        subscription: true,
      },
      addons: [
        {
          id: 'fullmoon',
          name: 'Full Moon',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=fullmoon',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/fullmoon/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/fullmoon/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/fullmoon/white.svg',
          },
        },
        {
          id: 'motorland',
          name: 'motorland',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=motorland',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/motorland/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/motorland/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/motorland/white.svg',
          },
        },
        {
          id: 'stingrayclassica',
          name: 'Stingray Classica',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=stingrayclassica',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/stingrayclassica/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/stingrayclassica/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/stingrayclassica/white.svg',
          },
        },
        {
          id: 'marqueetvuk',
          name: 'MarqueeTV',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=marqueetvuk',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/marqueetvuk/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/marqueetvuk/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/marqueetvuk/white.svg',
          },
        },
        {
          id: 'nordicnoir',
          name: 'Arrow TV',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=nordicnoir',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/nordicnoir/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/nordicnoir/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/nordicnoir/white.svg',
          },
        },
        {
          id: 'pongalo',
          name: 'pongalo',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=pongalo',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/pongalo/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/pongalo/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/pongalo/white.svg',
          },
        },
        {
          id: 'alchemiya',
          name: 'Alchemiya',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=alchemiya',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/alchemiya/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/alchemiya/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/alchemiya/white.svg',
          },
        },
        {
          id: 'historyuk',
          name: 'historyuk',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=historyuk',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/historyuk/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/historyuk/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/historyuk/white.svg',
          },
        },
        {
          id: 'shoutfactory',
          name: 'Shout! Factory TV',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=shoutfactory',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/shoutfactory/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/shoutfactory/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/shoutfactory/white.svg',
          },
        },
        {
          id: 'upfaithfamily',
          name: '',
          homePage: '',
          themeColorCode: '',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'amigoz',
          name: 'amigoz',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=amigoz',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/amigoz/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/amigoz/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/amigoz/white.svg',
          },
        },
        {
          id: 'arrowvideo',
          name: 'Arrow Video',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=arrowvideo',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/arrowvideo/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/arrowvideo/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/arrowvideo/white.svg',
          },
        },
        {
          id: 'chaupaluk',
          name: 'Chaupal',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=chaupaluk',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/chaupaluk/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/chaupaluk/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/chaupaluk/white.svg',
          },
        },
        {
          id: '101filmsuk',
          name: 'Channel 101',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=101filmsuk',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/101filmsuk/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/101filmsuk/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/101filmsuk/white.svg',
          },
        },
        {
          id: 'codacollectionuk',
          name: 'The Coda Collection',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=codacollectionuk',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/codacollectionuk/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/codacollectionuk/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/codacollectionuk/white.svg',
          },
        },
        {
          id: 'filmbox',
          name: 'Filmbox',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=filmbox',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/filmbox/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/filmbox/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/filmbox/white.svg',
          },
        },
        {
          id: 'hallmarkuk',
          name: 'hallmarkuk',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=hallmarkuk',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/hallmarkuk/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/hallmarkuk/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/hallmarkuk/white.svg',
          },
        },
        {
          id: 'shortstvuk',
          name: 'ShortsTV',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=shortstvuk',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/shortstvuk/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/shortstvuk/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/shortstvuk/white.svg',
          },
        },
        {
          id: 'outtvuk',
          name: 'outtvuk',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=outtvuk',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/outtvuk/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/outtvuk/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/outtvuk/white.svg',
          },
        },
        {
          id: 'pokemon',
          name: 'Pokémon',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=pokemon',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/pokemon/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/pokemon/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/pokemon/white.svg',
          },
        },
        {
          id: 'stingraydjazz',
          name: 'Stingray Djazz',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=stingraydjazz',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/stingraydjazz/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/stingraydjazz/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/stingraydjazz/white.svg',
          },
        },
        {
          id: 'curiositystreamstandard',
          name: 'CuriosityStream',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=curiositystreamstandard',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/curiositystreamstandard/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/curiositystreamstandard/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/curiositystreamstandard/white.svg',
          },
        },
        {
          id: 'historyhituk',
          name: '',
          homePage: '',
          themeColorCode: '',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'qelloconcerts',
          name: 'Qello Concerts',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=qelloconcerts',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/qelloconcerts/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/qelloconcerts/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/qelloconcerts/white.svg',
          },
        },
        {
          id: 'shuddertv',
          name: 'Shudder',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=shuddertv',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/shuddertv/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/shuddertv/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/shuddertv/white.svg',
          },
        },
        {
          id: 'azoomeevideo',
          name: 'azoomeevideo',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=azoomeevideo',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/azoomeevideo/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/azoomeevideo/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/azoomeevideo/white.svg',
          },
        },
        {
          id: 'crunchyrolluk',
          name: 'Crunchyroll',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=crunchyrolluk',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/crunchyrolluk/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/crunchyrolluk/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/crunchyrolluk/white.svg',
          },
        },
        {
          id: 'docubayuk',
          name: 'DocuBay',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=docubayuk',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/docubayuk/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/docubayuk/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/docubayuk/white.svg',
          },
        },
        {
          id: 'echoboom',
          name: 'Echoboom Sports',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=echoboom',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/echoboom/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/echoboom/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/echoboom/white.svg',
          },
        },
        {
          id: 'gaia',
          name: 'Gaia',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=gaia',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/gaia/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/gaia/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/gaia/white.svg',
          },
        },
        {
          id: 'hayu',
          name: 'hayu',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=hayu',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/hayu/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/hayu/dark-theme.svg',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/hayu/white.svg',
          },
        },
        {
          id: 'stingraykaraoke',
          name: '',
          homePage: '',
          themeColorCode: '',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'kriminal',
          name: 'kriminal',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=kriminal',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/kriminal/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/kriminal/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/kriminal/white.svg',
          },
        },
        {
          id: 'pbsamerica',
          name: 'PBS America',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=pbsamerica',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/pbsamerica/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/pbsamerica/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/pbsamerica/white.svg',
          },
        },
        {
          id: 'realeyz',
          name: 'Sooner',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=realeyz',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/realeyz/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/realeyz/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/realeyz/white.svg',
          },
        },
        {
          id: 'viaplayuk',
          name: 'Viaplay',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=viaplayuk',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/viaplayuk/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/viaplayuk/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/viaplayuk/white.svg',
          },
        },
        {
          id: 'horsecountry',
          name: '',
          homePage: '',
          themeColorCode: '',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'iconfilmuk',
          name: 'THE ICON FILM CHANNEL',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=iconfilmuk',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/iconfilmuk/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/iconfilmuk/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/iconfilmuk/white.svg',
          },
        },
        {
          id: 'studiocanalpresentsuk',
          name: 'STUDIOCANAL PRESENTS',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=studiocanalpresentsuk',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/studiocanalpresentsuk/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/studiocanalpresentsuk/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/studiocanalpresentsuk/white.svg',
          },
        },
        {
          id: 'dekkoo',
          name: 'Dekkoo',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=dekkoo',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/dekkoo/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/dekkoo/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/dekkoo/white.svg',
          },
        },
        {
          id: 'discoveryplusuk',
          name: 'discovery+',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=discoveryplusuk',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/discoveryplusuk/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/discoveryplusuk/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/discoveryplusuk/white.svg',
          },
        },
        {
          id: 'heretv',
          name: 'Here TV',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=heretv',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/heretv/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/heretv/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/heretv/white.svg',
          },
        },
        {
          id: 'mgm',
          name: 'MGM+',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=mgm',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/mgm/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/mgm/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/mgm/white.svg',
          },
        },
        {
          id: 'nextupcomedy',
          name: 'NextUp Comedy',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=nextupcomedy',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/nextupcomedy/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/nextupcomedy/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/nextupcomedy/white.svg',
          },
        },
        {
          id: 'paramountplusgb',
          name: 'Paramount+',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=paramountplusgb',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/paramountplusgb/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/paramountplusgb/dark-theme.svg',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/paramountplusgb/white.svg',
          },
        },
        {
          id: 'bfiplayerplus',
          name: 'BFI Player',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=bfiplayerplus',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/bfiplayerplus/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/bfiplayerplus/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/bfiplayerplus/white.svg',
          },
        },
        {
          id: 'erosnow',
          name: 'erosnow',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=erosnow',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/erosnow/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/erosnow/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/erosnow/white.svg',
          },
        },
        {
          id: 'okidoki',
          name: 'Okidoki',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=okidoki',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/okidoki/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/okidoki/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/okidoki/white.svg',
          },
        },
        {
          id: 'acorntvuk',
          name: 'acorntvuk',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=acorntvuk',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/acorntvuk/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/acorntvuk/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/acorntvuk/white.svg',
          },
        },
        {
          id: 'yaddo',
          name: 'Docsville',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=yaddo',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/yaddo/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/yaddo/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/yaddo/white.svg',
          },
        },
        {
          id: 'pbo',
          name: 'Pinoy Box Office',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=pbo',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/pbo/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/pbo/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/pbo/white.svg',
          },
        },
        {
          id: 'premiersportsuk',
          name: '',
          homePage: '',
          themeColorCode: '',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'fandor',
          name: '',
          homePage: '',
          themeColorCode: '',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'hopster',
          name: 'hopster',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=hopster',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/hopster/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/hopster/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/hopster/white.svg',
          },
        },
        {
          id: 'thegreatcourses',
          name: '',
          homePage: '',
          themeColorCode: '',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'curzonuk',
          name: 'Curzon',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=curzonuk',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/curzonuk/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/curzonuk/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/curzonuk/white.svg',
          },
        },
        {
          id: 'discoverysportuk',
          name: '',
          homePage: '',
          themeColorCode: '',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'mubi',
          name: 'MUBI',
          homePage:
            'https://www.amazon.co.uk/gp/video/storefront?benefitId=mubi',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/mubi/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/mubi/dark-theme.svg',
            whiteImage:
              'https://media.movieofthenight.com/services/prime/gb/addons/mubi/white.svg',
          },
        },
      ],
    },
    {
      id: 'disney',
      name: 'Disney+',
      homePage: 'https://www.disneyplus.com/',
      themeColorCode: '#01137c',
      imageSet: {
        lightThemeImage:
          'https://media.movieofthenight.com/services/disney/logo-light-theme.svg',
        darkThemeImage:
          'https://media.movieofthenight.com/services/disney/logo-dark-theme.svg',
        whiteImage:
          'https://media.movieofthenight.com/services/disney/logo-white.svg',
      },
      streamingOptionTypes: {
        addon: false,
        buy: false,
        rent: false,
        free: false,
        subscription: true,
      },
      addons: [],
    },
    {
      id: 'apple',
      name: 'Apple TV',
      homePage: 'https://tv.apple.com/gb',
      themeColorCode: '#000000',
      imageSet: {
        lightThemeImage:
          'https://media.movieofthenight.com/services/apple/logo-light-theme.svg',
        darkThemeImage:
          'https://media.movieofthenight.com/services/apple/logo-dark-theme.svg',
        whiteImage:
          'https://media.movieofthenight.com/services/apple/logo-white.svg',
      },
      streamingOptionTypes: {
        addon: true,
        buy: true,
        rent: true,
        free: false,
        subscription: true,
      },
      addons: [
        {
          id: 'tvs.sbd.1000058',
          name: 'Qello Concerts',
          homePage:
            'https://tv.apple.com/gb/channel/qello-concerts/tvs.sbd.1000058',
          themeColorCode: '#c32dff',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000058/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000058/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000058/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000301',
          name: 'Eros Now Select',
          homePage:
            'https://tv.apple.com/us/channel/eros-now-select/tvs.sbd.1000301',
          themeColorCode: '#FF4013',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.10940',
          name: 'CNN',
          homePage: 'https://tv.apple.com/us/channel/cnn/tvs.sbd.10940',
          themeColorCode: '#CD2126',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10940/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10940/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10940/white.png',
          },
        },
        {
          id: 'tvs.sbd.11560',
          name: 'Discovery',
          homePage: 'https://tv.apple.com/us/channel/discovery/tvs.sbd.11560',
          themeColorCode: '#1c6693',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11560/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11560/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11560/white.png',
          },
        },
        {
          id: 'tvs.sbd.12305',
          name: 'Destination America GO',
          homePage:
            'https://tv.apple.com/us/channel/destination-america-go/tvs.sbd.12305',
          themeColorCode: '#1c2739',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12305/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12305/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12305/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000091',
          name: 'Garage',
          homePage: 'https://tv.apple.com/gb/channel/garage/tvs.sbd.1000091',
          themeColorCode: '#0d0e10',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000272',
          name: 'MGM+',
          homePage: 'https://tv.apple.com/us/channel/mgm/tvs.sbd.1000272',
          themeColorCode: '#9D7F2C',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000490',
          name: 'Lionsgate+',
          homePage: 'https://tv.apple.com/gb/channel/lionsgate/tvs.sbd.1000490',
          themeColorCode: '#006576',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.11220',
          name: 'TNT',
          homePage: 'https://tv.apple.com/us/channel/tnt/tvs.sbd.11220',
          themeColorCode: '#232323',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.11582',
          name: 'Science Channel',
          homePage:
            'https://tv.apple.com/us/channel/science-channel/tvs.sbd.11582',
          themeColorCode: '#5c9cd4',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11582/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11582/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11582/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000355',
          name: 'MHz Choice',
          homePage:
            'https://tv.apple.com/us/channel/mhz-choice/tvs.sbd.1000355',
          themeColorCode: '#AC1F2D',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000415',
          name: 'BBC Select',
          homePage:
            'https://tv.apple.com/us/channel/bbc-select/tvs.sbd.1000415',
          themeColorCode: '#8FB79D',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000415/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000415/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000415/white.png',
          },
        },
        {
          id: 'tvs.sbd.10200',
          name: 'STARZ',
          homePage: 'https://tv.apple.com/us/channel/starz/tvs.sbd.10200',
          themeColorCode: '#333333',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.11160',
          name: 'Crunchyroll',
          homePage: 'https://tv.apple.com/us/channel/crunchyroll/tvs.sbd.11160',
          themeColorCode: '#F47521',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000204',
          name: 'PBS Living',
          homePage:
            'https://tv.apple.com/us/channel/pbs-living/tvs.sbd.1000204',
          themeColorCode: '#F47920',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000204.png',
            darkThemeImage: '',
            whiteImage: '',
          },
        },
        {
          id: 'tvs.sbd.10640',
          name: 'E!',
          homePage: 'https://tv.apple.com/us/channel/e/tvs.sbd.10640',
          themeColorCode: '#0089A8',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.11580',
          name: 'Animal Planet',
          homePage:
            'https://tv.apple.com/us/channel/animal-planet/tvs.sbd.11580',
          themeColorCode: '#0073ff',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11580/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11580/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11580/white.png',
          },
        },
        {
          id: 'tvs.sbd.12044',
          name: 'NOW',
          homePage: 'https://tv.apple.com/gb/channel/now/tvs.sbd.12044',
          themeColorCode: '#002C2B',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12044/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12044/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12044/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000395',
          name: 'Hallmark Movies Now',
          homePage:
            'https://tv.apple.com/us/channel/hallmark-movies-now/tvs.sbd.1000395',
          themeColorCode: '#573C81',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000511',
          name: 'Smithsonian Channel',
          homePage:
            'https://tv.apple.com/us/channel/smithsonian-channel/tvs.sbd.1000511',
          themeColorCode: '#DB2C2C',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000511/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000511/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000511/white.png',
          },
        },
        {
          id: 'tvs.sbd.10021',
          name: 'Showtime Anytime',
          homePage:
            'https://tv.apple.com/us/channel/showtime-anytime/tvs.sbd.10021',
          themeColorCode: '#B10000',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.10081',
          name: 'PBS KIDS Video',
          homePage:
            'https://tv.apple.com/us/channel/pbs-kids-video/tvs.sbd.10081',
          themeColorCode: '#E5296B',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10081.png',
            darkThemeImage: '',
            whiteImage: '',
          },
        },
        {
          id: 'tvs.sbd.1000288',
          name: 'IFC Films',
          homePage: 'https://tv.apple.com/us/channel/ifc-films/tvs.sbd.1000288',
          themeColorCode: '#000000',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.12442',
          name: 'Pluto TV',
          homePage: 'https://tv.apple.com/gb/channel/pluto-tv/tvs.sbd.12442',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12442.png',
            darkThemeImage: '',
            whiteImage: '',
          },
        },
        {
          id: 'tvs.sbd.10400',
          name: 'Comedy Central',
          homePage:
            'https://tv.apple.com/us/channel/comedy-central/tvs.sbd.10400',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10400/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10400/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10400/white.png',
          },
        },
        {
          id: 'tvs.sbd.9000',
          name: 'Netflix',
          homePage: 'https://tv.apple.com/us/channel/netflix/tvs.sbd.9000',
          themeColorCode: '',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000234',
          name: 'Noggin',
          homePage: 'https://tv.apple.com/us/channel/noggin/tvs.sbd.1000234',
          themeColorCode: '#8E53DB',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000439',
          name: 'Paramount+',
          homePage: 'https://tv.apple.com/gb/channel/paramount/tvs.sbd.1000439',
          themeColorCode: '#1764FF',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000543',
          name: 'ViX',
          homePage: 'https://tv.apple.com/us/channel/vix/tvs.sbd.1000543',
          themeColorCode: '#666666',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.10020',
          name: 'SHOWTIME',
          homePage: 'https://tv.apple.com/us/channel/showtime/tvs.sbd.10020',
          themeColorCode: '#B10000',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.10302',
          name: '',
          homePage: '',
          themeColorCode: '',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.11360',
          name: 'BET',
          homePage: 'https://tv.apple.com/us/channel/bet/tvs.sbd.11360',
          themeColorCode: '#E05B4E',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.12980',
          name: 'Red Bull TV',
          homePage: 'https://tv.apple.com/us/channel/red-bull-tv/tvs.sbd.12980',
          themeColorCode: '#001E3C',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12980/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12980/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12980/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000216',
          name: 'Disney+',
          homePage: 'https://tv.apple.com/gb/channel/disney/tvs.sbd.1000216',
          themeColorCode: '#136878',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000332',
          name: 'A&E Crime Central',
          homePage:
            'https://tv.apple.com/us/channel/ae-crime-central/tvs.sbd.1000332',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000332/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000332/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000332/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000371',
          name: 'Peacock',
          homePage: 'https://tv.apple.com/us/channel/peacock/tvs.sbd.1000371',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000371/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000371/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000371/white.png',
          },
        },
        {
          id: 'tvs.sbd.10282',
          name: 'Food Network',
          homePage:
            'https://tv.apple.com/us/channel/food-network/tvs.sbd.10282',
          themeColorCode: '#c41f40',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10282/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10282/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10282/white.png',
          },
        },
        {
          id: 'tvs.sbd.11984',
          name: 'My5',
          homePage: 'https://tv.apple.com/gb/channel/my5/tvs.sbd.11984',
          themeColorCode: '#141b21',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11984/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11984/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11984/white.png',
          },
        },
        {
          id: 'tvs.sbd.12306',
          name: 'Discovery Life GO',
          homePage:
            'https://tv.apple.com/us/channel/discovery-life-go/tvs.sbd.12306',
          themeColorCode: '#74a9d0',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12306/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12306/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12306/white.png',
          },
        },
        {
          id: 'tvs.sbd.10100',
          name: 'DisneyNOW',
          homePage: 'https://tv.apple.com/us/channel/disneynow/tvs.sbd.10100',
          themeColorCode: '#C40431',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.11361',
          name: 'BBC America',
          homePage: 'https://tv.apple.com/us/channel/bbc-america/tvs.sbd.11361',
          themeColorCode: '#00041F',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11361.png',
            darkThemeImage: '',
            whiteImage: '',
          },
        },
        {
          id: 'tvs.sbd.1000257',
          name: 'UP Faith & Family',
          homePage:
            'https://tv.apple.com/us/channel/up-faith--family/tvs.sbd.1000257',
          themeColorCode: '#444443',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000362',
          name: 'Hallmark Movies Now',
          homePage:
            'https://tv.apple.com/us/channel/hallmark-movies-now/tvs.sbd.1000362',
          themeColorCode: '#573C81',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.10220',
          name: 'NBC',
          homePage: 'https://tv.apple.com/us/channel/nbc/tvs.sbd.10220',
          themeColorCode: '#4078D0',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10220.png',
            darkThemeImage: '',
            whiteImage: '',
          },
        },
        {
          id: 'tvs.sbd.13621',
          name: 'PlayKids',
          homePage: 'https://tv.apple.com/us/channel/playkids/tvs.sbd.13621',
          themeColorCode: '#9c227d',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.13621/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.13621/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.13621/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000023',
          name: 'Viki',
          homePage: 'https://tv.apple.com/us/channel/viki/tvs.sbd.1000023',
          themeColorCode: '#0c9bff',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000206',
          name: 'Shudder',
          homePage: 'https://tv.apple.com/us/channel/shudder/tvs.sbd.1000206',
          themeColorCode: '#2F3D53',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000214',
          name: 'ALLBLK',
          homePage: 'https://tv.apple.com/us/channel/allblk/tvs.sbd.1000214',
          themeColorCode: '#000000',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.11180',
          name: 'Hallmark TV',
          homePage: 'https://tv.apple.com/us/channel/hallmark-tv/tvs.sbd.11180',
          themeColorCode: '#3BABD1',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11180.png',
            darkThemeImage: '',
            whiteImage: '',
          },
        },
        {
          id: 'tvs.sbd.13160',
          name: 'Tubi TV',
          homePage: 'https://tv.apple.com/us/channel/tubi-tv/tvs.sbd.13160',
          themeColorCode: '#10141F',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000090',
          name: 'Paramount+',
          homePage: 'https://tv.apple.com/gb/channel/paramount/tvs.sbd.1000090',
          themeColorCode: '#1764FF',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000569',
          name: 'Marquee TV',
          homePage:
            'https://tv.apple.com/gb/channel/marquee-tv/tvs.sbd.1000569',
          themeColorCode: '#ff87c3',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000294',
          name: 'BritBox',
          homePage: 'https://tv.apple.com/us/channel/britbox/tvs.sbd.1000294',
          themeColorCode: '#00202b',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000294/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000294/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000294/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000299',
          name: 'BET+',
          homePage: 'https://tv.apple.com/us/channel/bet/tvs.sbd.1000299',
          themeColorCode: '#CC00CC',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000299.png',
            darkThemeImage: '',
            whiteImage: '',
          },
        },
        {
          id: 'tvs.sbd.1000482',
          name: 'STUDIOCANAL Presents',
          homePage:
            'https://tv.apple.com/gb/channel/studiocanal-presents/tvs.sbd.1000482',
          themeColorCode: '#000000',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.10080',
          name: 'PBS Video',
          homePage: 'https://tv.apple.com/us/channel/pbs-video/tvs.sbd.10080',
          themeColorCode: '#2638C4',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10080/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10080/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10080/white.png',
          },
        },
        {
          id: 'tvs.sbd.12307',
          name: 'MotorTrend GO',
          homePage:
            'https://tv.apple.com/us/channel/motortrend-go/tvs.sbd.12307',
          themeColorCode: '#ee3220',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.12741',
          name: 'ALLBLK',
          homePage: 'https://tv.apple.com/us/channel/allblk/tvs.sbd.12741',
          themeColorCode: '#080808',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.11581',
          name: 'Investigation Discovery',
          homePage:
            'https://tv.apple.com/us/channel/investigation-discovery/tvs.sbd.11581',
          themeColorCode: '#F2231A',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11581/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11581/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11581/white.png',
          },
        },
        {
          id: 'tvs.sbd.12521',
          name: 'Oxygen',
          homePage: 'https://tv.apple.com/us/channel/oxygen/tvs.sbd.12521',
          themeColorCode: '#9A4BA0',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12521.png',
            darkThemeImage: '',
            whiteImage: '',
          },
        },
        {
          id: 'tvs.sbd.1000051',
          name: 'BritBox',
          homePage: 'https://tv.apple.com/us/channel/britbox/tvs.sbd.1000051',
          themeColorCode: '#00202b',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000051/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000051/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000051/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000228',
          name: 'HISTORY Vault',
          homePage:
            'https://tv.apple.com/us/channel/history-vault/tvs.sbd.1000228',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000228/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000228/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000228/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000566',
          name: 'Max',
          homePage: 'https://tv.apple.com/us/channel/max/tvs.sbd.1000566',
          themeColorCode: '#002BE7',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000566.png',
            darkThemeImage: '',
            whiteImage: '',
          },
        },
        {
          id: 'tvs.sbd.10642',
          name: 'Telemundo',
          homePage: 'https://tv.apple.com/us/channel/telemundo/tvs.sbd.10642',
          themeColorCode: '#1F2127',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.11240',
          name: 'MUBI',
          homePage: 'https://tv.apple.com/gb/channel/mubi/tvs.sbd.11240',
          themeColorCode: '#001489',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11240.png',
            darkThemeImage: '',
            whiteImage: '',
          },
        },
        {
          id: 'tvs.sbd.10060',
          name: 'FXNOW',
          homePage: 'https://tv.apple.com/us/channel/fxnow/tvs.sbd.10060',
          themeColorCode: '#121212',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.10680',
          name: 'USA',
          homePage: 'https://tv.apple.com/us/channel/usa/tvs.sbd.10680',
          themeColorCode: '#FF3B30',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.30061',
          name: '',
          homePage: '',
          themeColorCode: '',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000030',
          name: 'Philo',
          homePage: 'https://tv.apple.com/us/channel/philo/tvs.sbd.1000030',
          themeColorCode: '#0C92F3',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000030.png',
            darkThemeImage: '',
            whiteImage: '',
          },
        },
        {
          id: 'tvs.sbd.1000244',
          name: 'Cinemax',
          homePage: 'https://tv.apple.com/us/channel/cinemax/tvs.sbd.1000244',
          themeColorCode: '#EDAE41',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.12041',
          name: 'ITVX',
          homePage: 'https://tv.apple.com/gb/channel/itvx/tvs.sbd.12041',
          themeColorCode: '#102C3D',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12041/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12041/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12041/white.png',
          },
        },
        {
          id: 'tvs.sbd.12482',
          name: 'Classix',
          homePage: 'https://tv.apple.com/gb/channel/classix/tvs.sbd.12482',
          themeColorCode: '#1D1D1E',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.3000',
          name: '',
          homePage: '',
          themeColorCode: '',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.10000',
          name: 'Hulu',
          homePage: 'https://tv.apple.com/us/channel/hulu/tvs.sbd.10000',
          themeColorCode: '#29A869',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000212',
          name: 'Acorn TV',
          homePage: 'https://tv.apple.com/us/channel/acorn-tv/tvs.sbd.1000212',
          themeColorCode: '#053E3A',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000212/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000212/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000212/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000249',
          name: 'MUBI',
          homePage: 'https://tv.apple.com/gb/channel/mubi/tvs.sbd.1000249',
          themeColorCode: '#041383',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000452',
          name: 'CBS',
          homePage: 'https://tv.apple.com/us/channel/cbs/tvs.sbd.1000452',
          themeColorCode: '#040C35',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000452/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000452/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000452/white.png',
          },
        },
        {
          id: 'tvs.sbd.10120',
          name: 'Paramount+',
          homePage: 'https://tv.apple.com/us/channel/paramount/tvs.sbd.10120',
          themeColorCode: '#1764FF',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.10300',
          name: 'Lifetime',
          homePage: 'https://tv.apple.com/us/channel/lifetime/tvs.sbd.10300',
          themeColorCode: '#f51a51',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10300/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10300/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10300/white.png',
          },
        },
        {
          id: 'tvs.sbd.10280',
          name: 'Travel Channel',
          homePage:
            'https://tv.apple.com/us/channel/travel-channel/tvs.sbd.10280',
          themeColorCode: '#242424',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10280/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10280/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10280/white.png',
          },
        },
        {
          id: 'tvs.sbd.10800',
          name: 'VH1',
          homePage: 'https://tv.apple.com/us/channel/vh1/tvs.sbd.10800',
          themeColorCode: '#000000',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000061',
          name: 'F1 TV',
          homePage: 'https://tv.apple.com/us/channel/f1-tv/tvs.sbd.1000061',
          themeColorCode: '#e10600',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000061/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000061/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000061/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000231',
          name: 'STARZ',
          homePage: 'https://tv.apple.com/us/channel/starz/tvs.sbd.1000231',
          themeColorCode: '#006576',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000246',
          name: 'Lionsgate+',
          homePage: 'https://tv.apple.com/gb/channel/lionsgate/tvs.sbd.1000246',
          themeColorCode: '#006576',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000473',
          name: 'Carnegie Hall+',
          homePage:
            'https://tv.apple.com/gb/channel/carnegie-hall/tvs.sbd.1000473',
          themeColorCode: '#e42138',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000496',
          name: 'Up Faith and Family',
          homePage:
            'https://tv.apple.com/us/channel/up-faith-and-family/tvs.sbd.1000496',
          themeColorCode: '#282828',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000498',
          name: 'AMC+',
          homePage: 'https://tv.apple.com/us/channel/amc/tvs.sbd.1000498',
          themeColorCode: '#0E1623',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000158',
          name: 'MotorTrend',
          homePage:
            'https://tv.apple.com/us/channel/motortrend/tvs.sbd.1000158',
          themeColorCode: '#ED271C',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000158/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000158/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000158/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000227',
          name: 'Curiosity Stream',
          homePage:
            'https://tv.apple.com/us/channel/curiosity-stream/tvs.sbd.1000227',
          themeColorCode: '#EEA83D',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000227/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000227/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000227/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000547',
          name: 'CJ ENM Selects',
          homePage:
            'https://tv.apple.com/us/channel/cj-enm-selects/tvs.sbd.1000547',
          themeColorCode: '#FF5A00',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.11860',
          name: 'Freeform',
          homePage: 'https://tv.apple.com/us/channel/freeform/tvs.sbd.11860',
          themeColorCode: '#1981F5',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000303',
          name: 'NAT GEO TV',
          homePage:
            'https://tv.apple.com/us/channel/nat-geo-tv/tvs.sbd.1000303',
          themeColorCode: '#020202',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000303/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000303/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000303/white.png',
          },
        },
        {
          id: 'tvs.sbd.10304',
          name: 'Cooking Channel',
          homePage:
            'https://tv.apple.com/us/channel/cooking-channel/tvs.sbd.10304',
          themeColorCode: '#242424',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10304/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10304/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10304/white.png',
          },
        },
        {
          id: 'tvs.sbd.10620',
          name: 'Bravo',
          homePage: 'https://tv.apple.com/us/channel/bravo/tvs.sbd.10620',
          themeColorCode: '#679197',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.12962',
          name: 'Prime Video',
          homePage: 'https://tv.apple.com/gb/channel/prime-video/tvs.sbd.12962',
          themeColorCode: '#1a98FF',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000408',
          name: 'discovery+',
          homePage: 'https://tv.apple.com/us/channel/discovery/tvs.sbd.1000408',
          themeColorCode: '#121317',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.10520',
          name: 'HGTV',
          homePage: 'https://tv.apple.com/us/channel/hgtv/tvs.sbd.10520',
          themeColorCode: '#4eabc1',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10520/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10520/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10520/white.png',
          },
        },
        {
          id: 'tvs.sbd.11320',
          name: 'CuriosityStream',
          homePage:
            'https://tv.apple.com/us/channel/curiositystream/tvs.sbd.11320',
          themeColorCode: '#EEA83D',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11320/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11320/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11320/white.png',
          },
        },
        {
          id: 'tvs.sbd.11880',
          name: 'truTV',
          homePage: 'https://tv.apple.com/us/channel/trutv/tvs.sbd.11880',
          themeColorCode: '#4138FF',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11880.png',
            darkThemeImage: '',
            whiteImage: '',
          },
        },
        {
          id: 'tvs.sbd.1000290',
          name: 'BFI Player',
          homePage:
            'https://tv.apple.com/gb/channel/bfi-player/tvs.sbd.1000290',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000290/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000290/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000290/white.png',
          },
        },
        {
          id: 'tvs.sbd.10664',
          name: 'Syfy',
          homePage: 'https://tv.apple.com/us/channel/syfy/tvs.sbd.10664',
          themeColorCode: '#635762',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000333',
          name: 'Crime+Investigation Play',
          homePage:
            'https://tv.apple.com/gb/channel/crimeinvestigation-play/tvs.sbd.1000333',
          themeColorCode: '#191E24',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000397',
          name: 'adult swim',
          homePage:
            'https://tv.apple.com/us/channel/adult-swim/tvs.sbd.1000397',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000397/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000397/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000397/white.png',
          },
        },
        {
          id: 'tvs.sbd.10241',
          name: 'A&E',
          homePage: 'https://tv.apple.com/us/channel/ae/tvs.sbd.10241',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10241.png',
            darkThemeImage: '',
            whiteImage: '',
          },
        },
        {
          id: 'tvs.sbd.10860',
          name: 'BBC iPlayer',
          homePage: 'https://tv.apple.com/gb/channel/bbc-iplayer/tvs.sbd.10860',
          themeColorCode: '',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10860/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10860/dark-theme.svg',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10860/white.svg',
          },
        },
        {
          id: 'tvs.sbd.10960',
          name: 'Hopster',
          homePage: 'https://tv.apple.com/us/channel/hopster/tvs.sbd.10960',
          themeColorCode: '#ed2676',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.11222',
          name: 'Cartoon Network',
          homePage:
            'https://tv.apple.com/us/channel/cartoon-network/tvs.sbd.11222',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11222/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11222/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11222/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000032',
          name: 'Funimation',
          homePage:
            'https://tv.apple.com/us/channel/funimation/tvs.sbd.1000032',
          themeColorCode: '#5B0BB5',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000427',
          name: 'MagellanTV Documentaries',
          homePage:
            'https://tv.apple.com/gb/channel/magellantv-documentaries/tvs.sbd.1000427',
          themeColorCode: '#0a1f2d',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000427/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000427/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000427/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000503',
          name: 'Amazon Freevee',
          homePage:
            'https://tv.apple.com/gb/channel/amazon-freevee/tvs.sbd.1000503',
          themeColorCode: '#32155A',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000503/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000503/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000503/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000529',
          name: 'Gaia',
          homePage: 'https://tv.apple.com/us/channel/gaia/tvs.sbd.1000529',
          themeColorCode: '#01B4B4',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000529/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000529/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000529/white.png',
          },
        },
        {
          id: 'tvs.sbd.12740',
          name: 'Acorn TV',
          homePage: 'https://tv.apple.com/gb/channel/acorn-tv/tvs.sbd.12740',
          themeColorCode: '#0B1733',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12740/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12740/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12740/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000383',
          name: 'AMC+',
          homePage: 'https://tv.apple.com/us/channel/amc/tvs.sbd.1000383',
          themeColorCode: '#0E1623',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000384',
          name: 'NFL',
          homePage: 'https://tv.apple.com/us/channel/nfl/tvs.sbd.1000384',
          themeColorCode: '#013369',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000384/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000384/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000384/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000435',
          name: 'The Great Courses Signature Collection',
          homePage:
            'https://tv.apple.com/us/channel/the-great-courses-signature-collection/tvs.sbd.1000435',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000435/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000435/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000435/white.png',
          },
        },
        {
          id: 'tvs.sbd.10920',
          name: 'HISTORY Vault',
          homePage:
            'https://tv.apple.com/us/channel/history-vault/tvs.sbd.10920',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10920.png',
            darkThemeImage: '',
            whiteImage: '',
          },
        },
        {
          id: 'tvs.sbd.1000266',
          name: 'OUTtv',
          homePage: 'https://tv.apple.com/us/channel/outtv/tvs.sbd.1000266',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000266/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000266/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000266/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000327',
          name: 'History Play',
          homePage:
            'https://tv.apple.com/gb/channel/history-play/tvs.sbd.1000327',
          themeColorCode: '#12121A',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.10420',
          name: 'MTV',
          homePage: 'https://tv.apple.com/us/channel/mtv/tvs.sbd.10420',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10420.png',
            darkThemeImage: '',
            whiteImage: '',
          },
        },
        {
          id: 'tvs.sbd.12381',
          name: 'Sling TV',
          homePage: 'https://tv.apple.com/us/channel/sling-tv/tvs.sbd.12381',
          themeColorCode: '#000000',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.12057',
          name: 'ARTE',
          homePage: 'https://tv.apple.com/gb/channel/arte/tvs.sbd.12057',
          themeColorCode: '#FA481C',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000003',
          name: 'Boomerang',
          homePage: 'https://tv.apple.com/us/channel/boomerang/tvs.sbd.1000003',
          themeColorCode: '#7432FC',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000185',
          name: 'MGM+',
          homePage: 'https://tv.apple.com/us/channel/mgm/tvs.sbd.1000185',
          themeColorCode: '#000000',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000379',
          name: 'Plex',
          homePage: 'https://tv.apple.com/us/channel/plex/tvs.sbd.1000379',
          themeColorCode: '#282A2D',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000393',
          name: 'BET+',
          homePage: 'https://tv.apple.com/us/channel/bet/tvs.sbd.1000393',
          themeColorCode: '#CC00CC',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000393/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000393/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000393/white.png',
          },
        },
        {
          id: 'tvs.sbd.10180',
          name: 'ABC',
          homePage: 'https://tv.apple.com/us/channel/abc/tvs.sbd.10180',
          themeColorCode: '#0A1320',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10180.png',
            darkThemeImage: '',
            whiteImage: '',
          },
        },
        {
          id: 'tvs.sbd.10260',
          name: 'HISTORY',
          homePage: 'https://tv.apple.com/us/channel/history/tvs.sbd.10260',
          themeColorCode: '#000000',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000208',
          name: 'Sundance Now',
          homePage:
            'https://tv.apple.com/us/channel/sundance-now/tvs.sbd.1000208',
          themeColorCode: '#1c2238',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000208.png',
            darkThemeImage: '',
            whiteImage: '',
          },
        },
        {
          id: 'tvs.sbd.10540',
          name: 'Sundance Now',
          homePage:
            'https://tv.apple.com/us/channel/sundance-now/tvs.sbd.10540',
          themeColorCode: '#1c2238',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.12056',
          name: 'Channel 4',
          homePage: 'https://tv.apple.com/gb/channel/channel-4/tvs.sbd.12056',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12056/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12056/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12056/white.png',
          },
        },
        {
          id: 'tvs.sbd.13640',
          name: 'UKTV Play',
          homePage: 'https://tv.apple.com/gb/channel/uktv-play/tvs.sbd.13640',
          themeColorCode: '#141932',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.13640/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.13640/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.13640/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000230',
          name: 'Paramount+',
          homePage: 'https://tv.apple.com/us/channel/paramount/tvs.sbd.1000230',
          themeColorCode: '#1764FF',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.10600',
          name: 'Shudder',
          homePage: 'https://tv.apple.com/gb/channel/shudder/tvs.sbd.10600',
          themeColorCode: '#2F3D53',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10600/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10600/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.10600/white.png',
          },
        },
        {
          id: 'tvs.sbd.11221',
          name: 'TBS',
          homePage: 'https://tv.apple.com/us/channel/tbs/tvs.sbd.11221',
          themeColorCode: '#A93D78',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.11561',
          name: 'TLC',
          homePage: 'https://tv.apple.com/us/channel/tlc/tvs.sbd.11561',
          themeColorCode: '#e81f2e',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11561/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11561/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11561/white.png',
          },
        },
        {
          id: 'tvs.sbd.13270',
          name: 'Globoplay',
          homePage: 'https://tv.apple.com/us/channel/globoplay/tvs.sbd.13270',
          themeColorCode: '#FB0234',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.2000',
          name: 'Music',
          homePage: 'https://tv.apple.com/gb/channel/music/tvs.sbd.2000',
          themeColorCode: '',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.2000/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.2000/dark-theme.svg',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.2000/white.svg',
          },
        },
        {
          id: 'tvs.sbd.1000027',
          name: 'CNBC',
          homePage: 'https://tv.apple.com/us/channel/cnbc/tvs.sbd.1000027',
          themeColorCode: '#001E5A',
          imageSet: { lightThemeImage: '', darkThemeImage: '', whiteImage: '' },
        },
        {
          id: 'tvs.sbd.1000120',
          name: 'FilmRise',
          homePage: 'https://tv.apple.com/us/channel/filmrise/tvs.sbd.1000120',
          themeColorCode: '#c61d3a',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000120.png',
            darkThemeImage: '',
            whiteImage: '',
          },
        },
        {
          id: 'tvs.sbd.1000211',
          name: 'Tastemade',
          homePage: 'https://tv.apple.com/gb/channel/tastemade/tvs.sbd.1000211',
          themeColorCode: '#000000',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000211/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000211/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000211/white.png',
          },
        },
        {
          id: 'tvs.sbd.1000494',
          name: 'MotorTrend',
          homePage:
            'https://tv.apple.com/us/channel/motortrend/tvs.sbd.1000494',
          themeColorCode: '#ED3125',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000494/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000494/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.1000494/white.png',
          },
        },
        {
          id: 'tvs.sbd.11120',
          name: 'The CW',
          homePage: 'https://tv.apple.com/us/channel/the-cw/tvs.sbd.11120',
          themeColorCode: '#2BA9A5',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11120/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11120/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.11120/white.png',
          },
        },
        {
          id: 'tvs.sbd.12304',
          name: 'AHC GO',
          homePage: 'https://tv.apple.com/us/channel/ahc-go/tvs.sbd.12304',
          themeColorCode: '#1a4278',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12304/light-theme.png',
            darkThemeImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12304/dark-theme.png',
            whiteImage:
              'https://media.movieofthenight.com/services/apple/gb/addons/tvs.sbd.12304/white.png',
          },
        },
      ],
    },
    {
      id: 'iplayer',
      name: 'BBC iPlayer',
      homePage: 'https://www.bbc.co.uk/iplayer',
      themeColorCode: '#ff4c96',
      imageSet: {
        lightThemeImage:
          'https://media.movieofthenight.com/services/iplayer/logo-light-theme.svg',
        darkThemeImage:
          'https://media.movieofthenight.com/services/iplayer/logo-dark-theme.svg',
        whiteImage:
          'https://media.movieofthenight.com/services/iplayer/logo-white.svg',
      },
      streamingOptionTypes: {
        addon: false,
        buy: false,
        rent: false,
        free: true,
        subscription: false,
      },
      addons: [],
    },
    {
      id: 'itvx',
      name: 'ITVX',
      homePage: 'https://www.itv.com/',
      themeColorCode: '#deeb52',
      imageSet: {
        lightThemeImage:
          'https://media.movieofthenight.com/services/itvx/logo-light-theme.svg',
        darkThemeImage:
          'https://media.movieofthenight.com/services/itvx/logo-dark-theme.svg',
        whiteImage:
          'https://media.movieofthenight.com/services/itvx/logo-white.svg',
      },
      streamingOptionTypes: {
        addon: false,
        buy: false,
        rent: false,
        free: true,
        subscription: true,
      },
      addons: [],
    },
    {
      id: 'paramount',
      name: 'Paramount+',
      homePage: 'https://www.paramountplus.com/',
      themeColorCode: '#0064FF',
      imageSet: {
        lightThemeImage:
          'https://media.movieofthenight.com/services/paramount/logo-light-theme.svg',
        darkThemeImage:
          'https://media.movieofthenight.com/services/paramount/logo-dark-theme.svg',
        whiteImage:
          'https://media.movieofthenight.com/services/paramount/logo-white.svg',
      },
      streamingOptionTypes: {
        addon: false,
        buy: false,
        rent: false,
        free: false,
        subscription: true,
      },
      addons: [],
    },
    {
      id: 'mubi',
      name: 'Mubi',
      homePage: 'https://mubi.com/',
      themeColorCode: '#001588',
      imageSet: {
        lightThemeImage:
          'https://media.movieofthenight.com/services/mubi/logo-light-theme.svg',
        darkThemeImage:
          'https://media.movieofthenight.com/services/mubi/logo-dark-theme.svg',
        whiteImage:
          'https://media.movieofthenight.com/services/mubi/logo-white.svg',
      },
      streamingOptionTypes: {
        addon: false,
        buy: false,
        rent: false,
        free: false,
        subscription: true,
      },
      addons: [],
    },
    {
      id: 'now',
      name: 'Now',
      homePage: 'https://www.nowtv.com',
      themeColorCode: '#00818a',
      imageSet: {
        lightThemeImage:
          'https://media.movieofthenight.com/services/now/logo-light-theme.svg',
        darkThemeImage:
          'https://media.movieofthenight.com/services/now/logo-dark-theme.svg',
        whiteImage:
          'https://media.movieofthenight.com/services/now/logo-white.svg',
      },
      streamingOptionTypes: {
        addon: true,
        buy: false,
        rent: false,
        free: false,
        subscription: false,
      },
      addons: [
        {
          id: 'movies',
          name: 'Cinema',
          homePage: 'https://www.nowtv.com/gb/watch/movies/highlights',
          themeColorCode: '#ffffff',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/now/gb/addons/movies/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/now/gb/addons/movies/dark-theme.svg',
            whiteImage:
              'https://media.movieofthenight.com/services/now/gb/addons/movies/white.svg',
          },
        },
        {
          id: 'entertainment',
          name: 'Entertainment',
          homePage: 'https://www.nowtv.com/gb/watch/entertainment/highlights',
          themeColorCode: '#ffffff',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/now/gb/addons/entertainment/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/now/gb/addons/entertainment/dark-theme.svg',
            whiteImage:
              'https://media.movieofthenight.com/services/now/gb/addons/entertainment/white.svg',
          },
        },
        {
          id: 'hayu',
          name: 'Hayu',
          homePage: 'https://www.nowtv.com/gb/watch/hayu/highlights',
          themeColorCode: '#ffffff',
          imageSet: {
            lightThemeImage:
              'https://media.movieofthenight.com/services/now/gb/addons/hayu/light-theme.svg',
            darkThemeImage:
              'https://media.movieofthenight.com/services/now/gb/addons/hayu/dark-theme.svg',
            whiteImage:
              'https://media.movieofthenight.com/services/now/gb/addons/hayu/white.svg',
          },
        },
      ],
    },
    {
      id: 'all4',
      name: 'Channel 4',
      homePage: 'https://www.channel4.com/',
      themeColorCode: '#aaff89',
      imageSet: {
        lightThemeImage:
          'https://media.movieofthenight.com/services/all4/logo-light-theme.svg',
        darkThemeImage:
          'https://media.movieofthenight.com/services/all4/logo-dark-theme.svg',
        whiteImage:
          'https://media.movieofthenight.com/services/all4/logo-white.svg',
      },
      streamingOptionTypes: {
        addon: false,
        buy: false,
        rent: false,
        free: true,
        subscription: false,
      },
      addons: [],
    },
    {
      id: 'curiosity',
      name: 'Curiosity Stream',
      homePage: 'https://curiositystream.com/',
      themeColorCode: '#eea83d',
      imageSet: {
        lightThemeImage:
          'https://media.movieofthenight.com/services/curiosity/logo-light-theme.svg',
        darkThemeImage:
          'https://media.movieofthenight.com/services/curiosity/logo-dark-theme.svg',
        whiteImage:
          'https://media.movieofthenight.com/services/curiosity/logo-white.svg',
      },
      streamingOptionTypes: {
        addon: false,
        buy: false,
        rent: false,
        free: false,
        subscription: true,
      },
      addons: [],
    },
    {
      id: 'discovery',
      name: 'Discovery+',
      homePage: 'https://www.discoveryplus.com/gb',
      themeColorCode: '#e0ecfa',
      imageSet: {
        lightThemeImage:
          'https://media.movieofthenight.com/services/discovery/logo-light-theme.svg',
        darkThemeImage:
          'https://media.movieofthenight.com/services/discovery/logo-dark-theme.svg',
        whiteImage:
          'https://media.movieofthenight.com/services/discovery/logo-white.svg',
      },
      streamingOptionTypes: {
        addon: false,
        buy: false,
        rent: false,
        free: false,
        subscription: true,
      },
      addons: [],
    },
    {
      id: 'plutotv',
      name: 'Pluto TV',
      homePage: 'https://pluto.tv/',
      themeColorCode: '#fff200',
      imageSet: {
        lightThemeImage:
          'https://media.movieofthenight.com/services/plutotv/logo-light-theme.svg',
        darkThemeImage:
          'https://media.movieofthenight.com/services/plutotv/logo-dark-theme.svg',
        whiteImage:
          'https://media.movieofthenight.com/services/plutotv/logo-white.svg',
      },
      streamingOptionTypes: {
        addon: false,
        buy: false,
        rent: false,
        free: true,
        subscription: false,
      },
      addons: [],
    },
    {
      id: 'hotstar',
      name: 'Hotstar',
      homePage: 'https://www.hotstar.com/gb',
      themeColorCode: '#000000',
      imageSet: {
        lightThemeImage:
          'https://media.movieofthenight.com/services/hotstar/logo-light-theme.svg',
        darkThemeImage:
          'https://media.movieofthenight.com/services/hotstar/logo-dark-theme.svg',
        whiteImage:
          'https://media.movieofthenight.com/services/hotstar/logo-white.svg',
      },
      streamingOptionTypes: {
        addon: false,
        buy: false,
        rent: false,
        free: false,
        subscription: true,
      },
      addons: [],
    },
    {
      id: 'zee5',
      name: 'Zee5',
      homePage: 'https://www.zee5.com/global',
      themeColorCode: '#8230c6',
      imageSet: {
        lightThemeImage:
          'https://media.movieofthenight.com/services/zee5/logo-light-theme.svg',
        darkThemeImage:
          'https://media.movieofthenight.com/services/zee5/logo-dark-theme.svg',
        whiteImage:
          'https://media.movieofthenight.com/services/zee5/logo-white.svg',
      },
      streamingOptionTypes: {
        addon: false,
        buy: false,
        rent: false,
        free: false,
        subscription: true,
      },
      addons: [],
    },
  ];

  const handleChange = (e) => {
    updateAnswers(
      'services',
      e.target.checked
        ? [...prevAnswer, e.target.value]
        : prevAnswer.filter((answer) => answer !== e.target.value)
    );
  };

  return (
    <div className={styles['card-grid']}>
      {services.map(({ id, imageSet }) => (
        <CheckboxListItem
          value={id}
          key={id}
          onChange={handleChange}
          className='checkbox-card'
          image={imageSet.lightThemeImage}
          checked={prevAnswer.includes(id)}
        />
      ))}
    </div>
  );
};

export default StreamingServices;
