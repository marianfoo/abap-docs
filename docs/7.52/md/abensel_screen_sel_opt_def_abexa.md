  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Create Selection Screens](javascript:call_link\('abenselection_screen_create.htm'\)) →  [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) →  [SELECT-OPTIONS - value\_options](javascript:call_link\('abapselect-options_value.htm'\)) → 

Selection Screens, Default Values for Selection Criteria

The example shows which default values you can set for selection criteria.

Source Code

REPORT demo\_sel\_screen\_select\_default.
DATA wa\_spfli TYPE spfli.
SELECT-OPTIONS airline FOR wa\_spfli-carrid
               DEFAULT 'AA'
                    TO 'LH'
                OPTION  nb
                  SIGN  i.

Description

The symbol before the first field indicates that the field airline-option contains the operator NB. The green colour indicates that the field airline-sign contains the value "I". The arrow on the right pushbutton is not green since only one line of the selection table is filled.