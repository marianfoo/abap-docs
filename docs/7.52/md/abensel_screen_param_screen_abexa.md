  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen.htm) →  [Create Selection Screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_create.htm) →  [PARAMETERS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapparameters.htm) →  [PARAMETERS - screen\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapparameters_screen.htm) → 

Selection Screens, Display Properties for Parameters

The example demonstrates how the select\_options additions of the statement PARAMETERS can be used.

Source Code

REPORT demo\_sel\_screen\_screen\_opt.
SELECTION-SCREEN BEGIN OF SCREEN 100.
SELECTION-SCREEN BEGIN OF BLOCK part1 WITH FRAME TITLE text-001.
PARAMETERS field(10) TYPE c OBLIGATORY.
SELECTION-SCREEN END OF BLOCK part1.
SELECTION-SCREEN BEGIN OF BLOCK part2 WITH FRAME TITLE text-002.
PARAMETERS: p1(10) TYPE c VISIBLE LENGTH 1,
            p2(10) TYPE c VISIBLE LENGTH 5,
            p3(10) TYPE c VISIBLE LENGTH 10.
SELECTION-SCREEN END OF BLOCK part2.
SELECTION-SCREEN BEGIN OF BLOCK part3 WITH FRAME TITLE text-003.
PARAMETERS: a AS CHECKBOX USER-COMMAND flag,
            b AS CHECKBOX DEFAULT 'X' USER-COMMAND flag.
SELECTION-SCREEN END OF BLOCK part3.
SELECTION-SCREEN BEGIN OF BLOCK part4 WITH FRAME TITLE text-004.
PARAMETERS: r1 RADIOBUTTON GROUP rad1,
            r2 RADIOBUTTON GROUP rad1 DEFAULT 'X',
            r3 RADIOBUTTON GROUP rad1,
            s1 RADIOBUTTON GROUP rad2,
            s2 RADIOBUTTON GROUP rad2,
            s3 RADIOBUTTON GROUP rad2 DEFAULT 'X'.
SELECTION-SCREEN END OF BLOCK part4.
SELECTION-SCREEN BEGIN OF BLOCK part5 WITH FRAME TITLE text-005.
PARAMETERS p\_carrid TYPE spfli-carrid
                    AS LISTBOX VISIBLE LENGTH 20
                    DEFAULT 'LH'.
SELECTION-SCREEN END OF BLOCK part5.
SELECTION-SCREEN BEGIN OF BLOCK part6 WITH FRAME TITLE text-006.
PARAMETERS: test1(10) TYPE c MODIF ID sc1,
            test2(10) TYPE c MODIF ID sc2,
            test3(10) TYPE c MODIF ID sc1,
            test4(10) TYPE c MODIF ID sc2.
SELECTION-SCREEN END OF BLOCK part6.
SELECTION-SCREEN END OF SCREEN 100.
AT SELECTION-SCREEN OUTPUT.
  LOOP AT screen INTO DATA(screen\_wa).
    IF a <> 'X' AND
       screen\_wa-group1 = 'SC1'.
      screen\_wa-active = '0'.
    ENDIF.
    IF b <> 'X' AND
       screen\_wa-group1 = 'SC2'.
      screen\_wa-active = '0'.
    ENDIF.
    IF screen\_wa-group1 = 'SC1'.
      screen\_wa-intensified = '1'.
      MODIFY screen FROM screen\_wa.
      CONTINUE.
    ENDIF.
    IF screen\_wa-group1 = 'SC2'.
      screen\_wa-intensified = '0'.
      MODIFY screen FROM screen\_wa.
    ENDIF.
  ENDLOOP.
CLASS start DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS start IMPLEMENTATION.
  METHOD main.
    CALL SELECTION-SCREEN 100 STARTING AT 10 10.
    IF sy-subrc <> 0.
      RETURN.
    ENDIF.
    WRITE: / 'P1:', p1,
           / 'P2:', p2,
           / 'P3:', p3.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  start=>main( ).

Description

This example program consists of six parts, each representing one of the [screen\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapparameters_screen.htm) additions of the statement PARAMETERS. Each example corresponds to a block on selection screen 100.

-   Part 1: If the cursor is not on the input field, a symbol appears in the input field of the parameter p which tells the user that an entry in this field is required and that the program cannot continue if no entry is made in this field.

-   Part 2: The three parameters p1, p2 and p3 have the same length (10), but are displayed in different lengths on the selection screen. Up to ten places, however, can be entered in any of the fields.

-   Part 3: Two checkboxes appear on the left side of the selection screen with the selection text appearing on their right. The checkbox b has the default value "X". The elements of the modification groups sc1 and sc2 (see part 6) can be shown and hidden together with the two checkboxes. The display is switched immediately since the event AT SELECTION-SCREEN is triggered if one of the checkboxes is chosen. The function code is not needed. Instead, the content of a or b is evaluated at PBO.

-   Part 4: Radio buttons r1, r2, and r3 form group rad1, while s1, s2, and s3 form group rad2. On the selection screen, r2 and s3 are selected, while all others are not.

-   Part 5: The parameter p\_carrid is displayed with a length of 20 and filled with the label "Lufthansa". The user can select another airline; in this case, the three-character airline ID is assigned to the parameter. When assigning the function code onli, which is assigned to the function Execute in the GUI status of the default selection screen, the events AT SELECTION-SCREEN and START-OF-SELECTION are triggered.

-   Part 6: The parameters test1 and test3 are assigned to the modification group sc1, while test2 and test4 are assigned to group sc2. During the AT SELECTION-SCREEN OUTPUT event, the INTENSIFIED field of internal table screen is set to 1 or 0, depending on the contents of the group1 field. On the selection screen, the lines for test1 and test3 are highlighted whereas those for test2 and test4 are not.