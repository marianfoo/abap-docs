---
title: "Value Operator, Type Inference"
description: |
  This example demonstrates a type inference for the value operator VALUE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm). Source Code  Public class definition CLASS cl_demo_value_type_inference DEFINITION INHERITING FROM cl_demo_classrun
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_type_inference_abexa.htm"
abapFile: "abenvalue_type_inference_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "types", "abenvalue", "type", "inference", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencreate_objects.htm) →  [VALUE, Value Operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm) →  [VALUE, Initial Value for All Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_init.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Value%20Operator%2C%20Type%20Inference%2C%20ABENVALUE_TYPE_INFERENCE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Value Operator, Type Inference

This example demonstrates a type inference for the value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_value\_type\_inference DEFINITION
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
CLASS cl\_demo\_value\_type\_inference IMPLEMENTATION.
  METHOD main.
    me->meth1( p = VALUE #(  ) ).
    out->line( ).
    "me->meth2( p = value #(  ) ).
    "not possible
    out->line( ).
    me->meth3( p = VALUE #(  ) ) ##type.
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

Constructor expressions with the value operator [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_init.htm) for initial values are passed to differently typed formal parameters of methods.

-   Completely typed formal parameter
    
    When the method meth1 is called with a completely typed formal parameter, the operand type for # is determined using this parameter and the result of the value operator is an initial field of type c with length 10.
    
-   Formal parameter typed generically with c
    
    No call is possible here, since there is no inference rule for the generic type c.
    
-   Formal parameter typed generically with csequence
    
    In accordance with the inference rule for csequence, the result of the value operator is an initial field of type string, which is indicated by a syntax check warning.