import styles from "./styles.module.css";
import FlipCard1 from "../FlipCard1";
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<center><h1>Service Management System</h1></center>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<FlipCard1></FlipCard1>
		</div>
	);
};

export default Main;
