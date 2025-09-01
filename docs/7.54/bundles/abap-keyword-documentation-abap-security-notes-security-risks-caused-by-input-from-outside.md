# ABAP Keyword Documentation / ABAP - Security Notes / Security Risks Caused by Input from Outside

Included pages: 13



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abendynamic_programming_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynamic_programming_scrty.htm)
- [abensql_injections_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_injections_scrty.htm)
- [abensql_inj_dyn_tokens_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_inj_dyn_tokens_scrty.htm)
- [abensql_inj_adbc_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_inj_adbc_scrty.htm)
- [abensql_inj_amdp_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_inj_amdp_scrty.htm)
- [abensql_inj_os_query_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_inj_os_query_scrty.htm)
- [abensql_inj_gen_prog_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_inj_gen_prog_scrty.htm)
- [abendyn_call_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendyn_call_scrty.htm)
- [abendyn_file_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendyn_file_scrty.htm)
- [abensys_comm_injections_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensys_comm_injections_scrty.htm)
- [abenxss_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenxss_scrty.htm)
- [abengeneric_prog_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneric_prog_scrty.htm)

**Bundle Contains**: 12 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:46.001Z

---

### abendynamic_programming_scrty.htm

> **📖 Official SAP Documentation**: [abendynamic_programming_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynamic_programming_scrty.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) → 

Security Risks Caused by Input from Outside

Most security issues in ABAP programs are caused by because input injected into a program from outside, that is

-   from a user interface

-   from a parameter interface

-   from a persistent repository,

is used wrongly or carelessly. More specifically, security risks arise here whenever full statements, parts of statements, or objects accessed in statements are specified dynamically and hence are not subject to static checks. Dynamically specified items of this nature occur, for example, in the following cases:

-   Dynamically specified objects are anchored in the syntax of a statement in a natural way. For example, file names specified dynamically using a variable in a statement from the [ABAP file interface](javascript:call_link\('abenfile_interface_glosry.htm'\) "Glossary Entry") are the norm, and not exceptions .

