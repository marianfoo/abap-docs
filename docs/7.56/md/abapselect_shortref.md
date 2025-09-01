  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  S

SELECT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm)

Syntax

SELECT *\[*SINGLE *\[*FOR UPDATE*\]**\]*
       *{* *\[*DISTINCT*\]* *{* \*
                    *|* *{* ..., data\_source~\*, ..., [sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_exp_shortref.htm)*}* *\[*AS alias*\]*, ... *}*
                    *|* (column\_syntax)
         FROM *{* *{* *{*data\_source *\[*WITH PRIVILEGED ACCESS*\]* *\[*AS tabalias*\]**}*
                *|* *{* *\[*(*\]* *{*data\_source *\[*WITH PRIVILEGED ACCESS*\]* *\[*AS tabalias*\]**}**|*join
                      *{**\[*INNER*\]* JOIN*}**|**{*LEFT*|*RIGHT *\[*OUTER *\[*MANY TO ONE*\]**\]* JOIN*}**|**{*CROSS JOIN*}*
                         *{*data\_source *\[*WITH PRIVILEGED ACCESS*\]* *\[*AS tabalias*\]**}**|*join *\[*ON join\_cond*\]*  *\[*)*\]* *}*
                *|* (source\_syntax) *\[*WITH PRIVILEGED ACCESS*\]* *\[*AS tabalias*\]* *}*
                *\[* *{*USING CLIENT clnt*}*
                *|* *{*USING CLIENTS IN @client\_range\_tab*}*
                *|* *{*USING CLIENTS IN T000*}*
                *|* *{*USING ALL CLIENTS*}*
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
                *|* *{* ..., data\_source~\*, ..., [sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_exp_shortref.htm)*}* *\[*AS alias*\]*, ... *}*
                *|* (column\_syntax) *}*
       *\[**\[*FOR ALL ENTRIES IN itab*\]* WHERE [sql\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_cond_shortref.htm)*\]*
       *\[*GROUP BY *{* [sql\_exp1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_exp_shortref.htm)*|* [grouping\_sets1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgrouping_sets_clause.htm), [sql\_exp2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_exp_shortref.htm)*|* [grouping\_sets2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgrouping_sets_clause.htm), ...*}**|*(column\_syntax)*\]*
       *\[*HAVING [sql\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_cond_shortref.htm)*\]*
       *\[*UNION ALL*|*DISTINCT SELECT ...*\]*
       *\[*ORDER BY *{* *{*PRIMARY KEY*}*
                 *|**{**{**{*col1*|*alias1*}* *\[*ASCENDING*|*DESCENDING*\]*,*}*
                   *{**{*col2*|*alias2*}* *\[*ASCENDING*|*DESCENDING*\]*,*}*
                   ... *}*
                 *|* (column\_syntax) *}**\]*.
       *{* *{* INTO (*\[*NEW*\]* @dobj1*|*@DATA(dobj1), *\[*NEW*\]* @dobj2|@DATA(dobj2), ...) *}*
       *|* *{* INTO *\[*CORRESPONDING FIELDS OF*\]* *\[*NEW*\]* @wa *\[*INDICATORS *{**\[*NOT*\]* NULL STRUCTURE null\_ind*}*
                                                        *|* (indicator\_syntax)*\]* *}*
       *|* *{* INTO*|*APPENDING *\[*CORRESPONDING FIELDS OF*\]* TABLE *\[*NEW*\]* @itab
                          *\[*INDICATORS *{**\[*NOT*\]* NULL STRUCTURE null\_ind*}*
                                    *|* (indicator\_syntax)*\]*
                          *\[*PACKAGE SIZE n*\]* *}*
       *|* *{* INTO *\[*NEW*\]* @DATA(wa) *\[*INDICATORS *{**\[*NOT*\]* NULL STRUCTURE null\_ind*}*
                                    *|* (indicator\_syntax)*\]**}*
       *|* *{* INTO TABLE *\[*NEW*\]* @DATA(itab) *\[*INDICATORS *{**\[*NOT*\]* NULL STRUCTURE null\_ind*}*
                                            *|* (indicator\_syntax)*\]*
                                  *\[*PACKAGE SIZE n*\]* *}* *}*
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

[ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry") statement. This statement reads data from one or more data sources into data objects. If the result set is not assigned in one step, a loop is opened which is closed using ENDSELECT. This loop provides the results in the target fields.

Additions

Specifying the Rows

-   [SINGLE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_single.htm) - Defines a single row result set. The result set is multirow by default.
-   [FOR UPDATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_single.htm) - Sets an [exclusive lock](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexclusive_lock_glosry.htm "Glossary Entry") on a single row in the database.
    

Structure of the result set

-   [FIELDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) - Required if the [FROM clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfrom_clause.htm) was specified first.
-   [DISTINCT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_clause.htm) - Removes duplicate rows from the result set.
-   [\*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_list.htm) - Reads all columns of all data sources.
-   [data\_source~\*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_list.htm) - Reads all columns of the specified data source.
-   [sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) [*\[*AS alias*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_list.htm) - Reads the result of an SQL expression and assigns an alias name alias (optional).
-   [(column\_syntax)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_list.htm) - Specifies the columns as the content of column\_syntax.
    

Specifying the Database Tables

-   [FROM data\_source *\[*AS tabalias*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfrom_clause.htm)
    Specifies a data source [data\_source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm). Possible data sources are DDIC database tables, common table expressions, table functions, DDIC views, and non-abstract CDS entities of ABAP Dictionary. Parameters can be passed to CDS entities. Path specifications are possible after common table expressions and CDS views. An [internal table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_itab.htm) can also be specified as a data source.
-   [FROM *\[*(*\]* *{*data\_source *\[*AS tabalias*\]**}**|*join
              *{**\[*INNER*\]* JOIN*}**|**{*LEFT*|*RIGHT *\[*OUTER *\[*MANY TO ONE*\]**\]* JOIN*}**|**{*CROSS JOIN*}*
                 *{*data\_source *\[*AS tabalias *\]**}**|*join *\[*ON join\_cond*\]* *\[*)*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_join.htm)
    Joins multiple data sources in a join expression. Inner and outer [joins](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_join.htm) can be created with join conditions join\_cond and [cross joins](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_join.htm) without conditions.
-   [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm)
    Disables [CDS access control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_access_control_glosry.htm "Glossary Entry").
-   [(source\_syntax)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfrom_clause.htm)
    Specifies the data sources as the content of source\_syntax.
-   [AS tabalias](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfrom_clause.htm)
    Defines an alias name tabalias for the data source.
-   [USING CLIENT clnt](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client.htm)
    Switches implicit [client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_handling_glosry.htm "Glossary Entry") to the [client](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_glosry.htm "Glossary Entry") specified in clnt.
-   [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client.htm)
    Switches implicit [client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_handling_glosry.htm "Glossary Entry") to multiple [clients](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_glosry.htm "Glossary Entry").
-   [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_client_obsolete.htm)
    Obsolete: Disables implicit [client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclient_handling_glosry.htm "Glossary Entry").
    

Specifying a Condition

-   [FOR ALL ENTRIES IN itab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwhere_all_entries.htm)
    Enables a condition to be used after WHERE on all rows in an internal table itab.
-   [WHERE sql\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhere.htm)
    Restricts the result set using the condition sql\_cond. The condition can consist of different relational expressions.
    

Specifying a Grouping

-   [GROUP BY *{**{*sql\_exp1*|*grouping\_sets1, sql\_exp2*|*grouping\_sets2, ...*}* *|* (column\_syntax) *}*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgroupby_clause.htm)
    Combines groups of rows that have the same content in the columns col1, col2, ... or in SQL expressions sql\_exp1, sql\_exp2, ... into a single row of the result set. Here, the columns can be specified dynamically in column\_syntax. grouping\_sets can be used to define multiple grouping sets under a GROUP BY clause.
-   [HAVING sql\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphaving_clause.htm)
    Restricts rows combined in groups in the result set using a condition sql\_cond.
    

Specifying a Union

-   [UNION ALL*|*DISTINCT SELECT ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapunion_clause.htm)
    Creates a union of the rows of the result sets of two SELECT statements.
    

Specifying a Sort

-   [ORDER BY
    *{*PRIMARY KEY*}**|**{**{**{*col1*|*alais1*}* *\[*ASCENDING*|*DESCENDING*\]*,*}*
    *{**{*col2*|*alias2*}* *\[*ASCENDING*|*DESCENDING*\]*,*}* ...*}**|*(column\_syntax)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaporderby_clause.htm)
    Sorts the result set by [primary key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_key_glosry.htm "Glossary Entry"), statically specified columns col1, col2, ... or alias1, alias2, ... or dynamically specified columns in column\_syntax. The sort direction can be specified for individual columns.
    

Specifying the Target Area

-   [INTO *\[*NEW*\]* @wa*|*(*\[*NEW*\]* @dobj1, *\[*NEW*\]* @dobj2 ...)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm)
    Specifies a work area wa or a list of data objects dobj1 dobj2 ... as the target fields. With the addition [NEW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_into_target.htm), reference variables are used and anonymous data objects are created.
-   [INTO*|*APPENDING TABLE itab *\[*PACKAGE SIZE n*\]*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm)
    Specifies an internal table itab as the target area. The result set is read into or attached to the table as a whole or in packages. With the addition [NEW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_into_target.htm), a reference variable is used and an anonymous data object is created.
-   [CORRESPONDING FIELDS OF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm)
    Transports only the columns that have target fields with the same name.
-   [*\[*NEW*\]* @DATA(wa)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm), [*\[*NEW*\]* @DATA(itab)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm)
    Inline declaration of the target area or of reference variables.
-   [INDICATORS ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_indicators.htm)
    Specifies indicators such as the [null indicator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennull_indicator_glosry.htm "Glossary Entry").
-   [EXTENDED RESULT @oref](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_extended_result.htm)
    Provides an extended result in a result object.
-   [CREATING READER*|*LOCATOR FOR ... COLUMNS ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_creating.htm)
    Specifies what type of [LOB handle](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlob_handle_glosry.htm "Glossary Entry") is created.
    

Specifying Additions

-   [UP TO n ROWS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_up_to_offset.htm)
    Restricts the number of rows read to n.
-   [OFFSET o](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_up_to_offset.htm)
    Reads the rows from the offset o.
-   [BYPASSING BUFFER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_additions.htm)
    Bypasses [table buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_buffering_glosry.htm "Glossary Entry").
-   [CONNECTION con*|*(con\_syntax)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_additions.htm)
    Executes the statement on a [secondary connection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_db_connection_glosry.htm "Glossary Entry").