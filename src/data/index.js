import { DefaultThumbnail, Day26Thumbnail, Day27Thumbnail, Day28Thumbnail } from '../assets/thumbnail'
export const Cards = []

export const titles = [
  'Subscribe', // Day26
  'Dropdown', // Day27
  'Contact Page', // Day28
  'Map Design', // Day29
]

const descriptions = [
  "What is a person subscribing to? A streaming service, a video course, or a consultation service? Is it just a button or a widget? What type of information are you looking to capture from the user? Their name and email? Their country, state, or postal code? Age consent? Something else?", // Day26
  "Is it a menu dropdown? Or a tip that's dropped down during a tutorial? Or inside of a software tool to show more features? What extra information is displayed? The current price of gold? A login/logout button? Menu selections?", // Day27
  "Is it for customer support? A purchase inquiry? To schedule an appointment? Is it a full page or just a form? Imagine a scenario and the most important feature it would require. Contact pages are some of the most visited pages on websites so it's important to have the most critical information, but not so much that people get lost.", // Day28
  "Not one of those old school paper ones though. Actually, that might be kinda neat. What type of information should it have? Should its color scheme compliment the brand? Is it for food delivery? Or an interactive map of train stations? ", // Day29
]

const images = [
  Day26Thumbnail, // Day26
  Day27Thumbnail, // Day27
  Day28Thumbnail, // Day28
]

const defaultImage = DefaultThumbnail

for (let day = 26; day <= 50; day++) {
  const titleIndex = day - 26
  const descIndex = day - 26
  const imgIndex = day - 26

  Cards.push({
    link: `/day${day.toString().padStart(2, '0')}`, // ensures day format like '/day26', '/day27', ..., '/day50'
    day: day.toString().padStart(2, '0'), // ensures day format like '26', '27', ..., '50'
    title: titles[titleIndex] || 'Upcoming Challenge',
    desc: descriptions[descIndex] ? `Prompt: ${descriptions[descIndex]}` : 'This challenge has not yet been revealed. Stay tuned for updates!',
    img: images[imgIndex] || defaultImage, // default image path
  })
}