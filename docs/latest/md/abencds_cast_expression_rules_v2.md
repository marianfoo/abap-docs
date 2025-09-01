---
title: "Numeric Source Type"
description: |
  Source Types INT1, INT2, INT4, INT8, DEC, CURR, QUAN, DECFLOAT16, and DECFLOAT34 -   Numeric target type -   Possible target types for all numeric source types: INT1, INT2, INT4, INT8, DEC, QUAN, DECFLOAT16, and DECFLOAT34. -   Possible target types for all numeric source types except DECFLOAT16 and
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_rules_v2.htm"
abapFile: "abencds_cast_expression_rules_v2.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "abencds", "cast", "expression", "rules"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_expressions_v2.htm) →  [CDS DDL - CDS View Entity, cast\_expr](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20cast_expr%2C%20Conversion%20Rules%2C%20ABENCDS_CAST_EXPRESSION_RULES_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion%20for%20improvement:)

CDS DDL - CDS View Entity, cast\_expr, Conversion Rules

The following sections describe the conversion rules for [cast expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v2.htm) in [CDS DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry").

-   [Numeric Source Type](#abencds-cast-expression-rules-v2-1-----------source-types-int1--int2--int4--int8--dec---@ITOC@@ABENCDS_CAST_EXPRESSION_RULES_V2_2)
-   [Character-Like Source Type](#abencds-cast-expression-rules-v2-3-----------source-types-char-and-sstring---@ITOC@@ABENCDS_CAST_EXPRESSION_RULES_V2_4)
    -   [Source Type NUMC](#abencds-cast-expression-rules-v2-5-----------source-types-dats-and-tims---@ITOC@@ABENCDS_CAST_EXPRESSION_RULES_V2_6)
    -   [Source Types CLNT, LANG, UNIT, and CUKY](#@@ITOC@@ABENCDS_CAST_EXPRESSION_RULES_V2_7)

Data types that cannot be converted to each other are not mentioned here. In these cases, casts are either not possible or casting can only be done between operands of the same type. If the source type and the target type are technically identical, the content is transferred without being converted.

Numeric Source Type   

Source Types INT1, INT2, INT4, INT8, DEC, CURR, QUAN, DECFLOAT16, and DECFLOAT34   

-   Numeric target type
    -   Possible target types for all numeric source types: INT1, INT2, INT4, INT8, DEC, QUAN, DECFLOAT16, and DECFLOAT34.
    -   Possible target types for all numeric source types except DECFLOAT16 and DECFLOAT34: CURR and FLTP.
    -   The source value is converted to the internal representation of the target type.
    -   If the value range is exceeded, an exception is raised that can be caught in ABAP using CX\_SY\_OPEN\_SQL\_DB. In the case of the target types DEC, CURR, and QUAN, this applies to the integer digits and any surplus decimal places are cut off without rounding.
    -   In the case of the target types DEC, CURR, and QUAN, a syntax check warning is produced if it is known statically that an exception might be raised.
    -   In the case of the target type FLTP, values that cannot be represented as [binary floating point numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbinfloat_glosry.htm "Glossary Entry") are converted to the next adjacent number.
-   Character-like target type (not for DECFLOAT16 and DECFLOAT34)
    -   The possible target types are CHAR, SSTRING, and CLNT (only for INT1).
    -   The number value is converted to a character string in [mathematical notation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmathematical_notation_glosry.htm "Glossary Entry") and is left-aligned.
    -   The length of the target type must be enough for all potential values in the source type including the sign and decimal separator.

Hint

When the source type DEC is converted to a character-like target type, it depends on the database whether non-relevant zeros are included before and after the decimal separator.

Character-Like Source Type   

Source Types CHAR and SSTRING   

-   Character-like target type
    -   The possible target types are CHAR, SSTRING, NUMC, CLNT, LANG, DATS, TIMS, UNIT, CUKY, and ACCP. The target type ACCP must be specified using a data element. The data element must have the same length as the data type ACCP.
    -   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, the string is truncated on the right and a syntax check warning occurs. If the target field is too long, it is padded on the right with blanks.
    -   There is no special handling for the target type NUMC and for the date/time types DATS and TIMS. It is advisable to only convert valid values. In the case of the target type NUMC, the built-in function [LPAD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v2.htm) can be used to create leading zeros.

Source Type NUMC   

-   Numeric target type
    -   The possible target types are INT1, INT2, INT4, INT8, DEC, CURR, QUAN, DECFLOAT16, DECFLOAT34, and FLTP.
    -   The validity of the content of the source field is not checked, which means that there can be decimal places.
    -   The source field must contain a character string that can be interpreted as a number. If not, an exception is raised that can be caught in ABAP using CX\_SY\_OPEN\_SQL\_DB.
    -   If the value range in the integer digits is exceeded, an exception is raised that can be caught in ABAP using CX\_SY\_OPEN\_SQL\_DB.
    -   In the case of the target types DECFLOAT16 and DECFLOAT34, rounding takes place to the last significant place.
    -   In the case of the target types INT1, INT2, and INT4, any decimal places in the source field raise an exception. In the case of the target types INT8, DEC, CURR, and QUAN, surplus decimal places are cut off without rounding.
    -   In the case of the target type FLTP, values that cannot be represented as [binary floating point numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbinfloat_glosry.htm "Glossary Entry") are converted to the next adjacent number.
-   Character-like target type
    -   The possible target types are CHAR, SSTRING, NUMC, CLNT, ACCP, DATS, and TIMS. The target type ACCP must be specified using a data element. The data element must have the same length as the data type ACCP.
    -   The validity of the source field is not checked.
    -   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, the string is truncated on the right and a syntax check warning occurs. If the target field is too long, it is padded on the right with blanks.
    -   The lengths of the source type and target type must match for the special target type for numeric text NUMC and for the date/time types DATS and TIMS. No other special handling takes place. It is advisable to only convert valid values. In the case of the target type NUMC, the built-in function [LPAD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_sql_functions_character_v2.htm) can be used to create leading zeros.

Source Types DATS and TIMS   

-   Character-like target type
    -   The possible target types are CHAR and SSTRING.
    -   The validity of the source field is not checked.
    -   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, the string is truncated on the right and a syntax check warning occurs. If the target field is too long, it is padded on the right with blanks.
    -   The value of the character-like date field or time field is converted to the internal value of the date type or time type.
    -   The character-like date field or time field must contain a valid date or a valid time or the initial value. If not, an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised.

Source Types CLNT, LANG, UNIT, and CUKY   

-   Character-like target type
    -   The possible target types are CHAR and SSTRING, which need to be specified using simple types or data elements.
    -   The validity of the source field is not checked.
    -   The character string is written to the target field as a left-aligned string including leading blanks. If the target type is too short, the string is truncated on the right and a syntax check warning occurs. If the target field is too long, it is padded on the right with blanks.