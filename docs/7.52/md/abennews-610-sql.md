  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-6.htm) →  [Changes in Release 6.10](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-610.htm) → 

SQL and Updates in Release 6.10

[1\. COMMIT WORK in local updates](#!ABAP_MODIFICATION_1@1@)
[
2\. Additional syntax checks](#!ABAP_MODIFICATION_2@2@)
[
3\. Type check in the addition VERSION](#!ABAP_MODIFICATION_3@3@)
[
4\. Dynamic SQL](#!ABAP_MODIFICATION_4@4@)
[
5\. Automatic client handling](#!ABAP_MODIFICATION_5@5@)
[
6\. Use of DISTINCT in pooled tables and cluster tables](#!ABAP_MODIFICATION_6@6@)
[
7\. Database changes using read-only views](#!ABAP_MODIFICATION_7@7@)
[
8\. Handleable exceptions in Open SQL and Native SQL](#!ABAP_MODIFICATION_8@8@)
[
9\. INSERT and UPDATE of the system table TRDIR](#!ABAP_MODIFICATION_9@9@)
[
10\. Selection table and target table in FOR ALL ENTRIES](#!ABAP_MODIFICATION_10@10@)
[
11\. New exception for pooled tables and cluster tables](#!ABAP_MODIFICATION_11@11@)
[
12\. Strings on the database](#!ABAP_MODIFICATION_12@12@)
[
13\. WHERE condition optional in DELETE statement](#!ABAP_MODIFICATION_13@13@)

Modification 1

COMMIT WORK in Local Updates

As in the asynchronous update, the system now also sets the system field SY-ONCOM = V in the local update. Therefore the system recognizes a [COMMIT WORK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcommit.htm) in the function module that makes the local update, and this raises a non-handleable exception (a runtime error)

Modification 2

Additional Syntax Checks

Additional syntax checks have been introduced for the following constructs:

1.  [Subqueries](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubquery_glosry.htm "Glossary Entry") in WHERE conditions are only permitted if the source table is transparent.
2.  The addition [GROUP BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgroupby_clause.htm) is now also only possible with transparent tables.
3.  [INTO CORRESPONDING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) is now only possible when moving data to structured work areas or internal tables.
4.  [ESCAPE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_like.htm) in WHERE conditions for SELECT, DELETE, and UPDATE of pooled tables
    

Modification 3

Type Check in the Addition VERSION

In the case of the statements [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_dbtab.htm), [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_dbtab.htm), [READ TABLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_dbtab.htm), and [LOOP AT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_dbtab.htm) only fields of types C, N, D, T, and [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") structures of the same types are permitted for the addition VERSION.

Modification 4

Dynamic SQL

Dynamic specifications are now possible for the following language constructions:

1.  ABAP variables in [WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm), [HAVING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaphaving_clause.htm), [FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm), and [SET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate.htm).
2.  Lowercase spelling when specifying table names dynamically.
3.  Dynamic WHERE for [DELETE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_dbtab.htm) and [UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate.htm)
4.  Dynamic SET for [UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate.htm).
5.  Dynamic [aggregate functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_aggregate.htm) in the [HAVING](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaphaving_clause.htm) clause
6.  Dynamic [FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfrom_clause.htm) for SELECT ... FROM for joins, [ON conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_join.htm), and [table aliases](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapaliases.htm)
7.  Strings, tables of strings, and C fields for all operand positions for which statements could previously be specified dynamically in an internal table.
    

Modification 5

Automatic Client Handling

The client specification is now carried out in the database interface. Previously the system changed the client field in an internal table or work area, as soon as the user carried out an [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_dbtab.htm) or [UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate.htm) on the database table. Now the system enters the current client in the database table, while the client in the work area or internal table remains unchanged.

Modification 6

Use of DISTINCT in Pooled Tables and Cluster Tables

If DISTINCT is used in the [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_clause.htm) clause with pooled tables and cluster tables, this always produces (statically) a syntax error if individual columns are accessed. This combination was not recognized dynamically and the addition DISTINCT was simply not executed. In dynamic cases, the handleable exception CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS is now raised.

Modification 7

Database Changes Using Read-Only Views

Previously, an attempt to change database tables using read-only views simply caused a runtime error. In the case of static recognition, a syntax error is now triggered.

Modification 8

Handleable Exceptions in Native SQL and Open SQL

In statically embedded [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_glosry.htm "Glossary Entry"), all runtime errors of the database interface have now been assigned exception classes, so that the exceptions between [TRY ... ENDTRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptry.htm) can be handled. In addition, the opening of too many [cursors](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_cursor.htm) and connections can be caught.

In Open SQL, [exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql_exceptions.htm) that occur when the source code is being parsed can now be handled using [TRY ... ENDTRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptry.htm). In addition, the runtime errors DUPLICATE KEY, SQL ERROR, STATEMENT TOO LARGE, LOBLENGTH EXCEEDED, CONVERSION ERROR
and INVALID CURSOR have been assigned exception classes.

Modification 9

INSERT and UPDATE of the System Table TRDIR

Previously, the instructions [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_dbtab.htm)
TRDIR and [UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapupdate.htm) TRDIR were valid. In the case of UPDATE TRDIR, the attributes could be changed by the runtime synchronization without registration. Both statements now cause a syntax error. Only MODIFY TRDIR and [MODIFY TRDIR FROM wa](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_dbtab.htm) are still permitted, because there the runtime synchronization is switched on.

Modification 10

Selection Table and Target Table in FOR ALL ENTRIES

The table of selection conditions for [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm) and the target table of the [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinto_clause.htm) statement can be the same. This makes the form SELECT ... INTO itab FOR ALL ENTRIES IN itab possible.

Modification 11

New Exception for Pooled Tables and Cluster Tables

If pooled tables or cluster tables are used in subqueries, joins, [aggregate functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaggregate_function_glosry.htm "Glossary Entry"), or with GROUP BY, this raises the exception CX\_SY\_DYNAMIC\_OSQL\_SEMANTICS.

Modification 12

Strings on the Database

It is now possible to edit character strings and binary data saved to database columns as [strings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) in Open SQL.

Modification 13

WHERE Condition Optional in DELETE Statement

In the statement [DELETE FROM dbtab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_dbtab.htm), the WHERE condition is no longer required. A DELETE statement without a WHERE condition deletes all rows of a table.