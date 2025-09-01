# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Assignments / =, Assignment Operator

Included pages: 8



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenequals_operator.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_operator.htm)
- [abapmove.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove.htm)
- [abenequals_return_values.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_return_values.htm)
- [abenequals_calc_expr.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_calc_expr.htm)
- [abenequals_arith_expr.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_arith_expr.htm)
- [abenequals_string_expr.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_string_expr.htm)
- [abenequals_bit_expr.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_bit_expr.htm)

**Bundle Contains**: 7 documentation pages
**Version**: ABAP 7.55
**Generated**: 2025-09-01T11:25:45.751Z

---

### abenequals_operator.htm

> **📖 Official SAP Documentation**: [abenequals_operator.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_operator.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) → 

\=, Assignment Operator

Syntax

lhs = rhs.

Effect

If the character \= is specified in a statement between a left side lhs (or "left hand side") and a right side rhs (or "right hand side"), it works like an [assignment operator](javascript:call_link\('abenassignment_operator_glosry.htm'\) "Glossary Entry") that assigns the value of the right side to the left side, using a [conversion](javascript:call_link\('abenconversion_rules.htm'\)) if necessary.

The right side rhs, which is the source of the assignment, is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") and can be specified as follows:

-   As a single [data object](javascript:call_link\('abapmove.htm'\))

-   As a [return value or result](javascript:call_link\('abenequals_return_values.htm'\)) of functional methods, built-in functions, or constructor expressions or table expressions

-   As a result of [calculation expressions](javascript:call_link\('abenequals_calc_expr.htm'\))

The left side lhs, the target of the assignment, is a both a [declaration position](javascript:call_link\('abendeclaration_position_glosry.htm'\) "Glossary Entry") and a [result position](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry") and can be specified as follows:

-   As any data object that can be specified in a [write position](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry"). The data type of the data object must either be [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry") with the assigned value or must be convertible to the data type of lhs in accordance with one of the [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)). If the assigned value does not match the data type of lhs, the exceptions described in the conversion rules can occur.

-   As an inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)). The data type of the declared variable is determined by the right side and is described as one of the rhs options. Any variable that is used on the right side cannot be declared on the left side. An identically named data object of a more global context can be used on the right side and is not hidden by the local declaration until after the statement.

-   As a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") representing an operand to which the right side can be assigned.

If an exception is raised on the right side, the statement is not executed, and the value of the target field is undefined.

Hints

-   See also [calculation assignments](javascript:call_link\('abencalculation_assignment_glosry.htm'\) "Glossary Entry") with the operators [+=](javascript:call_link\('abencalculation_assignments.htm'\)), [\-=](javascript:call_link\('abencalculation_assignments.htm'\)), [\*=](javascript:call_link\('abencalculation_assignments.htm'\)), [/=](javascript:call_link\('abencalculation_assignments.htm'\)), and [&&=](javascript:call_link\('abencalculation_assignment_string.htm'\)).

-   If lhs is a data object, it can be prefixed with the obsolete keyword [COMPUTE](javascript:call_link\('abapcompute.htm'\)), which has no effect and should therefore be omitted.

-   Another obsolete form of the assignment is the statement [MOVE rhs TO lhs](javascript:call_link\('abapmove_obs.htm'\)), where the left side is on the right side and does not include all options of the assignment operator \=.

Programming Guideline

[Assignments with the assignment operators \= and ?= only](javascript:call_link\('abenassign_calc_guidl.htm'\) "Guideline")

Example

Assignments of a literal, a constructor expression, and an arithmetic expression to target fields.

DATA: o1 TYPE i,
      o2 TYPE i,
      r  TYPE i.
o1 = 100.
o2 = CONV #( '200' ).
r  = o1 + o2.

Continue
[\=, Assign Data Objects](javascript:call_link\('abapmove.htm'\))
[\=, Assign Return Values and Results](javascript:call_link\('abenequals_return_values.htm'\))
[\=, Assign Calculation Expressions](javascript:call_link\('abenequals_calc_expr.htm'\))



**📖 Source**: [abenequals_operator.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_operator.htm)

### abapmove.htm

> **📖 Official SAP Documentation**: [abapmove.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [\=, Assignment Operator](javascript:call_link\('abenequals_operator.htm'\)) → 

\=, Assign Data Objects

Syntax

destination = dobj.

Effect

In the simplest assignment case, a data object dobj is on the right side of the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)) and can be specified as described under [Read Positions](javascript:call_link\('abendata_objects_usage_reading.htm'\)). The content of the data object is assigned to the left side, destination. If necessary, type-dependent conversions are made in accordance with the [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)). The variant shown here applies to all assignments between operands that are not reference variables. Special [rules](javascript:call_link\('abapmove_cast.htm'\)) apply to reference variables.