-   Frameworks are fully dynamic (for example [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry")) if they use dynamic SQL statements only.

-   Here, information is specified dynamically to make the programming of functions more compact than if they were programmed statically (perhaps due to a large number of case distinctions).

Two main cases must be distinguished here:

-   The dynamic information is created in full in the same program and does not contain any parts that originate outside the program.

-   Some or all of the dynamically created information originates outside the program, meaning that it is taking from a UI, a parameter interface, or a repository.

If assuming that the developer of a program does so without malicious intent, dynamically specified objects are uncritical in the former case.

The latter case, on the other hand, is critical. If external input is specified dynamically in an ABAP statement without being checked or masked, damage can be incurred (whether unintentional or malicious). The damage can range from exceptions being raised, the absence of system resources (Denial of Service attacks), to the manipulation of persistent data.

The following sections provide examples of the most significant security risks when input from outside is used in statements:

-   [SQL injections](javascript:call_link\('abensql_injections_scrty.htm'\))

-   [Dynamic calls](javascript:call_link\('abendyn_call_scrty.htm'\))

-   [Directory traversal](javascript:call_link\('abendyn_file_scrty.htm'\))

-   [System command injections](javascript:call_link\('abensys_comm_injections_scrty.htm'\))

-   [Cross site scripting](javascript:call_link\('abenxss_scrty.htm'\))

-   [ABAP command injections](javascript:call_link\('abengeneric_prog_scrty.htm'\))

The global principle in these sections of always checking and/or masking external input also applies in all cases not listed separately here, such as using a dynamic [WHERE](javascript:call_link\('abaploop_at_itab_cond.htm'\)) condition when accessing internal tables.

Note

Back doors, implemented by malicious developers using dynamically specified information, are not discussed here. These cannot be checked statically, since they do not originate outside the program, and are not usually classified as dangerous by static checks. The two-man rule code inspections are probably the only solution here. See also [Obscuring ABAP Source Code](javascript:call_link\('abenobscure_code_scrty.htm'\)).

Continue
[SQL Injections](javascript:call_link\('abensql_injections_scrty.htm'\))
[Dynamic Calls](javascript:call_link\('abendyn_call_scrty.htm'\))
[Directory Traversal](javascript:call_link\('abendyn_file_scrty.htm'\))
[System Command Injections](javascript:call_link\('abensys_comm_injections_scrty.htm'\))
[Cross Site Scripting](javascript:call_link\('abenxss_scrty.htm'\))
[ABAP Command Injections](javascript:call_link\('abengeneric_prog_scrty.htm'\))



**📖 Source**: [abendynamic_programming_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynamic_programming_scrty.htm)

### abensql_injections_scrty.htm

> **📖 Official SAP Documentation**: [abensql_injections_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_injections_scrty.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)) → 

SQL Injections

An [SQL injection](javascript:call_link\('abensql_injection_glosry.htm'\) "Glossary Entry") is a widely used attack method on insufficiently secure input from outside. An SQL injection passes malicious SQL code injected into a program to the database system, unchecked and unmasked. In ABAP, this can occur when the following programming techniques are used:

-   [Dynamically specified tokens in ABAP SQL](javascript:call_link\('abensql_inj_dyn_tokens_scrty.htm'\))

-   [Using ADBC](javascript:call_link\('abensql_inj_adbc_scrty.htm'\))

-   [Using AMDP](javascript:call_link\('abensql_inj_amdp_scrty.htm'\))

-   [Using Object Services](javascript:call_link\('abensql_inj_os_query_scrty.htm'\))

-   [Generic Programming](javascript:call_link\('abensql_inj_gen_prog_scrty.htm'\))

Continue
[SQL Injections Using Dynamic Tokens](javascript:call_link\('abensql_inj_dyn_tokens_scrty.htm'\))
[SQL Injections Using ADBC](javascript:call_link\('abensql_inj_adbc_scrty.htm'\))
[SQL Injections Using AMDP](javascript:call_link\('abensql_inj_amdp_scrty.htm'\))
[SQL Injections Using Object Services](javascript:call_link\('abensql_inj_os_query_scrty.htm'\))
[SQL Injections Using Generic Programming](javascript:call_link\('abensql_inj_gen_prog_scrty.htm'\))



**📖 Source**: [abensql_injections_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_injections_scrty.htm)

### abensql_inj_dyn_tokens_scrty.htm

> **📖 Official SAP Documentation**: [abensql_inj_dyn_tokens_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_inj_dyn_tokens_scrty.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)) →  [SQL Injections](javascript:call_link\('abensql_injections_scrty.htm'\)) → 

SQL Injections Using Dynamic Tokens

The [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") syntax allows almost every clause of an ABAP SQL statement to be specified dynamically as the content of a data object specified in parentheses. If all of part of the content of one of these data objects originates from outside of the program, there is a risk of one of the following SQL injections:

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

If dynamically specified database tables [source\_syntax](javascript:call_link\('abapfrom_clause.htm'\)) (for the statement [SELECT](javascript:call_link\('abapselect.htm'\)) or target\_syntax for [writes](javascript:call_link\('abenopen_sql_writing.htm'\))) originate in full or in part from outside the program, users could potentially access databases for which they usually do not have authorization. If the use of external input in dynamically specified database tables is unavoidable, the input must be properly checked. For example, the class CL\_ABAP\_DYN\_PRG can be used to make a comparison with a whitelist.

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

If the dynamically specified table columns column\_syntax in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)) of the statement [SELECT](javascript:call_link\('abapselect.htm'\)) originate fully or in part from outside the program, users could potentially access table columns for which they usually do not have authorization. Users could also rename columns without permission or use aggregate functions to perform unauthorized calculations. If the use of external input in a dynamically specified table columns is unavoidable, the input must be properly checked. For example, the class CL\_ABAP\_DYN\_PRG can be used to make a comparison with a whitelist.

Note

When specifying columns after [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)), the same security advice applies as to columns specified dynamically directly after SELECT.

Example

See the example in [column \_syntax](javascript:call_link\('abapselect_list.htm'\)). Here only columns from a whitelist are permitted to be read.

Manipulation of the Dynamic WHERE Condition

