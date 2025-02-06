export default function ProductLayout ({children}: {children: React.ReactNode}) {
return <>
<div>
  {children}
  <div>Products section</div>
  </div>
  </>
}