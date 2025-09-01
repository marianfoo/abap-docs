---
title: "Field Symbols, ASSIGN INCREMENT"
description: |
  The examples shows how the statement ASSIGN behaves when the addition INCREMENT is used. Source Code REPORT  demo_assign_increment. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA assign TYPE c LENGTH 1 VALUE '1'. cl_demo_input=>r
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassign_increment_abexa.htm"
abapFile: "abenassign_increment_abexa.htm"
keywords: ["select", "do", "if", "case", "method", "class", "data", "field-symbol", "abenassign", "increment", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_assignments.htm) →  [Setting Field Symbols](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm) →  [ASSIGN - mem\_area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area.htm) →  [ASSIGN - dynamic\_dobj](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_dynamic_dobj.htm) → 

Field Symbols, ASSIGN INCREMENT

The examples shows how the statement ASSIGN behaves when the addition INCREMENT is used.

Source Code

REPORT  demo\_assign\_increment.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA assign TYPE c LENGTH 1 VALUE '1'.
    cl\_demo\_input=>request(
      EXPORTING text  = \`ASSIGN statement (1 to 6)\`
      CHANGING  field = assign ).
    DATA: BEGIN OF struc,
            word TYPE c LENGTH 4 VALUE 'abcd',
            int1 TYPE i          VALUE 111,
            int2 TYPE i          VALUE 222,
            stri TYPE string     VALUE \`efgh\`,
          END OF struc.
    FIELD-SYMBOLS: <word> LIKE struc-word,
                   <int>  TYPE i.
    CASE assign.
      WHEN '1'. "-> sy-subrc 0
        ASSIGN struc-word INCREMENT 1 TO <word> RANGE struc.
      WHEN '2'. "-> Runtime error
        ASSIGN struc-word INCREMENT 1 TO <int>  RANGE struc.
      WHEN '3'. "-> Runtime error
        ASSIGN struc-word INCREMENT 2 TO <word> RANGE struc.
      WHEN '4'. "-> Runtime error
        ASSIGN struc-word INCREMENT 2 TO <int>  RANGE struc.
      WHEN '5'. "-> sy-subrc 4
        ASSIGN struc-word INCREMENT 3 TO <word> RANGE struc.
      WHEN '6'. "-> sy-subrc 4
        ASSIGN struc-word INCREMENT 3 TO <int>  RANGE struc.
      WHEN OTHERS.
        cl\_demo\_output=>display( 'Enter a number between 1 and 6' ).
        RETURN.
    ENDCASE.
    cl\_demo\_output=>write( |sy-subrc: { sy-subrc }| ).
    IF <word> IS ASSIGNED OR <int> IS ASSIGNED.
      cl\_demo\_output=>write( 'Field symbol is assigned' ).
    ENDIF.
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example shows why use the addition INCREMENT in the statement ASSIGN should be used only if it is necessary access sequences of similar memory areas and that the typing of the field symbol must match the way [casting\_spec](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_casting.htm) is specified. Any access which is not appropriate as shown in the example can produce the following behavior:

-   The first ASSIGN statement returns the value 0 in sy-subrc. <word> is assigned the contiguous memory area of struc-int1 and struc-int2 and this is cast to the type c.

-   The second ASSIGN statement terminates with a runtime error since the data type of struc-word does not match the typing of <int>.

-   The third ASSIGN statement terminates with a runtime error since the system tries to assign the component struc-strito <word>, and as the structure is deep and the typing of <word> is flat, no casting is possible.

-   The fourth ASSIGN statement terminates with a runtime error since the system tries to assign the component struc-stri to <int>, and as the structure is deep and the typing of <int> is flat, no casting is possible.

-   The fifth and the sixth ASSIGN statement both return the value 4 in sy-subrc since the system tries to allocate memory area outside the structure struc specified after RANGE.