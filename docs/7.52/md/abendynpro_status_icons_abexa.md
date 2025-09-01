  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [Screen and Screen Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_screen.htm) →  [Screen Elements - Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_elements_abexas.htm) → 

Screens, Status Icons

This example illustrates status icons on screens.

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

The static next screen number of screen 100 is 100. It is a status field named status\_icon created with a visible length of 16 and a defined length of 26. The status icon and the space for a text are indicated by symbols in the Screen Painter. The screen flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE set\_icon.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE change.

Depending on the value field local in the program, the dialog module set\_icon passes different values to the function module ICON\_CREATE. The status field status\_icon is filled with its export parameter result. This displays the corresponding icon including the text and quick info on the screen. If the Continue button is chosen, the field value is changed at PAI so that a different icon is defined at PBO.