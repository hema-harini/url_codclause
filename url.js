async function shortURL() {
     const Url = document.getElementById("longurl").value;
     const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(Url)}`);
         if (response.ok)
            {
                const data = await response.text();
                document.getElementById('shorturl').value = data;
            }
            else {
                document.getElementById('shorturl').value = "Error shortening";
            }
        }

        document.getElementById("short").addEventListener("click", shortURL);

        document.getElementById("copy").addEventListener("click", function ()
         {
            const shortUrlInput = document.getElementById("shorturl");
            shortUrlInput.select();
            document.execCommand("copy");
        });
