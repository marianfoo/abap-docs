  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) → 

ABAP CDS - SELECT, parameters

Syntax

... ( pname1 : act1, pname2 : act2, ... ) ...

Effect

Passes actual parameters act1, act2, ... to the [input parameters](javascript:call_link\('abencds_f1_param.htm'\)) pname1, pname2, ... of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry").

The following can be specified for actual parameters:

-   [Literals](javascript:call_link\('abencds_f1_literal.htm'\))

-   [Parameters](javascript:call_link\('abencds_f1_parameter.htm'\))

-   [Session variables](javascript:call_link\('abencds_f1_session_variable.htm'\))

The data types of the actual parameters should match the [typing](javascript:call_link\('abencds_typing.htm'\)) of the input parameters exactly. However the following options are also possible:

-   bind character-like actual parameters to character-like input parameters with a different length.

-   bind numeric actual parameters to numeric input parameters with a greater value range.

Note

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