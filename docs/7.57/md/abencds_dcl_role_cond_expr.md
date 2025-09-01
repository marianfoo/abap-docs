  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_access_control.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [CDS DCL - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [CDS DCL - DEFINE ROLE, access\_rules](javascript:call_link\('abencds_dcl_role_rules.htm'\)) →  [CDS DCL - DEFINE ROLE, conditional\_rule](javascript:call_link\('abencds_dcl_role_cond_rule.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DCL - DEFINE ROLE, cds_cond, ABENCDS_DCL_ROLE_COND_EXPR, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DCL - DEFINE ROLE, cds\_cond

Syntax

... [condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\))
  | *\[*NOT*\]* cds\_cond *\[*AND*|*OR cds\_cond*\]* ...

Effect

Formulates an [access condition](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") in the statement [DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) in [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry"). The result of an access condition is true or false.

An access condition is either a single condition, [condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)), or an expression constructed from the Boolean operators NOT, AND, and OR in which parenthesized full conditions cds\_cond using parentheses ( ... ) are possible. The Boolean operators work as follows:

-   NOT negates the result of the following condition. It cannot be used if cds\_cond is one of the following conditions:
    -   A PFCG condition [pfcg\_condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) whose left side specifies CDS elements that themselves are assigned authorization fields on the right side after ASPECT pfcg\_auth using mapped\_field1, mapped\_field2, ...
    -   A self-defined aspect [aspect](javascript:call_link\('abencds_f1_cond_aspect.htm'\)).
    -   An inheritance condition [inherit\_condition](javascript:call_link\('abencds_f1_cond_inherit.htm'\)).
-   An AND combination is true if both combined conditions are true.
-   An OR combination is true if at least one of the combined conditions is true.

The operator NOT is a stronger binding than AND, which itself is a strong binding than OR. This produces implicit parentheses, which can be overridden by explicit parentheses.

When an access condition is evaluated using CDS access control, only those lines are selected for which the access condition is true.

Hints

-   Inside of the NOT operator (also in nested subconditions), some constituents of access conditions cannot be used:
    -   PFCG conditions with left side elements.
    -   Self-defined aspects.
    -   Literal conditions using optional elements.