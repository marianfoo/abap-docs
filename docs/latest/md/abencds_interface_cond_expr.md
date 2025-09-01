---
title: "CDS DDL - WHERE, Transactional Interface"
description: |
  Syntax ... WHERE cds_cond ... Effect Defines a WHERE condition for the result set of a CDS transactional interface(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_trans_interface_glosry.htm 'Glossary Entry'). When the transactional interface is accessed, the result set con
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_interface_cond_expr.htm"
abapFile: "abencds_interface_cond_expr.htm"
keywords: ["do", "if", "try", "data", "abencds", "interface", "cond", "expr"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Transactional Interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_transactional_interface.htm) →  [CDS DDL - DEFINE VIEW ENTITY AS PROJECTION ON, Transactional Interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_as_interface.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20WHERE%2C%20Transactional%20Interface%2C%20ABENCDS_INTERFACE_COND_EXPR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

CDS DDL - WHERE, Transactional Interface

Syntax

... WHERE cds\_cond ...

Effect

Defines a WHERE condition for the result set of a [CDS transactional interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_trans_interface_glosry.htm "Glossary Entry"). When the transactional interface is accessed, the result set contains only the data from the projected entity [cds\_entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_as_interface.htm) that meets the condition cds\_cond specified after WHERE.

The condition is either a single relational expression rel\_expr or an expression constructed from the Boolean operators NOT, AND, and OR.

In transactional interfaces, the following rules apply to the operands and syntax of the WHERE condition:

-   Comparison operators, BETWEEN, LIKE, and IS \[NOT\] INITIAL are allowed as operators.
-   The Boolean operators NOT, AND, and OR are supported.
-   lhs expects a field of the projected entity. The field does not necessarily have to be included in the projection list.
-   rhs can be a field of the projected entity, a [literal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_literal_glosry.htm "Glossary Entry"), or a [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v2.htm). When using the operator LIKE, rhs must be a character literal.