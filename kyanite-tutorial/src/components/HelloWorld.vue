<template>
  <div>
    <div class="container">
      <h2>Kyanite.{{method}}</h2>
      <section class="container border border-dashed border-dark my-5 py-3">
        <div>
          <h4>What does it do</h4>
          <p>{{description}}</p>
        </div>

        <div>
          <h4>Syntax</h4>
          <blockquote>{{syntax}}</blockquote>
        </div>
        <p>
          Documentation at
          <a
            href="https://kyanite.dusty.codes/functions.html#add"
          >https://kyanite.dusty.codes</a>
        </p>
      </section>

      <div class="container">
        <h4>Examples</h4>
        <p>To edit the code and see how it changes, click "Edit on Codepen" in the upper-right hand corner.</p>
        <p
          data-height="409"
          data-theme-id="dark"
          data-slug-hash="RqOpwR"
          data-default-tab="js,result"
          data-user="hamidyou"
          data-pen-title="Kyanite Tutorial Demos"
          class="codepen"
        >
          See the Pen
          <a href="https://codepen.io/hamidyou/pen/RqOpwR/">Kyanite Tutorial Demos</a> by hamidyou (
          <a href="https://codepen.io/hamidyou">@hamidyou</a>) on
          <a href="https://codepen.io">CodePen</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      method: "add()",
      description:
        "Kyanite.add() is a simple, curried adder function.It takes 2 arguments, both of which need to be numbers.",
      syntax: "k.add(a, b) => a + b"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

blockquote {
  background-color: lightgrey;
  border: 2px inset grey;
  padding: 0.5rem;
  width: max-content;
  margin: 1rem auto;
}

/* .param-return ul li {
  margin: 2px auto;
  padding: 2px 0;
} */
</style>
