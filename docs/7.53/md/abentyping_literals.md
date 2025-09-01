---
title: "Literals as Actual Parameters"
description: |
  Special rules apply to the assignment of literals to formal parameters. They make it possible to assign character literals of type c and string or numeric literals of type i and p to formal parameters whose type would not normally allow this. If the formal parameter has a generic type, the non-speci
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_literals.htm"
abapFile: "abentyping_literals.htm"
keywords: ["do", "if", "case", "try", "catch", "data", "types", "abentyping", "literals"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping.htm) →  [Checking Typing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentyping_check.htm) → 

Literals as Actual Parameters

Special rules apply to the assignment of literals to formal parameters. They make it possible to assign character literals of type c and string or numeric literals of type i and p to formal parameters whose type would not normally allow this.

If the formal parameter has a generic type, the non-specified type attributes are defined by the contents of the specified literal (see table 1). When a literal is bound, the pass is always executed as [pass by value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpass_by_value_glosry.htm "Glossary Entry"), even if [pass by reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpass_by_reference_glosry.htm "Glossary Entry") is defined for the formal parameter.

If a literal meets the type requirements of the parameter, its contents are assigned to the formal parameter according to the relevant [conversion rules for elementary data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_elementary.htm). However, in contrast to the normal application of these rules, a non-catchable exception is raised if the [value range](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_range_glosry.htm "Glossary Entry") of the target is exceeded.

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

The literal must contain a number in [mathematical](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmathematical_notation_glosry.htm "Glossary Entry"), [commercial](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencommercial_notation_glosry.htm "Glossary Entry"), or [scientific notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscientific_notation_glosry.htm "Glossary Entry"). If generic typing with decfloat is used, the formal parameter contains the data type decfloat34.

f

The literal must contain a number in [scientific notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscientific_notation_glosry.htm "Glossary Entry").

i, int8, (b, s)

The literal must contain a number in [mathematical](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmathematical_notation_glosry.htm "Glossary Entry") or [commercial notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencommercial_notation_glosry.htm "Glossary Entry"). The literal may not contain any [decimal places](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfractional_portion_glosry.htm "Glossary Entry").

n

The literal may only contain digits. If the formal parameter has a fixed length, the length of the literal may not exceed this length. If the length is generic, the formal parameter inherits the length of the literal.

numeric

The literal must contain a number in [mathematical](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmathematical_notation_glosry.htm "Glossary Entry") or [commercial notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencommercial_notation_glosry.htm "Glossary Entry"). The formal parameter inherits the data type p, length 16, and the decimal spaces specified in the literal.

p

The literal must contain a number in [mathematical](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmathematical_notation_glosry.htm "Glossary Entry") or [commercial notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencommercial_notation_glosry.htm "Glossary Entry"). If a generic formal parameter is used, the length is set to 16. The number of decimal spaces is set to the number of spaces specified in the literal. If the [program attribute](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_attribute_glosry.htm "Glossary Entry") Fixed Point Arithmetic is activated in the called procedure, the number of decimal places in the literal for a fully typed formal parameter must be less than or equal to the number of decimal places in the formal parameter. If the attribute Fixed Point Arithmetic is deactivated in the called procedure, the number in the literal must have exactly the same number of decimal places as the formal parameter.

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

All other types have the same requirements of character literals as apply to other actual parameters. Generic formal parameters inherit the type of the actual parameter. With the exception of formal parameters listed in the table above, character literals can only be passed to formal parameters whose typings include the data types c or string.

Notes

-   Character literals that are passed to actual parameters can be joined using the [literal operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenliteral_operator_glosry.htm "Glossary Entry") &. The rules described above apply here. However, if a join with the [chaining operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconcatenation_operator_glosry.htm "Glossary Entry") && is used, the actual parameter is a [string expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_expression_glosry.htm "Glossary Entry") of type string and the formal parameter must be typed accordingly.

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