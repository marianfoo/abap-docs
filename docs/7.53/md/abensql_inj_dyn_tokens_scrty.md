  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)) →  [SQL Injections](javascript:call_link\('abensql_injections_scrty.htm'\)) → 

SQL Injections Using Dynamic Tokens

The [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") syntax allows almost every clause of an ABAP SQL statement to be specified dynamically as the content of a data object specified in parentheses. If all of part of the content of one of these data objects originates from outside of the program, there is a risk of one of the following SQL injections:

-   [Access to Non-Permitted Database Tables](#@@ITOC@@ABENSQL_INJ_DYN_TOKENS_SCRTY_1)

-   [Access to Non-Permitted Table Columns](#@@ITOC@@ABENSQL_INJ_DYN_TOKENS_SCRTY_2)

-   [Manipulation of the Dynamic WHERE Condition](#@@ITOC@@ABENSQL_INJ_DYN_TOKENS_SCRTY_3)

-   [Manipulation of a Dynamic Change Expression](#@@ITOC@@ABENSQL_INJ_DYN_TOKENS_SCRTY_4)

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