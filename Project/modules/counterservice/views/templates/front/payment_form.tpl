{if isset($errors) && $errors}
    <div class="alert alert-danger">
        <ul>
            {foreach from=$errors item=error}
                <li>{$error}</li>
            {/foreach}
        </ul>
    </div>
{/if}
<p>
    <img src="https://barcode-list.com/barcodeImage.php?barcode=5010415333162" alt="QR Code" style="width: 300px; height: auto;">
</p>
