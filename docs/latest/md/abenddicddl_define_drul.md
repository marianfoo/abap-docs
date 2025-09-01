---
title: "DDIC DDL - DEFINE DEPENDENCY RULE"
description: |
  Syntax DEFINE FILTER(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_filter_drul.htm) JOIN(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_join_drul.htm) DEPENDENCY RULE drul ON dbtab , ... IF  cond_pattern  THEN
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_drul.htm"
abapFile: "abenddicddl_define_drul.htm"
keywords: ["select", "do", "if", "case", "try", "method", "data", "types", "abenddicddl", "define", "drul"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Tuning Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tuning_objects.htm) →  [DDIC - Dependency Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_dependency_rules.htm) →  [DDIC - Dictionary DDL for Defining Dependency Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_define_dependency_rule.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20DDL%20-%20DEFINE%20DEPENDENCY%20RULE%2C%20ABENDDICDDL_DEFINE_DRUL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC DDL - DEFINE DEPENDENCY RULE

Syntax

DEFINE [FILTER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_filter_drul.htm)*|* [JOIN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_join_drul.htm) DEPENDENCY RULE drul
  ON dbtab *\[*, ...*\]*
    IF { cond\_pattern }
      THEN { derived\_cond }

Effect

[Dictionary DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement used to define a [dependency rule](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendependency_rule_glosry.htm "Glossary Entry"). The statement has two variants:

-   [DEFINE FILTER DEPENDENCY RULE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_filter_drul.htm) for filter dependency rules.
-   [DEFINE JOIN DEPENDENCY RULE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_join_drul.htm) for join dependency rules.

The name drul of a dependency rule must comply with the [naming conventions for data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_types_names.htm) and can have a maximum of 30 characters. The name is in the namespace of the [DDIC data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_data_types.htm) and must match the name of the [DRUL source code](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendrul_source_code_glosry.htm "Glossary Entry").

After ON, the name(s) dbtab of DDIC database table(s) for which the dependency rule is defined are specified:

-   In the case of filter dependency rules, exactly one DDIC database table must be specified.
-   In the case of join dependency rules, exactly two comma-separated DDIC database tables must be specified.

cond\_pattern is used to specify a pattern for a relational expression after IF. In the case of reads made on the database table dbtab, the SAP HANA database optimizer searches for this pattern in the associated WHERE condition or ON condition. If the pattern is found, the optimizer uses AND to add the condition derived\_cond specified after THEN to the corresponding WHERE condition or ON condition. The potential conditions are specified in the same way as in the [CDS DDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry") or [CDS DCL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddl_glosry.htm "Glossary Entry") syntax and are described in the filter and join dependency rules.

Caution

It cannot be guaranteed that the SAP HANA database optimizer finds the pattern cond\_pattern. This is why the additional condition derived\_cond must not modify the result set of the original query. It is technically possible to modify the result set with a dependency rule, but should be avoided since it produces undefined behavior in cases where the SAP HANA database optimizer finds the pattern cond\_pattern in some reads but not in others.

Hints

-   The derived condition derived\_cond from a pattern cond\_pattern usually defines a dependency between semantic and technical columns of a DDIC database table. When an application accesses a table with a specific selection condition for semantic columns, an additional condition for technical columns is created implicitly. In the [optimization of access to deprecated data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_data_aging_druls.htm), regular date columns are the semantic columns and the [temperature column](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentemperature_column_glosry.htm "Glossary Entry") is the technical column.
-   If multiple dependency rules are defined for a DDIC database table, AND is used to join all additional conditions and append them to the original condition.
-   Dependency rules can be defined for DDIC database tables only; they cannot be defined for DDIC views. The SAP HANA database optimizer evaluates all SQL accesses on DDIC database tables, including accesses with ABAP SQL, AMDP, and Native SQL, plus all accesses made on views that contain the DDIC database table as a data source.
-   Dependency rules are not evaluated when a DDIC database table is accessed with a method other than ABAP SQL, such as in calculation views.
-   Partners and customers cannot currently define their own dependency rules.

Continue
[DDIC DDL - DEFINE FILTER DEPENDENCY RULE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_filter_drul.htm)
[DDIC DDL - DEFINE JOIN DEPENDENCY RULE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddicddl_define_join_drul.htm)