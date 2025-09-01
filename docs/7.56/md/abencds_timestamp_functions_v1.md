  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, Expressions](javascript:call_link\('abencds_expressions_v1.htm'\)) →  [CDS DDL - DDIC-Based View, Built-In Functions](javascript:call_link\('abencds_builtin_functions_v1.htm'\)) →  [CDS DDL - DDIC-based View, Special Functions](javascript:call_link\('abencds_special_functions_v1.htm'\)) →  [CDS DDL - DDIC-based View, Date Functions and Time Functions](javascript:call_link\('abencds_date_time_functions_v1.htm'\)) → 

CDS DDL - DDIC-based View, Time Stamp Functions

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

In a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), these functions perform operations on time stamps.

With the exception of UTCL\_CURRENT and TSTMP\_CURRENT\_UTCTIMESTAMP, these functions have [positional parameters](javascript:call_link\('abenpositional_parameter_glosry.htm'\) "Glossary Entry") to which actual parameters must be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](javascript:call_link\('abencds_data_source_v1.htm'\)), [literals](javascript:call_link\('abencds_literal_v1.htm'\)), [parameters](javascript:call_link\('abencds_parameter_v1.htm'\)), [path expressions](javascript:call_link\('abencds_path_expression_v1.htm'\)), built-in functions, or expressions can all be specified as actual parameters. Only literals can be passed to the parameter on\_error. If an actual parameter contains the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), every function except TSTMP\_IS\_VALID returns a null value.

Hints

-   While the time stamp functions starting with UTCL process data that is stored as real time stamp on the database, the functions starting with TSTMP process time stamps on the database that are stored [as a packed number](javascript:call_link\('abentime_stamps_packed.htm'\)) in the ABAP-specific format in DDIC database tables. As in ABAP, other types of access to these fields interpret these time stamps as regular numeric values.
-   [Conversion functions](javascript:call_link\('abencds_date_time_conversions_v1.htm'\)) make it possible to transform a time stamp to date fields and time fields and to transform date fields and time fields to a time stamp.

Variant 1   

... UTCL\_CURRENT()

Effect

This function generates a [UTC time stamp](javascript:call_link\('abenutc_timestamp_glosry.htm'\) "Glossary Entry") from the [system time](javascript:call_link\('abensystem_time_glosry.htm'\) "Glossary Entry") and the [system date](javascript:call_link\('abensystem_date_glosry.htm'\) "Glossary Entry") of AS ABAP in accordance with [POSIX](javascript:call_link\('abenposix_timestamp_glosry.htm'\) "Glossary Entry"). The return value has the built-in dictionary type [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)).

Variant 2   

... UTCL\_ADD\_SECONDS(utcl,seconds)

Effect

The function UTCL\_ADD\_SECONDS adds seconds seconds to a time stamp utclong. It has two [positional parameters](javascript:call_link\('abenpositional_parameter_glosry.htm'\) "Glossary Entry"). The actual parameter for the formal parameter utclong must have the built-in dictionary type [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)) and contain a valid [UTC time stamp](javascript:call_link\('abenutc_timestamp_glosry.htm'\) "Glossary Entry"). An invalid time stamp produces an error. The actual parameter for the formal parameter seconds must have either the built-in data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)) or the data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 21 and 7 decimal places. Any negative values are subtracted. If the result is invalid, an error occurs.

The result is of type [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)).

Hints

-   The actual parameter utcl can be any of the operands listed above in section Effect, including a literal. A literal can be specified in the following format: '0001-01-01 00:00:02.0000000'
-   If the positional parameter utclong is empty, it is set to its initial value.
-   The days missing from the Gregorian calendar (from 5.10.1582 to 15.10.1582) are [handled as usual](javascript:call_link\('abenconversion_type_d.htm'\)) in ABAP.

Variant 3   

... UTCL\_SECONDS\_BETWEEN(utcl1,utcl2)

Effect

The function UTCL\_SECONDS\_BETWEEN calculates the difference between two specified time stamps, utcl1 and utcl2, in seconds. It has two [positional parameters](javascript:call_link\('abenpositional_parameter_glosry.htm'\) "Glossary Entry"). The actual parameters for the formal parameters utcl1 and utcl2 must have the built-in dictionary type [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)) and contain a valid [UTC time stamp](javascript:call_link\('abenutc_timestamp_glosry.htm'\) "Glossary Entry"). Any invalid time stamps produce an error. If utcl2 is greater than utcl1 , the result is positive. If the values are identical, the result is 0. In all other cases, the result is negative.

The result is of type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 21 and 7 decimal places.

Hints

-   The actual parameter utcl can be any of the operands listed above in section Effect, including a literal. A literal can be specified in the following format: '0001-01-01 00:00:02.0000000'
-   If an actual parameter is empty, then this parameter is set to its initial value.
-   The days missing from the Gregorian calendar (from 5.10.1582 to 15.10.1582) are [handled as usual](javascript:call_link\('abenconversion_type_d.htm'\)) in ABAP.

Variant 4   

... TSTMP\_IS\_VALID(tstmp)

Effect

The function TSTMP\_IS\_VALID determines whether an argument tstmp contains a [valid time stamp](javascript:call_link\('abentime_stamps_packed.htm'\)) in the format YYYYMMDDHHMMSS. The actual parameter must have the built-in data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 15 and no decimal places. The result has the data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)). A valid time stamp produces the value 1 and all other input values (including the null value) produce the value 0.

