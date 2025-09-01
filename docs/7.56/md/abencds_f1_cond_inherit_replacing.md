  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [CDS DCL - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) →  [CDS DCL - DEFINE ROLE, inherit\_condition](javascript:call_link\('abencds_f1_cond_inherit.htm'\)) → 

CDS DCL - DEFINE ROLE, replacing

Syntax

... REPLACING *{* [replacement\_step](javascript:call_link\('abencds_f1_cond_inherit_rpl_step.htm'\)) \[, [replacement\_step](javascript:call_link\('abencds_f1_cond_inherit_rpl_step.htm'\)), ...\] *}*

Effect

This addition allows to modify inherited access conditions from source entity cds\_entity before they are applied to the protected entity of the own access rule.

It contains a sequence of replacement steps [replacement\_step](javascript:call_link\('abencds_f1_cond_inherit_rpl_step.htm'\)) which are executed in the order as appearing in the statement from left to right.

The first step operates on the inherited conditions and provides its result to the next step as input.

The result of the last step acts as output of the inheritance condition.