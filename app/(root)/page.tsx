import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
	const loggedIn = { firstName: 'Maxim' }

	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn?.firstName || 'Guest'}
						subText="Access and manage your account and transactions efficiently."
					/>

					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1250.35}
					/>
				</header>
				{/*Тут остановился*/}
				RECENT TRANSACTIONS
			</div>
		</section>
	)
}

export default Home