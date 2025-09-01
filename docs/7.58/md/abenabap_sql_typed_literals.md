  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Operands sql\_elem](javascript:call_link\('abensql_operands.htm'\)) →  [ABAP SQL - literal](javascript:call_link\('abenabap_sql_literals.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Typed%20Literals%2C%20ABENABAP_SQL_TYPED_LITERALS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL - Typed Literals

Syntax

... dtype\`...\`

Effect

[Typed literals](javascript:call_link\('abentyped_literal_glosry.htm'\) "Glossary Entry") can be created for all [built-in ABAP Dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)) with the exception of LCHR, LRAW, GEOM\_EWKB, PREC, ACCP, DF16\_SCL, and DF34\_SCL. A typed literal can be used in read positions of ABAP SQL statements where [host variables](javascript:call_link\('abenabap_sql_host_variables.htm'\)) are possible and where it is always handled as an [elementary SQL expression](javascript:call_link\('abensql_elem.htm'\)) of the specified data type. It is passed without an ABAP-specific type conversion to the database and evaluated there.

dtype is the name of a built-in dictionary type and it is followed by the character-like representation of the value in single backquotes (\`). Only those values can be specified that are accepted by the data type of the literal.

When using the [literal operator](javascript:call_link\('abenliteral_operator_glosry.htm'\) "Glossary Entry") for concatenating two typed literals of the same type as a single character literal, the data type dtype is specified only once before the first subliteral. The syntax is, for example: INT8\`123\` & \`456\`.

Hints

-   Typed literals should be used instead of untyped literals. They offer many advantages, such as more flexibility with regard to the data type they can have, explicit type declaration, and checking type compatibility of the value specified.
-   The maximum length of the content of a typed literal is 255 and can be restricted further by the [value range](javascript:call_link\('abenvalue_range_glosry.htm'\) "Glossary Entry") of the data type. The maximum line length in the ABAP Editor is 255 characters, which means that a literal with 255 characters cannot be specified within a single row of a program due to the type name and the backquotes. The maximum length of 255 characters can be achieved only by using the [literal operator](javascript:call_link\('abenliteral_operator.htm'\)) &.

Typed literals can be split into the following categories:

-   [Typed Numeric Literals](#@@ITOC@@ABENABAP_SQL_TYPED_LITERALS_1)
-   [Typed Character Literals](#@@ITOC@@ABENABAP_SQL_TYPED_LITERALS_2)
-   [Typed Byte Literals](#@@ITOC@@ABENABAP_SQL_TYPED_LITERALS_3)
-   [Typed Literals for Character-Like Types with Special Semantics](#@@ITOC@@ABENABAP_SQL_TYPED_LITERALS_4)
-   [Typed Date and Time Literals](#@@ITOC@@ABENABAP_SQL_TYPED_LITERALS_5)
-   [Typed Currency and Quantity Literals](#@@ITOC@@ABENABAP_SQL_TYPED_LITERALS_6)

Typed Numeric Literals   

The following table describes the typed numeric literals:

Syntax

Name

Possible Characters

INT1\`...\`
INT2\`...\`
INT4\`...\`
INT8\`...\`

[Integer literal](javascript:call_link\('abeninteger_literal_glosry.htm'\) "Glossary Entry")

Uninterrupted string of digits, with an optional sign + or - as a prefix. At least one digit must be specified. The value of the number must be in the value range of the respective [dictionary type](javascript:call_link\('abenddic_builtin_types.htm'\)). An empty literal \`\` is not allowed.

DEC\`...\`

[Packed number literal](javascript:call_link\('abenpacked_number_literal_glosry.htm'\) "Glossary Entry")

String of digits with a maximum of one decimal point (.). This point can be located in front of, between, or after the digits. The string can be prefixed with an optional sign + or -. At least one and no more than 31 digits can be specified. The maximum number of decimal places is 14. The length used in the memory and the number of decimal places are determined by the number of digits specified. An empty literal \`\` is not allowed.

DECFLOAT16\`...\`
*|* D16N\`...\`
DF16\_RAW\`...\`
*|* D16R\`...\`
DECFLOAT34\`...\`
*|* D34N\`...\`
DF34\_RAW\`...\`
*|* D34R\`...\`

[Decimal floating point literal](javascript:call_link\('abendecfloat_literal_glosry.htm'\) "Glossary Entry")

Mantissa followed by an optional exponent. The mantissa is a string of digits with a maximum of one decimal point (.). This point can be located in front of, between, or after the digits. The string can be prefixed with an optional sign + or -. Length restrictions, typing conventions, and scaling rules of the respective [dictionary type](javascript:call_link\('abenddic_builtin_types.htm'\)) apply. An empty literal \`\` is not allowed.

DF16\_DEC\`...\`
*|* D16D\`...\`
DF34\_DEC\`...\`
*|* D34D\`...\`

[Decimal floating point literal](javascript:call_link\('abendecfloat_literal_glosry.htm'\) "Glossary Entry")

The rules for [packed number literals](javascript:call_link\('abenpacked_number_literal_glosry.htm'\) "Glossary Entry") (see above) apply. Furthermore, DF16\_DEC can have a maximum length of 16 digits. An empty literal \`\` is not allowed.

FLTP\`...\`

[Binary floating point literal](javascript:call_link\('abenbinfloat_literal_glosry.htm'\) "Glossary Entry")

Mantissa followed by an optional exponent. The mantissa is a string of digits with a maximum of one decimal point (.). This point can be located in front of, between, or after the digits. The string can be prefixed with an optional sign + or -. The maximum number of valid places is 16. An empty literal \`\` is not allowed.

Hints

-   For all numeric literals, the rule applies that not more than one zero is allowed on the left side of the decimal point. Thus, DEC\`00.00\` is not allowed and INT1\`00\` as [integer literal](javascript:call_link\('abeninteger_literal_glosry.htm'\) "Glossary Entry") is not allowed either. This rule is verified by the syntax check.
-   A zero with a sign + or - is not allowed for [integer literals](javascript:call_link\('abeninteger_literal_glosry.htm'\) "Glossary Entry") and [packed number literals](javascript:call_link\('abendecfloat_literal_glosry.htm'\) "Glossary Entry"). For example, INT4\`-0\` is not allowed. This rule is verified by the syntax check.
-   For all [decimal floating point literals](javascript:call_link\('abendecfloat_literal_glosry.htm'\) "Glossary Entry"), there are alternative notations for the data type. This is indicated in the table above by the *|* sign.

Example

Use of a typed numeric literal in a WHERE condition.

SELECT \*
       FROM demo\_ddic\_types
       WHERE int8 = int8\`32984723948723\`
       INTO TABLE @FINAL(result).

Typed Character Literals   

The following table describes the typed character literals:

Syntax

Name

Possible Characters

CHAR\`...\`

[Text field literal](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry")

String of any characters. The length of a text field literal must lie between 1 and 255 characters. An empty text field literal CHAR\`\` is allowed and denotes the initial value of one blank. To represent a quotation mark in a text field literal, two consecutive quotation marks must be specified.

STRING\`...\`
SSTRING\`...\`

[Text string literal](javascript:call_link\('abentext_string_literal_glosry.htm'\) "Glossary Entry")

String of any characters. A typed text string literal can have a maximum of 255 characters. A typed text string literal can be empty and the typed text string literal STRING\`\` represents an empty string with length 0. To represent a backquote in a text string literal, two consecutive backquotes must be specified.

Example

Use of a typed character literal in a WHERE condition.

SELECT \*
      FROM demo\_ddic\_types
      WHERE char10 = char\`hallo\`
      INTO TABLE @FINAL(result).

Typed Byte Literals   

The following table describes the typed byte literals:

Syntax

Name

Possible Characters

RAW\`...\`

[Byte field literal](javascript:call_link\('abenbyte_field_literal_glosry.htm'\) "Glossary Entry")

String including the characters 0-9 and A-F. No other characters are allowed. The number of characters must be even. At least two characters must be specified. An empty literal RAW\`\` is not allowed.

RAWSTRING\`...\`

[Byte string literal](javascript:call_link\('abenbyte_string_literal_glosry.htm'\) "Glossary Entry")

String including the characters 0-9 and A-F. No other characters are allowed. The number of characters must be even. The empty byte string literal RAWSTRING\`\` represents an empty byte string.

Hints

-   The specified characters are used to represent byte values in a hexadecimal format.
-   The letters A-F must be in uppercase.
-   If [untyped character literals](javascript:call_link\('abenabap_sql_untyped_literals.htm'\)) are used for hexadecimal values, the number of characters may be odd and the value is padded on the right with hexadecimal 0 in accordance with the [conversion rules](javascript:call_link\('abenconversion_type_c.htm'\)).

Example

Use of a typed byte field literal in a WHERE condition.

SELECT \*
      FROM demo\_ddic\_types
      WHERE raw1 = raw\`11\`
      INTO TABLE @FINAL(result).

Typed Literals for Character-Like Types with Special Semantics   

The following table describes the typed literals for character-like types with special semantics:

Syntax

Name

Possible Characters

NUMC\`...\`

[Numeric text literal](javascript:call_link\('abennumeric_text_literal_glosry.htm'\) "Glossary Entry")

Character string consisting of the digits 0 to 9. The length of a numeric text literal must lie between 1 and 255 characters. Empty numeric text literals NUMC\`\` or blanks within numeric text literals are not allowed.

CLNT\`...\`

[Client literal](javascript:call_link\('abenclient_literal_glosry.htm'\) "Glossary Entry")

String of any characters with a length of exactly 3 characters. Trailing blanks are not allowed. An empty literal CLNT\`\` is allowed and denotes the initial value of three blanks.

LANG\`...\`

[Language key literal](javascript:call_link\('abenlang_key_literal_glosry.htm'\) "Glossary Entry")

A language key literal can contain any character and it consists of exactly one character. A blank space is not allowed. An empty literal LANG\`\` is allowed and denotes a blank.

Example

Use of a typed numeric text literal in a WHERE condition.

SELECT \*
      FROM demo\_ddic\_types
      WHERE numc1 = numc\`1234\`
      INTO TABLE @FINAL(result).

Typed Date and Time Literals   

The following table describes the typed date and time literals:

Syntax

Name

Possible Characters

DATS\`...\`
DATN\`...\`

[Date literal](javascript:call_link\('abendate_literal_glosry.htm'\) "Glossary Entry")

Character string that represents a date in the format YYYYMMDD. Must contain a valid date according to the rules for valid dates described for time stamp literals below. An empty string \`\` is not allowed.

TIMS\`...\`
TIMN\`...\`

[Time literal](javascript:call_link\('abentime_literal_glosry.htm'\) "Glossary Entry")

Character string that represents a time in the format HHMMSS. Must contain a valid time according to the rules for valid times described for time stamp literals below. An empty literal \`\` is not allowed.

UTCLONG\`...\`

[Time stamp literal](javascript:call_link\('abentime_stamp_literal_glosry.htm'\) "Glossary Entry")

Character string that represents a [time stamp](javascript:call_link\('abentime_stamp_glosry.htm'\) "Glossary Entry") in the format YYYY-MM-DDTHH:MM:SS,SSSSSSS, precise to 100 nanoseconds. YYYY-MM-DD consists of eight digits separated by hyphens. They must represent dates that are valid in accordance with the calendar rules: YYYY (year): 0001 to 9999, mm (month): 01 to 12, DD (day): 01 to 31. 1582-10-05 to 1582-10-14 are skipped due to the conversion from the Julian to the Gregorian calendar. The letter T between the date and the time must be specified exactly as it is here. HH:MM:SS,SSSSSSS consists of digits separated by colons and a comma. They must represent a time in a 24-hour range in the format HHMMSS: 00 to 23 for HH (hours) and 00 to 59 for MM (minutes) and 00 to 59 for SS,SSSSSSS (seconds with a maximum of seven decimal places). More than seven decimal places can be specified, however the digits after the seventh decimal place must be 0. The comma does not have to be specified. No other characters are allowed. An empty literal UTCLONG\`\` is allowed and denotes the initial value.

Hint

60 cannot be specified in a time, either as minutes or as seconds. In particular, this means that [leap seconds](javascript:call_link\('abenleap_second_glosry.htm'\) "Glossary Entry") cannot be specified.

Example

Use of typed literals as operands in [SQL date and time functions](javascript:call_link\('abenabap_sql_date_time_functions.htm'\)).

SELECT SINGLE
       FROM demo\_expressions
       FIELDS
         utcl\_add\_seconds( utclong\`2020-04-01T12:01:01,2\`,50 ) AS utcl,
         datn\_add\_months( datn\`17890101\`,15 ) AS add\_months,
         tims\_is\_valid( tims\`121300\` ) AS tims
       INTO @FINAL(result).

Typed Currency and Quantity Literals   

The following table describes the typed currency and quantity literals:

Syntax

Name

Possible Characters

CURR\`...\`

[Currency field literal](javascript:call_link\('abencurrency_literal_glosry.htm'\) "Glossary Entry")

Uninterrupted string of digits with an optional sign + or - as a prefix. Cannot contain more than one decimal point (.). At least one and no more than 31 digits can be specified. The maximum number of decimal places is 14. Not more than one zero is allowed on the left side of the decimal point. A zero with a sign + or - is not allowed. An empty literal CURR\`\` is not allowed.

CUKY\`...\`

[Currency key literal](javascript:call_link\('abencurrency_key_literal_glosry.htm'\) "Glossary Entry")

String of any characters with a maximum of 5 characters. Trailing blanks are not allowed. An empty literal CUKY\`\` is allowed and denotes five blanks.

QUAN\`...\`

[Quantity field literal](javascript:call_link\('abenquantity_field_literal_glosry.htm'\) "Glossary Entry")

Uninterrupted string of digits with an optional sign + or - as a prefix. Cannot contain more than one decimal point (.). At least one and no more than 31 digits can be specified. The maximum number of decimal places is 14. Not more than one zero is allowed on the left side of the decimal point. A zero with a sign + or - is not allowed. An empty literal QUAN\`\` is not allowed.

UNIT\`...\`

[Unit key literal](javascript:call_link\('abenunit_key_literal_glosry.htm'\) "Glossary Entry")

String of any characters with a maximum of 3 characters. An empty literal UNIT\`\` is allowed and denotes two blanks.

Example

Use of a typed currency field literal in a WHERE condition.

SELECT \*
      FROM demo\_ddic\_types
      WHERE curr10\_2 = curr\`123.43\`
      INTO TABLE @FINAL(result).