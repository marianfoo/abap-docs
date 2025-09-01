---
title: "Syntax"
description: |
  ... AVG( DISTINCT col(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_columns.htm) AS dtype ) ... Effect Aggregate function AVG(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm) in ABAP SQL with a data type dtype specified. The data
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_avg_as.htm"
abapFile: "abapselect_avg_as.htm"
keywords: ["select", "do", "if", "data", "types", "abapselect", "avg"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_agg](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm) →  [sql\_agg - agg\_func](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm) → 

sql\_agg - AVG, AS

Syntax

... AVG( *\[*DISTINCT*\]* [col](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_columns.htm) AS dtype ) ...

Effect

Aggregate function [AVG](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_agg_func.htm) in ABAP SQL with a data type dtype specified. The data type determines the result type in which the average value is returned. The data type of col must be numeric and have one of the types [INT1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), [INT8](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), [DEC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), or [FLTP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). The addition AS cannot yet be used for all types for [decimal floating point numbers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_decimal_floating_point.htm).

The data type dtype can have the built-in numeric type [DEC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), [DECFLOAT16](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), [DECFLOAT34](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), or [FLTP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). The data type FLTP, however, can only be specified for operands of type FLTP. The data type dtype can be specified as follows:

-   DEC( len,decimals )

-   CURR( len,decimals )

-   QUAN( len,decimals )

-   D16N for DECFLOAT16

-   D34N for DECFLOAT34

-   FLTP

Length and decimal places must be specified with len and decimals. [Literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_literals.htm) or [host constants](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_host_variables.htm) of the [ABAP type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types_complete.htm) b, s, i, or int8 can be specified for len and decimals. The value range of the data type dtype must cover the value range of the operand type:

-   If col is an integer type, a type dtype of type DEC, CURR, QUAN must have at least as many integer digits as is required by the value range of the respective integer type, that is, 3 for INT1, 5 for INT2, 10 for INT4, and 19 for INT8. There is no restriction on the number of decimal places.

-   If col has type DEC, CURR, QUAN, a type dtype of type DEC, CURR, QUAN must have at least as many integer digits and decimal places.

-   If col has type FLTP, this type must also be specified for dtype.

The data types DECFLOAT16 and DECFLOAT34 can be used for all allowed data types of col except FLTP. If the average value cannot be represented exactly in the data type dtype, the result is rounded commercially.

Hints

-   The addition AS to AVG bridges the gap for average values where the default result type FLTP cannot be cast to other numeric data types with [CAST](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_cast.htm).

-   Since average values usually have decimal places, integer types are not supported for dtype. If necessary, the type DEC can be used without decimal places.

-   An aggregate expression AVG cannot be applied to operands with the data type INT8 without using the addition AS. The addition AS can also be used to form average values for columns with data type INT8. However, for the types [DF16\_...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), [DF34\_...](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm), AVG is only possible without the addition AS.

-   The actual calculation of the average value depending on the involved data types is platform dependent. This can lead to platform-dependent underflows, overflows and corresponding exceptions during the calculation. To prevent exceptions, the total of the values for which the average value is calculated should be within the value range of dtype.

-   If FLTP is specified explicitly for operands of type FLTP, this ensures that the result of AVG actually has this type at each operand position, which cannot be guaranteed otherwise.

-   If used, D16N or D34N force the [strict mode of the syntax check from Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_754.htm).

Example

Application of the aggregate function AVG to a column of the DDIC database table DEMO\_EXPRESSIONS. The program DEMO\_SQL\_AVG executes this access to the table and represents the result.

SELECT
  FROM demo\_expressions
  FIELDS
    AVG(          num1                ) AS avg\_no\_type,
    AVG( DISTINCT num1                ) AS avg\_no\_type\_distinct,
    AVG(          num1 AS DEC( 10,0 ) ) AS avg\_dec0,
    AVG( DISTINCT num1 AS DEC( 10,0 ) ) AS avg\_dec0\_distinct,
    AVG(          num1 AS DEC( 14,4 ) ) AS avg\_dec4,
    AVG( DISTINCT num1 AS DEC( 14,4 ) ) AS avg\_dec4\_distinct
  INTO @DATA(result).