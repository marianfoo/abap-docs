# ABAP Keyword Documentation / ABAP - Security Notes / Security Risks Caused by Input from Outside / SQL Injections

Included pages: 6


### abensql_injections_scrty.htm

---
title: "SQL Injections"
description: |
  An SQL injection(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_injection_glosry.htm 'Glossary Entry') is a widely used attack method on insufficiently secure input from outside. An SQL injection passes malicious SQL code injected into a program to the database system, unchecke
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_injections_scrty.htm"
abapFile: "abensql_injections_scrty.htm"
keywords: ["do", "if", "try", "method", "data", "abensql", "injections", "scrty"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_programming_scrty.htm) → 

SQL Injections

An [SQL injection](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_injection_glosry.htm "Glossary Entry") is a widely used attack method on insufficiently secure input from outside. An SQL injection passes malicious SQL code injected into a program to the database system, unchecked and unmasked. In ABAP, this can occur when the following programming techniques are used:

-   [Dynamically specified tokens in ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_dyn_tokens_scrty.htm)

-   [Using ADBC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_adbc_scrty.htm)

-   [Using AMDP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_amdp_scrty.htm)

-   [Using Object Services](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_os_query_scrty.htm)

-   [Generic Programming](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_gen_prog_scrty.htm)

Continue
[SQL Injections Using Dynamic Tokens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_dyn_tokens_scrty.htm)
[SQL Injections Using ADBC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_adbc_scrty.htm)
[SQL Injections Using AMDP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_amdp_scrty.htm)
[SQL Injections Using Object Services](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_os_query_scrty.htm)
[SQL Injections Using Generic Programming](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_gen_prog_scrty.htm)


### abensql_inj_dyn_tokens_scrty.htm

---
title: "SQL Injections Using Dynamic Tokens"
description: |
  The ABAP SQL(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm 'Glossary Entry') syntax allows almost every clause of an ABAP SQL statement to be specified dynamically as the content of a data object specified in parentheses. If all of part of the content of one of
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_dyn_tokens_scrty.htm"
abapFile: "abensql_inj_dyn_tokens_scrty.htm"
keywords: ["select", "update", "do", "if", "try", "catch", "method", "class", "data", "abensql", "inj", "dyn", "tokens", "scrty"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_programming_scrty.htm) →  [SQL Injections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_injections_scrty.htm) → 

SQL Injections Using Dynamic Tokens

