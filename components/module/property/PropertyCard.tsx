

export default async function PropertyCard() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/property`)
    const property = await res.json()
    console.log(property)




  return (
    <div>
      property card
    </div>
  )
}
