const Subscription = require('./subscriptionModel');

exports.getAllSubscriptions = () =>
{
    return new Promise((resolve,reject) =>
    {
        Subscription.find({}, function(err, subs)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(subs);
            }
        })
    })
}

exports.getSubscription = (id) =>
{
    return new Promise((resolve,reject) =>
    {
        Subscription.findById(id, function(err, sub)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(sub);
            }
        })
    })
}

exports.addSubscription = function(sub)
{
    return new Promise((resolve,reject) =>
    {
        const newSubscription = new Subscription({
            movieid : sub.movieid,
            memberid : sub.memberid,
            date : sub.date
        });
    
        newSubscription.save(function(err)
        {
            if(err)
            {
               
                reject(err)
            }
            else
            {
                resolve('Created')
            }
        })
    }) 
}

exports.updateSubscription = function(id,sub)
{
    return new Promise((resolve,reject) =>
    {
        Subscription.findByIdAndUpdate(id,
            {
                movieid : sub.movieid,
                memberid : sub.memberid,
                date : sub.date

            }, function(err)
            {
                if(err)
                {
                   
                    reject(err)
                }
                else
                {
                    resolve('Updated')
                }
            })
    })
} 

exports.deleteSubscription = function(id)
{
    return new Promise((resolve,reject) =>
    {
        Subscription.findByIdAndDelete(id,function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('Deleted')
                }
            })
    })
} 