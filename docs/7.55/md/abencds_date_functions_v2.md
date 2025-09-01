  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_expressions_v2.htm) →  [CDS DDL - CDS View Entity, Built-In Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_builtin_functions_v2.htm) →  [CDS DDL - CDS View Entity, Special Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_special_functions_v2.htm) →  [CDS DDL - CDS View Entity, Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_functions_v2.htm) → 

CDS DDL - CDS View Entity, Date Functions

Syntax

... DATN\_DAYS\_BETWEEN(date1,date2)
  *|* DATN\_ADD\_DAYS(date,days)
  *|* DATN\_ADD\_MONTHS(date,months)
  *|* DATS\_IS\_VALID(date)
  *|* DATS\_DAYS\_BETWEEN(date1,date2)
  *|* DATS\_ADD\_DAYS(date,days,on\_error)
  *|* DATS\_ADD\_MONTHS(date,months,on\_error) ...

Variants:

[1\. ... DATN\_DAYS\_BETWEEN(date1,date2)](#!ABAP_VARIANT_1@1@)
[2\. ... DATN\_ADD\_DAYS(date,days)](#!ABAP_VARIANT_2@2@)
[3\. ... DATN\_ADD\_MONTHS(date,months)](#!ABAP_VARIANT_3@3@)
[4\. ... DATS\_IS\_VALID(date)](#!ABAP_VARIANT_4@4@)
[5\. ... DATS\_DAYS\_BETWEEN(date1,date2)](#!ABAP_VARIANT_5@5@)
[6\. ... DATS\_ADD\_DAYS(date,days,on\_error)](#!ABAP_VARIANT_6@6@)
[7\. ... DATS\_ADD\_MONTHS(date,months,on\_error)](#!ABAP_VARIANT_7@7@)

Effect

In a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), these functions execute operations with arguments of the built-in data types [DATN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) and [DATS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). The functions have [positional parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpositional_parameter_glosry.htm "Glossary Entry") to which actual parameters must be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v2.htm), [literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v2.htm), [session variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v2.htm), [parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_v2.htm), [path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v2.htm), [built-in functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_builtin_functions_v2.htm), or [expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_expressions_v2.htm) can all be specified as actual parameters. Only literals can be passed to the parameter on\_error. If an actual parameter contains the [null value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_value_glosry.htm "Glossary Entry"), every function except DATS\_IS\_VALID returns a null value.

Hints

-   The session variable [$session.system\_date](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v2.htm) is used in a CDS view entity to provide direct access to the current system date. The session variable [$session.user\_date](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v2.htm) returns the current [user date](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuser_date_glosry.htm "Glossary Entry"). In addition, the special annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_parameter_annotations.htm) makes it possible to pass the value of the [ABAP system field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-datum to [input parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_list_v2.htm).

-   The session variables [$session.user\_date](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v2.htm) and [$session.system\_date](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v2.htm) return the data type DATS. They can be specified as actual parameters in all functions that expect data type DATS as input. They can be converted to data type DATN with the conversion function [DATS\_TO\_DATN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_date_time_conversions_v2.htm).
    

Variant 1

... DATN\_DAYS\_BETWEEN(date1,date2)

Effect

The function DATN\_DAYS\_BETWEEN calculates the difference between two specified dates, date1 and date2, in days. The actual parameters must have the built-in data type [DATN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) and must contain a valid date in the format YYYYMMDD. They can be specified as [literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v2.htm), as fields of a [data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v2.htm), [parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_v2.htm), or as [path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v2.htm). To use a session variable, it must be converted to data type DATN using the conversion function DATS\_TO\_DATN. The result has the data type [INT4](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). If date2 is greater than date1, the result is positive. In the reverse case, the result is negative. If the result is outside of the range of valid dates, an error occurs.

Hints

-   Empty literals are not possible.

-   If an actual parameter is assigned the literal input '00000000', it is set to the initial value and the value '00010101' is used for the calculation.

-   The days missing from the Gregorian calendar (from 5.10.1582 to 15.10.1582) are [handled as usual](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_d.htm) in ABAP.
    

Variant 2

... DATN\_ADD\_DAYS(date,days)

Effect

The function DATN\_ADD\_DAYS adds days days to a specified date date.

-   The actual parameter date must have the built-in data type [DATN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) and is must contain a valid date in the format YYYYMMDD. It can be specified as field of a [data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v2.htm), [parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_v2.htm), or as [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v2.htm). To use a session variable, it must be converted to data type DATN using the conversion function DATS\_TO\_DATN.

-   The actual parameter days must have the built-in data type [INT4](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm).

The result has the data type [DATN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). If days is positive, the number of days is added to date. Otherwise, the number of days is subtracted. If the calculation produces an invalid date, an error occurs.

Hints

-   Literals are not possible for parameter date.

-   The days missing from the Gregorian calendar (from 5.10.1582 to 15.10.1582) are [handled as usual](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_d.htm) in ABAP.
    

Variant 3

... DATN\_ADD\_MONTHS(date,months)

Effect

The function DATN\_ADD\_MONTHS adds months months to a specified date date.

-   The actual parameter date must have the built-in data type [DATN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) and it must contain a valid date in the format YYYYMMDD. It can be specified as field of a [data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v2.htm), [parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_v2.htm), or as [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v2.htm). To use a session variable, it must be converted to data type DATN using the conversion function DATS\_TO\_DATN.

-   The actual parameter months must have the built-in data type [INT4](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm).

The result has the data type [DATN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). If months is positive, the number of months is added to date. Otherwise, the number of months is subtracted.

An attempt is made to create a date with the same day in an earlier or later month. If the target month has fewer days than the source month, the last day of the target month is returned. If the calculation produces an invalid date, an error occurs.

Hints

-   Literals are not possible for parameter date.

-   The days missing from the Gregorian calendar (from 5.10.1582 to 15.10.1582) are [handled as usual](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_d.htm) in ABAP.
    

Variant 4

... DATS\_IS\_VALID(date)

Effect

The function DATS\_IS\_VALID determines whether date contains a valid date in the format YYYYMMDD. The actual parameter must have the built-in data type [DATS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). It can be specified as [literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v2.htm), as field of a [data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v2.htm), [parameter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_v2.htm), or as [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v2.htm). The result has the data type [INT4](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). A valid date produces the value 1 and all other input values (including the null value) produce the value 0.

Hint

The value '00010101' is a valid date but the value '00000000' is not.

Variant 5

... DATS\_DAYS\_BETWEEN(date1,date2)

Effect

The function DATS\_DAYS\_BETWEEN calculates the difference between two specified dates, date1 and date2, in days. The actual parameters must have the built-in data type [DATS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) and should contain a valid date in the format YYYYMMDD. They can be specified as [literals](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v2.htm), as fields of a [data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v2.htm), [parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_v2.htm), [session variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v2.htm), or as [path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v2.htm). The result has the data type [INT4](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). If date2 is greater than date1, the result is positive. In the reverse case, it is negative.

Hint

Before the difference is calculated, the specified dates are converted to integers, like in ABAP, and the corresponding [rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_d.htm) apply.

Variant 6

... DATS\_ADD\_DAYS(date,days,on\_error)

Effect

The function DATS\_ADD\_DAYS adds days days to a specified date date.

-   The actual parameter date must have the built-in data type [DATS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) and should contain a valid date in the format YYYYMMDD.

-   The actual parameter days must have the built-in data type [INT4](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm).

-   The actual parameter on\_error must have the built-in data type [CHAR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) with the length 10 and must have one of the following values:

-   'FAIL' (an error raises an exception)

-   'NULL' (an error returns the null value)

-   'INITIAL' (an error returns the initial value)

-   'UNCHANGED' (an error returns the unmodified value of date)

The values are case-sensitive. Any incorrectly specified values raise an exception.

The result has the data type [DATS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). If days is positive, the number of days is added to date. In other cases, the number of days is subtracted. If the calculation produces an invalid date, the error is handled as specified in on\_error.

Hint

For the calculation, the specified date is [converted](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_d.htm) to an integer, like in ABAP, and the result is [converted](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_ibs.htm) to a date again while applying the corresponding rules.

Variant 7

... DATS\_ADD\_MONTHS(date,months,on\_error)

Effect

The function DATS\_ADD\_MONTHS adds months months to a specified date date.

-   The actual parameter date must have the built-in data type [DATS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) and should contain a valid date in the format YYYYMMDD.

-   The actual parameter months must have the built-in data type [INT4](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm).

-   The same applies to the actual parameter on\_error as to DATS\_ADD\_DAYS.

The result has the data type [DATS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). If months is positive, the number of months is added to date. In other cases, the number of months is subtracted.

An attempt is made to create a date with the same day in an earlier or later month. If the maximum day possible in a month is exceeded, the greatest possible day is used. If the calculation produces an otherwise invalid date, the error is handled as specified in on\_error.

Example

The following CDS view entity applies date functions in the SELECT list to columns of the DDIC database table DEMO\_EXPRESSIONS. The program DEMO\_CDS\_DATE\_FUNC\_VE uses SELECT to access the view. You can assign values to the columns DATN1, DATN2, DATS1 and DATS2 and to the actual parameters for the input parameters. In the case of DATS\_ADD\_DAYS and DATS\_ADD\_MONTHS, invalid values or values that produce invalid results are handled as specified by the parameter on\_error.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_DATE\_FUNC\_VE
  with parameters
    p\_days   :abap.int4,
    p\_months :abap.int4
  as select from demo\_expressions
{
  key id,
      dats1                                                as date1,
      dats\_is\_valid(dats1)                                 as valid1,
      dats2                                                as date2,
      dats\_is\_valid(dats2)                                 as valid2,
      dats\_days\_between($session.user\_date, 20200101)      as diff,
      dats\_add\_days(20200301,$parameters.p\_days,'INITIAL') as day1,
      dats\_add\_months(dats2,$parameters.p\_months,'FAIL')   as day2,
      datn1                                                as date3,
      datn2                                                as date4,
      datn\_days\_between( datn1, datn2 )                    as daysBetw,
      datn\_add\_days( datn1,3+6 )                           as add\_days,
      datn\_add\_months( dats\_to\_datn
                     ($session.system\_date, 'FAIL', 'FAIL')
                     ,1 )                                  as add\_month
}