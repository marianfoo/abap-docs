---
title: "Creating Elementary Data Objects"
description: |
  This example demonstrates how elementary data objects are created. Source Code REPORT demo_create_simple_data. CLASS create_demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. PRIVATE SECTION. CLASS-METHODS create_data IMPORTING VALUE(typ) TYPE c VALUE(len) TYPE i VALUE(dec) TYPE i RETURNING V
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencreate_simple_data_abexa.htm"
abapFile: "abencreate_simple_data_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "abencreate", "simple", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data.htm) →  [CREATE DATA - TYPE abap\_type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_built_in.htm) → 

Creating Elementary Data Objects

This example demonstrates how elementary data objects are created.

Source Code

REPORT demo\_create\_simple\_data.
CLASS create\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS create\_data IMPORTING
                                VALUE(typ) TYPE c
                                VALUE(len) TYPE i
                                VALUE(dec) TYPE i
                              RETURNING
                                VALUE(dref) TYPE REF TO data
                              RAISING cx\_sy\_create\_data\_error.
ENDCLASS.
CLASS create\_demo IMPLEMENTATION.
  METHOD main.
    DATA dref TYPE REF TO data.
    FIELD-SYMBOLS <fs> TYPE any.
    DATA: type     LENGTH 10 TYPE c,
          length   TYPE i,
          decimals TYPE i.
    cl\_demo\_input=>add\_field( EXPORTING text  = \`Builtin ABAP Type\`
                              CHANGING  field = type ).
    cl\_demo\_input=>add\_field( EXPORTING text  = \`Length\`
                              CHANGING  field = length ).
    cl\_demo\_input=>request(   EXPORTING text  = \`Decimals\`
                              CHANGING  field = decimals ).
    TRY.
        IF to\_lower( type ) = 'p' AND decimals > 2 \* length - 1.
          "Would lead to undefined state for packed number
          RAISE EXCEPTION TYPE cx\_sy\_create\_data\_error.
        ENDIF.
        dref = create\_data( typ = type
                            len = length
                            dec = decimals ).
        ASSIGN dref->\* TO <fs>.
        DESCRIBE FIELD <fs> TYPE type
                            LENGTH length IN BYTE MODE
                            DECIMALS decimals.
        cl\_demo\_output=>display( |{ type } { length } { decimals }| ).
      CATCH cx\_sy\_create\_data\_error.
        cl\_demo\_output=>display( |Error creating { type } {
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
START-OF-SELECTION.
  create\_demo=>main( ).

Description

The method create\_data creates all elementary data objects that are possible using built-in ABAP types, depending on the input parameters passed.