# ABAP - Keyword Documentation / ABAP - Reference / Processing Internal Data / Assignments / = - Assignment Operator

Included pages: 8


### abenequals_operator.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) → 

\= - Assignment Operator

Syntax

lhs = rhs.

Effect

If the character \= is specified in a statement between a left side lhs (or "left hand side") and a right side rhs (or "right hand side"), it works like an [assignment operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassignment_operator_glosry.htm "Glossary Entry") that assigns the value of the right side to the left side, possibly using a [conversion](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_rules.htm).

The right side rhs, the source of the assignment, is a [general expression position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and can be specified as follows:

-   As a single [data object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove.htm)

-   As a [return value or result](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_return_values.htm) of functional methods, predefined functions, or constructor expressions or table expressions

-   As a result of [calculation expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_calc_expr.htm)

The left side lhs, the target of the assignment, is a both a [declaration position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclaration_position_glosry.htm "Glossary Entry") and a [result position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenresult_position_glosry.htm "Glossary Entry") and can be specified as follows:

-   As any data object that can be specified in a [writing position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwriting_position_glosry.htm "Glossary Entry"). The data type of the data object must either be [compatible](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompatible_glosry.htm "Glossary Entry") with the assigned value or must be convertible to the data type of lhs in accordance with one of the [conversion rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_rules.htm). If the assigned value does not match the data type of lhs, the exceptions described in the conversion rules may be raised.

-   As an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm). The data type of the declared variable is determined by the right side and is described as one of the rhs options. Any variables used on the right side cannot be declared on the left side. An identically named data object from a more global context can be used on the right side and is not obscured by the local declaration until after the statement.

-   As a [writable expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwritable_expression_glosry.htm "Glossary Entry") representing an operand to which the right side can be assigned.

If an exception is raised on the right side, the statement is not executed and the value of the target field is undefined.

Notes

-   If lhs is not a data object, it can be prefixed with the obsolete keyword [COMPUTE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute.htm). This keyword is ignored, however, and should no longer be used.

-   Another obsolete variant of the assignment is the statement [MOVE rhs TO lhs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_obs.htm). Here, the left side is on the right side and does not cover all options of the assignment operator \=.

Programming Guideline

[Assignments with the assignment operators \= and ?=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassign_calc_guidl.htm "Guideline") only

Example

Assignments of a literal, a constructor expression, and an arithmetic expression to target fields.

DATA: o1 TYPE i,
      o2 TYPE i,
      r  TYPE i.
o1 = 100.
o2 = CONV #( '200' ).
r  = o1 + o2.

Continue
[\= - Assign Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove.htm)
[\= - Assign Return Values and Results](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_return_values.htm)
[\= - Assign Calculation Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_calc_expr.htm)


### abapmove.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [\= - Assignment Operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm) → 

\= - Assign Data Objects

Syntax

destination = dobj.

Effect

In the simplest assignment case, a data object dobj is on the right side of the [assignment operator \=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm). This data object can be specified as described under [Reading Positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_usage_reading.htm). The content of the data object is assigned to the left side, destination. If necessary, type-specific conversions are made in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_rules.htm). The variant shown here applies to all assignments between operands that are not reference variables. Special [rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_cast.htm) apply to reference variables.

The following can be specified for destination:

-   Any data object that can be specified in a [writing position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwriting_position_glosry.htm "Glossary Entry"). The data type of the data object must be either [compatible](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompatible_glosry.htm "Glossary Entry") with the data type of dobj or it must be possible to convert the content of dobj into the data type of destination in accordance with one of the [conversion rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_rules.htm).
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm). If the data type of dobj is complete, it is used for the declaration. If dobj is a generically typed field symbol or a formal parameter of this kind, the following data types are used:
    

-   string for csequence and clike

-   xstring for xsequence

-   decfloat34 for numeric and decfloat

-   p with the length 8 and no decimal places if p is generic

