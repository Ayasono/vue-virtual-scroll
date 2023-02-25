import mock from 'mockjs'

export default function generateNews (num) {
	return mock.mock({
		[`list|${num}`]: [{
			'id|1': 1,
			title: '@ctitle(15, 25)',
			image: '@natural(0,15)',
			reads: '@natural(0, 99999)',
			from: 'ctitle(3, 10)',
			date: '@date("yyyy-MM-dd")'
		}]
	})
}
