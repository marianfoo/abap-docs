# ABAP Keyword Documentation / ABAP − Reference / Declarations / Typing / Checking Typing

Included pages: 5


### abentyping_check.htm

---
title: "Checking Typing"
description: |
  When data objects are assigned to typed field symbols(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfield_symbol_glosry.htm 'Glossary Entry') and when actual parameters(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenactual_parameter_glosry.htm 'Glossary Entry') a
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check.htm"
abapFile: "abentyping_check.htm"
keywords: ["do", "if", "try", "method", "data", "types", "field-symbol", "abentyping", "check"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping.htm) → 

Checking Typing

When data objects are assigned to typed [field symbols](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfield_symbol_glosry.htm "Glossary Entry") and when [actual parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenactual_parameter_glosry.htm "Glossary Entry") are assigned to typed [formal parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenformal_parameter_glosry.htm "Glossary Entry") of [procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocedure_glosry.htm "Glossary Entry"), a check is made to see whether the data type of the assigned data object matches the typing of the field symbol or of the formal parameter.

-   [General rules for typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check_general.htm)

Special rules apply to the following:

-   [Return values of functional methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_return_values.htm)

-   [Literals as actual parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_literals.htm)

-   [Functions and expressions as actual parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_arith_expr.htm)

Note

