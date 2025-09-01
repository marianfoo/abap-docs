---
title: "Obsolete Access Statements"
description: |
  The following statements are predecessors of ABAP SQL(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm 'Glossary Entry') and are not part of it. The keywords of the obsolete access statements are based on the processing statements for internal tables(https://hel
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access_obsolete.htm"
abapFile: "abendb_access_obsolete.htm"
keywords: ["delete", "loop", "do", "if", "try", "data", "internal-table", "abendb", "access", "obsolete"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_storage_obsolete.htm) →  [Obsolete Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_access_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete Access Statements, ABENDB_ACCESS_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Obsolete Access Statements

The following statements are predecessors of [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry") and are not part of it. The keywords of the obsolete access statements are based on the [processing statements for internal tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_statements.htm) and not on [SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_glosry.htm "Glossary Entry").

The statements listed here are only possible for reasons of downward compatibility and only for database tables or [DDIC table views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_view_glosry.htm "Glossary Entry") whose names begin with "T" and have a maximum of five characters.

-   [READ TABLE dbtab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table_dbtab.htm)
-   [LOOP AT dbtab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_dbtab.htm)
-   [REFRESH itab FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprefresh_obsolete.htm)
-   [MODIFY dbtab - obsolete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_dbtab_obsolete.htm)
-   [DELETE dbtab - obsolete](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_dbtab_obsolete.htm)

Hint

The statements MODIFY and DELETE specified here overlap the [short forms](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_short_forms_obsolete.htm) of ABAP SQL which are also obsolete. Since the keywords MODIFY and DELETE are also in SQL, these statements were transferred to ABAP SQL. MODIFY and DELETE stop being ABAP SQL statements only when used with the addition VERSION.

Continue
[READ TABLE dbtab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_table_dbtab.htm)
[LOOP AT dbtab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_dbtab.htm)
[REFRESH itab FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprefresh_obsolete.htm)
[MODIFY dbtab, VERSION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_dbtab_obsolete.htm)
[DELETE dbtab, VERSION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdelete_dbtab_obsolete.htm)