# ABAP - Keyword Documentation / ABAP - Programming Language / Declarations / Typing / Checking Typing

Included pages: 5


### abentyping_check.htm

---
title: "Checking Typing"
description: |
  When data objects are assigned to typed field symbols(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield_symbol_glosry.htm 'Glossary Entry') and actual parameters(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenactual_parameter_glosry.htm 'Glossary Entry') are as
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm"
abapFile: "abentyping_check.htm"
keywords: ["do", "if", "try", "method", "data", "field-symbol", "abentyping", "check"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Checking%20Typing%2C%20ABENTYPING_CHECK%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Checking Typing

When data objects are assigned to typed [field symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield_symbol_glosry.htm "Glossary Entry") and [actual parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenactual_parameter_glosry.htm "Glossary Entry") are assigned to typed [formal parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenformal_parameter_glosry.htm "Glossary Entry") of [procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocedure_glosry.htm "Glossary Entry"), the system checks whether the data type of the assigned data object matches the typing of the field symbol or of the formal parameter.

-   [General rules for typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check_general.htm)

Special rules apply to:

-   [Return values of functional methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_return_values.htm)
-   [Literals as actual parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_literals.htm)
-   [Functions and expressions as actual parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_arith_expr.htm)

Hint

When specifying data objects suitable for a typing, an assignment to a helper variable with a valid data type is often made. When methods are called, these helper variables can often be spared by using a [constructor expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") in the position of an actual parameter.

Continue
[General Rules for Typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check_general.htm)
[Return Values of Functional Methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_return_values.htm)
[Literals as Actual Parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_literals.htm)
[Functions and Expressions as Actual Parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_arith_expr.htm)


### abentyping_check_general.htm

---
title: "General Rules for Typing"
description: |
  The general rules for checking the typing apply strictly to: -   The assignment of all data objects to field symbols(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield_symbol_glosry.htm 'Glossary Entry') -   The binding of named data objects to input(https://help.sap.com/doc/ab
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check_general.htm"
abapFile: "abentyping_check_general.htm"
keywords: ["do", "if", "case", "try", "method", "data", "types", "internal-table", "field-symbol", "abentyping", "check", "general"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping.htm) →  [Checking Typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20General%20Rules%20for%20Typing%2C%20ABENTYPING_CHECK_GENERAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

General Rules for Typing

The general rules for checking the typing apply strictly to:

-   The assignment of all data objects to [field symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield_symbol_glosry.htm "Glossary Entry")
-   The binding of named data objects to [input](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninput_parameter_glosry.htm "Glossary Entry"), [input/output](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry"), and [output parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoutput_parameter_glosry.htm "Glossary Entry") for procedures

The general rules for checking the typing are:

-   If the assignment is made to generically typed field symbols or formal parameters, the system checks whether the [technical type properties](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentechnical_type_prpt_glosry.htm "Glossary Entry") of the assigned data object are a subset of the generic type. The type properties that are not defined by typing are inherited from the actual parameter.
-   In assignments to completely typed field symbols or formal parameters, the technical properties of the data type of the assigned data object must correspond exactly to the typing. In assignments to field symbols or formal parameters typed with [enumerated types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_enum.htm), the type of the assigned data object must be exactly the same enumerated type as is used for the typing.
-   The result of the typing check when actual parameters are passed to formal parameters is independent of the pass by type. In a [pass by value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpass_by_value_glosry.htm "Glossary Entry"), the check for [pass by reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is always carried out, even though this can be stricter than necessary in individual cases.
-   If reference variables are passed, [upcasts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenup_cast_glosry.htm "Glossary Entry") are possible but [downcasts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendown_cast_glosry.htm "Glossary Entry") are not. If actual parameters are passed to input parameters typed as reference variables, an [upcast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenup_cast_glosry.htm "Glossary Entry") is only possible if there is no change of content within the procedure. When a [subroutine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubroutine_glosry.htm "Glossary Entry") is passed to the parameters, an upcast is not possible in any case.
-   If memory areas are assigned to field symbols typed as reference variables, the typing of the field symbol and the static type of the memory area must be the same.
-   In assignments to generically and completely typed field symbols or formal parameters, only the [technical type properties](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentechnical_type_prpt_glosry.htm "Glossary Entry") are checked. The following properties are not checked:
    
    -   Names of structure components (but the names of [mesh nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_node_glosry.htm "Glossary Entry") and [mesh associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_association_glosry.htm "Glossary Entry") are checked).
    -   Semantic properties of data types defined in the ABAP Dictionary (conversion exits, documentation, and so on)
    -   [Initial memory requirement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninitial_mem_req_glosry.htm "Glossary Entry") of internal tables
    
    If generally typed formal parameters or field symbols are accessed dynamically, these properties are inherited from the type of the actual parameter. In static access to generically typed formal parameters or field symbols, these properties are inherited from the typing of the formal parameter.
    
-   When assigning to field symbols or formal parameters that have a structure with the obsolete addition STRUCTURE and that are called in Standard ABAP, elementary data structures must be character-like and flat and for structures the [fragment views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") must match. The assigned data object must be at least as long as the structure.

Hints

-   The constructor operators [CONV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm) and [CAST](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_cast.htm) are well suited to convert or cast invalid actual parameters to the type of a formal parameter.
-   In the case of generically typed field symbols or formal parameters, and in the case of formal parameters of function modules, the typing is only checked at the time of the assignment, that is, at runtime. In the case of completely typed field symbols and formal parameters of methods, the check is performed by the [syntax check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensyntax_check_glosry.htm "Glossary Entry").
-   In addition in the case of formal parameters of externally called subroutines, the typing is only checked at the time of the assignment. In the case of formal parameters of internally called subroutines, the check is performed by the [syntax check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensyntax_check_glosry.htm "Glossary Entry").


### abentyping_return_values.htm

---
title: "Return Values of Functional Methods"
description: |
  The return value of a functional method(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_glosry.htm 'Glossary Entry') is always completely typed and is always passed by value. An actual parameter can be appended to the return value as follows: -   Specification of t
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_return_values.htm"
abapFile: "abentyping_return_values.htm"
keywords: ["do", "if", "case", "try", "method", "data", "types", "abentyping", "return", "values"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping.htm) →  [Checking Typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Return%20Values%20of%20Functional%20Methods%2C%20ABENTYPING_RETURN_VALUES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Return Values of Functional Methods

The return value of a [functional method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_glosry.htm "Glossary Entry") is always completely typed and is always passed by value. An actual parameter can be appended to the return value as follows:

-   Specification of the method in an [operand position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands_expressions.htm)
    
    If a functional method is used in an operation position, the return value is used like a data object whose data type is determined with an exception by the complete typing of the return value (a type-compliant actual parameter is implicitly bound to it). Checking of this typing is not necessary (or is always successful). An error always occurs, however, if the typing of the return value is not compatible with the [operand type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperand_type_glosry.htm "Glossary Entry").
    
    If the return value of a functional method is bound as an actual parameter to a generically typed formal parameter of type p, the method inherits the decimal places of the return value but not its length. In this case the formal parameter is given a length of 16.
    
-   [Method call](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_static.htm) with the addition [RECEIVING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_parameters.htm)
    
    If an actual parameter is specified explicitly after RECEIVING, it does not have to comply with the [general typing rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check_general.htm) for typing the formal parameter. Instead, it is enough if the formal parameter can be converted to the actual parameter in accordance with the [conversion rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_rules.htm).
    

If an exception is raised when the return value is assigned to a formal parameter or when it is used as an operand, it cannot always be handled, but cause a runtime error, depending on the operand position.

Hints

-   If reference variables are returned using RECEIVING, an [upcast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenup_cast_glosry.htm "Glossary Entry") is possible but a [downcast](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendown_cast_glosry.htm "Glossary Entry") is not.
-   The special rule that a generic formal parameter of type p gets the length of 16 when a functional method is passed does not apply to the other generic types any, data, simple, or numeric.


### abentyping_literals.htm

---
title: "Literals as Actual Parameters"
description: |
  Special rules apply to the assignment of literals to formal parameters. They make it possible to assign character literals of type c and string or numeric literals of type i and p to formal parameters whose type would not normally allow this. If the formal parameter has a generic type, the remaining
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_literals.htm"
abapFile: "abentyping_literals.htm"
keywords: ["do", "if", "case", "try", "catch", "data", "types", "abentyping", "literals"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping.htm) →  [Checking Typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Literals%20as%20Actual%20Parameters%2C%20ABENTYPING_LITERALS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Literals as Actual Parameters

Special rules apply to the assignment of literals to formal parameters. They make it possible to assign character literals of type c and string or numeric literals of type i and p to formal parameters whose type would not normally allow this.

If the formal parameter has a generic type, the remaining type properties are defined by the content of the specified literal (see table 1). When a literal is bound, the pass is always executed as [pass by value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpass_by_value_glosry.htm "Glossary Entry"), even if [pass by reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is defined for the formal parameter.

If a literal meets the type requirements, its content is assigned to the formal parameter according to the relevant [conversion rules for elementary data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_elementary.htm). However, in contrast to the normal application of these rules, a non-catchable exception is raised if the [value range](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_range_glosry.htm "Glossary Entry") is exceeded.

-   [Checking Character Literals](#abentyping-literals-1-------checking-numeric-literals---@ITOC@@ABENTYPING_LITERALS_2)

Checking Character Literals   

The following table shows the requirements that character literals must meet to be assigned to typed formal parameters. These rules apply to both text field literals and text string literals.

Typing

Requirement

c

If the formal parameter has a fixed length, the length of the literal must be less than or equal to this length. If the length is generic, the formal parameter inherits the length of the literal.

d

The literal must be eight characters long.

decfloat, decfloat16, decfloat34

The literal must contain a number in [mathematical](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmathematical_notation_glosry.htm "Glossary Entry"), [commercial](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencommercial_notation_glosry.htm "Glossary Entry"), or [scientific notation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscientific_notation_glosry.htm "Glossary Entry"). If generic typing with decfloat is used, the formal parameter is given the data type decfloat34.

f

The literal must contain a number in [scientific notation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscientific_notation_glosry.htm "Glossary Entry").

i, int8, (b, s)

The literal must contain a number in [mathematical](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmathematical_notation_glosry.htm "Glossary Entry") or [commercial notation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencommercial_notation_glosry.htm "Glossary Entry"). The literal must not contain any [decimal places](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendecimal_place_glosry.htm "Glossary Entry").

n

The literal may only contain digits. If the formal parameter has a fixed length, the length of the literal must be less than or equal to this length. If the length is generic, the formal parameter inherits the length of the literal.

numeric

The literal must contain a number in [mathematical](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmathematical_notation_glosry.htm "Glossary Entry") or [commercial notation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencommercial_notation_glosry.htm "Glossary Entry"). The formal parameter inherits the data type p, length 16, and the decimal spaces specified in the literal.

p

The literal must contain a number in [mathematical](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmathematical_notation_glosry.htm "Glossary Entry") or [commercial notation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencommercial_notation_glosry.htm "Glossary Entry"). For generic formal parameters, the length is set to 16. The number of decimal places is set to the decimal places specified in the literal. If the [program property](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_property_glosry.htm "Glossary Entry") Fixed Point Arithmetic is activated in the called procedure, the number of decimal places in the literal for a completely typed formal parameter must be less than or equal to the number of decimal places in the formal parameter. If the property Fixed Point Arithmetic is deactivated in the called procedure, the number in the literal must have exactly the same number of decimal places as the formal parameter.

string

The literal can have any length.

t

The literal must be six characters long.

x

The literal may only contain allowed hexadecimal characters, that is the digits 0 to 9 and the letters A to F. If the formal parameter has a fixed length, the length of the literal must be less than or equal to twice this length. If the length is generic, the number of bytes specified in the literal determines the length of the formal parameter.

xstring

The literal may only contain allowed hexadecimal characters, that is the digits 0 to 9 and the letters A to F.

xsequence

The literal may only contain allowed hexadecimal characters, that is the digits 0 to 9 and the letters A to F. The formal parameter inherits the data type x in the length of bytes specified in the literal.

utclong

The literal can be a left-aligned [character-like representation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abents_value.htm) of a time stamp, like yyyy-mm-ddThh:mm:ss.fffffff, or it can contain only blanks.

All other types have the same requirements for character literals as for other actual parameters. Generic formal parameters inherit the type of the actual parameter. Apart from the formal parameters listed in the table above, character literals can only be passed to formal parameters whose typing includes the data types c or string.

Hints

-   Character literals that are passed to actual parameters can be linked using the [literal operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenliteral_operator_glosry.htm "Glossary Entry") & and the rules described above apply. However, for a linking with the [concatenation operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconcatenation_operator_glosry.htm "Glossary Entry") && is used, the actual parameter is a [string expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_expression_glosry.htm "Glossary Entry") of type string and the formal parameter must be typed accordingly.
-   The requirements in the table above do not completely exclude character literals from being passed to actual parameters that do not match their value range. An exception is raised in this case.

Checking Numeric Literals   

The following table shows the requirements for numeric literals that are to be passed to typed formal parameters.

Typing

Requirement

f

All numeric literals are allowed.

decfloat, decfloat16, decfloat34

All numeric literals are allowed. In generic typing with decfloat, the formal parameter receives the data type decfloat34.

i, int8, (b, s)

All numeric literals are allowed.

n

The value of the literal must not be negative. If the formal parameter has a fixed length, the number of digits must be less than or equal to this length. If the length is generic and the literal has the data type i, the length of the formal parameter is set to 10. If the literal has the data type p, the length is set to 31.

p

In a generic formal parameter, the length is set to 16 and the number of decimal places is set to 0. If the program property Fixed Point Arithmetic is deactivated, the formal parameter cannot have any decimal places, or the literal must have the value 0.

All other types have the same requirements for numeric literals as for other actual parameters. Generic formal parameters inherit the type of the actual parameters. Apart from the formal parameters listed in the table above, numeric literals can only be passed to formal parameters whose typing includes the data types i or p.

Hint

The requirements in the table above do not completely exclude numeric literals from being passed to actual parameters that do not match their value range. An exception is raised in this case.


### abentyping_arith_expr.htm

---
title: "Functions and Expressions as Actual Parameters"
description: |
  Functions and expressions(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands_expressions.htm) can be specified as actual parameters in the following formal parameters: -   Write Positions -   Output parameters(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenou
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_arith_expr.htm"
abapFile: "abentyping_arith_expr.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abentyping", "arith", "expr"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping.htm) →  [Checking Typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_check.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Functions%20and%20Expressions%20as%20Actual%20Parameters%2C%20ABENTYPING_ARITH_EXPR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

Functions and Expressions as Actual Parameters

[Functions and expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands_expressions.htm) can be specified as actual parameters in the following formal parameters:

-   Write Positions
    -   [Output parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoutput_parameter_glosry.htm "Glossary Entry"), [input/output parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninput_output_parameter_glosry.htm "Glossary Entry"), and [return values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreturn_value_glosry.htm "Glossary Entry") in [method calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_parameters.htm).
-   Read Positions
    -   [Input parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninput_parameter_glosry.htm "Glossary Entry") of [methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethod_glosry.htm "Glossary Entry") in [method calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_parameters.htm), when [objects are created](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object_parameters.htm), or when exceptions are raised using [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_class.htm) or [THROW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_result.htm) in a [conditional exception](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expressions.htm)
    -   [Input parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninput_parameter_glosry.htm "Glossary Entry") of [function modules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_module_glosry.htm "Glossary Entry") for all variants of the statement [CALL FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_function.htm).

The parameters are evaluated from left to right (and from inside to outside) and the procedure is executed. A parameter cannot be affected by the method itself but by the evaluation of a preceding expression. This applies in particular to [writable expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwritable_expression_glosry.htm "Glossary Entry") in [result positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenresult_position_glosry.htm "Glossary Entry").

Special rules apply to typing checks, identifying the calculation type, and parameter passes.

-   [Checking Typing](#abentyping-arith-expr-1-------calculation-type-and-calculation-length---@ITOC@@ABENTYPING_ARITH_EXPR_2)
-   [Passing Parameters](#abentyping-arith-expr-3-----------complete-typing---@ITOC@@ABENTYPING_ARITH_EXPR_4)
    -   [Generic Typing](#@@ITOC@@ABENTYPING_ARITH_EXPR_5)

Hints

-   In the case of [dynamic method calls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_method_dynamic.htm), the same rules apply as to static method calls. However, handling at runtime is time-consuming. Therefore, helper variables should be used in a dynamic call instead of functions or expressions if possible. Function module calls are always dynamic and, compared to method calls, fewer rules apply.
-   A [system field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_field_glosry.htm "Glossary Entry") should [never be used an actual parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuse_actual_parameters_guidl.htm "Guideline").

Checking Typing   

-   A [numeric function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmathematical_funktion_glosry.htm "Glossary Entry"), a [description function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendescription_function_glosry.htm "Glossary Entry"), or an [arithmetic expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") can
    -   be bound to any numeric or any input parameter typed using the type any in a method call.
    -   be bound to any appropriately typed input parameter in a function module call.
-   A [bit function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbit_function_glosry.htm "Glossary Entry") or a [bit expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbit_expression_glosry.htm "Glossary Entry") can
    -   be bound to any byte-like or general typed input parameter in a method call.
    -   be passed to input parameters of type x or a generic type including x in function module calls.
-   A [string function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_function_glosry.htm "Glossary Entry") or a [string expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_expression_glosry.htm "Glossary Entry") can
    -   be bound to any character-like or general typed input parameter in a method call.
    -   be passed to input parameters of type string or a generic type including string in function module calls.
-   A [constructor expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") can
    -   be passed to every input parameter that matches the specified type [type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expressions.htm) of the constructor expression in method calls. In this case, with the exception of conversion operator [CONV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconv_constructor_inference.htm) in the constructor expression, the # character can only be specified for type if the input parameter is typed completely and this type is used.
    -   be passed to every input parameter that matches the specified type [type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expressions.htm) of the constructor expression in function module calls. The character # cannot be specified for type in the constructor expression since no static derivations of types are possible in function module calls.
-   A [table expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expression_glosry.htm "Glossary Entry") can
    -   be passed in method or function calls to every input parameter that matches the type of the result.

Hints

-   In function module calls, the typing is not checked until runtime.
-   No arithmetic expressions, description functions, or numeric functions can be passed to formal parameters with the generic type [data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_generic.htm). This restriction can be bypassed using the [conversion operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_operator_glosry.htm "Glossary Entry") [CONV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_conv.htm) on the actual parameter. This restriction does not apply to the generic type any.

Calculation Type and Calculation Length   

If calculation expressions are specified as actual parameters, the calculation type and calculation length are determined as follows:

-   The [calculation type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_type_glosry.htm "Glossary Entry") of an arithmetic expression is determined
    -   in method calls from the operands of the expression and the typing of the input parameter, if this parameter is completely typed. If the input parameter is typed generically, only the operands of the expression are evaluated.
    -   in function module calls from the operands of the expression. The typing of the input parameter is ignored.
-   The [calculation length](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencalculation_length_glosry.htm "Glossary Entry") of a bit expression is the length of the largest operand of the expression.

Passing Parameters   

When binding a function, a calculation expression, a constructor expression, or a table expression, the parameters are always [passed by value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpass_by_value_glosry.htm "Glossary Entry"), even if the formal parameter is defined as to be [passed by reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpass_by_reference_glosry.htm "Glossary Entry").

Complete Typing   

The return value of a function or the result of a calculation expression, a constructor expression, or a table expression is [converted](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_rules.htm), if necessary, to the type of the input parameter and passed.

Generic Typing   

-   In a function, a constructor expression, or a table expression, the formal parameter inherits the type of the return value or result. Only bit functions are handled like bit expressions (see below).
-   With an arithmetic expression, the formal parameter inherits the calculation type determined by the operand. If the calculation type is p, the length is always 16. The number of decimal places is determined by the accuracy required for the calculation and therefore depends on the values of the operands.
-   In a bit expression or a bit function, the formal parameter is set to type x in the calculation length determined by the operands.
-   In a string expression, the formal parameter is set to the type string for completely generic typing or the generic types csquence clike. In the case of the types c and n with generic length, the length is set to the length of the result of the string expression.

Example

The functional method m1 is called twice for each assignment to result. The first call is executed in an arithmetic expression, which is passed as an actual parameter in the second call. In the first call of each assignment, the formal parameter p1 has type p of length 16. The number of decimal places is 0 in the first assignment, 14 in the second, and 1 in the third assignment. In the second call, the formal parameter p1 has the type decfloat34 in each assignment, because the calculation type of the arithmetic expression is determined by the return value of m1.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS m1 IMPORTING p1         TYPE numeric
                     RETURNING VALUE(ret) TYPE decfloat34.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    ret = p1.
  ENDMETHOD.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    DATA num1   TYPE p DECIMALS 2 VALUE '2.00'.
    DATA num2   TYPE p DECIMALS 2 VALUE '1.00'.
    DATA result TYPE decfloat34.
    result = c1=>m1( sqrt( 4 ) +  c1=>m1( num1 / 2 )  ).
    result = c1=>m1( sqrt( 4 ) +  c1=>m1( num1 / 3 )  ).
    result = c1=>m1( sqrt( 4 ) +  c1=>m1( num2 / 2 )  ).
  ENDMETHOD.
ENDCLASS.
