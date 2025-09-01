  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreference_assignments.htm) →  [Setting Field Symbols](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign.htm) →  [ASSIGN - casting\_spec](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_casting.htm) →  [Casting Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencasting_obsolete_abexas.htm) → 

Field Symbols, Casting Built-In Data Types

This example demonstrates how a casting is performed on built-in data types.

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

This example demonstrates how casting works on built-in data types. First the character string txt is assigned to the field symbol <fs> without casting. Afterwards, txt is assigned to <fs> using casting on types i and x. The second output value depends on the byte order of the current platform. The paired numbers in the last output row represent the hexadecimal code for the character in txt and depend on the character representation on the current AS Instance.

The section of the method that has been commented out also shows the syntax for the relevant [obsolete casting](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_casting_obsolete.htm).