import ShowHide from './pages/ShowHide';
import Stopwatch from './pages/Stopwatch';
import todoApp from './pages/todoApp';
import ProgressBar from './pages/ProgressBar';
import ContactForm from './pages/ContactForm';
import MaxCount from './pages/MaxCount';
import LazyLoad from './pages/LazyLoad';
import Navigator from './pages/Navigator';
import UrlParams from './pages/UrlParams';
import WindowDimension from './pages/WindowDimension';
import ShibeApp from './pages/ShibeApp';
import CanvasApp from './pages/CanvasApp';

import CommingSoon from "./components/CommingSoon"

const apps = [
    {
      name: "Show/Hide title",
      path: "show-hide",
      link: "/show-hide",
      description: "Implement a button to show/hide the text content",
      tags: ['useState'],
      difficulty: 'Easy',
      component: ShowHide
    },
    {
      name: "Stopwatch",
      path: "stopwatch",
      link: "/stopwatch",
      description: "Implement a Stopwatch/timer as shown below with start ,stop and reset button.",
      tags: ['useState'],
      difficulty: 'Easy',
      component: Stopwatch
    },
    {
      name: "Todo List",
      path: "todo",
      link: "/todo",
      description: "Create a 'todo' app with the following criteria. The user should able to add and remove todo items.",
      tags: ['useState'],
      difficulty: 'Easy',
      component: todoApp
    },
    {
      name: "Progress Bar",
      path: "progress",
      link: "/progress",
      description: "Create a Progress Bar that should fill based on the input percentage value.",
      tags: ['useState'],
      difficulty: 'Medium',
      component: ProgressBar
    },
    {
      name: "Submit Form Data",
      path: "submit-form",
      link: "/submit-form",
      description: "Grab the values from the input fields and print below as per the sample output.",
      tags: ['useState'],
      difficulty: 'Easy',
      component: ContactForm
    },  
    {
      name: "Max Count",
      path: "max-count",
      link: "/max-count",
      description: "Implement a button and timer that will start from 10 and ends at 0 and tracks the counter until the timer expires and button should disappear once timer expires",
      tags: ['useEffect'],
      difficulty: 'Medium',
      component: MaxCount
    },     
    {
      name: "React LazyLoad",
      path: "react-lazyload",
      link: "/react-lazyload",
      description: "Use React Suspense to load components in lazy load fashion",
      tags: ['React Suspense'],
      difficulty: 'Easy',
      component: LazyLoad
    },
    {
      name: "Navigate (Imperative)",
      path: "navigate/*",
      link: "/navigate",
      description: "1.There are total three components, Main, DisplayMessage and Form. Inside the App component, creates a Route that will render the Results component when the user is at '/results. 2. Refactor the Form component so that when the user submits the form, redirect them (imperatively using navigate) to the /results page.",
      tags: ['useNavigate'],
      difficulty: 'Easy',
      component: Navigator
    },
    {
      name: "Url Parameters",
      path: "url-parameters/*",
      link: "/url-parameters",
      description: "Create two Routes so that the given navigation works. When the user navigates to /Ram, they should see 'Student: Ram'. When the user navigates to /ids/1, they should see 'Ids : 1'.",
      tags: ['useParams'],
      difficulty: 'Easy',
      component: UrlParams
    },
    {
      name: "Catch Route (404)",
      path: "catch-route",
      link: "random-link",
      description: "Handle 404 routes",
      tags: ['Error handling'],
      difficulty: 'Easy',
      component: CommingSoon
    },
    {
      name: "usePageBottom",
      path: "",
      link: "",
      description: "Create a custom Hook to detect if the user scrolled to the bottom of the page",
      tags: ['custom hooks'],
      difficulty: 'Medium',
      component: CommingSoon
    },
    {
      name: "useWindowDimensions",
      path: "use-window-dimensions",
      link: "/use-window-dimensions",
      description: "Create a custom hook to track the dimensions of users window while resizing.",
      tags: ['custom Hooks'],
      difficulty: 'Easy',
      component: WindowDimension
    },
    {
      name: "useFetch (Fetch Api)",
      path: "use-fetch",
      link: "/use-fetch",
      description: "Implement the `useFetch` function that accepts url as a parameter to instantiate api call and returns data",
      tags: ['Fetch Api'],
      difficulty: 'Medium',
      component: ShibeApp
    },
    {
      name: "useEventListener",
      path: "use-event-listener",
      link: "/use-event-listener",
      description: "Custom hook to attach event listeners to DOM elements",
      tags: ['Dom Event'],
      difficulty: 'Medium',
      component: CanvasApp
    },
    {
      name: "useDarkModeOn",
      path: "use-dark-mode-on",
      link: "/use-dark-mode-on",
      description: "Custom hook to handle dark mode state",
      tags: ['custom Hooks'],
      difficulty: 'Medium',
      component: CommingSoon
    },
    {
      name: "useOnClickOutside",
      path: "use-on-click-outside",
      link: "/use-on-click-outside",
      description: "Custom hook to handle clicks outside a specified element",
      tags: ['custom Hooks'],
      difficulty: 'Medium',
      component: CommingSoon
    },
    {
      name: "Fix the theme",
      path: "fix-theme-1",
      link: "/fix-theme-1",
      description: "Fix the theme using Context API",
      tags: ['contextApi'],
      difficulty: 'Medium',
      component: CommingSoon
    },
    {
      name: "Remove the specific button",
      path: "remove-button",
      link: "/remove-button",
      description: "Remove a specific button from an array using filter",
      tags: ['Filter Array'],
      difficulty: 'Easy',
      component: CommingSoon
    },
    {
      name: "Fix Unnecessary function calls",
      path: "fix-unnecessary-calls",
      link: "/fix-unnecessary-calls",
      description: "Debugging: Fix unnecessary function calls",
      tags: ['debugging'],
      difficulty: 'Easy',
      component: CommingSoon
    },
    {
      name: "Fix Infinite Re-Rendering",
      path: "fix-infinite-rendering",
      link: "/fix-infinite-rendering",
      description: "Debugging: Fix infinite re-rendering issue",
      tags: ['Bug'],
      difficulty: 'Easy',
      component: CommingSoon
    }
];

export default apps;
