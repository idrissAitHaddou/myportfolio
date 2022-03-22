
<template>
 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>home</title>
 </head>
 <body>


                    <!-- ----------------------------------------------------------------------- -->


                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">New contact</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label">Email :</label>
                                    <input type="email" class="form-control" id="recipient-name">
                                </div>
                                <div class="mb-3">
                                    <label for="message-text" class="col-form-label">Message :</label>
                                    <textarea class="form-control" id="message-text"></textarea>
                                </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn text-white btn-sendEmail">Send message</button>
                            </div>
                            </div>
                        </div>
                        </div>


                    <!-- ----------------------------------------------------------------------------- -->
     

     <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container">
                <a class="navbar-brand text-white" href="#"><img src="../assets/images/logo.png" alt=""></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 w-50" style="--bs-scroll-height: 100px;">
                    <li class="nav-item">
                        <router-link  to="/" class="nav-link text-white active" aria-current="page">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-white active" to="/">Portfolio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-white" to="/">Contact</router-link>
                        <!-- tabindex="-1" aria-disabled="true" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" -->
                    </li>
                </ul>
                <form class="d-flex">
                    <router-link class="btn btn-contact text-white" to="/">Downlod cv</router-link>
                </form>
                </div>
            </div>
        </nav>
     </header>


     <router-view/> 


 </body>
 </html>
</template>

<script>

export default {
    name:'Navbar'
}

</script>

<style>
   @import '../assets/style/navbar.css'
</style>