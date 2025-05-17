import { useState } from 'react';
import { Button } from '@fiap-design-system/ui';
import logoLight from '../assets/image.png';

const recipes = [
  {
    title: 'Receita bolo',
    description: 'Bolo de cenoura',
    image:
      'https://imgs.search.brave.com/TNgoDPGds0ixlWL5IKt4eQvay2A2K0rrvCJ7Zs58nUc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaXRkZy5jb20u/YnIvaW1hZ2VzLzY0/MC00NDAvNmEwYjk2/NDczZTgzODY2ZDdi/MDZmMGZkYWE3MzY2/NmEvODQxODMtMzI5/NTE4LW9yaWdpbmFs/LmpwZy5qcGc',
  },
  {
    title: 'Receita pavê',
    description: 'Pavê doce',
    image:
      'https://imgs.search.brave.com/sMw55zqSvOa4JYMEq_1WppdKzdTFQLUhhD_uqWzcDjM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wYW5l/bGF0ZXJhcGlhLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wOS9yZWNlaXRh/LXBhdmUtdHJhZGlj/aW9uYWwtNzU4eDUw/NS5qcGc',
  },
  {
    title: 'Receita geleia',
    description: 'Geleia caseira',
    image:
      'https://imgs.search.brave.com/E-627Q3CdEvTjjZB0FY5dM3OsCMiiJq5hq3A9oiuZ-8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pYmFz/c2V0cy5jb20uYnIv/aWIuc3RvcmUuYmxv/Zy9ibG9nLWI0YzUx/MjI5M2ZhNTQwY2Fh/NDRkNGRjNTE4Zjkx/MTAyLmpwZWc',
  },
  {
    title: 'Receita mousse',
    description: 'Mousse de chocolate',
    image:
      'https://imgs.search.brave.com/VMJdvn11P0gQ7aoeGEn_LowjoU2EWMATbudSp-LHxLA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaXRkZy5jb20u/YnIvaW1hZ2VzLzY0/MC00NDAvOGZlZDhm/NjBkM2M4ZTM5OTAz/OTZlMjQ3OGNiYzdm/MmEvc2h1dHRlcnN0/b2NrLTE5MDU2MTc1/NzUtMS0uanBn',
  },
  {
    title: 'Receita torta',
    description: 'Torta de limão',
    image:
      'https://imgs.search.brave.com/4-Gs_XEdi3Y7rCcbq40rlaAsK679bqJKVusd4V-JHeM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaXRkZy5jb20u/YnIvaW1hZ2VzLzY0/MC00NDAvOWZkYjdj/OGYzOWEwMTU5YzU1/OWUzNmU2NjU2NzMz/MDEvMzE3NjM0LW9y/aWdpbmFsLmpwZw',
  },
  {
    title: 'Receita salada',
    description: 'Salada fresca',
    image:
      'https://imgs.search.brave.com/jwNk6LbPSN5HZ0koKV-tkr9cx52bGC3MwM4EJx8N9rQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaXRkZy5jb20u/YnIvaW1hZ2VzLzY0/MC00NDAvZDhmYTI1/NmRhMjQzMWYzNWQy/MDdjMzQ4OWUxMTk3/M2MvMzQ2MjQ0LW9y/aWdpbmFsLmpwZw',
  },
  {
    title: 'Receita arroz',
    description: 'Arroz à grega',
    image:
      'https://imgs.search.brave.com/ImFzQoqKvuZcER1KSolrcQd2YnpHVTpE8SyFM74Vtf0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaXRkZy5jb20u/YnIvaW1hZ2VzLzY0/MC00NDAvOGQ1ZmZi/N2RmNDFkZmQ5OTBj/ZTFhMjBiMWM0NWMz/NmYvc2h1dHRlcnN0/b2NrLTE4NDM3NDcx/Ni0xLS5qcGc',
  },
  {
    title: 'Receita pizza',
    description: 'Pizza caseira',
    image:
      'https://imgs.search.brave.com/2InLA928-dh-6HwH1E6Snd8HKtOv9GLmAUCzUtYM4bQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaXRkZy5jb20u/YnIvaW1hZ2VzLzY0/MC00NDAvNDdkNjU4/M2M5M2Q3N2VkYWM1/MjQ0Y2FiNjdiYTY2/MGIvMjUzNDQ3LTM3/ODIyNjc1Ni1vcmln/aW5hbC5qcGc',
  },
  {
    title: 'Receita pastel',
    description: 'Pastel de feira',
    image:
      'https://imgs.search.brave.com/ns4NdjjGXV63lhSfmBaTGyB-tKsQGIEn5UluoHau8vc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuaXRkZy5jb20u/YnIvaW1hZ2VzLzY0/MC00NDAvM2M1ZDU0/MGJlMTYzYTY5OWJi/YmZkMTJjZTlkNDRl/NGEvMzU1MDE0LW9y/aWdpbmFsLmpwZw',
  },
];

const ITEMS_PER_PAGE = 3;

export function Welcome() {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentRecipes = recipes.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const isFirstPage = currentPage === 0;
  const isLastPage = startIndex + ITEMS_PER_PAGE >= recipes.length;

  const goToPrevious = () => {
    if (!isFirstPage) setCurrentPage((prev) => prev - 1);
  };

  const goToNext = () => {
    if (!isLastPage) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className='flex flex-col items-center justify-center gap-8 w-full px-4'>
      <img
        src={logoLight}
        alt='React Router'
        className='w-24 h-24 rounded-full flex items-center justify-center'
      />

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl'>
        {/** Place here the component card*/}
        {currentRecipes.map((recipe, idx) => (
          <div
            key={idx}
            className='border-2 border-violet-500 rounded-lg p-4 flex flex-col items-center'
          >
            <h2 className='font-bold text-lg'>{recipe.title}</h2>
            <p className='text-sm text-gray-600 mb-4'>{recipe.description}</p>
            <img
              src={recipe.image}
              alt={recipe.title}
              className='w-full h-48 object-cover rounded-md'
            />
          </div>
        ))}
      </div>

      <div className='flex gap-4'>
        <Button
          children='Anterior'
          variant={isFirstPage ? 'tertiary': 'secondary'}
          onClick={goToPrevious}
          disabled={isFirstPage}
        />
        <Button
          children='Próximo'
          variant={isLastPage ? 'tertiary' : 'primary'}
          onClick={goToNext}
          disabled={isLastPage}
        />
      </div>
    </div>
  );
}
