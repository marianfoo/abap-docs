  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Elementary CDS Operands](javascript:call_link\('abencds_operands_v2.htm'\)) →  [CDS DDL - CDS View Entity, literal](javascript:call_link\('abencds_literal_v2.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, Typed Literals, ABENCDS_TYPED_LITERAL_V2, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, Typed Literals

Syntax

... [dtype](javascript:call_link\('abencds_typing.htm'\))'...'

Effect

[Typed literal](javascript:call_link\('abentyped_literal_glosry.htm'\) "Glossary Entry") in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). Typed literals can be created for all [built-in ABAP Dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)) with the exception of LCHR, LRAW, GEOM\_EWKB, PREC, ACCP, DF16\_SCL, DF34\_SCL, and VARC. A typed literal can be used in all operand positions where this is documented.

[dtype](javascript:call_link\('abencds_typing.htm'\)) is the name of a [built-in dictionary type](javascript:call_link\('abencds_typing.htm'\)) with the type namespace abap. and it is followed by the character-like representation of the value in single quotes ('). Only those values can be specified that are accepted by the data type of the literal. Length and decimal places are derived from the literal value, they must not be explicitly specified.

Hints

-   Typed literals should be used instead of untyped literals. They offer many advantages, such as more flexibility with regard to the data type they can have, explicit type declaration, and checking type compatibility of the value specified.
-   Currently, typed literals are available in CDS view entities and in CDS hierarchies in all operand positions where untyped literals are possible with one exception: typed literals are not supported in the [ON condition of a CDS association](javascript:call_link\('abencds_simple_association_v2.htm'\)).

Typed literals can be divided into the following categories:

-   [Typed Numeric Literals](#abencds-typed-literal-v2-1-------typed-character-literals---@ITOC@@ABENCDS_TYPED_LITERAL_V2_2)
-   [Typed Byte Literals](#abencds-typed-literal-v2-3-------typed-literals-for-character-like-types-with-special-semantics---@ITOC@@ABENCDS_TYPED_LITERAL_V2_4)
-   [Typed Date and Time Literals](#abencds-typed-literal-v2-5-------typed-currency-and-quantity-literals---@ITOC@@ABENCDS_TYPED_LITERAL_V2_6)

Typed Numeric Literals   

The following table describes the typed numeric literals:

Syntax

Name

Possible Characters

abap.int1'...'
abap.int2'...'
abap.int4'...'
abap.int8'...'

[Integer literal](javascript:call_link\('abeninteger_literal_glosry.htm'\) "Glossary Entry")

Uninterrupted string of digits, with an optional sign + or - as a prefix. At least one digit must be specified. The value of the number must be in the value range of the respective [dictionary type](javascript:call_link\('abenddic_builtin_types.htm'\)). An empty literal \`\` is not allowed.

abap.dec'...'

[Packed number literal](javascript:call_link\('abenpacked_number_literal_glosry.htm'\) "Glossary Entry")

String of digits with a maximum of one decimal point (.). This point can be located in front of, between, or after the digits. The string can be prefixed with an optional sign + or -. At least one and no more than 31 digits can be specified. The maximum number of decimal places is 14. The length used in the memory and the number of decimal places are determined by the number of digits specified. An empty literal \`\` is not allowed.

abap.decfloat16'...'
*|* abap.d16n'...'
abap.decfloat34'...'
*|* abap.d34n'...'

[Decimal floating point literal](javascript:call_link\('abendecfloat_literal_glosry.htm'\) "Glossary Entry")

Mantissa followed by an optional exponent. The mantissa is a string of digits with a maximum of one decimal point (.). This point can be located in front of, between, or after the digits. The string can be prefixed with an optional sign + or -. Length restrictions, typing conventions, and scaling rules of the respective [dictionary type](javascript:call_link\('abenddic_builtin_types.htm'\)) apply. An empty literal '' is not allowed.

abap.fltp'...'

[Binary floating point literal](javascript:call_link\('abenbinfloat_literal_glosry.htm'\) "Glossary Entry")

Mantissa followed by an optional exponent. The mantissa is a string of digits with a maximum of one decimal point (.). This point can be located in front of, between, or after the digits. The string can be prefixed with an optional sign + or -. The maximum number of valid places is 16. An empty literal '' is not allowed.

Hints

-   A zero with a sign + is not allowed for [integer literals](javascript:call_link\('abeninteger_literal_glosry.htm'\) "Glossary Entry") and [packed number literals](javascript:call_link\('abendecfloat_literal_glosry.htm'\) "Glossary Entry"). For example, abap.int4'+0' is not allowed. This rule is verified by the syntax check. A zero with a sign - is allowed though.
-   For all [decimal floating point literals](javascript:call_link\('abendecfloat_literal_glosry.htm'\) "Glossary Entry"), there are alternative notations for the data type. This is indicated in the table above by the *|* sign.
-   A literal prefixed with a sign is never interpreted as an [arithmetic expression](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\)).

Example

Use of a typed numeric literal in different operand positions in a CDS view entity.

@EndUserText.label: 'CDS view entity, numeric typed literals'
define view entity DEMO\_CDS\_NUMERIC\_TYPED\_LIT
  as select from demo\_ddic\_types
{
  key id,
      abap.int1'1'  as int1,
      abap.dec'.15' as dec\_literal,
      abap.decfloat34'123.456E789' \* 100 as ArithmField
}
where
  d16n = abap.d16n'123.45'

Typed Character Literals   

The following table describes the typed character literals:

Syntax

Name

Possible Characters

abap.char'...'

[Text field literal](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry")

String of any alphanumeric characters. The length of a text field literal must lie between 1 and 255 characters. An empty text field literal abap.char'' is allowed and denotes the initial value of one blank. Trailing blanks are removed but the type length includes the trimmed trailing blanks.

abap.string'...'
abap.sstring'...'

[Text string literal](javascript:call_link\('abentext_string_literal_glosry.htm'\) "Glossary Entry")

String of any alphanumeric characters. A typed text string literal can have a maximum of 255 characters. A typed text string literal can be empty and the typed text string literal abap.string'' represents an empty string with length 0.
For data type abap.sstring, trailing blanks are removed but the type length includes the trimmed trailing blanks.
For data type abap.string, trailing blanks are not removed.

Example

Use of typed character literals in a CDS view entity.

@EndUserText.label: 'CDS view entity, typed char literals'
define view entity DEMO\_CDS\_CHAR\_TYPED\_LIT
  as select from demo\_ddic\_types
{
  key id,
      abap.char'aaa   '    as char\_trailing\_blanks,
      abap.sstring'aaa   ' as sstring\_trailing\_blanks,
      abap.string'aaa   '  as string\_trailing\_blanks,
      'aaa'                as untyped\_literal
}

The program DEMO\_CDS\_CHAR\_TYPED\_LIT accesses the view and demonstrates the following:

-   Trailing blanks are included in the type length of text field and text string literals.
-   Trailing blanks are removed from typed literals of type CHAR and SSTRING, but not from typed literals of type STRING.

Typed Byte Literals   

The following table describes the typed byte literals:

Syntax

Name

Possible Characters

abap.raw'...'

[Byte field literal](javascript:call_link\('abenbyte_field_literal_glosry.htm'\) "Glossary Entry")

String including the characters 0-9 and A-F. No other characters are allowed. The number of characters must be even. At least two characters must be specified. An empty literal abap.raw'...' is not allowed.

abap.rawstring'...'
*|* abap.rstr'...'

[Byte string literal](javascript:call_link\('abenbyte_string_literal_glosry.htm'\) "Glossary Entry")

String including the characters 0-9 and A-F. No other characters are allowed. The number of characters must be even. The empty byte string literal abap.rawstring'' represents an empty byte string.

Hints

-   The specified characters are used to represent byte values in a hexadecimal format.
-   The letters A-F must be in uppercase.

Example

Use of a typed byte field literal in a CDS view entity.

@EndUserText.label: 'CDS view entity, typed byte literals'
define view entity DEMO\_CDS\_TYPED\_BYTE\_LIT
  as select from demo\_ddic\_types
{
  key id
}
where
  raw1 = abap.raw'AA'

Typed Literals for Character-Like Types with Special Semantics   

The following table describes the typed literals for character-like types with special semantics:

Syntax

Name

Possible Characters

abap.numc'...'

[Numeric text literal](javascript:call_link\('abennumeric_text_literal_glosry.htm'\) "Glossary Entry")

Character string consisting of the digits 0 to 9. The length of a numeric text literal must lie between 1 and 255 characters. Empty numeric text literals abap.numc'' or blanks within numeric text literals are not allowed. Negative values are not allowed.

abap.clnt'...'

[Client literal](javascript:call_link\('abenclient_literal_glosry.htm'\) "Glossary Entry")

String of any alphanumeric characters with a length of exactly 3 characters. Blanks are not allowed. An empty literal abap.clnt'' is not allowed.

abap.lang'...'

[Language key literal](javascript:call_link\('abenlang_key_literal_glosry.htm'\) "Glossary Entry")

A language key literal can contain any alphanumeric character and it consists of exactly one character. An empty literal abap.lang'' is not allowed. A blank space is allowed.

Example

Use of a typed numeric text literal in a WHERE condition.

@EndUserText.label: 'CDS view entity, numeric typed literals'
define view entity DEMO\_CDS\_NUMERIC\_TEXT\_TYP\_LIT
  as select from demo\_ddic\_types
{
  key id
}
where
  numc1 = abap.numc'1'

Typed Date and Time Literals   

The following table describes the typed date and time literals:

Syntax

Name

Possible Characters

abap.dats'..'
abap.datn'...'

[Date literal](javascript:call_link\('abendate_literal_glosry.htm'\) "Glossary Entry")

Character string that represents a date in the format YYYYMMDD. Must contain a valid date according to the rules for valid dates described for time stamp literals below. An empty string '' is not allowed.

abap.tims'...'
abap.timn'...'

[Time literal](javascript:call_link\('abentime_literal_glosry.htm'\) "Glossary Entry")

Character string that represents a time in the format HHMMSS. Must contain a valid time according to the rules for valid times described for time stamp literals below. An empty literal '' is not allowed.

abap.utclong'...'
*|* abap.utcl'...'

[Time stamp literal](javascript:call_link\('abentime_stamp_literal_glosry.htm'\) "Glossary Entry")

Character string that represents a [time stamp](javascript:call_link\('abentime_stamp_glosry.htm'\) "Glossary Entry") in the format YYYY-MM-DD HH:MM:SS,SSSSSSS, precise to 100 nanoseconds. YYYY-MM-DD consists of eight digits separated by hyphens. They must represent dates that are valid in accordance with the calendar rules: YYYY (year): 0001 to 9999, mm (month): 01 to 12, DD (day): 01 to 31. "1582-10-05" to "1582-10-14" are skipped due to the conversion from the Julian to the Gregorian calendar. HH:MM:SS,SSSSSSS consists of digits separated by colons and a full stop. They must represent a time in a 24-hour range in the format HHMMSS: 00 to 23 for HH (hours) and 00 to 59 for MM (minutes) and 00 to 59 for SS.SSSSSSS (seconds with exactly seven decimal places). No other characters are allowed. An empty literal abap.utcl'' is not allowed.

Hint

60 cannot be specified in a time, either as minutes or as seconds. In particular, this means that [leap seconds](javascript:call_link\('abenleap_second_glosry.htm'\) "Glossary Entry") cannot be specified.

Example

Use of typed literals as operands in a CDS view entity.

@EndUserText.label: 'CDS view entity, typed literals'
define view entity DEMO\_CDS\_DATE\_AND\_TIME\_TYP\_LIT
  as select from demo\_ddic\_types
{
  key id,
      utcl\_add\_seconds(abap.utcl'2020-01-02 23:59:59,1234567',
                              200)             as add\_seconds,
      datn\_add\_months(abap.datn'20200104', 13) as add\_months,
      case when datn < abap.datn'20200101'
      then abap.char'<'
      else abap.char'>'
      end                                      as caseExpressionField
}
where
  utcl <> abap.utcl'2018-02-21 23:59:59.1234567'

Typed Currency and Quantity Literals   

The following table describes the typed currency and quantity literals:

Syntax

Name

Possible Characters

abap.curr'...'

[Currency field literal](javascript:call_link\('abencurrency_literal_glosry.htm'\) "Glossary Entry")

Uninterrupted string of digits with an optional sign + or - as a prefix. Cannot contain more than one decimal point (.). At least one and no more than 31 digits can be specified. Exactly two decimal places must be specified.

abap.cuky'...'

[Currency key literal](javascript:call_link\('abencurrency_key_literal_glosry.htm'\) "Glossary Entry")

String of any alphanumeric characters with a maximum of 5 characters. An empty literal abap.cuky'' is allowed and denotes five blanks.

abap.quan'...'

[Quantity field literal](javascript:call_link\('abenquantity_field_literal_glosry.htm'\) "Glossary Entry")

Uninterrupted string of digits with an optional sign + or - as a prefix. Cannot contain more than one decimal point (.). At least one and no more than 31 digits can be specified. The maximum number of decimal places is 14.

abap.unit'...'

[Unit key literal](javascript:call_link\('abenunit_key_literal_glosry.htm'\) "Glossary Entry")

String of any alphanumeric characters with a maximum of 3 characters. An empty literal UNIT\`\` is allowed and denotes two blanks.

If a currency or quantity field is specified in the SELECT list using a CDS typed literal, a reference to a currency key or unit of reference key is mandatory. This is specified with the following annotations:

-   Currency key: Semantics.amount.currencyCode
-   Unit key: Semantics.quantity.unitOfMeasure

Example

CDS view entity with currency and quantity literals.

@EndUserText.label: 'CDS view entity, typed literals'
define view entity DEMO\_CDS\_CURR\_AND\_QUAN\_TYP\_LIT
  as select from demo\_ddic\_types
{
  key id,
      cuky,
      unit2,
      
      @Semantics.amount.currencyCode: 'cuky'
      abap.curr'123.45' as currencyField,
      
      @Semantics.quantity.unitOfMeasure: 'unit2'
      abap.quan'-200.12345' as quantityField
}