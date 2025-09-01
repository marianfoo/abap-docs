  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpro_list.htm) →  [Lists - Event Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_lists_interactive.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SET USER-COMMAND, ABAPSET_USER-COMMAND, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion for improvement:)

SET USER-COMMAND

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_user-command_shortref.htm)

Syntax

SET USER-COMMAND fcode.

Effect

Raises a list event with a function code specified in fcode. fcode must be a [character-like data object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_data_object_glosry.htm "Glossary Entry"). This statement can be used when creating a list. After completion, but before display of the current list, the runtime framework responds as if a user action were performed in the displayed list using the function code specified in fcode.

The assignment of list events to function codes corresponds to the description under [AT USER-COMMAND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_user-command.htm):

-   The predefined function codes of the tables specified under AT USER-COMMAND are caught by the runtime framework
-   The function codes PICK and PFnn raise the events [AT LINE-SELECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_line-selection.htm) or [AT PFnn](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_pfnn.htm)
-   all other functions raise the event [AT USER-COMMAND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_user-command.htm)

If the corresponding event block is implemented, the content of sy-lsind is increased by one and the event block is executed.

If multiple SET USER-COMMAND statements are used when creating a list, only the last statement is respected

Hints

-   The function code PICK only raises an event if the cursor is positioned on a list line.
-   If a function code is assigned to the Return key in the current [GUI status](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengui_status_glosry.htm "Glossary Entry"), this function code is used instead of the one specified in fcode.

Example

Program-driven creation of a basic list and two details lists and display of a search dialog box in the second details list using the predefined function code %SC. The statement SET CURSOR is used to position the cursor in a list line in the event block AT LINE-SELECTION to enable the function code PICK.

START-OF-SELECTION.
  SET USER-COMMAND 'MYCOMM'.
  WRITE 'Basic List'.
AT USER-COMMAND.
  CASE sy-ucomm.
    WHEN 'MYCOMM'.
      WRITE 'Details List from USER-COMMAND,'.
      WRITE: 'SY-LSIND', sy-lsind.
      SET CURSOR LINE 1.
      SET USER-COMMAND 'PICK'.
  ENDCASE.
AT LINE-SELECTION.
  WRITE 'Details List from LINE-SELECTION,'.
  WRITE: 'SY-LSIND', sy-lsind.
  SET USER-COMMAND '%SC'.