import { DefaultThumbnail, Day26Thumbnail } from '../assets/thumbnail'
export const Cards = []

export const titles = [
  'Subscribe', // Day26
]

const descriptions = [
  "What is a person subscribing to? A streaming service, a video course, or a consultation service? Is it just a button or a widget? What type of information are you looking to capture from the user? Their name and email? Their country, state, or postal code? Age consent? Something else?", // Day26
]

const images = [
  Day26Thumbnail, // Day26
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