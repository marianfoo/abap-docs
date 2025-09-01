  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands.htm) →  [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands_data_objects.htm) →  [Notations for Single Operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands_names.htm) →  [Offset/Length Specifications for Substring Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoffset_length.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Offset%2FLength%20Specifications%2C%20ABENDATA_PROCESS_FIELDS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Offset/Length Specifications

This example demonstrates how substrings can be accessed using offset/length specifications.

Source Code   

\* Public class definition
CLASS cl\_demo\_data\_process\_fields DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_data\_process\_fields IMPLEMENTATION.
  METHOD main.
    DATA time TYPE t VALUE '172545'.
    DATA: f1(8)  TYPE c VALUE 'ABCDEFGH',
          f2(20) TYPE c VALUE '12345678901234567890'.
    DATA: f3(8) TYPE c VALUE 'ABCDEFGH',
          f4(8) TYPE c.
    DATA: o TYPE i VALUE 2,
          l TYPE i VALUE 4.
    DATA: text(20)  TYPE c,
          number(8) TYPE c VALUE '123456',
          offset    TYPE i VALUE 8,
          length    TYPE i VALUE 12.
    out->begin\_section( \`Example 1\`
      )->write( time
      )->write( time+2(2)
      )->write( time+2(4) ).
    CLEAR time+2(4).
    out->write( time ).
    out->next\_section( \`Example 2\` ).
    f2+6(5) = f1+3(5).
    out->write( f1
      )->write( f2 ).
    out->next\_section( \`Example 3\` ).
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
    out->next\_section( \`Example 4\` ).
    text+offset(length) = |{ number(6) ALIGN = LEFT WIDTH = length }|.
    out->write( text ).
    CLEAR text.
    text+offset(length) = |{ number(6) ALIGN = CENTER WIDTH = length }|.
    out->write( text ).
    CLEAR text.
    text+offset(length) = |{ number(6) ALIGN = RIGHT WIDTH = length }|.
    out->write( text ).
  ENDMETHOD.
ENDCLASS.

Description   

In the first part, the minutes of a time field are selected by specifying an offset. Then the minutes and seconds are set to their initial values by specifying an offset in the CLEAR statement.

In the second part, the five digit sequence 78901 from the field f2 is replaced with DEFGH from f1 by specifying offsets and lengths.

In the third part, assignments are used. First, the content of f1 is assigned to f2 without offset specifications. The same is then done with offsets and lengths for f1. The next three assignments overwrite the content of f2 with an offset of 2. Note that f2 is padded on the right with blanks, in accordance with the conversion rule for source type c.

In the fourth part, string templates are used. The first six places of the field number are written left-aligned, centered, and right-aligned to the last 12 places of the text field