-   The [standard key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_key_glosry.htm "Glossary Entry") for a standard table type with generic primary table key

Other generic data types (except for table types) that are explicitly generic with respect to their secondary table keys cannot be made more concrete and produce a syntax error.

Notes

-   A special assignment operator, [?=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_cast.htm), which performs a [down cast](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendown_cast_glosry.htm "Glossary Entry"), is available for [assignments of reference variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_assignments.htm).
    
-   If dobj and/or destination are field symbols, the content of the data objects to which the field symbols point is used (as in all ABAP statements). The actual pointer content of a field symbol can only be changed using the statement [ASSIGN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign.htm) or the addition ASSIGNING when processing internal tables ([value semantics](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_semantics_glosry.htm "Glossary Entry")).
    
-   Inline declarations are not possible for every conceivable generic type of dobj. This is because, even in an inline declaration in the position of an actual parameter, the rules for deriving the data type for a generically typed output parameter of a method apply. Here, the typing check allows fewer combinations than the conversion rules of an assignment.
    
-   Strings and internal tables are addressed internally using references. When assignments are made between strings and between internal tables of the same type (if the row type itself does not contain any table types), for performance reasons, only the internal administrative information is passed. After the assignment, the actual string or the actual [table body](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_body_glosry.htm "Glossary Entry") of the source as well as the target object are addressed ([sharing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensharing_glosry.htm "Glossary Entry")). Sharing is valid until the object is accessed to be changed. At this point, the sharing is canceled and a copy of the content is made. The sharing is displayed in the memory consumption display of ABAP Debugger and in the [Memory Inspector](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmemory_inspector_glosry.htm "Glossary Entry") tool. For internal tables where the row type itself contains internal table types, no sharing takes place. Sharing can, however, take place for the subtables with a certain row type.
    
