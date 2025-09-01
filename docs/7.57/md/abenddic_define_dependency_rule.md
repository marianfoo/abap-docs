---
title: "DDIC - Dictionary DDL for Defining Dependency Rules"
description: |
  An ABAP Dictionary dependency rule(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendependency_rule_glosry.htm 'Glossary Entry') is defined as a source-code-based rule in the ABAP Development Tools (ADT)(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm
version: "7.57"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_define_dependency_rule.htm"
abapFile: "abenddic_define_dependency_rule.htm"
keywords: ["do", "if", "try", "abenddic", "define", "dependency", "rule"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Tuning Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_tuning_objects.htm) →  [DDIC - Dependency Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_dependency_rules.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Dictionary DDL for Defining Dependency Rules, ABENDDIC_DEFINE_DEPENDENCY_RULE,
 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Dictionary DDL for Defining Dependency Rules

An ABAP Dictionary [dependency rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendependency_rule_glosry.htm "Glossary Entry") is defined as a source-code-based rule in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry") [Dictionary DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). A dependency rule is defined in a separate piece of [DRUL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendrul_source_code_glosry.htm "Glossary Entry") and is saved and transported with this code. In a single piece of DRUL source code for dependency rules, the following Dictionary DDL statement can define exactly one dependency rule with the same name as the code:

-   [DEFINE DEPENDENCY RULE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_drul.htm)

Hints

-   The [DRUL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendrul_source_code_glosry.htm "Glossary Entry") of dependency rules has its own editor in [ADT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry"), which is documented there. DRUL source code can also be displayed in [Repository Browser](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_workbench_glosry.htm "Glossary Entry").
-   Partners and customers cannot currently define their own dependency rules.

Continue
[DDIC DDL - DEFINE DEPENDENCY RULE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_drul.htm)