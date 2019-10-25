var AWS = require("aws-sdk");
AWS.config.update({region: 'us-east-1'});

s3 = new AWS.S3()


let getItems = async function(bucketName) {
    const params = {
        Bucket: bucketName,
        MaxKeys: 2
    }
    let result = {
        BucketName: bucketName,
        Keys: []
    }

    resp = s3.listObjects(params).promise()
    resp.then((data) => {
        console.log(data.Contents[0].Keys)
    })


    // [
    //     Promise {
    //       { BucketName: '640510172290.us-west-2.sam.code', Keys: [] }
    //     },
    //     Promise { { BucketName: 'aws-nuke-ec2-operations', Keys: [] } },
    //     Promise { { BucketName: 'sstk-gs-test-logs', Keys: [] } },
    //     Promise { { BucketName: 'sstk-skillfeed-cloudtrail', Keys: [] } },
    //     Promise {
    //       { BucketName: 'sstk-test-cloudtail-all-accounts', Keys: [] }
    //     }
    //   ]

    // result.Keys = await s3.listObjects(params).promise().then(
    //     (data) => {
    //         keys = []
    //         data.Contents.forEach(key => {
    //             keys.push(key.Key)
    //         })
    //         return keys
    //     },
    //     (err) => {
    //         if (err) {
    //             console.log(err, err.stack)
    //             return []
    //         }
    //     })
    return result
}



s3.listBuckets(function (err, data) {
    if (err) {
        console.log("Error", err)
    } else {
        //console.log(data['Buckets'])
        let g = data.Buckets.map(bucket => {
            //console.log(bucket.Name)
            let i = getItems(bucket.Name)
            //console.log(i)
            return i
        })
        console.log(g)
    }
})