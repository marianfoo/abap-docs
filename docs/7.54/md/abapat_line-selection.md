  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Event Blocks for Lists](javascript:call_link\('abenabap_lists_interactive.htm'\)) →  [AT list\_event](javascript:call_link\('abapat_list_event.htm'\)) → 

AT LINE-SELECTION

[Quick Reference](javascript:call_link\('abapat_line-selection_shortref.htm'\))

Syntax

AT LINE-SELECTION.

Effect

This statement defines an event block whose event is raised by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") when a screen list is displayed. This is provided the screen cursor is a list line and a function is selected using the function code PICK. By defining this event block, the [standard list status](javascript:call_link\('abenstandard_list_status_glosry.htm'\) "Glossary Entry") is enhanced automatically in such a way that the function code F2 and, with it, the double-click mouse function is associated with the function code PICK.

Note

If the function key F2 is associated with a function code other than PICK, each double click raises its event, usually AT USER-COMMAND, and not AT LINE-SELECTION.

Example

This program works with the standard list status. Selecting a line with the left mouse key raises the event AT LINE-SELECTION and creates details lists.

REPORT demo\_at\_line\_selection.
START-OF-SELECTION.
  WRITE 'Click me!' COLOR = 5 HOTSPOT.
AT LINE-SELECTION.
  WRITE: / 'You clicked list', sy-listi,
         / 'You are on list', sy-lsind.
  IF sy-lsind < 20.
    SKIP.
    WRITE: 'More ...' COLOR = 5 HOTSPOT.
  ENDIF.