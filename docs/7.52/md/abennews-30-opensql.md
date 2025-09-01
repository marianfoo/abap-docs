  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 3.0](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-30.htm) → 

Open SQL in Release 3.0

1.  Partly or fully specified WHERE condition at runtime when calling SELECT
    
2.  Name of the database table or of the view specified at runtime when calling SELECT, INSERT, UPDATE, MODIFY, and DELETE
    
3.  DUPREC errors returned from INSERT ... FROM TABLE itab
    
4.  Union of solution sets in SELECT with FOR ALL ENTRIES in itab
    
5.  Database rows read package-by-package in SELECT with PACKAGE SIZE n
    
6.  Explicit cursor processing
    
7.  SELECT list with [aggregate functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaggregate_function_glosry.htm "Glossary Entry") in SELECT
    
8.  INTO list in SELECT and FETCH
    

Modification 1

Partly or fully specified [WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm) condition at runtime when calling [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm)
The WHERE condition can be located partly or fully in an internal table. This means that WHERE conditions can be constructed dynamically at runtime. Unlike a [RANGES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapranges.htm) table, an internal table contains a WHERE condition as text. The internal table can then be accessed using SELECT ... WHERE (itab) or SELECT ... WHERE sql\_cond AND (itab).Here, itab stands for the name of the internal table and sql\_cond for the statically specified part of the WHERE condition.

Examples and further information can be found in the documentation for the [WHERE clause](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm).

Modification 2

Name of the database table or of the view specified at runtime when calling [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm), [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_dbtab.htm), [UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate.htm), [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_dbtab.htm), and [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_dbtab.htm)
The name of a database table or a view can be specified dynamically as the content of a field. Instead of specifying the table name statically in the source code, a field name in brackets is given. The content of this field is then interpreted as the table name.

Examples and further information can be found in the documentation for the [FROM clause](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm).

Modification 3

DUPREC errors returned from [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_dbtab.htm) ... FROM TABLE itab
In cases where one or more rows cannot be inserted because rows with the specified keys already exist, a runtime error always occurred in the past. The addition ... ACCEPTING DUPLICATE KEYS sets the return code SY-SUBRC to 4 rather than canceling the process. The remaining rows are then added after the command has been executed.

Further information can be found in the documentation of the command [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_dbtab.htm).

Modification 4

Union of solution sets in [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) with FOR ALL ENTRIES in itab
A SELECT command with ...FOR ALL ENTRIES IN itab WHERE sql\_cond forms the union of solution sets of all SELECT commands produced when the fields of the internal table itab referenced in the WHERE condition are replaced by the corresponding values of a table row. This variant is very useful if, for example, an internal table is filled with composite [primary keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_key_glosry.htm "Glossary Entry"). All corresponding database rows can be selected with a single SELECT command. This technique avoids the need for a loop containing a SELECT SINGLE ... for each row of the internal table.

Examples and further information can be found in the documentation for the [WHERE clause](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm).

Modification 5

Database rows read package-by-package in [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) with PACKAGE SIZE n
SELECT ... INTO TABLE itab PACKAGE SIZE n places the selected rows in the internal table in packages of n rows rather than all at once. Each new package overwrites the content of itab. This is a good way of making sure that the internal table does not get too big. If PACKAGE SIZE is used together with SELECT ... APPENDING TABLE itab, the previous content of itab is preserved and each new package is added at the end of the table.

Examples and further information can be found in the documentation for the [INTO clause](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm).

Modification 6

Explicit cursor processing
The commands OPEN CURSOR, FETCH, and CLOSE CURSOR enable nested processing of one or more database tables without the need to keep redefining the datasets. By using the addition WITH HOLD, a cursor can be opened which is then preserved across [database commits](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_commit_glosry.htm "Glossary Entry").

Examples and further information can be found in the documentation for the ABAP commands [OPEN CURSOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_cursor.htm), [FETCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfetch.htm), and [CLOSE CURSOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclose_cursor.htm).

Modification 7

SELECT list with [aggregate functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaggregate_function_glosry.htm "Glossary Entry") in [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm)

Alongside SELECT \*, SELECT COUNT( \* ), and SELECT SINGLE \*, the aggregate functions MIN, MAX, SUM, COUNT, and AVG can be specified plus fields of the database table in the SELECT list. Specifying DISTINCT causes duplicate rows to be removed automatically from the solution set.

Examples and further information can be found in the documentation for the [SELECT statement](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm).

Modification 8

INTO list in [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) and [FETCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfetch.htm)

If the SELECT list specifies individual columns, the INTO clause can include a list of ABAP fields of equal length to be used as the target area.

Examples and further information can be found in the documentation for the [INTO clause](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm).