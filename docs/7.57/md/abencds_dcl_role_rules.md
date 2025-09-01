---
title: "Syntax Forms"
description: |
  1. ... conditional_rule(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_cond_rule.htm)grant_rule(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_grant_rule.htm) conditional_rule(https://help.sap.com/doc/abapdocu_757_index_htm/7
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_rules.htm"
abapFile: "abencds_dcl_role_rules.htm"
keywords: ["do", "if", "try", "data", "types", "abencds", "dcl", "role", "rules"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_role.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DCL - DEFINE ROLE, access_rules, ABENCDS_DCL_ROLE_RULES, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DCL - DEFINE ROLE, access\_rules

Syntax Forms

1\. ... [conditional\_rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_cond_rule.htm)*|*[grant\_rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_grant_rule.htm)
     *\[*[conditional\_rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_cond_rule.htm)*|* [grant\_rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_grant_rule.htm)*\]*
      ...
2\. ... [inherited\_rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_inherited_rule.htm)
     *\[*[conditional\_rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_cond_rule.htm)*|* [grant\_rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_grant_rule.htm)*\]*
     *\[*[conditional\_rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_cond_rule.htm)*|* [grant\_rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_grant_rule.htm)*\]*
      ...

Effect

Access rules that can be specified in curly brackets in the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_role.htm) to define a [CDS role](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_role_glosry.htm "Glossary Entry") in [CDS DCL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_glosry.htm "Glossary Entry"). Each access rule defines access to a [CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") entity. There are three types of access rule:

-   Conditional access rules [conditional\_rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_cond_rule.htm), which control access using [access conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_conditions.htm)
-   Full access rules [grant\_rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_grant_rule.htm) that grant unrestricted access
-   Obsolete inherited access rules [inherited\_rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_inherited_rule.htm) applied from existing CDS roles; [inheritance conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_cond_inherit.htm) should be used instead of inheritance rules.

Multiple access rules can be combined in a single CDS role, but an inherited access rule [inherited\_rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_inherited_rule.htm) can only occur once.

The access conditions defined by the individual access rules are joined with a logical "or". In the same way, the access rules defined by different CDS roles for a CDS entity are joined by a logical "or".

Hint

It is advisable to use only one access rule in a CDS role.

Continue
[CDS DCL - DEFINE ROLE, conditional\_rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_cond_rule.htm)
[CDS DCL - DEFINE ROLE, grant\_rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_grant_rule.htm)
[CDS DCL - DEFINE ROLE, inherited\_rule (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_inherited_rule.htm)