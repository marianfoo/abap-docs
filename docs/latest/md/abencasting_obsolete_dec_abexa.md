  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning References](javascript:call_link\('abenreference_assignments.htm'\)) →  [Assigning Field Symbols](javascript:call_link\('abenset_field_symbols.htm'\)) →  [ASSIGN](javascript:call_link\('abapassign.htm'\)) →  [ASSIGN, casting\_spec](javascript:call_link\('abapassign_casting.htm'\)) →  [Casting Examples](javascript:call_link\('abencasting_obsolete_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Field%20Symbols%2C%20Casting%20Decimal%20Places%2C%20ABENCASTING_OBSOLETE_DEC_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

Field Symbols, Casting Decimal Places

This example demonstrates how a casting of decimal places is performed.

Source Code   

\* Public class definition
CLASS cl\_demo\_fld\_smbls\_assign\_deci DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_fld\_smbls\_assign\_deci IMPLEMENTATION.
  METHOD main.
    DATA: pack1 TYPE p DECIMALS 2 VALUE '400',
          pack2 TYPE p DECIMALS 2,
          pack3 TYPE p DECIMALS 2.
    FIELD-SYMBOLS: <f1> TYPE any,
                   <f2> TYPE any.
    out->begin\_section( 'Cast of decimal places' ).
    out->write\_data( pack1 ).
\* correct --------------------------------------------------------------
    ASSIGN pack1 TO <f1> CASTING TYPE p DECIMALS 1.
    out->write( |<f1>: { <f1> }| ).
    pack2 = <f1>.
    out->write( |pack2: { pack2 }| ).
    ASSIGN pack2 TO <f2> CASTING TYPE p DECIMALS 4.
    out->write( |<f2>: { <f2> }| ).
    pack3 = <f1> + <f2>.
    out->write( |pack3: { pack3 }| ).
    <f2> = '1234.56789'.
    out->write( |<f2>: { <f2> }| ).
    out->write( |pack2: { pack2 }| ).
\* obsolete, not allowed in methods -------------------------------------
    "ASSIGN pack1 TO <f1> DECIMALS 1.
    "pack2 = <f1>.
    "ASSIGN pack2 TO <f2> DECIMALS 4.
    "pack3 = <f1> + <f2>.
    "<f2> = '1234.56789'.
  ENDMETHOD.
ENDCLASS.

Description   

The three fields of type p all have two decimal places. The field symbols <f1> and <f2> are given one or four decimal places. The numeric values are different for the field symbols and the assigned fields.

The section of the method that has been commented out also shows the syntax for the respective [obsolete casting](javascript:call_link\('abapassign_casting_obsolete.htm'\)).