When specifying data objects suitable for a typing, an assignment to an helper variable with a valid data type is often made. When methods are called, these types of helper variables can often be skipped by using a [constructor expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") in the position of an actual parameter.

Continue
[General Rules for Typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check_general.htm)
[Return Values of Functional Methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_return_values.htm)
[Literals as Actual Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_literals.htm)
[Functions and Expressions as Actual Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_arith_expr.htm)


### abentyping_check_general.htm

---
title: "General Rules for Typing"
description: |
  The general rules for checking apply strictly to the following: -   The assignment of all data objects to field symbols(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfield_symbol_glosry.htm 'Glossary Entry') -   The binding of the said data objects to input(https://help.sap.com/
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check_general.htm"
abapFile: "abentyping_check_general.htm"
keywords: ["do", "if", "case", "try", "method", "data", "types", "internal-table", "field-symbol", "abentyping", "check", "general"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping.htm) →  [Checking Typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check.htm) → 

General Rules for Typing

The general rules for checking apply strictly to the following:

-   The assignment of all data objects to [field symbols](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfield_symbol_glosry.htm "Glossary Entry")

-   The binding of the said data objects to [input](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninput_parameter_glosry.htm "Glossary Entry"), [input/output](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry"), and [output parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoutput_parameter_glosry.htm "Glossary Entry") for procedures

The general rules for checking the typing are:

-   If the assignment is made to generically typed field symbols or field parameters, the system checks whether the [technical type attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentechnical_type_attr_glosry.htm "Glossary Entry") of the assigned data object are a subset of the generic type. The type attributes that are not defined by typing are applied to the actual parameter.

-   In assignments to fully typed field symbols or formal parameters, the technical properties of the data type of the assigned data object must correspond exactly to the typing. If the assignment is made to field symbols or formal parameters typed with [enumerated types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_enum.htm), the type of the assigned data object must be exactly the same enumerated type as is used for the typing.

-   The result of the typing check when actual parameters are passed to formal parameters is independent of the passing type used. In a [pass by value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_value_glosry.htm "Glossary Entry"), the check for [pass by reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is always carried out, even though this is stricter than necessary in individual cases.

-   If reference variables are passed, [up cast](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenup_cast_glosry.htm "Glossary Entry")s are possible but [down cast](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendown_cast_glosry.htm "Glossary Entry")s are not. If actual parameters are passed to input parameters typed as reference variables, an [up cast](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenup_cast_glosry.htm "Glossary Entry") is only possible if there is no change of content within the procedure. When a [subroutine](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubroutine_glosry.htm "Glossary Entry") is passed to the parameters, an up cast is not possible.

-   If memory areas are assigned to field symbols typed as reference variables, the typing of the field symbol and the static type of the memory area must be the same.

-   If the assignment is made to generically and fully typed field symbols or formal parameters, only the [technical type attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentechnical_type_attr_glosry.htm "Glossary Entry") are checked. The following are not checked:

-   Names of structure components (but the names of [mesh nodes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_node_glosry.htm "Glossary Entry") and [mesh associations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_association_glosry.htm "Glossary Entry") are checked).

-   Semantic properties of data types defined in the ABAP Dictionary (conversion routines, documentation, and so on)

-   Initial memory requirement of internal tables

If generally typed formal parameters or field symbols are accessed dynamically, these attributes are applied to the type of the actual parameter. If generically typed formal parameters or field symbols are accessed statically, these attributes are applied to the typing of the formal parameter.

-   When assigning to field symbols or formal parameters for which a structure is defined with the obsolete STRUCTURE addition are called in Unicode programs, elementary data structures must be character type and flat and for structures the [fragment views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") must match. The assigned data object must be at least as long as the structure.

Notes

-   In the case of generically typed field symbols or formal parameters, and in the case of formal parameters of function modules and externally called subroutines, the typing is checked first at the time of the assignment - that is, at runtime. In the case of fully typed field symbols and formal parameters of methods and internally called subroutines, the check is performed as part of the [syntax check](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensyntax_check_glosry.htm "Glossary Entry").

-   The constructor operators [CONV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_conv.htm) and [CAST](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_cast.htm) are well suited to converting or casting invalid actual parameters to the type of a formal parameter.


### abentyping_return_values.htm

---
title: "Return Values of Functional Methods"
description: |
  The return value of a functional method(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_method_glosry.htm 'Glossary Entry') is always fully typed and is always passed as a value. An actual parameter can be appended to the return value as follows: -   By specifying the met
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_return_values.htm"
abapFile: "abentyping_return_values.htm"
keywords: ["do", "if", "case", "try", "method", "data", "types", "abentyping", "return", "values"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping.htm) →  [Checking Typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check.htm) → 

Return Values of Functional Methods

The return value of a [functional method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunctional_method_glosry.htm "Glossary Entry") is always fully typed and is always passed as a value. An actual parameter can be appended to the return value as follows:

-   By specifying the method in an [operand position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_expressions.htm)

If a function method is used in an operation position, the return value is used like a data object whose data type is determined with an exception by the full typing of the return value (a type-friendly actual parameter is implicitly associated with it). Checking of this typing is not necessary (or is always successful). An error always occurs, however, if the typing of the return value does not match the [operand type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperand_type_glosry.htm "Glossary Entry").

If the return value of a functional method as an actual parameter is bound to a generically typed formal parameter of type p, this uses the decimal places of the return value but not its length. In this case the formal parameter is given a length of 16.

-   In a [method call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_static.htm) with the addition [RECEIVING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameters.htm)

If an actual parameter is specified explicitly after RECEIVING, this parameter does not have to comply with the [general typing rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check_general.htm) for typing the formal parameter. Instead, it is enough if the formal parameter can be converted to the actual parameter in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_rules.htm).

If an exception is raised when the return value is assigned to a formal parameter or when it is used as an operand, the exception cannot always be handled and a runtime error can occur instead (depending on the operand positions).

Notes

-   If reference variables are returned using RECEIVING, an [up cast](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenup_cast_glosry.htm "Glossary Entry") is possible but a [down cast](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendown_cast_glosry.htm "Glossary Entry") is not.

-   The special rule that a generic formal parameter of type p gets a length of 16 when a functional method is passed does not apply to the other generic types any, data, simple, or numeric.


### abentyping_literals.htm

---
title: "Literals as Actual Parameters"
description: |
  Special rules apply to the assignment of literals to formal parameters. They make it possible to assign character literals of type c and string or numeric literals of type i and p to formal parameters whose type would not normally allow this. If the formal parameter has a generic type, the non-speci
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_literals.htm"
abapFile: "abentyping_literals.htm"
keywords: ["do", "if", "case", "try", "catch", "data", "types", "abentyping", "literals"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping.htm) →  [Checking Typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check.htm) → 

Literals as Actual Parameters

Special rules apply to the assignment of literals to formal parameters. They make it possible to assign character literals of type c and string or numeric literals of type i and p to formal parameters whose type would not normally allow this.

If the formal parameter has a generic type, the non-specified type attributes are defined by the contents of the specified literal (see table 1). When a literal is bound, the pass is always executed as [pass by value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_value_glosry.htm "Glossary Entry"), even if [pass by reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is defined for the formal parameter.

If a literal meets the type requirements of the parameter, its contents are assigned to the formal parameter according to the relevant [conversion rules for elementary data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_elementary.htm). However, in contrast to the normal application of these rules, a non-catchable exception is raised if the [value range](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_range_glosry.htm "Glossary Entry") of the target is exceeded.

-   [Checking Character Literals](#abentyping-literals-1--------checking-numeric-literals---@ITOC@@ABENTYPING_LITERALS_2)

Checking Character Literals

The following table shows the requirements that character literals must meet to be assigned to typed formal parameters. These rules apply to both text field literals and text string literals.

Typing

Requirement

c

If the formal parameter has a fixed length, the length of the literal may not exceed this length. If the length is generic, the formal parameter inherits the length of the literal.

d

The literal must be eight characters long.

decfloat, decfloat16, decfloat34

The literal must contain a number in [mathematical](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmathematical_notation_glosry.htm "Glossary Entry"), [commercial](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencommercial_notation_glosry.htm "Glossary Entry"), or [scientific notation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscientific_notation_glosry.htm "Glossary Entry"). If generic typing with decfloat is used, the formal parameter contains the data type decfloat34.

f

The literal must contain a number in [scientific notation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscientific_notation_glosry.htm "Glossary Entry").

i, int8, (b, s)

The literal must contain a number in [mathematical](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmathematical_notation_glosry.htm "Glossary Entry") or [commercial notation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencommercial_notation_glosry.htm "Glossary Entry"). The literal may not contain any [decimal places](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfractional_portion_glosry.htm "Glossary Entry").

n

The literal may only contain digits. If the formal parameter has a fixed length, the length of the literal may not exceed this length. If the length is generic, the formal parameter inherits the length of the literal.

numeric

The literal must contain a number in [mathematical](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmathematical_notation_glosry.htm "Glossary Entry") or [commercial notation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencommercial_notation_glosry.htm "Glossary Entry"). The formal parameter inherits the data type p, length 16, and the decimal spaces specified in the literal.

p

The literal must contain a number in [mathematical](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmathematical_notation_glosry.htm "Glossary Entry") or [commercial notation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencommercial_notation_glosry.htm "Glossary Entry"). If a generic formal parameter is used, the length is set to 16. The number of decimal spaces is set to the number of spaces specified in the literal. If the [program attribute](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_attribute_glosry.htm "Glossary Entry") Fixed Point Arithmetic is activated in the called procedure, the number of decimal places in the literal for a fully typed formal parameter must be less than or equal to the number of decimal places in the formal parameter. If the attribute Fixed Point Arithmetic is deactivated in the called procedure, the number in the literal must have exactly the same number of decimal places as the formal parameter.

string

The literal can have any length.

t

The literal must be six characters long.

x

The literal may only contain valid hexadecimal characters, that is the digits "0" to "9" and the letters "A" to "F". If the formal parameter has a fixed length, the length of the literal may not be more than twice this length. If the length is generic, the number of bytes specified in the literal determines the length of the formal parameter.

xstring

The literal may only contain valid hexadecimal characters, that is the digits "0" to "9" and the letters "A" to "F".

xsequence

The literal may only contain valid hexadecimal characters, that is the digits "0" to "9" and the letters "A" to "F". The formal parameter inherits the data type x. Its length is the number of bytes in the literal.

utclong

The literal can be a left-aligned [character-like representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abents_value.htm) of a time stamp, like "yyyy-mm-ddThh:mm:ss.fffffff", or it can contain only blanks.

All other types have the same requirements of character literals as apply to other actual parameters. Generic formal parameters inherit the type of the actual parameter. With the exception of formal parameters listed in the table above, character literals can only be passed to formal parameters whose typings include the data types c or string.

Notes

-   Character literals that are passed to actual parameters can be joined using the [literal operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenliteral_operator_glosry.htm "Glossary Entry") &. The rules described above apply here. However, if a join with the [chaining operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconcatenation_operator_glosry.htm "Glossary Entry") && is used, the actual parameter is a [string expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_expression_glosry.htm "Glossary Entry") of type string and the formal parameter must be typed accordingly.

-   The requirements in the table above do not fully exclude the case where character literals are passed to actual parameters that do not match their value range. An exception is raised in this case.

Checking Numeric Literals

The following table shows the requirements that numeric literals must meet to be assigned to typed formal parameters.

Typing

Requirement

f

All numeric literals are allowed.

decfloat, decfloat16, decfloat34

All numeric literals are allowed. If generic typing with decfloat is used, the formal parameter contains the data type decfloat34.

i, int8, (b, s)

All numeric literals are allowed.

n

The value of the literal must not be negative. If the formal parameter has a fixed length, the number of digits may not exceed this length. If the length is generic and the literal has the data type i, the length of the formal parameter is set to 10. If the literal has the data type p, the length is set to 31.

p

If a generic formal parameter is used, the length is set to 16 and the number of decimal spaces is set to 0. If the program attribute Fixed Point Arithmetic is deactivated, the formal parameter cannot have any decimal places or the literal must have the value 0.

All other types have the same requirements of numeric literals as of other actual parameters. Generic formal parameters inherit the type of the actual parameters. With the exception of formal parameters listed in the table above, numeric literals can only be passed to formal parameters whose typings include the data types i or p.

Note

The requirements in the table above do not fully exclude the case where numeric literals are passed to actual parameters that do not match their value range. An exception is raised in this case.


### abentyping_arith_expr.htm

---
title: "Functions and Expressions as Actual Parameters"
description: |
  Functions and expressions(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_expressions.htm) can be specified as actual parameters in the following formal parameters: -   Writing Positions -   Output parameters(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/aben
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_arith_expr.htm"
abapFile: "abentyping_arith_expr.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abentyping", "arith", "expr"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping.htm) →  [Checking Typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_check.htm) → 

Functions and Expressions as Actual Parameters

[Functions and expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoperands_expressions.htm) can be specified as actual parameters in the following formal parameters:

-   Writing Positions

-   [Output parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenoutput_parameter_glosry.htm "Glossary Entry"), [input/output parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry"), and [return values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreturn_value_glosry.htm "Glossary Entry") in [method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameters.htm).

-   Reading Positions

-   [Input parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninput_parameter_glosry.htm "Glossary Entry") of [methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmethod_glosry.htm "Glossary Entry") in [method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_parameters.htm), when [objects are created](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_object_parameters.htm), or when exceptions are raised using [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_exception_class.htm) or [THROW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_result.htm) in a [condition exception](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expressions.htm)

-   [Input parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninput_parameter_glosry.htm "Glossary Entry") of [function modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_module_glosry.htm "Glossary Entry") in all variants of the statement [CALL FUNCTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function.htm).

The parameters are read from left to right (and from inside to outside) and the procedure executed. A parameter cannot be modified by the method itself or by the evaluation of a preceding expression. This applies in particular to [writable expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwritable_expression_glosry.htm "Glossary Entry") in [result positions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenresult_position_glosry.htm "Glossary Entry").

Special rules apply to typing checks, identifying the calculation type, and parameter passes.

-   [Checking Typing](#abentyping-arith-expr-1--------calculation-type-and-calculation-length---@ITOC@@ABENTYPING_ARITH_EXPR_2)

-   [Passing Parameters](#abentyping-arith-expr-3--------fully-typed---@ITOC@@ABENTYPING_ARITH_EXPR_4)

-   [Generically Typed](#@@ITOC@@ABENTYPING_ARITH_EXPR_5)

Notes

-   In the case of [dynamic method calls](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_method_dynamic.htm), the same rules apply as to static method calls. However, the handling during runtime is time-consuming. Therefore, helper variables should be used in a dynamic call instead of functions or arithmetic expressions if possible. Function module calls are always dynamic and, compared to method calls, fewer rules apply.

-   A [system field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_field_glosry.htm "Glossary Entry") should [never be used an actual parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuse_actual_parameters_guidl.htm "Guideline").

Checking Typing

-   A [numeric function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmathematical_funktion_glosry.htm "Glossary Entry"), a [description function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendescription_function_glosry.htm "Glossary Entry"), or an [arithmetic expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") can

-   be bound to any numeric input parameter or any input parameter typed using the type any in a method call.

-   be bound to any appropriately typed input parameter in a function module call.

-   A [bit function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbit_function_glosry.htm "Glossary Entry") or a [bit expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbit_expression_glosry.htm "Glossary Entry") can

-   be bound to any byte-like or general typed input parameter in a method call.

-   be passed to input parameters of the type x or a generic type covering x in function module calls.

-   A [string function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_function_glosry.htm "Glossary Entry") or a [string expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_expression_glosry.htm "Glossary Entry") can

-   be bound to any character-like or general typed input parameter in a method call.

-   be passed to input parameters of the type string or a generic type covering string in function module calls.

-   A [constructor expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") can

-   be passed to every input parameter that matches the specified type [type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expressions.htm) of the constructor expression in method calls. In this case (with the exception of conversion operator [CONV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconv_constructor_inference.htm) in the constructor expression), the # character can only be specified for type if the input parameter is typed in full and this type is used.

-   be passed to every input parameter that matches the specified type [type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expressions.htm) of the constructor expression in function module calls. The character # cannot be specified for type ion the constructor expression since static derivations of types are not possible in function module calls.

-   A [table expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_expression_glosry.htm "Glossary Entry") can

-   be passed in method calls or function calls to every input parameter that matches the type of the result.

Notes

-   In function module calls, the typing is not checked until runtime.

-   No arithmetic expressions, description functions, or numeric functions can be passed to formal parameters with the generic type [data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_generic.htm). This restriction can be bypassed by applying the [conversion operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_operator_glosry.htm "Glossary Entry") [CONV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_conv.htm) to the actual parameter. This restriction does not apply to the generic type any.

Calculation Type and Calculation Length

If calculation expressions are specified as actual parameters, the calculation type and calculation length are specified as follows:

-   The [calculation type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencalculation_type_glosry.htm "Glossary Entry") of an arithmetic expression is determined

-   in method calls from the operands of the expression and the typing of the input parameter, if this parameter is fully typed. If the input parameter is typed generically, only the operands of the expression are evaluated.

-   in function module calls from the operands of the expression. The typing of the input parameter is ignored.

-   The [calculation length](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencalculation_length_glosry.htm "Glossary Entry") of a bit expression is the length of the largest operand of the expression.

Passing Parameters

When binding a function, a calculation expression, a constructor expression, or a table expression, the parameters are always [passed by value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_value_glosry.htm "Glossary Entry"), even if the formal parameter is defined as to be [passed by reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_reference_glosry.htm "Glossary Entry").

Fully Typed

The return value of a function or the result of a calculation expression, a constructor expression, or a table expression is [converted](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_rules.htm), if necessary, to the type of the input parameter and passed.

Generically Typed

-   In a function, a constructor expression, or a table expression, the formal parameter takes the type of the return value or result. Only bit functions are handled like bit expressions (see below).

-   With an arithmetic expression, the formal parameter takes over the calculation type determined by the operand. If the calculation type is p, the length is always 16. The number of decimal places is determined by the accuracy required by the calculation and therefore depends on the values of the operands.

-   In a bit expression or a bit function, the formal parameter is set to type x in the calculation length determined by the operands.

-   In a string expression, the formal parameter is set to the type string in the case of fully generic typing or the generic types csquence clike. In the case of the types c and n with generic lengths, the length is set to the length of the result of the string expression.

Example

The functional method m1 is called twice for each assignment to result. The first call is executed in an arithmetical expression, which is passed as an actual parameter in the second call. In the first call of each assignment, the formal parameter p1 has type p of length 16. The number of decimal places is 0 in the first assignment, 14 in the second, and 1 in the third assignment. In the second call, the formal parameter p1 has the type decfloat34 in each assignment, because the calculation type of the arithmetic expression is determined by the return value of m1.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS m1 IMPORTING p1 TYPE numeric
                     RETURNING value(ret) TYPE decfloat34.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    ret = p1.
  ENDMETHOD.
ENDCLASS.
DATA num1   TYPE p DECIMALS 2 VALUE '2.00'.
DATA num2   TYPE p DECIMALS 2 VALUE '1.00'.
DATA result TYPE decfloat34.
START-OF-SELECTION.
  result = c1=>m1( sqrt( 4 ) +  c1=>m1( num1 / 2 )  ).
  result = c1=>m1( sqrt( 4 ) +  c1=>m1( num1 / 3 )  ).
  result = c1=>m1( sqrt( 4 ) +  c1=>m1( num2 / 2 )  ).
