const verses = [
    'The fear of the lord is the beginning of wisdom. - Proverbs 1:7',
    'A wise man will hear and increase in learning. - Proverbs 1:5',
    'Trust in the Lord with all your heart, and lean not on your own understanding. - Proverbs 3:5',
    'In all your ways acknowledge Him, and He will make your paths straight. - Proverbs 3:6',
    'Do not be wise in your own eyes; fear the Lord and shun evil. - Proverbs 3:7',
    'The Lord gives wisdom; from His mouth come knowledge and understanding. - Proverbs 2:6',
    'For the Lord gives wisdom; from His mouth come knowledge and understanding. - Proverbs 2:6',
    'Pride goes before destruction, a haughty spirit before a fall. - Proverbs 16:18',
    'He who is slow to anger has great understanding, but he who is quick-tempered exalts folly. - Proverbs 14:29',
    'A gentle answer turns away wrath, but a harsh word stirs up anger. - Proverbs 15:1',
    'The way of a fool seems right to him, but the wise listen to advice. - Proverbs 12:15',
    'Whoever walks with the wise becomes wise, but the companion of fools suffers harm. - Proverbs 13:20',
    'As iron sharpens iron, so one person sharpens another. - Proverbs 27:17',
    'A fool gives full vent to his anger, but a wise man keeps himself under control. - Proverbs 29:11',
    'The rich rule over the poor, and the borrower is servant to the lender. - Proverbs 22:7',
    'A cheerful heart is good medicine, but a crushed spirit dries up the bones. - Proverbs 17:22',
    'Commit to the Lord whatever you do, and He will establish your plans. - Proverbs 16:3'
]

const button = document.querySelector('button');
const verseDisplay = document.getElementById('verse-display');

const getRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * verses.length)
    const randomVerses = verses[randomIndex];
    verseDisplay.textContent = randomVerses;
}

button.addEventListener('click', function() {
    console.log(getRandomVerse());
});

