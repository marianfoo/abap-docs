---
title: "Dynpros, Obsolete Input Help Using SELECT"
description: |
  The example illustrates how obsolete dynpro input help works. Source Code REPORT demo_dynpro_f4_help_dynpro. DATA: carrier(3) TYPE c, connection(4) TYPE c. CALL SCREEN 100. MODULE cancel INPUT. LEAVE PROGRAM. ENDMODULE. Description The static next dynpro number of dynpro 100 is 100. The input fi
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_f4_help_dyn_abexa.htm"
abapFile: "abendynpro_f4_help_dyn_abexa.htm"
keywords: ["select", "do", "if", "data", "types", "abendynpro", "help", "dyn", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengui_obsolete.htm) →  [Obsolete statements of the screen flow logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_obsolet.htm) →  [FIELD - VALUES, SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/dynpfield_value_select.htm) → 

Dynpros, Obsolete Input Help Using SELECT

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

The static next dynpro number of dynpro 100 is 100. The input fields are taken from the program fields carrier and connection. The function code of the pushbutton is CANCEL with the function type E.The dynpro field carrier is assigned the search help DEMO\_F4\_DE with the search help parameter CARRID, which accesses the database table SCARR. The screen flow logic is as follows:

PROCESS BEFORE OUTPUT.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  FIELD carrier VALUES ('AA', 'LH').
  FIELD connection SELECT \*
                      FROM  spfli
                      WHERE carrid = carrier
                        AND connid = connection.

When selecting the F4 help for the individual fields, the user is shown the following types of input help:

-   For the airline carrier, the search help displays the list of airline names and copies the airline ID for the selected row into the input field. If the airline code is not one of those listed in the VALUES list of the flow logic, the input check triggers an error message in the PAI event. The search help, therefore, overrides the VALUES addition for the input help, but not for the input checks. For this reason, do not use a VALUES addition here.

-   For the connection, the flow logic displays the list of selected entries from the database table SPFLI and copies the connection number of the selected row into the input field.