If a dynamic WHERE condition [cond\_syntax](javascript:call_link\('abenwhere_logexp_dynamic.htm'\)) originates completely or partially from outside the program, then users could potentially access data for which they usually do not have authorization. If the use of external input in a dynamic WHERE condition cannot be avoided, the input must be properly checked and usually masked as well. To do this, you can sue the methods of class CL\_ABAP\_DYN\_PRG.

Note

When dynamically specifying a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) condition, the same security advice applies as for the dynamic WHERE condition.

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

More examples under [dynamic WHERE condition](javascript:call_link\('abenwhere_logexp_dynamic.htm'\)).

Manipulation of a Dynamic Change Expression

If a dynamic change expression [expr\_syntax](javascript:call_link\('abapupdate_set_expression.htm'\)) (for the statement [UPDATE](javascript:call_link\('abapupdate.htm'\))) originates completely or partially from outside the program, then users could potentially change data for which they usually do not have authorization. If the use of external input in a dynamic change expression cannot be avoided, the input must be properly checked and usually masked as well. To do this, you can sue the methods of class CL\_ABAP\_DYN\_PRG.

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



**📖 Source**: [abensql_inj_dyn_tokens_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_inj_dyn_tokens_scrty.htm)

### abensql_inj_adbc_scrty.htm

> **📖 Official SAP Documentation**: [abensql_inj_adbc_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_inj_adbc_scrty.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)) →  [SQL Injections](javascript:call_link\('abensql_injections_scrty.htm'\)) → 

SQL Injections Using ADBC

When [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") is used, SQL statements are passed as strings to objects of class ADBC and then passed on to the database system. If all of part of one of these SQL statements originates from outside of the program, there is a risk of an SQL injection.

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



**📖 Source**: [abensql_inj_adbc_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_inj_adbc_scrty.htm)

### abensql_inj_amdp_scrty.htm

> **📖 Official SAP Documentation**: [abensql_inj_amdp_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_inj_amdp_scrty.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)) →  [SQL Injections](javascript:call_link\('abensql_injections_scrty.htm'\)) → 

SQL Injections Using AMDP

When [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") is used, database procedures are created and called that are currently usually implemented in [SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry") for the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). The implementation of the database procedures in AMDP methods is managed by ABAP, but their content and security is not ABAP's responsibility. Risks are incurred whenever a database procedure contains dynamic parts or whenever it calls further database procedures whose functions are unknown in ABAP and cannot be checked there.

There are currently no test tools available for checking the security of the implementation of a AMDP methods. Developers of AMDP methods are themselves responsible for their security, with dual control (Code Inspections) being a useful principle here. This is partly why the use of dynamic programming techniques is strongly [discouraged](javascript:call_link\('abenamdp.htm'\)). In cases where AMDP methods do contain dynamic parts that could produce SQL injections when combined with input from outside, they must be flagged accordingly to allow the caller to implement any checks needed.

Implementations of [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") are not currently supported by ABAP test tools, which means the caller of a method is responsible for ensuring that only non-malicious content is passed to it. If the implementation of an AMDP method contains dynamic parts into which formal parameters are injected, no input from outside can be passed to these parameters that is not checked or escaped appropriately, to avoid SQL injections.

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

This method uses the SQLScript statement EXEC in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") to execute an SQL statement specified as a character string into which the input parameter seats is merged. A method like this should be classified as a potential risk, since the input parameter is not checked. If possible, an input check should be implemented in SQLScript directly before the statement EXEC is executed.

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

This method uses the SQLScript statement APPLY\_FILTER in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), which sets a dynamic condition on a results set. This statement can also produce SQL injections when combined with input from outside if the input is not validated appropriately. As used in ABAP, methods of the class CL\_ABAP\_DYN\_PRG can validate this input..

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



**📖 Source**: [abensql_inj_amdp_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_inj_amdp_scrty.htm)

### abensql_inj_os_query_scrty.htm

> **📖 Official SAP Documentation**: [abensql_inj_os_query_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_inj_os_query_scrty.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)) →  [SQL Injections](javascript:call_link\('abensql_injections_scrty.htm'\)) → 

SQL Injections Using Object Services

