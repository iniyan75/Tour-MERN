import { AiOutlineSearch } from 'react-icons/ai'
import { Outlet, Link } from "react-router-dom";
import '../css/destin.scss'
import '../css/destination.css'
export default function Destinations() {
	return (
		<div>
			<section class="dark">
				<div class="container py-4">
					<h1 class="h1 text-center" style={{ color: 'white' }} id="pageHeaderTitle">Top Destinations</h1>

					<article class="postcard dark blue">
						<a class="postcard__img_link" href="#">
							<img class="postcard__img" src="https://images.pexels.com/photos/12035356/pexels-photo-12035356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image Title" />
						</a>
						<div class="postcard__text">
							<h1 class="postcard__title blue"><a href="#">MUNNAR</a></h1>
							<div class="postcard__subtitle small">
								<time datetime="2020-05-25 12:00:00">
									<i class="fas fa-calendar-alt mr-2"></i>ALL TIME
								</time>
							</div>
							<div class="postcard__bar"></div>
							<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
							<ul class="postcard__tagbox">
								<Link to={`/explore/636123156cb6d9edd1201e5b`}><button class="btn btn-primary">CLick here to explore</button></Link>
							</ul>
						</div>
					</article>
					<article class="postcard dark red">
						<a class="postcard__img_link" href="#">
							<img class="postcard__img" src="https://images.pexels.com/photos/3574440/pexels-photo-3574440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image Title" />
						</a>
						<div class="postcard__text">
							<h1 class="postcard__title red"><a href="#">Shimla</a></h1>
							<div class="postcard__subtitle small">
								<time datetime="2020-05-25 12:00:00">
									<i class="fas fa-calendar-alt mr-2"></i>ALL TIME
								</time>
							</div>
							<div class="postcard__bar"></div>
							<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
							<ul class="postcard__tagbox">
								<Link to={`/explore/636140c29766fa1d74e76d3f`}><button class="btn btn-primary">CLick here to explore</button></Link>
							</ul>
						</div>
					</article>
					<article class="postcard dark green">
						<a class="postcard__img_link" href="#">
							<img class="postcard__img" src="https://images.pexels.com/photos/4428289/pexels-photo-4428289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image Title" />
						</a>
						<div class="postcard__text">
							<h1 class="postcard__title green"><a href="#">Goa</a></h1>
							<div class="postcard__subtitle small">
								<time datetime="2020-05-25 12:00:00">
									<i class="fas fa-calendar-alt mr-2"></i>ALL TIME
								</time>
							</div>
							<div class="postcard__bar"></div>
							<div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
							<ul class="postcard__tagbox">
								<Link to={`/explore/636140c29766fa1d74e76d3f`}><button class="btn btn-primary">CLick here to explore</button></Link>
							</ul>
						</div>
					</article>

				</div>
			</section>

		</div>

	)
}