---
title: "Screens, Input Help of the ABAP Dictionary"
description: |
  The example shows how to use the input help of the ABAP Dictionary. Source Code REPORT demo_dynpro_f4_help_dictionary. TABLES demof4help. CALL SCREEN 100. MODULE cancel INPUT. LEAVE PROGRAM. ENDMODULE. Description The static next screen number of screen 100 is 100. The input fields have been ass
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_f4_help_dic_abexa.htm"
abapFile: "abendynpro_f4_help_dic_abexa.htm"
keywords: ["do", "data", "types", "abendynpro", "help", "dic", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [Statements in the Screen Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_dynpro_statements.htm) →  [FIELD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpfield.htm) →  [Field Help and Input Help](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynp_field_help.htm) →  [Field and Input Helps - Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninput_help_abexas.htm) → 

Screens, Input Help of the ABAP Dictionary

The example shows how to use the input help of the ABAP Dictionary.

Source Code

REPORT demo\_dynpro\_f4\_help\_dictionary.
TABLES demof4help.
CALL SCREEN 100.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.

Description

The static next screen number of screen 100 is 100. The input fields have been assigned the components of the structure DEMOF4HELP from the ABAP Dictionary. The function code of the pushbutton is CANCEL with the function type E. When choosing the F4 help for the individual fields, the user gets the following types of input help:

-   The fields Date and Time refer to the components DATE\_FIELD and TIME\_FIELD of the structure in the Dictionary. The data type is either DATS or TIMS. Consequently, the input help displayed here is either a calendar or a clock, both set to the current values by default.

-   The field Numbers refers to the component NUM\_FIELD of the structure in the Dictionary. This component is based on the domain S\_NUMBERS to which ten fixed values are assigned. These are displayed as the input help.

-   The first field Airline refers to the component CARRIER1 of the structure in the Dictionary. This component is based on the data element DEMOF4DE to which the search help DEMO\_F4\_DE with the search help parameter CARRID is assigned. The columns CARRID and CARRNAME of the database table SCARR are read into the search help. Only SCARRNAME is listed but CARRID is marked as an export parameter.

-   The second field Airline refers to the component CARRIER2 of the structure in the Dictionary. This component is assigned the check table SCARR. The check table SCARR in turn is assigned the search help H\_SCARR, which can display and export both columns CARRID and CARRNAME.

-   The field Connection Number refers to the component CONNID of the structure in the Dictionary. This component is assigned the search help DEMO\_F4\_FIELD. The search help has two parameters, CARRID and CONNID, which are assigned to the components CARRIER2 and CONNID of the structure. The search help imports CARRIER, reads the associated data from the database table SPFLI, displays CARRIER and CONNID, and exports CONNID.