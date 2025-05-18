import { useState } from 'react';
import { Button, Card } from '@fiap-design-system/ui';
import logoLight from '../assets/image.png';
import { recipes } from '../constants/recipes';
import { ITEMS_PER_PAGE } from '../constants/recipesPerPage';

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
        alt='Flapp logo'
        className='w-24 h-24 rounded-full flex items-center justify-center'
      />

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl'>
        {currentRecipes.map((recipe, idx) => (
          <Card
            key={idx}
            title={recipe.title}
            subtitle={recipe.description}
            imageUrl={recipe.image}
            imageAltText={recipe.title}
          />
        ))}
      </div>

      <div className='flex gap-4'>
        <Button
          variant={isFirstPage ? 'tertiary' : 'secondary'}
          onClick={goToPrevious}
          disabled={isFirstPage}
        >
          Anterior
        </Button>
        <Button
          variant={isLastPage ? 'tertiary' : 'primary'}
          onClick={goToNext}
          disabled={isLastPage}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
}
