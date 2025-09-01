  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp.htm) →  [Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Operators](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_op.htm) → 

rel\_exp - Comparison Operators for Character-Like Data Types

The following table shows the comparison operators for comparisons between character-like operands (single data objects and return values or [string expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_expression_glosry.htm "Glossary Entry")) in [comparison expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomparison_expression_glosry.htm "Glossary Entry"). Trailing blanks are considered for operands of type string. Unless documented differently in the following table, trailing blanks are not considered for operands of types c, d, n, and t.

operator

Meaning

CO

Contains Only: True if operand1 only contains characters from operand2. Uppercase, lowercase and trailing blanks are considered for both operands. If operand2 is of type string and initial, the comparison expression is false, unless operand1 is also of type string and initial, in which case the comparison expression is always true, regardless of operand2. If the comparison is false, sy-fdpos contains the offset of the first character in operand1 that is not contained in operand2. If the comparison is true, sy-fdpos contains the length of operand1.

CN

Contains Not Only: True, if a comparison expression with CO is false, that is if operand1 contains not only characters from operand2. sy-fdpos is set in the same way as for CO. If the comparison is true, sy-fdpos contains the offset of the first character in operand1 that is not contained in operand2. If the comparison is false, sy-fdpos contains the length of operand1.

CA

Contains Any: True, if operand1 contains at least one character from operand2. Uppercase, lowercase and trailing blanks are considered for both operands. If operand1 or operand2 is of type string and initial, the comparison expression is always false. If the comparison is true, sy-fdpos contains the offset of the first character in operand1 that is also contained in operand2. If the comparison is false, sy-fdpos contains the length of operand1.

NA

Contains Not Any: True, if a comparison expression with CA is false, that is, operand1 does not contain any characters from operand2. If the comparison is false, sy-fdpos contains the offset of the first character in operand1 that is also contained in operand2. If the comparison is true, sy-fdpos contains the length of operand1.

CS

Contains String: True, if the content of operand2 is contained in operand1. Uppercase, lowercase and trailing blanks in the left operand are considered. If operand1 is of type string and initial, or of type c and contains only blank characters, the comparison expression is false, unless operand2 is also of type string and initial, or of type c and only contains blank characters, in which case, the comparison expression is always true. If the comparison is true, sy-fdpos contains the offset of operand2 in operand1. If the comparison is false, sy-fdpos contains the length of operand1.

NS

Contains No String: True, if a comparison expression with CS is false, that is if operand1 does not contain the content of operand2. If the comparison is false, sy-fdpos contains the offset of operand2 in operand1. If the comparison is true, sy-fdpos contains the length of operand1.

CP

Covers Pattern: True, if the content of operand1 matches the pattern in operand2. Wildcard characters can be used to form the operand2 pattern, where "\*" represents any character string, including a blank string, and "+" represents any character. It is not case-sensitive. Trailing blanks in the left operand are considered. If the comparison is true, sy-fdpos contains the offset of operand2 in operand1, whereby leading wildcard characters "\*" in operand2 are ignored if operand2 also contains other characters. If the comparison is false, sy-fdpos contains the length of operand1. Characters in operand2 can be marked for direct comparisons by prefixing them with the [escape character](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenescape_character_glosry.htm "Glossary Entry") "#". For such characters in operand2, the operator is case-sensitive, wildcard characters and the escape character are not subject to special handling and trailing blanks are relevant.

NP

No Pattern: True, if a comparison expression withCP is false, that is, operand1 does not fit the pattern in operand2. If the comparison is false, sy-fdpos contains the offset of operand2 in operand1, whereby leading wildcard characters "\*" in operand2 are ignored if operand2 also contains other characters. If the comparison is true, sy-fdpos contains the length of operand1.

Hints

-   For the operators CP and NP, multiple wildcard characters "\*" one after another have the same effect as the specification of a single wildcard "\*" character. The wildcard character "+" does not represent a blank string.

-   When using the operators CP and NP, patterns without wildcard characters in operand2 do not make any sense. Instead, a comparison with [\=](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_any_operand.htm) can be performed.

-   Operands of byte-like data types cannot be compared using the comparison operators from this table. To perform corresponding comparisons for byte-like operands, [comparison operators for byte-like data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_bytes.htm) can be used.

-   The comparison operators in this table can be replaced by [predicate functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpredicate_functions_strgs.htm).

-   The statement [FIND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfind.htm) and the search functions [find](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensearch_functions.htm) can be quicker than the comparison operator CS by some magnitude.

-   When using comparison operators for character-like data types in a [conditional expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconditional_expression_glosry.htm "Glossary Entry") or in a [Boolean function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenboole_function_glosry.htm "Glossary Entry"), the system field sy-fdpos has the value set in the expression once the expression is processed.

Example

Search for HTML tags in a text using the operator CP. This search finds the first HTML tag "<i>" at offset 8. Note that it is not sufficient to specify a search pattern "<\*>", since CP stands for Covers Pattern and not for Contains Pattern. The example also shows that the leading wildcard characters "\*" of the pattern are ignored in sy-fdpos, to determine the occurrence found by this search.

DATA html TYPE string.
html = \`This is <i>italic</i>!\`.
IF html CP '\*<\*>\*'.
  cl\_demo\_output=>display\_text( |Found HTML tag at { sy-fdpos }| ).
ENDIF.

Example

Display of the first position of a letter in a field. The operator CS is used in the conditional operator [COND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconditional_expression_cond.htm), which returns the content of the system field sy-fdpos.

cl\_demo\_output=>display( COND #( WHEN sy-abcde CS 'H' THEN sy-fdpos ) ).

Example

The following comparison is always true, regardless of the input.

DATA(text) = \`abcd1234\`.
cl\_demo\_input=>request( CHANGING field = text ).
IF \`\` CO text.
  cl\_demo\_output=>display( 'true' ).
ENDIF.

Executable Example

[Comparison Operators for Character-Like Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencharacter_comparisons_abexa.htm)

Continue
![Example](exa.gif "Example") [rel\_exp - Comparison Operators for Character-Like Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencharacter_comparisons_abexa.htm)