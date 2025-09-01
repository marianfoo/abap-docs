---
title: "SELECT, BYPASSING BUFFER"
description: |
  Syntax ... BYPASSING BUFFER ... Effect This addition causes the SELECT statement to bypass the table buffering(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm 'Glossary Entry') of buffered DDIC database tables or DDIC views. Any buffers on the current
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_bypassing_buffer.htm"
abapFile: "abapselect_bypassing_buffer.htm"
keywords: ["select", "do", "if", "try", "data", "internal-table", "abapselect", "bypassing", "buffer"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Read Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) →  [SELECT, clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_clauses.htm) →  [SELECT, abap\_options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_additions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20BYPASSING%20BUFFER%2C%20ABAPSELECT_BYPASSING_BUFFER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, BYPASSING BUFFER

Syntax

... BYPASSING BUFFER ...

Effect

This addition causes the SELECT statement to bypass the [table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm "Glossary Entry") of buffered DDIC database tables or DDIC views. Any buffers on the current [AS instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_instance_glosry.htm "Glossary Entry") are not accessed and the database is accessed directly instead.

Hints

-   The addition BYPASSING BUFFER can be used if it is vital that the current data is accessed for a buffered table instead of the buffer.
-   The addition BYPASSING BUFFER can be specified for unbuffered DDIC database tables or views, but then describes the regular behavior.
-   The addition BYPASSING BUFFER does not ensure that data in an internal table is transported to the database when reads are performed on the table using [FROM ... @itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm).

Example

Access to the most current data of the fully buffered DDIC database table SPFLI.

SELECT \*
       FROM spfli
       INTO TABLE @FINAL(result)
       BYPASSING BUFFER.