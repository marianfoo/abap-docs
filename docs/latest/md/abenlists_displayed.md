  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Lists%20-%20Display%2C%20ABENLISTS_DISPLAYED%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Lists - Display

A basic list is either displayed automatically or in a program-driven way. A details list is always displayed automatically:

-   In [executable programs](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") called using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)), the basic list created up to that point is displayed automatically after the event [END-OF-SELECTION](javascript:call_link\('abapend-of-selection.htm'\)). At the start of the program, the [standard list status](javascript:call_link\('abenstandard_list_status_glosry.htm'\) "Glossary Entry") is set automatically, which can be replaced by another GUI status in the program using [SET PF-STATUS](javascript:call_link\('abapset_pf-status_list.htm'\)).
-   In any program that can contain dynpros as components, a display of the current basic list can be called in a program-driven way during processing of a [dynpro sequence](javascript:call_link\('abendynpro_sequence_glosry.htm'\) "Glossary Entry").
-   In any program that can contain dynpros as components, the details list created in an event block is displayed automatically when the event block is terminated after [AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\)), [AT USER-COMMAND](javascript:call_link\('abapat_user-command.htm'\)), or [AT PFnn](javascript:call_link\('abapat_pfnn.htm'\)). If no details list is created, the previous list level is displayed.

The following sections cover the statements

-   [LEAVE TO LIST-PROCESSING](javascript:call_link\('abapleave_to_list-processing.htm'\))
-   [LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_list-processing.htm'\))

used to call the basic list during a dynpro sequence, the statements

-   [WINDOW](javascript:call_link\('abapwindow.htm'\))
-   [SET PF-STATUS](javascript:call_link\('abapset_pf-status_list.htm'\))
-   [SET TITLEBAR](javascript:call_link\('abapset_titlebar_list.htm'\))
-   [SET CURSOR](javascript:call_link\('abapset_cursor_list.htm'\))

used to determine properties of the called list, and the statement

-   [GET CURSOR](javascript:call_link\('abapget_cursor_list.htm'\))

used to read a displayed list.

Continue
[LEAVE TO LIST-PROCESSING](javascript:call_link\('abapleave_to_list-processing.htm'\))
[LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_list-processing.htm'\))
[WINDOW](javascript:call_link\('abapwindow.htm'\))
[SET PF-STATUS, List](javascript:call_link\('abapset_pf-status_list.htm'\))
[SET TITLEBAR, List](javascript:call_link\('abapset_titlebar_list.htm'\))
[SET CURSOR, List](javascript:call_link\('abapset_cursor_list.htm'\))
[GET CURSOR, List](javascript:call_link\('abapget_cursor_list.htm'\))