  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Comparison Expressions](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Rules](javascript:call_link\('abenlogexp_rules.htm'\)) →  [rel\_exp - Comparing Elementary Data Types](javascript:call_link\('abenlogexp_rules_operands.htm'\)) → 

rel\_exp - Comparison Rules for Comparison Types

When operands with elementary data types are compared, the comparison uses a comparison type defined by the operands in question, as for [elementary data objects](javascript:call_link\('abenlogexp_rules_operands_dobj.htm'\)) and [calculation expressions](javascript:call_link\('abenlogexp_rules_expressions.htm'\)). The comparison type can be one of the [built-in ABAP types](javascript:call_link\('abenpredefined_abap_type_glosry.htm'\) "Glossary Entry"). When incompatible operands are compared, the operands that do not have the comparison type are converted to this type.

-   [Numeric Comparison Type](#@@ITOC@@ABENCOMPARISON_TYPE_1)

-   [Character-Like Comparison Type](#@@ITOC@@ABENCOMPARISON_TYPE_2)

-   [Byte-Like Comparison Type](#@@ITOC@@ABENCOMPARISON_TYPE_3)

-   [Date/Time Type as Comparison Type](#@@ITOC@@ABENCOMPARISON_TYPE_4)

Numeric Comparison Type

If the comparison type is one of the [numeric data types](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), the number values are compared.

Notes

-   Platform-dependent rounding errors may occur with data type f, which means it often does not make sense to compare floating point numbers to see if they match.

-   [Scale](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") and [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry") are not relevant in comparisons between decimal floating point numbers.

Example

The comparison of a text string with an integer is performed with numeric comparison type i. If the text string cannot be converted to i, a non-handleable exception would be raised in the comparison. Convertibility is therefore checked first using the conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)).

DATA char TYPE string.
cl\_demo\_input=>add\_field( CHANGING field = char ).
DATA num TYPE i.
cl\_demo\_input=>request(   CHANGING field = num ).
TRY.
    DATA(test) = CONV i( char ).
  CATCH cx\_sy\_conversion\_error.
    cl\_demo\_output=>display( \`Try again!\` ).
    RETURN.
ENDTRY.
cl\_demo\_output=>display(
  COND #( WHEN char > num THEN \`CHAR is greater than NUM\`
          WHEN char = num THEN \`CHAR equals NUM\`
                          ELSE \`CHAR is lower than NUM\` ) ).

Character-Like Comparison Type

If the comparison type is one of the [character-like data types](javascript:call_link\('abenbuiltin_types_character.htm'\)), the content is compared from left to right. Based on the internal binary representation in the [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") used, the first differing character from the left determines which operand is greater.

Notes

-   For operands of types c and string, the content is not compared on the basis of the [locale](javascript:call_link\('abenlocale_glosry.htm'\) "Glossary Entry") of the current [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry"). The statement [CONVERT TEXT](javascript:call_link\('abapconvert_text.htm'\)) can be used to specify the order with respect to the locale.

-   If operands of type n contain a valid string of digits, the proportions of the numbers represented are determined correctly.

Example

The example shows whether the binary display of capitals is larger, the same or smaller than the binary display of small letters for individual characters. For the Unicode character display [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") used by SAP, capitals are smaller than small letters. Numbers and special characters are not case-sensitive, and the result of the comparison for equality is true.

DATA char TYPE c LENGTH 1.
cl\_demo\_input=>request( CHANGING field = char ).
cl\_demo\_output=>display(
  COND #( WHEN to\_upper( char ) > to\_lower( char )
               THEN \`Upper case is greater than lower case\`
          WHEN to\_upper( char ) = to\_lower( char )
               THEN \`Upper case is equal to lower case\`
               ELSE \`Upper case is lower than lower case\` ) ).

Byte-Like Comparison Type

If the comparison type is one of the [byte-like data types](javascript:call_link\('abenbuiltin_types_byte.htm'\)), the content is compared from left to right. Based on the byte values, the first differing byte from the left determines which operand is greater.

Example

A byte-like comparison type can be achieved by comparing byte-like operands. Invalid values are compared into hexadecimal zeros here before being entered.

DATA hex1 TYPE x LENGTH 1.
cl\_demo\_input=>add\_field( CHANGING field = hex1 ).
DATA hex2 TYPE x LENGTH 1.
cl\_demo\_input=>request( CHANGING field = hex2 ).
cl\_demo\_output=>display(
  COND #( WHEN hex1 > hex2
               THEN \`HEX1 is greater than HEX2\`
          WHEN hex1 = hex2
               THEN \`HEX1 equals HEX2\`
               ELSE \`HEX1 is lower than HEX2\` ) ).

Date/Time Type as Comparison Type

If the comparison type is one of the [date/time types](javascript:call_link\('abenbuiltin_types_date_time.htm'\)), the content is compared from left to right. Based on the internal binary representation in the [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") used, the first differing character from the left determines which operand is greater.

Note

For operands of types d and t containing a valid date or a valid time, the later date or time is always greater than the earlier one.

Example

Compares a date produced by adding a number value from the current date with the original date. The later date is always greater than the earlier one.

DATA(date) = sy-datlo.
cl\_demo\_input=>add\_field( CHANGING field = date ).
DATA(days) = CONV int2( 0 ).
cl\_demo\_input=>request( CHANGING field = days ).
DATA(new\_date) = CONV d( date + days ).
cl\_demo\_output=>display(
  COND #( WHEN new\_date > date
               THEN \`NEW\_DATE is greater than DATE\`
          WHEN new\_date = date
               THEN \`NEW\_DATE equals DATE\`
               ELSE \`NEW\_DATE is lower than DATE\` ) ).