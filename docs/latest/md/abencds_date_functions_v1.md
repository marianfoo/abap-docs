  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-Based View, Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_expressions_v1.htm) →  [CDS DDL - DDIC-Based View, Built-In Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_builtin_functions_v1.htm) →  [CDS DDL - DDIC-Based View, Special Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_special_functions_v1.htm) →  [CDS DDL - DDIC-Based View, Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_date_time_functions_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20Date%20Functions%2C%20ABENCDS_DATE_FUNCTIONS_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

CDS DDL - DDIC-Based View, Date Functions

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

In a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), these functions execute operations with arguments of the built-in data types [DATN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) and [DATS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). The functions have [positional parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpositional_parameter_glosry.htm "Glossary Entry") to which actual parameters need to be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_data_source_v1.htm), [literals](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_v1.htm), [parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_v1.htm), [path expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v1.htm), built-in functions, or expressions can all be specified as actual parameters. Only literals can be passed to the parameter on\_error. If an actual parameter contains the [null value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry"), every function except DATS\_IS\_VALID returns a null value.

Hint

The session variable [$session.system\_date](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v1.htm) is used in a CDS view to provide direct access to the current system date. In addition, special annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_parameter_annotations.htm) makes it possible to pass the value of the [ABAP system field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-datum to [input parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_list_v1.htm).

Variant 1   

... DATN\_DAYS\_BETWEEN(date1,date2)

Effect

The function DATN\_DAYS\_BETWEEN calculates the difference between two specified dates, date1 and date2, in days. The actual parameters must have the built-in data type [DATN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) and must contain a valid date in the format YYYYMMDD. The result has the data type [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). If date2 is greater than date1, the result is positive. In the reverse case, the result is negative. If the result is outside of the range of valid dates, an error occurs.

Hints

-   Empty literals are not possible.
-   If an actual parameter is assigned the literal input '00000000', it is set to the initial value and the value 00010101 is used for the calculation.
-   The days missing from the Gregorian calendar (from 5.10.1582 to 15.10.1582) are [handled as usual](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_d.htm) in ABAP.

Variant 2   

... DATN\_ADD\_DAYS(date,days)

Effect

The function DATN\_ADD\_DAYS adds days days to a specified date date.

-   The actual parameter date must have the built-in data type [DATN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) and it must contain a valid date in the format YYYYMMDD.
-   The actual parameter days must have the built-in data type [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).

The result has the data type [DATN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). If days is positive, the number of days is added to date. In other cases, the number of days is subtracted. If the calculation produces an invalid date, an error occurs.

Hints

-   Literals are not possible for parameter date.
-   The days missing from the Gregorian calendar (from 5.10.1582 to 15.10.1582) are [handled as usual](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_d.htm) in ABAP.

Variant 3   

... DATN\_ADD\_MONTHS(date,months)

Effect

The function DATN\_ADD\_MONTHS adds months months to a specified date date.

-   The actual parameter date must have the built-in data type [DATN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) and it must contain a valid date in the format YYYYMMDD.
-   The actual parameter months must have the built-in data type [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).

The result has the data type [DATN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). If months is positive, the number of months is added to date. In other cases, the number of months is subtracted.

An attempt is made to create a date with the same day in an earlier or later month. If the target month has fewer days than the source month, the last day of the target month is returned. If the calculation produces an invalid date, an error occurs.

Hints

-   Literals are not possible for parameter date.
-   The days missing from the Gregorian calendar (from 5.10.1582 to 15.10.1582) are [handled as usual](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_d.htm) in ABAP.

Variant 4   

... DATS\_IS\_VALID(date)

Effect

The function DATS\_IS\_VALID determines whether date contains a valid date in the format YYYYMMDD. The actual parameter must have the built-in data type [DATS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). The result has the data type [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). A valid date produces the value 1 and all other input values (including the null value) produce the value 0.

Hint

The value 00010101 is a valid date but the value 00000000 is not.

Variant 5   

... DATS\_DAYS\_BETWEEN(date1,date2)

Effect

The function DATS\_DAYS\_BETWEEN calculates the difference between two specified dates, date1 and date2, in days. The actual parameters must have the built-in data type [DATS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) and should contain a valid date in the format YYYYMMDD. Any invalid dates specified are initialized or set to the value 00010101 before the calculation. The result has the data type [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). If date2 is greater than date1, the result is positive. In the reverse case, it is negative.

Hint

Before the difference is calculated, the specified dates are converted to integers, like in ABAP, and the corresponding [rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_d.htm) apply.

Variant 6   

... DATS\_ADD\_DAYS(date,days,on\_error)

Effect

The function DATS\_ADD\_DAYS adds days days to a specified date date.

-   The actual parameter date must have the built-in data type [DATS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) and should contain a valid date in the format YYYYMMDD. Any invalid date specified is initialized or set to the value 00010101 before the calculation.
-   The actual parameter days must have the built-in data type [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).
-   The actual parameter on\_error must have the built-in data type [CHAR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) with the length 10 and must have one of the following values:
    -   FAIL (an error raises an exception)
    -   NULL (an error returns the null value)
    -   INITIAL (an error returns the initial value)
    -   UNCHANGED (an error returns the unmodified value of date)

The values are case-sensitive. Any incorrectly specified values raise an exception.

The result has the data type [DATS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). If days is positive, the number of days is added to date. In other cases, the number of days is subtracted. If the calculation produces an invalid date, the error is handled as specified in on\_error.

Hint

For the calculation, the specified date is [converted](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_d.htm) to an integer, like in ABAP, and the result is [converted](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_ibs.htm) to a date again while applying the corresponding rules.

Variant 7   

... DATS\_ADD\_MONTHS(date,months,on\_error)

Effect

The function DATS\_ADD\_MONTHS adds months months to a specified date date.

-   The actual parameter date must have the built-in data type [DATS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) and should contain a valid date in the format YYYYMMDD. Any invalid date specified is initialized or set to the value 00010101 before the calculation.
-   The actual parameter months must have the built-in data type [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).
-   The same applies to the actual parameter on\_error as to DATS\_ADD\_DAYS.

The result has the data type [DATS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). If months is positive, the number of months is added to date. In other cases, the number of months is subtracted.

An attempt is made to create a date with the same day in an earlier or later month. If the maximum day possible in a month is exceeded, the greatest possible day is used. If the calculation produces an otherwise invalid date, the error is handled as specified in on\_error.

Example

The following CDS view applies date functions in the SELECT list to columns of the DDIC database table DEMO\_EXPRESSIONS. The class CL\_DEMO\_CDS\_DATE\_FUNCTIONS uses SELECT to access the view. The columns DATN1, DATN2, DATS1 and DATS2 in the database table and the actual parameters for the input parameters of the view can be given any values. In the case of DATS\_ADD\_DAYS and DATS\_ADD\_MONTHS, invalid values or values that produce invalid results are handled as specified in the view.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_DATFNC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_date\_functions
  with parameters
    p\_days   :abap.int4,
    p\_months :abap.int4
  as select from demo\_expressions
{
  key id,
      dats1                                   as date1,
      dats\_is\_valid(dats1)                    as valid1,
      dats2                                   as date2,
      dats\_is\_valid(dats2)                    as valid2,
      dats\_days\_between(dats1,dats2)          as difference,
      dats\_add\_days(dats1,:p\_days,'INITIAL')  as day1,
      dats\_add\_months(dats2,:p\_months,'FAIL') as day2,
      datn1                                   as date3,
      datn2                                   as date4,
      datn\_days\_between( datn1, datn2 )       as days\_between,
      datn\_add\_days( datn1,:p\_days )          as add\_days,
      datn\_add\_months( datn1,1 )              as add\_month
}