The following can be specified for destination:

-   Any data object that can be specified in a [write position](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry"). The data type of the data object must be either [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry") with the data type of dobj or the content of dobj must be convertible to the data type of destination in accordance with one of the [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)).

-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)). If the data type of dobj is complete, it is used for the declaration. If dobj is a generically typed field symbol or a formal parameter of this type, the following data types are used:

-   string for csequence and clike

-   xstring for xsequence

-   decfloat34 for numeric and decfloat

-   p with the length 8 and no decimal places if p is generic

-   The [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") for a standard table type with generic primary table key

Other generic data types other than table types that are explicitly generic with respect to their secondary table keys cannot be made more concrete and produce a syntax error.

Hints

-   The special assignment operator [?=](javascript:call_link\('abapmove_cast.htm'\)) performs [down casts](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") and is available for [assignments of reference variables](javascript:call_link\('abenreference_assignments.htm'\)).
    

-   If dobj and/or destination are field symbols, the content of the data objects to which the field symbols point is used as in all ABAP statements. The actual pointer content of a field symbol can only be changed using the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)) or the addition ASSIGNING when processing internal tables ([value semantics](javascript:call_link\('abenvalue_semantics_glosry.htm'\) "Glossary Entry")).
    

-   Inline declarations are not possible for every conceivable generic type of dobj. This is because the rules for deriving the used data type apply even in an inline declaration at the position of an actual parameter for a generically typed output parameter of a method apply. Here, the typing check allows fewer combinations than the conversion rules of an assignment.
    

