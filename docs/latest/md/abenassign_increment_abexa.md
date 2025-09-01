  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreference_assignments.htm) →  [Assigning Field Symbols](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign.htm) →  [ASSIGN, mem\_area](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area.htm) →  [ASSIGN, dynamic\_dobj](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_mem_area_dynamic_dobj.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Field%20Symbols%2C%20ASSIGN%20INCREMENT%2C%20ABENASSIGN_INCREMENT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Field Symbols, ASSIGN INCREMENT

The examples shows how the statement ASSIGN behaves when the addition INCREMENT is used.

Source Code   

\* Public class definition
CLASS cl\_demo\_assign\_increment DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_assign\_increment IMPLEMENTATION.
  METHOD main.
    DATA assign TYPE c LENGTH 1 VALUE '1'.
    cl\_demo\_input=>new( )->request(
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
        out->write( 'Enter a number between 1 and 6' ).
        RETURN.
    ENDCASE.
    out->write( |sy-subrc: { sy-subrc }| ).
    IF <word> IS ASSIGNED OR <int> IS ASSIGNED.
      out->write( 'Field symbol is assigned' ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

This example shows why the addition INCREMENT in the statement ASSIGN should be used only to access sequences of similar memory areas and that the typing of the field symbol must match the specification in [casting\_spec](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapassign_casting.htm). Inappropriate access as shown in the example can produce the following behavior:

-   The first ASSIGN statement returns the value 0 in sy-subrc. <word> is assigned the contiguous memory area of struc-int1 and struc-int2 and this is cast to the type c.
-   The second ASSIGN statement terminates with a runtime error because the data type of struc-word does not match the typing of <int>.
-   The third ASSIGN statement terminates with a runtime error because the system tries to assign the component struc-stri to <word>, but it is deep and the typing of <word> is flat, which means that no casting is possible.
-   The fourth ASSIGN statement terminates with a runtime error because the system tries to assign the component struc-stri to <int>, but it is deep and the typing of <int> is flat, which means that no casting is possible.
-   The fifth and the sixth ASSIGN statements both return the value 4 in sy-subrc because the system tries to assign memory area outside the structure struc specified after RANGE.