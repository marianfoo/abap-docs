  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, Elementary CDS Operands](javascript:call_link\('abencds_operands_v1.htm'\)) → 

CDS DDL - DDIC-based View, parameter

Syntax

... :pname*|*$parameters.pname ...

Effect

Specifies an input parameter pname from the parameter list [parameter\_list](javascript:call_link\('abencds_parameter_list_v1.htm'\)) in an operand position of a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)) of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry").

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