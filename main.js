
const citationsSource = [
	{
		content: 'Do one thing every day that scares you.',
		author: 'Eleanor Roosevelt',
		tags: ['sense', 'life', 'fear']
	},
	{
		content: 'Well done is better than well said.',
		author: 'Benjamin Franklin',
		tags: []
	},
	{
		content: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
		author: 'Ralph Waldo Emerson',
		tags: []
	}
]

// const citations = JSON.parse(JSON.stringify(citationsSource))
const citations = citationsSource.map(elem => JSON.stringify(elem))

// get a new citate and remove from citations array
function getRandom (list) {
  return list[Math.floor((Math.random()*list.length))];
}

function getRandomCitateAndRemove(){
	const randomItem = JSON.parse(getRandom(citations))
	const index = citations.indexOf(JSON.stringify(randomItem))
	citations.splice(index, 1)
	console.log(randomItem)
	return randomItem
}


// click event
const nextCitationBtn = document.querySelector('.next-citation-btn')
nextCitationBtn.addEventListener('click', function(event){
	if(citations.length === 0) {
		window.alert('You have seen all citations')
		return
	}
	const newCitation = getRandomCitateAndRemove()
	authorBox.innerText = newCitation.author
	contentBox.innerText = newCitation.content
})



// init executing code
const contentBox = document.querySelector('.content')
const authorBox = document.querySelector('.author')
const initCitation = getRandomCitateAndRemove()

authorBox.innerText = initCitation.author
contentBox.innerText = initCitation.content


















