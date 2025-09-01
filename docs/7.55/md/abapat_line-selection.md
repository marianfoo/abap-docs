  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpro_list.htm) →  [Lists - Event Blocks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_lists_interactive.htm) →  [AT list\_event](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapat_list_event.htm) → 

AT LINE-SELECTION

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapat_line-selection_shortref.htm)

Syntax

AT LINE-SELECTION.

Effect

This statement defines an event block whose event is raised by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") when a screen list is displayed. This is provided the screen cursor is a list line and a function is selected using the function code PICK. By defining this event block, the [standard list status](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_list_status_glosry.htm "Glossary Entry") is enhanced automatically in such a way that the function code F2 and, with it, the double-click mouse functionality is associated with the function code PICK.

Hint

If the function key F2 is associated with a function code other than PICK, each double click raises its event, usually AT USER-COMMAND, and not AT LINE-SELECTION.

Example

If the following section of an executable program is executed with the standard list status, selecting a line with the left mouse key raises the event AT LINE-SELECTION and creates details lists.

START-OF-SELECTION.
  WRITE 'Click me!' COLOR = 5 HOTSPOT.
AT LINE-SELECTION.
  WRITE: / 'You clicked list', sy-listi,
         / 'You are on list',  sy-lsind.
  IF sy-lsind < 20.
    SKIP.
    WRITE: 'More ...' COLOR = 5 HOTSPOT.
  ENDIF.