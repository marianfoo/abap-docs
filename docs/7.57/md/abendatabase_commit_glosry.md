---
title: "database_commit_glosry"
description: |
  database_commit_glosry - ABAP 7.57 language reference documentation
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_commit_glosry.htm"
abapFile: "abendatabase_commit_glosry.htm"
keywords: ["do", "if", "try", "data", "abendatabase", "commit", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: database commit, ABENDATABASE_COMMIT_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

database commit

End of a [database LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_luw_glosry.htm "Glossary Entry"), in which changed data records are written to the [database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_glosry.htm "Glossary Entry"). All changes are temporary until they have been written using a database commit. Changes are always directly visible to the executing program. The [database system](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_system_glosry.htm "Glossary Entry") that is used determines whether other users can see the database changes immediately or only after the database commit. In [AS ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_abap_glosry.htm "Glossary Entry"), database commits are triggered implicitly, as well as by explicit requests.

[→ More about](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_commit.htm)