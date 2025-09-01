  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengui_obsolete.htm) →  [dynpro - Obsolete Statements in Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_obsolet.htm) →  [dynpro - FIELD VALUES, FIELD SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/dynpfield_value_select.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Obsolete%20Input%20Help%20Using%20SELECT%2C%20ABENDYNPRO_F4_HELP_DYN_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

dynpro - Obsolete Input Help Using SELECT

The example illustrates how obsolete dynpro input help works.

Source Code   

REPORT demo\_dynpro\_f4\_help\_dynpro.
DATA: carrier(3) TYPE c,
      connection(4) TYPE c.
CALL SCREEN 100.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.

Description   

The static next dynpro number of dynpro 100 is 100. The input fields are taken from the program fields carrier and connection. The function code of the pushbutton is CANCEL with the function type E. The dynpro field carrier is assigned the search help DEMO\_F4\_DE with the search help parameter CARRID, which accesses the database table SCARR. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  FIELD carrier VALUES ('AA', 'LH').
  FIELD connection SELECT \*
                      FROM  spfli
                      WHERE carrid = carrier
                        AND connid = connection.

When selecting the F4 help for the individual fields, the user is shown the following types of input help:

-   For the airline carrier, the search help displays the list of airline names and copies the airline ID for the selected line into the input field. If the airline code is not one of those listed in the VALUES list of the flow logic, the input check raises an error message in the PAI event. The search help, therefore, overrides the VALUES addition for the input help, but not for the input checks. For this reason, a VALUES addition should not be used here.
-   For the connection, the flow logic displays the list of selected entries from the database table SPFLI and copies the connection number of the selected line into the input field.