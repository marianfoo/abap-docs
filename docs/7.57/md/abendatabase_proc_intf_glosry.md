---
title: "database_proc_intf_glosry"
description: |
  database_proc_intf_glosry - ABAP 7.57 language reference documentation
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_proc_intf_glosry.htm"
abapFile: "abendatabase_proc_intf_glosry.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abendatabase", "proc", "intf", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: database procedure interface, ABENDATABASE_PROC_INTF_GLOSRY, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

database procedure interface

Global non-modifiable [interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenintf_gen_glosry.htm "Glossary Entry") of the [class library](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclass_library_glosry.htm "Glossary Entry") that is generated for each [database procedure proxy](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_proc_proxy_glosry.htm "Glossary Entry"). For each interface parameter of the represented [SQLScript procedure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_script_procedure_glosry.htm "Glossary Entry"), a database procedure interface contains the declaration of an [ABAP data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_type_glosry.htm "Glossary Entry"), as defined in the mapping of the database procedure proxy. Programs that use [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_database_procedure.htm) to call the SQLScript procedure can refer to the data types of the database procedure interface when declaring the required actual parameters.