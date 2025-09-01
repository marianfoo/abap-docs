---
title: "CALL DATABASE PROCEDURE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_db_procedure_shortref.htm) Syntax CALL DATABASE PROCEDURE   proxy       CONNECTION con(con_syntax)  parameter_list(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_db_proc_param
version: "7.54"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_database_procedure.htm"
abapFile: "abapcall_database_procedure.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abapcall", "database", "procedure"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP and SAP HANA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_hana.htm) →  [Access to Objects in SAP HANA XS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_hana_access.htm) →  [Access to SAP HANA XSC Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_hana_access_xsc.htm) →  [Database Procedure Proxies for SQLScript Procedures in the SAP HANA Repository](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_script.htm) → 

CALL DATABASE PROCEDURE

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_db_procedure_shortref.htm)

Syntax

CALL DATABASE PROCEDURE
    *{*  proxy       *\[*CONNECTION con*|*(con\_syntax)*\]*  [parameter\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_db_proc_parameters.htm) *}*
  *|* *{* (proxy\_name) *\[*CONNECTION con*|*(con\_syntax)*\]* *{* [parameter\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_db_proc_parameters.htm)
                                                 *|*[parameter\_table*}*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_db_proc_parameter_tables.htm) *}*.

Addition:

[... CONNECTION con*|*(con\_syntax)](#!ABAP_ONE_ADD@1@)

Effect

This statement calls a [database procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_procedure_glosry.htm "Glossary Entry") written in [SQLScript](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_script_glosry.htm "Glossary Entry") ([SQLScript procedure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_script_procedure_glosry.htm "Glossary Entry")) on an [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry").

-   If the addition CONNECTION is not specified, the statement can only be executed in a system on the SAP HANA database.
    
-   If the addition CONNECTION is specified, the statement can be executed in every system with a [secondary connection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") to an SAP HANA database.
    

The SQLScript procedure is specified using a [database procedure proxy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_procedure_proxy.htm) defined for it. The proxy can be specified as follows:

-   proxy
    

Specified directly and statically as proxy.

-   (proxy\_name)
    

Specified as the uppercase content of a parenthesized character-like data object proxy\_name. The following can be specified for proxy\_name:

-   Literal or constants
    If the data object proxy\_name is specified as a character literal or as a constant, it can be evaluated statically and the specified proxy is identified as the used object.

-   Variable
    If the data object proxy\_name is specified as a variable, it is specified only dynamically and the content is not evaluated statically.

When the statement is executed, proxy\_name is not evaluated until runtime (in both cases).

The actual parameters for the input and output parameters of the procedure are either specified statically using [parameter\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_db_proc_parameters.htm) or dynamically using [parameter\_table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_db_proc_parameters.htm).

Notes

-   The names of the database procedure proxy and database procedure interface can be chosen at will. Usually, the database procedure interface has the name of the database procedure proxy with the prefix IF\_, and any additional [namespace prefix](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenname_space_prefix_glosry.htm "Glossary Entry").
    
-   The constant CALL\_DATABASE\_PROCEDURE of the class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_dbfeatures.htm) can be used to query the current database procedure proxies.
    
-   [ABAP Managed Database Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp.htm) (AMDP) are a recommended alternative to the statement CALL DATABASE PROCEDURE if the [standard AS ABAP database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_db_glosry.htm "Glossary Entry") is an SAP HANA database. From AMDP, any database procedures of the standard database can be called. This makes the use of database procedure proxies superfluous as long as a [secondary connection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") is not used to access another SAP HANA database.
    
-   No database procedure proxies can be used for SQLScript procedures in [SAP HANA XSA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenxsa_glosry.htm "Glossary Entry"). Alternative methods such as [AMDP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp.htm) or [ADBC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_glosry.htm "Glossary Entry") must be used instead.
    

Addition

... CONNECTION con*|*(con\_syntax)

Effect

The SQLScript procedure is not executed on the [standard connection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") but on the specified [secondary connection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") instead. The database connection can be specified statically with con or dynamically as the content of con\_syntax, where the field con\_syntax must belong to the type c or string. The database connection must be specified with a name from the column CON\_NAME in the table DBCON or that begins with the prefix R/3\* and hence represents a [service connection](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenservice_connection_glosry.htm "Glossary Entry") to the standard database.

Notes

-   The specified database procedure proxy for the database procedure of the secondary connection must exist in the current system.
    
-   Entries in the database table DBCON can only be created and modified using the [DBA Cockpit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendba_cockpit_glosry.htm "Glossary Entry") tool.
    
-   The use of CALL DATABASE PROCEDURE with the addition CONNECTION is recommended in all scenarios in which existing database procedures are used in an SAP HANA database that is not the current standard AS ABAP database (side-by-side scenario).
    

Example

SQLScript Procedure

Take the following SQLScript procedure:

/\*\*\*\*\*\*\*\*\* Begin Procedure Script \*\*\*\*\*\*\*\*\*\*\*\*/
BEGIN
  out\_items = select items.pos,
                     items.first\_name,
                     items.last\_name,
                     items.posting\_date as date,
                     items.currency,
                     items.amount
                from zngd\_items as items
                inner join :in\_sel as sel
                 on ( items.first\_name = sel.first\_name and
                      items.last\_name  = sel.last\_name )
               where posting\_date = :in\_date;
END;
/\*\*\*\*\*\*\*\*\* End Procedure Script \*\*\*\*\*\*\*\*\*\*\*\*/

The input parameters are:

Parameter

Database Type

in\_sel

Table data type

in\_date

Scalar

The components of in\_sel are:

Component

Database Type

FIRST\_NAME

NVARCHAR, length 20

LAST\_NAME

NVARCHAR, length 20

The output parameters are:

Parameter

Database Type

out\_items

Table data type

The components of out\_items are:

Component

Database Type

POS

INTEGER

FIRST\_NAME

NVARCHAR, length 20

LAST\_NAME

NVARCHAR, length 20

DATE

INTEGER

CURRENCY

NVARCHAR, length 4

AMOUNT

DECIMALS, length 11, scale 2

Database Procedure Proxy

The following mapping is defined in the associated database procedure proxy ...\_PROXY:

Procedure Parameter

ABAP Name

ABAP Data Type

IN\_SEL

IN\_SEL

Internal table

IN\_SEL, FIRST\_NAME

IN\_SEL, FIRST\_NAME

c, length 20

IN\_SEL, LAST\_NAME

IN\_SEL, LAST\_NAME

c, length 20

IN\_DATE

IN\_DATE

d

OUT\_ITEMS, POS

OUT\_ITEMS, POS

i

OUT\_ITEMS, FIRST\_NAME

OUT\_ITEMS, FIRST\_NAME

c, length 20

OUT\_ITEMS, LAST\_NAME

OUT\_ITEMS, LAST\_NAME

c, length 20

OUT\_ITEMS, DATA

OUT\_ITEMS, POSTING\_DATE

d

OUT\_ITEMS, CURRENCY

OUT\_ITEMS, CURRENCY

c, length 4

OUT\_ITEMS, AMOUNT

OUT\_ITEMS, AMOUNT

p, length 6, 2 decimal places

Note the name and type changes in the date fields.

Database Procedure Interface

The database procedure interface IF\_...\_PROXY is generated with the following type declarations:

INTERFACE if\_...\_proxy PUBLIC.
  TYPES: BEGIN OF in\_sel,
           first\_name     TYPE c LENGTH 20,
           last\_name      TYPE c LENGTH 20,
         END OF in\_sel.
  TYPES: in\_date          TYPE d.
  TYPES: BEGIN OF out\_items,
           pos  TYPE i,
           first\_name     TYPE c LENGTH 20,
           last\_name      TYPE c LENGTH 20,
           posting\_date   TYPE d,
           currency       TYPE c LENGTH 4,
           amount         TYPE p LENGTH 6 DECIMALS 2,
         END OF out\_items.
ENDINTERFACE.

Database Procedure Call

The following ABAP program section calls the SQLScript procedure using the name of the database procedure proxy; actual parameters typed using the database procedure interface are used.

DATA:
  in\_date   TYPE if\_...\_proxy=>in\_date,
  in\_sel    TYPE STANDARD TABLE
                 OF if\_...\_proxy=>in\_sel
                 WITH EMPTY KEY,
  out\_items TYPE STANDARD TABLE
                 OF if\_...\_proxy=>out\_items
                 WITH EMPTY KEY.
in\_date = '20120329'.
in\_sel = VALUE #( ( first\_name = 'Dolores'    last\_name = 'Oh' )
                  ( first\_name = 'Benjacomin' last\_name = 'Bozart' )
                  ( first\_name = 'Johanna'    last\_name = 'Gnade'   ) ).
IF cl\_abap\_dbfeatures=>use\_features(
      EXPORTING
        requested\_features =
          VALUE #( ( cl\_abap\_dbfeatures=>call\_database\_procedure ) ) ).
  CALL DATABASE PROCEDURE ...\_proxy
     EXPORTING in\_date   = in\_date
               in\_sel    = in\_sel
     IMPORTING out\_items = out\_items.
ENDIF.

Executable Example

The example [Database Procedure Call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_db_procedure_abexa.htm) uses a database procedure proxy created in the program to call a SQLScript procedure created using [ADBC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadbc_glosry.htm "Glossary Entry").

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

Except for CX\_SY\_DB\_PROCEDURE\_SQL\_ERROR, all the following exception classes are subclasses of the abstract superclass CX\_SY\_DB\_PROCEDURE\_CALL.

CX\_SY\_DB\_PROCEDURE\_SQL\_ERROR

-   Cause: Error on the database when executing an SQLScript function.
    Runtime error: DBPROC\_SQL\_ERROR
    

CX\_SY\_DB\_PROCEDURE\_CONNECTION

-   Cause: The specified secondary connection was not found in the database table DBCON.
    Runtime error: DBPROC\_CONNECTION
    

CX\_SY\_DB\_PROCEDURE\_NOT\_FOUND

-   Cause: The specified database procedure proxy does not exist.
    Runtime error: DBPROC\_PROXY\_NOT\_FOUND
    

CX\_SY\_DB\_PROCEDURE\_NOT\_SUPP

-   Cause: The database does not support SQLScript.
    Runtime error: CALL\_DATABASE\_NOT\_SUPPORTED
    

CX\_SY\_DB\_PROCEDURE\_OVERFLOW

-   Cause: The value range of a parameter was exceeded.
    Runtime error: DBPROC\_OVERFLOW
    

CX\_SY\_DB\_PROCEDURE\_PARAMETER

Cause: One of the following exceptions was raised (abstract superclass).

-   CX\_SY\_DB\_PROCEDURE\_DYN\_IN\_OUT
    

Cause: Input and output parameters were switched in the dynamic call.
Runtime error: DBPROC\_DYNAMIC\_IN\_OUT1, DBPROC\_DYNAMIC\_IN\_OUT2

-   CX\_SY\_DB\_PROCEDURE\_DYN\_MISSING
    

Cause: Actual parameter missing for a formal parameter in a dynamic call.
Runtime error: DBPROC\_DYNAMIC\_MISSING

-   CX\_SY\_DB\_PROCEDURE\_DYN\_NOT\_FND
    

Cause: Formal parameter specified incorrectly in a dynamic call.
Runtime error: DBPROC\_DYNAMIC\_NOT\_FOUND

-   CX\_SY\_DB\_PROCEDURE\_TYPE\_ERROR
    

Cause: Invalid type of an actual parameter in static or dynamic call.
Runtime error: DBPROC\_ILLEGAL\_TYPE, DBPROC\_DYNAMIC\_NO\_SCALAR, DBPROC\_DYNAMIC\_NO\_TABLE

Non-Handleable Exceptions

-   Cause: The column KIND of the parameter table ptab contains an invalid value.
    Runtime error: DBPROC\_DYNAMIC\_UNKNOWN\_KIND
    
-   Cause: The column KIND of the parameter table ptab contains the value "C" for input/output parameters. This is not yet supported.
    Runtime error: DBPROC\_DYNAMIC\_NO\_INOUT
    
-   Cause: The actual parameter associated with an output parameter cannot be modified.
    Runtime error: DBPROC\_OUT\_NOT\_WRITABLE
    

Continue
[CALL DATABASE PROCEDURE - parameter\_list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_db_proc_parameters.htm)
[CALL DATABASE PROCEDURE - parameter\_table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_db_proc_parameter_tables.htm)
![Example](exa.gif "Example") [SAP HANA, Database Procedure Proxy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_db_procedure_abexa.htm)