[Filter conditions](javascript:call_link\('abenos_query_filter_cond.htm'\)) are passed to a query as character strings in the [query service](javascript:call_link\('abenquery_service_glosry.htm'\) "Glossary Entry") in the [Object Services](javascript:call_link\('abenobject_services_glosry.htm'\) "Glossary Entry"). If a filter condition like this (or part of it) originates outside the program, the same risk of an SQL injection is incurred as when a dynamic WHERE condition is manipulated in [ABAP SQL](javascript:call_link\('abensql_inj_dyn_tokens_scrty.htm'\)). To prevent SQL injections of this nature, either parameters from a parameter list or must be used or parts escaped using the class CL\_ABAP\_DYN\_PRG.

Example

The executable example [DEMO\_QUERY\_SERVICE](javascript:call_link\('abenos_query_abexa.htm'\)) is secure, since the interactive input is passed to the query using parameter bindings. If the source code after the statement TRY is replaced as follows, however, SQL injections are possible:

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



**📖 Source**: [abensql_inj_os_query_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_inj_os_query_scrty.htm)

### abensql_inj_gen_prog_scrty.htm

> **📖 Official SAP Documentation**: [abensql_inj_gen_prog_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_inj_gen_prog_scrty.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)) →  [SQL Injections](javascript:call_link\('abensql_injections_scrty.htm'\)) → 

SQL Injections Using Generic Programming

Generic programming is the most unsafe of all dynamic programming techniques. In principle, the [ABAP command injections](javascript:call_link\('abengeneric_prog_scrty.htm'\)) cover all individual security risks that can occur in dynamic programming, and most significantly SQL injections. The more generic the programming, the more difficult it is to prevent SQL injections from exploiting input that originates outside the program.

Example

The following program section demonstrates [static embedded of Native SQL](javascript:call_link\('abennativesql.htm'\)) in a program generated using [GENERATE SUBROUTINE POOL](javascript:call_link\('abapgenerate_subroutine_pool.htm'\)). Before [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry") was introduced, this was the only way of creating dynamic parts in [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry"). In the case in question, the input key must be escaped using the method ESCAPE\_QUOTES of the class CL\_ABAP\_DYN\_PRG to prevent SQL injections. In a more realistic example, of course, [host variables](javascript:call_link\('abapexec_host.htm'\)) would be the preferred method.

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



**📖 Source**: [abensql_inj_gen_prog_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_inj_gen_prog_scrty.htm)

### abensql_injections_scrty.htm

> **📖 Official SAP Documentation**: [abensql_injections_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_injections_scrty.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)) → 

SQL Injections

An [SQL injection](javascript:call_link\('abensql_injection_glosry.htm'\) "Glossary Entry") is a widely used attack method on insufficiently secure input from outside. An SQL injection passes malicious SQL code injected into a program to the database system, unchecked and unmasked. In ABAP, this can occur when the following programming techniques are used:

-   [Dynamically specified tokens in ABAP SQL](javascript:call_link\('abensql_inj_dyn_tokens_scrty.htm'\))

-   [Using ADBC](javascript:call_link\('abensql_inj_adbc_scrty.htm'\))

-   [Using AMDP](javascript:call_link\('abensql_inj_amdp_scrty.htm'\))

-   [Using Object Services](javascript:call_link\('abensql_inj_os_query_scrty.htm'\))

-   [Generic Programming](javascript:call_link\('abensql_inj_gen_prog_scrty.htm'\))

Continue
[SQL Injections Using Dynamic Tokens](javascript:call_link\('abensql_inj_dyn_tokens_scrty.htm'\))
[SQL Injections Using ADBC](javascript:call_link\('abensql_inj_adbc_scrty.htm'\))
[SQL Injections Using AMDP](javascript:call_link\('abensql_inj_amdp_scrty.htm'\))
[SQL Injections Using Object Services](javascript:call_link\('abensql_inj_os_query_scrty.htm'\))
[SQL Injections Using Generic Programming](javascript:call_link\('abensql_inj_gen_prog_scrty.htm'\))



**📖 Source**: [abensql_injections_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_injections_scrty.htm)

### abendyn_call_scrty.htm

> **📖 Official SAP Documentation**: [abendyn_call_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendyn_call_scrty.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)) → 

Dynamic Calls

