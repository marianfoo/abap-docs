  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) → 

ABAP CDS - parameter

Syntax

... :pname*|*$parameters.pname ...

Effect

Specifies an input parameter pname from the parameter list [parameter\_list](javascript:call_link\('abencds_f1_parameter_list.htm'\)) in an operand position of a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry").

The name of the parameter pname must be prefixed by a colon (:) or $parameters..

Example

Specifies the parameters p1 and p2 using both syntax options in the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)).

@AbapCatalog.sqlViewName: 'SPFLI\_PROJECTION'
define view spfli\_proj
  with parameters p1 : abap.int4,
                  p2 : abap.int4 as
  select from scarr
         { key carrid,
               :p1 as para1,
               $parameters.p2 as para2
         };