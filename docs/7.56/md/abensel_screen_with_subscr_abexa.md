  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen_create.htm) →  [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen.htm) →  [SELECTION-SCREEN, screen\_elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_layout.htm) →  [SELECTION-SCREEN, TABBED BLOCK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_tabbed.htm) → 

Selection Screens -Subscreens

This example demonstrates how to include subscreens in selection screens.

Source Code

REPORT demo\_sel\_screen\_with\_subscreen.
TABLES sscrfields.
\* SUBSCREEN 1
SELECTION-SCREEN BEGIN OF SCREEN 100 AS SUBSCREEN.
SELECTION-SCREEN BEGIN OF BLOCK b1 WITH FRAME TITLE text-010.
PARAMETERS: p1(10) TYPE c,
            p2(10) TYPE c,
            p3(10) TYPE c.
SELECTION-SCREEN END OF BLOCK b1.
SELECTION-SCREEN END OF SCREEN 100.
\* SUBSCREEN 2
SELECTION-SCREEN BEGIN OF SCREEN 200 AS SUBSCREEN.
SELECTION-SCREEN BEGIN OF BLOCK b2 WITH FRAME TITLE text-020.
PARAMETERS: q1(10) TYPE c,
            q2(10) TYPE c,
            q3(10) TYPE c.
SELECTION-SCREEN END OF BLOCK b2.
SELECTION-SCREEN END OF SCREEN 200.
\* SUBSCREEN 3
SELECTION-SCREEN BEGIN OF SCREEN 300 AS SUBSCREEN.
SELECTION-SCREEN BEGIN OF BLOCK b3 WITH FRAME TITLE text-030.
PARAMETERS: r1(10) TYPE c,
            r2(10) TYPE c,
            r3(10) TYPE c.
SELECTION-SCREEN END OF BLOCK b3.
SELECTION-SCREEN END OF SCREEN 300.
\* STANDARD SELECTION SCREEN
SELECTION-SCREEN: FUNCTION KEY 1,
                  FUNCTION KEY 2.
SELECTION-SCREEN: BEGIN OF TABBED BLOCK sub FOR 10 LINES,
                  END OF BLOCK sub.
INITIALIZATION.
  sscrfields-functxt\_01 = '@0D@'.
  sscrfields-functxt\_02 = '@0E@'.
  sub-prog = sy-repid.
  sub-dynnr = 100.
AT SELECTION-SCREEN.
  CASE sy-dynnr.
    WHEN 100.
      IF sscrfields-ucomm = 'FC01'.
        sub-dynnr = 300.
      ELSEIF sscrfields-ucomm = 'FC02'.
        sub-dynnr = 200.
      ENDIF.
    WHEN 200.
      IF sscrfields-ucomm = 'FC01'.
        sub-dynnr = 100.
      ELSEIF sscrfields-ucomm = 'FC02'.
        sub-dynnr = 300.
      ENDIF.
    WHEN 300.
      IF sscrfields-ucomm = 'FC01'.
        sub-dynnr = 200.
      ELSEIF sscrfields-ucomm = 'FC02'.
        sub-dynnr = 100.
      ENDIF.
  ENDCASE.
START-OF-SELECTION.
  WRITE: / 'P1:', p1,'Q1:', q1, 'R1:', r1,
         / 'P2:', p2,'Q2:', q2, 'R2:', r2,
         / 'P3:', p3,'Q3:', q3, 'R3:', r3.

Description

Displaying subscreens in subscreen areas on selection screens is a special case of tabstrips on selection screens. Defining a subscreen area is similar to defining a tabstrip area without a tab title. Before the selection screen is sent, a subscreen must be assigned to the subscreen area sub. This is done using the components prog and dynnr of the identically named structure sub, which itself is created automatically by the statement above. The component prog must be assigned to the program name of the subscreen, and the component dynnr must be assigned to the dynpro number of the subscreen.

This program defines three subscreen selection screens: 100, 200, and 300. It also defines a subscreen area sub on the standard selection screen. There are two pushbuttons in the application toolbar.

In the INITIALIZATION event, the subscreen selection screen 100 is assigned to the subscreen area. In the AT SELECTION-SCREEN event, the function keys are evaluated and assigned to one of the other subscreens accordingly.