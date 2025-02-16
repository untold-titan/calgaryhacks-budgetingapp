<!-- svelte-ignore a11y_label_has_associated_control -->
<script>
  let {callback} = $props();
</script>
<label>Province / Territory of Residence</label><br>
<select id="location" onchange={val => callback(val)}>
  <option value="AB">Alberta</option>
  <option value="BC">British Columbia</option>
  <option value="MB">Manitoba</option>
  <option value="NB">New Brunswick</option>
  <option value="NL">Newfoundland and Labrador</option>
  <option value="NT">Northwest Territories</option>
  <option value="NS">Nova Scotia</option>
  <option value="NU">Nunavut</option>
  <option value="ON">Ontario</option>
  <option value="PE">Prince Edward Island</option>
  <option value="QU">Quebec</option>
  <option value="SK">Saskatchewan</option>
  <option value="YU">Yukon</option>
</select>