---
title: "Syntax"
description: |
  ... @itab Effect Specifies an internal table(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_table_glosry.htm 'Glossary Entry') itab as a host variable(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_variables.htm) whose name must be prefixed
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_itab.htm"
abapFile: "abapselect_itab.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "internal-table", "field-symbol", "abapselect", "itab"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_clauses.htm) →  [SELECT, FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm) →  [SELECT, FROM data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, FROM @itab, ABAPSELECT_ITAB, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

SELECT, FROM @itab

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_shortref.htm)

Syntax

... @itab

Effect

Specifies an [internal table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_table_glosry.htm "Glossary Entry") itab as a [host variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_host_variables.htm) whose name must be prefixed with the @ character as a [data source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) of a [query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenquery_glosry.htm "Glossary Entry"). The SELECT statement handles the internal table of the AS ABAP like a DDIC database table that is instantiated on the database. The ABAP types of the columns in the internal table are mapped to suitable [built-in data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) in the ABAP Dictionary. If a column is declared with reference to a type in the ABAP Dictionary, this type is used directly.

There are two different cases here:

-   The data in the internal table is not required on the database.
    
    In this case, the data of the internal table is accessed on the AS ABAP and the table is handled like a table in the [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry"). This is possible for all database platforms.
    
-   Data in the internal table is required on the database.
    
    In this case, the data must be passed to temporary tables in the database before the query is actually executed. Here, only those columns are transported that need to be accessed. This option is not supported by all databases. If it is known statically that data is required on the database, a syntax check warning occurs that can be hidden by the pragma ##itab\_db\_select.
    

The data in the internal table does not have to be passed to the database, or the statement can then be executed on the AS ABAP, if the SELECT statement fulfills the same [conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_restrictions.htm) as for accessing the [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry") for [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry").

The following conditions apply:

-   Only one internal table can be specified in an ABAP SQL statement.
-   An alias name must be assigned to the internal table using [AS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm).
-   The row type of the internal table can be elementary or structured.
    -   An elementary row type represents a column that can be addressed in the other [clauses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_clauses.htm) of the query using the name table\_line or an alias name defined with [AS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm).
    -   A structured row type cannot contain any substructures.
-   No deep row types are allowed. An elementary row type cannot be a string or a reference type and a structured row type cannot contain any strings, reference types, or internal tables as components, with the following exception: An elementary row type or a component can have the type [string](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_character.htm) if this is declared using a reference to the built-in dictionary type [SSTRING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm).
-   If the addition [ORDER BY PRIMARY KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaporderby_clause.htm) is used, the internal table must have a [primary table key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprimary_table_key_glosry.htm "Glossary Entry").
-   The key fields of a [primary table key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") in the internal table must be contiguous columns that appear in the same order at the start of the row type.
-   If the [FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm) clause is specified statically, the internal table cannot be a generically typed formal parameter or a generically typed field symbol. Such tables can only be specified in a dynamic FROM clause and must represent a suitable internal table at runtime.
-   The internal table cannot contain any columns declared with reference to the obsolete dictionary types [DF16\_SCL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) and [DF34\_SCL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm).
-   When an internal table with elementary row type is accessed in a [common table expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencommon_table_expression_glosry.htm "Glossary Entry") after [WITH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwith.htm), the [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm) cannot be \* or contain data\_source~\*.
-   The internal table should have an explicitly defined primary key, which can also be empty. Generic primary keys and [standard keys](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_key_glosry.htm "Glossary Entry") are not evaluated in reads and a syntax check warning occurs.
-   As a prerequisite for passing data from the internal table to the database, [FDA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfast_data_access_glosry.htm "Glossary Entry") write access must be available and switched on, otherwise an exception occurs.

The data in the internal table is handled like data on the database even if it is not transported to the database:

-   Data with the type [string](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_character.htm) declared using a reference to the built-in dictionary type [SSTRING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) is handled like text fields with fixed lengths in which trailing blanks are ignored.
-   [SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsql_expr.htm) are evaluated in the same way as on the database, for example:
    -   Evaluations of the functions [DIV](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm) and [MOD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm) differ from calculations with the identically named [ABAP operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm).
    -   Any [null values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry") produced as results of nested expressions, for example, in the [COALESCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_coalesce.htm) function or in [comparisons](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_expr_logexp.htm), are handled as null values.
    -   The result of a [relational expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm) with operands that contain [null values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry") is unknown, except in the case of the expression [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_null.htm).

The internal table itab is always regarded as a client-independent table. The data type of the first column is never regarded as a client column, regardless of its data type.

Hints

-   The data in internal tables should only be transported to the database system if it is actually needed there. In this case, the pragma ##itab\_db\_select is used to hide the corresponding syntax check warning.
-   The use of an internal table as a data source of SELECT is mainly applicable to joins with data sources from the database. In this case, the data of the internal table is transported to the database.
-   An internal table as a data source of SELECT is also, however, a potential alternative to the statements [READ TABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table.htm) and [LOOP AT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab.htm) and hence makes ABAP SQL syntax possible that cannot otherwise be used.
    -   If this solution is used, it should be ensured that the data is evaluated on the AS ABAP and that no data is transported to the database system to be evaluated. A corresponding syntax check warning is raised as a reminder.
    -   The use of SELECT to access an internal table is usually less efficient than the statements for internal tables and should only be used in cases not covered by these statements.
-   The fact that, when accessed on the AS ABAP without data transport, the data in the internal table is handled like a table in the table buffer does not mean that the data is actually stored here. The corresponding restrictions do, however, apply to the SELECT statement.
-   In an ABAP program, it is possible to use the method USE\_FEATURES of the class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_dbfeatures.htm) to check whether the current database system or a database system accessed using a [secondary connection](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry") supports access to internal tables. This requires the constant ITABS\_IN\_FROM\_CLAUSE of this class to be passed to the method in an internal table.
-   The pragma ##db\_feature\_mode\[itabs\_in\_from\_clause\] can be used to hide a syntax warning from the [extended program check](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenextended_program_check_glosry.htm "Glossary Entry") indicating that data in the internal table is being passed to an invalid database. If such an attempt is made at runtime, a catchable exception of the class CX\_SY\_SQL\_UNSUPPORTED\_FEATURE is raised.
-   In internal tables with elementary row types, the name of the [pseudo component](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line cannot be the name of a structure in ABAP. An inline declaration using [@DATA*|*@FINAL (...)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_into_target.htm) can only be made in the [INTO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinto_clause.htm) clause if the column table\_line of the result set is assigned an alias name using [AS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_list.htm).
-   If an internal table is used as a data source, the syntax check is performed in [strict mode from Release 7.52](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_752.htm).

Example

Use of an internal table as the data source of an inner join of a [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) statement. The data is transported to the database due to the join and the statement can only be executed in database systems where joins are supported.

DATA itab TYPE HASHED TABLE OF scarr
          WITH UNIQUE KEY mandt carrid.
IF NOT cl\_abap\_dbfeatures=>use\_features(
         EXPORTING
           requested\_features =
             VALUE #( ( cl\_abap\_dbfeatures=>itabs\_in\_from\_clause ) ) ).
  cl\_demo\_output=>display(
    \`System does not support internal tables as data source\` ).
  RETURN.
ENDIF.
itab =  VALUE #( ( carrid = 'LH' carrname = 'L.H.' )
                 ( carrid = 'UA' carrname = 'U.A.' ) ).
SELECT scarr~carrid, scarr~carrname, spfli~connid
       FROM @itab AS scarr
         INNER JOIN spfli ON scarr~carrid = spfli~carrid
       INTO TABLE @FINAL(result)
       ##db\_feature\_mode\[itabs\_in\_from\_clause\] ##itab\_db\_select.
cl\_demo\_output=>display( result ).

Example

Use of a table of random numbers as a data source of a [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) statement. The data is transported to the database due to sorting and the statement can only be executed in database systems where sorting is supported.

TYPES:
  BEGIN OF line,
    id     TYPE c LENGTH 1,
    number TYPE i,
  END OF line.
DATA itab TYPE HASHED TABLE OF line
          WITH UNIQUE KEY id.
IF NOT cl\_abap\_dbfeatures=>use\_features(
         EXPORTING
           requested\_features =
             VALUE #( ( cl\_abap\_dbfeatures=>itabs\_in\_from\_clause ) ) ).
  cl\_demo\_output=>display(
    \`System does not support internal tables as data source\` ).
  RETURN.
ENDIF.
FINAL(rnd) = cl\_abap\_random\_int=>create(
  seed = CONV i( sy-uzeit ) min = 1 max = 100 ).
itab =  VALUE #(
  FOR i = 1 UNTIL i > 25
  ( id = substring( val = sy-abcde off = i len = 1 )
    number = rnd->get\_next( ) ) ).
SELECT \*
       FROM @itab AS numbers
       WHERE number > 50
       ORDER BY id
       INTO TABLE @FINAL(result)
       ##db\_feature\_mode\[itabs\_in\_from\_clause\] ##itab\_db\_select.
cl\_demo\_output=>display( result ).

Example

Use of a table with an elementary data type as the data source of two [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) statements. The data is not needed on the database and the SELECT statements meet the requirements for [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_puffering.htm). This means that the statements can be executed on all database systems. In the second SELECT statement, a syntax error would occur without the alias name number, since the inline declaration after INTO cannot create an internal table with the column name table\_line. If the statements were modified in a such a way that they no longer met the requirements for table buffering, for example, by adding the addition DISTINCT, it would not be possible to execute them on all database systems.

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

-   [Internal Table as a Data Source of a SELECT Statement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_from_itab_abexa.htm)
-   [Internal Table as a Data Source of the Hierarchy Generator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_from_itab_hiera_abexa.htm)

Continue
![Example](exa.gif "Example") [SELECT, Internal Table as Data Source of a Query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_from_itab_abexa.htm)
![Example](exa.gif "Example") [SELECT, Internal Table as a Data Source of the Hierarchy Generator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_from_itab_hiera_abexa.htm)