  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Screen and Screen Elements](javascript:call_link\('abenabap_dynpros_screen.htm'\)) →  [Screen Elements - Examples](javascript:call_link\('abenscreen_elements_abexas.htm'\)) → 

Dynpros, Status Icons

This example illustrates how status icons are used on dynpros.

Source Code

REPORT demo\_dynpro\_status\_icons.
DATA value TYPE i VALUE 1.
DATA: status\_icon TYPE icons-text,
      icon\_name(20) TYPE c,
      icon\_text(10) TYPE c.
CALL SCREEN 100.
MODULE set\_icon OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
  CASE value.
    WHEN 1.
      icon\_name = 'ICON\_GREEN\_LIGHT'.
      icon\_text =  text-003.
    WHEN 2.
      icon\_name = 'ICON\_YELLOW\_LIGHT'.
      icon\_text =  text-002.
    WHEN 3.
      icon\_name = 'ICON\_RED\_LIGHT'.
      icon\_text =  text-001.
  ENDCASE.
  CALL FUNCTION 'ICON\_CREATE'
       EXPORTING
            name                  = icon\_name
            text                  = icon\_text
            info                  = 'Status'
            add\_stdinf            = 'X'
       IMPORTING
            result                = status\_icon
       EXCEPTIONS
            icon\_not\_found        = 1
            outputfield\_too\_short = 2
            OTHERS                = 3.
  CASE sy-subrc.
    WHEN 1.
      MESSAGE e888(sabapdemos) WITH text-004.
    WHEN 2.
      MESSAGE e888(sabapdemos) WITH text-005.
    WHEN 3.
      MESSAGE e888(sabapdemos) WITH text-006.
  ENDCASE.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE change.
  CASE value.
    WHEN 1.
      value = 2.
    WHEN 2.
      value = 3.
    WHEN 3.
      value = 1.
  ENDCASE.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. It is a status field called status\_icon with a visible length of 16 and a defined length of 26. The status icon and the space for the text are represented by placeholders in Screen Painter. The screen flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE set\_icon.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE change.

Depending on the local value field in the program, the dialog module set\_icon passes different values to the function module ICON\_CREATE. The status field status\_icon is filled with the contents of the export parameter result of the function module. This displays the corresponding icon including the text and tooltip on the screen. When the user chooses Continue, the contents of the field value are changed in the PAI, and consequently a new icon is defined in the PBO event.