In dynamic calls, the name of the called unit is specified as the content of a character-like data object. If some or all of this content originates outside of the calling program, there is a risk that units are called unintentionally. The only way of tackling this security risk is to perform a comparison with a whitelist. The class CL\_ABAP\_DYN\_PRG provides the methods CHECK\_WHITELIST\_STR and CHECK\_WHITELIST\_TAB.

Potential dynamic calls and hence a potential security risk when handling input can occur in the following cases:

-   When an executable program is specified dynamically after [SUBMIT](javascript:call_link\('abapsubmit.htm'\)).

-   When a transaction is specified dynamically after [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) and [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\)).

-   When classes and methods are specified dynamically in a dynamic method call using [CALL METHOD](javascript:call_link\('abapcall_method_dynamic.htm'\)).

-   When a class is specified dynamically in [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) (a dynamic call of the instance constructor).

-   When the function module is specified dynamically in a function module call using [CALL FUNCTION](javascript:call_link\('abapcall_function.htm'\)) (particularly if [RFC](javascript:call_link\('abenrfc_glosry.htm'\) "Glossary Entry") is used).

-   When subroutines and programs are specified dynamically in dynamic subroutine calls using [PERFORM](javascript:call_link\('abapperform.htm'\)).

-   When the system function is specified dynamically in the internal statement [CALL](javascript:call_link\('abapcall-.htm'\)).

Note

As well as checking intentional calls, it is also necessary to perform a sufficient [authorization check](javascript:call_link\('abenauthority_scrty.htm'\)) on the current user in program calls.

Example

In the following program section, a transaction name, when entered, is checked against a whitelist that contains only transactions from the ABAP example library.

DATA whitelist TYPE HASHED TABLE OF string
               WITH UNIQUE KEY table\_line.
SELECT obj\_name
       FROM tadir
       WHERE pgmid    = 'R3TR' AND
             object   = 'TRAN' AND
             devclass = 'SABAPDEMOS'
       INTO TABLE @whitelist.
DATA transaction TYPE sy-tcode.
cl\_demo\_input=>request( CHANGING field = transaction ).
TRY.
    transaction = cl\_abap\_dyn\_prg=>check\_whitelist\_tab(
      val = transaction
      whitelist = whitelist ).
  CATCH cx\_abap\_not\_in\_whitelist INTO DATA(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
    LEAVE PROGRAM.
ENDTRY.
TRY.
    CALL TRANSACTION transaction WITH AUTHORITY-CHECK.
  CATCH cx\_sy\_authorization\_error ##NO\_HANDLER.
ENDTRY.



**📖 Source**: [abendyn_call_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendyn_call_scrty.htm)

### abendyn_file_scrty.htm

> **📖 Official SAP Documentation**: [abendyn_file_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendyn_file_scrty.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)) → 

Directory Traversal

Physical file names can be specified as the content of a character-like data object in the statements and system class of the [ABAP file interface](javascript:call_link\('abenfile_interface_glosry.htm'\) "Glossary Entry"). If some or all of this content originates outside of the calling program, there is a risk that files or file paths are accessed by unauthorized sources (this is known as [directory traversal](javascript:call_link\('abendirectory_traversal_glosry.htm'\) "Glossary Entry")). The following are potential security risks when using input from outside to access the ABAP file interface:

-   A file name used in the statements [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) and [DELETE DATASET](javascript:call_link\('abapdelete_dataset.htm'\)) originates either partly or in full from outside the program.

-   A file name passed to the method CREATE\_UTF8\_FILE\_WITH\_BOM of the system class CL\_ABAP\_FILE\_UTILITIES originates either partly or in full from outside the program.

To act against this security risk, [the file names must be validated](javascript:call_link\('abendataset_auth_self.htm'\)). This can be a self-programmed validation or the function module FILE\_VALIDATE\_NAME can be used. This function module checks whether a physical file name matches a [logical file name](javascript:call_link\('abenlogical_filename_glosry.htm'\) "Glossary Entry") or whether it is a valid directory. One prerequisite is that the matching file names or logical paths were created using the transactions FILE or SF01.

Notes

-   If a program uses logical file names exclusively, instead of physical file names, the physical file names or paths required by the statements are constructed using the function module FILE\_GET\_NAME only. In this case, validation is not usually necessary.