The [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") syntax allows almost every clause of an ABAP SQL statement to be specified dynamically as the content of a data object specified in parentheses. If all of part of the content of one of these data objects originates from outside of the program, there is a risk of one of the following SQL injections:

-   [Access to Non-Permitted Database Tables](#abensql-inj-dyn-tokens-scrty-1--------access-to-non-permitted-table-columns---@ITOC@@ABENSQL_INJ_DYN_TOKENS_SCRTY_2)

-   [Manipulation of the Dynamic WHERE Condition](#abensql-inj-dyn-tokens-scrty-3--------manipulation-of-a-dynamic-change-expression---@ITOC@@ABENSQL_INJ_DYN_TOKENS_SCRTY_4)

Note

In a dynamic token, it is more secure to specify the name of an ABAP data object as an operand, instead of entering a value as a literal.

Example

The first dynamic WHERE condition is insecure compared to an SQL injection, if input is an external input, which is not checked or masked beforehand. This is not necessary for the second dynamic WHERE condition.

DATA(sql\_cond1) = \`CARRID = '\` && input && \`'\`.
SELECT SINGLE \* FROM scarr WHERE (sql\_cond1) INTO @wa.
DATA(sql\_cond2) = \`CARRID = @input\`.
SELECT SINGLE \* FROM scarr WHERE (sql\_cond2) INTO @wa.

Access to Non-Permitted Database Tables

If dynamically specified database tables [source\_syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) (for the statement [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) or target\_syntax for [writes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_writing.htm)) originate in full or in part from outside the program, users could potentially access databases for which they usually do not have authorization. If the use of external input in dynamically specified database tables is unavoidable, the input must be properly checked. For example, the class CL\_ABAP\_DYN\_PRG can be used to make a comparison with a whitelist.

Example

In the following program section, the method CHECK\_TABLE\_NAME\_STR only allows access to tables of the flight data model. Input from other or nonexistent database tables are rejected. Access to oversized database tables is also not allowed, to avoid putting too much strain on system performance.

DATA dbtab TYPE string.
cl\_demo\_input=>request( CHANGING field = dbtab ).
TRY.
    dbtab =
      cl\_abap\_dyn\_prg=>check\_table\_name\_str(
        val = to\_upper( dbtab )
        packages = 'SAPBC\_DATAMODEL' ).
  CATCH cx\_abap\_not\_a\_table cx\_abap\_not\_in\_package.
    cl\_demo\_output=>display( 'Wrong input' ).
    LEAVE PROGRAM.
ENDTRY.
DATA dref TYPE REF TO data.
FIELD-SYMBOLS <fs> TYPE STANDARD TABLE.
CREATE DATA dref TYPE STANDARD TABLE OF (dbtab)
                 WITH EMPTY KEY.
ASSIGN dref->\* TO <fs>.
DATA lines TYPE i.
SELECT COUNT(\*)
       FROM (dbtab)
       INTO (@lines).
IF lines > 1000.
  cl\_demo\_output=>display( 'Table too large' ).
  LEAVE PROGRAM.
ENDIF.
SELECT \*
       FROM (dbtab)
       INTO TABLE @<fs>.
cl\_demo\_output=>display( <fs> ).

Access to Non-Permitted Table Columns

If the dynamically specified table columns column\_syntax in the [SELECT list](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm) of the statement [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) originate fully or in part from outside the program, users could potentially access table columns for which they usually do not have authorization. Users could also rename columns without permission or use aggregate functions to perform unauthorized calculations. If the use of external input in a dynamically specified table columns is unavoidable, the input must be properly checked. For example, the class CL\_ABAP\_DYN\_PRG can be used to make a comparison with a whitelist.

Note

When specifying columns after [GROUP BY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm), the same security advice applies as to columns specified dynamically directly after SELECT.

Example

See the example in [column \_syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_list.htm). Here only columns from a whitelist are permitted to be read.

Manipulation of the Dynamic WHERE Condition

If a dynamic WHERE condition [cond\_syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_dynamic.htm) originates completely or partially from outside the program, then users could potentially access data for which they usually do not have authorization. If the use of external input in a dynamic WHERE condition cannot be avoided, the input must be properly checked and usually masked as well. To do this, you can sue the methods of class CL\_ABAP\_DYN\_PRG.

Note

When dynamically specifying a [HAVING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaphaving_clause.htm) condition, the same security advice applies as for the dynamic WHERE condition.

Example

In the following program section, a potential SQL injection is prevented by using the method QUOTE of the class CL\_ABAP\_DYN\_PRG, which adds quotation marks at the beginning and end. If this method is not used, and if "x' OR name <> '" is entered, for example, all the data in the SCUSTOM table would be displayed.

DATA name TYPE string.
DATA customers TYPE TABLE OF scustom WITH EMPTY KEY.
cl\_demo\_input=>request( CHANGING field = name ).
DATA(cond) = \`country = 'DE' AND name = \` &&
             cl\_abap\_dyn\_prg=>quote( name ).
TRY.
    SELECT \* FROM scustom
             WHERE (cond)
             INTO TABLE @customers.
    cl\_demo\_output=>display( customers ).
  CATCH cx\_sy\_dynamic\_osql\_syntax.
    cl\_demo\_output=>display( 'Wrong input' ).
ENDTRY.

More examples under [dynamic WHERE condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_dynamic.htm).

Manipulation of a Dynamic Change Expression

If a dynamic change expression [expr\_syntax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate_set_expression.htm) (for the statement [UPDATE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapupdate.htm)) originates completely or partially from outside the program, then users could potentially change data for which they usually do not have authorization. If the use of external input in a dynamic change expression cannot be avoided, the input must be properly checked and usually masked as well. To do this, you can sue the methods of class CL\_ABAP\_DYN\_PRG.

Example

In the following program section, a potential SQL injection is prevented by using the method QUOTE of the class CL\_ABAP\_DYN\_PRG, which adds quotation marks at the beginning and end. If this method is not used, and if "...' discount = '90", for example, is entered in one of the input fields, the discount for the relevant customer would be set to 90.

DATA in TYPE REF TO if\_demo\_input.
DATA customer TYPE scustom.
DATA: id TYPE scustom-id,
      name     TYPE string,
      street   TYPE string,
      city     TYPE string,
      postcode TYPE string.
id = '00000001'.
SELECT SINGLE \*
       FROM scustom
       WHERE id = @id
       INTO @customer.
name    = customer-name.
street  = customer-street.
city    = customer-city.
postcode = customer-postcode.
in = cl\_demo\_input=>new( ).
in->add\_field( CHANGING field = name
)->add\_field( CHANGING field = street
)->add\_field( CHANGING field = city
)->add\_field( CHANGING field = postcode
)->request( ).
DATA(set\_expr) =
  COND string( WHEN name IS NOT INITIAL
               THEN \` NAME = \` &&
               cl\_abap\_dyn\_prg=>quote( name ) ) &&
  COND string( WHEN street IS NOT INITIAL
               THEN \` STREET = \`   &&
               cl\_abap\_dyn\_prg=>quote( street ) ) &&
  COND string( WHEN city IS NOT INITIAL
               THEN \` CITY = \` &&
               cl\_abap\_dyn\_prg=>quote( city ) ) &&
  COND string( WHEN postcode IS NOT INITIAL
               THEN \` POSTCODE = \` &&
               cl\_abap\_dyn\_prg=>quote( postcode ) ).
TRY.
    UPDATE scustom SET (set\_expr) WHERE id = @id.
  CATCH cx\_sy\_dynamic\_osql\_syntax.
    cl\_demo\_output=>display( 'Wrong input' ).
ENDTRY.


### abensql_inj_adbc_scrty.htm

---
title: "SQL Injections Using ADBC"
description: |
  When ADBC(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc_glosry.htm 'Glossary Entry') is used, SQL statements are passed as strings to objects of class ADBC and then passed on to the database system. If all of part of one of these SQL statements originates from outside of the
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_adbc_scrty.htm"
abapFile: "abensql_inj_adbc_scrty.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "abensql", "inj", "adbc", "scrty"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_programming_scrty.htm) →  [SQL Injections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_injections_scrty.htm) → 

SQL Injections Using ADBC

When [ADBC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc_glosry.htm "Glossary Entry") is used, SQL statements are passed as strings to objects of class ADBC and then passed on to the database system. If all of part of one of these SQL statements originates from outside of the program, there is a risk of an SQL injection.

To prevent SQL Injections, make sure that SQL statements passed to ADBC contain as few parts as possible that originate from outside of the program. If the statements do contain parts from outside the program, the contents of these parts should not be chained to the SQL statement. Instead these contents should be addressed using the ? placeholder and the associated SET\_PARAM methods. If this is not possible, the parts from outside must be checked using the CL\_ABAP\_DYN\_PRG class and masked if necessary.

Example

In the following program section, the key value key (entered from outside ) is chained to the SQL statement. It must therefore be masked using the method QUOTE (which also adds quotation marks at the start and at the end), to prevent SQL injections.

DATA key TYPE string.
cl\_demo\_input=>request( CHANGING field = key ).
TRY.
    DATA(result) = NEW cl\_sql\_statement( )->execute\_query(
          \`SELECT carrname \` &&
          \`FROM scarr \` &&
          \`WHERE mandt  = \` && \`'\` && sy-mandt && \`' AND\` &&
          \`      carrid = \` &&
          cl\_abap\_dyn\_prg=>quote( to\_upper( key ) ) ).
    DATA name TYPE scarr-carrname.
    result->set\_param( REF #( name ) ).
    result->next( ).
    cl\_demo\_output=>display( name ).
  CATCH cx\_sql\_exception INTO DATA(err).
    cl\_demo\_output=>display( err->get\_text( ) ).
ENDTRY.

Example

In this example, the same functionality is used as in the previous example. Here it is not necessary to mask the value, because the input is connected to a parameter (and not chained).

DATA key TYPE string.
cl\_demo\_input=>request( CHANGING field = key ).
TRY.
    DATA(sql) = NEW cl\_sql\_statement( ).
    sql->set\_param( REF #( sy-mandt ) ).
    sql->set\_param( REF #( key ) ).
    DATA(result) = sql->execute\_query(
          \`SELECT carrname \` &&
          \`FROM scarr \` &&
          \`WHERE mandt  = ? AND carrid = ?\` ).
    DATA name TYPE scarr-carrname.
    result->set\_param( REF #( name ) ).
    result->next( ).
    cl\_demo\_output=>display( name ).
  CATCH cx\_sql\_exception INTO DATA(err).
    cl\_demo\_output=>display( err->get\_text( ) ).
ENDTRY.


### abensql_inj_amdp_scrty.htm

---
title: "SQL Injections Using AMDP"
description: |
  When AMDP(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_glosry.htm 'Glossary Entry') is used, database procedures are created and called that are currently usually implemented in SQLScript(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_script_glosry.htm
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_amdp_scrty.htm"
abapFile: "abensql_inj_amdp_scrty.htm"
keywords: ["select", "update", "do", "if", "case", "try", "catch", "method", "class", "data", "abensql", "inj", "amdp", "scrty"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_programming_scrty.htm) →  [SQL Injections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_injections_scrty.htm) → 

SQL Injections Using AMDP

When [AMDP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_glosry.htm "Glossary Entry") is used, database procedures are created and called that are currently usually implemented in [SQLScript](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_script_glosry.htm "Glossary Entry") for the [SAP HANA database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhana_database_glosry.htm "Glossary Entry"). The implementation of the database procedures in AMDP methods is managed by ABAP, but their content and security is not ABAP's responsibility. Risks are incurred whenever a database procedure contains dynamic parts or whenever it calls further database procedures whose functions are unknown in ABAP and cannot be checked there.

There are currently no test tools available for checking the security of the implementation of a AMDP methods. Developers of AMDP methods are themselves responsible for their security, with dual control (Code Inspections) being a useful principle here. This is partly why the use of dynamic programming techniques is strongly [discouraged](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp.htm). In cases where AMDP methods do contain dynamic parts that could produce SQL injections when combined with input from outside, they must be flagged accordingly to allow the caller to implement any checks needed.

Implementations of [AMDP methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_method_glosry.htm "Glossary Entry") are not currently supported by ABAP test tools, which means the caller of a method is responsible for ensuring that only non-malicious content is passed to it. If the implementation of an AMDP method contains dynamic parts into which formal parameters are injected, no input from outside can be passed to these parameters that is not checked or escaped appropriately, to avoid SQL injections.

Note

The statements about AMDP made here apply in principle to all places in which implementations made in other programming languages are called from ABAP.

Example

An AMDP method is implemented as follows:

CLASS cl\_dyn\_amdp IMPLEMENTATION.
  METHOD increase\_seatsocc BY DATABASE PROCEDURE FOR HDB
                           LANGUAGE SQLSCRIPT.
    EXEC 'UPDATE sflight SET seatsocc = seatsocc + ' || :seats;
  ENDMETHOD.
ENDCLASS.

This method uses the SQLScript statement EXEC in the [SAP HANA database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhana_database_glosry.htm "Glossary Entry") to execute an SQL statement specified as a character string into which the input parameter seats is merged. A method like this should be classified as a potential risk, since the input parameter is not checked. If possible, an input check should be implemented in SQLScript directly before the statement EXEC is executed.

If the method is delivered without an appropriate check and the caller wants to pass value entered outside to it, the validity of the value must be checked first. In the case in question, only integers can be passed, which can be verified using the method CHECK\_INT\_VALUE of the class CL\_ABAP\_DYN\_PRG in calls from ABAP. If not, input such as 2, seatsmax = seatsmax + 10 would be possible, which would change the column SEATSMAX and not just the column SEATSOCC.

DATA seats TYPE string.
cl\_demo\_input=>request( CHANGING field = seats ).
TRY.
    NEW cl\_dyn\_amdp( )->increase\_seatsocc(
      seats = |{ cl\_abap\_dyn\_prg=>check\_int\_value( seats ) }| ).
  CATCH cx\_abap\_not\_an\_integer INTO DATA(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
ENDTRY.

Example

An AMDP method is implemented as follows:

CLASS cl\_dyn\_amdp IMPLEMENTATION.
  METHOD get\_flights BY DATABASE PROCEDURE FOR HDB
                        LANGUAGE SQLSCRIPT
                        USING spfli.
    flights = SELECT \* FROM SPFLI WHERE mandt = :mandt;
    flights = APPLY\_FILTER(:flights, :filter);
  ENDMETHOD.
ENDCLASS.

This method uses the SQLScript statement APPLY\_FILTER in the [SAP HANA database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhana_database_glosry.htm "Glossary Entry"), which sets a dynamic condition on a results set. This statement can also produce SQL injections when combined with input from outside if the input is not validated appropriately. As used in ABAP, methods of the class CL\_ABAP\_DYN\_PRG can validate this input..

DATA column TYPE string.
cl\_demo\_input=>add\_field( CHANGING field = column ).
DATA value TYPE string.
cl\_demo\_input=>request( CHANGING field = value ).
TRY.
    DATA(filter) = cl\_abap\_dyn\_prg=>check\_column\_name( column ) &&
                   \` = \` &&
                   cl\_abap\_dyn\_prg=>quote( value ).
    NEW cl\_dyn\_amdp( )->get\_flights( EXPORTING mandt = sy-mandt
                                              filter = filter
                                   IMPORTING flights = DATA(result) ).
  CATCH cx\_abap\_invalid\_name cx\_amdp\_execution\_failed INTO DATA(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
ENDTRY.


### abensql_inj_os_query_scrty.htm

---
title: "SQL Injections Using Object Services"
description: |
  Filter conditions(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenos_query_filter_cond.htm) are passed to a query as character strings in the query service(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_service_glosry.htm 'Glossary Entry') in the Object Serv
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_os_query_scrty.htm"
abapFile: "abensql_inj_os_query_scrty.htm"
keywords: ["do", "if", "try", "class", "data", "abensql", "inj", "query", "scrty"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_programming_scrty.htm) →  [SQL Injections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_injections_scrty.htm) → 

SQL Injections Using Object Services

[Filter conditions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenos_query_filter_cond.htm) are passed to a query as character strings in the [query service](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_service_glosry.htm "Glossary Entry") in the [Object Services](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobject_services_glosry.htm "Glossary Entry"). If a filter condition like this (or part of it) originates outside the program, the same risk of an SQL injection is incurred as when a dynamic WHERE condition is manipulated in [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_dyn_tokens_scrty.htm). To prevent SQL injections of this nature, either parameters from a parameter list or must be used or parts escaped using the class CL\_ABAP\_DYN\_PRG.

Example

The executable example [DEMO\_QUERY\_SERVICE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenos_query_abexa.htm) is secure, since the interactive input is passed to the query using parameter bindings. If the source code after the statement TRY is replaced as follows, however, SQL injections are possible:

TRY.
    query\_manager = cl\_os\_system=>get\_query\_manager( ).
    query = query\_manager->create\_query(
              i\_filter  = \`AIRPFROM = '\` &&  airpfrom  &&
                           \`' AND AIRPTO = '\` && airpto  && \`'\` ).
    connections =
      agent->if\_os\_ca\_persistency~get\_persistent\_by\_query(
               i\_query = query ).
    ...

If airpfrom and airpto contain the values "FRA' OR AIRPFROM <> '" and "SIN' OR AIRPTO <> '", for example, all existing data is read. If no parameter bindings are used, therefore, airpfrom and airpto must be escaped.

   query = query\_manager->create\_query(
      i\_filter  = \`AIRPFROM = \` &&
                  cl\_abap\_dyn\_prg=>quote( airpfrom ) &&
                  \`  AND AIRPTO = \` &&
                  cl\_abap\_dyn\_prg=>quote( airpto ) ).


### abensql_inj_gen_prog_scrty.htm

---
title: "SQL Injections Using Generic Programming"
description: |
  Generic programming is the most unsafe of all dynamic programming techniques. In principle, the ABAP command injections(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneric_prog_scrty.htm) cover all individual security risks that can occur in dynamic programming, and most signifi
version: "7.53"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_gen_prog_scrty.htm"
abapFile: "abensql_inj_gen_prog_scrty.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "abensql", "inj", "gen", "prog", "scrty"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_programming_scrty.htm) →  [SQL Injections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_injections_scrty.htm) → 

SQL Injections Using Generic Programming

Generic programming is the most unsafe of all dynamic programming techniques. In principle, the [ABAP command injections](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneric_prog_scrty.htm) cover all individual security risks that can occur in dynamic programming, and most significantly SQL injections. The more generic the programming, the more difficult it is to prevent SQL injections from exploiting input that originates outside the program.

Example

The following program section demonstrates [static embedded of Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennativesql.htm) in a program generated using [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgenerate_subroutine_pool.htm). Before [ADBC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadbc_glosry.htm "Glossary Entry") was introduced, this was the only way of creating dynamic parts in [Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql_glosry.htm "Glossary Entry"). In the case in question, the input key must be escaped using the method ESCAPE\_QUOTES of the class CL\_ABAP\_DYN\_PRG to prevent SQL injections. In a more realistic example, of course, [host variables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexec_host.htm) would be the preferred method.

DATA source TYPE TABLE OF string WITH EMPTY KEY.
source = VALUE #(
  ( \`PROGRAM.\` )
  ( \`FORM exec\_sql CHANGING name TYPE string.\` )
  ( \`  EXEC SQL.\` )
  ( \`    SELECT carrname\` )
  ( \`           INTO :name\` )
  ( \`           FROM scarr\` )
  ( \`           WHERE mandt  = 'sy-mandt' AND\` )
  ( \`                 carrid = 'key'\` )
  ( \`  ENDEXEC.\` )
  ( \`ENDFORM.\`                                ) ).
DATA key TYPE string.
cl\_demo\_input=>request( CHANGING field = key ).
REPLACE \`sy-mandt\` IN TABLE source WITH sy-mandt.
REPLACE \`key\` IN TABLE source
              WITH cl\_abap\_dyn\_prg=>escape\_quotes( to\_upper( key ) ).
DATA name TYPE string.
GENERATE SUBROUTINE POOL source NAME DATA(pool).
IF sy-subrc = 0.
  PERFORM exec\_sql IN PROGRAM (pool) CHANGING name.
ENDIF.
cl\_demo\_output=>display( name ).
