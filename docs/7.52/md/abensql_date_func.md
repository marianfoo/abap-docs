  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm) →  [Open SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_builtin_functions.htm) →  [Open SQL - Special Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_special_functions.htm) →  [Open SQL - Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_date_time_functions.htm) → 

sql\_exp Date Functions

Syntax

... DATS\_IS\_VALID( date )
  *|* DATS\_DAYS\_BETWEEN( date1,date2 )
  *|* DATS\_ADD\_DAYS( date,days )
  *|* DATS\_ADD\_MONTHS( date,months ) ...

Variants:

[1\. ... DATS\_IS\_VALID( date )](#!ABAP_VARIANT_1@1@)
[2\. ... DATS\_DAYS\_BETWEEN( date1,date2 )](#!ABAP_VARIANT_2@2@)
[3\. ... DATS\_ADD\_DAYS( date,days )](#!ABAP_VARIANT_3@3@)
[4\. ... DATS\_ADD\_MONTHS( date,months )](#!ABAP_VARIANT_4@4@)

Effect

These SQL functions perform operations with arguments of the predefined data type [DATS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm). The arguments of the functions are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and before the closing parenthesis. [SQL expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm), in particular individual columns, literals, SQL functions, host variables or host expressions or host expressions can be specified as actual parameters. If an actual parameter contains the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry"), every function except DATS\_IS\_VALID returns a null value.

Example

Applying the date functions to date columns of the database table DEMO\_EXPRESSIONS. The program DEMO\_SQL\_DATE\_FUNCTIONS executes this access to the table and represents the result.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @(
  VALUE #( id = 'X' dats1 = sy-datum dats2 = sy-datum + 100 ) ).
SELECT SINGLE dats1, dats2,
              dats\_is\_valid( dats1 ) AS valid,
              dats\_days\_between( dats1, dats2 ) AS days\_between,
              dats\_add\_days( dats1,100 ) AS add\_days,
              dats\_add\_months( dats1,-1 ) AS add\_month
       FROM demo\_expressions
       INTO @DATA(result).

Variant 1

... DATS\_IS\_VALID( date )

Effect

The function DATS\_IS\_VALID determines whether date (if specified) contains a valid date in the format YYYYMMDD. The actual parameter must have the predefined data type [DATS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm). The result has the data type [INT4](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm). A valid date produces the value 1 and all other input values (including the null value) produce the value 0.

Note

The value "00010101" is a valid date but the value "00000000" is not.

Variant 2

... DATS\_DAYS\_BETWEEN( date1,date2 )

Effect

The function DATS\_DAYS\_BETWEEN calculates the difference between two specified dates, date1 and date2, in days. The actual parameters must have the predefined data type [DATS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) and should contain a valid date in the format YYYYMMDD. Any invalid dates specified are initialized or set to the value "00010101" before the calculation. The result has the data type [INT4](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm). If date2 is greater than date1, the result is positive. In the reverse case, it is negative.

Note

Before the difference is calculated, the specified dates are converted to integers, like in ABAP, and the corresponding [rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_d.htm) apply.

Variant 3

... DATS\_ADD\_DAYS( date,days )

Effect

The function DATS\_ADD\_DAYS adds days days to a specified date date.

-   The actual parameter date must have the predefined data type [DATS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) and should contain a valid date in the format YYYYMMDD. Any invalid date specified is initialized or set to the value "00010101" before the calculation.

-   The actual parameter days must have the predefined data type [INT4](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm).

The result has the data type [DATS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm). If days is positive, the number of days is added to date. In other cases, the number of days is subtracted. If the calculation produces an invalid date, the initial value is reset.

Note

For the calculation, the specified date is [converted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_d.htm) to an integer, like in ABAP, and the result is [converted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_ibs.htm) to a date again while applying the corresponding rules.

Variant 4

... DATS\_ADD\_MONTHS( date,months )

Effect

The function DATS\_ADD\_MONTHS adds months months to a specified date date.

-   The actual parameter date must have the predefined data type [DATS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) and should contain a valid date in the format YYYYMMDD. Any invalid date specified is initialized or set to the value "00010101" before the calculation.

-   The actual parameter months must have the predefined data type [INT4](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm).

The result has the data type [DATS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm). If months is positive, the number of months is added to date. In other cases, the number of months is subtracted.

An attempt is made to create a date with the same day in an earlier or later month. If the maximum day possible in a month is exceeded, the greatest possible day is used. If the calculation produces an otherwise invalid date, the initial value is reset.