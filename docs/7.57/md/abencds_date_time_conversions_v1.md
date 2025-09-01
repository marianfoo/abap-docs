---
title: "Syntax"
description: |
  ... TSTMP_TO_DATS(tstmp,tzone,clnt,on_error)  TSTMP_TO_TIMS(tstmp,tzone,clnt,on_error)  TSTMP_TO_DST(tstmp,tzone,clnt,on_error)  DATS_TIMS_TO_TSTMP(date,time,tzone,clnt,on_error)  TSTMPL_TO_UTCL(tstmpl,on_error,on_initial)  TSTMPL_FROM_UTCL(utcl,on_null)  DATS_
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm"
abapFile: "abencds_date_time_conversions_v1.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "date", "time", "conversions"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-Based View, Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expressions_v1.htm) →  [CDS DDL - DDIC-Based View, Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_builtin_functions_v1.htm) →  [CDS DDL - DDIC-Based View, Special Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_special_functions_v1.htm) →  [CDS DDL - DDIC-Based View, Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_functions_v1.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, Date/Time Conversions, ABENCDS_DATE_TIME_CONVERSIONS_V1, 7
57%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, Date/Time Conversions

Syntax

... TSTMP\_TO\_DATS(tstmp,tzone,clnt,on\_error)
  *|* TSTMP\_TO\_TIMS(tstmp,tzone,clnt,on\_error)
  *|* TSTMP\_TO\_DST(tstmp,tzone,clnt,on\_error)
  *|* DATS\_TIMS\_TO\_TSTMP(date,time,tzone,clnt,on\_error)
  *|* TSTMPL\_TO\_UTCL(tstmpl,on\_error,on\_initial)
  *|* TSTMPL\_FROM\_UTCL(utcl,on\_null)
  *|* DATS\_TO\_DATN(dats,on\_error,on\_initial)
  *|* DATS\_FROM\_DATN(date,on\_null)
  *|* TIMS\_TO\_TIMN(tims,on\_error)
  *|* TIMS\_FROM\_TIMN(time,on\_null) ...

Variants:

