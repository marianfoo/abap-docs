  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Assigning References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_assignments.htm) →  [Assigning Field Symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenset_field_symbols.htm) →  [ASSIGN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign.htm) →  [ASSIGN, casting\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_casting.htm) →  [Casting Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencasting_obsolete_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Field%20Symbols%2C%20Casting%20Built-In%20Data%20Types%2C%20ABENCASTING_OBSOLETE_TYPE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

Field Symbols, Casting Built-In Data Types

This example demonstrates how a casting is performed on built-in data types.

Source Code   

\* Public class definition
CLASS cl\_demo\_fld\_smbls\_assign\_type DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_fld\_smbls\_assign\_type IMPLEMENTATION.
  METHOD main.
    DATA txt(8) TYPE c VALUE '20050606'.
    DATA mytype(1) VALUE 'X'.
    FIELD-SYMBOLS <fs> TYPE any.
    out->begin\_section( 'Cast with built-in types' ).
    ASSIGN txt TO <fs>.
    out->write( |<fs> with inherited type c: { <fs> }| ).
\* correct -------------------------------------------------------------
    ASSIGN txt TO <fs> CASTING TYPE i.
    out->write( |<fs> casted with i: { <fs> }| ).
    ASSIGN txt TO <fs> CASTING TYPE (mytype).
    out->write( |<fs> casted with x: { <fs> }| ).
\* obsolete, not allowed in methods ------------------------------------
    "ASSIGN txt TO <fs> TYPE 'D'.
    "ASSIGN txt TO <fs> TYPE mytype.
  ENDMETHOD.
ENDCLASS.

Description   

This example demonstrates how casting works on built-in data types. First the character string txt is assigned to the field symbol <fs> without casting. Afterwards, txt is assigned to <fs> using casting on types i and x. The second output value depends on the byte order of the current platform. The paired numbers in the last output line represent the hexadecimal code for the character in txt and depend on the character representation on the current AS instance.

The section of the method that has been commented out also shows the syntax for the respective [obsolete casting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapassign_casting_obsolete.htm).