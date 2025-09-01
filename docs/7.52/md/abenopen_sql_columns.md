  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm) → 

Open SQL - Specified Columns

Syntax

... *\[*data\_source*|*tabalias~*\]*colname
  *|* *\[*data\_source*|*tabalias~*\]*[\\path\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_path.htm)\-element ...

Variants:

[1\. ... colname](#!ABAP_VARIANT_1@1@)
[2\. ... \\path\_expr-element](#!ABAP_VARIANT_2@2@)

Addition:

[... data\_source*|*tabalias~](#!ABAP_ONE_ADD@1@)

Effect

Specifies a column of a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) or the target of a [write](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_writing.htm) in an Open SQL statement.

Note

A specified column is allowed in places where [SQL expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_expression_glosry.htm "Glossary Entry") are allowed and has the same meaning as a column specified as an [elementary SQL expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_elem.htm).

Variant 1

... colname

Effect

Specifies a column of a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) of a [query](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquery_glosry.htm "Glossary Entry") or of the target of a [write](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_writing.htm) directly using its name colname (as defined as a component of the associated structure in ABAP Dictionary).

Example

Columns carrid, carrname, and url specified directly in the clauses of a [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement.

SELECT FROM scarr
       FIELDS carrid, carrname
       WHERE  url = ' '
       INTO   TABLE @DATA(itab).

Variant 2

... \\path\_expr-element

Effect

Specifies an element of a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") after a path expression [\\path\_expr](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_path.htm). This can be specified in SELECT statements where path expressions can be used and in all places where a column can be specified (unless otherwise indicated).

The element element closes the path expression (compiled from [associations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm)) for which the structure component selector \- is used. This element must be an element of the target data source of the final association in the path.

Notes

-   [Path expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_path.htm) can be used in SELECT statements, which use the [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") to access a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") in which the used associations are published for use from outside.

-   If an element is specified after the path expression, this represents a column specified of the join created implicitly for the path expression. Left outer joins (LEFT OUTER JOIN) are created for path expressions in specified columns.

-   When a column is specified using a path expression, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_strict_mode_750.htm), which handles the statement more strictly than the regular syntax check.

Example

A [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) statement accesses the [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") demo\_cds\_assoc\_scarr that publishes an association \_spfli. As its target data source, this association uses a view that publishes the associations \_sflight and \_sairport. The columns specified by the SELECT statement cover any path expressions created by these associations. See also the associated [executable example](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpath_expr_in_colspec_abexa.htm).

SELECT carrname,
        \\\_spfli-connid AS connid,
        \\\_spfli\\\_sairport-name AS name
        FROM demo\_cds\_assoc\_scarr
        WHERE carrid = '...' and
              \\\_spfli\\\_sflight-fldate > '........'
        INTO TABLE @DATA(itab).

Addition

... data\_source*|*tabalias~

Effect

The [column selector](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_comp_selector_glosry.htm "Glossary Entry") ~ can be used to prefix every specified column directly with the name of the associated data source of a query or of the target of a write (as data\_source or as an alternative table name tabalias).

If multiple [data sources](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) in an Open SQL statement need to be edited and the column name is not unique, the data source must be specified.

Example

Uses the name scarr of a data source and the alternative table name connections of a different data source in front of the column selector ~ of specified columns.

SELECT FROM scarr
         INNER JOIN spfli AS connections
           ON scarr~carrid = connections~carrid
       FIELDS scarr~carrname, connections~connid
       WHERE  connections~cityfrom = '...'
       INTO TABLE @DATA(itab).