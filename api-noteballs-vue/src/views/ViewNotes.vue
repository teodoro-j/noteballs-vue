<template>
  <div class="notes">

    <div class="card has-background-grey-lighter mb-5 p-4">
        <div class="field">
          <div class="control">
            <textarea class="textarea" placeholder="Nova nota" ></textarea>
          </div>
        </div>
    
        <div class="field is-grouped is-grouped-right">
          <div class="control">
            <button class="button is-link has-background-grey-dark">
              Adicionar
            </button>
          </div>
        </div>
    </div>
    <div v-for="i in 3" v-bind:key="i" class="card mb-4">
      <!-- <header class="card-header">
        <p class="card-header-title">Título 1</p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header> -->
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor
          et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Editar</a>
        <a href="#" class="card-footer-item">Deletar</a>
      </footer>
    </div>
  </div>
</template>