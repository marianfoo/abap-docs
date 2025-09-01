  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expr_func.htm) →  [Logical Expressions (log\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) →  [Comparison Expressions (rel\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_comp.htm) →  [rel\_exp - Comparison Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules.htm) →  [rel\_exp - Comparing Elementary Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules_operands.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20Comparison%20Rules%20for%20Comparison%20Types%2C%20ABENCOMPARISON_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

rel\_exp - Comparison Rules for Comparison Types

When operands with elementary data types are compared, the comparison is performed according to a comparison type that is determined by the involved operands, as described for [elementary data objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules_operands_dobj.htm) and [calculation expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules_expressions.htm). The comparison type can be one of the [built-in ABAP types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_abap_type_glosry.htm "Glossary Entry"). When incompatible operands are compared, the operands that do not have the comparison type are converted to this type.

-   [Numeric Comparison Type](#@@ITOC@@ABENCOMPARISON_TYPE_1)
-   [Character-Like Comparison Type](#@@ITOC@@ABENCOMPARISON_TYPE_2)
-   [Byte-Like Comparison Type](#@@ITOC@@ABENCOMPARISON_TYPE_3)
-   [Date/Time Type as Comparison Type](#@@ITOC@@ABENCOMPARISON_TYPE_4)
-   [Time Stamp Type as Comparison Type](#@@ITOC@@ABENCOMPARISON_TYPE_5)

Numeric Comparison Type   

If the comparison type is one of the [numeric data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_numeric.htm), the numeric values are compared.

Hints

-   Since platform-dependent rounding errors may occur with data type f, a comparison for equality often does not make any sense for binary floating point numbers.
-   [Scale](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenscale_glosry.htm "Glossary Entry") and [precision](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprecision_glosry.htm "Glossary Entry") are not relevant in comparisons between decimal floating point numbers.

Example

The comparison of a text string with an integer is performed with numeric comparison type i. If the text string cannot be converted to i, an uncatchable exception would be raised in the comparison. Convertibility is therefore checked first using the conversion operator [CONV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_conv.htm).

DATA char TYPE string.
cl\_demo\_input=>add\_field( CHANGING field = char ).
DATA num TYPE i.
cl\_demo\_input=>request(   CHANGING field = num ).
TRY.
    FINAL(test) = CONV i( char ).
  CATCH cx\_sy\_conversion\_error.
    cl\_demo\_output=>display( \`Try again!\` ).
    RETURN.
ENDTRY.
cl\_demo\_output=>display(
  COND #( WHEN char > num THEN \`CHAR is greater than NUM\`
          WHEN char = num THEN \`CHAR equals NUM\`
                          ELSE \`CHAR is lower than NUM\` ) ).

Character-Like Comparison Type   

If the comparison type is one of the [character-like data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_character.htm), the content is compared from left to right. Based on the internal binary representation in the [code page](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencodepage_glosry.htm "Glossary Entry") used, the first differing character from the left determines which operand is greater.

Hints

-   For operands of types c and string, the content is not compared with the [locale](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocale_glosry.htm "Glossary Entry") of the current [text environment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment_glosry.htm "Glossary Entry"). The statement [CONVERT TEXT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconvert_text.htm) can be used to determine the order of the locale.
-   For operands of type n that contain a valid string of digits, the proportions of the numbers represented are determined correctly.

Example

The example shows whether the binary representation of uppercase letters is larger, the same or smaller than the binary representation of lowercase letters for individual characters. For the Unicode character representation [UCS-2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenucs2_glosry.htm "Glossary Entry") used by ABAP, uppercase letters are smaller than lowercase letters. Numbers and special characters are not case-sensitive and the result of the comparison for equality is true.

DATA char TYPE c LENGTH 1.
cl\_demo\_input=>request( CHANGING field = char ).
cl\_demo\_output=>display(
  COND #( WHEN to\_upper( char ) > to\_lower( char )
               THEN \`Upper case is greater than lower case\`
          WHEN to\_upper( char ) = to\_lower( char )
               THEN \`Upper case is equal to lower case\`
               ELSE \`Upper case is lower than lower case\` ) ).

Byte-Like Comparison Type   

If the comparison type is one of the [byte-like data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_byte.htm), the content is compared from left to right. Based on the byte values, the first differing byte from the left determines which operand is greater.

Example

A byte-like comparison type is achieved by comparing byte-like operands. Invalid values are converted into hexadecimal zeros here when they are entered.

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

If the comparison type is one of the [date/time types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_date_time.htm), the content is compared from left to right. Based on the internal binary representation in the [code page](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencodepage_glosry.htm "Glossary Entry") used, the first differing character from the left determines which operand is greater.

Hint

For operands of types d and t that contain a valid date or a valid time, the later date or time is always greater than the earlier one.

Example

Comparison of a date obtained by the addition of a numeric value from the current date to the original date. The later date is always greater than the earlier date.

DATA(date) = cl\_demo\_date\_time=>get\_user\_date( ).
cl\_demo\_input=>add\_field( CHANGING field = date ).
DATA(days) = CONV int2( 0 ).
cl\_demo\_input=>request( CHANGING field = days ).
FINAL(new\_date) = CONV d( date + days ).
cl\_demo\_output=>display(
  COND #( WHEN new\_date > date
               THEN \`NEW\_DATE is greater than DATE\`
          WHEN new\_date = date
               THEN \`NEW\_DATE equals DATE\`
               ELSE \`NEW\_DATE is lower than DATE\` ) ).

Time Stamp Type as Comparison Type   

If the comparison type is the [time stamp type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_date_time.htm), the times are compared, whereby a later time is always the greater value and the initial value is always less than every real time stamp.