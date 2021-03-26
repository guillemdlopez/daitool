import { closeSidebar } from './javascript/closeSidebar';
import { initScroll } from './javascript/initScroll';
import { initSidebar } from './javascript/initSidebar';
import { initSlider } from './javascript/initSlider';
import { modalNewsletter } from './javascript/modalNewsletter';
import { scrollToEmailInput } from './javascript/scrollToEmailInput';
import { showDescriptionCategory } from './javascript/showDescriptionCategory';
import { showHideSubCategories } from './javascript/showHideSubcategories';

import './style/stylesheets/index.scss';

showHideSubCategories();
initSlider();
initScroll();
modalNewsletter();
showDescriptionCategory();
initSidebar();
closeSidebar();
scrollToEmailInput();