-   Strings and internal tables are addressed internally using references. When assignments are made between strings and between internal tables of the same type (if the line types themselves do not contain any table types), only the internal administrative information is passed for performance reasons. After the assignment, the actual string or the actual [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry") is addressed by the source object as well as the target object ([sharing](javascript:call_link\('abensharing_glosry.htm'\) "Glossary Entry")). Sharing is only removed when the data object is accessed to be changed and a copy of the content is made. The sharing is shown in the memory consumption display of the ABAP Debugger and in the [Memory Inspector](javascript:call_link\('abenmemory_inspector_glosry.htm'\) "Glossary Entry") tool. For internal tables whose line type itself contains internal table types, no sharing takes place. Sharing can, however, take place for the subtables of a certain line type.
    

-   If an internal table with a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") is specified as an operand of an assignment, in nearly all [operand positions](javascript:call_link\('abenoperands_data_objects.htm'\)), the header line is addressed and not the [table body](javascript:call_link\('abentable_body_glosry.htm'\) "Glossary Entry"). To address the table body of a table with a header line, \[\] must be appended to the table name.
    

-   The statement [MOVE](javascript:call_link\('abapmove_obs.htm'\)) is an obsolete way of assigning data objects.
    

Example

Assignment of a literal to a text string.

DATA text TYPE string.
text = \`blah\`.

Example

Assignment of a generically typed field symbol, <fs>, to a data object, number, declared inline. In the assignment, the field symbol has the type i but the field number is already created with the type decfloat34 when the program is generated. A syntax check warning about this is hidden using the pragma ##type.

FIELD-SYMBOLS <fs> TYPE numeric.
ASSIGN 1 TO <fs>.
DATA(number) = <fs> ##type.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_CONVERSION\_NO\_NUMBER

-   Cause: Operand cannot be interpreted as number when assigned to a [numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry")
    Runtime error: CONVT\_NO\_NUMBER

CX\_SY\_CONVERSION\_OVERFLOW

-   Cause: Overflow in arithmetic operation (type p, with specified length)
    Runtime error: BCD\_FIELD\_OVERFLOW

-   Cause: Operand too big or (interim) result too big
    Runtime error: CONVT\_OVERFLOW

Uncatchable Exceptions

-   Cause: Source field (type p) contains an incorrect BCD format
    Runtime error: BCD\_BADDATA

-   Cause: Assignment for deep structures not allowed if they overlap
    Runtime error: MOVE\_COMPLEX\_OVERLAP

-   Cause: Type conflict in assignment between object references
    Runtime error: MOVE\_INTERFACE\_NOT\_SUPPORTED,
    Runtime error: MOVE\_IREF\_NOT\_CONVERTIBLE,
    Runtime error: MOVE\_IREF\_TO\_OREF,
    Runtime error: MOVE\_OREF\_NOT\_CONVERTIBLE

-   Cause: Type conflict in assignment between data references.
    Runtime error: MOVE\_DREF\_NOT\_COMPATIBLE

-   Cause: Assignment between the involved types is not supported
    Runtime error: MOVE\_NOT\_SUPPORTED

-   Cause: Constants and literals cannot be overwritten
    Runtime error: MOVE\_TO\_LIT\_NOTALLOWED

-   Cause: Constants and literals cannot be overwritten
    Runtime error: MOVE\_TO\_LIT\_NOTALLOWED\_NODATA

-   Cause: During a loop on an internal table, an attempt is made to overwrite a reference variable that is associated with the internal table using REFERENCE INTO.
    Runtime error: MOVE\_TO\_LOOP\_REF



**📖 Source**: [abapmove.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove.htm)

### abenequals_return_values.htm

> **📖 Official SAP Documentation**: [abenequals_return_values.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_return_values.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [\=, Assignment Operator](javascript:call_link\('abenequals_operator.htm'\)) → 

\=, Assign Return Values and Results

Syntax

destination = [meth( )](javascript:call_link\('abapcall_method_functional.htm'\)) *|* [func( )](javascript:call_link\('abenbuilt_in_functions_syntax.htm'\)) *|* [constr\_expr](javascript:call_link\('abenconstructor_expressions.htm'\)) *|* [table\_expr](javascript:call_link\('abentable_expressions.htm'\)) .

Effect

If one of the following calls or expressions is specified on the right side of the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)), their return value or result is determined and assigned to the left side, destination. If necessary, type-dependent conversions are performed in accordance with the [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)). The following items are possible on the right side:

-   A [functional method call](javascript:call_link\('abenfunctional_method_call_glosry.htm'\) "Glossary Entry") [meth( )](javascript:call_link\('abapcall_method_functional.htm'\)) including [method chainings](javascript:call_link\('abapcall_method_static_chain.htm'\)). The return value of a function method or an attribute addressed using a method chaining always has a complete type that must match the type of the left side.

-   A [built-in function](javascript:call_link\('abenbuiltin_function_glosry.htm'\) "Glossary Entry") [func( )](javascript:call_link\('abenbuilt_in_functions_syntax.htm'\)). The type of the return value, which can depend on the data type of the argument in some numeric functions, must match the type of the left side.

-   A [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") [constr\_expr](javascript:call_link\('abenconstructor_expressions.htm'\)). The type of the result is determined by the type specified for the constructor expression and must match the type of the left side.

-   A [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") [table\_expr](javascript:call_link\('abentable_expressions.htm'\)). The type of the result must match the type on the left side.

The following can be specified for destination:

-   A [variable](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry") that is compatible with the return value or result, or in whose type the return value or result can be converted.

-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)). The data type of the declared variable var is the statically known type of the return value or result.

Hint

If an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") is specified as an argument for one of the overloaded [numeric functions](javascript:call_link\('abenmathematical_functions.htm'\)), the function itself works like an arithmetic expression and its assignment is one of the [assignments of arithmetic expressions](javascript:call_link\('abenequals_arith_expr.htm'\)), which can cause a different order of conversions.

Example

Assignment of the return value of a method to an internal table declared inline.

METHOD m1.
  DATA(itab) = m2( ).
  ...
ENDMETHOD.



**📖 Source**: [abenequals_return_values.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_return_values.htm)

### abenequals_calc_expr.htm

> **📖 Official SAP Documentation**: [abenequals_calc_expr.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_calc_expr.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [\=, Assignment Operator](javascript:call_link\('abenequals_operator.htm'\)) → 

\=, Assign Calculation Expressions

[Calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry") are [arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"), [string expressions](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry"), and [bit expressions](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry"). Any calculation expression can be located on the right side of the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)).

-   [Assign Arithmetic Expression](javascript:call_link\('abenequals_arith_expr.htm'\))

-   [Assign String Expression](javascript:call_link\('abenequals_string_expr.htm'\))

-   [Assign Bit Expression](javascript:call_link\('abenequals_bit_expr.htm'\))

Continue
[\=, Arithmetic Expression](javascript:call_link\('abenequals_arith_expr.htm'\))
[\=, String Expression](javascript:call_link\('abenequals_string_expr.htm'\))
[\=, Bit Expression](javascript:call_link\('abenequals_bit_expr.htm'\))



**📖 Source**: [abenequals_calc_expr.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_calc_expr.htm)

### abenequals_arith_expr.htm

> **📖 Official SAP Documentation**: [abenequals_arith_expr.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_arith_expr.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [\=, Assignment Operator](javascript:call_link\('abenequals_operator.htm'\)) →  [\=, Assign Calculation Expressions](javascript:call_link\('abenequals_calc_expr.htm'\)) → 

\=, Arithmetic Expression

Syntax

result = [arith\_exp](javascript:call_link\('abapcompute_arith.htm'\)).

Effect

If an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") [arith\_exp](javascript:call_link\('abapcompute_arith.htm'\)) is specified on the right side of the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)), its [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") is calculated and assigned to the left side result.

The following can be specified for result:

-   A [variable](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry") that is compatible with the numeric result of the arithmetic expression or to whose type the result can be converted.

-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)). The data type of the declared variable var is the statically known [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry"), where generically typed field symbols and formal parameters contribute using a [standard type](javascript:call_link\('abenstandard_type_glosry.htm'\) "Glossary Entry") [described there](javascript:call_link\('abenarith_type.htm'\)). In the case of the calculation type p, the data type of the declared variable is always p with the length 8 without decimal places.

If an existing variable is specified for result, its data type is included in the determination of the [calculation type](javascript:call_link\('abenarith_type.htm'\)). If the calculation type is not the data type of result, the result is converted to the data type of the result field before the assignment is made.

Hints

-   The consideration of the result field when the calculation type is determined is a special property of ABAP that should always be kept in mind.

-   The calculation type that is dependent on the data type of the result field is an important difference from an [assignment of data objects](javascript:call_link\('abapmove.htm'\)). If data objects are incompatible, the source field is always converted to the data type of the target field. When arithmetic expressions are assigned, their operands can also be converted to the data type of the result field before the calculation.

-   The fact that a [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") p on the right side of an inline declaration produces the data type p with length 8 and no decimal places can lead to unexpected results and raise exceptions. It is best to either avoid inline declarations when using the calculation type p or to determine the data type by applying the conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) to the arithmetic expression.

-   See also [calculation assignments](javascript:call_link\('abencalculation_assignment_glosry.htm'\) "Glossary Entry") with the operators [+=](javascript:call_link\('abencalculation_assignments.htm'\)), [\-=](javascript:call_link\('abencalculation_assignments.htm'\)), [\*=](javascript:call_link\('abencalculation_assignments.htm'\)) and [/=](javascript:call_link\('abencalculation_assignments.htm'\)).

Example

The first assignment is an assignment of an arithmetic expression, because of the leading plus/minus sign. The [calculation type](javascript:call_link\('abenarith_type.htm'\)) is determined as i and result is given the value "731036", the number of days since 01.01.0001. The second assignment, on the other hand, has the same meaning as an [assignment of data objects](javascript:call_link\('abapmove.htm'\)) and produces the value "20020704" in result.

DATA: result TYPE string,
      date   TYPE d VALUE '20020704'.
result = + date.
result =   date.

Example

This example demonstrates inline declarations with the calculation type p. Assignments of a data object use its data type, but assignments of an arithmetic expression with the calculation type p, the data type p with length 8 and without decimal places is used. This means that decimal places are lost in the first assignment and that the second assignment produces and overflow and its corresponding exception. The conversion operator CONV can be used to avoid these problems.

TYPES pack8\_3  TYPE p LENGTH 8 DECIMALS 3.
TYPES pack16   TYPE p LENGTH 16.
DATA  number1  TYPE pack8\_3 VALUE '12345.6789'.
DATA  number2  TYPE pack16 VALUE  '12345678901234567890'.
DATA(result1) = number1.                    "p, length 8, decimals 3
DATA(result2) = number2.                    "p, length 16
TRY.
    DATA(result3) = 1 \* number1.            "p, length 8, decimals 0
    DATA(result4) = 1 \* number2.            "p, length 8 ->exception
  CATCH cx\_sy\_arithmetic\_overflow.
ENDTRY.
DATA(result5) = CONV pack8\_3( 1 \* number1 ). "p, length 8, decimals 3
DATA(result6) = CONV pack16(  1 \* number2 ). "p, length 16



**📖 Source**: [abenequals_arith_expr.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_arith_expr.htm)

### abenequals_string_expr.htm

> **📖 Official SAP Documentation**: [abenequals_string_expr.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_string_expr.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [\=, Assignment Operator](javascript:call_link\('abenequals_operator.htm'\)) →  [\=, Assign Calculation Expressions](javascript:call_link\('abenequals_calc_expr.htm'\)) → 

\=, String Expression

Syntax

result = [string\_exp](javascript:call_link\('abapcompute_string.htm'\)).

Effect

If a [string expression](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry") [string\_exp](javascript:call_link\('abapcompute_string.htm'\)) is specified on the right side of the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)), its result of type string is calculated and assigned to the left side result.

The following can be specified for result:

-   A [variable](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry") that has type string or to whose data type the result can be converted.

-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)). The data type of the declared variable var is string.

Hints

-   In the following example, the result result is a variable with the type string, and strings are appended to this variable on the right side that cannot be recognized as dependent on result by the compiler:

result = result && dobj1 && dobj2 && ...

result = |result...{ dobj1 ... }...{ dobj2 ... }...|.

Here, no interim result is created but it is directly appended to the result. In all other cases, that is, data types other than string or when expressions or functions are appended on the right side, an interim result is created first and then assigned. This optimization improves performance, but it must be ensured that, especially in loops, this improvement is not canceled out by using expression or functions on the right side, even if they are not dependent on result). See also the [Performance Note](javascript:call_link\('abenstring_expr_perfo.htm'\)) for string expressions.

-   See also [calculation assignment](javascript:call_link\('abencalculation_assignment_glosry.htm'\) "Glossary Entry") with the operator [\*\*=](javascript:call_link\('abencalculation_assignment_string.htm'\)).

Example

The first assignment declares a target field of the type string inline and assigns the chained text "12" to it. The second assignment converts the chained text "12" to the number 12.

DATA(text) = '1' && '2'.
DATA number TYPE i.
number = 1 && 2.



**📖 Source**: [abenequals_string_expr.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_string_expr.htm)

### abenequals_bit_expr.htm

> **📖 Official SAP Documentation**: [abenequals_bit_expr.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_bit_expr.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [\=, Assignment Operator](javascript:call_link\('abenequals_operator.htm'\)) →  [\=, Assign Calculation Expressions](javascript:call_link\('abenequals_calc_expr.htm'\)) → 

\=, Bit Expression

Syntax

result = [bit\_exp](javascript:call_link\('abapcompute_bit.htm'\)).

Effect

If a [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") [bit\_exp](javascript:call_link\('abapcompute_bit.htm'\)) is specified on the right side of the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)), a byte chain with the [calculation length](javascript:call_link\('abenbitexp_length.htm'\)) is calculated and assigned to the left side result like a [source field with the type xstring](javascript:call_link\('abenconversion_type_xstring.htm'\)).

The following can be specified for result:

-   A [variable](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry") with the type x or xstring.

-   A [variable](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry") with the type c or string .

-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)). The data type of the declared variable var is xstring.

Example

Bit expressions as the right side of assignments. The expressions can also be used directly as input parameters of the output methods.

DATA hex1 TYPE xstring VALUE '0123456789ABCDEF'.
DATA hex2 TYPE xstring VALUE 'FEDCBA9876543210'.
DATA(result1)  = hex1 BIT-AND hex2.
DATA(result2)  = hex1 BIT-OR hex2.
cl\_demo\_output=>write(   result1 ).
cl\_demo\_output=>display( result2 ).



**📖 Source**: [abenequals_bit_expr.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_bit_expr.htm)

### abenequals_calc_expr.htm

> **📖 Official SAP Documentation**: [abenequals_calc_expr.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_calc_expr.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenequals_calc_expr.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenequals_calc_expr.htm)


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [\=, Assignment Operator](javascript:call_link\('abenequals_operator.htm'\)) → 

\=, Assign Calculation Expressions

[Calculation expressions](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry") are [arithmetic expressions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"), [string expressions](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry"), and [bit expressions](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry"). Any calculation expression can be located on the right side of the [assignment operator \=](javascript:call_link\('abenequals_operator.htm'\)).

-   [Assign Arithmetic Expression](javascript:call_link\('abenequals_arith_expr.htm'\))

-   [Assign String Expression](javascript:call_link\('abenequals_string_expr.htm'\))

-   [Assign Bit Expression](javascript:call_link\('abenequals_bit_expr.htm'\))

Continue
[\=, Arithmetic Expression](javascript:call_link\('abenequals_arith_expr.htm'\))
[\=, String Expression](javascript:call_link\('abenequals_string_expr.htm'\))
[\=, Bit Expression](javascript:call_link\('abenequals_bit_expr.htm'\))
