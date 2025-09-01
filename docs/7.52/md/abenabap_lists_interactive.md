  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) → 

Event Blocks for Lists

List events appear during the creation of a list, and following certain user actions on a displayed list. They used to process lists in the ABAP program. We differentiate between events during list creation, and interactive list events for processing user actions in a displayed list.

The events during list creation,

-   [TOP-OF-PAGE](javascript:call_link\('abaptop-of-page.htm'\))

-   [END-OF-PAGE](javascript:call_link\('abapend-of-page.htm'\))

enable page headers and footers to be defined independently of the actual page length, which is particularly helpful for the output of spool lists on different paper formats.

The events following user actions on displayed lists,

-   [AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\))

-   [AT USER-COMMAND](javascript:call_link\('abapat_user-command.htm'\))

-   [AT PFnn](javascript:call_link\('abapat_pfnn.htm'\))

enable details lists to be created.

The following statement can be used to trigger a list-event in a program-driven manner:

-   [SET USER-COMMAND](javascript:call_link\('abapset_user-command.htm'\))

Notes

-   At the end of execution of each event block for lists, the statement [NEW-LINE](javascript:call_link\('abapnew-line.htm'\)) is executed implicitly as in every [event block](javascript:call_link\('abenevent_blocks.htm'\)).

-   List events can be triggered in a program-driven manner with the [SET USER-COMMAND](javascript:call_link\('abapset_user-command.htm'\)) statement, instead of by user action on a displayed list.

Continue
[TOP-OF-PAGE](javascript:call_link\('abaptop-of-page.htm'\))
[END-OF-PAGE](javascript:call_link\('abapend-of-page.htm'\))
[AT list\_event](javascript:call_link\('abapat_list_event.htm'\))
[SET USER-COMMAND](javascript:call_link\('abapset_user-command.htm'\))