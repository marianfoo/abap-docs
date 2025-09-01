# ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Iteration Expressions / REDUCE, Reduction Operator

Included pages: 3



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenconstructor_expression_reduce.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_reduce.htm)
- [abenreduce_constructor_inference.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreduce_constructor_inference.htm)
- [abenreduce_type_inference_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreduce_type_inference_abexa.htm)

**Bundle Contains**: 3 documentation pages
**Version**: ABAP 7.58
**Generated**: 2025-09-01T11:25:28.996Z

---

### abenconstructor_expression_reduce.htm

> **📖 Official SAP Documentation**: [abenconstructor_expression_reduce.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_reduce.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenconstructor_expression_reduce.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_reduce.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20REDUCE%2C%20Reduction%20Operator%2C%20ABENCONSTRUCTOR_EXPRESSION_REDUCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

REDUCE, Reduction Operator

Syntax

... REDUCE type(
      *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]*
      INIT *{*x1 = rhs1*}**|**{*<x1> = wrexpr1*}**|**{*x1*|*<x1> TYPE dtype1*}*
           *{*x2 = rhs2*}**|**{*<x2> = wrexpr2*}**|**{*x2*|*<x2> TYPE dtype2*}*
           ...
      [FOR for\_exp1](javascript:call_link\('abenfor.htm'\))
      [FOR for\_exp2](javascript:call_link\('abenfor.htm'\))
      ...
      NEXT ...
           *{*x1 =*|*+=*|*\-=*|*\*=*|*/=*|*&&= rhs1*}**|**{*<x1> =*|*+=*|*\-=*|*\*=*|*/=*|*&&= wrexpr1*}*
           *{*x2 =*|*+=*|*\-=*|*\*=*|*/=*|*&&= rhs2*}**|**{*<x2> =*|*+=*|*\-=*|*\*=*|*/=*|*&&= wrexpr2*}*
           ... ) ...

Effect

