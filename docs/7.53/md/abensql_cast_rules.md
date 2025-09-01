  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_cast](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cast.htm) → 

sql\_exp - sql\_cast, Conversion Rules

The following sections describe the conversion rules for [cast expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cast.htm) in ABAP SQL.

-   [Numeric Source Type](#@@ITOC@@ABENSQL_CAST_RULES_1)

-   [Source type INT1, INT2, INT4, INT8](#@@ITOC@@ABENSQL_CAST_RULES_2)

-   [Source type DEC, CURR, QUAN](#@@ITOC@@ABENSQL_CAST_RULES_3)

-   [Character-Like Source Type](#@@ITOC@@ABENSQL_CAST_RULES_4)

-   [Source type CHAR](#@@ITOC@@ABENSQL_CAST_RULES_5)

-   [Source type NUMC](#@@ITOC@@ABENSQL_CAST_RULES_6)

-   [Source types DATS, TIMS, and CLNT](#@@ITOC@@ABENSQL_CAST_RULES_7)

-   [Source types LANG, UNIT, and CUKY](#@@ITOC@@ABENSQL_CAST_RULES_8)

Data types that cannot be converted to each other are not specified. In these cases, casts are either not possible or only casts between type-friendly operands. If the source type and the target type are technically identical, the content is transferred without being converted.

Numeric Source Type

Source type INT1, INT2, INT4, INT8

-   Numeric target type

The possible target types are INT1, INT2, INT4, INT8, DEC, CURR, QUAN, and FLTP.

-   The source value is converted to the internal representation for the target type.

-   If the value range is exceeded, an exception is raised that can be caught using CX\_SY\_OPEN\_SQL\_DB.

-   Character-like target type

The potential target type is CHAR.

-   The number value is converted to a character string in [mathematical notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmathematical_notation_glosry.htm "Glossary Entry") without decimal separators and is left-aligned.

-   The length of the target type must be enough for all potential values including the sign. The minimum lengths for INT1, INT2, INT4, and INT8 are 3, 6, 11, and 20.

Source type DEC, CURR, QUAN

-   Numeric target type

The possible target types are DEC, CURR, QUAN, and FLTP.

-   In the case of the target types DEC, CURR, and QUAN, an exception is raised if the value range in the integer digits is exceeded. This exception can be caught in ABAP using CX\_SY\_OPEN\_SQL\_DB. Any surplus decimal places are cut off without rounding.

-   In the case of the target type FLTP, values that cannot be represented as [binary floating point numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbinfloat_glosry.htm "Glossary Entry") are converted to the next adjacent number.

-   Character-like target type

The potential target type is CHAR.

-   The number value is converted to a character string in [mathematical notation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmathematical_notation_glosry.htm "Glossary Entry") and is left-aligned.

-   The length of the target type must be enough for all potential values in the source type including the sign and decimal separator.

Note

When the source type DEC is converted to a character-like target type, the database specifies whether non-relevant zeros are displayed before and after the decimal separator.

Character-Like Source Type

Source type CHAR

-   Character-like target type

The possible target types are CHAR, NUMC, CLNT, LANG, DATS, TIMS, UNIT, and CUKY.

-   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, it is truncated on the right and if the target field is too long, it is padded on the right with blanks.

-   There is no special handling for the special target type for numeric text, NUMC, and for the date/time types DATS and TIMS. It is advisable to only convert valid values.

Source type NUMC

-   Numeric target type

The possible target types are INT1, INT2, INT4, INT8, DEC, CURR, QUAN, and FLTP.

-   The validity of the content of the source field is not checked, which means that there can be decimal places.

-   The source field must contain a character string that can be interpreted as a number. If not, an exception is raised that can be caught using CX\_SY\_OPEN\_SQL\_DB.

-   If the value range in the decimal places is exceeded, an exception is raised that can be caught using CX\_SY\_OPEN\_SQL\_DB.

-   In the case of the target types, INT1, INT2, INT4, and INT8, any decimal places in the source field raise an exception. In the case of the target types DEC, CURR, and QUAN, surplus decimal places are cut off without rounding.

-   In the case of the target type FLTP, values that cannot be represented as [binary floating point numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbinfloat_glosry.htm "Glossary Entry") are converted to the next adjacent number.

-   Character-like target type

The possible target types are CHAR, NUMC, CLNT, DATS, and TIMS.

-   The validity of the source field is not checked.

-   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, it is truncated on the right and if the target field is too long, it is padded on the right with blanks.

-   There is no special handling for the special target type for numeric text, NUMC, and for the date/time types DATS and TIMS. It is advisable to only convert valid values.

Source types DATS, TIMS, and CLNT

-   Character-like target types

The possible target types are CHAR and NUMC.

-   The validity of the source field is not checked.

-   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, it is truncated on the right and if the target field is too long, it is padded on the right with blanks.

-   There is no special handling for the special target type for numeric text, NUMC. It is advisable to only convert valid values.

Source types LANG, UNIT, and CUKY

-   Character-like target types

The potential target type is CHAR.

-   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, it is truncated on the right and if the target field is too long, it is padded on the right with blanks.