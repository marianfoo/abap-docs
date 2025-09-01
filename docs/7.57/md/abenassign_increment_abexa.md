  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning References](javascript:call_link\('abenreference_assignments.htm'\)) →  [Assigning Field Symbols](javascript:call_link\('abenset_field_symbols.htm'\)) →  [ASSIGN](javascript:call_link\('abapassign.htm'\)) →  [ASSIGN, mem\_area](javascript:call_link\('abapassign_mem_area.htm'\)) →  [ASSIGN, dynamic\_dobj](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Field Symbols, ASSIGN INCREMENT, ABENASSIGN_INCREMENT_ABEXA, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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

This example shows why the addition INCREMENT in the statement ASSIGN should be used only to access sequences of similar memory areas and that the typing of the field symbol must match the specification in [casting\_spec](javascript:call_link\('abapassign_casting.htm'\)). Inappropriate access as shown in the example can produce the following behavior:

-   The first ASSIGN statement returns the value 0 in sy-subrc. <word> is assigned the contiguous memory area of struc-int1 and struc-int2 and this is cast to the type c.
-   The second ASSIGN statement terminates with a runtime error because the data type of struc-word does not match the typing of <int>.
-   The third ASSIGN statement terminates with a runtime error because the system tries to assign the component struc-stri to <word>, but it is deep and the typing of <word> is flat, which means that no casting is possible.
-   The fourth ASSIGN statement terminates with a runtime error because the system tries to assign the component struc-stri to <int>, but it is deep and the typing of <int> is flat, which means that no casting is possible.
-   The fifth and the sixth ASSIGN statements both return the value 4 in sy-subrc because the system tries to assign memory area outside the structure struc specified after RANGE.