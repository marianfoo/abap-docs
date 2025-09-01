---
title: "Dynpros, Input Help from ABAP Dictionary"
description: |
  This example demonstrates how input helps from ABAP Dictionary can be used. Source Code REPORT demo_dynpro_f4_help_dictionary. TABLES demof4help. CALL SCREEN 100. MODULE cancel INPUT. LEAVE PROGRAM. ENDMODULE. Description The static next dynpro number of dynpro 100 is 100. The input fields are a
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_f4_help_dic_abexa.htm"
abapFile: "abendynpro_f4_help_dic_abexa.htm"
keywords: ["select", "do", "if", "data", "types", "abendynpro", "help", "dic", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros.htm) →  [Field Help, Input Help, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_help.htm) →  [Field Helps, Input Helps, and Dropdown List Boxes - Examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninput_help_abexas.htm) → 

Dynpros, Input Help from ABAP Dictionary

This example demonstrates how input helps from ABAP Dictionary can be used.

Source Code

REPORT demo\_dynpro\_f4\_help\_dictionary.
TABLES demof4help.
CALL SCREEN 100.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. The input fields are assigned the components of the structure DEMOF4HELP from ABAP Dictionary. The function code of the pushbutton is CANCEL with the function type E. When selecting the F4 help for the individual fields, the user is shown the following types of input help:

-   The fields Date and Time refer to the components DATE\_FIELD and TIME\_FIELD of the structure in ABAP Dictionary. The data type is either DATS or TIMS. Consequently, the input help displayed here is either a calendar or a clock, both set to the current values by default.

-   The field Numbers refers to the component NUM\_FIELD of the structure in ABAP Dictionary. This component is based on the domain S\_NUMBERS to which ten fixed values are assigned. These are displayed as the input help.

-   The first field Airline refers to the component CARRIER1 of the structure in ABAP Dictionary. This component has the underlying data element DEMOF4DE. The search help DEMO\_F4\_DE with the parameter CARRID is assigned to this data element. The search help reads the columns CARRID and CARRNAME of the database table SCARR. Only SCARRNAME is specified but CARRID is flagged as an export parameter.

-   The second field Airline refers to the component CARRIER2 of the structure in ABAP Dictionary. This component is assigned the check table SCARR. The check table SCARR in turn is assigned the search help H\_SCARR which can display and export both columns CARRID and CARRNAME.

-   The field Connection Number refers to the component CONNID of the structure in ABAP Dictionary. This component is assigned the search help DEMO\_F4\_FIELD. The search help has two parameters, CARRID and CONNID, which are assigned to the components CARRIER2 and CONNID of the structure. The search help imports CARRIER, reads the associated data from the database table SPFLI, displays CARRIER and CONNID, and exports CONNID.