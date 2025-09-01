  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Elementary CDS Operands](javascript:call_link\('abencds_operands_v2.htm'\)) →  [CDS DDL - CDS View Entity, session\_variable](javascript:call_link\('abencds_session_variable_v2.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, Application Session Variables, ABENCDS_SESSION_VAR_APPLICA
TION_V2, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, Application Session Variables

Syntax

... $session.vname ...

Effect

Specifies an application [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") vname in an operand position in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). The variable must be prefixed by $session..

Application session variables are required for specific applications and they can be set by dedicated system programs using a special system class. The following application session variables exist:

vname

Value when accessed

bs\_instance\_id

Instance ID of the current business service instance. The returned value has the data type SSTRING.

bs\_zone\_id

Zone ID of the current business service instance. The returned value has the data type SSTRING.

Prerequisite

A CDS view entity that accesses an application session variable must be usable as [replacement object](javascript:call_link\('abenddic_replacement_objects.htm'\)). That implies that the respective CDS view entity must not have any [input parameters](javascript:call_link\('abencds_parameter_v2.htm'\)).

Hints

-   From a technical perspective, session variables indicate global variables of the current database. Application session variables are set to their value by dedicated system programs using a special system class. Like [ABAP system fields](javascript:call_link\('abensystem_fields.htm'\)), they are modifiable from an ABAP program. However, they should not be changed in application programs. They should only be used for reads. Otherwise, important information for further program execution may be lost.
-   The annotation [environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) is relevant for built-in session variables, but not for application session variables.
-   In existing CDS view entities without corresponding input parameters, session variables can be passed to the input parameters of CDS view entities or CDS table functions used there.
-   Application session variables are supported only in CDS view entities. However, it is possible to build a CDS DDIC-based view (obsolete) on top of a CDS view entity with application session variables. The information is passed on to the CDS DDIC-based view (obsolete) in this case.

Restrictions

-   CDS view entities with application session variables cannot be used in [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry"), since AMDP does not support application session variables.
-   The [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") function Data Preview does not work for CDS view entities with application session variables.