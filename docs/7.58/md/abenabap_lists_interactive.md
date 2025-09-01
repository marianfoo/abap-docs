  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Lists%20-%20Event%20Blocks%2C%20ABENABAP_LISTS_INTERACTIVE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Lists - Event Blocks

List events occur during the creation of a list and following certain user actions on a displayed list. They are used to process lists in the ABAP program. Events are distinguished between those that occur when lists are created and interactive list events for processing user actions in a displayed list.

The events during list creation,

-   [TOP-OF-PAGE](javascript:call_link\('abaptop-of-page.htm'\))
-   [END-OF-PAGE](javascript:call_link\('abapend-of-page.htm'\))

make it possible to define page headers and footers independently of the actual page length, which is particularly helpful for the output of spool lists on different paper formats.

The events after user actions in a displayed list enable the creation of details lists:

-   [AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\))
-   [AT USER-COMMAND](javascript:call_link\('abapat_user-command.htm'\))
-   [AT PFnn](javascript:call_link\('abapat_pfnn.htm'\))

The following statement can be used to raise a list event in a program-driven way:

-   [SET USER-COMMAND](javascript:call_link\('abapset_user-command.htm'\))

Hints

-   After the execution of each event block for lists, the statement [NEW-LINE](javascript:call_link\('abapnew-line.htm'\)) is executed implicitly as in every [event block](javascript:call_link\('abenevent_blocks.htm'\)).
-   List events can be raised as program-driven events using the statement [SET USER-COMMAND](javascript:call_link\('abapset_user-command.htm'\)), instead of by user action on a displayed list.

Continue
[TOP-OF-PAGE](javascript:call_link\('abaptop-of-page.htm'\))
[END-OF-PAGE](javascript:call_link\('abapend-of-page.htm'\))
[AT list\_event](javascript:call_link\('abapat_list_event.htm'\))
[SET USER-COMMAND](javascript:call_link\('abapset_user-command.htm'\))