import clsx from "clsx";
import { getCategoriesList } from "@/api/categories";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Search } from "@/ui/atoms/Search";

const linkClassName = clsx(`text-blue-400 hover:text-blue-600`);

export const Navigation = async () => {
	const categories = await getCategoriesList();

	return (
		<nav>
			<div className="flex justify-between p-12">
				<ul className="flex justify-center space-x-4">
					<li>
						<ActiveLink exact className={linkClassName} activeClassName="active" href={"/"}>
							Home
						</ActiveLink>
					</li>
					<li>
						<ActiveLink
							exact={false}
							className={linkClassName}
							activeClassName="active"
							href={"/products"}
						>
							All
						</ActiveLink>
					</li>
					<li>
						<ActiveLink
							exact={false}
							className={linkClassName}
							activeClassName="active"
							href={"/collections/"}
						>
							Collections
						</ActiveLink>
					</li>

					{categories.map((category) => (
						<li key={category.name}>
							<ActiveLink
								exact={false}
								className={linkClassName}
								activeClassName="active"
								href={`/categories/${category.name.toLowerCase()}`}
							>
								{category.name}
							</ActiveLink>
						</li>
					))}
				</ul>
				<div>
					<Search />
				</div>
			</div>
		</nav>
	);
};
