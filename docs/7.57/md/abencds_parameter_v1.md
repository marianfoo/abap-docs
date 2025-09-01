  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-Based View, Elementary CDS Operands](javascript:call_link\('abencds_operands_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, parameter, ABENCDS_PARAMETER_V1, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, parameter

Syntax

... :pname*|*$parameters.pname ...

Effect

Specifies an input parameter pname from the parameter list [parameter\_list](javascript:call_link\('abencds_parameter_list_v1.htm'\)) in an operand position of a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)) of a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry").

The name of the parameter pname must be prefixed by a colon (:) or $parameters..

Example

Specifies the parameters p1 and p2 using both syntax options in the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)).

@AbapCatalog.sqlViewName: 'SPFLI\_PROJECTION'
define view spfli\_proj
  with parameters p1 : abap.int4,
                  p2 : abap.int4 as
  select from scarr
         { key carrid,
               :p1 as para1,
               $parameters.p2 as para2
         };