{if $user_subscriptions eq 1}
                <div class="blue categories-container">
                    <h4 class="nav-title categories-menu-title left-menu-h4 no-display"><i class="icon-coin"></i>{lang_entry key="subnav.entry.subpanel"}</h4>
                    <aside>
                        <nav>
                            <ul class="accordion inner-accordion" id="categories-accordion">
                            	<li id="account-menu-entry13" class="menu-panel-entry{if $smarty.get.rg eq "" and $smarty.get.rp eq ""} menu-panel-entry-active{/if}" rel-m="{href_entry key="subscribers"}"><a class="{if $smarty.get.rg eq "" and $smarty.get.rp eq ""}dcjq-parent active{/if}" href="{$main_url}/{href_entry key="subscribers"}"><i class="icon-user"></i>{lang_entry key="account.entry.overview"}</a></li>
                            	{if $smarty.session.USER_PARTNER eq 1}
                            	<li id="account-menu-entry12" class="menu-panel-entry{if $smarty.get.rp ne ""} menu-panel-entry-active{/if}" rel-m="{href_entry key="subscribers"}"><a class="{if $smarty.get.rp ne ""}dcjq-parent active{/if}" href="{$main_url}/{href_entry key="subscribers"}?rp={$smarty.session.USER_KEY|md5}"><i class="icon-paypal"></i>{lang_entry key="account.entry.payout.rep"}</a></li>
                            	<li id="account-menu-entry9" class="menu-panel-entry{if $smarty.get.rg ne ""} menu-panel-entry-active{/if}" rel-m="{href_entry key="subscribers"}"><a class="{if $smarty.get.rg ne ""}dcjq-parent active{/if}" href="{$main_url}/{href_entry key="subscribers"}?rg={$smarty.session.USER_KEY|md5}"><i class="icon-bars"></i>{lang_entry key="account.entry.act.graph"}</a></li>
                            	{/if}
                            </ul>
                        </nav>
                    </aside>
                </div>
{/if}