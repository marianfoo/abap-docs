---
title: "Conversion Operator, Type Inference"
description: |
  This example demonstrates a type inference for the conversion operator CONV(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_conv.htm). Source Code REPORT demo_conv_type_inference. CLASS demo DEFINITION. PUBLIC SECTION. TYPES c10 TYPE c LENGTH 10. CLASS-METH
version: "7.52"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconv_type_inference_abexa.htm"
abapFile: "abenconv_type_inference_abexa.htm"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "field-symbol", "abenconv", "type", "inference", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [CONV - Conversion Operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_conv.htm) →  [CONV - Type Inference for Actual Parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconv_constructor_inference.htm) → 

Conversion Operator, Type Inference

This example demonstrates a type inference for the conversion operator [CONV](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_conv.htm).

Source Code

REPORT demo\_conv\_type\_inference.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    TYPES c10 TYPE c LENGTH 10.
    CLASS-METHODS:
      main,
      meth1 IMPORTING p TYPE c10,
      meth2 IMPORTING p TYPE c,
      meth3 IMPORTING p TYPE csequence,
      descr IMPORTING p TYPE any.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FIELD-SYMBOLS <fs> TYPE any.
    DATA txt TYPE c LENGTH 20.
    DATA num TYPE i.
    ASSIGN num TO <fs>.
    demo=>meth1( p = CONV #( txt  ) ) ##operator.
    demo=>meth1( p = CONV #( num  ) ).
    demo=>meth1( p = CONV #( <fs> ) ).
    cl\_demo\_output=>line( ).
    demo=>meth2( p = CONV #( txt  ) ) ##operator.
    demo=>meth2( p = CONV #( num  ) ).
   "demo=>meth2( p = CONV #( <fs> ) ). "not possible
    cl\_demo\_output=>line( ).
    demo=>meth3( p = CONV #( txt  ) ) ##operator.
    demo=>meth3( p = CONV #( num  ) ) ##type.
    demo=>meth3( p = CONV #( <fs> ) ) ##type.
    cl\_demo\_output=>display( ).  ENDMETHOD.
  METHOD meth1.
    descr( p ).
  ENDMETHOD.
  METHOD meth2.
    descr( p ).
  ENDMETHOD.
  METHOD meth3.
    descr( p ).
  ENDMETHOD.
  METHOD descr.
    DATA type   TYPE string.
    DATA length TYPE i.
    DESCRIBE FIELD p TYPE type.
    IF type = 'g'.
      type = 'STRING'.
      length = strlen( p ).
    ELSE.
      DESCRIBE FIELD p LENGTH length IN CHARACTER MODE.
    ENDIF.
    cl\_demo\_output=>write( |{ type } { length }| ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Passes constructor expressions with the conversion operator [CONV](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_conv.htm) to differently typed formal parameters of methods. In the case of generic formal parameters, [special rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconv_constructor_inference.htm) apply when identifying the operand type.

-   Fully typed formal parameter

When the method meth1 is called with a fully typed formal parameter, the operand type for # is identified using this parameter and the result of the reduction is converted to c with length 10 in both calls. The first conversion is redundant here.

-   Formal parameter typed generically with c

The operand type for # is determined from the argument.

-   In the first call, the type c with length 20 of the argument matches the generic type and is used, which is why this conversion is redundant.

-   In the second call, the type i does not match the generic type and the type c with the predefined [output length](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_output_length.htm) 11 of i is used.

-   Calls with the generically typed field symbol <fs> are not possible, since no type can be derived from the argument.

-   Formal parameter typed generically with csequence

-   In the first call, the type c with length 20 of the argument matches the generic type and is used, which is why this conversion is redundant.

-   In the second call, the type i does not match the generic type and the type string is used. This is indicated by a syntax check warning.

-   In the third call, no type can be determined from the generically typed field symbol <fs> and the type string is used. This is indicated by a syntax check warning.