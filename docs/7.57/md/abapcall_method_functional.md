---
title: "Syntax"
description: |
  ...  meth(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_meth_ident_stat.htm)( )  meth(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_meth_ident_stat.htm)( a )  meth(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abap
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_functional.htm"
abapFile: "abapcall_method_functional.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abapcall", "functional"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_procedures.htm) →  [Method Calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_calls.htm) →  [Static Method Calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_calls_static.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: meth\( ... \), Functional Method Call, ABAPCALL_METHOD_FUNCTIONAL, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

meth( ... ), Functional Method Call

Syntax

... *{* [meth](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_meth_ident_stat.htm)( )
    *|* [meth](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_meth_ident_stat.htm)( a )
    *|* [meth](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_meth_ident_stat.htm)( p1 = a1 p2 = a2 ... )
    *|* [meth](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_meth_ident_stat.htm)( *\[*[EXPORTING p1 = a1 p2 = a2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_parameters.htm)*\]*
            *\[* [IMPORTING p1 =a1 p2 = a2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_parameters.htm)*\]*
            *\[*[CHANGING  p1 =a1 p2 = a2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_parameters.htm)*\]* ) *}* ...

Effect

Functional call of a [functional method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_glosry.htm "Glossary Entry") [meth](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_meth_ident_stat.htm) in a suitable [read position for functions and expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexpression_positions.htm). The return value of the method declared using [RETURNING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_functional.htm) is used as an operand and its complete typing determines the data type of the operand. The actual parameters bound to [output parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoutput_parameter_glosry.htm "Glossary Entry") and [input/output parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry") are handled in the same way as in [standalone method calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_static_short.htm).

The semantics of the syntax used in parameter passing are the same as in standalone method calls. Functional method calls differ from standalone method calls in the following ways:

-   The return value in functional method calls cannot be assigned to an actual parameter explicitly using [RECEIVING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_parameters.htm).
-   [Inline declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninline_declaration_glosry.htm "Glossary Entry") are not possible for actual parameters.
-   Non-class-based exceptions cannot be handled using [EXCEPTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_parameters.htm).

If the return value of the method has a structured data type, a functional method call can, like a structure, be listed in front of the [structure component selector](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstructure_component_sel_glosry.htm "Glossary Entry") \- and used to access a component of the structure.

If a functional method has the same name as a [built-in function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_function_glosry.htm "Glossary Entry"), the functional method is always called.

If an exception is raised when the functional method call is used as an operand, it cannot always be handled, but can cause a runtime error, depending on the position of the operand.

System Fields

Each method call sets the system field sy-subrc to 0 in the moment the method is called.

Hints

-   In functional method calls, class-based exceptions that are propagated from the method can be handled as usual in a [TRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptry.htm) control structure or propagated further. The [non-class-based](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexceptions_non_class.htm) exceptions of a functional method, however, always produce a runtime error.
-   The same applies to [resumable exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenresumable_exception_glosry.htm "Glossary Entry") in functional method calls as to all other methods. If processing can be resumed successfully, the execution of the statement called in the method is completed.
-   [Method chaining](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") is possible in the operand positions where functional methods can be specified.
-   A functional method call whose first method is an instance method can be introduced using the instance operator [NEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_new.htm) or the casting operator [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_cast.htm).
-   A single functional method call can be used as a [predicative method call](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicative_method_call_glosry.htm "Glossary Entry") and as a [relational expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrelational_expression_glosry.htm "Glossary Entry").
-   In functional calls of a functional method, an implicit temporary actual parameter is always assigned to the return value and this parameter is used as the operand of the current operand position. This means that the [predicate expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [IS SUPPLIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_supplied.htm) is always true for the return value within a functionally called method.
-   Since functional method calls can be nested in any way, inline declarations for actual parameters could lead to confusing effects and are therefore not allowed.
-   Since each successful method call sets the system field sy-subrc to 0, all statements with functional method calls can change the value of this field.
-   When used as operands of [arithmetic expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_arith.htm), the results of functional calls of a functional methods are calculated before evaluating the arithmetic expression and their result is buffered for usage in the respective operand position. This might lead to unexpected results, especially if the method call has side-effects. See the example under [Arithmetic Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_arith.htm).

Example

Functional call of a method. Unlike in the example for [standalone method calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_method_static_short.htm), the return value is assigned to the result. The inline declarations made here, however, are not possible.

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
DATA: a1 TYPE i,
      a2 TYPE i.
START-OF-SELECTION.
  FINAL(result) =
    c1=>do\_something( EXPORTING p1 = 333
                                p2 = 444
                      IMPORTING p3 = a1
                                p4 = a2 ).

Example

The [functional method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_glosry.htm "Glossary Entry") factorial in this example has the return value fact of type int8, used on the right side of an assignment in an expression.

CLASS math DEFINITION.
  PUBLIC SECTION.
    METHODS factorial
      IMPORTING n           TYPE i
      RETURNING VALUE(fact) TYPE int8.
ENDCLASS.
CLASS math IMPLEMENTATION.
  METHOD factorial.
    fact = COND int8( WHEN n < 0 THEN 0
                                 ELSE REDUCE int8(
                                   INIT f = CONV int8( 1 )
                                   FOR  i = 1 UNTIL i > n
                                   NEXT f \*= i  ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  FINAL(result) = 100 + NEW math( )->factorial( 4 ).

Example

The [functional method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunctional_method_glosry.htm "Glossary Entry") get in this example has a structured return value whose component carrname is accessed.

CLASS carriers DEFINITION.
  PUBLIC SECTION.
    METHODS get
      IMPORTING carrid   TYPE scarr-carrid
      RETURNING VALUE(r) TYPE scarr.
ENDCLASS.
CLASS carriers IMPLEMENTATION.
  METHOD get.
    SELECT SINGLE \*
           FROM scarr
           WHERE carrid = @carrid
           INTO @r.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  cl\_demo\_output=>display( NEW carriers( )->get( 'LH' )-carrname ).