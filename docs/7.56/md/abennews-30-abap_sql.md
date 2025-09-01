  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 3.0](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-30.htm) → 

ABAP SQL in Release 3.0

[1\. Partly or fully specified WHERE condition at runtime in SELECT](#!ABAP_MODIFICATION_1@1@)
[2\. Specification of the name of the database table or of the view at runtime in ABAP SQL.](#!ABAP_MODIFICATION_2@2@)
[3\. Return of DUPREC errors from INSERT ... FROM TABLE itab](#!ABAP_MODIFICATION_3@3@)
[4\. Union of solution sets in SELECT with FOR ALL ENTRIES in itab](#!ABAP_MODIFICATION_4@4@)
[5\. Database rows read package-by-package in SELECT with PACKAGE SIZE n](#!ABAP_MODIFICATION_5@5@)
[6\. Explicit cursor processing](#!ABAP_MODIFICATION_6@6@)
[7\. SELECT list with aggregate functions in SELECT](#!ABAP_MODIFICATION_7@7@)
[8\. INTO list in SELECT and FETCH](#!ABAP_MODIFICATION_8@8@)

Modification 1   

Partly or fully specified WHERE condition at runtime in SELECT
The WHERE condition can be located partly or fully in an internal table. This means that WHERE conditions can be constructed dynamically at runtime. Unlike a [RANGES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapranges.htm) table, an internal table contains a WHERE condition as text. The internal table can then be accessed using SELECT ... WHERE (itab) or SELECT ... WHERE sql\_cond AND (itab). Here, itab stands for the name of the internal table and sql\_cond for the statically specified part of the WHERE condition.

Examples and further information can be found in the documentation for the [WHERE clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhere.htm).

Modification 2   

Specification of the name of the database table or of the view at runtime in ABAP SQL.
When using [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm), [INSERT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinsert_dbtab.htm), [UPDATE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapupdate.htm), [MODIFY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_dbtab.htm) and [DELETE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdelete_dbtab.htm):
The name of a database table or a view can be specified dynamically as the content of a field. Instead of specifying the table name statically in the source code, a field name in brackets is given. The content of this field is then interpreted as the table name.

Examples and further information can be found in the documentation for the [FROM clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfrom_clause.htm).

Modification 3   

Return of DUPREC errors from INSERT ... FROM TABLE itab
In cases where one or more rows cannot be inserted because rows with the specified keys already exist, a runtime error always occurred in the past. The addition ... ACCEPTING DUPLICATE KEYS has the effect of setting the return code SY-SUBRC to 4 rather than aborting the process. The remaining rows are then added after the statement has been executed.

Further information can be found in the documentation of the statement [INSERT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinsert_dbtab.htm).

Modification 4   

Union of solution sets in SELECT with FOR ALL ENTRIES in itab
A SELECT statement with ...FOR ALL ENTRIES IN itab WHERE sql\_cond forms the union of solution sets of all SELECT statements produced when the fields of the internal table itab referenced in the WHERE condition are replaced by the corresponding values of a table row. This variant is very useful if, for example, an internal table is filled with composite [primary keys](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_key_glosry.htm "Glossary Entry"). All corresponding database rows can be selected with a single SELECT statement. This technique avoids the need for a loop containing a SELECT SINGLE ... for each row of the internal table.

Examples and further information can be found in the documentation for the [WHERE clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhere.htm).

Modification 5   

Database rows read package-by-package in SELECT with PACKAGE SIZE n
SELECT ... INTO TABLE itab PACKAGE SIZE n places the selected rows in the internal table in packages of n rows rather than all at once. Each new package overwrites the content of itab. This is a good way of making sure that the internal table does not get too big. If PACKAGE SIZE is used together with SELECT ... APPENDING TABLE itab, the previous content of itab is preserved and each new package is added at the end of the table.

Examples and further information can be found in the documentation for the [INTO clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm).

Modification 6   

Explicit cursor processing
The statements OPEN CURSOR, FETCH, and CLOSE CURSOR enable nested processing of one or more database tables without the need to keep redefining the datasets. By using the addition WITH HOLD, a cursor can be opened which is then preserved across [database commits](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_commit_glosry.htm "Glossary Entry").

Examples and further information can be found in the documentation for the ABAP statements [OPEN CURSOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_cursor.htm), [FETCH](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapfetch.htm), and [CLOSE CURSOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclose_cursor.htm).

Modification 7   

SELECT list with aggregate functions in SELECT

Alongside SELECT \*, SELECT COUNT( \* ), and SELECT SINGLE \*, the aggregate functions MIN, MAX, SUM, COUNT, and AVG can be specified plus fields of the database table in the SELECT list. Specifying DISTINCT causes duplicate rows to be removed automatically from the solution set.

Examples and further information can be found in the documentation for the [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) statement.

Modification 8   

INTO list in SELECT and FETCH

If the SELECT list specifies individual columns, the INTO clause can include a list of ABAP fields of equal length to be used as the target area.

Examples and further information can be found in the documentation for the [INTO clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinto_clause.htm).