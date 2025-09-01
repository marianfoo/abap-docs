  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 6.xx](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-6.htm) →  [News for ABAP Release 6.10](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-610.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SQL%20and%20Updates%20in%20ABAP%20Release%206.10%2C%20ABENNEWS-610-SQL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SQL and Updates in ABAP Release 6.10

[1\. COMMIT WORK in Local Updates](#!ABAP_MODIFICATION_1@1@)
[2\. Additional Syntax Checks](#!ABAP_MODIFICATION_2@2@)
[3\. Type Check in the Addition VERSION](#!ABAP_MODIFICATION_3@3@)
[4\. Dynamic SQL](#!ABAP_MODIFICATION_4@4@)
[5\. Implicit Client Handling](#!ABAP_MODIFICATION_5@5@)
[6\. Use of DISTINCT in Pooled Tables and Cluster Tables](#!ABAP_MODIFICATION_6@6@)
[7\. Database Changes Using Read-Only Views](#!ABAP_MODIFICATION_7@7@)
[8\. Catchable Exceptions in ABAP SQL and Native SQL](#!ABAP_MODIFICATION_8@8@)
[9\. INSERT, UPDATE, and MODIFY of the System Table TRDIR](#!ABAP_MODIFICATION_9@9@)
[10\. Selection Table and Target Table in FOR ALL ENTRIES](#!ABAP_MODIFICATION_10@10@)
[11\. New Exception for Pooled Tables and Cluster Tables](#!ABAP_MODIFICATION_11@11@)
[12\. Strings on the Database](#!ABAP_MODIFICATION_12@12@)
[13\. WHERE Condition Optional in DELETE Statement](#!ABAP_MODIFICATION_13@13@)

Modification 1   

COMMIT WORK in Local Updates

As in the asynchronous update, the system now also sets the system field SY-ONCOM = V in the local update. Therefore the system recognizes a [COMMIT WORK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit.htm) in the function module that makes the local update, and this raises an uncatchable exception (a runtime error)

Modification 2   

Additional Syntax Checks

Additional syntax checks were introduced for the following constructs:

-   [Subqueries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubquery_glosry.htm "Glossary Entry") in WHERE conditions are only allowed if the source table is transparent.
-   The addition [GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgroupby_clause.htm) is now also only possible with transparent tables.
-   [INTO CORRESPONDING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm) is now only possible when moving data to structured work areas or internal tables.
-   [ESCAPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_like.htm) in WHERE conditions for SELECT, DELETE, and UPDATE of pooled tables

Modification 3   

Type Check in the Addition VERSION

In the case of the statements [MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_dbtab.htm), [DELETE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_dbtab.htm), [READ TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_dbtab.htm), and [LOOP AT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_dbtab.htm) only fields of types C, N, D, T, and [flat](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_glosry.htm "Glossary Entry") structures of the same types are allowed for the addition VERSION.

Modification 4   

Dynamic SQL

Dynamic specifications are now possible for the following language constructs:

-   ABAP variables in [WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhere.htm), [HAVING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphaving_clause.htm), [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm), and [SET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate.htm).
-   Lowercase spelling when specifying table names dynamically.
-   Dynamic WHERE in [DELETE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_dbtab.htm) and [UPDATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate.htm)
-   Dynamic SET in [UPDATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate.htm).
-   Dynamic [aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_aggregate.htm) in the [HAVING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphaving_clause.htm) clause
-   Dynamic [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm) in SELECT ... FROM for joins, [ON conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_join.htm), and [table aliases](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapaliases.htm)
-   Strings, tables of strings, and C fields for all operand positions for which statements could previously be specified dynamically in an internal table.

Modification 5   

Implicit Client Handling

The client is now specified in the database interface. Previously the system changed the client field in an internal table or work area, as soon as the user carried out an [INSERT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_dbtab.htm) or [UPDATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate.htm) on the database table. Now the system enters the current client in the database table, while the client in the work area or internal table remains unchanged.

Modification 6   

Use of DISTINCT in Pooled Tables and Cluster Tables

If DISTINCT is used in the [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_clause.htm) clause with pooled tables and cluster tables, this always produces (statically) a syntax error if individual columns are accessed. This combination was not detected dynamically and the addition DISTINCT was simply not executed. In dynamic cases, the catchable exception CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS is now raised.

Modification 7   

Database Changes Using Read-Only Views

Previously, an attempt to change database tables using read-only views simply caused a runtime error. If this is known statically, a syntax error is now produced.

Modification 8   

Catchable Exceptions in ABAP SQL and Native SQL

In ABAP SQL, [exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_exceptions.htm) that occur when the source code is being parsed can now be handled using [TRY ... ENDTRY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptry.htm). As before, various runtime errors were assigned exception classes.

In statically embedded [Native SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennative_sql_glosry.htm "Glossary Entry"), all runtime errors of the database interface are now assigned exception classes, so that the exceptions between [TRY ... ENDTRY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptry.htm) can be handled. In addition, the opening of too many [cursors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_cursor.htm) and connections can be caught.

Modification 9   

INSERT, UPDATE, and MODIFY of the System Table TRDIR

Previously, INSERT TRDIR and UPDATE TRDIR were valid ABAP SQL statements. In the case of UPDATE TRDIR, program properties could be changed by the runtime synchronization without registration. Both statements now cause a syntax error. Only MODIFY TRDIR is still allowed, because there the runtime synchronization is switched on. The statement is for internal usage only and not documented.

Modification 10   

Selection Table and Target Table in FOR ALL ENTRIES

The table of selection conditions for [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhere.htm) and the target table of the [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinto_clause.htm) statement can be the same. This makes the form SELECT ... INTO itab FOR ALL ENTRIES IN itab possible.

Modification 11   

New Exception for Pooled Tables and Cluster Tables

If pooled tables or cluster tables are used in subqueries, joins, [aggregate functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenaggregate_function_glosry.htm "Glossary Entry"), or with GROUP BY, this raises the exception CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS.

Modification 12   

Strings on the Database

It is now possible to process character strings and binary data saved to database columns as [strings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) in ABAP SQL.

Modification 13   

WHERE Condition Optional in DELETE Statement

In the statement [DELETE FROM dbtab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_dbtab.htm), the WHERE condition is no longer required. A DELETE statement without a WHERE condition deletes all rows of a table.