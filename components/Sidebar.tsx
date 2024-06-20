'use client'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Sidebar = ({ user }: SiderbarProps) => {
	const pathname = usePathname()
	return (
		<section className="sidebar">
			<nav className="flex flex-col gap-4">
				<Link href="/" className="flex mb-12 cursor-pointer items-center gap-2">
					<Image
						src="/icons/logo.svg"
						width={34} height={34}
						alt="Horizon Logo"
						className="size-[24px] max-xl:size-14"
					/>
					<h1 className="sidebar-logo">Horizon</h1>
				</Link>

				{sidebarLinks.map(i => {
					const isActive = pathname === i.route || pathname.startsWith(`${i.route}/`)
					return (
						<Link
							href={i.route}
							key={i.label}
							className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
						>
							<div className="relative size-6">
								<Image
									src={i.imgURL}
									alt={i.label}
									fill
									className={cn({
										'brightness-[3] invert-0': isActive
									})}
								/>
							</div>
							<p className={cn('sidebar-label', {
								'!text-white': isActive
							})}>
								{i.label}
							</p>
						</Link>
					)
				})}
				USER
			</nav>

			FOOTER
		</section>
	)
}

export default Sidebar