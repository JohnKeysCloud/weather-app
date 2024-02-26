// * DEPENDENCIES
import { parse } from 'date-fns';

// > --------------------------------------------------------------

function formatDate(dateString, options) {
  let date = parse(dateString, 'yyyy-MM-dd', new Date());
  let dateOptions;

  if (options) {
    dateOptions = options;
  }
  else {
    dateOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
  }

  return date.toLocaleDateString('en-us', dateOptions);
}

export { formatDate };