  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) →  [dynpro - Field Helps, Input Helps, and Dropdown List Boxes](javascript:call_link\('abeninput_help_abexas.htm'\)) → 

dynpro - Input Helps in ABAP Dictionary

This example demonstrates how input helps from ABAP Dictionary can be used.

Source Code

REPORT demo\_dynpro\_f4\_help\_dictionary.
TABLES demof4help.
CALL SCREEN 100.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. The input fields are assigned the components of the structure DEMOF4HELP from ABAP Dictionary. The function code of the pushbutton is CANCEL with the function type E. When the user chooses the F4 help for the individual fields, the following is displayed:

-   The fields Date and Time refer to the components DATE\_FIELD and TIME\_FIELD of the DDIC structure. The data type is either DATS or TIMS. Consequently, the input help displayed here is either a calendar or a clock, both set to the current values by default.

-   The field Numbers refers to the component NUM\_FIELD of the DDIC structure. This component is based on the domain DEMO\_NUMBERS to which ten fixed values are assigned. These are displayed as the input help.

-   The first field Airline refers to the component CARRIER1 of the DDIC structure. This component has the underlying data element DEMOF4DE. The search help DEMO\_F4\_DE with the parameter CARRID is assigned to this data element. The search help reads the columns CARRID and CARRNAME of the database table SCARR. Only SCARRNAME is specified but CARRID is flagged as an export parameter.

-   The second field Airline refers to the component CARRIER2 of the DDIC structure. This component is assigned the check table SCARR. The check table SCARR in turn is assigned the search help H\_SCARR which can display and export both columns CARRID and CARRNAME.

-   The field Connection Number refers to the component CONNID of the DDIC structure. This component is assigned the search help DEMO\_F4\_FIELD. The search help has two parameters, CARRID and CONNID, which are assigned to the components CARRIER2 and CONNID of the structure. The search help imports CARRIER, reads the associated data from the database table SPFLI, displays CARRIER and CONNID, and exports CONNID.