-   Alongside the validation of file names, adequate checks should be made on the [authorizations for file access](javascript:call_link\('abendataset_auth.htm'\)).

Example

See the examples under [Validating File Names](javascript:call_link\('abendataset_auth_self.htm'\)).



**📖 Source**: [abendyn_file_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendyn_file_scrty.htm)

### abensys_comm_injections_scrty.htm

> **📖 Official SAP Documentation**: [abensys_comm_injections_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensys_comm_injections_scrty.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)) → 

System Command Injections

A [system command injection](javascript:call_link\('abensyst_comm_injection_glosry.htm'\) "Glossary Entry") is a attack method that can result from insufficiently secure input from outside. A system command injection forwards malicious [operating system statements](javascript:call_link\('abenabap_system_commands.htm'\)), which enter a program from an external source, to the operating system. In ABAP, this can occur when the following programming techniques are used:

-   In the application layer

-   Input forwarded from an external source to the parameters of the function modules used to call operating system statements using the [SXPG framework](javascript:call_link\('abenabap_system_commands_appl_sxpg.htm'\))

-   When the addition [FILTER](javascript:call_link\('abapopen_dataset_os_addition.htm'\)) of the statement [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) is used and some or all of the specified operating system statement originates from outside the program.

-   Using the internal statement [CALL](javascript:call_link\('abapcall-.htm'\)) for the special system function SYSTEM if part of the specified operating system statement or some or all of its parameters come from outside the program.

-   In the presentation layer

-   Input forwarded from an external source to the parameters of the method, the class, or the function module .

The [SXPG framework](javascript:call_link\('abenabap_system_commands_appl_sxpg.htm'\)) is the only recommended method for executing operating system statements from the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current AS Instance in ABAP. Here, only predefined logical command names can be passed to function modules in the function group SXPG, so enabling a certain amount of independence from the operating system in question. These predefined logical command names comprise a whitelist, preventing both unwanted operating system statements from being executed and also direct system command injections. When the statement is called, authorization checks and other checks take place. If further parameters can be passed to the function modules, they can be checked for unwanted code relatively easily.

The two other ways of executing operating system statements from the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current AS Instance are not at all secure (even with no external input) and should be avoided in ABAP programs. Calls of the SYSTEM function using internal statements should be especially avoided and can and should be deactivated using the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") rdisp/call\_system. External statements or parts of external statements should never be passed to the operating system without being checked first. Checking and filtering user input when using FILTER or CALL 'SYSTEM' is, however, particularly difficult, since all possible operating systems and code pages must be covered.

In principle, all input from outside must be checked if passed to the parameters of SXPG framework function modules and to parameters of the method or function module used to execute operating system statements on the presentation server. This prevents unwanted effects from operating system statements.

Example

In the following program section, the operating system statement ping of the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current AS Instance is executed for a database server using the unwanted system function SYSTEM. If this function has been deactivated (using the profile parameter rdisp/call\_system), a runtime error occurs. The number of "pings" and the database server can be set externally. The program can be manipulated by two attacks:

-   The number of "pings" is unlimited, which means that "Denial of Service" attack can take place.

-   The input field DBSERVER for the database server, whose default is the current database server, is at risk from system command injections. If, for example, the string ; ls -l /etc is appended to the name of the database server in a Unix operating system, the operating system statement ls is executed after the "pings" and the content of the directory /etc is produced.

TYPES char255 TYPE c LENGTH 255.
DATA dbserver TYPE char255.
CALL 'C\_SAPGPARAM' ID 'NAME'  FIELD 'SAPDBHOST'
                   ID 'VALUE' FIELD  dbserver.
DATA pings TYPE i VALUE 1.
cl\_demo\_input=>add\_field( CHANGING field = pings ).
cl\_demo\_input=>add\_field( CHANGING field = dbserver ).
cl\_demo\_input=>request( ).
IF dbserver IS INITIAL.
  cl\_demo\_output=>display( 'DBSERVER must not be initial ...' ).
  RETURN.
ENDIF.
DATA command TYPE char255.
command = |ping -c{ COND i( WHEN pings <= 1  THEN 1
                            ELSE pings )
                } { dbserver }|.
