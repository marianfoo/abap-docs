---
title: "Syntax"
description: |
  meth(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_meth_ident_stat.htm)( )  meth(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_meth_ident_stat.htm)( a )  meth(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_static_short.htm"
abapFile: "abapcall_method_static_short.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abapcall", "static", "short"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencall_procedures.htm) →  [Method Calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethod_calls.htm) →  [Static Method Calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethod_calls_static.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20meth%28%20...%20%29%2C%20Standalone%20Method%20Call%2C%20ABAPCALL_METHOD_STATIC_SHORT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

meth( ... ), Standalone Method Call

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmeth_call_shortref.htm)

Syntax

*{* [meth](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_meth_ident_stat.htm)( )
*|* [meth](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_meth_ident_stat.htm)( a )
*|* [meth](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_meth_ident_stat.htm)( p1 = a1 p2 = a2 ... )
*|* [meth](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_meth_ident_stat.htm)( *\[*[EXPORTING  p1 = a1 p2 = a2 ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_parameters.htm)*\]*
        *\[*[IMPORTING  p1 = a1 p2 = a2 ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_parameters.htm)*\]*
        *\[*[CHANGING   p1 = a1 p2 = a2 ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_parameters.htm)*\]*
        *\[*[RECEIVING  r  = a](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_parameters.htm)*\]*
        *\[*[EXCEPTIONS *\[*exc1 =n1 exc2 = n2 ...*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_parameters.htm)
                    *\[*[OTHERS = n\_others*\]**\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_parameters.htm) ) *}*.

Alternatives:

[1\. meth( ).](#!ABAP_ALTERNATIVE_1@1@)
[2\. meth( a ).](#!ABAP_ALTERNATIVE_2@2@)
[3\. meth( p1 = a1 p2 = a2 ... ).](#!ABAP_ALTERNATIVE_3@3@)
[4\. meth( EXPORTING ...  IMPORTING ... CHANGING ... RECEIVING ... ).](#!ABAP_ALTERNATIVE_4@4@)

Effect

Static call of a method specified as a standalone statement using the name [meth](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_meth_ident_stat.htm). The [parameter interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of the method is filled with the actual parameters in the parentheses. In the first alternative, no formal parameters are supplied with actual parameters. The second and third alternatives are short forms for methods where only the input parameters are supplied with actual parameters. The fourth alternative allows all possible formal parameters to be supplied with actual parameters and non-class-based exceptions to be handled.

System Fields

Each method call sets the system field sy-subrc to 0 in the moment the method is called. Handling [non-class-based exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexceptions_non_class.htm) can change this value.

Hint

The static method call described here must not be confused with the call of [static methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_method_glosry.htm "Glossary Entry"). A static method call is the static specification of an [instance method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninstance_method_glosry.htm "Glossary Entry") or a static method. In addition, there is the [dynamic method call](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethod_calls_dynamic.htm), for which the methods are specified dynamically.

Alternative 1   

meth( ).

Effect

Call of the method [meth](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_meth_ident_stat.htm) without passing parameters. The method cannot have any or can have only optional input parameters or input/output parameters. No actual parameters are assigned to any output parameters or to a return value.

Example

Call of a method without parameters.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS do\_something.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD do\_something.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    c1=>do\_something( ).
  ENDMETHOD.
ENDCLASS.

Alternative 2   

meth( a ).

Effect

This is the short form of:

meth( [EXPORTING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_parameters.htm) p = a ).

The method [meth](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_meth_ident_stat.htm) can have the following parameters:

-   Either exactly one non-optional input parameter p and any number of optional input parameters
-   Or only optional input parameters from which p is defined as a preferred parameter using PREFERRED PARAMETER

The value of a is passed to the non-optional input parameter or to the preferred parameter. The actual parameter a can be specified as a data object, a function, or an expression.

The method can only have optional input/output parameters. No actual parameter is assigned to these input/output parameters, any output parameters, or return values.

Example

Call of a method with an input parameter.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS do\_something IMPORTING p TYPE i.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD do\_something.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    c1=>do\_something( 333 ).
  ENDMETHOD.
ENDCLASS.

Alternative 3   

meth( p1 = a1 p2 = a2 ... ).

Effect

This is the short form of:

meth( [EXPORTING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_parameters.htm) p1 = a1 p2 = a2 ... ).

The method [meth](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_meth_ident_stat.htm) can have any number of input parameters p1, p2, ... that are supplied with the actual parameters a1, a2, .... The actual parameters can be specified as a data object, a function, or an expression.

The method can only have optional input/output parameters. No actual parameter is assigned to these input/output parameters, any output parameters, or return values.

Example

Call of a method with two input parameters.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS do\_something IMPORTING p1 TYPE i
                                         p2 TYPE i.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD do\_something.
    ...
  ENDMETHOD.
ENDCLASS.
  CLASS exa IMPLEMENTATION.
  METHOD main.
    c1=>do\_something( p1 = 333 p2 = 444 ).
  ENDMETHOD.
ENDCLASS.

Alternative 4   

meth( EXPORTING ...  IMPORTING ... CHANGING ... RECEIVING ... ).

Effect

Call of the method [meth](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_meth_ident_stat.htm) with explicit [parameter passing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_parameters.htm) and the option of handling non-class-based exceptions. This format can be used to call methods with any number of parameter interfaces.

Example

Call of a method with explicit parameter passing.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS do\_something IMPORTING p1       TYPE i
                                         p2       TYPE i
                               EXPORTING p3       TYPE i
                                         p4       TYPE i
                               RETURNING VALUE(r) TYPE i.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD do\_something.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    c1=>do\_something( EXPORTING p1 = 333
                              p2 = 444
                    IMPORTING p3 = FINAL(a1)
                              p4 = FINAL(a2)
                    RECEIVING r  = FINAL(a3) ).
  ENDMETHOD.
ENDCLASS.

Continue
[meth( ... ), Static Method Specification](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_meth_ident_stat.htm)
[super->meth( ... )](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_meth_super.htm)