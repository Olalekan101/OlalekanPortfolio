export const revalidate = 60;
const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN
})

type entryType ={
  entryValue:object
}

export async function Contenfull(){
    const res = await client.getEntries({content_type:"heroSection"}).
    then((entry:entryType)=>{
        return entry
    })
    const data = res.items
    return data
  
}
export async function WebSitePortifolios(){
    const res = await client.getEntries({content_type:"webSitePortifolios"}).
    then((entry:entryType)=>{
        return entry
    } )
    const data = res.items
    return data
  
}
export async function AboutSection(){
    const res = await client.getEntries({content_type:"aboutSection"}).
    then((entry:entryType)=>{
        return entry
    })
    const data = res.items
    return data
  
}

