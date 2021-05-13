const baseUrl = "http://1.15.157.130";

export function myRequestGet(url, data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			method: "GET",
			header: {
				'Content-Type': 'application/X-WWW-form-urlencoded'
			},
			data: data,
			success: function(res) {
				resolve(res.data)
			},
			fail: function(err) {
				reject(err)
			}
		})
	})
}


export function myRequestPOST(url, data) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + url,
			method: "POST",
			header: {
				'Content-Type': 'application/X-WWW-form-urlencoded'
			},
			data: data,
			success: function(res) {
				resolve(res.data)
			},
			fail: function(err) {
				reject(err)
			}
		})
	})
}

//