A [constructor expression](javascript:call_link\('abenconstructor_expressions.htm'\)) with the reduction operator REDUCE creates a result of a data type specified using type from one or more [iteration expressions](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry"). The following can be specified for type:

-   A non-generic data type dtype.
-   The # character as a symbol for the [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry").
    -   If the data type required in an operand position is unique and known completely, this type is used.
    -   If the operand type is not known completely, the type of the first declaration after INIT, which is always known, is used, except when the constructor expression is passed to an actual parameter with a generically typed formal parameter.
    -   If the constructor expression is passed to an actual parameter with a generically typed formal parameter, the operand type is derived in accordance with [special rules](javascript:call_link\('abenreduce_constructor_inference.htm'\)).

The parameters and arguments of the constructor expression must be specified as follows:

-   First, an optional [LET expression](javascript:call_link\('abaplet.htm'\)) can be specified for defining local helper fields whose value can be used within the expression but can no longer be changed there.
-   Then, an addition INIT must be specified followed by any number of declarations. The declarations after INIT create local variables x1, x2, ... or field symbols <x1>, <x2>, ... to which the same applies with respect to namespace and visibility as to the helper fields declared in a [LET expression](javascript:call_link\('abaplet.htm'\)). The syntax of the declaration is either:
    
    -   the same as in a [LET expression](javascript:call_link\('abaplet.htm'\)) and it follows the rules that apply here.
    -   initial variables or field symbols of the specified data type dtype can be created using TYPE.
    
    At least one variable or field symbol must be specified. The variables or field symbols declared after INIT can only be used after NEXT. In particular, they cannot be used to declare other variables or field symbols.
    
    -   The first variable x1 or the first field symbol <x1> determines the result of the expression and the data type must be convertible to the result type type.
    -   All other variables or field symbols declared after INIT are optional additional helper fields that can be on the left side of assignments after NEXT, unlike those declared after LET.
-   Then, at least one [iteration expression](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") must be specified using [FOR](javascript:call_link\('abenfor.htm'\)) but it is also possible to specify multiple expressions.
    -   If [conditional iterations](javascript:call_link\('abenfor_conditional.htm'\)) are used, the result is created in custom iteration steps.
    -   If [table iterations](javascript:call_link\('abenfor_itab.htm'\)) are used, the lines of existing internal tables are evaluated. This is referred to as a [table reduction](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry"), since any values are constructed from the lines of existing internal tables.
-   Then, assignments must be specified after NEXT that are executed for every iteration of the last FOR expression. For the assignments, either the [assignment operator](javascript:call_link\('abenassignment_operator_glosry.htm'\) "Glossary Entry") \= or the [calculation assignment operators](javascript:call_link\('abencalc_assignment_op_glosry.htm'\) "Glossary Entry") +=, \-=, \*=, /=, or &&= can be specified and the assignment is carried out accordingly. A value or memory area must be assigned to all variables and field symbols declared after INIT. In the case of structured variables or field symbols, an assignment to one of their components is sufficient.
    
    -   The assignment on the right side rhs to variables x takes place in accordance with the rules of a regular assignment using the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)) or a [calculation assignment operator +=, +=, \*=, /=](javascript:call_link\('abencalculation_assignments.htm'\)) or [&&=](javascript:call_link\('abencalculation_assignment_string.htm'\)), which means that any of the possible calls and expressions can be specified for rhs.
    -   Only the result of a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") wrexp can be assigned to a field symbol. The same applies here as to assignments of writable expressions using [ASSIGN](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)), which means that only the expressions listed there can be specified.
    
    The assignments can be listed in any order and they are evaluated from to left to right. Each non-structured variable or field symbol declared after INIT can be specified exactly once as the left side. In the case of structured variables or field symbols, either the entire structure or each component once can be specified as the left side. In addition to the data objects of the program, all local variables and field symbols of the expression visible after the last FOR expression can be used in the operand positions on the right side:
    
    -   All variables and field symbols declared after LET.
    -   All variables and field symbols declared after INIT.
    -   The wa1, wa2, ... or <fs1>, <fs2>, .... filled by the FOR expressions. This enables the content of the lines of the internal tables to be accessed and the result constructed.
    
    All helper fields declared after INTIT can only be specified in read positions on the right side.
    

After the full evaluation, the content of the first variable x1 or the memory area pointed to by the first field symbol <x1> is assigned to the temporary result of the expression of type type in accordance with the [assignment rules](javascript:call_link\('abenconversion_rules.htm'\)).

Hints

-   The name of the operator REDUCE is explained as follows:
    -   [Conditional iterations](javascript:call_link\('abenfor_conditional.htm'\)) are generally used to reduce sets of data objects to a single data object.
    -   [Table iterations](javascript:call_link\('abenfor_itab.htm'\)) for [table reductions](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry") are generally used to reduce the content of the internal tables in question to a summary value. Any result type is possible and does not have to be less complex than the involved internal tables, but this should only be used in exceptional cases. When constructing tables from tables, it is best to use [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") instead.
-   When a local field symbol <xi> is used on the left side of assignments after NEXT, it should be noted that the assignments are not made to the value referenced by the field symbol like in INIT and LET. Instead, the field symbol is set in the same way as in the statement [ASSIGN](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)).
-   Unlike in [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") with the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)), an assignment of a REDUCE expression to a structure or an internal table does not overwrite them completely before the FOR expressions are processed and can be used directly anywhere in the entire expression.
-   If a variable is declared in the first position after INIT and the VALUE operator is specified with the character # on the right side, the result type type of the REDUCE expression is used for this character if possible.
-   Table reductions are also possible with [FOR expressions](javascript:call_link\('abenmesh_for.htm'\)) for [mesh paths](javascript:call_link\('abenmesh_path_glosry.htm'\) "Glossary Entry").
-   [Table filtering](javascript:call_link\('abentable_filtering_glosry.htm'\) "Glossary Entry") can be achieved more efficiently using the [filter operator](javascript:call_link\('abenfilter_operator_glosry.htm'\) "Glossary Entry") [FILTER](javascript:call_link\('abenconstructor_expression_filter.htm'\)).

Example

Calculation of the total of the numbers from 1 to 10 via REDUCE.

cl\_demo\_output=>display(
  REDUCE i( INIT s = 0
            FOR  i = 1 UNTIL i > 10
            NEXT s += i ) ).

Executable Examples

-   [Creating Values with FOR and REDUCE](javascript:call_link\('abencond_iteration_reduce_abexa.htm'\))
-   [Examples of Table Reductions](javascript:call_link\('abentable_reductions_abexas.htm'\)).

Continue
[REDUCE, Type Inference for Actual Parameter](javascript:call_link\('abenreduce_constructor_inference.htm'\))
![Example](exa.gif "Example") [Reduce Operator, Type Inference](javascript:call_link\('abenreduce_type_inference_abexa.htm'\))



**📖 Source**: [abenconstructor_expression_reduce.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_reduce.htm)

### abenreduce_constructor_inference.htm

> **📖 Official SAP Documentation**: [abenreduce_constructor_inference.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreduce_constructor_inference.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenreduce_constructor_inference.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreduce_constructor_inference.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) →  [REDUCE, Reduction Operator](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20REDUCE%2C%20Type%20Inference%20for%20Actual%20Parameter%2C%20ABENREDUCE_CONSTRUCTOR_INFERENCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

REDUCE, Type Inference for Actual Parameter

If a constructor expression

[REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) #( ... INIT ... FOR ... )

is passed to generically typed formal parameters as an actual parameter using the character # as a symbol for the operand type, the following type inference is performed for the character #:

-   If the data type of the first declaration after INIT matches the generic type of the formal parameter, this data type is used.
-   If the data type of the first declaration after INIT does not match the generic type of the formal parameter, the type is derived from the generic type as follows:
    -   string for csequence and clike
    -   xstring for xsequence
    -   decfloat34 for numeric and decfloat
    -   p with the length 8 and no decimal places if p is generic
    -   The [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") for a standard table type with generic primary table key
        
        Generic data types other than table types that are explicitly generic with respect to their secondary table keys cannot be made more concrete and produce a syntax error. More specifically, this applies to the types c, n, and x with generic lengths.
        

Hints

-   The data type of the first declaration after INIT is always identified statically.
-   The rules for derivations of the type where # is specified for actual parameters that are passed to generically typed formal parameters can prevent syntax errors in programs that call a procedure and in which the complete typing of a formal parameter is subsequently generalized by converting to a generic type.

Example

The operator REDUCE generates a result of type string here. The generic parameter p has this type during the execution of the method, which is shown by the value g returned by [DESCRIBE FIELD](javascript:call_link\('abapdescribe_field.htm'\)). The method call leads to a corresponding syntax warning that is suppressed by a pragma.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING p TYPE csequence.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DESCRIBE FIELD p TYPE FINAL(t).
    cl\_demo\_output=>display( |{ p } of type { t }| ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( REDUCE #( INIT s = 0
                        FOR  i = 1 UNTIL i > 10
                        NEXT s += i ) ) ##type.

Executable Example

[Reduce Operator, Type Inference](javascript:call_link\('abenreduce_type_inference_abexa.htm'\))



**📖 Source**: [abenreduce_constructor_inference.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreduce_constructor_inference.htm)

### abenreduce_type_inference_abexa.htm

> **📖 Official SAP Documentation**: [abenreduce_type_inference_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreduce_type_inference_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenreduce_type_inference_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreduce_type_inference_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenreduce_type_inference_abexa.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreduce_type_inference_abexa.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) →  [REDUCE, Reduction Operator](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Reduce%20Operator%2C%20Type%20Inference%2C%20ABENREDUCE_TYPE_INFERENCE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

Reduce Operator, Type Inference

This example demonstrates a type inference for the conversion operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)).

Source Code   

\* Public class definition
CLASS cl\_demo\_reduce\_type\_inference DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    TYPES c10 TYPE c LENGTH 10.
    METHODS:
      meth1 IMPORTING p TYPE c10,
      meth2 IMPORTING p TYPE c,
      meth3 IMPORTING p TYPE csequence,
      descr IMPORTING p TYPE any.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_reduce\_type\_inference IMPLEMENTATION.
  METHOD main.
    DATA txt TYPE c LENGTH 20.
    DATA num TYPE i.
    me->meth1(
                 p = REDUCE #( INIT r1 = txt
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r1 &&= 'x' ) ).
    me->meth1(
                 p = REDUCE #( INIT r2 = num
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r2 += 1 ) ).
    out->line( ).
    me->meth2(
                 p = REDUCE #( INIT r1 = txt
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r1 &&= 'x' ) ).
    "me->meth2(
    "             p = REDUCE #( INIT r2 = num
    "                           FOR i = 1
    "                           UNTIL i > 9
    "                           NEXT r2 +=+ 1 ) ). "not possible
    out->line( ).
    me->meth3(
                 p = REDUCE #( INIT r1 = txt
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r1 &&= 'x' ) ).
    me->meth3(
                 p = REDUCE #( INIT r2 = num
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r2 += 1 ) ) ##type.
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

Constructor expressions with the conversion operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) are passed to differently typed formal parameters of methods. In the case of generic formal parameters, [special rules](javascript:call_link\('abenreduce_constructor_inference.htm'\)) apply when determining the operand type.

-   Completely typed formal parameter
    
    When the method meth1 is called with a completely typed formal parameter, the operand type for # is determined by this parameter and the result of the reduction is converted to c with length 10 in both calls.
    
-   Formal parameter typed generically with c
    
    The operand type for # is determined by the first declaration after INIT.
    
    -   In the first call, the type c with length 20 of the declaration after INIT matches the generic type and is used.
    -   It is not possible to perform a call with the type i of the declaration after INIT, since it does not match the typing and there are no inference rules for the generic type c.
-   Formal parameter typed generically with csequence
    -   In the first call, the type c with length 20 of the declaration after INIT matches the generic type and is used.
    -   In the second call, the type i of the declaration after INIT does not match the generic type and the type string is used, which is indicated by a syntax check warning.