DATA result  TYPE TABLE OF char255 WITH EMPTY KEY.
CALL 'SYSTEM' ID 'COMMAND' FIELD command
              ID 'TAB'     FIELD result.
cl\_demo\_output=>display( result ).

Example

In the following program section, the unwanted use of the system function SYSTEM is replaced by calling the function module SXPG\_CALL\_SYSTEM for the logical command name PING predefined by SAP. The function module call only shows some of the possible exceptions.

-   "Denial of Service" attacks are prevented by limiting the number of "pings" to a maximum of 10.

-   The system command injections shown above are not possible, since the [SXPG framework](javascript:call_link\('abenabap_system_commands_appl_sxpg.htm'\)) input is detected as invalid parameter passing to ping.

DATA dbserver TYPE c LENGTH 255.
CALL 'C\_SAPGPARAM' ID 'NAME'  FIELD 'SAPDBHOST'
                   ID 'VALUE' FIELD  dbserver.
DATA pings TYPE i VALUE 1.
cl\_demo\_input=>add\_field( CHANGING field = pings ).
cl\_demo\_input=>add\_field( CHANGING field = dbserver ).
cl\_demo\_input=>request( ).
DATA parameters TYPE sxpgcolist-parameters.
parameters = |-c{ COND i( WHEN pings <= 1  THEN 1
                          WHEN pings >= 10 THEN 10
                          ELSE pings )
              } { dbserver }|.
DATA result TYPE TABLE OF btcxpm WITH EMPTY KEY.
CALL FUNCTION 'SXPG\_CALL\_SYSTEM'
  EXPORTING
    commandname           = 'PING'
    additional\_parameters = parameters
  TABLES
    exec\_protocol         = result
  EXCEPTIONS
    no\_permission         = 1
    command\_not\_found     = 2
    security\_risk         = 3
    OTHERS                = 4.
IF sy-subrc = 0.
  cl\_demo\_output=>display( result ).
ELSE.
  cl\_demo\_output=>display( |Error, return code { sy-subrc }| ).
ENDIF.

The example above can itself be improved by using a self-defined logical command name instead of the predefined logical command name PING. For each operating system used, this command name gives the ping statement a specific path, such as /bin/ping for Linux or c:\\Windows\\System32\\ping.exe for MS Windows. This calls the specified statement precisely and any attacker is unable to smuggle a statement with the same name (but with the wrong function) into a directory in front of the required target directory in the environment variable for the path.



**📖 Source**: [abensys_comm_injections_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensys_comm_injections_scrty.htm)

### abenxss_scrty.htm

> **📖 Official SAP Documentation**: [abenxss_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenxss_scrty.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)) → 

Cross Site Scripting

Cross site scripting ([XSS](javascript:call_link\('abenxss_glosry.htm'\) "Glossary Entry")) is a way of attacking a Web server using a Web application, for example using a manipulated HTML page displayed in a browser. Cross site scripting is a wide-ranging topic that cannot be covered in full here and ABAP application developers are not usually concerned with creating Web pages directly. These pages are normally wrapped in frameworks such as SAPUI5, Web Dynpro or Web Services and these frameworks are responsible for the necessary security.

An ABAP program is itself responsible for security only in the very rare cases where it is not part of one of these frameworks and generates HTML pages itself, for example directly using [Internet Communication Framework](javascript:call_link\('abeninternet_con_fra_glosry.htm'\) "Glossary Entry") (transaction SICF). The built-in function [escape](javascript:call_link\('abenescape_functions.htm'\)) is most often used to do this. Other escape methods, such as the classes CL\_HTTP\_UTILITY, CL\_HTTP\_SERVER, and CL\_HTTP\_CLIENT are obsolete and should no longer be used.

Note

[Business Server Pages](javascript:call_link\('abenbusiness_server_pages_glosry.htm'\) "Glossary Entry") (BSP) are an exception to the rule above: When Business Server Pages are created, ABAP application developers can also be faced with HTML pages and must take the appropriate security precautions. More specifically, the attribute <htmlb:content forceEncode="ENABLED"> must be set in the HTMLB Library and obsolete values such as CLASSIC or DESIGN2002 can no longer be specified in the attribute design.

