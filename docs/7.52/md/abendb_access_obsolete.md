---
title: "Obsolete Access Statements"
description: |
  The following statements are part of predecessors of Open SQL(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm 'Glossary Entry') and not Open SQL itself. The keywords of the obsolete access statements are based on the processing statements for internal tables(ht
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendb_access_obsolete.htm"
abapFile: "abendb_access_obsolete.htm"
keywords: ["delete", "loop", "do", "if", "try", "class", "data", "internal-table", "abendb", "access", "obsolete"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_access_obsolete.htm) → 

Obsolete Access Statements

The following statements are part of predecessors of [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry") and not Open SQL itself. The keywords of the obsolete access statements are based on the [processing statements for internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) and not on [SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_glosry.htm "Glossary Entry").

The statements listed here are only possible for reasons of downward compatibility and only for database tables or [classic views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclassical_view_glosry.htm "Glossary Entry") whose names begin with "T" and have a maximum of five characters.

-   [READ TABLE dbtab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_dbtab.htm)

-   [LOOP AT dbtab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_dbtab.htm)

-   [REFRESH itab FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaprefresh_obsolete.htm)

-   [MODIFY dbtab - obsolet](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_dbtab_obsolete.htm)

-   [DELETE dbtab - obsolet](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_dbtab_obsolete.htm)

Note

The statements MODIFY and DELETE listed here overlap the [short forms](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_obsolete.htm) of Open SQL which are also obsolete. Since the keywords MODIFY and DELETE are also in SQL, these statements were transferred to Open SQL. MODIFY and DELETE stop being Open SQL statements only when used with the addition VERSION.

Continue
[READ TABLE dbtab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_dbtab.htm)
[LOOP AT dbtab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_dbtab.htm)
[REFRESH itab FROM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaprefresh_obsolete.htm)
[MODIFY dbtab - VERSION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_dbtab_obsolete.htm)
[DELETE dbtab - VERSION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_dbtab_obsolete.htm)