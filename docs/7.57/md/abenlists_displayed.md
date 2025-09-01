  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpro_list.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Display, ABENLISTS_DISPLAYED, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion for improvement:)

Lists - Display

A basic list is either displayed automatically or in a program-driven way. A details list is always displayed automatically:

-   In [executable programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry") called using [SUBMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit.htm), the basic list created up to that point is displayed automatically after the event [END-OF-SELECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapend-of-selection.htm). At the start of the program, the [standard list status](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_list_status_glosry.htm "Glossary Entry") is set automatically, which can be replaced by another GUI status in the program using [SET PF-STATUS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_pf-status_list.htm).
-   In any program that can contain dynpros as components, a display of the current basic list can be called in a program-driven way during processing of a [dynpro sequence](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_sequence_glosry.htm "Glossary Entry").
-   In any program that can contain dynpros as components, the details list created in an event block is displayed automatically when the event block is terminated after [AT LINE-SELECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_line-selection.htm), [AT USER-COMMAND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_user-command.htm), or [AT PFnn](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_pfnn.htm). If no details list is created, the previous list level is displayed.

The following sections cover the statements

-   [LEAVE TO LIST-PROCESSING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_to_list-processing.htm)
-   [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_list-processing.htm)

used to call the basic list during a dynpro sequence, the statements

-   [WINDOW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwindow.htm)
-   [SET PF-STATUS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_pf-status_list.htm)
-   [SET TITLEBAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_titlebar_list.htm)
-   [SET CURSOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_cursor_list.htm)

used to determine properties of the called list, and the statement

-   [GET CURSOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_cursor_list.htm)

used to read a displayed list.

Continue
[LEAVE TO LIST-PROCESSING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_to_list-processing.htm)
[LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapleave_list-processing.htm)
[WINDOW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwindow.htm)
[SET PF-STATUS, List](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_pf-status_list.htm)
[SET TITLEBAR, List](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_titlebar_list.htm)
[SET CURSOR, List](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_cursor_list.htm)
[GET CURSOR, List](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_cursor_list.htm)