---
title: "Syntax"
description: |
  ... @itab Effect Specifies an internal table(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_table_glosry.htm 'Glossary Entry') itab as a host variable(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_host_variables.htm) whose name must be
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_itab.htm"
abapFile: "abapselect_itab.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "abapselect", "itab"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm) →  [SELECT, FROM data\_source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20FROM%20%40itab%2C%20ABAPSELECT_ITAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, FROM @itab

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_shortref.htm)

Syntax

... @itab

Effect

Specifies an [internal table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_table_glosry.htm "Glossary Entry") itab as a [host variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_host_variables.htm) whose name must be prefixed with the @ character as a [data source](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm) of a [query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenquery_glosry.htm "Glossary Entry"). The SELECT statement handles the internal table of the AS ABAP like a DDIC database table that is instantiated on the database. The ABAP types of the columns in the internal table are mapped to suitable [built-in data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) in the ABAP Dictionary. If a column is declared with reference to a type in the ABAP Dictionary, this type is used directly.

Two cases must be distinguished:

-   The SELECT statement can be processed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry").
    
    In this case, the data of the internal table is processed on the AS ABAP. This is possible for all database platforms.
    
-   The SELECT statement contains elements that are [not supported](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_engine_restr.htm) by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry").
    
    In this case, the data must be passed to a temporary table in the database before the query is actually executed. Here, only those columns are transported that need to be accessed. This option is not supported by all databases.
    

The following conditions apply:

-   Only one internal table can be passed to the database for an ABAP SQL statement.
    -   Multiple internal tables can be specified only, if the ABAP SQL statement can be processed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry").
    -   Only one internal table can be specified in an ABAP SQL statement that cannot be processed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry").
-   An alias name must be assigned to each internal table using [AS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm).
-   The row type of the internal tables can be elementary or structured.
    -   An elementary row type represents a column that can be addressed in the other [clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_clauses.htm) of the query using the name table\_line or an alias name defined with [AS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_list.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_list.htm).
    -   A structured row type cannot contain any substructures.
