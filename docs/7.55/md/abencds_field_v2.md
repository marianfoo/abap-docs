  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Elementary CDS Operands](javascript:call_link\('abencds_operands_v2.htm'\)) → 

CDS DDL - CDS View Entity, field

Syntax

... *\[*entity.*\]*field*|**\[*alias.*\]*field ...

Effect

Field of a [data source](javascript:call_link\('abencds_data_source_v2.htm'\)) entity of the current [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). field expects the actual name of the element. Any alternative element names defined using [AS](javascript:call_link\('abencds_select_list_entry_v2.htm'\)) cannot be used, with the exception of the ON condition of a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry").

If the view entity makes use of multiple [data sources](javascript:call_link\('abencds_data_source_v2.htm'\)) by using join expressions, then all fields must be prefixed with the name of their data source separated by a period (.). The prefix is required in all cases, even if the field names are unique.

For fields that are included via associations, special rules apply. See topic [CDS DDL - CDS View Entity, path\_expr](javascript:call_link\('abencds_path_expression_v2.htm'\)).

Example

The CDS view entity DEMO\_CDS\_SCARR\_SPFLI\_2 defines a join and therefore, all fields from the SELECT list must be prefixed by the name of their data source.

The second CDS view entity shown below, DEMO\_CDS\_FIELDS\_ASSOC\_VE, defines an association and all fields of the association target that are used in the SELECT list must by prefixed by the name of the data source.

@AccessControl.authorizationCheck: #NOT\_ALLOWED
define view entity DEMO\_CDS\_SCARR\_SPFLI\_2
  as select from spfli
      join scarr
        on scarr.carrid = spfli.carrid
    {
      key spfli.carrid   as id,
      key scarr.carrname as carrier,
      key spfli.connid   as flight,
          spfli.cityfrom as departure,
          spfli.cityto   as destination
    }

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_FIELDS\_ASSOC\_VE
  as select from spfli
    association to scarr as \_scarr
      on spfli.carrid = \_scarr.carrid
    {
      key carrid,
      key connid,
          airpfrom,
          airpto,
          \_scarr.carrname,
          \_scarr.url
    }