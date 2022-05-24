import { Link } from "react-router-dom";
import styles from "../styles/PageNotFound.module.scss";

const PageNotFound = () => {
	return (
		<main className={styles.pageNotFoundContainer}>
			<div className={styles.pageNotFoundBox}>
				<h1>404</h1>
				<h4>
					If you can read this, it means you are not yet prepared to
					see this page’s content.
				</h4>
				<p>For your own sake, pretend this address doesn’t exist.</p>
				<Link to="/">
					{">>"} Return to safety {"<<"}
				</Link>
			</div>
		</main>
	);
};

export default PageNotFound;
