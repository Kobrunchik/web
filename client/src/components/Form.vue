<template>
<div class="row">
  <form class="row g-3 gx-5 pt-1">
    <div class="col-md-6">
      <input type="text" class="form-control" placeholder="First name" aria-label="First name">
    </div>
    <div class="col-md-6">
      <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
    </div>
    <div class="col-md-6">
      <label for="inputEmail" class="form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail">
    </div>
    <div class="col-md-6">
      <label for="inputPassword" class="form-label">Password</label>
      <input type="password" class="form-control" id="inputPassword">
    </div>
    <div class="col-12">
      <label for="inputAddress" class="form-label">Address</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="Street, House number">
    </div>
    <div class="col-md-6">
      <label for="inputCity" class="form-label">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="col-md-4">
      <label for="inputDistrict" class="form-label">District</label>
      <select id="inputDistrict" class="form-select">
        <option selected>Choose...</option>
        <option>Hlavní město Praha</option>
        <option>Jihočeský kraj</option>
        <option>Jihomoravský kraj</option>
        <option>Karlovarský kraj</option>
        <option>Kraj Vysočina</option>
        <option>Královéhradecký kraj</option>
        <option>Liberecký kraj</option>
        <option>Moravskoslezský kraj</option>
        <option>Olomoucký kraj</option>
        <option>Pardubický kraj</option>
        <option>Plzeňský kraj</option>
        <option>Středočeský kraj</option>
        <option>Ústecký kraj</option>
        <option>Zlínský kraj</option>
      </select>
    </div>
    <div class="col-md-2">
      <label for="inputZip" class="form-label">Zip</label>
      <input type="text" class="form-control" id="inputZip">
    </div>
    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox"  id="gridCheck" checked/>
        <label class="form-check-label" for="gridCheck">
          Send me adds
        </label>
      </div>
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </form>
</div>

</template>

<script>
export default {
  name: "Form"
}
</script>

<style scoped>

</style>