<div class="<?php print $classes; ?> <?php print $block_html_id; ?>"><div><div>

  <?php print render($title_prefix); ?>
<?php if ($block->subject): ?>
  <h2<?php print $title_attributes; ?>><?php print $block->subject ?></h2>
<?php endif;?>
  <?php print render($title_suffix); ?>

  <div class="block-content"<?php print $content_attributes; ?>>
    <?php print $content ?>
  </div>
</div></div></div>
