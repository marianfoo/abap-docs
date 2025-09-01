  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Built-In Functions](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) →  [ABAP CDS - Special Functions](javascript:call_link\('abencds_special_functions.htm'\)) →  [ABAP CDS - Date Functions and Time Functions](javascript:call_link\('abencds_f1_date_time_functions.htm'\)) → 

ABAP CDS - Time Stamp Functions

Syntax

... TSTMP\_IS\_VALID(tstmp)
  *|* TSTMP\_CURRENT\_UTCTIMESTAMP()
  *|* TSTMP\_SECONDS\_BETWEEN(tstmp1,tstmp2,on\_error)
  *|* TSTMP\_ADD\_SECONDS(tstmp,seconds,on\_error) ...

Variants:

[1\. ... TSTMP\_IS\_VALID(tstmp)](#!ABAP_VARIANT_1@1@)
[2\. ... TSTMP\_CURRENT\_UTCTIMESTAMP()](#!ABAP_VARIANT_2@2@)
[3\. ... TSTMP\_SECONDS\_BETWEEN(tstmp1,tstmp2,on\_error)](#!ABAP_VARIANT_3@3@)
[4\. ... TSTMP\_ADD\_SECONDS(tstmp,seconds,on\_error)](#!ABAP_VARIANT_4@4@)

Effect

In a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), these functions perform operations with arguments of the built-in data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 15 or of the data element TIMESTAMP. The content of an argument of this type is interpreted as an ABAP-specific [time stamp](javascript:call_link\('abentime_stamp_oview.htm'\)).

With the exception of TSTMP\_CURRENT\_UTCTIMESTAMP, these functions have positional parameters to which actual parameters must be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](javascript:call_link\('abencds_f1_data_source.htm'\)), [literals](javascript:call_link\('abencds_f1_literal.htm'\)), [parameters](javascript:call_link\('abencds_f1_parameter.htm'\)), [path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)), built-in functions, or expressions can all be specified as actual parameters. Only literals can be passed to the parameter on\_error. If an actual parameter contains the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), every function except TSTMP\_IS\_VALID returns a null value.

Notes

-   The time stamp functions enable time stamps to be edited on the database that are stored in the [ABAP-specific format](javascript:call_link\('abentime_stamp_oview.htm'\)) in database tables. As in ABAP, other types of access to these fields interpret these time stamps as regular numeric values.

-   [Conversion functions](javascript:call_link\('abencds_f1_date_time_conversions.htm'\)) make it possible to transform a time stamp to date fields and time fields and to transform date fields and time fields to a time stamp.
    

Variant 1

... TSTMP\_IS\_VALID(tstmp)

Effect

The function TSTMP\_IS\_VALID determines whether an argument tstmp contains a [valid time stamp](javascript:call_link\('abentime_stamp_oview.htm'\)) in the format YYYYMMDDHHMMSS. The actual parameter must have the built-in data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 15 and no decimal places. The result has the data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)). A valid time stamp produces the value 1 and all other input values (including the null value) produce the value 0.

Variant 2

... TSTMP\_CURRENT\_UTCTIMESTAMP()

Effect

The function TSTMP\_CURRENT\_UTCTIMESTAMP returns a [UTC time stamp](javascript:call_link\('abenutc_timestamp_glosry.htm'\) "Glossary Entry") in accordance with the [POSIX](javascript:call_link\('abenposix_timestamp_glosry.htm'\) "Glossary Entry") standard. The result has the data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 15 and no decimal places.

Notes

-   The UTC time stamp is created from the clock on the database server. The [system date](javascript:call_link\('abensystem_date_glosry.htm'\) "Glossary Entry") and the [system time](javascript:call_link\('abensystem_time_glosry.htm'\) "Glossary Entry") in AS ABAP from which its time stamp is created using [GET TIME STAMP](javascript:call_link\('abapget_time-stamp.htm'\)) are [synchronized](javascript:call_link\('abensystem_user_time_zones.htm'\)) with the database server clock.

-   If the function TSTMP\_CURRENT\_UTCTIMESTAMP is used more thane once within a view, it cannot be guaranteed that the every call within a database access produces the same result. Hence, later calls can produce later time stamps.
    

Variant 3

... TSTMP\_SECONDS\_BETWEEN(tstmp1,tstmp2,on\_error)

Effect

The function TSTMP\_SECONDS\_BETWEEN calculates the difference between two specified time stamps, tstmp1 and tstmp2 in seconds. The actual parameter must have the built-in data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 15 and no decimal places and contain [valid time stamps](javascript:call_link\('abentime_stamp_oview.htm'\)) in the format YYYYMMDDHHMMSS. Any invalid time stamps produce an error. If tstmp2 is greater than tstmp1, the result is positive. In the reverse case, it is negative.

The actual parameter on\_error controls error handling. It must have the built-in data type [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with the length 10 and must have one of the following values:

-   "FAIL" (an error raises an exception)

-   "NULL" (an error returns the null value)

-   "INITIAL" (an error returns the initial value)

The values are case-sensitive. Any incorrectly specified values raise an exception.

Variant 4

... TSTMP\_ADD\_SECONDS(tstmp,seconds,on\_error)

Effect

The function TSTMP\_ADD\_SECONDS adds seconds seconds to a time stamp tstmp. The actual parameter tstmp must have the built-in data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 15 and no decimal places and contain a [valid time stamp](javascript:call_link\('abentime_stamp_oview.htm'\)) in the format YYYYMMDDHHMMSS. An invalid time stamp produces an error. The actual parameter seconds must also have the built-in data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 15 and no decimal places. Any negative values are subtracted. If the result is invalid, an error occurs.

The actual parameter on\_error controls error handling. The same applies as to the function TSTMP\_SECONDS\_BETWEEN. The additional value "UNCHANGED" can be used to specify that an error caused the unchanged value of tstmp to be returned.

Example

The following CDS view applies time stamp functions in the SELECT list to columns of the database table DEMO\_EXPRESSIONS. The program DEMO\_CDS\_TIMESTAMP\_FUNCTIONS uses SELECT to access the view. The column NUM1 of the database table is given a value that is added to a time stamp in the column TIMESTAMP1 as seconds. The difference is found between this sum and a time stamp retrieved on the database by the function TSTMP\_CURRENT\_UTCTIMESTAMP. A delay, wait, can be integrated between the time stamp in the ABAP program and the time stamp created on the database.

@AbapCatalog.sqlViewName: 'demo\_cds\_tsfnc'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_timestamp\_functions
as select from
demo\_expressions
{
id,
timestamp1 as timestamp1,
tstmp\_is\_valid(timestamp1) as valid1,
tstmp\_seconds\_between(
tstmp\_current\_utctimestamp(),
tstmp\_add\_seconds(
timestamp1,
cast( num1 as abap.dec(15,0) ),
'FAIL'),
'FAIL') as difference
}