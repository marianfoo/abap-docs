# ABAP Keyword Documentation / ABAP − Reference / Creating Objects and Values / VALUE - Value Operator / VALUE - Initial Value for All Types

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenvalue_constructor_params_init.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_constructor_params_init.htm)
- [abenvalue_type_inference_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_type_inference_abexa.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.940Z

---

### abenvalue_constructor_params_init.htm

> **📖 Official SAP Documentation**: [abenvalue_constructor_params_init.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_constructor_params_init.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [VALUE - Value Operator](javascript:call_link\('abenconstructor_expression_value.htm'\)) → 

VALUE - Initial Value for All Types

Syntax

... VALUE dtype*|*#( ) ...

Effect

If no parameters are specified in the parentheses, the return value is set to its type-specific initial value. This is possible for any non-generic data types dtype. The # character can stand for appropriate operand types known statically. When VALUE #( ) is passed to a generically typed formal parameter, the type is also derived from the generic type of this parameter in the following cases:

-   string for csequence and clike

-   xstring for xsequence

-   decfloat34 for numeric and decfloat

-   p with the length 8 and no decimal places if p is generic

-   The [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") for a standard table type with generic primary table key

Other generic data types (except for table types) that are explicitly generic with respect to their secondary table keys cannot be made more concrete and produce a syntax error. More specifically, this applies to the types c, n, and x with generic lengths.

Notes

-   VALUE with pass by value is used only to construct certain complex values (structures and internal tables). VALUE without pass by value, on the other hand, is a general method for creating type-dependent initial values in any operand positions.

-   Rules apply when deriving the type in cases where # is specified for actual parameters that can be passed to generically typed formal parameters. These rules prevent syntax errors in programs that call a procedure and the procedure makes the full typing of a formal parameter type more general by switching to a generic type.

-   If dtype or # stand for an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), its initial value is generated according to its [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry").

Example

Creates a suitable initial structure for a non-optional input parameter of a method.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    TYPES: BEGIN OF t\_struct,
             col1 TYPE i,
             col2 TYPE i,
           END OF t\_struct.
    CLASS-METHODS m1 IMPORTING p TYPE t\_struct.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  c1=>m1( VALUE #( ) ).

Executable Example

[Value Operator, Type Inference](javascript:call_link\('abenvalue_type_inference_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Value Operator, Type Inference](javascript:call_link\('abenvalue_type_inference_abexa.htm'\))



**📖 Source**: [abenvalue_constructor_params_init.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_constructor_params_init.htm)

### abenvalue_type_inference_abexa.htm

> **📖 Official SAP Documentation**: [abenvalue_type_inference_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_type_inference_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenvalue_type_inference_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_type_inference_abexa.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [VALUE - Value Operator](javascript:call_link\('abenconstructor_expression_value.htm'\)) →  [VALUE - Initial Value for All Types](javascript:call_link\('abenvalue_constructor_params_init.htm'\)) → 

Value Operator, Type Inference

This example demonstrates a type inference for the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)).

Source Code

REPORT demo\_value\_type\_inference.
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
    demo=>meth1( p = VALUE #(  ) ).
    cl\_demo\_output=>line( ).
   "demo=>meth2( p = value #(  ) ). "not possible
    cl\_demo\_output=>line( ).
    demo=>meth3( p = VALUE #(  ) ) ##type.
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

Passes constructor expressions with the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_init.htm'\)) for initial values to differently typed formal parameters of methods.

-   Fully typed formal parameter

When the method meth1 is called with a fully typed formal parameter, the operand type for # is identified using this parameter and the result of the value operator is an initial field of type c with length 10.

-   Formal parameter typed generically with c

No call is possible here, since there is no inference rule for the generic type c.

-   Formal parameter typed generically with csequence

In accordance with the inference rule for csequence, the result of the value operator is an initial field of type string. This is indicated by a syntax check warning.
