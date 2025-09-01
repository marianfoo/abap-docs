  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Typing](javascript:call_link\('abentyping.htm'\)) →  [Checking Typing](javascript:call_link\('abentyping_check.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Literals%20as%20Actual%20Parameters%2C%20ABENTYPING_LITERALS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Literals as Actual Parameters

Special rules apply to the assignment of literals to formal parameters. They make it possible to assign character literals of type c and string or numeric literals of type i and p to formal parameters whose type would not normally allow this.

If the formal parameter has a generic type, the remaining type properties are defined by the content of the specified literal (see table 1). When a literal is bound, the pass is always executed as [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry"), even if [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry") is defined for the formal parameter.

If a literal meets the type requirements, its content is assigned to the formal parameter according to the relevant [conversion rules for elementary data types](javascript:call_link\('abenconversion_elementary.htm'\)). However, in contrast to the normal application of these rules, a non-catchable exception is raised if the [value range](javascript:call_link\('abenvalue_range_glosry.htm'\) "Glossary Entry") is exceeded.

-   [Checking Character Literals](#@@ITOC@@ABENTYPING_LITERALS_1)
-   [Checking Numeric Literals](#@@ITOC@@ABENTYPING_LITERALS_2)

Checking Character Literals   

The following table shows the requirements that character literals must meet to be assigned to typed formal parameters. These rules apply to both text field literals and text string literals.

Typing

Requirement

c

If the formal parameter has a fixed length, the length of the literal must be less than or equal to this length. If the length is generic, the formal parameter inherits the length of the literal.

d

The literal must be eight characters long.

decfloat, decfloat16, decfloat34

The literal must contain a number in [mathematical](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry"), [commercial](javascript:call_link\('abencommercial_notation_glosry.htm'\) "Glossary Entry"), or [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry"). If generic typing with decfloat is used, the formal parameter is given the data type decfloat34.

f

The literal must contain a number in [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry").

i, int8, (b, s)

The literal must contain a number in [mathematical](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") or [commercial notation](javascript:call_link\('abencommercial_notation_glosry.htm'\) "Glossary Entry"). The literal must not contain any [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry").

n

The literal may only contain digits. If the formal parameter has a fixed length, the length of the literal must be less than or equal to this length. If the length is generic, the formal parameter inherits the length of the literal.

numeric

The literal must contain a number in [mathematical](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") or [commercial notation](javascript:call_link\('abencommercial_notation_glosry.htm'\) "Glossary Entry"). The formal parameter inherits the data type p, length 16, and the decimal spaces specified in the literal.

p

The literal must contain a number in [mathematical](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") or [commercial notation](javascript:call_link\('abencommercial_notation_glosry.htm'\) "Glossary Entry"). For generic formal parameters, the length is set to 16. The number of decimal places is set to the decimal places specified in the literal. If the [program property](javascript:call_link\('abenprogram_property_glosry.htm'\) "Glossary Entry") Fixed Point Arithmetic is activated in the called procedure, the number of decimal places in the literal for a completely typed formal parameter must be less than or equal to the number of decimal places in the formal parameter. If the property Fixed Point Arithmetic is deactivated in the called procedure, the number in the literal must have exactly the same number of decimal places as the formal parameter.

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

The literal can be a left-aligned [character-like representation](javascript:call_link\('abents_value.htm'\)) of a time stamp, like yyyy-mm-ddThh:mm:ss.fffffff, or it can contain only blanks.

All other types have the same requirements for character literals as for other actual parameters. Generic formal parameters inherit the type of the actual parameter. Apart from the formal parameters listed in the table above, character literals can only be passed to formal parameters whose typing includes the data types c or string.

Hints

-   Character literals that are passed to actual parameters can be linked using the [literal operator](javascript:call_link\('abenliteral_operator_glosry.htm'\) "Glossary Entry") & and the rules described above apply. However, for a linking with the [concatenation operator](javascript:call_link\('abenconcatenation_operator_glosry.htm'\) "Glossary Entry") && is used, the actual parameter is a [string expression](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry") of type string and the formal parameter must be typed accordingly.
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