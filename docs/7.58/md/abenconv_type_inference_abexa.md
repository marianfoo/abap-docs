---
title: "Conversion Operator, Type Inference"
description: |
  This example demonstrates the type inference for the conversion operator CONV(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm). Source Code  Public class definition CLASS cl_demo_conv_type_inference DEFINITION INHERITING FROM cl_demo_classrun
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconv_type_inference_abexa.htm"
abapFile: "abenconv_type_inference_abexa.htm"
keywords: ["do", "if", "case", "method", "class", "data", "types", "field-symbol", "abenconv", "type", "inference", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [CONV, Conversion Operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm) →  [CONV, Type Inference for Actual Parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconv_constructor_inference.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Conversion%20Operator%2C%20Type%20Inference%2C%20ABENCONV_TYPE_INFERENCE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

Conversion Operator, Type Inference

This example demonstrates the type inference for the conversion operator [CONV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_conv\_type\_inference DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    TYPES c10 TYPE c LENGTH 10.
    METHODS:
      meth1 IMPORTING p TYPE c10,
      meth2 IMPORTING p TYPE c,
      meth3 IMPORTING p TYPE csequence,
      descr IMPORTING p TYPE any.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_conv\_type\_inference IMPLEMENTATION.
  METHOD main.
    FIELD-SYMBOLS <fs> TYPE any.
    DATA txt TYPE c LENGTH 20.
    DATA num TYPE i.
    ASSIGN num TO <fs>.
    me->meth1(
              p = CONV #( txt  ) ) ##operator.
    me->meth1(
              p = CONV #( num  ) ).
    me->meth1(
              p = CONV #( <fs> ) ).
    out->line( ).
    me->meth2(
              p = CONV #( txt  ) ) ##operator.
    me->meth2(
              p = CONV #( num  ) ).
    "me->meth2(
    "         p = CONV #( <fs> ) ). "not possible
    out->line( ).
    me->meth3(
              p = CONV #( txt  ) ) ##operator.
    me->meth3(
              p = CONV #( num  ) ) ##type.
    me->meth3(
              p = CONV #( <fs> ) ) ##type.
  ENDMETHOD.
  METHOD descr.
    DATA type   TYPE string.
    DATA length TYPE i.
    DATA(datadescr) = CAST cl\_abap\_datadescr(
        cl\_abap\_typedescr=>describe\_by\_data( p ) ).
    type = datadescr->type\_kind.
    IF type = 'g'.
      type = 'STRING'.
      length = strlen( p ).
    ELSE.
      length = datadescr->length / cl\_abap\_char\_utilities=>charsize.
    ENDIF.
    out->write( |{ type } { length }| ).
  ENDMETHOD.
  METHOD meth1.
    descr( p ).
  ENDMETHOD.
  METHOD meth2.
    descr( p ).
  ENDMETHOD.
  METHOD meth3.
    descr( p ).
  ENDMETHOD.
ENDCLASS.

Description   

Constructor expressions with the conversion operator [CONV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm) are passed to differently typed formal parameters of methods. In the case of generic formal parameters, [special rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconv_constructor_inference.htm) apply when determining the operand type.

-   Completely typed formal parameter
    
    When the method meth1 is called with a completely typed formal parameter, the operand type for # is determined using this parameter and in all three calls there is a conversion to c with length 10, whereby the first conversion is redundant here.
    
-   Formal parameter typed generically with c
    
    The operand type for # is determined from the argument.
    
    -   In the first call, the type c with length 20 of the argument matches the generic type and is used, which is why this conversion is redundant.
    -   In the second call, the type i does not match the generic type and the type c with the predefined [output length](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwrite_output_length.htm) 11 of i is used.
    -   Calls with the generically typed field symbol <fs> are not possible, since no type can be derived from the argument.
-   Formal parameter typed generically with csequence
    -   In the first call, the type c with length 20 of the argument matches the generic type and is used, which is why this conversion is redundant.
    -   In the second call, the type i does not match the generic type and the type string is used, which is indicated by a syntax check warning.
    -   In the third call, no type can be determined from the generically typed field symbol <fs> and the type string is used, which is indicated by a syntax check warning.