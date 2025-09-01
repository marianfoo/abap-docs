---
title: "Obsolete Access Statements"
description: |
  The following statements are predecessors of ABAP SQL(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm 'Glossary Entry') and are not part of it. The keywords of the obsolete access statements are based on the processing statements for internal tables(https://hel
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendb_access_obsolete.htm"
abapFile: "abendb_access_obsolete.htm"
keywords: ["delete", "loop", "do", "if", "try", "class", "data", "internal-table", "abendb", "access", "obsolete"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_access_obsolete.htm) → 

Obsolete Access Statements

The following statements are predecessors of [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") and are not part of it. The keywords of the obsolete access statements are based on the [processing statements for internal tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_statements.htm) and not on [SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_glosry.htm "Glossary Entry").

The statements specified here are only possible for reasons of downward compatibility and only for database tables or [classic views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclassical_view_glosry.htm "Glossary Entry") whose names begin with "T" and have a maximum of five characters.

-   [READ TABLE dbtab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_dbtab.htm)

-   [LOOP AT dbtab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_dbtab.htm)

-   [REFRESH itab FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaprefresh_obsolete.htm)

-   [MODIFY dbtab - obsolet](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_dbtab_obsolete.htm)

-   [DELETE dbtab - obsolet](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_dbtab_obsolete.htm)

Note

The statements MODIFY and DELETE specified here overlap the [short forms](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_obsolete.htm) of ABAP SQL which are also obsolete. Since the keywords MODIFY and DELETE are also in SQL, these statements were transferred to ABAP SQL. MODIFY and DELETE stop being ABAP SQL statements only when used with the addition VERSION.

Continue
[READ TABLE dbtab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_dbtab.htm)
[LOOP AT dbtab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_dbtab.htm)
[REFRESH itab FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaprefresh_obsolete.htm)
[MODIFY dbtab - VERSION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_dbtab_obsolete.htm)
[DELETE dbtab - VERSION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_dbtab_obsolete.htm)