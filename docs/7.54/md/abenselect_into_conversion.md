---
title: "SELECT - Assignment Rules"
description: |
  The following assignment rules apply to assignments of the result fields of the results set of a standalone SELECT(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm), WITH(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm), or FETCH(https://help.sa
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_into_conversion.htm"
abapFile: "abenselect_into_conversion.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "class", "data", "types", "abenselect", "into", "conversion"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_clauses.htm) →  [SELECT - INTO, APPENDING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) → 

SELECT - Assignment Rules

The following assignment rules apply to assignments of the result fields of the results set of a standalone [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm), [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm), or [FETCH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfetch.htm) statement to the target fields defined in the [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) clause.

-   [Prerequisites](#abenselect-into-conversion-1--------rules---@ITOC@@ABENSELECT_INTO_CONVERSION_2)

Prerequisites

The following table shows the prerequisites for assigning individual columns of the results set to individual data objects - that is, for all forms of the SELECT statement, except when all columns in a work area wa are read with \* and CORRESPONDING FIELDS is not specified at the same time. The table shows which data types of the result set can be assigned to which ABAP data types.

Data Type of Column in Result Set

ABAP Data Type

CHAR, CLNT, CUKY, LANG, SSTRING, STRING, UNIT

c, string

ACCP, NUMC

c, n

LCHR

c

RAW, RAWSTRING, GEOM\_EWKB

x, xstring

LRAW

x

DF16\_DEC

decfloat16, decfloat34

DECFLOAT16, DF16\_RAW, DF16\_SCL (obsolete)

decfloat16

DECFLOAT34, DF34\_DEC, DF34\_RAW, DF34\_SCL (obsolete)

decfloat34

CURR, DEC, INT1, INT2, INT4, INT8, PREC, QUAN

(b, s), i, int8, p, f

FLTP

f

DATN, DATS

d

TIMN, TIMS

t

UTCLONG

utclong

Notes

-   Fields of the types STRING and RAWSTRING ([LOBs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlob_glosry.htm "Glossary Entry")) from the results set can be assigned to reference variables for [LOB handles](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_into_lob_handles.htm) as well as to strings. The static type of these reference variables must be one of the system classes or one of the system interfaces that support [streaming and locators](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstreams_locators.htm) for ABAP SQL.

-   Fields cannot be assigned to [enumerated variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_variable_glosry.htm "Glossary Entry"), even if their [base type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbase_type_glosry.htm "Glossary Entry") is an allowed ABAP type.

Rules

The following rules apply to the assignment procedure:

-   If the target field is of data type c or x, the content of the result field is inserted left-justified into the target field. If the target field is too short, the result is truncated to the right. If the target field is too long, spaces or hexadecimal 0 are filled to the right.

-   If the target field is of data type string or xstring, the content of the result field is inserted left-justified into the target field. In result fields of the type STRING, the trailing blanks are added. The target field has the same length as the result field.

-   If the target field is of data type n, the content of the result field is inserted right-justified into the target field. If necessary, it is padded with zeros on the left. If the target field is too short, the result is truncated to the left.

-   If the target field has a [numeric data type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumeric_data_type_glosry.htm "Glossary Entry"), the value of the result field is converted to this data type and the [value range](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_range_glosry.htm "Glossary Entry") of the target field must be large enough. Here, any surplus decimal places in result fields of the type CURR, DEC, or QUAN (numbers in the [BCD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbcd_glosry.htm "Glossary Entry") format) are cut off.

-   If the result field contains a [null value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry"), a type-dependent initial value is assigned to the target field.

For assignments of LOBs to reference variables, see [LOB Handles](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_into_lob_handles.htm).

Example

The variable result1 is given the value 1. Any surplus decimal places are cut off. The built-in SQL function [ROUND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_arith_func.htm) can be used to perform roundings like in [conversions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_rules.htm) in ABAP. result2 is given the value 2.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id   = 'X'
                                         dec2 = '1.9999999999' ) ).
DATA result1 TYPE i.
SELECT SINGLE
       FROM demo\_expressions
       FIELDS dec2
       WHERE id = 'X'
       INTO (@result1).
DATA result2 TYPE i.
SELECT SINGLE
       FROM demo\_expressions
       FIELDS ROUND( dec2,0 ) AS dec2
       WHERE id = 'X'
       INTO (@result2).