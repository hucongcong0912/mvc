<template>
	<div class="main-content">
					<div class="breadcrumbs" id="breadcrumbs">
						

						<ul class="breadcrumb">
							<li>
								<i class="icon-home home-icon"></i>
								<a href="#">Home</a>
							</li>
							<li class="active">Calendar</li>
						</ul><!-- .breadcrumb -->

						<div class="nav-search" id="nav-search">
							<form class="form-search">
								<span class="input-icon">
									<input placeholder="Search ..." class="nav-search-input" id="nav-search-input" autocomplete="off" type="text">
									<i class="icon-search nav-search-icon"></i>
								</span>
							</form>
						</div><!-- #nav-search -->
					</div>

					<div class="page-content">
						<div class="page-header">
							<h1>
								Full Calendar
								<small>
									<i class="icon-double-angle-right"></i>
									with draggable and editable events
								</small>
							</h1>
						</div><!-- /.page-header -->

						<div class="row">
							<div class="col-xs-12">
								<!-- PAGE CONTENT BEGINS -->

								<div class="row">
									<div class="col-sm-9">
										<div class="space"></div>

										<div id="calendar" class="fc fc-ltr"><table class="fc-header" style="width:100%"><tbody><tr><td class="fc-header-left"><span class="fc-button fc-button-prev fc-state-default fc-corner-left" unselectable="on" style="-moz-user-select: none;"><i class="icon-chevron-left"></i></span><span class="fc-button fc-button-next fc-state-default fc-corner-right" unselectable="on" style="-moz-user-select: none;"><i class="icon-chevron-right"></i></span><span class="fc-header-space"></span><span class="fc-button fc-button-today fc-state-default fc-corner-left fc-corner-right fc-state-disabled" unselectable="on" style="-moz-user-select: none;">today</span></td><td class="fc-header-center"><span class="fc-header-title"><h2>September 2017</h2></span></td><td class="fc-header-right"><span class="fc-button fc-button-month fc-state-default fc-corner-left fc-state-active" unselectable="on" style="-moz-user-select: none;">month</span><span class="fc-button fc-button-agendaWeek fc-state-default" unselectable="on" style="-moz-user-select: none;">week</span><span class="fc-button fc-button-agendaDay fc-state-default fc-corner-right" unselectable="on" style="-moz-user-select: none;">day</span></td></tr></tbody></table><div class="fc-content" style="position: relative;"><div class="fc-view fc-view-month fc-grid" style="position: relative; -moz-user-select: none;" unselectable="on"><div class="fc-event-container" style="position:absolute;z-index:8;top:0;left:0"><div class="fc-event fc-event-hori fc-event-draggable fc-event-start fc-event-end label-important" style="position: absolute; left: 598px; width: 114px; top: 43px;"><div class="fc-event-inner"><span class="fc-event-title">All Day Event</span></div><div class="ui-resizable-handle ui-resizable-e">&nbsp;&nbsp;&nbsp;</div></div><div class="fc-event fc-event-hori fc-event-draggable fc-event-start label-success" style="position: absolute; left: 717px; width: 115px; top: 341px;"><div class="fc-event-inner"><span class="fc-event-title">Long Event</span></div></div><div class="fc-event fc-event-hori fc-event-draggable fc-event-end label-success" style="position: absolute; left: 1px; width: 354px; top: 440px;"><div class="fc-event-inner"><span class="fc-event-title">Long Event</span></div><div class="ui-resizable-handle ui-resizable-e">&nbsp;&nbsp;&nbsp;</div></div><div class="fc-event fc-event-hori fc-event-draggable fc-event-start fc-event-end ui-draggable" style="position: absolute; left: 122px; width: 114px; top: 460px; -moz-user-select: none;" unselectable="on"><div class="fc-event-inner"><span class="fc-event-time">4p</span><span class="fc-event-title">Some Event</span></div><div class="ui-resizable-handle ui-resizable-e">&nbsp;&nbsp;&nbsp;</div></div></div><table class="fc-border-separate" style="width:100%" cellspacing="0"><thead><tr class="fc-first fc-last"><th class="fc-day-header fc-sun fc-widget-header fc-first" style="width: 119px;">Sun</th><th class="fc-day-header fc-mon fc-widget-header" style="width: 119px;">Mon</th><th class="fc-day-header fc-tue fc-widget-header" style="width: 119px;">Tue</th><th class="fc-day-header fc-wed fc-widget-header" style="width: 119px;">Wed</th><th class="fc-day-header fc-thu fc-widget-header" style="width: 119px;">Thu</th><th class="fc-day-header fc-fri fc-widget-header" style="width: 119px;">Fri</th><th class="fc-day-header fc-sat fc-widget-header fc-last">Sat</th></tr></thead><tbody><tr class="fc-week fc-first"><td class="fc-day fc-sun fc-widget-content fc-other-month fc-past fc-first" data-date="2017-08-27"><div style="min-height: 99px;"><div class="fc-day-number">27</div><div class="fc-day-content"><div style="position: relative; height: 20px;">&nbsp;</div></div></div></td><td class="fc-day fc-mon fc-widget-content fc-other-month fc-past" data-date="2017-08-28"><div><div class="fc-day-number">28</div><div class="fc-day-content"><div style="position: relative; height: 20px;">&nbsp;</div></div></div></td><td class="fc-day fc-tue fc-widget-content fc-other-month fc-past" data-date="2017-08-29"><div><div class="fc-day-number">29</div><div class="fc-day-content"><div style="position: relative; height: 20px;">&nbsp;</div></div></div></td><td class="fc-day fc-wed fc-widget-content fc-other-month fc-past" data-date="2017-08-30"><div><div class="fc-day-number">30</div><div class="fc-day-content"><div style="position: relative; height: 20px;">&nbsp;</div></div></div></td><td class="fc-day fc-thu fc-widget-content fc-other-month fc-past" data-date="2017-08-31"><div><div class="fc-day-number">31</div><div class="fc-day-content"><div style="position: relative; height: 20px;">&nbsp;</div></div></div></td><td class="fc-day fc-fri fc-widget-content fc-past" data-date="2017-09-01"><div><div class="fc-day-number">1</div><div class="fc-day-content"><div style="position: relative; height: 20px;">&nbsp;</div></div></div></td><td class="fc-day fc-sat fc-widget-content fc-past fc-last" data-date="2017-09-02"><div><div class="fc-day-number">2</div><div class="fc-day-content"><div style="position: relative; height: 20px;">&nbsp;</div></div></div></td></tr><tr class="fc-week"><td class="fc-day fc-sun fc-widget-content fc-past fc-first" data-date="2017-09-03"><div style="min-height: 98px;"><div class="fc-day-number">3</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-mon fc-widget-content fc-past" data-date="2017-09-04"><div><div class="fc-day-number">4</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-tue fc-widget-content fc-past" data-date="2017-09-05"><div><div class="fc-day-number">5</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-wed fc-widget-content fc-past" data-date="2017-09-06"><div><div class="fc-day-number">6</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-thu fc-widget-content fc-past" data-date="2017-09-07"><div><div class="fc-day-number">7</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-fri fc-widget-content fc-past" data-date="2017-09-08"><div><div class="fc-day-number">8</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-sat fc-widget-content fc-past fc-last" data-date="2017-09-09"><div><div class="fc-day-number">9</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td></tr><tr class="fc-week"><td class="fc-day fc-sun fc-widget-content fc-past fc-first" data-date="2017-09-10"><div style="min-height: 98px;"><div class="fc-day-number">10</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-mon fc-widget-content fc-past" data-date="2017-09-11"><div><div class="fc-day-number">11</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-tue fc-widget-content fc-past" data-date="2017-09-12"><div><div class="fc-day-number">12</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-wed fc-widget-content fc-past" data-date="2017-09-13"><div><div class="fc-day-number">13</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-thu fc-widget-content fc-past" data-date="2017-09-14"><div><div class="fc-day-number">14</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-fri fc-widget-content fc-past" data-date="2017-09-15"><div><div class="fc-day-number">15</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-sat fc-widget-content fc-past fc-last" data-date="2017-09-16"><div><div class="fc-day-number">16</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td></tr><tr class="fc-week"><td class="fc-day fc-sun fc-widget-content fc-past fc-first" data-date="2017-09-17"><div style="min-height: 98px;"><div class="fc-day-number">17</div><div class="fc-day-content"><div style="position: relative; height: 20px;">&nbsp;</div></div></div></td><td class="fc-day fc-mon fc-widget-content fc-past" data-date="2017-09-18"><div><div class="fc-day-number">18</div><div class="fc-day-content"><div style="position: relative; height: 20px;">&nbsp;</div></div></div></td><td class="fc-day fc-tue fc-widget-content fc-past" data-date="2017-09-19"><div><div class="fc-day-number">19</div><div class="fc-day-content"><div style="position: relative; height: 20px;">&nbsp;</div></div></div></td><td class="fc-day fc-wed fc-widget-content fc-past" data-date="2017-09-20"><div><div class="fc-day-number">20</div><div class="fc-day-content"><div style="position: relative; height: 20px;">&nbsp;</div></div></div></td><td class="fc-day fc-thu fc-widget-content fc-past" data-date="2017-09-21"><div><div class="fc-day-number">21</div><div class="fc-day-content"><div style="position: relative; height: 20px;">&nbsp;</div></div></div></td><td class="fc-day fc-fri fc-widget-content fc-past" data-date="2017-09-22"><div><div class="fc-day-number">22</div><div class="fc-day-content"><div style="position: relative; height: 20px;">&nbsp;</div></div></div></td><td class="fc-day fc-sat fc-widget-content fc-past fc-last" data-date="2017-09-23"><div><div class="fc-day-number">23</div><div class="fc-day-content"><div style="position: relative; height: 20px;">&nbsp;</div></div></div></td></tr><tr class="fc-week"><td class="fc-day fc-sun fc-widget-content fc-past fc-first" data-date="2017-09-24"><div style="min-height: 98px;"><div class="fc-day-number">24</div><div class="fc-day-content"><div style="position: relative; height: 40px;">&nbsp;</div></div></div></td><td class="fc-day fc-mon fc-widget-content fc-past" data-date="2017-09-25"><div><div class="fc-day-number">25</div><div class="fc-day-content"><div style="position: relative; height: 40px;">&nbsp;</div></div></div></td><td class="fc-day fc-tue fc-widget-content fc-past" data-date="2017-09-26"><div><div class="fc-day-number">26</div><div class="fc-day-content"><div style="position: relative; height: 40px;">&nbsp;</div></div></div></td><td class="fc-day fc-wed fc-widget-content fc-past" data-date="2017-09-27"><div><div class="fc-day-number">27</div><div class="fc-day-content"><div style="position: relative; height: 40px;">&nbsp;</div></div></div></td><td class="fc-day fc-thu fc-widget-content fc-today fc-state-highlight" data-date="2017-09-28"><div><div class="fc-day-number">28</div><div class="fc-day-content"><div style="position: relative; height: 40px;">&nbsp;</div></div></div></td><td class="fc-day fc-fri fc-widget-content fc-future" data-date="2017-09-29"><div><div class="fc-day-number">29</div><div class="fc-day-content"><div style="position: relative; height: 40px;">&nbsp;</div></div></div></td><td class="fc-day fc-sat fc-widget-content fc-future fc-last" data-date="2017-09-30"><div><div class="fc-day-number">30</div><div class="fc-day-content"><div style="position: relative; height: 40px;">&nbsp;</div></div></div></td></tr><tr class="fc-week fc-last"><td class="fc-day fc-sun fc-widget-content fc-other-month fc-future fc-first" data-date="2017-10-01"><div style="min-height: 98px;"><div class="fc-day-number">1</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-mon fc-widget-content fc-other-month fc-future" data-date="2017-10-02"><div><div class="fc-day-number">2</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-tue fc-widget-content fc-other-month fc-future" data-date="2017-10-03"><div><div class="fc-day-number">3</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-wed fc-widget-content fc-other-month fc-future" data-date="2017-10-04"><div><div class="fc-day-number">4</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-thu fc-widget-content fc-other-month fc-future" data-date="2017-10-05"><div><div class="fc-day-number">5</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-fri fc-widget-content fc-other-month fc-future" data-date="2017-10-06"><div><div class="fc-day-number">6</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td><td class="fc-day fc-sat fc-widget-content fc-other-month fc-future fc-last" data-date="2017-10-07"><div><div class="fc-day-number">7</div><div class="fc-day-content"><div style="position: relative; height: 0px;">&nbsp;</div></div></div></td></tr></tbody></table></div></div></div>
									</div>

									<div class="col-sm-3">
										<div class="widget-box transparent">
											<div class="widget-header">
												<h4>Draggable events</h4>
											</div>

											<div class="widget-body">
												<div class="widget-main no-padding">
													<div id="external-events">
														<div class="external-event label-grey ui-draggable" data-class="label-grey" style="position: relative;">
															<i class="icon-move"></i>
															My Event 1
														</div>

														<div class="external-event label-success ui-draggable" data-class="label-success" style="position: relative;">
															<i class="icon-move"></i>
															My Event 2
														</div>

														<div class="external-event label-danger ui-draggable" data-class="label-danger" style="position: relative;">
															<i class="icon-move"></i>
															My Event 3
														</div>

														<div class="external-event label-purple ui-draggable" data-class="label-purple" style="position: relative;">
															<i class="icon-move"></i>
															My Event 4
														</div>

														<div class="external-event label-yellow ui-draggable" data-class="label-yellow" style="position: relative;">
															<i class="icon-move"></i>
															My Event 5
														</div>

														<div class="external-event label-pink ui-draggable" data-class="label-pink" style="position: relative;">
															<i class="icon-move"></i>
															My Event 6
														</div>

														<div class="external-event label-info ui-draggable" data-class="label-info" style="position: relative;">
															<i class="icon-move"></i>
															My Event 7
														</div>

														<label>
															<input class="ace ace-checkbox" id="drop-remove" type="checkbox">
															<span class="lbl"> Remove after drop</span>
														</label>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<!-- PAGE CONTENT ENDS -->
							</div><!-- /.col -->
						</div><!-- /.row -->
					</div><!-- /.page-content -->
				</div>
</template>