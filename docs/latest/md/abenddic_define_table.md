---
title: "DDIC - Dictionary DDL for Defining Database Tables"
description: |
  A DDIC database table can be displayed and modified in a source-code-based editor in the ABAP development tools for Eclipse (ADT)(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm 'Glossary Entry'), using Dictionary DDL(https://help.sap.com/doc/abapdocu_latest_in
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_table.htm"
abapFile: "abenddic_define_table.htm"
keywords: ["do", "if", "try", "data", "abenddic", "define", "table"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Dictionary%20DDL%20for%20Defining%20Database%20Tables%2C%20ABENDDIC_DEFINE_TABLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

DDIC - Dictionary DDL for Defining Database Tables

A DDIC database table can be displayed and modified in a source-code-based editor in the [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"), using [Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). The source code of a DDIC database table is not saved and transported. Instead, the source code of an existing DDIC database table is generated from the metadata of the associated system tables. Conversely, when saved, the metadata is derived directly from the source code and saved to the system tables.

-   [DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm)

Hint

All properties of a DDIC database table can be defined in ADT using Dictionary DDL or in transaction SE11, with the following exceptions. The [technical properties](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_techspec.htm), which are activated and transported separately from the DDIC database table, and [secondary indexes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_index.htm) cannot be defined using the Dictionary DDL:

-   The [standalone table-specific technical properties of DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_techspec.htm) can be maintained in a form-based tool in ADT.
-   [Secondary indexes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_index.htm) can be edited in a form-based tool in ADT.
-   [Extensibility annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_ext_annos.htm), which are a prerequisite for [C0 release](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules_ddic.htm), can be maintained only in ADT.

Continue
[DDIC DDL - DEFINE TABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_table.htm)