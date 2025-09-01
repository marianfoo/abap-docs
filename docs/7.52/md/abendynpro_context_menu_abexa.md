  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Screen and Screen Elements](javascript:call_link\('abenabap_dynpros_screen.htm'\)) →  [Screen Elements - Examples](javascript:call_link\('abenscreen_elements_abexas.htm'\)) → 

Screens, Context Menus

The example illustrates how context menus can be integrated into a program.

Source Code

REPORT demo\_dynpro\_context\_menu.
DATA: field1 TYPE i VALUE 10,
      field2 TYPE p DECIMALS 4.
DATA: prog TYPE sy-repid,
      flag(1) TYPE c VALUE 'X'.
DATA: ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
prog = sy-repid.
CALL SCREEN 100.
MODULE status\_0100 OUTPUT.
  SET TITLEBAR 'TIT100'.
  IF flag = 'X'.
    SET PF-STATUS 'SCREEN\_100' EXCLUDING 'REVEAL'.
  ELSEIF flag = ' '.
    SET PF-STATUS 'SCREEN\_100' EXCLUDING 'HIDE'.
  ENDIF.
  LOOP AT SCREEN INTO DATA(screen\_wa).
    IF screen\_wa-group1 = 'MOD'.
      IF flag = 'X'.
        screen\_wa-active = '1'.
      ELSEIF flag = ' '.
        screen\_wa-active = '0'.
      ENDIF.
      MODIFY SCREEN FROM screen\_wa.
    ELSEIF screen\_wa-name = 'TEXT\_IN\_FRAME'.
      IF flag = 'X'.
        screen\_wa-active = '0'.
      ELSEIF flag = ' '.
        screen\_wa-active = '1'.
      ENDIF.
      MODIFY SCREEN FROM screen\_wa.
    ENDIF.
  ENDLOOP.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE user\_command\_0100.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'HIDE'.
      flag = ' '.
    WHEN 'REVEAL'.
      flag = 'X'.
    WHEN 'SQUARE'.
      field2 = field1 \*\* 2.
    WHEN 'CUBE'.
      field2 = field1 \*\* 3.
    WHEN 'SQUAREROOT'.
      field2 = field1 \*\* ( 1 / 2 ).
    WHEN 'CUBICROOT'.
      field2 = field1 \*\* ( 1 / 3 ).
  ENDCASE.
ENDMODULE.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Callback-Routines:
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
FORM on\_ctmenu\_text USING l\_menu TYPE REF TO cl\_ctmenu.
  l\_menu->load\_gui\_status(
                       EXPORTING program = prog
                                 status  = 'CONTEXT\_MENU\_1'
                                 menu    = l\_menu ).
ENDFORM.
FORM on\_ctmenu\_frame USING l\_menu TYPE REF TO cl\_ctmenu.
  l\_menu->load\_gui\_status(
                      EXPORTING program = prog
                                status  = 'CONTEXT\_MENU\_2'
                                menu    = l\_menu ).
  l\_menu->load\_gui\_status(
                      EXPORTING program = prog
                                status  = 'CONTEXT\_MENU\_1'
                                menu    = l\_menu ).
  l\_menu->set\_default\_function(
                      EXPORTING fcode = 'HIDE' ).
ENDFORM.
FORM on\_ctmenu\_reveal USING l\_menu TYPE REF TO cl\_ctmenu.
  l\_menu->load\_gui\_status(
                      EXPORTING program = prog
                                status  = 'CONTEXT\_MENU\_3'
                                menu    = l\_menu ).
  l\_menu->load\_gui\_status(
                      EXPORTING program = prog
                                status  = 'CONTEXT\_MENU\_1'
                                menu    = l\_menu ).
  l\_menu->set\_default\_function(
                      EXPORTING fcode = 'REVEAL' ).
ENDFORM.
FORM on\_ctmenu\_input USING l\_menu TYPE REF TO cl\_ctmenu.
  DATA calculate\_menu TYPE REF TO cl\_ctmenu.
  CREATE OBJECT calculate\_menu.
  calculate\_menu->add\_function(
                      EXPORTING fcode = 'SQUARE'
                                text  = text-001 ).
  calculate\_menu->add\_function(
                       EXPORTING fcode = 'CUBE'
                                 text  = text-002 ).
  calculate\_menu->add\_function(
                       EXPORTING fcode = 'SQUAREROOT'
                                 text  = text-003 ).
  calculate\_menu->add\_function(
                       EXPORTING fcode = 'CUBICROOT'
                                 text  = text-004 ).
  l\_menu->add\_submenu(
                       EXPORTING menu = calculate\_menu
                                 text = text-005 ).
ENDFORM.

Description

The static Next-Screen-Number of screen 100 is 100. The elements TEXT2 and FIELD2 do not have their own context menus. They inherit the context menu FRAME of the frame. The modification group MOD is assigned to them. The screen flow logic is:

PROCESS BEFORE OUTPUT.
  MODULE status\_0100.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE user\_command\_0100.

The GUI status SCREEN\_100 is set to PBO statically, in which, depending on the field flag, the function codes HIDE or REVEAL are hidden. The context menus to the screen elements are set up in the callback routines as follows:

-   TEXT: Loading of the static context menu CONTEXT\_MENU\_1 without modification. This context menu has a line Cancel.

-   FRAME: Setup of the context menu from the static context menus. CONTEXT\_MENU\_2 und CONTEXT\_MENU\_1. This context menu has two lines Hide result and Cancel. The line for the function code HIDE is highlighted.

-   REVEAL: Creation of the context menus from the static context menus CONTEXT\_MENU\_3 and CONTEXT\_MENU\_1. This context menu has two lines Display result and Cancel. The line to the function code REVEAL is highlighted.

-   INPUT: Setting up the context menu by incorporating the multiline local context menu CALCULATE\_MENU as submenu. For the latter, a local reference variable with reference to CL\_CTMENU is created, an object is created and the new function codes SQUARE, CUBE, SQUAREROOT and CUBICROOT are added. At the integration into the context menu for INPUT, a text must be specified for the entry, after which the submenu is attached.

When executing the program and pressing the right (secondary) mouse button or SHIFT F10, the user receives the context menu TEXT in the first line, the context menu INPUT in the second line, and the context menu FRAME in the third line. The fourth line is hidden after program start. On all other remaining screen components, the standard context menu appears with all static function codes and additionally F1 and F4.

When selecting a new dynamic function, calculations are carried out with the number in input field FIELD1 and then put to FIELD2. When selecting the function Hide result (HIDE), the screen is modified dynamically. Thereby, the fourth line is made visible making the context menu REVEAL accessible.