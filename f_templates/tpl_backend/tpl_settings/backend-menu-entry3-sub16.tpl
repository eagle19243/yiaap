	<script type="text/javascript">{include file="f_scripts/be/js/settings-accordion.js"}</script>
	<div class="left-float wdmax entry-list" id="ct-wrapper">
            <div class="section-top-bar{if $smarty.get.do eq "add"}-add{else} vs-maskx{/if} left-float top-bottom-padding">
                <div class="sortings">{include file="tpl_backend/tpl_settings/ct-save-top.tpl"}{include file="tpl_backend/tpl_settings/ct-cancel-top.tpl"}</div>
                <div class="page-actions">
                	{include file="tpl_backend/tpl_settings/ct-save-open-close.tpl"}
                	<div class="search-hold">
                		{if $smarty.get.do ne "add"}{include file="tpl_frontend/tpl_file/tpl_search_inner_be.tpl"}{/if}
                	</div>
                </div>
                <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
            
            <div class="vs-mask">{generate_html type="be_xfer_audio" bullet_id="ct-bullet1" entry_id="ct-entry-details1" bb=1}</div>
            
            {if $smarty.get.do eq "add"}
            <div class="clearfix"></div>
            <div class="section-bottom-bar{if $smarty.get.do eq "add"}-add{else} vs-maskx{/if} left-float top-bottom-padding">
                <div class="clearfix"></div>
                {include file="tpl_backend/tpl_settings/ct-save-top.tpl"}{include file="tpl_backend/tpl_settings/ct-cancel-top.tpl"}
            </div>
            <script type="text/javascript">
            $("input[name=new_audio_xfer_title]").autocomplete({ldelim}
                type: "post",
                serviceUrl: current_url + menu_section +"?s={$smarty.request.s|sanitize}&do=add&autocomplete=1",
                onSearchStart: function() {ldelim}
                	$(this).next().val("");
                {rdelim},
                onSelect: function (suggestion) {ldelim}
                        $("input[name=new_audio_xfer]").val(suggestion.data);
                {rdelim}
            {rdelim});
            </script>
            {/if}
        </div>

        {include file="tpl_backend/tpl_settings/ct-switch-js.tpl"}
        {include file="tpl_backend/tpl_settings/ct-actions-js.tpl"}
        <script type="text/javascript">
            $(document).ready(function(){ldelim}
                $(".pause-mode, .resume-mode").click(function(){ldelim}
            	    var act = $(this).hasClass("pause-mode") ? "pause" : "resume";
                    $(".container").mask(" ");
            	    $.post(current_url + menu_section + "?s="+$(".menu-panel-entry-sub-active").attr("id")+"&t=audio&do="+act, $("#ct-set-form").serialize(), function(data){ldelim}
            		$(".container").html(data);
                	$(".container").unmask();
            	    {rdelim});
                {rdelim});
            {rdelim});
        </script>
        <script type="text/javascript">
        $(document).ready(function () {ldelim}
                $('.icheck-box input').each(function () {ldelim}
                        var self = $(this);
                        self.iCheck({ldelim}
                                checkboxClass: 'icheckbox_square-blue',
                                radioClass: 'iradio_square-blue',
                                increaseArea: '20%'
                                
                        {rdelim});
                {rdelim});
                $('.icheck-box input').on('ifChecked', function(event){ldelim} var _id = $(this).val(); $("#hcs-id" + _id).prop('checked', true); {rdelim});
                $('.icheck-box input').on('ifUnchecked', function(event){ldelim} var _id = $(this).val(); $("#hcs-id" + _id).prop('checked', false); {rdelim});
                
                $("#entry-action-buttons .dl-trigger").on("click", function(){ldelim}
        		if ($("#entry-action-buttons ul.dl-menu").hasClass("dl-menuopen")) {ldelim}
                            setTimeout(function () {ldelim}
                                    $("#choices-ipp_select").slideUp(300, function(){ldelim}$('#ct-wrapper').unbind('click', bodyHideSelect);{rdelim});
                            {rdelim}, 100);
                        {rdelim}
		{rdelim});
            {rdelim});
        </script>