[1\. ... TSTMP\_TO\_DATS(tstmp,tzone,clnt,on\_error)](#!ABAP_VARIANT_1@1@)
[2\. ... TSTMP\_TO\_TIMS(tstmp,tzone,clnt,on\_error)](#!ABAP_VARIANT_2@2@)
[3\. ... TSTMP\_TO\_DST(tstmp,tzone,clnt,on\_error)](#!ABAP_VARIANT_3@3@)
[4\. ... DATS\_TIMS\_TO\_TSTMP(date,time,tzone,clnt,on\_error)](#!ABAP_VARIANT_4@4@)
[5\. ... TSTMPL\_TO\_UTCL(tstmpl,on\_error,on\_initial)](#!ABAP_VARIANT_5@5@)
[6\. ... TSTMPL\_FROM\_UTCL(utcl,on\_null)](#!ABAP_VARIANT_6@6@)
[7\. ... DATS\_TO\_DATN(dats,on\_error,on\_initial)](#!ABAP_VARIANT_7@7@)
[8\. ... DATS\_FROM\_DATN(date,on\_null)](#!ABAP_VARIANT_8@8@)
[9\. ... TIMS\_TO\_TIMN(tims,on\_error)](#!ABAP_VARIANT_9@9@)
[10\. ... TIMS\_FROM\_TIMN(time,on\_null)](#!ABAP_VARIANT_10@10@)

Effect

In a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), these functions perform conversions between date, time, and time stamp formats.

The functions have [positional parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpositional_parameter_glosry.htm "Glossary Entry") to which actual parameters need to be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v1.htm), [literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v1.htm), [parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_v1.htm), [path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v1.htm), built-in functions, or expressions can all be specified as actual parameters. Only literals can be passed to the parameters on\_error, on\_initial, and on\_null. If an actual parameter contains the [null value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry"), every function returns a null value.

The conversions follow the ABAP-specific [rules for time zones](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_zone_rules.htm). The associated DDIC database tables must be filled correctly.

Hints

-   These functions move the functions of the ABAP statements [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_time-stamp.htm) and [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_date_time-stamp.htm) to the database.
-   To carry out conversions that are not yet supported by built-in CDS conversion functions, an option is to use the respective HANA functions in AMDP or Native SQL.
-   Literals in date and time conversion functions:
    -   In functions 1 to 3, the parameter tstmp cannot be specified as literal. This is only possible indirectly, by using a cast expression. For example, this can be specified for tstmp:
        
        cast('20200102122334' as abap.dec(15,0))
        
    -   In functions 5 and 6, the parameter tstmpl cannot be specified as literal. Casting isn't possible either.
    -   In functions 7 and 8, the parameters dats and datn can be specified as character literals.
    -   In functions 9 and 10, the parameters tims and timn can be specified as character literals.

Variant 1   

... TSTMP\_TO\_DATS(tstmp,tzone,clnt,on\_error)

Effect

The function TSTMP\_TO\_DATS extracts the local date for the time zone specified in tzone from a time stamp in the argument tstmp.

The actual parameter tstmp must have the built-in data type [DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with length 15 and no decimal places and contain a [valid time stamp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_stamps_packed.htm) in the format YYYYMMDDHHMMSS. tzone expects an actual parameter of the type [CHAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with length 6, either initial or containing a valid [time zone](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_zone_glosry.htm "Glossary Entry"). If an initial time zone is specified, no time shift is calculated. The actual parameter clnt must have the built-in dictionary type [CLNT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and must contain a valid [client ID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_identifier_glosry.htm "Glossary Entry"). This client ID is used in the evaluation of the system tables of the [rules for time zones](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_zone_rules.htm). The return value has the built-in data type [DATS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm).

The actual parameter on\_error controls error handling. It must have the built-in data type [CHAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with the length 10 and must have one of the following values:

-   FAIL (an error raises an exception)
-   NULL (an error returns the null value)
-   INITIAL (an error returns the initial value)

The pattern is case-sensitive. Any incorrectly specified values raise an exception.

Variant 2   

... TSTMP\_TO\_TIMS(tstmp,tzone,clnt,on\_error)

Effect

The function TSTMP\_TO\_TIMS extracts the local time for the time zone specified in tzone from a time stamp in the argument tstmp.

The same applies to the actual parameters tstmp, tzone, clnt, and on\_error as to the function TSTMP\_TO\_DATS. The return value has the built-in data type [TIMS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm).

Variant 3   

... TSTMP\_TO\_DST(tstmp,tzone,clnt,on\_error)

Effect

The function TSTMP\_TO\_DST extracts the daylight saving time marker for the time zone specified in tzone from a time stamp in the argument tstmp. This is X if the time stamp for the time zone is in the daylight saving time, otherwise it is initial.

The same applies to the actual parameters tstmp, tzone, clnt, and on\_error as to the function TSTMP\_TO\_DATS. The return value has the built-in data type [CHAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with length 1.

Variant 4   

... DATS\_TIMS\_TO\_TSTMP(date,time,tzone,clnt,on\_error)

Effect

The function DATS\_TIMS\_TO\_TSTMP constructs a time stamp from a local date specified in date and a local time specified in time in the time zone specified in tzone. The daylight saving time is respected implicitly.

The actual parameter date must have the built-in data type [DATS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and should contain a valid date. The actual parameter time must have the built-in data type [TIMS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and should contain a valid time. The same applies to the actual parameters tzone, clnt, and on\_error as to the function TSTMP\_TO\_DATS.

The return value has the built-in data type [DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with length 15 and represents an ABAP-specific [time stamp in a packed number](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_stamps_packed.htm).

Variant 5   

... TSTMPL\_TO\_UTCL(tstmpl,on\_error,on\_initial)

Effect

The function TSTMPL\_TO\_UTCL converts a time stamp tstmpl from the ABAP Dictionary type TIMESTAMPL to the built-in dictionary type [UTCLONG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm).

The actual parameter for the formal parameter tstmpl must have the built-in data type [DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with length 21 and 7 decimal places and contain a [valid time stamp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_stamps_packed.htm) in the format YYYYMMDDHHMMSSMMMUUUN.

The same applies to the actual parameter on\_error as to the function TSTMP\_TO\_DATS.

The actual parameter on\_initial defines the way arguments with initial values are handled. It must have the built-in data type [CHAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with the length 10 and must have one of the following values:

-   FAIL (an initial value raises an exception)
-   NULL (an initial value returns the null value)
-   INITIAL (an initial value returns the initial value)

The pattern is case-sensitive. Any incorrectly specified values raise an exception.

Hint

The function TSTMPL\_TO\_UTCL is a purely technical type conversion and does not involve any time zone calculations.

Variant 6   

... TSTMPL\_FROM\_UTCL(tstmpl,on\_null)

Effect

The function TSTMPL\_FROM\_UTCL converts a time stamp utcl from the built-in dictionary type [UTCLONG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) to the ABAP Dictionary type TIMESTAMPL. It is the counterpart to variant 5.

The actual parameter for the formal parameter utcl must have the built-in data type [UTCLONG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and it should contain a valid time stamp.

The actual parameter on\_null defines the way null values as arguments are handled. It must have the built-in data type [CHAR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with the length 10 and must have one of the following values:

-   FAIL (a null value raises an exception)
-   NULL (a null value returns the null value)
-   INITIAL (a null value returns the initial value)

The pattern is case-sensitive. Any incorrectly specified values raise an exception.

If the parameter utcl is initial, 0 is returned.

Hint

The function TSTMPL\_FROM\_UTCL is a purely technical type conversion and does not involve any time zone calculations.

Variant 7   

... DATS\_TO\_DATN(dats,on\_error,on\_initial)

Effect

The function DATS\_TO\_DATN converts a date dats from the built-in ABAP Dictionary data type [DATS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) to the built-in ABAP Dictionary type [DATN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm).

The actual parameter for the formal parameter dats must have the built-in data type [DATS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and should contain a valid date in the format YYYYMMDD. The same applies to the actual parameters on\_error and on\_initial as to the function TSTMPL\_TO\_UTCL (variant 5, see above).

Hint

[DATN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) is a newer dictionary type which represents a real date type in a database. [DATS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), by contrast, is an older dictionary type. It is instantiated on a database as a character-like field. [DATS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and [DATN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) are not interchangeable and a conversion is necessary to use certain functions.

Variant 8   

... DATS\_FROM\_DATN(date,on\_null)

Effect

The function DATS\_FROM\_DATN converts a date date from the built-in ABAP Dictionary data type [DATN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) to the built-in ABAP Dictionary type [DATS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm). It is the counterpart to variant 7.

The actual parameter for the formal parameter date must have the built-in data type [DATN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and must contain a valid date in the format YYYYMMDD. The same applies to the actual parameter on\_null as to the function TSTMPL\_FROM\_UTCL (variant 6, see above).

Hint

[DATN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) is a newer dictionary type which represents a real date type in a database. [DATS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), by contrast, is an older dictionary type. It is instantiated on a database as a character-like field. [DATS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and [DATN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) are not interchangeable and to use certain functions, a conversion is necessary.

Variant 9   

... TIMS\_TO\_TIMN(tims,on\_error)

Effect

The function TIMS\_TO\_TIMN converts a time tims from the ABAP Dictionary type [TIMS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) to the ABAP Dictionary type [TIMN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm).

The actual parameter for the formal parameter tims must have the built-in data type [TIMS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and contain a valid time in the format HHMMSS. The same applies to the actual parameter on\_error as to the function TSTMP\_TO\_DATS (variant 1, see above).

Hint

[TIMN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) is a newer dictionary type which represents a real date type in a database. [TIMS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), by contrast, is an older dictionary type. It is instantiated on a database as a character-like field. [TIMS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and [TIMN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) are not interchangeable and to use certain functions, a conversion is necessary.

Variant 10   

... TIMS\_FROM\_TIMN(time,on\_null)

Effect

The function TIMS\_FROM\_TIMN converts a time time from the ABAP Dictionary type [TIMN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) to the ABAP Dictionary type [TIMS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm). It is the counterpart to variant 9.

The actual parameter for the formal parameter time must have the built-in data type [TIMN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and contain a valid time in the format HHMMSS. The same applies to the actual parameter on\_null as to the function TSTMPL\_FROM\_UTCL (variant 6, see above).

Hint

[TIMN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) is a newer dictionary type which represents a real date type in a database. [TIMS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), by contrast, is an older dictionary type. It is instantiated on a database as a character-like field. [TIMS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and [TIMN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) are not interchangeable and to use certain functions, a conversion is necessary.

Example

In the following CDS view, the date, the time, and the daylight saving time marker of the current UTC time stamp are extracted using the conversion functions TSTMP\_TO\_DATS, TSTMP\_TO\_TIMS, and TSTMP\_TO\_DST. The values of the columns DATS1 and TIMS1 of the DDIC database table DEMO\_EXPRESSIONS are combined into a time stamp by the conversion function DATS\_TIMS\_TO\_TSTMP. The conversion functions described in variants 5 to 10 convert time stamps, dates, and times between different types. The program DEMO\_CDS\_DATE\_TIME accesses the view and displays the result.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_DATIM'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_date\_time
with parameters p\_tstmpl :abap\_channels\_timestamp\_long
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
                         'NULL' )  as dat\_tim,                      
      tstmpl\_to\_utcl( :p\_tstmpl, 'FAIL', 'INITIAL' )  
                                   as to\_utcl,
      tstmpl\_from\_utcl( utcl\_current( ), 'NULL' )            
                                   as from\_utcl,
      dats\_to\_datn( dats1, 'INITIAL', 'INITIAL' )
                                   as to\_datn,
      dats\_from\_datn( datn1, 'INITIAL' )  
                                   as from\_datn,
      tims\_to\_timn( tims1, 'NULL') as to\_timn,    
      tims\_from\_timn( timn1, 'INITIAL' )
                                   as from\_timn                          
    }