Hint

-   The actual parameter tstmp cannot be specified as literal. This is only possible indirectly by using a cast expression. For example, this is valid syntax:
    
    tstmp\_is\_valid(cast(20200102334455 as abap.dec(15,0)) as demo
    

Variant 5   

... TSTMP\_CURRENT\_UTCTIMESTAMP()

Effect

The function TSTMP\_CURRENT\_UTCTIMESTAMP returns a [UTC time stamp](javascript:call_link\('abenutc_timestamp_glosry.htm'\) "Glossary Entry") in accordance with the [POSIX](javascript:call_link\('abenposix_timestamp_glosry.htm'\) "Glossary Entry") standard. The result has the data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 15 and no decimal places.

Hints

-   The UTC time stamp is created from the clock on the database server. The [system date](javascript:call_link\('abensystem_date_glosry.htm'\) "Glossary Entry") and the [system time](javascript:call_link\('abensystem_time_glosry.htm'\) "Glossary Entry") in AS ABAP from which its time stamp is created using [GET TIME STAMP](javascript:call_link\('abapget_time-stamp.htm'\)) are [synchronized](javascript:call_link\('abensystem_user_time_zones.htm'\)) with the database server clock.
-   If the function TSTMP\_CURRENT\_UTCTIMESTAMP is used more thane once within a view, it cannot be guaranteed that the every call within a database access produces the same result. Hence, later calls can produce later time stamps.

Variant 6   

... TSTMP\_SECONDS\_BETWEEN(tstmp1,tstmp2,on\_error)

Effect

The function TSTMP\_SECONDS\_BETWEEN calculates the difference between two specified time stamps, tstmp1 and tstmp2 in seconds. The actual parameter must have the built-in data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 15 and no decimal places and contain [valid time stamps](javascript:call_link\('abentime_stamps_packed.htm'\)) in the format YYYYMMDDHHMMSS. Any invalid time stamps produce an error. If tstmp2 is greater than tstmp1, the result is positive. In the reverse case, it is negative.

The actual parameter on\_error controls error handling. It must have the built-in data type [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with the length 10 and must have one of the following values:

-   "FAIL" (an error raises an exception)
-   "NULL" (an error returns the null value)
-   "INITIAL" (an error returns the initial value)

The values are case-sensitive. Any incorrectly specified values raise an exception.

Hint

-   tstmp1 and tstmp2 cannot be specified as literals. This is only possible indirectly by using a cast expression. For example, this is valid syntax:
    
    tstmp\_seconds\_between(cast(20200102122345 as abap.dec(15,0)),cast(20200401161034 as abap.dec(15,0)), 'FAIL') as demo
    

Variant 7   

... TSTMP\_ADD\_SECONDS(tstmp,seconds,on\_error)

Effect

The function TSTMP\_ADD\_SECONDS adds seconds seconds to a time stamp tstmp. The actual parameter tstmp must have the built-in data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 15 and no decimal places and contain a valid [time stamp](javascript:call_link\('abentime_stamps_packed.htm'\)) in the format YYYYMMDDHHMMSS. An invalid time stamp produces an error. The actual parameter seconds must also have the built-in data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 15 and no decimal places. Any negative values are subtracted. If the result is invalid, an error occurs.

The actual parameter on\_error controls error handling. The same applies as to the function TSTMP\_SECONDS\_BETWEEN. The additional value "UNCHANGED" can be used to specify that an error caused the unchanged value of tstmp to be returned.

Hint

-   tstmp and seconds cannot be specified as literals. This is only possible indirectly by using cast expressions. For example, this is valid syntax:
    
    tstmp\_add\_seconds(cast(20200102122345 as abap.dec(15,0)),cast(5 as abap.dec(15,0)), 'FAIL') as demo
    

Example

The following CDS view applies time stamp functions in the SELECT list to columns of the DDIC database table DEMO\_EXPRESSIONS. The program DEMO\_CDS\_TIMESTAMP\_FUNCTIONS uses SELECT to access the view. A current [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)) time stamp is generated, seconds are added to a [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)) time stamp and the difference in seconds between two [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)) time stamps is calculated. The column NUM1 of the DDIC database table is given a value that is added to a time stamp in the column TIMESTAMP1 as seconds. The difference is found between this sum and a time stamp retrieved on the database by the function TSTMP\_CURRENT\_UTCTIMESTAMP. A delay, wait, can be integrated between the time stamp in the ABAP program and the time stamp created on the database.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_TSFNC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_timestamp\_functions
with parameters
    p\_seconds   :abap.int4
  as select from
    demo\_expressions
    {
      id,
      utcl\_current() as utcl\_timestamp,
      utcl\_add\_seconds(utcl2,:p\_seconds)  as add\_seconds,
      utcl\_seconds\_between(utcl1,utcl2)
                                          as seconds\_between,  
      timestamp1                          as timestamp1,
      tstmp\_is\_valid(timestamp1)          as valid1,
      tstmp\_seconds\_between(
        tstmp\_current\_utctimestamp(),
        tstmp\_add\_seconds(
          timestamp1,
          cast( num1 as abap.dec(15,0) ),
          'FAIL'),
       'FAIL')                            as difference      
    }