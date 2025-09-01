  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Cheat Sheets](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_blurb.htm) → 

ABAP SQL: Working with persisted data in database tables

\* Work in progress \*

This cheat sheet provides quick information and tips about working with persisted data in database tables using ABAP SQL. Furthermore, it serves as a collection of syntax and code snippets in one place for your reference. For more details, refer to the respective topic in the ABAP Keyword Documentation.

-   [Database tables in AS ABAP in a nutshell](#@@ITOC@@ABAPSHEET_ABAP_SQL_1)
    -   [Excursion: Views](#@@ITOC@@ABAPSHEET_ABAP_SQL_2)
-   [ABAP SQL](#@@ITOC@@ABAPSHEET_ABAP_SQL_3)
-   [Read data using SELECT](#@@ITOC@@ABAPSHEET_ABAP_SQL_4)
    -   [Basic syntax](#@@ITOC@@ABAPSHEET_ABAP_SQL_5)
    -   [Using SELECT 1: Basics](#@@ITOC@@ABAPSHEET_ABAP_SQL_6)
    -   [Using SELECT 2: Clause variations and additions](#@@ITOC@@ABAPSHEET_ABAP_SQL_7)
    -   [Using SELECT 3: Further clauses](#@@ITOC@@ABAPSHEET_ABAP_SQL_8)
    -   [Using SELECT 4: Read from multiple tables](#@@ITOC@@ABAPSHEET_ABAP_SQL_9)
    -   [Using SELECT 5: Excursions](#@@ITOC@@ABAPSHEET_ABAP_SQL_10)
-   [Changing data in database tables](#@@ITOC@@ABAPSHEET_ABAP_SQL_11)
    -   [Using INSERT](#@@ITOC@@ABAPSHEET_ABAP_SQL_12)
    -   [Using UPDATE](#@@ITOC@@ABAPSHEET_ABAP_SQL_13)
    -   [Using MODIFY](#@@ITOC@@ABAPSHEET_ABAP_SQL_14)
    -   [Using DELETE](#@@ITOC@@ABAPSHEET_ABAP_SQL_15)
-   [Demonstration program](#@@ITOC@@ABAPSHEET_ABAP_SQL_16)

Database tables in AS ABAP in a nutshell

Database tables in [AS ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_abap_glosry.htm "Glossary Entry") ...

-   are objects of the [ABAP Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary_glosry.htm "Glossary Entry")
-   consist of table rows and columns; each row represents a data record whose components (or fields) are available in columns; each component has a data type
-   are [relational database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrelational_database_glosry.htm "Glossary Entry") tables, i. e. information can be stored in multiple database tables that are related to each other.
    -   For example, there might be a table containing information on flight connections, flight destinations and times, another table is related to this one and includes further details on the flights like occupied seats in the plane or price details.
    -   Such tables define a relationship using [foreign key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_forkeyrel.htm) relations.
-   have at least one key, i.e. the [primary key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_key_glosry.htm "Glossary Entry"), to uniquely identify table rows; this might be one or more columns at the beginning of each database table.
-   are either cross-[client](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_glosry.htm "Glossary Entry") or client-specific to keep the data separated; client-specific tables, which are the vast majority of database tables, include a client field (often named MANDT) as their first key field.
    -   Note: ABAP SQL ensures that a statement only manipulates data from the current client
-   have a [flat structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenflat_structure_glosry.htm "Glossary Entry") type.
-   are physically created on the database when activated - in contrast to [internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_table_glosry.htm "Glossary Entry"). Plus, a globally available [structured type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstructured_type_glosry.htm "Glossary Entry") of the same name is created, too. Hence, in an ABAP program, a database table's name can be used to declare data objects, for example, internal tables. These can be accessed by ABAP SQL, too.
-   are primarily processed through ABAP SQL statements via [structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstructure_glosry.htm "Glossary Entry") and internal tables that allow to store a single row or multiple rows of data at once.

Excursion: Views

Views ...

-   are further ABAP Dictionary objects to group particular data.
-   combine columns of one or more database tables.
-   usually realize a [join](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenjoin_glosry.htm "Glossary Entry") with defined [join conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenjoin_condition_glosry.htm "Glossary Entry").
-   Note:
    -   Similar to database tables, the columns of such a view form a flat structure. Hence, the view's name can be used to declare data objects, too.
    -   The views can be accessed by ABAP SQL, especially for reading purposes using SELECT.

"Classic" [DDIC Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_view_glosry.htm "Glossary Entry") ...

-   are the eldest form of views.
-   can be accessed by ABAP SQL for read and write operations, however, writing is supported if the view is created with only one database table
-   can only be created in the [ABAP Workbench](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_workbench_glosry.htm "Glossary Entry")

"Modern" Views (since release 7.40)

-   [External Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexternal_view_glosry.htm "Glossary Entry") as proxies for [SAP HANA Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_view_glosry.htm "Glossary Entry") (Attribute View, Analytic View, Calculation View)
    -   SAP HANA Views are entities of the SAP HANA database that are defined using the [SAP HANA Studio](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_studio_glosry.htm "Glossary Entry").
    -   They are based on HANA-specific data types.
    -   Using External Views of the ABAP dictionary, you can make those SAP HANA Views "known" to the ABAP program. In doing so, the External Views can be used like classic DDIC views as structured data types and as a source for reading operations with ABAP SQL.
    -   To be used only if the central database of the AS ABAP is a [SAP HANA database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_database_glosry.htm "Glossary Entry").
-   [ABAP Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry") ...
    -   serve the purpose of defining semantically rich data models.
    -   have a lot more possibilities than classic views, for example, they support annotations (provide information about view or individual fields), data sources can be combined using associations, unions are possible, or views can be defined with input parameters.
    -   are used like a classic database views as structured data types and used as source for reading operations with ABAP SQL (using [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm)).
    -   are created using [Data Definition Language (DDL)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddl_glosry.htm "Glossary Entry") in the [ADT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadt_glosry.htm "Glossary Entry") (that is, a source code editor, in contrast to a form-based editor)
    -   are, in contrast to External Views, supported by all database systems (that support the ABAP CDS characteristics).

ABAP SQL

-   ABAP-specific form of standard [Structured Query Language (SQL)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_glosry.htm "Glossary Entry") which is the common language to access database tables.
-   What happens behind the scenes when using an ABAP SQL statement?
    -   Generally speaking, tables in relational database systems have a programming interface allowing table access using standard SQL, however, these interfaces are not entirely uniform and can have individual characteristics.
    -   To make AS ABAP independent of the database used, the ABAP SQL statements are converted to the corresponding [Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_glosry.htm "Glossary Entry") statements of the current database system. In doing so, ABAP SQL allows a hassle-free and uniform access to the database tables no matter what database system is used
-   The main ABAP SQL keywords to read and change data are the following:
    
    Keyword
    
    Purpose
    
    SELECT
    
    Reads data from database tables
    
    INSERT
    
    Adds lines to database tables
    
    UPDATE
    
    Changes the contents of lines of database tables
    
    MODIFY
    
    Inserts lines into database tables or changes the contents of existing lines
    
    DELETE
    
    Deletes lines from database tables
    

Read data using SELECT

Basic syntax

You use ABAP SQL SELECT statements to read records from the database, either by accessing a database table directly or via a view. The SELECT statement includes several clauses that serve different purposes. The following code snippet shows the basic syntax:

SELECT FROM source "What db tables or views to read from.
  FIELDS field\_list "What columns should be read.
  WHERE condition "Specifies conditions on which rows should be read.
  INTO target. "Data object into which data should be read.

Note:

-   There are further clauses. They are dealt with further down.
-   Especially in older ABAP programs, you will see other forms of the SELECT syntax that you should no longer use. For example, the INTO clause should be placed after the other clauses. This was not possible for older statements.
-   The list of fields can also directly follow the SELECT keyword and be positioned before the FROM clause. In this case, the FIELDS clause must not be specified. The following two code snippets are basically the same:
    
    SELECT FROM dbtab
      FIELDS comp1, comp2, comp3
      ...
    SELECT comp1, comp2, comp3
      FROM dbtab
      ...
    

Using SELECT 1: Basics

Read all fields of single row into structure. The read result can be either stored in an existing structure (struc) or a structure that is declared inline. Specify an asterisk (\*) to indicate that all fields should be read. Alternatively, you can list all the fields separated by comma. However, select only those fields that you are really interested in as a rule for performance reasons.

Note:

-   The assumption is that struc has the same structure type as the database table dbtab.
-   As mentioned above, an alternative syntax to below is: SELECT SINGLE \* FROM dbtab WHERE ....
-   ABAP variables must be preceded by @ when they interfere with database tables. See [host variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_variables.htm).
    
    SELECT SINGLE FROM dbtab
      FIELDS \*
      WHERE ...
      INTO @struc. "Existing structure of the same type as dbtab.
    
    SELECT SINGLE FROM dbtab
      FIELDS \*
      WHERE ...
      INTO @DATA(lv\_struc). "Structure declared inline.
    

Read all fields of multiple rows into internal table. The read result can be either stored in an existing internal table (itab) or an internal table that is declared inline. The assumption is that itab has the same structure type as the database table.

SELECT FROM dbtab
  FIELDS \*
  WHERE ...
  INTO TABLE @itab.

SELECT FROM dbtab
  FIELDS \*
  WHERE ...
  INTO TABLE @DATA(lv\_itab).

SELECT loop. Sequentially read multiple rows into a structure. If the row that is found and returned should be kept, you might further process it within an IF sy-subrc = 0. statement.

SELECT FROM dbtab
  FIELDS \*
  WHERE ...
  INTO @struc.
    IF sy-subrc = 0.
      APPEND struc TO itab. "For example, add the line to a table.
    ENDIF.
ENDSELECT.

Read selected fields of a single row into existing structure that has a different structure type. On the one hand, only particular columns are read by specifying the names in the FIELD clause. On the other hand, if you choose to return the result in a structure that has a different structure type, the CORRESPONDING FIELDS OF addition must be used so as not to mess up the returned result.

Note:

-   If only INTO is used, the selected columns must be in the correct order fitting to the structure type of the target variable. Only the content of columns for which there are components of the same name in the structure of the target is read from the result set.
-   If identically named components have different types, the system tries to convert contents of source fields into the type of the target field. In this case, there is a risk of data loss and runtime errors due to conversion errors.
    
    SELECT SINGLE FROM dbtab
      FIELDS comp1, comp2, comp3
      WHERE ...
      INTO CORRESPONDING FIELDS OF @diff\_struc.
    

Read selected fields of multiple rows into existing internal table that has a different structure type.

SELECT FROM dbtab
  FIELDS comp1, comp2, comp3
  WHERE ...
  INTO CORRESPONDING FIELDS OF TABLE @diff\_itab.

Using SELECT 2: Clause variations and additions

SELECT/FROM clause:

Check existence of a row in a database table

SELECT SINGLE @abap\_true "Instead of @abap\_true, you could use 'X'
  FROM dbtab
  WHERE ...
  INTO @DATA(exists).
IF exists = abap\_true.
...
ENDIF.

Exclude duplicate rows from a multi-row result set using [DISTINCT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_clause.htm). The duplicate entries might occur due to a non-unique WHERE clause.

SELECT DISTINCT comp1
  FROM dbtab
  WHERE ...
  INTO TABLE @itab.

Set new column names with [AS](abapselect_list.htm#!ABAP_ONE_ADD@1@)

SELECT FROM dbtab
  FIELDS comp1 AS alias1, comp2 AS alias2, comp3 AS alias3
  WHERE ...
  INTO TABLE @DATA(itab\_as).

Get data from database table in another client. Note that there are several variants of the [USING CLIENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client.htm) addition, for example, you can also specify ALL CLIENTS to select from database tables in all clients. Furthermore, the USING CLIENT addition is also available for the ABAP SQL statements that modify database table entries further down.

SELECT \*
  FROM dbtab USING CLIENT '000'
             "ALL CLIENTS
  WHERE ...
  INTO TABLE @itab.

Get aggregate data using an SQL expression. See the ABAP keyword documentation for more information on the various [SQL expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm). In below example, the sum of all values in the specified column is calculated.

SELECT SUM( comp3 )
  FROM dbtab
  WHERE ...
  INTO @DATA(sum).

Get aggregate data using multiple SQL expressions. If multiple SQL expressions are used, aliases must be defined. In below example, sum of all values in the specified column is calculated. Furthermore, the average is of the values of a column is calculated. Here, the data type in which the average value is returned is specified explicitly to get a better readable result.

SELECT SUM( comp2 ) AS sum
             AVG( comp3 AS DEC( 14,4 ) ) AS average
  FROM dbtab
  WHERE ...
  INTO @DATA(sql\_expr).

Get aggregate data using [CASE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_case.htm) expressions

DATA(status\_a) = 'A'.
  DATA(status\_b) = 'B'.
  DATA(status\_c) = 'C'.
SELECT comp1, comp2, comp3,
    CASE WHEN comp4 = 100 THEN @status\_a
         WHEN comp4 < 50 AND comp5 > 200 THEN @status\_b
         ELSE @status\_c
    END AS status
  FROM dbtab
  WHERE ...
  INTO TABLE @DATA(itab\_case).

FIELD clause:

Get aggregate data using SQL expressions. In below example, the median value of all values of a specified column is calculated. Furthermore, a subtraction is carried out for the values of two columns.

SELECT FROM dbtab
  FIELDS MEDIAN( comp1 ) AS median\_value, comp2 - comp4 AS sub
  WHERE ...
  INTO @DATA(median\_result).

WHERE clause:

Various WHERE clause options to restrict the result. Note that without a WHERE clause, all rows are considered for the operation. The clause parts that are commented out in the following code snippet just demonstrate how the WHERE clause might look like and which expressions might be used. There are more options available. See the topic [SQL Conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenasql_cond.htm) in the ABAP Keyword Documentation for more information on those options.

SELECT FROM dbtab
  FIELDS comp1, comp2, comp3
  WHERE comp1 = 'abc' "Equals some value
        "comp2 > 100 "Greater than some value
        "Not equals plus an additional condition that must be considered
        "comp2 <> 100 AND comp4 = 'xyz'
        "(Not) between a value range; including OR operator
        "comp1 BETWEEN 1 AND 10 OR comp3 NOT BETWEEN 20 AND 30
        "A character literal has a certain pattern, preceded and
        "followed by any string.
        "comp1 LIKE '%XYZ%'
        "The second character is not Y. \_ stands for any character.
        "comp1 NOT LIKE '\_Y%'
        "Contains one of the values specified in the parentheses
        "comp1 IN ( 'ABC', 'DEF', 'GHI' )
        "Does not contain one of the values specified in the parentheses
        "comp1 NOT IN ( 'JKL', 'MNO' )
  INTO TABLE @DATA(itab\_where).

Get aggregate data using expressions. In below example, a subtraction is carried out for the values of two columns.

SELECT FROM dbtab
  FIELDS comp1, comp2, comp3
  WHERE comp4 - comp5 < 10
  INTO @DATA(result).

INTO clause:

Restrict absolute number of returned table rows using the addition [UP TO n ROWS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_up_to_offset.htm). In below example, only five rows should be returned at most.

SELECT \* FROM dbtab
  WHERE ...
  INTO TABLE @DATA(itab\_upto) UP TO 5 ROWS.

Appending the result set to an existing internal table that has the same structure type as the database table. By appending, you avoid the deletion of existing rows in internal tables.

SELECT \* FROM dbtab
  WHERE ...
  APPENDING TABLE @itab.

Appending the result set to an existing internal table that has a different structure type than the database table.

SELECT \* FROM dbtab
  WHERE ...
  APPENDING CORRESPONDING FIELDS OF TABLE @itab.

Read single fields into variables. You can also process multiple table entries by using a SELECT loop. Note that the number of columns specified (here in FIELDS clause) must match the number of elements in the INTO clause.

SELECT FROM dbtab
  FIELDS comp1, comp2, comp3
  WHERE ...
  INTO (@res1,@res2,@res3).

Read into packages when reading into internal tables. The package size defines how many rows should be selected in one execution of a loop. This is handy in case of a very large amount of data to be processed and that might be too large for the memory capacity of an internal table so as to avoid program termination. The package size is specified by an integer. See more information here: [PACKAGE SIZE n](abapinto_clause.htm#!ABAP_ONE_ADD@1@).

SELECT FROM dbtab
  FIELDS comp1, comp2, comp3
  WHERE ...
  INTO TABLE @DATA(itab\_pack) PACKAGE SIZE i.
...
ENDSELECT.

Using SELECT 3: Further clauses

[GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgroupby_clause.htm) clause: Combining groups of rows of the result set into one row.

SELECT FROM dbtab
  FIELDS comp1, MIN( comp2 ) AS min, MAX( comp3 ) AS max
  WHERE ...
  GROUP BY comp1
  INTO ...

[HAVING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphaving_clause.htm) clause: Combining groups of rows of the result set into one row and setting conditions for aggregated rows.

SELECT FROM dbtab
  FIELDS comp1, comp2, comp3
  WHERE ...
  GROUP BY comp1, comp2, comp3
  HAVING comp1 LIKE '%XYZ%' AND SUM( comp7 ) > 100
  INTO ...

[ORDER BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaporderby_clause.htm) clause: Sort result set.

SELECT FROM dbtab
  FIELDS \*
  WHERE ...
  ORDER BY PRIMARY KEY
           "comp2 ASCENDING
           "comp2 DESCENDING
  INTO ...

Using SELECT 4: Read from multiple tables

Using [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwhere_all_entries.htm): Read data from a table depending on the content of an internal table.

Note: Ensure that the internal table from which to read is not initial. It is recommended to use a subquery, which is shown in the next example, and use a SELECT statement that reads from the internal table (... ( SELECT ... FROM itab2 WHERE ...).

IF ( 0 < lines( itab2 ) ).
SELECT comp1, comp2, comp3
  FROM dbtab
  INTO TABLE @itab1
  FOR ALL ENTRIES IN @itab2
  WHERE comp1 = @itab2-comp1 ...
ENDIF.

Using a subquery: Read from a database table depending on data of another database table. More information: [EXISTS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwhere_logexp_exists.htm). The components of the table are referenced by ~.

SELECT comp1, comp2, comp3
  FROM dbtab AS tab1
  WHERE EXISTS
   ( SELECT comp1 FROM dbtab2
     WHERE comp1 = tab1~comp1 AND comp2 = tab1~comp2 )
  INTO ...

Using an inner join: Combine data of multiple database tables. In this kind of joins, columns with rows of the left-hand side and those of the right-hand side are only joined if the rows meet the join conditions (ON ...). If there are no equivalent entries in the first or second table, the rows are not joined.

SELECT a~comp1, a~comp2, b~comp3, c~comp4
  FROM dbtab1 AS a
  INNER JOIN dbtab2 AS b
   ON a~comp1 = b~comp1 AND a~comp2 = b~comp2
  INNER JOIN dbtab3 AS c
   ON a~comp1 = c~comp1
  WHERE ...
  INTO ...

Using a left outer join: Combine data of multiple database tables. The columns of each row on the right-hand side that do not meet the ON condition are filled with initial values and linked with the columns of the left-hand side. If the conditions of the WHERE clause have been met, each row on the left-hand side of the left outer join produces at least one row in the selection, irrespective of the ON condition.

SELECT a~comp1, a~comp2, b~comp3,
  FROM dbtab1 AS a
  LEFT OUTER JOIN dbtab2 AS b
   ON a~comp1 = b~comp1
  WHERE ...
  INTO ...

Using a [UNION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapunion.htm): Combine data of multiple database tables. The columns of the result set keep the names defined in the statement on the left of UNION. The result set of rows of the SELECT statement on the right of UNION are inserted into the results set of the SELECT statement on the left of UNION.

SELECT FROM dbtab1
  FIELDS ...
  WHERE ...
UNION
  SELECT FROM dbtab2
   FIELDS ...
   WHERE ...
  INTO ...

Further Information

There are more join variants available. See the ABAP Keyword Documentation on [joins](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_join.htm) for more information.

Using SELECT 5: Excursions

Using SELECT to read from DDIC views, CDS views or using an internal table as data source to be read from.

See the executable example.

Changing data in database tables

Using INSERT

"Insert individual row into database table
INSERT dbtab FROM @row.
INSERT INTO dbtab VALUES row. "Alternative syntax.
"Insert multiple rows (from an internal table) into database table.
INSERT dbtab FROM TABLE @itab.
"Insert multiple rows accepting duplicate keys. All rows that would
"produce duplicate entries in the database table regarding the keys
"are discarded and sy-subrc is set to 4.
INSERT dbtab FROM TABLE @itab ACCEPTING DUPLICATE KEYS.

Using UPDATE

"Change contents by overwriting entire rows from a work area
UPDATE dbtab FROM @row.
"Change contents by overwriting entire rows from an internal table
UPDATE dbtab FROM TABLE @itab.
"Change contents of specific columns without overwriting existing
"contents of rows
UPDATE dbtab SET comp4 = 'XYZ' WHERE ... .

Using MODIFY

"Insert rows into database table or change existing rows
MODIFY dbtab FROM itab.

Using DELETE

"Delete table row from work area.
DELETE dbtab FROM row.
"Delete table rows by condition
DELETE FROM dbtab WHERE ... .
"Delete complete table
DELETE FROM dbtab.

Demonstration program

Executable Example

The example [ABAP SQL - Working with persisted data in database tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensheet_abap_sql_abexa.htm) demonstrates all of above mentioned syntactical options in one program.

Continue
![Example](exa.gif "Example") [ABAP SQL - Working with Persisted Data in Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensheet_abap_sql_abexa.htm)