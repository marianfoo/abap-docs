  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Reads](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_reading.htm) →  [SELECT clauses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_clauses.htm) →  [SELECT - select\_clause](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_clause.htm) →  [SELECT - select\_list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm) → 

SELECT - col\_spec

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_shortref.htm)

Syntax

... [col](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_columns.htm)
  *|* [agg\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_aggregate.htm)
  *|* [sql\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm)

Alternatives:

[1\. ... col](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... agg\_exp](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... sql\_exp](#!ABAP_ALTERNATIVE_3@3@)

Effect

When constructing the results set of a [query](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquery_glosry.htm "Glossary Entry") from individual columns, the columns can be specified either by directly entering the name of a column [col](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_columns.htm), by using an aggregate expression [agg\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_aggregate.htm), or by using an SQL expression [sql\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm).

Note

If SQL expressions are specified together with aggregate expressions, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.

Alternative 1

... col

Effect

Specifies [col](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_columns.htm) of a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) column directly. If the name of a data source is specified directly, the relevant content is provided in the corresponding column of the result set. The data type of a column in the results set is the data type of the corresponding component in ABAP Dictionary. The corresponding data host variable after INTO or APPENDING be a [suitable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_into_conversion.htm) choice.

If required, columns can be specified using a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_path.htm) for associations of a CDS view. If the addition CORRESPONDING or an inline declaration @DATA(...) is used in the [INTO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) clause, any columns specified using a path expression must have an alternative column name alias defined using [AS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm).

If the value of a column of type LRAW or LCHR is read, the associated length field of type INT2 or INT4 must also be read and specified in the list in front of the column of type LRAW or LCHR.

Note

Columns can only be specified directly in the obsolete form of [space-separated lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_lists_obsolete.htm).

Example

Specifies the columns CARRID, CARRNAME, and URL of the database table SCARR directly.

SELECT FROM scarr
       FIELDS carrid, carrname , url
       INTO   TABLE @DATA(itab).

Alternative 2

... agg\_exp

Effect

Specifies an aggregate expression [agg\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_aggregate.htm), in which a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) column is specified as an argument of an aggregate function. An aggregate function uses the values from multiple rows of the specified column to calculate a single value (with a data type that depends on the aggregate function), and then places this value in the column of the results set. The corresponding data host variable after INTO or APPENDING be a [suitable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_into_conversion.htm) choice.

If aggregate expressions are used, any column identifiers that are not included as arguments of an aggregate function must be included after the addition [GROUP BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgroupby_clause.htm). The aggregate functions evaluate the contents of the groups defined by GROUP BY in the database system and pass the result to the merged rows of the results set.

The following rules apply when aggregate expressions are used in the SELECT list:

-   If the addition FOR ALL ENTRIES is used before [WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm), or if [cluster tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencluster_table_glosry.htm "Glossary Entry") or [pooled tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpooled_table_glosry.htm "Glossary Entry") are included after FROM, no aggregate expressions apart from COUNT( \* ) can be used. In cases like these, the aggregate expression is not evaluated in the database, but is emulated on the application server.
    
-   Columns of type STRING, RAWSTRING, LCHR, or LRAW cannot be handled with aggregate functions.
    
-   When aggregate expressions are used, the SELECT statement bypasses [table buffering](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_buffering_glosry.htm "Glossary Entry").
    
-   [Null values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry") are not included in the calculation for the aggregate functions. The result is a null value only if all the rows in the column in question contain a null value.
    
-   If aggregate expressions only are used after SELECT, the results set has just one row and the addition GROUP BY is not required. If a non-table-like target area is specified after INTO in cases where only aggregate expressions are used and the addition GROUP BY is not specified after a single SELECT statement (which means not in the case of multiple statements joined using [UNION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunion.htm)), the statement ENDSELECT cannot be specified (as is also the case when using the addition SINGLE). If the aggregate expression COUNT( \* ) is not used, an internal table can be specified after INTO regardless of the addition GROUP BY and the first row of this table filled.
    
-   If aggregate functions are used only without GROUP BY, the results set also contains a row if no data is found in the database. If COUNT( \* ) is used, the column in question contains the value 0. The columns of the other aggregate functions contain initial values. This row is assigned to the data object specified after INTO and, unless COUNT( \* ) is used only statically and an alternative column name is not specified, sy-subrc is set to 0 and sy-dbcnt is set to 1.
    
-   If COUNT( \* ) is used as the only static column specified and an alternative column name is not specified using [AS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm) and GROUP BY is not specified at the same time, the addition INTO can be omitted. The number of selected rows can then be taken from the system field sy-dbcnt. If more than 2,147,483,647 rows are selected, sy-dbcnt contains the value -1. If no data is found on the database, sy-dbcnt is set to 0 and sy-subrc is set to 4.
    
-   To be able to evaluate the result of aggregate functions in [INTO*|*APPENDING CORRESPONDING FIELDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) and [ORDER BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaporderby_clause.htm), an alternative column name must be specified using [AS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm). This is then used by these additions.
    

Notes

-   Aggregate expressions cannot be specified together with [data\_source~\*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm) in the comma-separated list.
    
-   Aggregate expressions can only be specified in the obsolete form of [space-separated lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_lists_obsolete.htm).
    

Example

Gets the number of rows in the database table SCARR.

SELECT FROM scarr
       FIELDS COUNT( \* )
       INTO   @DATA(wa).

Alternative 3

... sql\_exp

Effect

Specifies an SQL expression [sql\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) that can have columns of the [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm), literals, [host variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm), or (again) SQL expressions as operands. An SQL expression uses the operands to determine a value (with a data type dependent on the expression) and places this value in the column of the results set. The corresponding data host variable after INTO or APPENDING be a [suitable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_into_conversion.htm) choice. The values of the data source columns specified as operands are the selected values of the current row.

SQL expressions cannot currently be used together with the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_itab.htm). The data types usable in SQL expressions are also restricted. [LOBs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_glosry.htm "Glossary Entry") in particular cannot be edited in expressions.

SQL are not possible if the program attribute fixed point arithmetic is [switched off](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennon_fixed_point_obsolete.htm). They cannot be used when accessing [pooled tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencluster_table_glosry.htm "Glossary Entry") or [cluster tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpooled_table_glosry.htm "Glossary Entry"). They dictate that the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_740_sp05.htm), which handles the statement more strictly than the regular syntax check. In particular, [host variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm) must be prefixed with the escape character @ and lists must be specified as comma-separated lists.

Notes

-   SQL expressions are calculated in the database system.
    
-   If SQL expressions other than [host variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhost_variable_glosry.htm "Glossary Entry") or [host expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhost_expression_glosry.htm "Glossary Entry") are used, the SELECT statement bypasses [table buffering](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_buffering_glosry.htm "Glossary Entry").
    

Example

Uses an SQL expression to specify a column.

SELECT CONCAT\_WITH\_SPACE( carrname && ' (' && carrid && '),', url, 1 )
       FROM scarr
       INTO TABLE @DATA(itab).