const { JSDOM } = require('jsdom');
const htmlSnippet = `<table>
<tr>
    <!-- Row 1 with 6 avatars -->
    <td>
        <input type="radio" id="avatarInput1" name="avatarInput" value="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar1.png">
        <label for="avatarInput1"><img src="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar1.png" alt="Avatar 1" width="40px" height="40px"/></label>
    </td>
    <td>
        <input type="radio" id="avatarInput2" name="avatarInput" value="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar2.png">
        <label for="avatarInput2"><img src="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar2.png" alt="Avatar 2" width="40px" height="40px"/></label>
    </td>
    <td>
        <input type="radio" id="avatarInput3" name="avatarInput" value="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar3.png">
        <label for="avatarInput3"><img src="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar3.png" alt="Avatar 3" width="40px" height="40px"/></label>
    </td>
    <td>
        <input type="radio" id="avatarInput4" name="avatarInput" value="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar4.png">
        <label for="avatarInput4"><img src="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar4.png" alt="Avatar 4" width="40px" height="40px"/></label>
    </td>
    <td>
        <input type="radio" id="avatarInput5" name="avatarInput" value="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar5.png">
        <label for="avatarInput5"><img src="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar5.png" alt="Avatar 5" width="40px" height="40px"/></label>
    </td>
    <td>
        <input type="radio" id="avatarInput6" name="avatarInput" value="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar6.png">
        <label for="avatarInput6"><img src="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar6.png" alt="Avatar 6" width="40px" height="40px"/></label>
    </td>
</tr>
<tr>
    <!-- Row 2 with 6 avatars -->
    <td>
        <input type="radio" id="avatarInput7" name="avatarInput" value="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar7.png">
        <label for="avatarInput7"><img src="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar7.png" alt="Avatar 7" width="40px" height="40px"/></label>
    </td>
    <td>
        <input type="radio" id="avatarInput8" name="avatarInput" value="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar8.png">
        <label for="avatarInput8"><img src="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar8.png" alt="Avatar 8" width="40px" height="40px"/></label>
    </td>
    <td>
        <input type="radio" id="avatarInput9" name="avatarInput" value="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar9.png">
        <label for="avatarInput9"><img src="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar9.png" alt="Avatar 9" width="40px" height="40px"/></label>
    </td>
    <td>
        <input type="radio" id="avatarInput10" name="avatarInput" value="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar10.png">
        <label for="avatarInput10"><img src="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar10.png" alt="Avatar 10" width="40px" height="40px"/></label>
    </td>
    <td>
        <input type="radio" id="avatarInput11" name="avatarInput" value="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar11.png">
        <label for="avatarInput11"><img src="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar11.png" alt="Avatar 11" width="40px" height="40px"/></label>
    </td>
    <td>
        <input type="radio" id="avatarInput12" name="avatarInput" value="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar12.png">
        <label for="avatarInput12"><img src="https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar12.png" alt="Avatar 12" width="40px" height="40px"/></label>
    </td>
</tr>
</table>`; // Your HTML snippet goes here

describe('Avatar Selection Table Tests', () => {
  let document;

  beforeAll(() => {
    const dom = new JSDOM(htmlSnippet);
    document = dom.window.document;
  });

  test('Table should have 2 rows', () => {
    const rows = document.querySelectorAll('table tr');
    expect(rows.length).toBe(2);
  });

  test('Each row should have 6 cells', () => {
    const rows = document.querySelectorAll('table tr');
    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      expect(cells.length).toBe(6);
    });
  });

  test('Each cell should contain an input and a label with an image', () => {
    const cells = document.querySelectorAll('table td');
    cells.forEach(cell => {
      expect(cell.querySelector('input[type="radio"]')).not.toBeNull();
      expect(cell.querySelector('label')).not.toBeNull();
      expect(cell.querySelector('label img')).not.toBeNull();
    });
  });

  test('Input elements should have correct attributes', () => {
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach((input, index) => {
      expect(input.id).toBe(`avatarInput${index + 1}`);
      expect(input.name).toBe('avatarInput');
      expect(input.value).toBe(`https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar${index + 1}.png`);
    });
  });

  test('Label should correctly associate with its input', () => {
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      expect(label).not.toBeNull();
    });
  });

  test('Image elements should have correct attributes', () => {
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      expect(img.src).toBe(`https://raw.githubusercontent.com/sora1998/avatar_repo/main/avatar${index + 1}.png`);
      expect(img.alt).toBe(`Avatar ${index + 1}`);
      expect(img.getAttribute('width')).toBe('40px');
      expect(img.getAttribute('height')).toBe('40px');
    });
  });
});
