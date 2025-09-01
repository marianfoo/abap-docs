# ABAP - Keyword Documentation / ABAP - Programming Language / SAP GUI User Dialogs / General Dynpros / dynpro - Field Help, Input Help, and Dropdown List Boxes / dynpro - Field Helps, Input Helps, and Dropdown List Boxes

Included pages: 6


### abeninput_help_abexas.htm

---
title: "Continue"
description: |
  !Example(exa.gif 'Example') dynpro - Field Help(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_f1_help_abexa.htm) !Example(exa.gif 'Example') dynpro - Input Helps in the ABAP Dictionary(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_f4_help_dic_a
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninput_help_abexas.htm"
abapFile: "abeninput_help_abexas.htm"
keywords: ["do", "if", "abeninput", "help", "abexas"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_help.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Field Helps, Input Helps, and Dropdown List Boxes, ABENINPUT_HELP_ABEXAS, 75
7%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Field Helps, Input Helps, and Dropdown List Boxes

Continue
![Example](exa.gif "Example") [dynpro - Field Help](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_f1_help_abexa.htm)
![Example](exa.gif "Example") [dynpro - Input Helps in the ABAP Dictionary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_f4_help_dic_abexa.htm)
![Example](exa.gif "Example") [dynpro - Input Help in Dialog Modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_f4_help_dial_abexa.htm)
![Example](exa.gif "Example") [dynpro - List Box with Value List from Input Help](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_drop1_abexa.htm)
![Example](exa.gif "Example") [dynpro - List Box with Value List from PBO Module](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_drop2_abexa.htm)


### abendynpro_f1_help_abexa.htm

---
title: "Source Code"
description: |
  REPORT demo_dynpro_f1_help. DATA:  text     TYPE c LENGTH 30, docu_num TYPE c LENGTH 4, int      TYPE i, links    TYPE TABLE OF tline, field5   TYPE c LENGTH 10, field6   TYPE c LENGTH 10. TABLES demof1help. text = text-001. CALL SCREEN 100. MODULE cancel INPUT. LEAVE PROGRAM. ENDMODULE. MODULE
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_f1_help_abexa.htm"
abapFile: "abendynpro_f1_help_abexa.htm"
keywords: ["do", "if", "case", "class", "data", "abendynpro", "help", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_help.htm) →  [dynpro - Field Helps, Input Helps, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninput_help_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Field Help, ABENDYNPRO_F1_HELP_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

dynpro - Field Help

This example demonstrates how a field help is implemented on dynpros.

Source Code   

REPORT demo\_dynpro\_f1\_help.
DATA:  text     TYPE c LENGTH 30,
       docu\_num TYPE c LENGTH 4,
       int      TYPE i,
       links    TYPE TABLE OF tline,
       field5   TYPE c LENGTH 10,
       field6   TYPE c LENGTH 10.
TABLES demof1help.
text = text-001.
CALL SCREEN 100.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE f1\_help\_field4 INPUT.
  int += 1.
  CASE int.
    WHEN 1.
      docu\_num = '0100'.
    WHEN 2.
      docu\_num = '0200'.
      int = 0.
  ENDCASE.
ENDMODULE.
MODULE f1\_help\_field5 INPUT.
  CALL FUNCTION 'HELP\_OBJECT\_SHOW\_FOR\_FIELD'
       EXPORTING
            doklangu         = sy-langu
            doktitle         = text-002
            called\_for\_tab   = 'DEMOF1HELP'
            called\_for\_field = 'FIELD1'.
ENDMODULE.
MODULE f1\_help\_field6 INPUT.
  CALL FUNCTION 'HELP\_OBJECT\_SHOW'
       EXPORTING
            dokclass = 'TX'
            doklangu = sy-langu
            dokname  = 'DEMO\_FOR\_F1\_HELP'
            doktitle = text-003
       TABLES
            links    = links.
ENDMODULE.

Description   

The static next dynpro number of dynpro 100 is 100. The input fields are assigned the fields DEMOF1HELP-FIELD1, DEMOF1HELP-FIELD2, DEMOF1HELP-FIELD3, and DEMOF1HELP-FIELD4 from the ABAP Dictionary and the fields field5 and field6 from the ABAP program. The function code of the pushbutton is CANCEL with the function type E. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
PROCESS ON HELP-REQUEST.
  FIELD demof1help-field4 MODULE f1\_help\_field4 WITH docu\_num.
  FIELD field5 MODULE f1\_help\_field5.
  FIELD field6 MODULE f1\_help\_field6.

The components FIELD1 through FIELD4 of the structure DEMOF1HELP refer to the data element DEMOF1TYPE. This data element is documented and two supplementary documentation objects with numbers 0100 and 0200 are created. The user sees the following field help:

-   If the user chooses F1 on the input field for DEMOF1HELP-FIELD1, the data element documentation of DEMOF1TYPE is displayed, since the field is not specified after PROCESS ON HELP-REQUEST.
-   If the user chooses F1 repeatedly for the input fields DEMOF1HELP-FIELD2 and DEMOF1HELP-FIELD3, the data element documentation is displayed, along with the supplementary documentation for either 0100 or 0200. The necessary assignments are stored statically in the database table THLPF.
-   If the user chooses F1 repeatedly for the input field DEMOF1HELP-FIELD4, the data element documentation is displayed, along with the supplementary documentation for either 0100 or 0200. The variable docu\_num is filled accordingly in the dialog module f1\_help\_field2.
-   If the user chooses F1 on the input field for field5, the data element documentation of DEMOF1TYPE is displayed since this is called in the dialog module f1\_help\_field5 by the function module HELP\_OBJECT\_SHOW\_FOR\_FIELD.
-   If the user chooses F1 on the input field for field6, the SAPscript document DEMO\_FOR\_F1\_HELP is displayed since this is called in the dialog module f1\_help\_field6 by the function module HELP\_OBJECT\_SHOW.


### abendynpro_f4_help_dic_abexa.htm

---
title: "Source Code"
description: |
  REPORT demo_dynpro_f4_help_dictionary. TABLES demof4help. CALL SCREEN 100. MODULE cancel INPUT. LEAVE PROGRAM. ENDMODULE. Description The static next dynpro number of dynpro 100 is 100. The input fields are assigned the components of the structure DEMOF4HELP from the ABAP Dictionary. The functio
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_f4_help_dic_abexa.htm"
abapFile: "abendynpro_f4_help_dic_abexa.htm"
keywords: ["do", "if", "data", "abendynpro", "help", "dic", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_help.htm) →  [dynpro - Field Helps, Input Helps, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninput_help_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Input Helps in the ABAP Dictionary, ABENDYNPRO_F4_HELP_DIC_ABEXA, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Input Helps in the ABAP Dictionary

This example demonstrates how input helps from the ABAP Dictionary can be used.

Source Code   

REPORT demo\_dynpro\_f4\_help\_dictionary.
TABLES demof4help.
CALL SCREEN 100.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.

Description   

The static next dynpro number of dynpro 100 is 100. The input fields are assigned the components of the structure DEMOF4HELP from the ABAP Dictionary. The function code of the pushbutton is CANCEL with the function type E. When the user chooses the F4 help for the individual fields, the following is displayed:

-   The fields Date and Time refer to the components DATE\_FIELD and TIME\_FIELD of the DDIC structure. The data type is either DATS or TIMS. Consequently, the input help displayed here is either a calendar or a clock, both set to the current values by default.
-   The field Numbers refers to the component NUM\_FIELD of the DDIC structure. This component is based on the domain DEMO\_NUMBERS to which ten fixed values are assigned. These are displayed as the input help.
-   The first field Airline refers to the component CARRIER1 of the DDIC structure. This component is based on the data element DEMOF4DE. The search help DEMO\_F4\_DE with the parameter CARRID is assigned to this data element. The search help reads the columns CARRID and CARRNAME of the database table SCARR. Only SCARRNAME is specified but CARRID is flagged as an export parameter.
-   The second field Airline refers to the component CARRIER2 of the DDIC structure. This component is assigned the check table SCARR. The check table SCARR in turn is assigned the search help H\_SCARR which can display and export both columns CARRID and CARRNAME.
-   The field Connection Number refers to the component CONNID of the DDIC structure. This component is assigned the search help DEMO\_F4\_FIELD. The search help has two parameters, CARRID and CONNID, which are assigned to the components CARRIER2 and CONNID of the structure. The search help imports CARRIER, reads the associated data from the database table SPFLI, displays CARRIER and CONNID, and exports CONNID.


### abendynpro_f4_help_dial_abexa.htm

---
title: "Source Code"
description: |
  REPORT demo_dynpro_f4_help_module . TYPES: BEGIN OF values, carrid TYPE spfli-carrid, connid TYPE spfli-connid, END OF values. DATA: carrier(3) TYPE c, connection(4) TYPE c. DATA: progname TYPE sy-repid, dynnum   TYPE sy-dynnr, dynpro_values TYPE TABLE OF dynpread, field_value LIKE LINE OF dyn
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_f4_help_dial_abexa.htm"
abapFile: "abendynpro_f4_help_dial_abexa.htm"
keywords: ["select", "do", "if", "data", "types", "internal-table", "abendynpro", "help", "dial", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_help.htm) →  [dynpro - Field Helps, Input Helps, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninput_help_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Input Help in Dialog Modules, ABENDYNPRO_F4_HELP_DIAL_ABEXA, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Input Help in Dialog Modules

This example demonstrates how input helps can be implemented in dialog modules.

Source Code   

REPORT demo\_dynpro\_f4\_help\_module .
TYPES: BEGIN OF values,
         carrid TYPE spfli-carrid,
         connid TYPE spfli-connid,
       END OF values.
DATA: carrier(3) TYPE c,
      connection(4) TYPE c.
DATA: progname TYPE sy-repid,
      dynnum   TYPE sy-dynnr,
      dynpro\_values TYPE TABLE OF dynpread,
      field\_value LIKE LINE OF dynpro\_values,
      values\_tab TYPE TABLE OF values.
CALL SCREEN 100.
MODULE init OUTPUT.
  progname = sy-repid.
  dynnum   = sy-dynnr.
  CLEAR: field\_value, dynpro\_values.
  field\_value-fieldname = 'CARRIER'.
  APPEND field\_value TO dynpro\_values.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE value\_carrier INPUT.
  CALL FUNCTION 'F4IF\_FIELD\_VALUE\_REQUEST'
       EXPORTING
            tabname     = 'DEMOF4HELP'
            fieldname   = 'CARRIER1'
            dynpprog    = progname
            dynpnr      = dynnum
            dynprofield = 'CARRIER'.
ENDMODULE.
MODULE value\_connection INPUT.
  CALL FUNCTION 'DYNP\_VALUES\_READ'
       EXPORTING
            dyname             = progname
            dynumb             = dynnum
            translate\_to\_upper = 'X'
       TABLES
            dynpfields         = dynpro\_values.
  field\_value = dynpro\_values\[ 1 \].
  SELECT  carrid, connid
    FROM  spfli
    WHERE carrid = @( CONV #( field\_value-fieldvalue ) )
    INTO  CORRESPONDING FIELDS OF TABLE @values\_tab.
  CALL FUNCTION 'F4IF\_INT\_TABLE\_VALUE\_REQUEST'
       EXPORTING
            retfield    = 'CONNID'
            dynpprog    = progname
            dynpnr      = dynnum
            dynprofield = 'CONNECTION'
            value\_org   = 'S'
       TABLES
            value\_tab   = values\_tab.
ENDMODULE.

Description   

The static next dynpro number of dynpro 100 is 100. The input fields are taken from the program fields carrier and connection. The function code of the pushbutton is CANCEL with the function type E. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE init.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
PROCESS ON VALUE-REQUEST.
  FIELD carrier MODULE value\_carrier.
  FIELD connection MODULE value\_connection.

When selecting the F4 help for the individual fields, the user is shown the following types of input help:

-   For the airline, the module value\_carrier is called at POV. There, the function module F4IF\_FIELD\_VALUE\_REQUEST displays the input help of the component CARRIER1 of the structure DEMOF4HELP from the ABAP Dictionary, namely the search help DEMOF4DE. The selection of the user is passed to the dynpro field carrier.
-   For the connection, the module value\_connection is called at POV. There, the function module DYNP\_VALUES\_READ passes the value of the dynpro field carrier to the program. SELECT then extracts the matching values from the database table SPFLI into the internal table values\_tab and passes them to the function module F4IF\_INT\_TABLE\_VALUE\_REQUEST. The function module displays these values as an input help and passes the selection of the user to the dynpro field connection.


### abendynpro_drop1_abexa.htm

---
title: "Source Code"
description: |
  &--------------------------------------------------------------------- & Report  DEMO_DROPDOWN_LIST_BOX                                       &--------------------------------------------------------------------- REPORT demo_dropdown_list_box.  Dynpro Interfaces TABLES sdyn_conn
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_drop1_abexa.htm"
abapFile: "abendynpro_drop1_abexa.htm"
keywords: ["select", "insert", "do", "if", "case", "method", "class", "data", "types", "internal-table", "abendynpro", "drop1", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_help.htm) →  [dynpro - Field Helps, Input Helps, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninput_help_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - List Box with Value List from Input Help, ABENDYNPRO_DROP1_ABEXA, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - List Box with Value List from Input Help

This example demonstrates the recommended way to enable a dropdown list box.

Source Code   

\*&---------------------------------------------------------------------\*
\*& Report  DEMO\_DROPDOWN\_LIST\_BOX                                      \*
\*&---------------------------------------------------------------------\*
REPORT demo\_dropdown\_list\_box.
\* Dynpro Interfaces
TABLES sdyn\_conn.
DATA   ok\_code TYPE sy-ucomm.
\* Local class definition
CLASS dynpro\_utilities DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS value\_help.
ENDCLASS.
\* Local class implementation
CLASS dynpro\_utilities IMPLEMENTATION.
  METHOD value\_help.
    TYPES: BEGIN OF carrid\_line,
             carrid   TYPE spfli-carrid,
             carrname TYPE scarr-carrname,
           END OF carrid\_line.
    DATA carrid\_list TYPE STANDARD TABLE OF carrid\_line.
    SELECT carrid, carrname
                FROM scarr
                INTO CORRESPONDING FIELDS OF TABLE @carrid\_list.
    CALL FUNCTION 'F4IF\_INT\_TABLE\_VALUE\_REQUEST'
         EXPORTING
              retfield        = 'CARRID'
              value\_org       = 'S'
         TABLES
              value\_tab       = carrid\_list
         EXCEPTIONS
              parameter\_error = 1
              no\_values\_found = 2
              OTHERS          = 3.
    IF sy-subrc <> 0.
      ...
    ENDIF.
  ENDMETHOD.
ENDCLASS.
\* Event Blocks and Dialog Modules
START-OF-SELECTION.
  CALL SCREEN 100.
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  CASE ok\_code.
    WHEN 'SELECTED'.
      MESSAGE i888(sabapdemos) WITH sdyn\_conn-carrid.
  ENDCASE.
ENDMODULE.
MODULE create\_dropdown\_box INPUT.
  dynpro\_utilities=>value\_help( ).
ENDMODULE.

Description   

The static dynpro number of dynpro 100 is 100. The screen layout contains a single input field, namely the component SDYN\_CONN-CARRID. Its attribute dropdown is Listbox, the output length is 20, the attribute value list is empty, and it is assigned function code SELECTED. The functions BACK, EXIT, and CANCEL are defined in the GUI status with the function type E. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE status\_0100.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE user\_command\_0100.
PROCESS ON VALUE-REQUEST.
  FIELD sdyn\_conn-carrid MODULE create\_dropdown\_box.

The user is not allowed to enter values in the screen field. When the user selects the input field on dynpro 100, the system displays a list box. The Value list attribute is empty, so the system launches the input mechanism. In this case, the event block PROCESS ON VALUE-REQUEST is created in the dynpro flow logic which overrides all other mechanisms. The system fills a two-column internal table in the corresponding dialog module and passes it to the input help using the function module F4IF\_INT\_TABLE\_VALUE\_REQUEST. The system inserts the two columns of the table into the list box.

When the user selects a line in the list box, the PAI event is raised using the function code SELECTED and the value in the first column of the internal table is copied to the input field.


### abendynpro_drop2_abexa.htm

---
title: "Source Code"
description: |
  REPORT demo_dynpro_dropdown_listbox. DATA: name  TYPE vrm_id, list  TYPE vrm_values, value LIKE LINE OF list. DATA: wa_spfli TYPE spfli, ok_code TYPE sy-ucomm, save_ok TYPE sy-ucomm. TABLES demof4help. name = 'DEMOF4HELP-CONNID'. CALL SCREEN 100. MODULE cancel INPUT. LEAVE PROGRAM. ENDMODULE
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_drop2_abexa.htm"
abapFile: "abendynpro_drop2_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "data", "internal-table", "abendynpro", "drop2", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_help.htm) →  [dynpro - Field Helps, Input Helps, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninput_help_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - List Box with Value List from PBO Module, ABENDYNPRO_DROP2_ABEXA, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - List Box with Value List from PBO Module

This example demonstrates a non-recommended way to enable a dropdown list box.

Source Code   

REPORT demo\_dynpro\_dropdown\_listbox.
DATA: name  TYPE vrm\_id,
      list  TYPE vrm\_values,
      value LIKE LINE OF list.
DATA: wa\_spfli TYPE spfli,
      ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
TABLES demof4help.
name = 'DEMOF4HELP-CONNID'.
CALL SCREEN 100.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE init\_listbox OUTPUT.
  CLEAR: demof4help-connid,
         list.
  SELECT  connid, cityfrom, cityto, deptime
          FROM spfli
          WHERE carrid = @demof4help-carrier2
          INTO CORRESPONDING FIELDS OF @wa\_spfli.
    value-key  = wa\_spfli-connid.
    WRITE wa\_spfli-deptime TO value-text USING EDIT MASK '\_\_:\_\_:\_\_'.
    value-text =
      |{ value-text } { wa\_spfli-cityfrom } { wa\_spfli-cityto }|.
    APPEND value TO list.
  ENDSELECT.
  IF sy-subrc <> 0.
    MESSAGE 'No connections for that airline' TYPE 'I' DISPLAY LIKE 'E'.
    LEAVE TO SCREEN 100.
  ENDIF.
  CALL FUNCTION 'VRM\_SET\_VALUES'
    EXPORTING
      id     = name
      values = list.
ENDMODULE.
MODULE user\_command\_100.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  IF save\_ok = 'CARRIER' AND NOT demof4help-carrier2 IS INITIAL.
    LEAVE TO SCREEN 200.
  ELSE.
    SET SCREEN 100.
  ENDIF.
ENDMODULE.
MODULE user\_command\_200.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  IF save\_ok = 'SELECTED'.
    MESSAGE i888(sabapdemos) WITH text-001 demof4help-carrier2
                                          demof4help-connid.
    CLEAR demof4help.
  ENDIF.
ENDMODULE.

Description   

The static next dynpro number of dynpro 100 is 200. The input field is assigned the component CARRIER2 of the structure DEMOF4HELP from the ABAP Dictionary. Its dropdown attribute is L, the output length is 15, the value list attribute is empty, and it is assigned the function code CARRIER. The function code of the pushbutton is CANCEL with the function type E. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE user\_command\_100.

The static next dynpro number of dynpro 200 is 100. The input field is assigned the component CONNID of the structure DEMOF4HELP from the ABAP Dictionary. Its dropdown attribute is L, the output length is 30, the value list attribute is A, and it is assigned the SELECTED function code. The function code of the pushbutton is CANCEL with the function type E. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE init\_listbox.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE user\_command\_200.

The user is not allowed to enter values in the screen fields. When selecting the input field on dynpro 100, the user sees a value list in the list box derived from the input help of the DEMOF4HELP-CARRIER2 field. In this case, this is the search help H\_SCARR assigned to the SCARR check table in the ABAP Dictionary. The value list contains the names of the airlines. When the user selects an entry, the dynpro field is filled with the ID of the airline, and the event PAI is raised. The module user\_command\_100 checks the OK field and calls dynpro 200.

At the PBO event of dynpro 200, an internal table called list is filled with values from the database table SPFLI. The key component is filled with the flight connection numbers, and other relevant information is stored in the text field. The list table is passed to the VRM\_SET\_VALUES function module. When the user selects the input field on dynpro 200, the text column of the internal table is displayed in the list box. When the user selects an entry, the dynpro field is filled with the associated entry from the key column, and the event PAI is raised. The module user\_command\_200 checks and processes the OK field.
