<?php include "templates/header.php";?>
<section id="single-bread" class="bg-grey">
	<div class="container">
		<div class="py-3">
			<nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
				<ul class="breadcrumb">
					<li class="breadcrumb-item"><a href="https://ciecc.ac.mz/"><i class="fa-solid fa-house text-black"></i></a></li>
					<li class="breadcrumb-item"><a href="https://ciecc.ac.mz/noticias/" class="text-black">Projectos</a></li>
					<li class="breadcrumb-item" aria-current="page">Projecto 002</li>
				</ul>
			</nav>
		</div>
		
	</div>
</section>
<section id="blog-single">
	<div class="container py-5">
		<div class="row">
			<div class="col-md-9">
				<h1 class="fw-bold"><?php echo the_title();?></h1>
				<div class="blog-content">
					<p><?php echo the_content();?></p>
				</div>
				<div class="categoria-da-noticia">
					<?php
						$categories = get_the_category();
						$output ='';

						if($categories){
							foreach($categories as $category){
								$output .= '<div class="link">
									<a href="'.get_category_link($category->term_id).'" data-bs-toggle="tooltip" data-bs-placement="bottom"  title="" class="link-primary"><b class="me-2 text-black">Categoria:</b>#'.$category->cat_name.'</a>

								</div>';
							}
						}

						echo trim($output);
					?>
				</div>

				<div class="share my-4">
					<p><b>Partilhe este projecto em:</b></p>
					<div class="share-social">
						
						<!-- Whatsapp -->
						<a data-mdb-ripple-init class="btn btn-mechanical text-white" style="background-color: #25d366;" href="https://api.whatsapp.com/send?text=<?php the_permalink(); ?>" role="button"
						  ><i class="fab fa-whatsapp"></i
						></a>

						<!-- Google -->
						<a data-mdb-ripple-init class="btn btn-mechanical text-white mx-2" style="background-color: #dd4b39;" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su='<?php the_title(); ?>'&body='Veja a notícia completa em: <?php the_permalink(); ?>'&ui=2&tf=1&pli=1" role="button"
						  ><i class="fas fa-envelope"></i
						></a>
						
						
						<button class="btn btn-azul-secundario share-btn me-2" onclick="copiarLink()">📋 Copiar link</button>
					</div>
				</div>

				<div class="border-bottom"></div>

			</div>
			<div class="col-md-3">
				<div class="noticias-recentes mb-3 bg-grey p-4 rounded">
					<div class="noticias-header">
						<h3 class="fw-bold">
							Últimos projectos
						</h3>
					</div>
					<div class="noticias-lista">
						<?php 

							$args = array( 'post_type' => 'post', 'posts_per_page' => 6);
							$loop = new WP_Query( $args );
							while ( $loop->have_posts() ) : $loop->the_post();


							$string = the_title('','',false);
							if (strlen($string) > 25) {
								$stringCut = substr($string, 0, 15);// change 15 top what ever text length you want to show.
								$endPoint = strrpos($stringCut, ' ');
								$string = $endPoint? substr($stringCut, 0, $endPoint):substr($stringCut, 0);
								$string .= ' [...]';
							}
							
						?>
						<div class="borda-inferior">
							<a href="<?php the_permalink() ?>" class="text-black"><?php echo the_title();?></a>
							
						</div>
						<?php

						endwhile;

						?>
							
					</div>
				</div>
				<div class="categorias mt-5 bg-grey p-4 rounded ">
					<div class="categorias-header mb-2">
						<h3 class="fw-bold">Categorias</h3>
					</div>
					<div class="categorias-lista">
						<ul class="list-group">
							<?php
								$categorias = get_categories();

								foreach ($categorias as $categoria) {
									echo '<div class=" borda-inferior d-flex justify-content-between align-items-center">';
									echo '<a href="' . esc_url(get_category_link($categoria->term_id)) . '" class="text-black">' . esc_html($categoria->name) . '</a>';
									echo '<span class="badge text-bg-secondary">' . esc_html($categoria->count) . '</span>';
									echo '</div>';
								}
							?>
						</ul>
					</div>
					
				</div>
				<div class="noticias-newsletter mt-5 rounded">
					<h3 class="fw-bold">Newsletter</h3>
					<p>Subscreva-se na nossa newsletter gratuitamente e seja notificado sobre novos artigos assim que forem publicados.</p>
					<?php 
						if(is_active_sidebar('sidebar-3')) {
							dynamic_sidebar('sidebar-3');
						}
					?>
				</div>
				
			</div>

		</div>
	</div>
</section>

<!-- Script para copiar o link -->
<script>
  function copiarLink() {
    const link = window.location.href;
    navigator.clipboard.writeText(link).then(() => {
      alert("Link copiado para a área de transferência!");
    });
  }
</script>



<?php include "templates/footer.php";?>