  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_expressions_v2.htm) →  [CDS DDL - CDS View Entity, Built-In Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v2.htm) →  [CDS DDL - CDS View Entity, Special Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_special_functions_v2.htm) →  [CDS DDL - CDS View Entity, Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_date_time_functions_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20Time%20Stamp%20Functions%2C%20ABENCDS_TIMESTAMP_FUNCTIONS_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion%20for%20improvement:)

CDS DDL - CDS View Entity, Time Stamp Functions

Syntax

... UTCL\_CURRENT()
  *|* UTCL\_ADD\_SECONDS(utcl,seconds)
  *|* UTCL\_SECONDS\_BETWEEN(utcl1,utcl2)
  *|* TSTMP\_IS\_VALID(tstmp)
  *|* TSTMP\_CURRENT\_UTCTIMESTAMP()
  *|* TSTMP\_SECONDS\_BETWEEN(tstmp1,tstmp2,on\_error)
  *|* TSTMP\_ADD\_SECONDS(tstmp,seconds,on\_error) ...

Variants:

[1\. ... UTCL\_CURRENT()](#!ABAP_VARIANT_1@1@)
[2\. ... UTCL\_ADD\_SECONDS(utcl,seconds)](#!ABAP_VARIANT_2@2@)
[3\. ... UTCL\_SECONDS\_BETWEEN(utcl1,utcl2)](#!ABAP_VARIANT_3@3@)
[4\. ... TSTMP\_IS\_VALID(tstmp)](#!ABAP_VARIANT_4@4@)
[5\. ... TSTMP\_CURRENT\_UTCTIMESTAMP()](#!ABAP_VARIANT_5@5@)
[6\. ... TSTMP\_SECONDS\_BETWEEN(tstmp1,tstmp2,on\_error)](#!ABAP_VARIANT_6@6@)
[7\. ... TSTMP\_ADD\_SECONDS(tstmp,seconds,on\_error)](#!ABAP_VARIANT_7@7@)

Effect

In a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), these functions perform operations on time stamps.

With the exception of UTCL\_CURRENT and TSTMP\_CURRENT\_UTCTIMESTAMP, these functions have [positional parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpositional_parameter_glosry.htm "Glossary Entry") to which actual parameters must be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm), [literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm), [parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_v2.htm), [path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v2.htm), [built-in functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v2.htm), [SQL-based scalar functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_scalar_function.htm), [expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_expressions_v2.htm), or [reuse expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_reusable_expression_v2.htm) using $projection can all be specified as actual parameters. Only literals can be passed to the parameter on\_error. If an actual parameter contains the [null value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry"), every function except TSTMP\_IS\_VALID returns a null value.

Hints

-   While the time stamp functions starting with UTCL process data that is stored as real time stamp on the database, the functions starting with TSTMP process time stamps on the database that are stored [as a packed number](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_stamps_packed.htm) in the ABAP-specific format in DDIC database tables. These TSTMP time stamps are interpreted as regular numeric values in ABAP and in other types of access.
-   [Conversion functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_date_time_conversions_v2.htm) make it possible to transform a time stamp to date fields and time fields and to transform date fields and time fields to a time stamp.

Variant 1   

... UTCL\_CURRENT()

Effect

This function generates a [UTC time stamp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenutc_timestamp_glosry.htm "Glossary Entry") from the [system time](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_time_glosry.htm "Glossary Entry") and the [system date](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_date_glosry.htm "Glossary Entry") of AS ABAP in accordance with [POSIX](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenposix_timestamp_glosry.htm "Glossary Entry"). The return value has the built-in dictionary type [UTCLONG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm).

Variant 2   

... UTCL\_ADD\_SECONDS(utcl,seconds)

Effect

The function UTCL\_ADD\_SECONDS adds seconds seconds to a time stamp utclong. It has two [positional parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpositional_parameter_glosry.htm "Glossary Entry"). The actual parameter for the formal parameter utclong must have the built-in dictionary type [UTCLONG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) and contain a valid [UTC time stamp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenutc_timestamp_glosry.htm "Glossary Entry"). An invalid time stamp produces an error. The actual parameter for the formal parameter seconds must have either the built-in data type [INT4](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) or the data type [DEC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with length 21 and 7 decimal places. Any negative values are subtracted. If the result is invalid, an error occurs.

The result is of type [UTCLONG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm).

Hints

-   If the positional parameter utclong is empty, it is set to its initial value.
-   The days missing from the Gregorian calendar (from 5.10.1582 to 15.10.1582) are [handled as usual](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_type_d.htm) in ABAP.

Variant 3   

... UTCL\_SECONDS\_BETWEEN(utcl1,utcl2)

Effect

The function UTCL\_SECONDS\_BETWEEN calculates the difference between two specified time stamps, utcl1 and utcl2, in seconds. It has two [positional parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpositional_parameter_glosry.htm "Glossary Entry"). The actual parameters for the formal parameters utcl1 and utcl2 must have the built-in dictionary type [UTCLONG](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) and contain a valid [UTC time stamp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenutc_timestamp_glosry.htm "Glossary Entry"). Any invalid time stamps produce an error. If utcl2 is greater than utcl1, the result is positive. If the values are identical, the result is 0. In all other cases, the result is negative.

The result is of type [DEC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with length 21 and 7 decimal places.

Hints

-   If an actual parameter is empty, then this parameter is set to its initial value.
-   The days missing from the Gregorian calendar (from 5.10.1582 to 15.10.1582) are [handled as usual](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_type_d.htm) in ABAP.

Variant 4   

... TSTMP\_IS\_VALID(tstmp)

Effect

The function TSTMP\_IS\_VALID determines whether an argument tstmp contains a [valid time stamp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_stamps_packed.htm) in the format YYYYMMDDHHMMSS. The actual parameter must have the built-in data type [DEC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with length 15 and no decimal places. The result has the data type [INT4](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm). A valid time stamp produces the value 1 and all other input values (including the null value) produce the value 0.

Variant 5   

... TSTMP\_CURRENT\_UTCTIMESTAMP()

Effect

The function TSTMP\_CURRENT\_UTCTIMESTAMP returns a [UTC time stamp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenutc_timestamp_glosry.htm "Glossary Entry") in accordance with the [POSIX](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenposix_timestamp_glosry.htm "Glossary Entry") standard. The result has the data type [DEC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with length 15 and no decimal places.

Hints

-   The UTC time stamp is created from the clock on the database server. The [system date](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_date_glosry.htm "Glossary Entry") and the [system time](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_time_glosry.htm "Glossary Entry") in AS ABAP from which its time stamp is created using [GET TIME STAMP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_time-stamp.htm) are [synchronized](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_user_time_zones.htm) with the database server clock.
-   If the function TSTMP\_CURRENT\_UTCTIMESTAMP is used more than once within a view, it cannot be guaranteed that the every call within a database access produces the same result. Later calls can produce later time stamps.

Variant 6   

... TSTMP\_SECONDS\_BETWEEN(tstmp1,tstmp2,on\_error)

Effect

The function TSTMP\_SECONDS\_BETWEEN calculates the difference between two specified time stamps, tstmp1 and tstmp2, in seconds. The actual parameter must have the built-in data type [DEC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with length 15 and no decimal places and contain [valid time stamps](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_stamps_packed.htm) in the format YYYYMMDDHHMMSS. Any invalid time stamps produce an error. If tstmp2 is greater than tstmp1, the result is positive. In the reverse case, it is negative.

The actual parameter on\_error controls error handling. It must have the built-in data type [CHAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with the length 10 and must have one of the following values:

-   FAIL (an error raises an exception)
-   NULL (an error returns the null value)
-   INITIAL (an error returns the initial value)

The values are case-sensitive. Any incorrectly specified values raise an exception.

Variant 7   

... TSTMP\_ADD\_SECONDS(tstmp,seconds,on\_error)

Effect

The function TSTMP\_ADD\_SECONDS adds seconds seconds to a time stamp tstmp. The actual parameter tstmp must have the built-in data type [DEC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with length 15 and no decimal places and contain a valid [time stamp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentime_stamps_packed.htm) in the format YYYYMMDDHHMMSS. An invalid time stamp produces an error. The actual parameter seconds must also have the built-in data type [DEC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with length 15 and no decimal places. Any negative values are subtracted. If the result is invalid, an error occurs.

The actual parameter on\_error controls error handling. The same applies as to the function TSTMP\_SECONDS\_BETWEEN. The additional value UNCHANGED can be used to specify that an error caused the unchanged value of tstmp to be returned.

Example

The following CDS view entity applies time stamp functions in the SELECT list to columns of the DDIC database table DEMO\_EXPRESSIONS. The class CL\_DEMO\_CDS\_TIMESTAMP\_FUNC\_VE uses SELECT to access the view. The column NUM1 of the DDIC database table is given a value that is added to a time stamp in the column TIMESTAMP1 as seconds. The difference is found between this sum and a time stamp retrieved on the database by the function TSTMP\_CURRENT\_UTCTIMESTAMP. A delay, wait, can be integrated between the time stamp in the ABAP program and the time stamp created on the database.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_TIMESTAMP\_FUNC\_VE
  with parameters
    p\_seconds :abap.int4
  as select from demo\_expressions
{
  key id,
      utcl\_current()                                as utcl\_timestamp,
      utcl\_add\_seconds(
        abap.utcl'2020-01-02 00:00:02.2222333',
        $parameters.p\_seconds)                      as add\_seconds,
      utcl\_seconds\_between(utcl1,utcl2)             as seconds\_between,
      timestamp1                                    as timestamp1,
      tstmp\_is\_valid(abap.dec'202001022306050')     as valid1,
      tstmp\_seconds\_between(
        tstmp\_current\_utctimestamp(),
        tstmp\_add\_seconds(
          timestamp1,
          abap.dec'123456789123456',
          'FAIL'),
       'FAIL')                                      as difference
}