-   If an internal table with a [header line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry") is specified as an operand of an assignment, in nearly all [operand positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperands_data_objects.htm), the header line is addressed and not the [table body](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_body_glosry.htm "Glossary Entry"). To address the table body of a table with a header line, \[\] must be appended to the table name.
    
-   The statement [MOVE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_obs.htm) is an obsolete way of assigning data objects.
    

Example

Assigns a literal to a text string.

DATA text TYPE string.
text = \`blah\`.

Example

Assigns a generically typed field symbol, <fs>, to a data object, number, declared inline. In the assignment, the field symbol has the type i, however the field number is created with the type decfloat34 when the program is generated. A syntax check warning about this is hidden using the pragma ##type.

FIELD-SYMBOLS <fs> TYPE numeric.
ASSIGN 1 TO <fs>.
DATA(number) = <fs> ##type.

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_CONVERSION\_NO\_NUMBER

-   Cause: Operand cannot be interpreted as number when assigned to a [numeric data type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_data_type_glosry.htm "Glossary Entry")
    Runtime error: CONVT\_NO\_NUMBER
    

CX\_SY\_CONVERSION\_OVERFLOW

-   Cause: Overflow in arithmetic operation (type p, with specified length)
    Runtime error: BCD\_FIELD\_OVERFLOW
    
-   Cause: Operand too big or (interim) result too big
    Runtime error: CONVT\_OVERFLOW
    

Non-Handleable Exceptions

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


### abenequals_return_values.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [\= - Assignment Operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm) → 

\= - Assign Return Values and Results

Syntax

destination = [meth( )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_functional.htm) *|* [func( )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_functions_syntax.htm) *|* [constr\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expressions.htm) *|* [table\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm) .

Effect

If one of the following calls or expressions is specified on the right side of the [assignment operator \=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm), its return value or result is determined and assigned to the left side, destination. If necessary, type-dependent conversions are performed in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_rules.htm). The following items are possible on the right side:

-   A [functional method call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") [meth( )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_functional.htm) including [method chainings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_static_chain.htm). The return value of a function method or an attribute addressed using a method chaining always has a full type that must match the type of the left side.

-   A [predefined function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredefined_function_glosry.htm "Glossary Entry") [func( )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_functions_syntax.htm). The type of the return value (which in some numeric functions can be dependent on the data type of the argument) must match the type of the left side.

-   A [constructor expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") [constr\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expressions.htm). The type of the result is determined by the type specified for the constructor expression and must match the type of the left side.

-   A [table expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry") [table\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm). The type of the result must match the type on the left side.

The following can be specified for destination:

-   A [variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvariable_glosry.htm "Glossary Entry") that is compatible with the return value or to whose type the return value or result can be converted.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm). The data type of the declared variable var is the statically known type of the return value or result.
    

Note

If an [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") is specified as an argument for one of the overloaded [numeric functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmathematical_functions.htm), the function itself works like an arithmetic expression and its assignment is one of the [assignments of arithmetic expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_arith_expr.htm). This can cause the conversions to be performed in a different order.

Example

Assigns the return value of a method to an internal table declared inline.

METHOD m1.
  DATA(itab) = m2( ).
  ...
ENDMETHOD.


### abenequals_calc_expr.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [\= - Assignment Operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm) → 

\= - Assign Calculation Expressions

[Calculation expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_expression_glosry.htm "Glossary Entry") are [arithmetic expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"), [string expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_expression_glosry.htm "Glossary Entry"), and [bit expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_expression_glosry.htm "Glossary Entry"). Any calculation expression can be located on the right side of the [assignment operator \=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm).

-   [Assign Arithmetic Expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_arith_expr.htm)

-   [Assign String Expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_string_expr.htm)

-   [Assign Bit Expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_bit_expr.htm)

Continue
[\=, Arithmetic Expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_arith_expr.htm)
[\=, String Expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_string_expr.htm)
[\=, Bit Expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_bit_expr.htm)


### abenequals_arith_expr.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [\= - Assignment Operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm) →  [\= - Assign Calculation Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_calc_expr.htm) → 

\=, Arithmetic Expression

Syntax

result = [arith\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_arith.htm).

Effect

If an [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") [arith\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_arith.htm) is specified on the right side of the [assignment operator \=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm), its [calculation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_type_glosry.htm "Glossary Entry") is calculated and assigned to the left side result.

The following can be specified for result:

-   A [variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvariable_glosry.htm "Glossary Entry") compatible with the numeric result of the arithmetic expression or to whose type the result can be converted.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm). The data type of the declared variable var is the statically known [calculation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_type_glosry.htm "Glossary Entry"), where generically typed field symbols and formal parameters are respected using a [standard type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_type_glosry.htm "Glossary Entry") [described there](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarith_type.htm). In the case of the calculation type p, the data type of the declared variable is always p with the length 8 without decimal places.
    

If an existing variable is specified for result, its data type is respected when determining the [calculation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarith_type.htm). If the calculation type is not the data type of result, the result is converted to the data type of the result field before the assignment is made.

Notes

-   The fact that the result field is respected when the calculation type is determined is a special property of ABAP that should always be kept in mind.
    
-   The calculation type that is dependent on the data type of the result field is a major different from an [assignment of data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove.htm); if data objects are incompatible, the source field is always converted to the data type of the target field. When arithmetic expressions are assigned, their operands can also be converted to the data type of the result field before the calculation.
    
-   A [calculation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_type_glosry.htm "Glossary Entry") p on the right side of an inline declaration can produce the data type p with length 8 and no decimal places and this can produce unexpected results and raise exceptions. It is best to either avoid online declarations when using the calculation type p or to determine the data type by applying the conversion operator [CONV](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_conv.htm) to the arithmetic expression.
    

Example

The first assignment is an assignment of an arithmetic expression, because of its sign. The [calculation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarith_type.htm) is determined as i and result is given the value "731036", the number of days since 01.01.0001. The second assignment, on the other hand, has the same meaning as an [assignment of data objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove.htm) and produces the value "20020704" in result.

DATA: result TYPE string,
      date   TYPE d VALUE '20020704'.
result = + date.
result =   date.

Example

This example demonstrates inline declarations with the calculation type p. Assignments of a data object use its data type, but assignments of an arithmetic expression with the calculation type p use the data type p with length 8 and no decimal places This means that decimal places are lost in the first assignment and that the second assignment produces and overflow and its corresponding exception. The conversion operator CONV can be used to bypass these problems.

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


### abenequals_string_expr.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [\= - Assignment Operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm) →  [\= - Assign Calculation Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_calc_expr.htm) → 

\=, String Expression

Syntax

result = [string\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string.htm).

Effect

If a [string expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_expression_glosry.htm "Glossary Entry") [string\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string.htm) is specified on the right side of the [assignment operator \=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm), its result of type string is calculated and assigned to the left side result.

The following can be specified for result:

-   A [variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvariable_glosry.htm "Glossary Entry") that has type string or to whose data type the result can be converted.

-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm). The data type of the declared variable var is string.

Note

In the following example, the result result is a variable with the type string, strings are appended to this variable on the right side, and the strings cannot be dependent on result (as known by the compiler):

result = result && dobj1 && dobj2 && ...

result = |result...{ dobj1 ... }...{ dobj2 ... }...|.

Here, no subtotal is created and an append is made directly on result. In all other cases (namely data types other than string or when expressions or functions are appended on the right side), a subtotal is created first and then assigned. This optimized method improves performance, but care should be taken, especially in loops, that this improvement is not canceled out by using expression or functions on the right side (even if they are not dependent on result). See also the [Performance Note](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_expr_perfo.htm) for string expressions.

Example

The first assignment declares a target field of the type string inline and assigns it the chained text "12". The second assignment converts the chained text "12" to the number 12.

DATA(text) = '1' && '2'.
DATA number TYPE i.
number = 1 && 2.


### abenequals_bit_expr.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [\= - Assignment Operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm) →  [\= - Assign Calculation Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_calc_expr.htm) → 

\=, Bit Expression

Syntax

result = [bit\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_bit.htm).

Effect

If a [bit expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_expression_glosry.htm "Glossary Entry") [bit\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_bit.htm) is specified on the right side of the [assignment operator \=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm), a byte chain with the [calculation length](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbitexp_length.htm) is calculated and assigned to the left side result like a [source field with the type xstring](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_xstring.htm).

The following can be specified for result:

-   A [variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvariable_glosry.htm "Glossary Entry") with the type x or xstring.

-   A [variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvariable_glosry.htm "Glossary Entry") with the type c or string .

-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm). The data type of the declared variable var is xstring.

Example

Bit expressions as the right side of assignments. The expressions can also be used directly as input parameters of the output methods.

DATA hex1 TYPE xstring VALUE '0123456789ABCDEF'.
DATA hex2 TYPE xstring VALUE 'FEDCBA9876543210'.
DATA(result1)  = hex1 BIT-AND hex2.
DATA(result2)  = hex1 BIT-OR hex2.
cl\_demo\_output=>write(   result1 ).
cl\_demo\_output=>display( result2 ).


### abenequals_calc_expr.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) →  [\= - Assignment Operator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm) → 

\= - Assign Calculation Expressions

[Calculation expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_expression_glosry.htm "Glossary Entry") are [arithmetic expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"), [string expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_expression_glosry.htm "Glossary Entry"), and [bit expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_expression_glosry.htm "Glossary Entry"). Any calculation expression can be located on the right side of the [assignment operator \=](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_operator.htm).

-   [Assign Arithmetic Expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_arith_expr.htm)

-   [Assign String Expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_string_expr.htm)

-   [Assign Bit Expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_bit_expr.htm)

Continue
[\=, Arithmetic Expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_arith_expr.htm)
[\=, String Expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_string_expr.htm)
[\=, Bit Expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenequals_bit_expr.htm)
