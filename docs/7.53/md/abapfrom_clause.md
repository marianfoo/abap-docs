  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_clauses.htm) → 

SELECT - FROM

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_shortref.htm)

Syntax

... FROM *{* *{* [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) *\[*AS tabalias*\]**}*
         *|* [join](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_join.htm)
         *|* *{*(source\_syntax) *\[*AS tabalias*\]**}* *}*
         *\[* [client\_handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_client.htm) *\]* ...

Alternatives:

[1\. ... data\_source](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... join](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... (source\_syntax)](#!ABAP_ALTERNATIVE_3@3@)

Addition:

[... AS tabalias](#!ABAP_ONE_ADD@1@)

Effect

The information after FROM specifies whether a [query](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenquery_glosry.htm "Glossary Entry") accesses a [database table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_table_glosry.htm "Glossary Entry"), a [classic view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclassical_view_glosry.htm "Glossary Entry"), a [CDS entity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry"), a [table function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselect_table_function.htm), or an [internal table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_itab.htm) as a data source [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm), or whether multiple data sources are accessed in a [join expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_join.htm). The optional addition AS defines an alternative table name. The optional additions [client\_handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_client.htm) modify the way [client handling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_handling_glosry.htm "Glossary Entry") is performed.

Alternative 1

... data\_source

Effect

Specifies a single data source [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm).

Note

If a data source is specified multiple times after FROM in a join expression, an alternative name tabalias must be specified after AS to avoid ambiguities.

Example

Specifies the database table SCARR as the only data source of a [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm) statement.

SELECT FROM scarr
       FIELDS \*
       INTO TABLE @DATA(result).

Alternative 2

... join

Effect

Specifies a [join expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_join.htm) that joins multiple data sources with one another.

Example

Specifies the database tables SCARR and SPFLI in a join expression.

SELECT FROM scarr
         INNER JOIN spfli
           ON scarr~carrid = spfli~carrid
       FIELDS scarr~carrname,
              spfli~connid,
              spfli~cityfrom,
              spfli~cityto
       INTO TABLE @DATA(result).

Alternative 3

... (source\_syntax)

Effect

Instead of specifying information statically, a data object source\_syntax can be specified in parentheses. When the statement is executed, the data object must contain the syntax displayed for the statically specified information. The data object source\_syntax can be a character-like data object or a [standard table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a character-like row type. The syntax in source\_syntax is not case-sensitive (as is the case in ABAP Editor). When an internal table is specified, the syntax can be distributed across multiple rows. Invalid syntax raises a handleable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

The addition AS used to specify an alternative table name statically can be specified only if source\_syntax contains only the name of a single data source. The addition has the same meaning for this data source as when specified statically. In source\_syntax, static attributes or constants of a class cannot be accessed from outside in cases where the class has a static constructor and the constructor was not yet executed.

Security Note

If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenescape_functions.htm). See [SQL Injections Using Dynamic Tokens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_inj_dyn_tokens_scrty.htm).

Notes

-   If source\_syntax is an internal table with a [header line](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenheader_line_glosry.htm "Glossary Entry"), the header line and not the [table body](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_body_glosry.htm "Glossary Entry") is evaluated.
    
-   The addition AS can be used as part of the dynamic syntax in source\_syntax without restrictions.
    
-   More specifically, if AS is specified statically outside of the dynamically specified syntax, source\_syntax cannot contain any [path expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path.htm).
    
-   The class CL\_ABAP\_DYN\_PRG contains methods that make it possible to create correct and secure dynamic code.
    

-   The literals of the dynamically specified ABAP SQL statements can span multiple rows of a token specified dynamically as an internal table.

-   When specified dynamically, ABAP SQL statements can contain the comment characters [\*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomment.htm) and ["](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomment.htm) as follows:

-   In a dynamic token specified as a character-like data object, all content is ignored from the first comment character ".

-   In a dynamic token specified as an internal table, all rows are ignored that start with the comment character \*. In the row, all content is ignored from the first comment character ".

Comment characters placed within literals are, however, part of the literal.

Example

Displays the flight connections (flight date, airline name, and flight number) for a departure city and a destination city. The FROM clause (including any inner [joins](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_join.htm)) is dynamic. The column specified after SELECT is also dynamic. When specified dynamically, the input values are are specified indirectly using the name of the data object in question and are not chained directly. If they were, a special security check would be required for this input.

DATA: cityfr TYPE spfli-cityfrom VALUE 'FRANKFURT',
      cityto TYPE spfli-cityto   VALUE 'NEW YORK'.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = cityfr
  )->add\_field( CHANGING field = cityto )->request( ).
DATA:
  BEGIN OF wa,
    fldate TYPE sflight-fldate,
    carrname TYPE scarr-carrname,
    connid   TYPE spfli-connid,
  END OF wa,
  itab LIKE SORTED TABLE OF wa
            WITH UNIQUE KEY fldate carrname connid.
DATA(column\_syntax) = \`c~carrname, p~connid, f~fldate\`.
DATA(source\_syntax) = \`( ( scarr AS c \`
  & \` INNER JOIN spfli AS p ON p~carrid  = c~carrid\`
  & \` AND p~cityfrom = @cityfr\`
  & \` AND p~cityto   = @cityto )\`
  & \` INNER JOIN sflight AS f ON f~carrid = p~carrid \`
  & \` AND f~connid = p~connid )\`.
SELECT (column\_syntax)
       FROM (source\_syntax)
       INTO CORRESPONDING FIELDS OF TABLE @itab.
cl\_demo\_output=>display\_data( itab ).

Executable Example

[SELECT, Dynamically Specified Tokens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_sql_abexa.htm)

Addition

... AS tabalias

Effect

An alternative table name tabalias can be assigned to the data source using the addition AS. This name is valid during the SELECT statement only, and in all other positions where this specified data source is addressed, and the actual name does not need to be used.

The alternative table name tabalias can have a maximum of 30 places and can contain letters, digits, the minus sign (\-), and the underscore (\_) in any order.

Notes

-   An alternative table name tabalias prevents the original name [data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) from being used and this applies in principle to dynamic tokens too. This is not checked, however, until the introduction of the [strict modes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_modes.htm) in the syntax check from Release 7.40, SP08 and may raise an exception.
    
-   If an alternative table name matches an addition of the SELECT statement exactly, it may be necessary to prefix it with the [escape character !](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennames_escaping.htm).
    
-   A [path expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path.htm) in the [data source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) of the FROM clause should have an alternative table name defined with AS. This is checked in [strict mode from Release 7.52](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_752.htm).
    

Example

Defines alternative table names for two data sources of a join expression and their use in the SELECT list and in the ORDER BY clause.

SELECT FROM scarr AS c
         INNER JOIN spfli AS p
           ON c~carrid = p~carrid
       FIELDS c~carrname, p~connid, p~cityfrom, p~cityto
       ORDER BY c~carrname, p~connid, p~cityfrom, p~cityto
       INTO TABLE @DATA(result).

Continue
[SELECT - FROM data\_source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm)
[SELECT - FROM JOIN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_join.htm)
[SELECT - CLIENT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_client.htm)