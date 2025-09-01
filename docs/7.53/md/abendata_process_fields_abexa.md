  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP Syntax](javascript:call_link\('abenabap_syntax.htm'\)) →  [ABAP Statements](javascript:call_link\('abenabap_statements.htm'\)) →  [Operands](javascript:call_link\('abenoperands.htm'\)) →  [Data Objects in Operand Positions](javascript:call_link\('abenoperands_data_objects.htm'\)) →  [Substring Access](javascript:call_link\('abenoffset_length.htm'\)) → 

Substrings

This example demonstrates how substrings can be accessed.

Source Code

REPORT demo\_data\_process\_fields.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA time TYPE t VALUE '172545'.
    DATA: f1(8)  TYPE c VALUE 'ABCDEFGH',
          f2(20) TYPE c VALUE '12345678901234567890'.
    DATA: f3(8) TYPE c VALUE 'ABCDEFGH',
          f4(8) TYPE c.
    DATA: o     TYPE i VALUE 2,
          l     TYPE i VALUE 4.
    DATA: string(20) TYPE c,
          number(8)  TYPE c VALUE '123456',
          offset     TYPE i VALUE 8,
          length     TYPE i VALUE 12.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( |Example 1|
      )->write( time
      )->write( time+2(2)
      )->write( time+2(4) ).
    CLEAR time+2(4).
    out->write( time ).
    out->next\_section( |Example 2| ).
    f2+6(5) = f1+3(5).
    out->write( f1
      )->write( f2 ).
    out->next\_section( |Example 3| ).
    f4 = f3.
    out->write( f4 ).
    f4 = f3+o(l).
    out->write( f4 ).
    f4+o(l) = f3.
    out->write( f4 ).
    CLEAR f4.
    f4+o(l) = f3.
    out->write( f4 ).
    f4+o(l) = f3+o(l).
    out->write( f4 ).
    out->next\_section( |Example 4| ).
    WRITE number(6) TO string+offset(length) LEFT-JUSTIFIED.
    out->write( string ).
    CLEAR string.
    WRITE number(6) TO string+offset(length) CENTERED.
    out->write( string ).
    CLEAR string.
    WRITE number TO string+offset(length) RIGHT-JUSTIFIED.
    out->display( string ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In the first part, the minutes of a time field are selected by specifying an offset. Then the minutes and seconds are set to their initial values by specifying an offset in the CLEAR statement.

In the second part, the five character sequence 78901 from the field f2 is replaced with DEFGH from f1 by specifying offsets and lengths.

In the third part, assignments are used. First, the content of f1 is assigned to f2 without offsets. This is repeated with offsets and lengths for f1. The next three assignments overwrite the content of f2 with an offset of 2. Note that f2 is padded on the right with blanks, in accordance with the conversion rules for source type c.

In part four, the WRITE TO statement is used. The first six places in the field number are written to the last 12 places of the string field as left-justified, centered, and right-justified places.