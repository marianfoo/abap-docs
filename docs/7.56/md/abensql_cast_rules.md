  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_cast](javascript:call_link\('abensql_cast.htm'\)) → 

sql\_exp - sql\_cast, Conversion Rules

The following sections describe the conversion rules for [cast expressions](javascript:call_link\('abensql_cast.htm'\)) in ABAP SQL.

-   [Numeric Source Type](#@@ITOC@@ABENSQL_CAST_RULES_1)
    -   [Source Type INT1, INT2, INT4, INT8, DEC](#@@ITOC@@ABENSQL_CAST_RULES_2)
    -   [Source Type DF16\_DEC, DF34\_DEC](#@@ITOC@@ABENSQL_CAST_RULES_3)
-   [Character-Like Source Type](#@@ITOC@@ABENSQL_CAST_RULES_4)
    -   [Source Types CHAR, SSTRING](#@@ITOC@@ABENSQL_CAST_RULES_5)
    -   [Source Type NUMC](#@@ITOC@@ABENSQL_CAST_RULES_6)
    -   [Source Types DATS, TIMS, and CLNT](#@@ITOC@@ABENSQL_CAST_RULES_7)
    -   [Source Types LANG, UNIT, and CUKY](#@@ITOC@@ABENSQL_CAST_RULES_8)

Data types that cannot be converted to each other are not listed. In these cases, casts are either not possible or only casts between type-compliant operands. If the source type and the target type are technically identical, the content is transferred without being converted.

Numeric Source Type

Source Type INT1, INT2, INT4, INT8, DEC, CURR, QUAN, DECFLOAT16, DECFLOAT34

-   Numeric target type
    
    The possible target types are INT1, INT2, INT4, INT8, DEC, CURR, QUAN, DECFLOAT16, DECFLOAT34, and FLTP.
    
    -   The source value is converted to the internal representation for the target type.
    -   If the value range is exceeded, an exception is raised that can be caught using CX\_SY\_OPEN\_SQL\_DB. In the case of the target types DEC, CURR, and QUAN, this applies to the integer digits and any surplus decimal places are cut off without rounding.
    -   In the case of the target type FLTP, values that cannot be represented as [binary floating point numbers](javascript:call_link\('abenbinfloat_glosry.htm'\) "Glossary Entry") are converted to the next adjacent number.
-   Character-like target type
    
    The possible target types are CHAR and SSTRING.
    
    -   The number value is converted to a character string in [mathematical notation](javascript:call_link\('abenmathematical_notation_glosry.htm'\) "Glossary Entry") without decimal separators and is left-aligned.
    -   The length of the target type must be sufficient for all potential values including the sign.
    -   In the case of the source types DECFLOAT16 and DECFLOAT34, [scientific notation](javascript:call_link\('abenscientific_notation_glosry.htm'\) "Glossary Entry") is produced from a specific value.

Hint

When the source type DEC is converted to a character-like target type, it is database-dependent whether non-relevant zeros are included in front of and after the decimal separator.

Source Type DF16\_DEC, DF34\_DEC

-   Numeric target type
    
    The possible target types are INT1, INT2, INT4, INT8, DECFLOAT16, and DECFLOAT34.
    
    -   The source value is converted to the internal representation for the target type.
    -   If the value range is exceeded, an exception is raised that can be caught using CX\_SY\_OPEN\_SQL\_DB.

Character-Like Source Type

Source Types CHAR, SSTRING

-   Character-like target type
    
    The possible target types are CHAR, SSTRING, NUMC, DATS, TIMS, CLNT, LANG, UNIT, and CUKY.
    
    -   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, it is truncated on the right. If the target field is too long, it is padded on the right with blanks.
    -   There is no special handling for the special target type for numeric text, NUMC, and for the date/time types DATS and TIMS. It is advisable to only convert valid values.

Source Type NUMC

-   Numeric target type
    
    The possible target types are INT1, INT2, INT4, INT8, DEC, CURR, QUAN, DECFLOAT16, DECFLOAT34, and FLTP.
    
    -   The validity of the content of the source field is not checked, which means that there can be decimal places.
    -   The source field must contain a character string that can be interpreted as a number, otherwise an exception is raised that can be caught using CX\_SY\_OPEN\_SQL\_DB.
    -   If the value range in the integer places is exceeded, an exception is raised that can be caught using CX\_SY\_OPEN\_SQL\_DB.
    -   In the case of the target types DECFLOAT16 and DECFLOAT34, rounding takes place to the last significant place.
    -   In the case of the target types, INT1, INT2, and INT4, any decimal places in the source field raise an exception. In the case of the target types INT8, DEC, CURR, and QUAN, surplus decimal places are cut off without rounding.
    -   In the case of the target type FLTP, values that cannot be represented as [binary floating point numbers](javascript:call_link\('abenbinfloat_glosry.htm'\) "Glossary Entry") are converted to the next adjacent number.
-   Character-like target type
    
    The possible target types are CHAR, SSTRING, NUMC, CLNT, DATS, and TIMS.
    
    -   The validity of the content of the source field is not checked.
    -   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, it is truncated on the right. If the target field is too long, it is padded on the right with blanks.
    -   There is no special handling for the special target type for numeric text, NUMC, and for the date/time types DATS and TIMS. It is advisable to only convert valid values.

Source Types DATS, TIMS, and CLNT

-   Character-like target types
    
    The possible target types are CHAR, SSTRING, and NUMC.
    
    -   The validity of the content of the source field is not checked.
    -   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, it is truncated on the right. If the target field is too long, it is padded on the right with blanks.
    -   There is no special handling for the special target type for numeric text, NUMC. It is advisable to only convert valid values.
-   Date/time fields as target type (not for CLNT)
    
    The possible target type for DATS is DATN and the possible target for TIMS is TIMN.
    
    -   The value of the character-like date field or time field is converted to the internal value of the date type or time type.
    -   The character-like date field or time field must contain a valid date or a valid time or the initial value. If not, an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised.

Source Types LANG, UNIT, and CUKY

-   Character-like target types
    
    The possible target types are CHAR and SSTRING.
    
    -   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, it is truncated on the right. If the target field is too long, it is padded on the right with blanks.