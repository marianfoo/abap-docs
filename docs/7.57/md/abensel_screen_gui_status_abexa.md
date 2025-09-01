  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Overview](javascript:call_link\('abenselection_screen_overview.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Selection Screens - Change Standard GUI Status, ABENSEL_SCREEN_GUI_STATUS_ABEXA, 757%
0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Selection Screens - Change Standard GUI Status

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