Executable Examples

-   The example [String Functions, escape for XSS](javascript:call_link\('abenstring_function_esc_xss_abexa.htm'\)) demonstrates simple cross site scripting possible when input is not masked and is used on a generated HTML page.

-   In the [ICF Services](javascript:call_link\('abenicf_service_abexa.htm'\)) example, the class CL\_HTTP\_EXT\_SERVICE\_DEMO uses the built-in function [escape](javascript:call_link\('abenescape_functions.htm'\)) to prevent cross site scripting.



**📖 Source**: [abenxss_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenxss_scrty.htm)

### abengeneric_prog_scrty.htm

> **📖 Official SAP Documentation**: [abengeneric_prog_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneric_prog_scrty.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abengeneric_prog_scrty.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengeneric_prog_scrty.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)) → 

ABAP Command Injections

[ABAP command injections](javascript:call_link\('abenabap_comm_injection_glosry.htm'\) "Glossary Entry"), the injection of malicious ABAP code into programs, is a potential risk in generic programming. The most important statements in generic programming are

-   [GENERATE SUBROUTINE POOL](javascript:call_link\('abapgenerate_subroutine_pool.htm'\))

-   [INSERT REPORT](javascript:call_link\('abapinsert_report.htm'\))

Both of these statements can be used to create executable ABAP code, some or all of which can originate outside of the program. Careful checks must be made on those parts of programs created in this way that originate from outside of the program. The greater the number of these parts, the more difficult this is. For this reason, it is recommended that all other dynamic programming techniques are tried before resorting to program generation. If it is absolutely necessary to use program generation, the dynamic parts of programs should be kept as few as possible. Persistently saved forms are useful here, in which only placeholders are replaced by dynamic parts and which can otherwise be checked statically. If the content for the placeholders of the forms originate outside the program, they must be checked in accordance with how they are used in the form.

Notes

-   In principle, the ABAP command injections cover all individual security risks listed here. Generic programs containing fully dynamic statements are susceptible to potential injections. See, for example, [SQL Injections Using Generic Programming](javascript:call_link\('abensql_inj_gen_prog_scrty.htm'\)).

-   The [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") abap/dyn\_abap\_log can be used to activate logging of all dynamic source code changes using [GENERATE SUBROUTINE POOL](javascript:call_link\('abapgenerate_subroutine_pool.htm'\)) [INSERT REPORT](javascript:call_link\('abapinsert_report.htm'\)), and [DELETE REPORT](javascript:call_link\('abapdelete_report.htm'\)). The database table DYNABAPHDR then contains the associated events, which can be evaluated using the program RDYNABAP\_SHOW. The generic programming statements are also used by the development tools, which means logging of this kind is useful only in non-development systems.

Example

The following program is a perfect example of a worst case scenario. Every user with authorization for this program can enter and execute source code at will. The minimum action that must be taken is to check the development authorization of the current user (see the example for [authorizations](javascript:call_link\('abenauthority_scrty.htm'\))). Another option is to check whether the system in question is a development or production system. Checking entered program code, on the other hand, is very difficult, particularly if the entire program is modifiable (as here) and not just a single line in a pattern. The executable example [Program Generation](javascript:call_link\('abenprogram_generation_abexa.htm'\)) shows an attempt to restrict a freely modifiable program to make it secure.

TYPES prog TYPE TABLE OF string WITH EMPTY KEY.
DATA(text) = concat\_lines\_of( VALUE prog(
  ( |PROGRAM.\\n\\n| )
  ( |FORM do\_it.\\n| )
  ( |  ...\\n| )
  ( |ENDFORM.| ) ) ).
CALL FUNCTION 'DEMO\_INPUT\_TEXT'
  CHANGING
    text\_string = text
  EXCEPTIONS
    canceled    = 4.
IF sy-subrc = 4.
  LEAVE PROGRAM.
ENDIF.
SPLIT text AT |\\n| INTO TABLE DATA(prog).
GENERATE SUBROUTINE POOL prog NAME DATA(pool).
IF sy-subrc = 0.
  PERFORM do\_it IN PROGRAM (pool).
ENDIF.
