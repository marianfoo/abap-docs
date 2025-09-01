  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Overview](javascript:call_link\('abenselection_screen_overview.htm'\)) → 

Selection Screens, Changing the Default GUI Status

The example shows how to change the GUI status of a selection screen.

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

In this example program, the two functions Print and Save as Variant are disabled. You can find the function codes of the default GUI status in the field GUI Status which you can display by choosing System → Status.