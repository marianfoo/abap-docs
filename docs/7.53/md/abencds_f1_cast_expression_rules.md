  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cast\_expr](javascript:call_link\('abencds_f1_cast_expression.htm'\)) → 

ABAP CDS - cast\_expr, Conversion Rules

The following sections describe the conversion rules for [cast expressions](javascript:call_link\('abencds_f1_cast_expression.htm'\)) in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry").

-   [Numeric source type](#@@ITOC@@ABENCDS_F1_CAST_EXPRESSION_RULES_1)

-   [Source type INT1, INT2, INT4, INT8](#@@ITOC@@ABENCDS_F1_CAST_EXPRESSION_RULES_2)

-   [Source type DEC, CURR, QUAN](#@@ITOC@@ABENCDS_F1_CAST_EXPRESSION_RULES_3)

-   [Character-like source type](#@@ITOC@@ABENCDS_F1_CAST_EXPRESSION_RULES_4)

-   [Source types CHAR and SSTRING](#@@ITOC@@ABENCDS_F1_CAST_EXPRESSION_RULES_5)

-   [Source type NUMC](#@@ITOC@@ABENCDS_F1_CAST_EXPRESSION_RULES_6)

-   [Source types DATS and TIMS](#@@ITOC@@ABENCDS_F1_CAST_EXPRESSION_RULES_7)

-   [Source types CLNT, LANG, UNIT, and CUKY](#@@ITOC@@ABENCDS_F1_CAST_EXPRESSION_RULES_8)

Data types that cannot be converted to each other are not specified. In these cases, casts are either not possible or only casts between type-friendly operands. If the source type and the target type are technically identical, the content is transferred without being converted.

Numeric source type

Source type INT1, INT2, INT4, INT8

-   Numeric target type

The possible target types are INT1, INT2, INT4, INT8, DEC, CURR, QUAN, and FLTP.

-   The source value is converted to the internal representation for the target type.

-   If the value range is exceeded, an exception is raised that can be caught in ABAP using CX\_SY\_OPEN\_SQL\_DB.

-   In the case of the target types DEC, CURR, and QUAN, a syntax check warning is produced if a static check knows statically that an exception can be raised.

-   Character-like target type

The possible target types are CHAR, SSTRING, and CLNT (in the case of INT1).

-   The number value is converted to a character string in [mathematical notation](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") without decimal separators and is left-aligned.

-   The length of the target type must be enough for all potential values including the sign. The minimum lengths for INT1, INT2, INT4, and INT8 are 3, 6, 11, and 20.

Source type DEC, CURR, QUAN

-   Numeric target type

The possible target types are DEC, CURR, QUAN, and FLTP.

-   The source value is converted to the internal representation for the target type.

-   In the case of the target types DEC, CURR, and QUAN, an exception is raised if the value range in the integer digits is exceeded. This exception can be caught in ABAP using CX\_SY\_OPEN\_SQL\_DB. Any surplus decimal places are cut off without rounding.

-   In the case of the target type FLTP, values that cannot be represented as [binary floating point numbers](javascript:call_link\('abenbinfloat_glosry.htm'\) "Glossary Entry") are converted to the next adjacent number.

-   Character-like target type

The possible target types are CHAR and SSTRING.

-   The number value is converted to a character string in [mathematical notation](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") and is left-aligned.

-   The length of the target type must be enough for all potential values in the source type including the sign and decimal separator.

Note

When the source type DEC is converted to a character-like target type, the database specifies whether non-relevant zeros are displayed before and after the decimal separator.

Character-like source type

Source types CHAR and SSTRING

-   Character-like target type

The possible target types are CHAR, SSTRING, NUMC, CLNT, LANG, DATS, TIMS, UNIT, and CUKY.

-   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, the string is truncated on the right and a syntax check warning occurs. If the target field is too long, it is padded on the right with blanks.

-   There is no special handling for the special target type for numeric text, NUMC, and for the date/time types DATS and TIMS. It is advisable to only convert valid values. In the case of the target type NUMC, the built-in function [LPAD](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)) can be used to create leading zeroes.

Source type NUMC

-   Numeric target type

The possible target types are INT1, INT2, INT4, INT8, DEC, CURR, QUAN, and FLTP.

-   The validity of the content of the source field is not checked, which means that there can be decimal places.

-   The source field must contain a character string that can be interpreted as a number. If not, an exception is raised that can be caught in ABAP using CX\_SY\_OPEN\_SQL\_DB.

-   In the case of the target types INT1, INT2, INT4, and INT8, the length of the source type cannot be too great for the target type. The source value cannot contain any decimal places.

-   In the case of the target types DEC, CURR, and QUAN, an exception is raised if the value range in the integer digits is exceeded. This exception can be caught in ABAP using CX\_SY\_OPEN\_SQL\_DB. A syntax check warning occurs it a static check knows that an exception can be raised. Any surplus decimal places are cut off without rounding.

-   In the case of the target type FLTP, values that cannot be represented as [binary floating point numbers](javascript:call_link\('abenbinfloat_glosry.htm'\) "Glossary Entry") are converted to the next adjacent number.

-   Character-like target type

The possible target types are CHAR, SSTRING, NUMC, CLNT, DATS, and TIMS.

-   The validity of the source field is not checked.

-   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, the string is truncated on the right and a syntax check warning occurs. If the target field is too long, it is padded on the right with blanks.

-   The lengths of the source type and target type must match for the special target type for numeric text, NUMC, and for the date/time types DATS and TIMS. No other special handling takes place. It is advisable to only convert valid values. In the case of the target type NUMC, the built-in function [LPAD](javascript:call_link\('abencds_f1_sql_functions_character.htm'\)) can be used to create leading zeroes.

Source types DATS and TIMS

-   Character-like target type

The possible target types are CHAR and SSTRING.

-   The validity of the source field is not checked.

-   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, the string is truncated on the right and a syntax check warning occurs. If the target field is too long, it is padded on the right with blanks.

Source types CLNT, LANG, UNIT, and CUKY

-   Character-like target type

The possible target types are CHAR and SSTRING, which need to be specified using data elements.

-   The validity of the source field is not checked.

-   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, the string is truncated on the right and a syntax check warning occurs. If the target field is too long, it is padded on the right with blanks.