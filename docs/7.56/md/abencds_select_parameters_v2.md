  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) → 

CDS DDL - CDS View Entity, CDS parameter passing

Syntax

... ( pname1 : act1, pname2 : act2, ... ) ...

Effect

Passes actual parameters act1, act2, ... to the [input parameters](javascript:call_link\('abencds_f1_param.htm'\)) pname1, pname2, ... of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry").

The following can be specified for actual parameters:

-   [Literals](javascript:call_link\('abencds_literal_v2.htm'\))
-   [Parameters](javascript:call_link\('abencds_parameter_v2.htm'\))
-   [Session variables](javascript:call_link\('abencds_session_variable_v2.htm'\))

The data types of the actual parameters should match the [typing](javascript:call_link\('abencds_typing.htm'\)) of the input parameters exactly. However the following options are also possible:

-   bind character-like actual parameters to character-like input parameters with a different length.
-   bind numeric actual parameters to numeric input parameters with a greater value range.

Hint

Currently, actual parameters can be passed to the input parameters of [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") used as data sources of the SELECT statement.

Example

The following CDS view entity uses the CDS view entity demo\_cds\_parameters\_ve in a join. The input parameters of this view are supplied with the input parameters of the current view as actual parameters. The program DEMO\_CDS\_PARAMETERS\_JOIN\_VE uses SELECT to access the view. Here the input parameters are supplied with actual parameters.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_PARAMETERS\_JOIN\_VE
  with parameters
    in\_distance\_l :s\_distance,
    in\_distance\_u :s\_distance,
    in\_unit       :s\_distid
  as select from demo\_cds\_parameters
                 ( p\_distance\_l : $parameters.in\_distance\_l,
                 p\_distance\_u : $parameters.in\_distance\_u,
                 p\_unit       : $parameters.in\_unit ) as flights
    join         scarr on scarr.carrid = flights.carrid
{
  key scarr.carrname,
  key flights.connid,
      flights.cityfrom,
      flights.cityto,
      flights.distance,
      flights.distid
}