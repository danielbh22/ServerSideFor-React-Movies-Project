const Member = require('./memberModel');

exports.getAllMembers = () =>
{
    return new Promise((resolve,reject) =>
    {
        Member.find({}, function(err, members)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(members);
            }
        })
    })
}

exports.getMember = (id) =>
{
    return new Promise((resolve,reject) =>
    {
        Member.findById(id, function(err, member)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(member);
            }
        })
    })
}

exports.addMember = function(member)
{
    return new Promise((resolve,reject) =>
    {
        const newMember = new Member({
            name : member.name,
            email : member.email,
            city : member.city
        });
    
        newMember.save(function(err)
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

exports.updateMember = function(id,member)
{
    return new Promise((resolve,reject) =>
    {
        Member.findByIdAndUpdate(id,
            {
                name : member.name,
                email : member.email,
                city : member.city

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

exports.deleteMember = function(id)
{
    return new Promise((resolve,reject) =>
    {
        Member.findByIdAndDelete(id,function(err)
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