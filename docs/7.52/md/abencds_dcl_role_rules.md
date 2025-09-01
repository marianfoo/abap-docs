---
title: "Syntax Forms"
description: |
  1. ... conditional_rule(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_rule.htm)grant_rule(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_grant_rule.htm) conditional_rule(https://help.sap.com/doc/abapdocu_752_index_htm/7
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_rules.htm"
abapFile: "abencds_dcl_role_rules.htm"
keywords: ["do", "if", "try", "types", "abencds", "dcl", "role", "rules"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) →  [ABAP CDS - DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) → 

ABAP CDS - DEFINE ROLE, access\_rules

Syntax Forms

1\. ... [conditional\_rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_rule.htm)*|*[grant\_rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_grant_rule.htm)
     *\[*[conditional\_rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_rule.htm)*|* [grant\_rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_grant_rule.htm)*\]*
      ...
2\. ... [inherited\_rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_inherited_rule.htm)
     *\[*[conditional\_rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_rule.htm)*|* [grant\_rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_grant_rule.htm)*\]*
     *\[*[conditional\_rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_rule.htm)*|* [grant\_rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_grant_rule.htm)*\]*
      ...

Effect

Access rules that can be specified in curly brackets in the statement [DEFINE ROLE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_role.htm) to define a [CDS role](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry") of the [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_glosry.htm "Glossary Entry"). Each access rule defines access to a [CSD entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry"). There are three types of access rule:

-   Conditional access rules [conditional\_rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_rule.htm), which control access using [access conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_conditions.htm)

-   Full access rules [grant\_rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_grant_rule.htm), which grant unrestricted access

-   Inherited access rules [inherited\_rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_inherited_rule.htm), which inherit the existing CDS role

Several access rules can be combined in a CDS role, but an inherited access rule [inherited\_rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_inherited_rule.htm) can only appear once.

The access conditions defined by the individual access rules are joined with a logical "or". In the same way, the access rules defined by different CDS roles for a CDS entity are joined by a logical "or".

Note

We recommend using only one access rule in a CDS role.

Continue
[ABAP CDS - DEFINE ROLE, conditional\_rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_cond_rule.htm)
[ABAP CDS - DEFINE ROLE, grant\_rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_grant_rule.htm)
[ABAP CDS - DEFINE ROLE, inherited\_rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_dcl_role_inherited_rule.htm)