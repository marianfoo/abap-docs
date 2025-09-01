---
title: "SELECT - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) Syntax SELECT SINGLE FOR UPDATE  DISTINCT     ..., data_source~, ..., col agg_exp(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaggregate_shortref.ht
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_shortref.htm"
abapFile: "abapselect_shortref.htm"
keywords: ["select", "update", "loop", "do", "if", "try", "class", "data", "internal-table", "abapselect", "shortref"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  S

SELECT - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm)

Syntax

SELECT *\[*SINGLE *\[*FOR UPDATE*\]**\]*
       *{* *\[*DISTINCT*\]* *{* \*
                    *|* *{* ..., data\_source~\*, ...,
                        col*|* [agg\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaggregate_shortref.htm)( *\[*DISTINCT*\]* col )*|* [sql\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_exp_shortref.htm)*}* *\[*AS alias*\]*, ... *}*
                    *|* (column\_syntax)
         FROM *{* *{* *{*data\_source *\[*WITH PRIVILEGED ACCESS*\]* *\[*AS tabalias*\]**}*
                *|* *{* *\[*(*\]* *{*data\_source *\[*WITH PRIVILEGED ACCESS*\]* *\[*AS tabalias*\]**}**|*join
                      *{**\[*INNER*\]* JOIN*}**|**{*LEFT*|*RIGHT *\[*OUTER *\[*MANY TO ONE*\]**\]* JOIN*}**|**{*CROSS JOIN*}*
                         *{*data\_source *\[*WITH PRIVILEGED ACCESS*\]* *\[*AS tabalias*\]**}**|*join *\[*ON join\_cond*\]*  *\[*)*\]* *}*
                *|* (source\_syntax) *\[*WITH PRIVILEGED ACCESS*\]* *\[*AS tabalias*\]* *}*
                *\[* *{*USING CLIENT clnt*}*
                *|* *{*CLIENT SPECIFIED *\[*entity1~clnt*\]* *\[*, entity2~clnt*\]* ...*}* *\]* *}* *}*
     *|* *{* FROM *{* *{* *{*data\_source *\[*WITH PRIVILEGED ACCESS*\]* *\[*AS tabalias*\]**}*
                *|* *{* *\[*(*\]* *{*data\_source *\[*WITH PRIVILEGED ACCESS*\]* *\[*AS tabalias*\]**}**|*join
                      *{**\[*INNER*\]* JOIN*}**|**{*LEFT*|*RIGHT *\[*OUTER *\[*MANY TO ONE*\]**\]* JOIN*}**|**{*CROSS JOIN*}*
                         *{*data\_source *\[*WITH PRIVILEGED ACCESS*\]* *\[*AS tabalias*\]**}**|*join *\[*ON join\_cond*\]*  *\[*)*\]* *}*
                *|* (source\_syntax) *\[*AS tabalias*\]* *}*
                *\[* *{*USING CLIENT clnt*}*
                *|* *{*CLIENT SPECIFIED *\[*entity1~clnt*\]* *\[*, entity2~clnt*\]* ...*}* *\]* *}*
         FIELDS *\[*DISTINCT*\]*
                *{* \*
                *|* *{* ..., data\_source~\*, ...,
                    col*|*[agg\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaggregate_shortref.htm)( *\[*DISTINCT*\]* col )*|* [sql\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_exp_shortref.htm)*}* *\[*AS alias*\]*, ... *}*
                *|* (column\_syntax) *}*
       *\[**\[*FOR ALL ENTRIES IN itab*\]* WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_cond_shortref.htm)*\]*
       *\[*GROUP BY *{*col1*|* [sql\_exp1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_exp_shortref.htm), col2*|* [sql\_exp2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_exp_shortref.htm), ...*}**|*(column\_syntax)*\]*
       *\[*HAVING [sql\_cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_cond_shortref.htm)*\]*
       *\[*UNION ALL*|*DISTINCT SELECT ...*\]*
       *\[*ORDER BY *{* *{*PRIMARY KEY*}*
                 *|**{**{**{*col1*|*a1*}* *\[*ASCENDING*|*DESCENDING*\]*,*}*
                   *{**{*col2*|*a2*}* *\[*ASCENDING*|*DESCENDING*\]*,*}*
                   ... *}*
                 *|* (column\_syntax) *}**\]*.
       *{* *{* INTO *{**\[*CORRESPONDING FIELDS OF*\]* wa*}**|*(dobj1, dobj2, ...) *}*
       *|* *{* INTO*|*APPENDING *\[*CORRESPONDING FIELDS OF*\]* TABLE itab
                          *\[*PACKAGE SIZE n*\]* *}*
       *|* *{* INTO @DATA(wa) *}*
       *|* *{* INTO TABLE @DATA(itab) *\[*PACKAGE SIZE n*\]* *}* *}*
       *\[* EXTENDED RESULT @oref *\]*
       *\[* CREATING *{*  READER*|*LOCATOR FOR *{* COLUMNS col1 col2 ... *}*
                                 *|* *{* ALL *\[*OTHER*\]* *\[*BLOB*|*CLOB*\]* COLUMNS *}*
                    *\[*READER*|*LOCATOR FOR ...*\]* *}*
                *|* *{*  (crea\_syntax) *}* *\]*
       *\[*UP TO n ROWS*\]*
       *\[*OFFSET o*\]*
       *\[*BYPASSING BUFFER*\]*
       *\[*CONNECTION con*|*(con\_syntax)*\]*
  ...
