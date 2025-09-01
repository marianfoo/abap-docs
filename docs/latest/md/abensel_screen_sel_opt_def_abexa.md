  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen.htm) →  [Selection Screens - Create](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_create.htm) →  [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect-options.htm) →  [SELECT-OPTIONS, value\_options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect-options_value.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Selection%20Screens%20-%20Default%20Values%20for%20Selection%20Criteria%2C%20ABENSEL_SCREEN_SEL_OPT_DEF_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion%20for%20improvement:)

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

The symbol in front of the first field indicates that the field airline-option contains the operator NB. The green color indicates that the field airline-sign contains the value I. The arrow on the right pushbutton is not green since only one line of the selection table is filled.