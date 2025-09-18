export default function Header(){
return (
<header className="border-b bg-white/70 backdrop-blur">
<div className="container py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center
rounded-2xl bg-hj-pink">💛</span>
<span className="font-semibold">Hjertelykke Hub</span>
</div>
<nav aria-label="Hovedmeny" className="text-sm text-gray-600">
<a className="hover:underline" href="#">Hjem</a>
</nav>
</div>
</header>
)
}