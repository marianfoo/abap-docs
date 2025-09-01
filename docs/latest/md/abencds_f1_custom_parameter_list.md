  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Custom Entities](javascript:call_link\('abencds_custom_entities.htm'\)) →  [CDS DDL - DEFINE CUSTOM ENTITY](javascript:call_link\('abencds_f1_define_custom_entity.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20CUSTOM%20ENTITY%2C%20parameter_list%2C%20ABENCDS_F1_CUSTOM_PARAMETER_LIST%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

CDS DDL - DEFINE CUSTOM ENTITY, parameter\_list

Syntax

... WITH PARAMETERS [parameter1](javascript:call_link\('abencds_f1_param.htm'\)), [parameter2](javascript:call_link\('abencds_f1_param.htm'\)), ...

Effect

Defines [CDS parameters](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter1](javascript:call_link\('abencds_f1_param.htm'\)), [parameter2](javascript:call_link\('abencds_f1_param.htm'\)), ... as input parameters of a CDS custom entity in a comma-separated list.

An input parameter called pname is used to model the interface of a CDS custom entity. It cannot be used in the [element list](javascript:call_link\('abencds_f1_custom_element_list.htm'\)) of the CDS custom entity.

Example

The following DDL source code shows a CDS custom entity with an input parameter:

@EndUserText.label: 'CDS custom entity, query implementation'
@ObjectModel.query.implementedBy: 'ABAP:CL\_DEMO\_CUSTOM\_ENTITY\_QUERY'
define custom entity DEMO\_CDS\_CUSTOM\_ENTITY
  with parameters
    p\_number : int1
  {
    key id   : int4;
        uuid : abap.char(32);
  }

This CDS custom entity is used in the [executable example for implementing a custom entity](javascript:call_link\('abencds_custom_query_abexa.htm'\)).