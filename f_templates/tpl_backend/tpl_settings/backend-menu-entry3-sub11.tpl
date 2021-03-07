	<div class="wdmax" id="ct-wrapper">
	<form id="ct-set-form" action="">
	    <div class="wdmax top-bottom-padding left-float">
		<div class="sortings">{include file="tpl_backend/tpl_settings/ct-save-top.tpl"}</div>
		<div class="page-actions">{include file="tpl_backend/tpl_settings/ct-save-open-close.tpl"}</div>
	    </div>
	    <div class="clearfix"></div>
	    <div class="vs-column half vs-mask">
	    {generate_html bullet_id="ct-bullet2" input_type="file_backup" entry_title="backend.menu.entry6.sub11.file.bk" entry_id="ct-entry-details2" input_name="" input_value="" bb=0}
	    </div>
	    <div class="vs-column half fit vs-mask">
	    {generate_html bullet_id="ct-bullet1" input_type="database_backup" entry_title="backend.menu.entry6.sub11.db.bk" entry_id="ct-entry-details1" input_name="" input_value="" bb=1}
	    </div>
	    <div class="clearfix"></div>

	    <div class="wdmax top-bottom-padding left-float">
		<div class="sortings left-half">{include file="tpl_backend/tpl_settings/ct-save-top.tpl"}</div>
		<div class="page-actions">{include file="tpl_backend/tpl_settings/ct-keep-open.tpl"}</div>
	    </div>
	    <input type="hidden" name="ct_entry" id="ct_entry" value="" />
	</form>
	</div>
	{include file="tpl_backend/tpl_settings/ct-switch-js.tpl"}
        <script type="text/javascript">{include file="f_scripts/be/js/settings-accordion.js"}</script>
	<script type="text/javascript">
	{literal}
	$(document).ready(function(){
	    $(".backup-db").click(function(){
		var the_url = current_url + menu_section + "?s=backend-menu-entry3-sub11&do=backup-db";
		var the_form = "#ct-set-form";
		var trg	= "bkp-db";
		postLoad(the_url, the_form, trg)
	    });
	    $(".backup-db-remove").click(function(){
		var file_id = $(this).attr("id");
		$("#backup-db-id").val(file_id);
		var the_url = current_url + menu_section + "?s=backend-menu-entry3-sub11&do=backup-db-remove";
		var the_form = "#ct-set-form";
		var trg	= "bkp-db";
		postLoad(the_url, the_form, trg)
	    });
	    $(".backup-file").click(function(){
		var the_url = current_url + menu_section + "?s=backend-menu-entry3-sub11&do=backup-file";
		var the_form = "#ct-set-form";
		var trg	= "bkp-db";
		postLoad(the_url, the_form, trg)
	    });
	    $(".backup-file-remove").click(function(){
		var file_id = $(this).attr("id");
		$("#backup-file-id").val(file_id);
		var the_url = current_url + menu_section + "?s=backend-menu-entry3-sub11&do=backup-file-remove";
		var the_form = "#ct-set-form";
		var trg	= "bkp-db";
		postLoad(the_url, the_form, trg)
	    });

                $('.icheck-box input').each(function () {
                        var self = $(this);
                        self.iCheck({
                                checkboxClass: 'icheckbox_square-blue',
                                radioClass: 'iradio_square-blue',
                                increaseArea: '20%'
                                
                        });
                });
        });
        {/literal}
        </script>
