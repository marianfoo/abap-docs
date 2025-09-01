  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) →  [Checking Typing](javascript:call_link\('abentyping_check.htm'\)) → 

Literals as Actual Parameters

Special rules apply to the assignment of literals to formal parameters. They make it possible to assign character literals of type c and string or numeric literals of type i and p to formal parameters whose type would not normally allow it.

If the formal parameter has a generic type, the non-specified type attributes are defined by the contents of the specified literal (see table 1). When a literal is bound, the pass is always executed as a [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry"), even if [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry") is defined for the formal parameter.

If a literal meets the type requirements of the parameter, its contents are assigned to the formal parameter according to the relevant [conversion rules for elementary data types](javascript:call_link\('abenconversion_elementary.htm'\)). However, in contrast to the normal application of these rules, a non-catchable exception is raised if the [value range](javascript:call_link\('abenvalue_range_glosry.htm'\) "Glossary Entry") of the target is exceeded.

Checking Character Literals

Table 1 shows the requirements that a character literal must meet to be assigned to a formal parameter. These rules apply to both text field literals and text string literals.

Table 1

Typing

Requirement

c

If the formal parameter has a fixed length, the length of the literal may not exceed this length. If the length is generic, the formal parameter inherits the length of the literal.

d

The literal must be eight characters long.

decfloat, decfloat16, decfloat34

The literal must contain a number in [mathematical](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry"), [commercial](javascript:call_link\('abencommercial_notation_glosry.htm'\) "Glossary Entry"), or [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry"). If generic typing with decfloat is used, the formal parameter contains the data type decfloat34.

f

The literal must contain a number in [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry") .

i, int8, (b, s)

The literal must contain a number in [mathematical](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") or [commercial notation](javascript:call_link\('abencommercial_notation_glosry.htm'\) "Glossary Entry"). The literal must not contain any [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry").

n

The literal may only contain digits. If the formal parameter has a fixed length, the length of the literal may not exceed this length. If the length is generic, the formal parameter inherits the length of the literal.

numeric

The literal must contain a number in [mathematical](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") or [commercial notation](javascript:call_link\('abencommercial_notation_glosry.htm'\) "Glossary Entry"). The formal parameter inherits the data type p, length 16, and the decimal spaces specified in the literal.

p

The literal must contain a number in [mathematical](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") or [commercial notation](javascript:call_link\('abencommercial_notation_glosry.htm'\) "Glossary Entry"). If a generic formal parameter is used, the length is set to 16. The number of decimal spaces is set to the number of spaces specified in the literal. If the [program attribute](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry") Fixed Point Arithmetic is activated in the called procedure, the number of decimal places in the literal for a completely typed formal parameter must be less than or equal to the number of decimal places in the formal parameter. If the attribute Fixed Point Arithmetic is deactivated in the called procedure, the number in the literal must have exactly the same number of decimal places as the formal parameter.

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

All other types have the same requirements of character literals as apply to other actual parameters. Generic formal parameters inherit the type of the actual parameter. With the exception of formal parameters listed in table 1, character literals can only be passed to formal parameters with types c or string.

Note

Character literals that are passed to actual parameters can be joined using the [literal operator](javascript:call_link\('abenliteral_operator_glosry.htm'\) "Glossary Entry") &. The rules described above apply here. However, if a join with the [chaining operator](javascript:call_link\('abenconcatenation_operator_glosry.htm'\) "Glossary Entry") && is used, the actual parameter is a [string expression](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry") of type string and the formal parameter must be typed accordingly.

Checking Numeric Literals

Table 2 shows the requirements for numeric literals that are to be passed to typed formal parameters.

Table 2

Typing

Requirement

f

All numeric literals are allowed.

decfloat, decfloat16, decfloat34

All numeric literals are allowed. If generic typing with decfloat is used, the formal parameter contains the data type decfloat34.

i, int8, (b, s)

All numeric literals are allowed.

n

The value of the literal must not be negative. If the formal parameter has a fixed length, the number of digits may not exceed this length. If the formal parameter is generic, its length is set to 10, if the literal has the data type i; its length is set to 31 if the literal has the data type p.

p

If a generic formal parameter is used, the length is set to 16 and the number of decimal spaces is set to 0. If the program attribute Fixed Point Arithmetic is deactivated, the formal parameter cannot have any decimal places or the literal must have the value 0.

All other types make the same requirements on numeric literals as on other actual parameters. Generic formal parameters inherit the type of the actual parameters. With the exception of formal parameters of the types listed in table 2, numeric literals can only be passed to formal parameters with data types i or p.