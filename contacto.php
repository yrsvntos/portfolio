<?php include "templates/header.php";?>

<section id="contacto">
    <div class="container">
        <div class="py-5">
            <div class="col-12">
                <h1 class="fw-bold verde">Contacto.</h1>
                <p class="my-3 fw-ligth">Entre em contacto comigo através do formulário ou pode enviar um e-mail para <a href="#" class="verde">yrsvntos@gmail.com</a>.</p>
                <form action="enviar.php" method="POST">
                    <div class="form-group">
                        <label for="nome">Nome *</label>
                        <input type="text" id="nome" name="nome" required>
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="assunto">Assunto *</label>
                        <input type="text" id="assunto" name="assunto" required>
                    </div>
                    <div class="form-group">
                        <label for="mensagem">Mensagem *</label>
                        <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
                    </div>
                    <div class="col-md-4">
                        <button type="submit">Enviar</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
</section>



<?php include "templates/footer.php";?>