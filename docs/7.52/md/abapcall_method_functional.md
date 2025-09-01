---
title: "Syntax"
description: |
  ...  static_meth(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_meth_ident_stat.htm)( )  static_meth(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_meth_ident_stat.htm)( a )  static_meth(https://help.sap.com/doc/abapdocu_752_i
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_functional.htm"
abapFile: "abapcall_method_functional.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abapcall", "functional"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencall_procedures.htm) →  [Method Calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_calls.htm) →  [Static Method Calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_calls_static.htm) → 

meth( ... ) - Functional Method Call

Syntax

... *{* [static\_meth](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_meth_ident_stat.htm)( )
    *|* [static\_meth](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_meth_ident_stat.htm)( a )
    *|* [static\_meth](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_meth_ident_stat.htm)( p1 = a1 p2 = a2 ... )
    *|* [static\_meth](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_meth_ident_stat.htm)( *\[*[EXPORTING  p1 = a1 p2 = a2 ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_parameters.htm)*\]*
                   *\[*[IMPORTING  p1 =a1 p2 = a2 ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_parameters.htm)*\]*
                   *\[*[CHANGING   p1 =a1 p2 = a2 ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_parameters.htm)*\]* ) *}* ...

Effect

Functional call of a [functional method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_glosry.htm "Glossary Entry") [static\_meth](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_meth_ident_stat.htm) in a suitable [reading position for functions and expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_positions.htm). The return code of the method declared using [RETURNING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethods_functional.htm) is used as an operand and its full typing determines the data type of the operand. The actual parameters bound to [output parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoutput_parameter_glosry.htm "Glossary Entry") and [input/output parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry") are handled in the same way as in [standalone method calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_static_short.htm).

The semantics of the syntax used in parameter passing are the same as in standalone method calls. Functional method calls differ from standalone method calls in the following ways:

-   The return code in functional method calls cannot be assigned to an actual parameter explicitly using [RECEIVING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_parameters.htm).
    
-   [Inline declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninline_declaration_glosry.htm "Glossary Entry") are not possible for actual parameters.
    
-   Non-class-based exceptions cannot be handled using [EXCEPTIONS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_parameters.htm).
    

If the return code of the method has a structured data type, a functional method call can, like a structure, be specified in front of the [structure component selector](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstructure_component_sel_glosry.htm "Glossary Entry") \- and use this to access a component of the structure.

If the functional method has the same name as a [built-in function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredefined_function_glosry.htm "Glossary Entry"), the functional method is always called.

If an exception is raised when the functional method call is used as an operand, the exception cannot always be handled, and a runtime error can occur instead (depending on the position of the operand).

Notes

-   In functional method calls, class-based exceptions propagated from the method can be handled as usual in a [TRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptry.htm) control structure or propagated further. The [non-class-based](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions_non_class.htm) exceptions of a functional method, however, always produce a runtime error.
    
-   The same applies to [resumable exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenresumable_exception_glosry.htm "Glossary Entry") in functional method calls as to all other methods. If processing can be resumed successfully, execution of the statement called in the method can be completed.
    
-   [Method chaining](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") is possible in the operand positions where functional methods can be specified.
    
-   A functional method call whose first method is an instance method can be introduced using the instance operator [NEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_new.htm) or the casting operator [CAST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_cast.htm).
    
-   A single functional method call can be used as a [predicative method call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicative_method_call_glosry.htm "Glossary Entry") and as a [relational expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrelational_expression_glosry.htm "Glossary Entry").
    
-   Functional method calls can be nested in any way, which means that inline declarations for actual parameters can produce confusing results. For this reason, inline declarations are not allowed.
    
-   If successful, each method call sets the system field sy-subrc to 0, which means that all statements with functional method calls modify the value of this field.
    

Example

Functional call of a method. Unlike in the example for [standalone method calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_static_short.htm), the return code is assigned to the result. The inline declarations made in that example, however, are not possible here.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS do\_something IMPORTING p1 TYPE i
                                         p2 TYPE i
                               EXPORTING p3 TYPE i
                                         p4 TYPE i
                               RETURNING VALUE(r) TYPE i.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD do\_something .
    ...
  ENDMETHOD.
ENDCLASS.
DATA: a1 TYPE i,
      a2 TYPE i.
START-OF-SELECTION.
  DATA(result) =
    c1=>do\_something( EXPORTING p1 = 333
                                p2 = 444
                      IMPORTING p3 = a1
                                p4 = a2 ).

Example

The [functional method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_glosry.htm "Glossary Entry") factorial in this example has the return code fact of type int8, used on the right side of an assignment in an expression.

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
                                   NEXT f =  f \* i  ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  DATA(result) = 100 + NEW math( )->factorial( 4 ).

Example

The [functional method](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_glosry.htm "Glossary Entry") get in this example has a structured return code whose component carrname is accessed.

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