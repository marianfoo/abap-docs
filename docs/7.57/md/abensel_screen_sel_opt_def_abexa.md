  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Create](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) →  [SELECT-OPTIONS, value\_options](javascript:call_link\('abapselect-options_value.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Selection Screens - Default Values for Selection Criteria, ABENSEL_SCREEN_SEL_OPT_DEF
_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Selection Screens - Default Values for Selection Criteria

The example demonstrates which default values can be set for selection criteria.

Source Code   

REPORT demo\_sel\_screen\_select\_default.
DATA wa\_spfli TYPE spfli.
SELECT-OPTIONS airline FOR wa\_spfli-carrid
               DEFAULT 'AA'
                    TO 'LH'
                OPTION  nb
                  SIGN  i.

Description   

The symbol in front of the first field indicates that the field airline-option contains the operator NB. The green color indicates that the field airline-sign contains the value "I". The arrow on the right pushbutton is not green since only one line of the selection table is filled.