*\[*ENDSELECT.*\]*

Effect

[Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") statement. This statement reads data from one or more database tables into data objects. If the results set is not assigned in one step, a loop is opened which is closed using ENDSELECT. This loop provides the results in the target fields.

Additions

Specifying the Rows

-   [SINGLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_single.htm) - Defines a single row results set. The results set is multirow by default.
    
-   [FOR UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_single.htm) - Sets an [exclusive lock](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexclusive_lock_glosry.htm "Glossary Entry") on a single row in the database.
    

Structure of the Results Set

-   [FIELDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) - Required if the [FROM clause](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm) was specified first.
    
-   [DISTINCT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_clause.htm) - Removes duplicate rows from the results set.
    
-   [\*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm) - Reads all columns of all data sources.
    
-   [data\_source~\*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm) - Reads all columns of the specified data source.
    
-   [col *\[*AS alias*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm) - Reads individual columns col and assigns an alternative column name alias (optional).
    
-   [agg\_exp( *\[*DISTINCT*\]* col1 ) ... agg\_exp( *\[*DISTINCT*\]* col2 ) ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_aggregate.htm) - Evaluates [aggregate functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaggregate_function_glosry.htm "Glossary Entry") [agg\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaggregate_shortref.htm) for columns col1, col2 .... Duplicate arguments can be excluded.
    
-   [sql\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) - SQL expression evaluated on the database.
    
-   [AS a1 ... AS a2 ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm) - Defines alternative column names a1, a2, ...
    
-   [(column\_syntax)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_list.htm) - Specifies the columns as the content of column\_syntax.
    

Specifying the Database Table(s)

-   [FROM data\_source *\[*AS tabalias*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm)
    Specifies a data source [data\_source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm). Possible data sources are database tables, classic views, and CDS entities in ABAP Dictionary. Parameters can be passed to the latter, and the path can be specified. An [internal table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_itab.htm) can also be specified as a data source.
    
-   [FROM *\[*(*\]* *{*data\_source *\[*AS tabalias*\]**}**|*join
    *{**\[*INNER*\]* JOIN*}**|**{*LEFT*|*RIGHT *\[*OUTER *\[*MANY TO ONE*\]**\]* JOIN*}**|**{*CROSS JOIN*}*
    *{*data\_source *\[*AS tabalias *\]**}**|*join *\[*ON join\_cond*\]* *\[*)*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_join.htm)
    Joins multiple data sources in a join expression. Inner and outer [joins](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_join.htm) can be created with join conditions join\_cond and [cross joins](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_join.htm) without conditions.
    
-   [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm)
    Switches [CDS access control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_access_control_glosry.htm "Glossary Entry") off.
    
-   [(source\_syntax)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm)
    Specifies the database tables as the content of source\_syntax.
    
-   [AS tabalias](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm)
    Defines an alternative table name tabalias.
    
-   [USING CLIENT clnt](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm)
    Switches automatic [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the [client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_glosry.htm "Glossary Entry") specified in clnt.
    
-   [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_client.htm)
    Deactivates automatic [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm "Glossary Entry").
    

Specifying a Condition

-   [FOR ALL ENTRIES IN itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_itab.htm)
    Enables a condition to be used after WHERE on all rows in an internal table itab.
    
-   [WHERE sql\_cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm)
    Restricts the results set using the condition sql\_cond. The condition can consist of different relational expressions.
    

Specifying a Grouping

-   [GROUP BY *{* *{*col1*|*sql\_exp1,  col2*|*sql\_exp2, ...*}* *|* (column\_syntax) *}*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgroupby_clause.htm)
    Combines groups of rows that have the same content in the columns col1, col2, ... or in SQL expressions sql\_exp1, sql\_exp1, ... into a single row of the results set. Here, the columns can be specified dynamically in column\_syntax.
    
-   [HAVING sql\_cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaphaving_clause.htm)
    Restricts rows combined in groups in the results set using a condition sql\_cond.
    

Specifying a Union

-   [UNION ALL*|*DISTINCT SELECT ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapunion_clause.htm)
    Creates a union of the rows of the results sets of two SELECT statements.
    

Specifying a Sort

-   [ORDER BY
    *{*PRIMARY KEY*}**|**{**{**{*col1*|*a1*}* *\[*ASCENDING*|*DESCENDING*\]*,*}*
    *{**{*col2*|*a2*}* *\[*ASCENDING*|*DESCENDING*\]*,*}* ...*}**|*(column\_syntax)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaporderby_clause.htm)
    Sorts the results set by [primary key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_key_glosry.htm "Glossary Entry"), statically specified columns col1, col2, ... or a1, a2, ... or dynamically specified columns in column\_syntax. The sort direction can be specified for individual columns.
    

Specifying the Target Area

-   [INTO wa*|*(dobj1, dobj2 ...)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm)
    Specifies a work area wa or a list of data objects dobj1 dobj2 ... as the target fields.
    
-   [INTO*|*APPENDING TABLE itab *\[*PACKAGE SIZE n*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm)
    Specifies an internal table itab as the target area. The result set is read into or attached to the table as a whole or in packages.
    
-   [CORRESPONDING FIELDS OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm)
    Transports only the columns that have target fields with the same name.
    
-   [@DATA(wa)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm), [@DATA(itab)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm)
    Inline declaration of the target area.
    
-   [EXTENDED RESULT @oref](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_extended_result.htm)
    Provides an extended result in a result object.
    
-   [CREATING READER*|*LOCATOR FOR ... COLUMNS ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_creating.htm)
    Specifies what type of [LOB handle](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_handle_glosry.htm "Glossary Entry") is created.
    

Specifying Additions

-   [UP TO n ROWS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_up_to_offset.htm)
    Restricts the number of rows read to n.
    
-   [OFFSET o](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_up_to_offset.htm)
    Reads the rows from the offset o.
    
-   [BYPASSING BUFFER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_additions.htm)
    Bypasses [table buffering](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_buffering_glosry.htm "Glossary Entry").
    
-   [CONNECTION con*|*(con\_syntax)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_additions.htm)
    Executes the statement on a [secondary connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").