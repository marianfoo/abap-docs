  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Event Blocks](javascript:call_link\('abenabap_lists_interactive.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20USER-COMMAND%2C%20ABAPSET_USER-COMMAND%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET USER-COMMAND

[Short Reference](javascript:call_link\('abapset_user-command_shortref.htm'\))

Syntax

SET USER-COMMAND fcode.

Effect

Raises a list event with a function code specified in fcode. fcode must be a [character-like data object](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry"). This statement can be used when creating a list. After completion, but before display of the current list, the runtime framework responds as if a user action were performed in the displayed list using the function code specified in fcode.

The assignment of list events to function codes corresponds to the description under [AT USER-COMMAND](javascript:call_link\('abapat_user-command.htm'\)):

-   The predefined function codes of the tables specified under AT USER-COMMAND are caught by the runtime framework
-   The function codes PICK and PFnn raise the events [AT LINE-SELECTION](javascript:call_link\('abapat_line-selection.htm'\)) or [AT PFnn](javascript:call_link\('abapat_pfnn.htm'\))
-   all other functions raise the event [AT USER-COMMAND](javascript:call_link\('abapat_user-command.htm'\))

If the corresponding event block is implemented, the content of sy-lsind is increased by one and the event block is executed.

If multiple SET USER-COMMAND statements are used when creating a list, only the last statement is respected

Hints

-   The function code PICK only raises an event if the cursor is positioned on a list line.
-   If a function code is assigned to the Return key in the current [GUI status](javascript:call_link\('abengui_status_glosry.htm'\) "Glossary Entry"), this function code is used instead of the one specified in fcode.

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