
const friendsList = [
	{
		name: 'Steve',
		photo: 'http://myathleticlife.com/wp-content/uploads/2012/10/Steve-Prefontaine.jpg',
		scores: [3,3,3,3,3,3,3,3,3,3]
	},
	{
		name: 'Mo',
		photo: 'http://www.telegraph.co.uk/content/dam/olympics/2016/08/12/104553731_Mo-Farah-SPORT-large_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwZfGRGFEsUyv6w-IWeUf94I.jpg',
		scores: [5,5,5,5,5,5,5,5,5,5]
	},
	{
		name: 'Nick',
		photo: 'http://www.runnersworld.com/sites/runnersworld.com/files/styles/article_main_custom_user_desktop_1x/public/articles/2016/05/symmonds2015usas.jpg?itok=b52RmddX&timestamp=1483652187',
		scores: [1,1,1,1,1,1,1,1,1,1]
	},
	{
		name: 'Anton',
		photo: 'https://www.petzl.com/sfc/servlet.shepherd/version/download/068w0000002EvxMAAS',
		scores: [5,4,3,2,1,5,4,3,2,1]
	},
	{
		name: 'Jim',
		photo: 'http://www.kansas.com/latest-news/yxncny/picture912100/alternates/FREE_1140/GVN2DCOFI.4MBR',
		scores: [1,2,3,4,5,1,2,3,4,5]
	},
	{
		name: 'Alan',
		photo: 'http://athleticlab.com/wp-content/uploads/2015/03/alanwebb.jpg',
		scores: [1,3,5,2,4,4,2,4,3,1]
	}
]
const compatibility = (arr1, arr2) => {
  return arr1.map((e,i) => Math.abs(e - arr2[i]))
  .reduce((sum, val) => sum += val)
}

const findMatch = newSet => {
	const comps = friendsList.map(e => compatibility(newSet, e.scores))
	return friendsList[comps.indexOf(Math.min(...comps))]
}

const addToList = newFriend => friendsList.push(newFriend);

module.exports = {
	list: friendsList,
	findMatch,
	addToList
}



// Note how we export the array. This makes it accessible to other files using require.
// module.exports = {

// 	friendList;

// };