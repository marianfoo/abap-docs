  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, INTO, APPENDING](javascript:call_link\('abapinto_clause.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20Assignment%20Rules%2C%20ABENSELECT_INTO_CONVERSION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, Assignment Rules

The following assignment rules apply to assignments of the result fields of the result set of a standalone [SELECT](javascript:call_link\('abapselect.htm'\)), [WITH](javascript:call_link\('abapwith.htm'\)), or [FETCH](javascript:call_link\('abapfetch.htm'\)) statement to the target fields defined in the [INTO](javascript:call_link\('abapinto_clause.htm'\)) clause.

-   [Prerequisites](#abenselect-into-conversion-1-------rules---@ITOC@@ABENSELECT_INTO_CONVERSION_2)

Prerequisites   

The following table shows the prerequisites for assigning individual columns of the result set to individual data objects, that is, for all forms of the SELECT statement, except when all columns in a work area wa are read with \* and CORRESPONDING FIELDS is not specified at the same time. The table shows which data types of the result set can be assigned to which ABAP data types.

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

(b, s,) i, int8, p, f

FLTP

f

DATN, DATS

d

TIMN, TIMS

t

UTCLONG

utclong

Hints

-   Fields of the types STRING and RAWSTRING ([LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry")) from the result set can be assigned to reference variables for [LOB handles](javascript:call_link\('abenselect_into_lob_handles.htm'\)) as well as to strings. The static type of these reference variables must be one of the system classes or one of the system interfaces that support [streaming and locators](javascript:call_link\('abenstreams_locators.htm'\)) for ABAP SQL.
-   Fields cannot be assigned to [enumerated variables](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry"), even if their [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") would be an allowed ABAP type.

Rules   

The assignments are made according to the following rules:

-   If the target field is of data type c or x, the content of the result field is inserted left-aligned into the target field. If the target field is too short, the result is truncated to the right. If the target field is too long, spaces or hexadecimal 0 are filled to the right.
-   If the target field is of data type string or xstring, the content of the result field is inserted left-aligned into the target field. In result fields of the type STRING, the trailing blanks are transferred. The target field has the same length as the result field.
-   If the target field is of data type n, the content of the result field is inserted right-aligned into the target field. If necessary, it is padded with zeros on the left. If the target field is too short, the result is truncated to the left.
-   If the target field has a [numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry"), the value of the result field is converted to this data type and the [value range](javascript:call_link\('abenvalue_range_glosry.htm'\) "Glossary Entry") of the target field must be large enough. Here, any surplus decimal places in result fields of the type CURR, DEC, or QUAN (numbers in the [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") format) are cut off.
-   If the result field contains a [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), a type-dependent initial value is assigned to the target field.

For assignments of LOBs to reference variables, see [LOB Handles](javascript:call_link\('abenselect_into_lob_handles.htm'\)).

Example

The variable result1 is given the value 1. Any surplus decimal places are cut off. The built-in SQL function [ROUND](javascript:call_link\('abensql_arith_func.htm'\)) can be used to perform roundings like in [conversions](javascript:call_link\('abenconversion_rules.htm'\)) in ABAP. result2 is given the value 2.

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