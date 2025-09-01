  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, CDS Parameter Passing, ABENCDS_SELECT_PARAMETERS_V1, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, CDS Parameter Passing

Syntax

... ( pname1 : act1, pname2 : act2, ... ) ...

Effect

Passes actual parameters act1, act2, ... to the [input parameters](javascript:call_link\('abencds_f1_param.htm'\)) pname1, pname2, ... of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").

The following can be specified for actual parameters:

-   [Literals](javascript:call_link\('abencds_literal_v1.htm'\))
-   [Parameters](javascript:call_link\('abencds_parameter_v1.htm'\))
-   [Session variables](javascript:call_link\('abencds_session_variable_v1.htm'\))

The data types of the actual parameters should match the [typing](javascript:call_link\('abencds_typing.htm'\)) of the input parameters exactly. However the following options are also possible:

-   bind character-like actual parameters to character-like input parameters with a different length.
-   bind numeric actual parameters to numeric input parameters with a greater value range.

Hint

Currently, actual parameters can be passed to the input parameters of [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), and [CDS hierarchies](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") used as data sources of the SELECT statement.

Example

The following CDS view uses the CDS view demo\_cds\_parameters in a join. The input parameters of this view are supplied with the input parameters of the current view as actual parameters. The program DEMO\_CDS\_PARAMETERS\_JOIN uses SELECT to access the view. Here the input parameters are supplied with actual parameters.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PARJOIN'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_parameters\_join
  with parameters
    in\_distance\_l :s\_distance,
    in\_distance\_u :s\_distance,
    in\_unit       :s\_distid
  as select from
           demo\_cds\_parameters
      ( p\_distance\_l : $parameters.in\_distance\_l,
        p\_distance\_u : $parameters.in\_distance\_u,
        p\_unit       : $parameters.in\_unit ) as flights
      join scarr on
        scarr.carrid = flights.carrid
    {
      key scarr.carrname,
      key flights.connid,
          flights.cityfrom,
          flights.cityto,
          flights.distance,
          flights.distid
    };