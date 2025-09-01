---
title: "Syntax"
description: |
  static_meth(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_stat.htm)( )  static_meth(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_stat.htm)( a )  static_meth(https://help.sap.com/doc/abapdocu_753_index
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_static_short.htm"
abapFile: "abapcall_method_static_short.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abapcall", "static", "short"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencall_procedures.htm) →  [Method Calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_calls.htm) →  [Static Method Calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmethod_calls_static.htm) → 

meth( ... ) - Standalone Method Call

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmeth_call_shortref.htm)

Syntax

*{* [static\_meth](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_stat.htm)( )
*|* [static\_meth](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_stat.htm)( a )
*|* [static\_meth](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_stat.htm)( p1 = a1 p2 = a2 ... )
*|* [static\_meth](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_stat.htm)( *\[*[EXPORTING  p1 = a1 p2 = a2 ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_parameters.htm)*\]*
               *\[*[IMPORTING  p1 = a1 p2 = a2 ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_parameters.htm)*\]*
               *\[*[CHANGING   p1 = a1 p2 = a2 ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_parameters.htm)*\]*
               *\[*[RECEIVING  r  = a](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_parameters.htm)*\]*
               *\[*[EXCEPTIONS *\[*exc1 =n1 exc2 = n2 ...*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_parameters.htm)
                           *\[*[OTHERS = n\_others*\]**\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_parameters.htm) ) *}*.

Alternatives:

[1\. static\_meth( ).](#!ABAP_ALTERNATIVE_1@1@)
[2\. static\_meth( a ).](#!ABAP_ALTERNATIVE_2@2@)
[3\. static\_meth( p1 = a1 p2 = a2 ... ).](#!ABAP_ALTERNATIVE_3@3@)
[4\. static\_meth( EXPORTING ...  IMPORTING ... CHANGING ... RECEIVING ...  ).](#!ABAP_ALTERNATIVE_4@4@)

Effect

Static call of a method specified as a standalone statement using the name [static\_meth](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_stat.htm). The [parameter interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenparameter_interface_glosry.htm "Glossary Entry") of the method is filled with the actual parameters In the parentheses. In the first alternative, no formal parameters are filled with actual parameters. The second and third alternatives are short forms for methods where only the input parameters are filled with actual parameters. The fourth alternative allows all possible formal parameters to be filled with actual parameters and non-class-based exceptions to be handled.

Alternative 1

static\_meth( ).

Effect

Calls the method [static\_meth](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_stat.htm) without pass by parameter. The method can either have no input parameters or input/output parameters or only optional input parameters or input/output parameters. Actual parameters are not assigned to any output parameters or to a return code.

Example

Calls a method without parameters.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS do\_something.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD do\_something.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  c1=>do\_something( ).

Alternative 2

static\_meth( a ).

Effect

This is the short form of the following:

static\_meth( [EXPORTING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_parameters.htm) p = a ).

The method [static\_meth](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_stat.htm) can have the following parameters:

-   Either exactly one non-optional input parameter p and any number of optional input parameters
    
-   Or only optional input parameters (of which p is defined as a preferred parameter using PREFERRED PARAMETER)
    

The value of a is passed to the non-optional input parameter or to the preferred parameter. The actual parameter a can be specified as a data object, a function, or an expression.

The method can only have optional input/output parameters. No actual parameters are assigned to these input/output parameters, to any output parameters, or to a return value.

Example

Calls a method with an input parameter.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS do\_something IMPORTING p TYPE i.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD do\_something.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  c1=>do\_something( 333 ).

Alternative 3

static\_meth( p1 = a1 p2 = a2 ... ).

Effect

This is the short form of the following:

static\_meth( [EXPORTING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_parameters.htm) p1 = a1 p2 = a2 ... ).

The method [static\_meth](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_stat.htm) can have any number of input parameters p1, p2, and so on, which are filled with the actual parameters a1, a2, and so on. The actual parameters can be specified as a data object, a function, or an expression.

The method can only have optional input/output parameters. No actual parameters are assigned to these input/output parameters, to any output parameters, or to a return value.

Example

Calls a method with two input parameters.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS do\_something IMPORTING p1 TYPE i
                                         p2 TYPE i.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD do\_something.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  c1=>do\_something( p1 = 333 p2 = 444 ).

Alternative 4

static\_meth( EXPORTING ...  IMPORTING ... CHANGING ... RECEIVING ... ).

Effect

Calls the method [static\_meth](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_stat.htm) with explicit [pass by parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_parameters.htm) and the option of handling non-class-based exceptions. This format can be used to call methods with any number of parameter interfaces.

Example

Calls a method with explicit pass by parameter.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS do\_something IMPORTING p1 TYPE i
                                         p2 TYPE i
                               EXPORTING p3 TYPE i
                                         p4 TYPE i
                               RETURNING VALUE(r) TYPE i.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD do\_something.
    ...
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  c1=>do\_something( EXPORTING p1 = 333
                              p2 = 444
                    IMPORTING p3 = DATA(a1)
                              p4 = DATA(a2)
                    RECEIVING r  = DATA(a3) ).

Continue
[meth( ... ) - Specifying the Method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_ident_stat.htm)
[super->meth( ... )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_meth_super.htm)