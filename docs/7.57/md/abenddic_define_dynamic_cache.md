---
title: "DDIC - Dictionary DDL for Defining Dynamic Caches"
description: |
  An ABAP Dictionary dynamic cache(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynamic_cache_glosry.htm 'Glossary Entry') is defined as a source-code-based cache in the ABAP Development Tools (ADT)(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm 'Gl
version: "7.57"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_define_dynamic_cache.htm"
abapFile: "abenddic_define_dynamic_cache.htm"
keywords: ["do", "if", "try", "abenddic", "define", "dynamic", "cache"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Tuning Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_tuning_objects.htm) →  [DDIC - Dynamic Caches](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_dynamic_caches.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Dictionary DDL for Defining Dynamic Caches, ABENDDIC_DEFINE_DYNAMIC_CACHE, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Dictionary DDL for Defining Dynamic Caches

An ABAP Dictionary [dynamic cache](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynamic_cache_glosry.htm "Glossary Entry") is defined as a source-code-based cache in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry") [Dictionary DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). A dynamic cache is defined in a separate piece of [DTDC source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddtdc_source_code_glosry.htm "Glossary Entry") and is saved and transported with this code. In a single piece of DTDC source code for dynamic caches, the following Dictionary DDL statement can define exactly one dynamic cache with the same name as the code:

-   [DEFINE DYNAMIC CACHE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_dynamic_cache.htm)

No [name table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenname_table_glosry.htm "Glossary Entry") and no [DDIC runtime object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_runtime_object_glosry.htm "Glossary Entry") are generated for a dynamic cache. Therefore, a dynamic cache cannot be accessed or read with ABAP.

Hints

-   The DTDC source code of dynamic caches has its own editor in [ADT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry"), which is documented there. DTDC source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_workbench_glosry.htm "Glossary Entry").
-   DDIC dynamic caches are connected to a [Switch Framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenswitch_framework_glosry.htm "Glossary Entry") and can be toggled on or off.

Continue
[DDIC DDL - DEFINE DYNAMIC CACHE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_dynamic_cache.htm)