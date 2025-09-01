  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning References](javascript:call_link\('abenreference_assignments.htm'\)) →  [Setting Field Symbols](javascript:call_link\('abenset_field_symbols.htm'\)) →  [ASSIGN](javascript:call_link\('abapassign.htm'\)) →  [ASSIGN - casting\_spec](javascript:call_link\('abapassign_casting.htm'\)) →  [Casting Examples](javascript:call_link\('abencasting_obsolete_abexas.htm'\)) → 

Field Symbols, Casting Predefined Data Types

This example demonstrates how a casting is performed on predefined data types.

Source Code

REPORT demo\_field\_symbols\_assign\_type.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA txt(8) TYPE c VALUE '20050606'.
    DATA mytype(1) VALUE 'X'.
    FIELD-SYMBOLS <fs> TYPE ANY.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'Cast with built-in types' ).
    ASSIGN txt TO <fs>.
    out->write( |<fs> with inherited type c: { <fs> }| ).
\* correct -------------------------------------------------------------
    ASSIGN txt TO <fs> CASTING TYPE i.
    out->write( |<fs> casted with i: { <fs> }| ).
    ASSIGN txt TO <fs> CASTING TYPE (mytype).
    out->write( |<fs> casted with x: { <fs> }| ).
    out->display( ).
\* obsolete, not allowed in methods ------------------------------------
    "ASSIGN txt TO <fs> TYPE 'D'.
    "ASSIGN txt TO <fs> TYPE mytype.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example demonstrates how casting works on predefined data types. First the character string txt is assigned to the field symbol <fs> without casting. Afterwards, txt is assigned to <fs> using casting on types i and x. The value of the second task depends on the byte sequence of the current platform. The paired numbers in the last output row represent the hexadecimal code for the character in txt and depend on the character display of the current application server.

The section of the method that has been commented out also shows the syntax for the relevant [obsolete casting](javascript:call_link\('abapassign_casting_obsolete.htm'\)).