  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Comparison Expressions](javascript:call_link\('abenlogexp_comp.htm'\)) →  [rel\_exp - Comparison Rules](javascript:call_link\('abenlogexp_rules.htm'\)) →  [rel\_exp - Comparing Elementary Data Types](javascript:call_link\('abenlogexp_rules_operands.htm'\)) →  [rel\_exp - Comparison Type of Elementary Data Objects](javascript:call_link\('abenlogexp_rules_operands_dobj.htm'\)) → 

rel\_exp - Comparison Type of Character-Like Data Objects

The following tables show the [comparison types](javascript:call_link\('abencomparison_type_glosry.htm'\) "Glossary Entry") for comparisons between character-like data types and other data types. If the type of an operand is not the same as the comparison type, it is [converted](javascript:call_link\('abenconversion_elementary.htm'\)) to this type. The [comparison rules for the comparison types](javascript:call_link\('abencomparison_type.htm'\)) determine how the comparison is performed. If no comparison type is specified for a combination, no comparison is possible.

-   [Comparisons with Numeric Data Types](#abenlogexp-character-1--------comparisons-with-character-like-data-types---@ITOC@@ABENLOGEXP_CHARACTER_2)

-   [Comparisons with Byte-Like Data Types](#abenlogexp-character-3--------comparisons-with-date-time-types---@ITOC@@ABENLOGEXP_CHARACTER_4)

Comparisons with Numeric Data Types

\-

string, c, n

decfloat16, decfloat34

decfloat34

f

f

p

p

int8

int8

i, s, b

i

Value Ranges and Length Adjustments

-   When the types string and c are compared with packed numbers of the type p, the comparison type p has 31 places together with the number of decimal places of the operand of type p. This can raise exceptions if overflows occur.

-   When the type n is compared with packed numbers of the type p, the numeric text can contain up to 31 digits, excluding leading zeros and regardless of how many decimal places are in the operand with type p.

-   When the types string, c, and n are compared with integers of the types int8, i, s, and b, the number value in the character-like operand does not need to fit the value range of the comparison type i. If the number value is not in the value range, the comparison produces the correct result and no exception is raised.

Example

Compare a numerical text with an integer. If numtext contains an invalid value, this results in a non-handleable exception with the runtime error CONVT\_NO\_NUMBER.

DATA numtext TYPE n LENGTH 3.
cl\_demo\_input=>add\_field( CHANGING field = numtext ).
DATA num TYPE int1.
cl\_demo\_input=>request( CHANGING field = num ).
cl\_demo\_output=>display(
  COND #( WHEN numtext < num THEN |{ numtext } < { num }|
          WHEN numtext > num THEN |{ numtext } > { num }|
                             ELSE |{ numtext } = { num }| ) ).

Comparisons with Character-Like Data Types

\-

string

c

n

string

string

string

p

c

string

c

p

n

p

p

n

Length Adjustments

-   Operands with a different length of data type string never match. If the content of the operands matches across the length of the shorter operand, the shorter operand is less than the longer operand. Otherwise the surplus places in the longer field are cut off on the right and then the content is compared.

-   In comparisons between two operands of data type c with the same length, the entire length is compared, which means the trailing blanks are respected. In comparisons between two operands of data type c with different lengths, the shorter field is [converted](javascript:call_link\('abenconversion_type_c.htm'\)) to the longer field, with blanks used as padding on the right.

-   In comparisons between two operands of data type n, the shorter field is [converted](javascript:call_link\('abenconversion_type_n.htm'\)) to the longer field, with the character "0" used as padding on the left.

Note

In comparisons between text fields of the type c and text strings of the type string, any trailing blanks are ignored by conversions from c to string. This can have unexpected results. The conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) can be used here to force other comparison types (see the example after the link).

Example

In the following comparison, the comparison type is c and the comparison is made in the current code page, in accordance with the binary representation. In most code pages, "a" is greater than "Z". See also the example for [CONVERT TEXT](javascript:call_link\('abapconvert_text.htm'\)).

IF 'a' > 'Z'.
  cl\_demo\_output=>display\_text( \`'a' > 'Z'\` ).
ELSE.
  cl\_demo\_output=>display\_text( \`'a' < 'Z'\` ).
ENDIF.

Example

The following comparison is false, which is probably unexpected. The value returned by [boolc](javascript:call_link\('abenboole_functions.htm'\)) has the type string and includes a blank, whereas the constant abap\_false has the type c. In the comparison, the value of abap\_false is converted to an empty string, since the blank it contains is ignored.

IF boolc( 1 = 2 ) = abap\_false.
  cl\_demo\_output=>display\_text( 'yes' ).
ELSE.
  cl\_demo\_output=>display\_text( 'no' ).
ENDIF.

The following comparison, however, is true, since the return value of [xsdbool](javascript:call_link\('abenboole_functions.htm'\)) has the same ABAP type as the constant abap\_false.

IF xsdbool( 1 = 2 ) = abap\_false.
  cl\_demo\_output=>display\_text( 'yes' ).
ELSE.
  cl\_demo\_output=>display\_text( 'no' ).
ENDIF.

Executable Example

[Comparing Text Strings of Different Length](javascript:call_link\('abenstring_comparison_abexa.htm'\))

Comparisons with Byte-Like Data Types

\-

string

c

n

xstring

string

string

p

x

string

c

p

Length Adjustments

-   When data type c is compared with x or xstring, the shorter field is adjusted to the length of the longer field after conversions from x to c or xstring to string. Blanks are used as filler on the right.

-   Lengths are not adjusted for comparisons between the data type string and x or xstring.

Example

The logical expression CONV xstring( 255 ) = 'FF' is true.

ASSERT CONV xstring( 255 ) = 'FF'.

Comparisons with Date/Time Types

\-

string

c

n

d,t

string

c

n

Length Adjustments

-   For comparisons between data types c, n, or string on the one hand and d on the other, the longer field is truncated on the right to the length of the shorter field, as long as only blanks are cut off.

-   For comparisons between data types c or n on the one hand and t on the other, the longer field is truncated on the right to the length of the shorter field, as long as only blanks are cut off.

-   Lengths are not adjusted for comparisons between the data type string and the data type t.

Example

The example shows the length adjustment in a comparison of a time field with a character string. Both comparisons are true.

IF CONV t( '120000' ) = '12'.
  cl\_demo\_output=>write( |CONV t( '120000' ) = '12'| ).
ENDIF.
IF CONV t( '123000' ) <> '12'.
  cl\_demo\_output=>write( |CONV t( '123000' ) <> '12'| ).
ENDIF.
cl\_demo\_output=>display( ).

Continue
![Example](exa.gif "Example") [Comparing Text Strings of Different Length](javascript:call_link\('abenstring_comparison_abexa.htm'\))