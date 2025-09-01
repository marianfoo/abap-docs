---
title: "ABAP SQL Service"
description: |
  Represents an access mechanism of the Application Server ABAP(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_abap_glosry.htm 'Glossary Entry') providing SQL-level access to published, ABAP-managed CDS view entities(https://help.sap.com/doc/abapdocu_latest_index_htm/latest
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_services_glosry.htm"
abapFile: "abenabap_sql_services_glosry.htm"
keywords: ["do", "if", "try", "data", "abenabap", "sql", "services", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20Service%2C%20ABENABAP_SQL_SERVICES_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL Service

Represents an access mechanism of the [Application Server ABAP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_abap_glosry.htm "Glossary Entry") providing SQL-level access to published, ABAP-managed [CDS view entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") for consumers outside the system.

Instead of directly querying the underlying, ABAP-owned [database objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_object_glosry.htm "Glossary Entry") via the SQL layer of the ABAP system's database, all SQL requests are routed through the Application Server ABAP and behave just like they would do if executed from within an ABAP program. In doing so, concepts including client handling and security mechanisms for data access control, (read access) logging, etc. are effectively bypassed.