function generatePassword() {
         const length = parseInt(document.getElementById('length').value);
         const includeUppercase = document.querySelector('input[name="uppercase"]').checked;
         const includeLowercase = document.querySelector('input[name="lowercase"]').checked;
         const includeNumbers = document.querySelector('input[name="numbers"]').checked;
         const includeSpecial = document.querySelector('input[name="special"]').checked;

         if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecial) {
             alert('Please select at least one character type.');
             document.getElementById('passwordOutput').textContent = '';
             return;
         }

         if (length < 4 || length > 50) {
             alert('Password length must be between 4 and 50.');
             document.getElementById('passwordOutput').textContent = '';
             return;
         }

         const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
         const lowercase = 'abcdefghijklmnopqrstuvwxyz';
         const numbers = '0123456789';
         const special = '!@#$%^&*()_+-=[]{}|;:,.<>?';
         let characters = '';

         if (includeUppercase) characters += uppercase;
         if (includeLowercase) characters += lowercase;
         if (includeNumbers) characters += numbers;
         if (includeSpecial) characters += special;

         let password = '';
         for (let i = 0; i < length; i++) {
             const randomIndex = Math.floor(Math.random() * characters.length);
             password += characters[randomIndex];
         }

         document.getElementById('passwordOutput').textContent = password;
     }