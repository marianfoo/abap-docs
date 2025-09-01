  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 3.0](javascript:call_link\('abennews-30.htm'\)) → 

ABAP SQL in Release 3.0

1.  Partly or fully specified WHERE condition at runtime when calling SELECT
    
2.  Name of the database table or of the view specified at runtime when calling SELECT, INSERT, UPDATE, MODIFY, and DELETE
    
3.  Return of DUPREC errors from INSERT ... FROM TABLE itab
    
4.  Union of solution sets in SELECT with FOR ALL ENTRIES in itab
    
5.  Database rows read package-by-package in SELECT with PACKAGE SIZE n
    
6.  Explicit cursor processing
    
7.  SELECT list with [aggregate functions](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry") in SELECT
    
8.  INTO list in SELECT and FETCH
    

Modification 1

Partly or fully specified [WHERE](javascript:call_link\('abapwhere.htm'\)) condition at runtime when calling [SELECT](javascript:call_link\('abapselect.htm'\))
The WHERE condition can be located partly or fully in an internal table. This means that WHERE conditions can be constructed dynamically at runtime. Unlike a [RANGES](javascript:call_link\('abapranges.htm'\)) table, an internal table contains a WHERE condition as text. The internal table can then be accessed using SELECT ... WHERE (itab) or SELECT ... WHERE sql\_cond AND (itab). Here, itab stands for the name of the internal table and sql\_cond for the statically specified part of the WHERE condition.

Examples and further information can be found in the documentation for the [WHERE clause](javascript:call_link\('abapwhere.htm'\)).

Modification 2

Specification of the name of the database table or of the view at runtime when calling [SELECT](javascript:call_link\('abapselect.htm'\)), [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)), [UPDATE](javascript:call_link\('abapupdate.htm'\)), [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)) and [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\))
The name of a database table or a view can be specified dynamically as the content of a field. Instead of specifying the table name statically in the source code, a field name in brackets is given. The content of this field is then interpreted as the table name.

Examples and further information can be found in the documentation for the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)).

Modification 3

Return of DUPREC errors from [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)) ... FROM TABLE itab
In cases where one or more rows cannot be inserted because rows with the specified keys already exist, a runtime error always occurred in the past. The addition ... ACCEPTING DUPLICATE KEYS has the effect of setting the return code SY-SUBRC to 4 rather than aborting the process. The remaining rows are then added after the command has been executed.

Further information can be found in the documentation of the command [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)).

Modification 4

Union of solution sets in [SELECT](javascript:call_link\('abapselect.htm'\)) with FOR ALL ENTRIES in itab
A SELECT command with ...FOR ALL ENTRIES IN itab WHERE sql\_cond forms the union of solution sets of all SELECT commands produced when the fields of the internal table itab referenced in the WHERE condition are replaced by the corresponding values of a table row. This variant is very useful if, for example, an internal table is filled with composite [primary keys](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry"). All corresponding database rows can be selected with a single SELECT command. This technique avoids the need for a loop containing a SELECT SINGLE ... for each row of the internal table.

Examples and further information can be found in the documentation for the [WHERE clause](javascript:call_link\('abapwhere.htm'\)).

Modification 5

Database rows read package-by-package in [SELECT](javascript:call_link\('abapselect.htm'\)) with PACKAGE SIZE n
SELECT ... INTO TABLE itab PACKAGE SIZE n places the selected rows in the internal table in packages of n rows rather than all at once. Each new package overwrites the content of itab. This is a good way of making sure that the internal table does not get too big. If PACKAGE SIZE is used together with SELECT ... APPENDING TABLE itab, the previous content of itab is preserved and each new package is added at the end of the table.

Examples and further information can be found in the documentation for the [INTO clause](javascript:call_link\('abapinto_clause.htm'\)).

Modification 6

Explicit cursor processing
The commands OPEN CURSOR, FETCH, and CLOSE CURSOR enable nested processing of one or more database tables without the need to keep redefining the datasets. By using the addition WITH HOLD, a cursor can be opened which is then preserved across [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry").

Examples and further information can be found in the documentation for the ABAP commands [OPEN CURSOR](javascript:call_link\('abapopen_cursor.htm'\)), [FETCH](javascript:call_link\('abapfetch.htm'\)), and [CLOSE CURSOR](javascript:call_link\('abapclose_cursor.htm'\)).

Modification 7

SELECT list with [aggregate functions](javascript:call_link\('abenaggregate_function_glosry.htm'\) "Glossary Entry") in [SELECT](javascript:call_link\('abapselect.htm'\))

Alongside SELECT \*, SELECT COUNT( \* ), and SELECT SINGLE \*, the aggregate functions MIN, MAX, SUM, COUNT, and AVG can be specified plus fields of the database table in the SELECT list. Specifying DISTINCT causes duplicate rows to be removed automatically from the solution set.

Examples and further information can be found in the documentation for the [SELECT statement](javascript:call_link\('abapselect.htm'\)).

Modification 8

INTO list in [SELECT](javascript:call_link\('abapselect.htm'\)) and [FETCH](javascript:call_link\('abapfetch.htm'\))

If the SELECT list specifies individual columns, the INTO clause can include a list of ABAP fields of equal length to be used as the target area.

Examples and further information can be found in the documentation for the [INTO clause](javascript:call_link\('abapinto_clause.htm'\)).