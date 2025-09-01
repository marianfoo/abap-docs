---
title: "DDIC - Naming Rules for Data Types"
description: |
  The name of a DDIC data type must stick to the following rules: -   It can have a maximum of 30 characters. -   It can consist of letters, digits, and underscores. -   It must start with a letter. -   It can be introduced using a namespace prefix(https://help.sap.com/doc/abapdocu_latest_index_htm/
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_types_names.htm"
abapFile: "abenddic_types_names.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abenddic", "names"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Naming%20Rules%20for%20Data%20Types%2C%20ABENDDIC_TYPES_NAMES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Naming Rules for Data Types

The name of a DDIC data type must stick to the following rules:

-   It can have a maximum of 30 characters.
-   It can consist of letters, digits, and underscores.
-   It must start with a letter.
-   It can be introduced using a [namespace prefix](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenname_space_prefix_glosry.htm "Glossary Entry") (/.../) of a [prefix namespace](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprefix_name_space_glosry.htm "Glossary Entry")
-   It is in the same namespace of all [global types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP.
-   It must not be the name of a [built-in data type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types.htm) in ABAP.

All DDIC data types, alongside [DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) and [DDIC views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_views.htm), are located in the same namespace which includes all [global types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_type_glosry.htm "Glossary Entry") of an AS ABAP. [DDIC domains](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendomain_glosry.htm "Glossary Entry"), on the other hand, are in a separate namespace, and can therefore have the same name as, for example, a data element.

Hints

-   DDIC types are stored in uppercase letters, as all [repository objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrepository_object_glosry.htm "Glossary Entry") of the [ABAP repository](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_repository_glosry.htm "Glossary Entry"). Names that are entered in lowercase or mixed case letters in the [tools for dictionary objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm) are converted to upper case internally.
-   In addition to the above rules, there are special
    -   [naming rules for DDIC structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_names.htm)
    -   [naming rules for DDIC database tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_dbtab_names.htm)
    -   [naming rules for DDIC views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_view_names.htm)