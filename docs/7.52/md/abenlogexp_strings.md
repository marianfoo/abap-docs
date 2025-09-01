  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Comparison Expressions](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Relational Operators](javascript:call_link\('abenlogexp_op.htm'\)) → 

rel\_exp - Relational Operators for Character-Like Data Types

The following table shows the relational operators for comparisons between character-like operands (single data objects and return values or [string expressions](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry")) in [comparison expressions](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry"). Trailing blanks are respected for operands of type string. If not stated differently in the following table, trailing blanks are ignored for operands of types c, d, n, and t.

operator

Meaning

CO

Contains Only: True if operand1 only contains characters from operand2. It is case-sensitive and trailing blanks are respected in both operands. If operand2 is of type string and initial, the relational expression is false, except if operand1 is also of type string and initial. If operand1 has the type string and is initial, the relational expression is always true, regardless of operand2. If the comparison is true, sy-fdpos contains the offset of the first character in operand1 that is not contained in operand2. If the comparison is true, sy-fdpos contains the length of operand1.

CN

Contains Not Only: True if a relational expression with CO is false, that is if operand1 contains not only characters from operand2. sy-fdpos is set in the same way as for CO. If the comparison is true, sy-fdpos contains the offset of the first character in operand1 that is not contained in operand2. If the comparison is false, sy-fdpos contains the length of operand1.

CA

Contains Any: True if operand1 contains at least one character from operand2. It is case-sensitive and trailing blanks are respected in both operands. If operand1 or operand2 are of type string and initial, the relational expression is always false. If result of the comparison is positive, sy-fdpos contains the offset of the first character in operand1 that is also contained in operand2. If the comparison is false, sy-fdpos contains the length of operand1.

NA

Contains Not Any: True if a relational expression with CA is false, that is if operand1 does not contain any characters from operand2. If the comparison is false, sy-fdpos contains the offset of the first character in operand1 that is also contained in operand2. If the comparison is true, sy-fdpos contains the length of operand1.

CS

Contains String: True, if the content of operand2 is contained in operand1. It is not case-sensitive and trailing blanks in the left operand are respected. If operand1 is of type string and initial, or of type c and contains only blank characters, the relational expression is false, unless operand2 is also of type string and initial, or of type c and only contains blank characters. In this case, the relational expression is always true. If the comparison is true, sy-fdpos contains the offset of operand2 in operand1. If the comparison is false, sy-fdpos contains the length of operand1.

NS

Contains No String: True if a relational expression with CS is false, that is if operand1 does not contain the content of operand2. If the comparison is false, sy-fdpos contains the offset of operand2 in operand1. If the comparison is true, sy-fdpos contains the length of operand1.

CP

Covers Pattern: True if the content of operand1 fits the pattern in operand2. Wildcard characters can be used to create the operand2 pattern, where "\*" represents any character string (including a blank string) and "+" represents any character. It is not case-sensitive. Trailing blanks in the left operand are respected. If the comparison is true, sy-fdpos contains the offset of operand2 in operand1. Here, leading wildcard characters "\*" in operand2 are ignored if operand2 also contains other characters. If the comparison is false, sy-fdpos contains the length of operand1. Characters in operand2 can be selected for direct comparisons by prefixing them with the [escape character](javascript:call_link\('abenescape_character_glosry.htm'\) "Glossary Entry") "#". For characters flagged in this way in operand2, the operator is case-sensitive. Also, wildcard characters and the escape character are not subject to special handling and trailing blanks are relevant.

NP

No Pattern: True if a relational expression with CP is false, that is if operand1 does not fit the pattern operand2. If the comparison is false, sy-fdpos contains the offset of operand2 in operand1. Here, leading wildcard characters "\*" in operand2 are ignored if operand2 also contains other characters. If the comparison is true, sy-fdpos contains the length of operand1.

Notes

-   The operators CP and NP use multiple wildcard characters "\*" in a row in the same way as a single "\*" character. The wildcard character "+" does not represent a blank string.

-   When using the operators CP and NP, there is not usually any point in using patterns without wildcard characters in operand2 and comparisons with [\=](javascript:call_link\('abenlogexp_any_operand.htm'\)) can be made instead.

-   Operands of byte-like data types cannot be compared using the relational operators from this table. The [relational operators for byte-like data types](javascript:call_link\('abenlogexp_bytes.htm'\)) can be used to perform these comparisons for byte-like operands.

-   The relational operators in this table can be replaced by [predicate functions](javascript:call_link\('abenpredicate_functions_strgs.htm'\)).

-   The statement [FIND](javascript:call_link\('abapfind.htm'\)) and the search functions [find](javascript:call_link\('abensearch_functions.htm'\)) can be quicker than the relational operator CS by some magnitude.

-   When using relational operators for character-like data types in a [conditional expression](javascript:call_link\('abenconditional_expression_glosry.htm'\) "Glossary Entry") or in a [Boolean function](javascript:call_link\('abenboole_function_glosry.htm'\) "Glossary Entry"), the system field sy-fdpos is given the value set in the expression once the expression is processed.

Example

Searches for HTML tags in a text using the operator CP. This search finds the first HTML tag "<i> " at offset 8. Note that it is not enough to specify a search pattern "<\*>", since CP stands for Covers Pattern and not for Contains Pattern. The example also shows that the leading wildcard characters "\*" in the string are ignored in sy-fdpos, to identify the occurrence found by this search.

DATA html TYPE string.
html = \`This is <i>italic</i>!\`.
IF html CP '\*<\*>\*'.
  cl\_demo\_output=>display\_text( |Found HTML tag at { sy-fdpos }| ).
ENDIF.

Example

Displays the first position of a letter in a field. The operator CS is used in the conditional operator [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)), which returns the content of the system field sy-fdpos.

cl\_demo\_output=>display( COND #( WHEN sy-abcde CS 'H' THEN sy-fdpos ) ).

Example

The following comparison is always true, regardless of the input.

DATA(text) = \`abcd1234\`.
cl\_demo\_input=>request( CHANGING field = text ).
IF \`\` CO text.
  cl\_demo\_output=>display( 'true' ).
ENDIF.

Executable Example

[Relational Operators for Character-Like Data Types](javascript:call_link\('abencharacter_comparisons_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Relational Operators for Character-Like Data Types](javascript:call_link\('abencharacter_comparisons_abexa.htm'\))