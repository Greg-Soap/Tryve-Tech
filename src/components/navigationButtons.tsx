import { useSwiper } from 'swiper/react';
import { Button } from './ui/button';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

export default function SlideButtons() {
  const swiper = useSwiper();

  return (
    <div className="order-3 mt-7 flex items-center gap-4 px-7 md:px-14 lg:px-28">
      <Button
        onClick={() => swiper.slidePrev()}
        variant={'review'}
        size={'review'}
      >
        <ArrowLeftIcon className=" text-white" />
      </Button>
      <Button
        onClick={() => swiper.slideNext()}
        variant={'review'}
        size={'review'}
      >
        <ArrowRightIcon className=" text-white" />
      </Button>
    </div>
  );
}
