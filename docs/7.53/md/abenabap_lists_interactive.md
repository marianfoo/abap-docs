  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) → 

Event Blocks for Lists

List events appear during the creation of a list, and following certain user actions on a displayed list. They used to process lists in the ABAP program. We differentiate between events during list creation, and interactive list events for processing user actions in a displayed list.

The events during list creation,

-   [TOP-OF-PAGE](javascript:call_link\('abaptop-of-page.htm'\))

-   [END-OF-PAGE](javascript:call_link\('abapend-of-page.htm'\))

make it possible to define page headers and footers independently of the actual page length, which is particularly helpful for the output of spool lists on different paper formats.

The events following user actions on displayed lists,

-   [AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\))

-   [AT USER-COMMAND](javascript:call_link\('abapat_user-command.htm'\))

-   [AT PFnn](javascript:call_link\('abapat_pfnn.htm'\))

, enable you to create details lists.

The following statement can be used to trigger a list-event in a program-controlled manner:

-   [SET USER-COMMAND](javascript:call_link\('abapset_user-command.htm'\))

Notes

-   After the execution of each event block for lists, the statement [NEW-LINE](javascript:call_link\('abapnew-line.htm'\)) is executed implicitly as in every [event block](javascript:call_link\('abenevent_blocks.htm'\)).

-   List events can be raised as program-driven events using the statement [SET USER-COMMAND](javascript:call_link\('abapset_user-command.htm'\)), instead of by user action on a displayed list.

Continue
[TOP-OF-PAGE](javascript:call_link\('abaptop-of-page.htm'\))
[END-OF-PAGE](javascript:call_link\('abapend-of-page.htm'\))
[AT list\_event](javascript:call_link\('abapat_list_event.htm'\))
[SET USER-COMMAND](javascript:call_link\('abapset_user-command.htm'\))