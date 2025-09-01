  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [CDS DCL - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) →  [CDS DCL - DEFINE ROLE, inherit\_condition](javascript:call_link\('abencds_f1_cond_inherit.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ROLE%2C%20replacing%2C%20ABENCDS_F1_COND_INHERIT_REPLACING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

CDS DCL - DEFINE ROLE, replacing

Syntax

... REPLACING *{* [replacement\_step](javascript:call_link\('abencds_f1_cond_inherit_rpl_step.htm'\)) \[, [replacement\_step](javascript:call_link\('abencds_f1_cond_inherit_rpl_step.htm'\)), ...\] *}*

Effect

This addition modifies inherited access conditions from source entity cds\_entity before they are applied to the protected entity of the own access rule.

It contains a sequence of replacement steps [replacement\_step](javascript:call_link\('abencds_f1_cond_inherit_rpl_step.htm'\)) which are executed in the order as appearing in the statement from left to right.

The first step operates on the inherited conditions and provides its result to the next step as input.

The result of the last step acts as output of the inheritance condition.

Continue
[CDS DCL - DEFINE ROLE, replacement\_step](javascript:call_link\('abencds_f1_cond_inherit_rpl_step.htm'\))