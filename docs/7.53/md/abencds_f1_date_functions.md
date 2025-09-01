  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Built-In Functions](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) →  [ABAP CDS - Special Functions](javascript:call_link\('abencds_special_functions.htm'\)) →  [ABAP CDS - Date Functions and Time Functions](javascript:call_link\('abencds_f1_date_time_functions.htm'\)) → 

ABAP CDS - Date Functions

Syntax

... DATS\_IS\_VALID(date)
  *|* DATS\_DAYS\_BETWEEN(date1,date2)
  *|* DATS\_ADD\_DAYS(date,days,on\_error)
  *|* DATS\_ADD\_MONTHS(date,months,on\_error) ...

Variants:

[1\. ... DATS\_IS\_VALID(date)](#!ABAP_VARIANT_1@1@)
[2\. ... DATS\_DAYS\_BETWEEN(date1,date2)](#!ABAP_VARIANT_2@2@)
[3\. ... DATS\_ADD\_DAYS(date,days,on\_error)](#!ABAP_VARIANT_3@3@)
[4\. ... DATS\_ADD\_MONTHS(date,months,on\_error)](#!ABAP_VARIANT_4@4@)

Effect

In a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), these functions execute operations with arguments of the built-in data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)). The functions have positional parameters to which actual parameters need to be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](javascript:call_link\('abencds_f1_data_source.htm'\)), [literals](javascript:call_link\('abencds_f1_literal.htm'\)), [parameters](javascript:call_link\('abencds_f1_parameter.htm'\)), [path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)), built-in functions, or expressions can all be specified as actual parameters. Only literals can be passed to the parameter on\_error. If an actual parameter contains the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), every function except DATS\_IS\_VALID returns a null value.

Note

The session variable [$session.system\_date](javascript:call_link\('abencds_f1_session_variable.htm'\)) is used in a CDS view to provide direct access to the current system date. In addition, special annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) makes it possible to pass the value of the [ABAP system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-datum to [input parameters](javascript:call_link\('abencds_f1_parameter_list.htm'\)).

Variant 1

... DATS\_IS\_VALID(date)

Effect

The function DATS\_IS\_VALID determines whether date (if specified) contains a valid date in the format YYYYMMDD. The actual parameter must have the built-in data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)). The result has the data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)). A valid date produces the value 1 and all other input values (including the null value) produce the value 0.

Note

The value "00010101" is a valid date but the value "00000000" is not.

Variant 2

... DATS\_DAYS\_BETWEEN(date1,date2)

Effect

The function DATS\_DAYS\_BETWEEN calculates the difference between two specified dates, date1 and date2, in days. The actual parameters must have the built-in data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) and should contain a valid date in the format YYYYMMDD. Any invalid dates specified are initialized or set to the value "00010101" before the calculation. The result has the data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)). If date2 is greater than date1, the result is positive. In the reverse case, it is negative.

Note

Before the difference is calculated, the specified dates are converted to integers, like in ABAP, and the corresponding [rules](javascript:call_link\('abenconversion_type_d.htm'\)) apply.

Variant 3

... DATS\_ADD\_DAYS(date,days,on\_error)

Effect

The function DATS\_ADD\_DAYS adds days days to a specified date date.

-   The actual parameter date must have the built-in data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) and should contain a valid date in the format YYYYMMDD. Any invalid date specified is initialized or set to the value "00010101" before the calculation.

-   The actual parameter days must have the built-in data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)).

-   The actual parameter on\_error must have the built-in data type [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with the length 10 and must have one of the following values:

-   "FAIL" (an error raises an exception)

-   "NULL" (an error returns the null value)

-   "INITIAL" (an error returns the initial value)

-   "UNCHANGED" (an error returns the unmodified value of date)

The values are case-sensitive. Any incorrectly specified values raise an exception.

The result has the data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)). If days is positive, the number of days is added to date. In other cases, the number of days is subtracted. If the calculation produces an invalid date, the error is handled as specified in on\_error.

Note

For the calculation, the specified date is [converted](javascript:call_link\('abenconversion_type_d.htm'\)) to an integer, like in ABAP, and the result is [converted](javascript:call_link\('abenconversion_type_ibs.htm'\)) to a date again while applying the corresponding rules.

Variant 4

... DATS\_ADD\_MONTHS(date,months,on\_error)

Effect

The function DATS\_ADD\_MONTHS adds months months to a specified date date.

-   The actual parameter date must have the built-in data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) and should contain a valid date in the format YYYYMMDD. Any invalid date specified is initialized or set to the value "00010101" before the calculation.

-   The actual parameter months must have the built-in data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)).

-   The same applies to the actual parameter on\_error as to DATS\_ADD\_DAYS.

The result has the data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)). If months is positive, the number of months is added to date. In other cases, the number of months is subtracted.

An attempt is made to create a date with the same day in an earlier or later month. If the maximum day possible in a month is exceeded, the greatest possible day is used. If the calculation produces an otherwise invalid date, the error is handled as specified in on\_error.

Example

The following CDS view applies date functions in the SELECT list to columns of the database table DEMO\_EXPRESSIONS. The program DEMO\_CDS\_DATE\_FUNCTIONS uses SELECT to access the view. The columns DATS1 and DATS2 in the database table and the actual parameters for the input parameters of the view can be given any values. In the case of DATS\_ADD\_DAYS and DATS\_ADD\_MONTHS. invalid values or values that produce invalid results are handled as specified in the view.

@AbapCatalog.sqlViewName: 'demo\_cds\_datfnc'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_date\_functions
with parameters
p\_days :abap.int4,
p\_months :abap.int4
as select from
demo\_expressions
{
id,
dats1 as date1,
dats\_is\_valid(dats1) as valid1,
dats2 as date2,
dats\_is\_valid(dats2) as valid2,
dats\_days\_between(dats1,dats2) as difference,
dats\_add\_days(dats1,:p\_days,'INITIAL') as day1,
dats\_add\_months(dats2,:p\_months,'FAIL') as day2
}