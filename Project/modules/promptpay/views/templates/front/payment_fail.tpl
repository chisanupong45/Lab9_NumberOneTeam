{if isset($errors)}
    <div class="alert alert-danger">
        <ul>
            {foreach from=$errors item=error}
                <li>{$error}</li>
            {/foreach}
        </ul>
    </div>
{/if}

{if isset($paymentFail)}
    <script>
        alert('โปรดอัพโหลดสลิปที่ถูกต้อง');
        window.location.href = 'index.php?controller=order&step=3';
    </script>
{/if}

{if isset($noUploadSlip)}
    <script>
        alert('โปรดอัพโหลดสลิป');
        window.location.href = 'index.php?controller=order&step=3';
    </script>
{/if}

{if isset($paymentSuccess)}
    <script>
        alert('Payment successful!');
    </script>
{/if}