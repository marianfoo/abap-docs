  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen.htm) →  [Selection Screens - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_overview.htm) → 

Selection Screens, Changing the Default GUI Status

The example demonstrates how the GUI status of a selection screen can be changed.

Source Code

REPORT demo\_sel\_screen\_status .
DATA itab TYPE TABLE OF sy-ucomm.
PARAMETERS test(10) TYPE c.
AT SELECTION-SCREEN OUTPUT.
  itab = VALUE #( ( CONV sy-ucomm( 'PRIN' ) )
                  ( CONV sy-ucomm( 'SPOS' ) ) ).
  CALL FUNCTION 'RS\_SET\_SELSCREEN\_STATUS'
       EXPORTING
            p\_status  = sy-pfkey
       TABLES
            p\_exclude = itab.

Description

In this example program, the two functions Print and Save as Variant are disabled. The function codes of the default GUI status can be found in the field GUI Status which can be displayed by choosing System → Status.