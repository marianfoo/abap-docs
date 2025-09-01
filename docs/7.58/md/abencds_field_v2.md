  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Elementary CDS Operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20field%2C%20ABENCDS_FIELD_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DDL - CDS View Entity, field

Syntax

... *\[*entity.*\]*field*|**\[*alias.*\]*field ...

Effect

Defines a [CDS source field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_field_glosry.htm "Glossary Entry") in an operand position of a CDS entity. A CDS source field is a field of a [data source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm) entity of the current [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). field expects the actual name of the element. Any alternative element names defined using [AS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_entry_v2.htm) cannot be used, with the exception of the ON condition of a [CDS association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_association_glosry.htm "Glossary Entry").

If the view entity makes use of multiple [data sources](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm) by using join expressions, then all fields must be prefixed with the name of their data source separated by a period (.). The prefix is required in all cases, even if the field names are unique.

For fields that are included via associations, special rules apply. See topic [CDS DDL - CDS View Entity, path\_expr](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v2.htm).

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