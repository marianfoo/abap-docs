  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen_create.htm) →  [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options.htm) →  [SELECT-OPTIONS, value\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect-options_value.htm) → 

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

The symbol in front of the first field indicates that the field airline-option contains the operator NB. The green color indicates that the field airline-sign contains the value "I". The arrow on the right pushbutton is not green since only one row of the selection table is filled.