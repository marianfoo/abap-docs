  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_data.htm) →  [CREATE DATA, TYPE abap\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_data_built_in.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Creating%20Elementary%20Data%20Objects%2C%20ABENCREATE_SIMPLE_DATA_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Creating Elementary Data Objects

This example demonstrates how elementary data objects are created.

Source Code   

\* Public class definition
CLASS cl\_demo\_create\_simple\_data DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    METHODS create\_data IMPORTING
                          VALUE(typ)  TYPE c
                          VALUE(len)  TYPE i
                          VALUE(dec)  TYPE i
                        RETURNING
                          VALUE(dref) TYPE REF TO data
                        RAISING
                          cx\_sy\_create\_data\_error.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_create\_simple\_data IMPLEMENTATION.
  METHOD main.
    DATA dref TYPE REF TO data.
    DATA: type     LENGTH 10 TYPE c,
          length   TYPE i,
          decimals TYPE i.
    cl\_demo\_input=>new(
      )->add\_field( EXPORTING text  = \`Built-In ABAP Type\`
                    CHANGING  field = type
      )->add\_field( EXPORTING text  = \`Length\`
                    CHANGING  field = length
      )->request(   EXPORTING text  = \`Decimals\`
                    CHANGING  field = decimals ).
    TRY.
        IF to\_lower( type ) = 'p' AND decimals > 2 \* length - 1.
          "Would lead to undefined state for packed number
          RAISE EXCEPTION TYPE cx\_sy\_create\_data\_error.
        ENDIF.
        dref = create\_data( typ = type
                            len = length
                            dec = decimals ).
        FINAL(descr) = CAST cl\_abap\_datadescr(
          cl\_abap\_typedescr=>describe\_by\_data( dref->\* ) ).
        type = descr->type\_kind.
        length = descr->length.
        decimals = descr->decimals.
        out->write( |{ type } { length } { decimals }| ).
      CATCH cx\_sy\_create\_data\_error.
        out->write( |Error creating { type } {
                                                   length } {
                                                   decimals }| ).
    ENDTRY.
  ENDMETHOD.
  METHOD create\_data.
    TRANSLATE typ TO LOWER CASE.
    CASE typ.
      WHEN 'd' OR 'decfloat16' OR 'decfloat34' OR 'f' OR 'i'
               OR 'string' OR 't' OR 'xstring'.
        CREATE DATA dref TYPE (typ).
      WHEN 'c' OR 'n' OR 'x'.
        CREATE DATA dref TYPE (typ) LENGTH len.
      WHEN 'p'.
        CREATE DATA dref TYPE p LENGTH len DECIMALS dec.
      WHEN OTHERS.
        RAISE EXCEPTION TYPE cx\_sy\_create\_data\_error.
    ENDCASE.
  ENDMETHOD.
ENDCLASS.

Description   

The method create\_data creates all elementary data objects that are possible with the built-in ABAP types, depending on the passed input values.