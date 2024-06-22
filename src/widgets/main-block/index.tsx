import React, { FC } from 'react';

interface MainBlockInterface {
  locale?: string;
}

const MainBlock: FC<MainBlockInterface> = ({ locale }) => {
  const data = new Map();
  data.set('en', {
    title: (
      <p
        className={
          'md:text-xl md:text-left text-sm text-center font-extrabold'
        }>
        Thank you for your interest
        <br />
        in the world of pediatric dermatology!
      </p>
    ),
    description: (
      <p className={'md:text-md md:text-left text-center text-xs'}>
        All the most relevant and up-to-date articles <br />
        will now be available to you every day.
      </p>
    ),
  });
  data.set('fr', {
    title: (
      <p
        className={
          'md:text-xl md:text-left text-sm text-center font-extrabold'
        }>
        Merci de votre intérêt pour le monde
        <br />
        de la dermatologie pédiatrique !
      </p>
    ),
    description: (
      <p className={'md:text-md md:text-left text-center text-xs'}>
        Tous les articles les plus pertinents et les plus <br />
        récents seront désormais disponibles pour vous chaque jour.
      </p>
    ),
  });

  const pageData = data.get(locale);

  return (
    <div
      className={
        'w-full md:px-8 px-2 py-2 md:py-10 font-inter text-white rounded-3xl bg-black relative overflow-hidden bg-opacity-[0.15]'
      }>
      <div className={'flex w-full flex-col items-center md:items-start gap-2'}>
        <img
          className={'w-1/2 flex md:hidden'}
          src={'/images/logo_square.png'}
        />
        {pageData.title}
        {pageData.description}
      </div>
      <img
        className={'absolute hidden md:flex h-full right-0 top-0'}
        src={'/images/child.png'}
      />
    </div>
  );
};

export default MainBlock;
