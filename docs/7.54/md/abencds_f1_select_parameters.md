  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, data\_source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_data_source.htm) → 

ABAP CDS - SELECT, parameters

Syntax

... ( pname1 : act1, pname2 : act2, ... ) ...

Effect

Passes actual parameters act1, act2, ... to the [input parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm) pname1, pname2, ... of a [CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry").

The following can be specified for actual parameters:

-   [Literals](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_literal.htm)

-   [Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter.htm)

-   [Session variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm)

The data types of the actual parameters should match the [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_typing.htm) of the input parameters exactly. However the following options are also possible:

-   bind character-like actual parameters to character-like input parameters with a different length.

-   bind numeric actual parameters to numeric input parameters with a greater value range.

Note

Currently, actual parameters can be passed to the input parameters of [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"), and [CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") used as data sources of the SELECT statement.

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