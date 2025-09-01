  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, Built-In Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_builtin_functions.htm) →  [ABAP CDS - Special Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_special_functions.htm) →  [ABAP CDS - Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_time_functions.htm) → 

ABAP CDS - Date/Time Conversions

Syntax

... TSTMP\_TO\_DATS(tstmp,tzone,clnt,on\_error)
  *|* TSTMP\_TO\_TIMS(tstmp,tzone,clnt,on\_error)
  *|* TSTMP\_TO\_DST(tstmp,tzone,clnt,on\_error)
  *|* DATS\_TIMS\_TO\_TSTMP(date,time,tzone,clnt,on\_error) ...

Variants:

[1\. ... TSTMP\_TO\_DATS(tstmp,tzone,clnt,on\_error)](#!ABAP_VARIANT_1@1@)
[2\. ... TSTMP\_TO\_TIMS(tstmp,tzone,clnt,on\_error)](#!ABAP_VARIANT_2@2@)
[3\. ... TSTMP\_TO\_DST(tstmp,tzone,clnt,on\_error)](#!ABAP_VARIANT_3@3@)
[4\. ... DATS\_TIMS\_TO\_TSTMP(date,time,tzone,clnt,on\_error)](#!ABAP_VARIANT_4@4@)

Effect

These functions convert time stamps into dates or times, and the other way round. The argument tstmp must have the built-in data type [DEC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) with length 15, or the type of the data element TIMESTAMP. The content of this argument is interpreted as an ABAP-specific [time stamp in a packed number](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps_packed.htm).

The functions have positional parameters to which actual parameters need to be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm), [literals](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_literal.htm), [parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter.htm), [path expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm), built-in functions, or expressions can all be specified as actual parameters. Only literals can be passed to the parameter on\_error. If an actual parameter contains the [null value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry"), every function returns a null value.

The conversions follow the ABAP-specific [rules for time zones](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_zone_rules.htm). The associated database tables must be filled correctly.

Note

These functions move the functions of the ABAP statements [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_time-stamp.htm) and [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapconvert_date_time-stamp.htm) to the database.

Variant 1

... TSTMP\_TO\_DATS(tstmp,tzone,clnt,on\_error)

Effect

The function TSTMP\_TO\_DATS extracts the local date for the time zone specified in tzone from a time stamp in the argument tstmp.

The actual parameter tstmp must have the built-in data type [DEC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) with length 15 and no decimal places and contain a [valid time stamp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps_packed.htm) in the format YYYYMMDDHHMMSS. tzone expects an actual parameter of the type [CHAR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) with length 6, either initial or containing a valid [time zone](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_zone_glosry.htm "Glossary Entry"). If an initial time zone is specified, no time shift is calculated. The actual parameter clnt must have the built-in dictionary type [CLNT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) and must contain a valid [client ID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_identifier_glosry.htm "Glossary Entry"). This client ID is used in the evaluation of the system tables of the [rules for time zones](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_zone_rules.htm). The return value has the built-in data type [DATS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm).

The actual parameter on\_error controls error handling. It must have the built-in data type [CHAR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) with the length 10 and must have one of the following values:

-   "FAIL" (an error raises an exception)

-   "NULL" (an error returns the null value)

-   "INITIAL" (an error returns the initial value)

The pattern is case-sensitive. Any incorrectly specified values raise an exception.

Variant 2

... TSTMP\_TO\_TIMS(tstmp,tzone,clnt,on\_error)

Effect

The function TSTMP\_TO\_TIMS extracts the local time for the time zone specified in tzone from a time stamp in the argument tstmp.

For the actual parameters tstmp, tzone, clnt, and on\_error, the same applies as for the function TSTMP\_TO\_DATS. The return value has the built-in data type [TIMS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm).

Variant 3

... TSTMP\_TO\_DST(tstmp,tzone,clnt,on\_error)

Effect

The function TSTMP\_TO\_DST extracts the summer time marker for the time zone specified in tzone from a time stamp in the argument tstmp. This is "X" if the time stamp for the time zone is in the summer time, otherwise it is initial.

For the actual parameters tstmp, tzone, clnt, and on\_error, the same applies as for the function TSTMP\_TO\_DATS. The return value has the built-in data type [CHAR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) with length 1.

Variant 4

... DATS\_TIMS\_TO\_TSTMP(date,time,tzone,clnt,on\_error)

Effect

The function DATS\_TIMS\_TO\_TSTMP constructs a time stamp from a local date specified in date and a local time specified in time in the time zone specified in tzone. The summer time is respected implicitly.

The actual parameter date must have the built-in data type [DATS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) and should contain a valid date. The actual parameter time must have the built-in data type [TIMS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) and should contain a valid time. For the actual parameters tzone, clnt, and on\_error, the same applies as for the function TSTMP\_TO\_DATS.

The return value has the built-in data type [DEC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) with length 15 and represents an ABAP-specific [time stamp in a packed number](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentime_stamps_packed.htm).

Example

In the following CDS view, the date, the time, and the summer time marker of the current UTC time stamp are extracted using the conversion functionsTSTMP\_TO\_DATS, TSTMP\_TO\_TIMS, and TSTMP\_TO\_DST. The values of the columns DATS1 and TIMS1 of the database table DEMO\_EXPRESSIONS are combined into a time stamp by the conversion function DATS\_TIMS\_TO\_TSTMP. The program DEMO\_CDS\_DATE\_TIME accesses the view and displays the result.

@AbapCatalog.sqlViewName: 'demo\_cds\_datim'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_date\_time
  as select from
    demo\_expressions
    {
      tstmp\_current\_utctimestamp() as tstmp,
      tstmp\_to\_dats( tstmp\_current\_utctimestamp(),
                     abap\_system\_timezone( $session.client,'NULL' ),
                     $session.client,
                     'NULL' )      as dat,
      tstmp\_to\_tims( tstmp\_current\_utctimestamp(),
                     abap\_system\_timezone( $session.client,'NULL' ),
                     $session.client,
                     'NULL' )      as tim,
      tstmp\_to\_dst( tstmp\_current\_utctimestamp(),
                    abap\_system\_timezone( $session.client,'NULL' ),
                    $session.client,
                    'NULL' )       as dst,
      dats\_tims\_to\_tstmp( dats1,
                          tims1,
                          abap\_system\_timezone( $session.client,'NULL' ),
                          $session.client,
                         'NULL' )  as dat\_tim
    }