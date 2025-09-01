  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning References](javascript:call_link\('abenreference_assignments.htm'\)) →  [Setting Field Symbols](javascript:call_link\('abenset_field_symbols.htm'\)) →  [ASSIGN](javascript:call_link\('abapassign.htm'\)) →  [ASSIGN - casting\_spec](javascript:call_link\('abapassign_casting.htm'\)) →  [Casting Examples](javascript:call_link\('abencasting_obsolete_abexas.htm'\)) → 

Field Symbols, Casting Decimal Places

This example demonstrates how a casting of decimal places is carried out.

Source Code

REPORT demo\_field\_symbols\_assign\_deci.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: pack1 TYPE p DECIMALS 2 VALUE '400',
          pack2 TYPE p DECIMALS 2,
          pack3 TYPE p DECIMALS 2.
    FIELD-SYMBOLS: <f1> TYPE ANY ,
                   <f2> TYPE ANY.
    DATA(out) = cl\_demo\_output=>new(
      )->begin\_section( 'Cast of decimal places' ).
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
    out->display( ).
\* obsolete, not allowed in methods -------------------------------------
    "ASSIGN pack1 TO <f1> DECIMALS 1.
    "pack2 = <f1>.
    "ASSIGN pack2 TO <f2> DECIMALS 4.
    "pack3 = <f1> + <f2>.
    "<f2> = '1234.56789'.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The three fields of type p all have two decimal places. The field symbols <f1> and <f2> are given one or four decimal places. The numeric values are different for the field symbols and the fields assigned to them.

The section of the method that has been commented out also shows the syntax for the relevant [obsolete casting](javascript:call_link\('abapassign_casting_obsolete.htm'\)).