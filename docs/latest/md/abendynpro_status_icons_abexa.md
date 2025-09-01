  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros.htm) →  [dynpro - Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpro_elements.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dynpros_screen.htm) →  [dynpro - Examples of Screen Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscreen_elements_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Status%20Icons%2C%20ABENDYNPRO_STATUS_ICONS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - Status Icons

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

The static next dynpro number of dynpro 100 is 100. A status field called status\_icon is created with a visible length of 16 and a defined length of 26. The status icon and the space for the text are represented by placeholders in the Screen Painter. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE set\_icon.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE change.

Depending on the local value field in the program, the dialog module set\_icon passes different values to the function module ICON\_CREATE. The status field status\_icon is filled with the content of the export parameter result of the function module. This displays the corresponding icon including the text and tooltip on the screen. When the user chooses Continue, the content of the field value are changed in the PAI, and consequently a new icon is defined in the PBO event.