-   No deep row types are allowed. An elementary row type cannot be a string or a reference type and a structured row type cannot contain any strings, reference types, or internal tables as components, with the following exception: An elementary row type or a component can have the type [string](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_character.htm) if this is declared using a reference to the built-in dictionary type [SSTRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).
-   If the addition [ORDER BY PRIMARY KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaporderby_clause.htm) is used, the respective internal table must have a [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry").
-   The key fields of a [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") in the internal tables must be contiguous columns that appear in the same order at the start of the row type.
-   If the [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm) clause is specified statically, the internal tables cannot be a generically typed formal parameter, a generically typed field symbol or be specified by dereferencing a generically type data reference variable. Such tables can only be specified in a dynamic FROM clause and must represent a suitable internal table at runtime.
-   The internal tables cannot contain any columns declared with reference to the obsolete dictionary types [DF16\_SCL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) and [DF34\_SCL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).
-   When an internal table with elementary row type is accessed in a [common table expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") after [WITH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwith.htm), the [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_list.htm) cannot be \* or contain data\_source~\*.
-   The internal tables should have an explicitly defined primary key, which can also be empty. Generic primary keys and [standard keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_key_glosry.htm "Glossary Entry") are not evaluated in reads and a syntax check warning occurs.
-   As a prerequisite for passing data from an internal table to the database, [FDA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfast_data_access_glosry.htm "Glossary Entry") write access must be available and switched on, otherwise an exception occurs.

The data in the internal tables is handled like data on the database even if it is not transported to the database:

-   Data with the type [string](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_character.htm) declared using a reference to the built-in dictionary type [SSTRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) is handled like text fields with fixed lengths in which trailing blanks are ignored.
-   [SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) are evaluated in the same way as on the database, for example:
    -   Evaluations of the functions [DIV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_arith_func.htm) and [MOD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_arith_func.htm) differ from calculations with the identically named [ABAP operators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarith_operators.htm).
    -   Any [null values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry") produced as results of nested expressions, for example, in the [COALESCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_coalesce.htm) function or in [comparisons](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_expr_logexp.htm), are handled as null values.
    -   The result of a [relational expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_stmt_logexp.htm) with operands that contain [null values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry") is unknown, except in the case of the expression [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_null.htm).

The internal table itab is always regarded as a client-independent table. The data type of the first column is never regarded as a client column, regardless of its data type.

Hints

-   If it is known statically that the statement cannot be processed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry") and if no database tables are accessed in the statement, a syntax check warning occurs that can be hidden by the pragma ##itab\_db\_select.
-   The data in internal tables should only be transported to the database system if it is actually needed there. In this case, the pragma ##itab\_db\_select can be used to hide the corresponding syntax check warning.
-   The use of an internal table as a data source of SELECT is mainly intended for joins with data sources from the database. Since joins with database tables or views are not supported by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry"), this is possible for only one internal table within a SELECT statement that can be transported to the database. In contrast, joins between multiple internal tables only can be processed by the ABAP SQL engine.
-   An internal table as a data source of SELECT can be a potential alternative to the statements [READ TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table.htm) and [LOOP AT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm) in order to exploit ABAP SQL syntax possible that is not possible with the statements for internal tables.
    -   If this solution is used, it should be ensured that the data is evaluated on the AS ABAP and that no data is transported to the database system to be evaluated. A corresponding syntax check warning is raised as a reminder.
    -   The use of SELECT to access an internal table is usually less efficient than the statements for internal tables and should only be used in cases not covered by these statements.
-   In internal tables with elementary row types, the name of the [pseudo component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line cannot be the name of a structure in ABAP. An inline declaration using [@DATA*|*@FINAL (...)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_into_target.htm) can only be made in the [INTO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm) clause if the column table\_line of the result set is assigned an alias name using [AS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_list.htm).
-   Currently, the access to multiple internal tables within one ABAP SQL statement is restricted to joins of internal tables. No database table can be accessed in the same statement then. Only one internal table can be accessed together with database tables.
-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_dbfeatures.htm) to check whether the current database system or a database system accessed using a [secondary connection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") supports access to internal tables. This requires the constant ITABS\_IN\_FROM\_CLAUSE of this class to be passed to the method in an internal table.
-   The pragma ##db\_feature\_mode\[itabs\_in\_from\_clause\] can be used to hide a syntax warning from the [extended program check](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenextended_program_check_glosry.htm "Glossary Entry") indicating that data in the internal table is being passed to an invalid database. If such an attempt is made at runtime, a catchable exception of the class CX\_SY\_SQL\_UNSUPPORTED\_FEATURE is raised.
-   If an internal table is used as a data source, the syntax check is performed in [strict mode from ABAP release 7.52](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_752.htm).

Example

Use of an internal table as the data source of an inner join of a [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) statement. The SELECT statement cannot be processed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry") and the internal table is transported to the database due to the join with a database table.

DATA itab TYPE HASHED TABLE OF scarr
          WITH UNIQUE KEY mandt carrid.
itab =  VALUE #( ( carrid = 'LH' carrname = 'L.H.' )
                 ( carrid = 'UA' carrname = 'U.A.' ) ).
SELECT scarr~carrid, scarr~carrname, spfli~connid
       FROM @itab AS scarr
         INNER JOIN spfli ON scarr~carrid = spfli~carrid
       INTO TABLE @FINAL(result)
       ##itab\_db\_select.
cl\_demo\_output=>display( result ).

Example

Looping over an internal table in a sequence defined by the sort order of different columns using SELECT - ENDSELECT. Such a loop is not possible with [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm). The SELECT statement can be processed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry") on the AS ABAP.

TYPES:
  BEGIN OF line,
    col1 TYPE i,
    col2 TYPE i,
  END OF line,
  itab TYPE TABLE OF line WITH EMPTY KEY.
FINAL(itab) = VALUE itab(
  ( col1 = 8 col2 = 8 )
  ( col1 = 3 col2 = 5 )
  ( col1 = 7 col2 = 4 )
  ( col1 = 2 col2 = 3 )
  ( col1 = 0 col2 = 1 )
  ( col1 = 4 col2 = 6 ) ).
SELECT \*
       FROM @itab AS itab
       ORDER BY col1 DESCENDING
       INTO @FINAL(wa1).
  cl\_demo\_output=>write( wa1 ).
ENDSELECT.
cl\_demo\_output=>line( ).
SELECT \*
       FROM @itab AS itab
       ORDER BY col2 ASCENDING
       INTO @FINAL(wa2).
  cl\_demo\_output=>write( wa2 ).
ENDSELECT.
cl\_demo\_output=>display( ).

Example

Looping over an internal table in a sequence defined by the sort order of a column using SELECT - ENDSELECT. One sequence is case sensitive, the other is not because the function UPPER is used in the ORDER BY clause. Such a loop is not possible with [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm). The SELECT statement can be processed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry") on the AS ABAP.

TYPES:
c1 type c LENGTH 1,
itab TYPE TABLE OF c WITH EMPTY KEY.
FINAL(itab) = VALUE itab(
( 'B' )
( 'a' )
( 'A' )
( 'b' ) ).
SELECT \*
       FROM @itab AS itab
       ORDER BY table\_line
       INTO @FINAL(wa1).
  cl\_demo\_output=>write( wa1 ).
ENDSELECT.
cl\_demo\_output=>line( ).
SELECT \*
       FROM @itab AS itab
       ORDER BY lower( table\_line )
       INTO @FINAL(wa2).
  cl\_demo\_output=>write( wa2 ).
ENDSELECT.
cl\_demo\_output=>display( ).

Example

Use of a table with an elementary data type as the data source of two [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) statements. The SELECT statements can be processed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry"). In the second SELECT statement, a syntax error would occur without the alias name number, since the inline declaration after INTO cannot create an internal table with the column name table\_line.

DATA itab TYPE SORTED TABLE OF i WITH UNIQUE KEY table\_line.
itab =  VALUE #( ( 1 )
                 ( 2 )
                 ( 3 ) ).
DATA result1 LIKE itab.
SELECT table\_line
       FROM @itab AS numbers
       INTO TABLE @result1.
cl\_demo\_output=>write( result1 ).
SELECT table\_line AS number
       FROM @itab AS numbers
       INTO TABLE @FINAL(result2).
cl\_demo\_output=>display( result2 ).

Executable Examples

-   [Internal Table as Data Source of a SELECT Statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_from_itab_abexa.htm)
-   [Multiple Internal Tables as Data Sources of a SELECT Statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_from_itab_multi_abexa.htm)
-   [Internal Table as a Data Source of the Hierarchy Generator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_from_itab_hiera_abexa.htm)

See also:

-   [ABAP SQL Engine, Multiple Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine_abexa.htm)
-   [ABAP SQL Engine, Restrictions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine_restr_abexa.htm)
-   [ABAP SQL Engine, Restriction to One Internal Table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_engine_itab_abexa.htm)

Continue
![Example](exa.gif "Example") [SELECT, Internal Table as Data Source of a Query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_from_itab_abexa.htm)
![Example](exa.gif "Example") [SELECT, Multiple Internal Tables as Data Sources of a Query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_from_itab_multi_abexa.htm)
![Example](exa.gif "Example") [SELECT, Internal Table as a Data Source of the Hierarchy Generator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_from_itab_hiera_abexa.htm)