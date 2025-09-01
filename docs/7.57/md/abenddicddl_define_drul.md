---
title: "DDIC DDL - DEFINE DEPENDENCY RULE"
description: |
  Syntax DEFINE FILTER(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_filter_drul.htm) JOIN(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_join_drul.htm) DEPENDENCY RULE drul ON dbtab , ... IF  cond_pattern  THEN  derived
version: "7.57"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_drul.htm"
abapFile: "abenddicddl_define_drul.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abenddicddl", "define", "drul"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Tuning Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_tuning_objects.htm) →  [DDIC - Dependency Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_dependency_rules.htm) →  [DDIC - Dictionary DDL for Defining Dependency Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_define_dependency_rule.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC DDL - DEFINE DEPENDENCY RULE, ABENDDICDDL_DEFINE_DRUL, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC DDL - DEFINE DEPENDENCY RULE

Syntax

DEFINE [FILTER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_filter_drul.htm)*|* [JOIN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_join_drul.htm) DEPENDENCY RULE drul
  ON dbtab *\[*, ...*\]*
    IF { cond\_pattern }
      THEN { derived\_cond }

Effect

[Dictionary DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement used to define a [dependency rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendependency_rule_glosry.htm "Glossary Entry"). The statement has two variants:

-   [DEFINE FILTER DEPENDENCY RULE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_filter_drul.htm) for filter dependency rules
-   [DEFINE JOIN DEPENDENCY RULE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_join_drul.htm) for join dependency rules

The name drul of a dependency rule must comply with the naming conventions for [dictionary types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_data_types.htm) and can have a maximum of 30 characters. The name is in the namespace of the ABAP Dictionary [data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_data_types.htm) and must match the name of the [DRUL source code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendrul_source_code_glosry.htm "Glossary Entry").

The names dbtab of DDIC database tables for which the dependency rule is defined are specified after ON.

-   In the case of filter dependency rules, exactly one DDIC database table must be specified.
-   In the case of join dependency rules, comma-separated DDIC database tables must be specified.

cond\_pattern is used to specify a pattern for a relational expression after IF. In the case of reads made on the database table dbtab, the SAP HANA database optimizer searches for this pattern in the associated WHERE condition or ON condition. If the pattern is found, the optimizer uses AND to add the condition derived\_cond specified after THEN to the corresponding WHERE condition or ON condition. The potential conditions are specified in the same way as in the [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry") or [CDS DCL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry") syntax and are described in the filter and join dependency rules.

Caution

It cannot be guaranteed that the SAP HANA database finds the pattern cond\_pattern. This is why the additional condition derived\_cond must not modify the result set of the original query. This is technically possible, but produces undefined behavior in cases where the SAP HANA database optimizer finds the pattern cond\_pattern in some reads but not in others.

Hints

-   The derivation of an additional condition derived\_cond from a pattern cond\_pattern usually defines a dependency between semantic and technical columns of a DDIC database table. When an application accesses a table with a specific selection condition for semantic columns, an additional condition for technical columns is created implicitly. In the [optimization of access to deprecated data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_data_aging_druls.htm), regular date columns are the semantic columns and the [temperature column](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentemperature_column_glosry.htm "Glossary Entry") is the technical column.
-   If multiple dependency rules are defined for a DDIC database table, AND is used to join all additional conditions and append them to the original condition.
-   Dependency rules can be defined for DDIC database tables only; they cannot be defined for DDIC views. The SAP HANA database optimizer evaluates all SQL reads on these tables. These include reads made with ABAP SQL, AMDP, and Native SQL, plus all reads made on views that contain the DDIC database table as a data source.
-   Dependency rules are not evaluated in reads not made using SQL (such as in calculation views).
-   As in the [CDS syntax](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_general_syntax_rules.htm), the definition of an ABAP Dictionary append structure can contain comments after // and between /\* ... \*/.
-   Partners and customers cannot currently define their own dependency rules.

Continue
[DDIC DDL - DEFINE FILTER DEPENDENCY RULE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_filter_drul.htm)
[DDIC DDL - DEFINE JOIN DEPENDENCY RULE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddicddl_define_join_drul.htm)