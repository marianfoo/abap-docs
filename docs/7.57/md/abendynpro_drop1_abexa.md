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