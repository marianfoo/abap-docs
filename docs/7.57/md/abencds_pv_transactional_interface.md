---
title: "CDS DDL - CDS Projection View, Transactional Interface"
description: |
  A CDS transactional interface(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_trans_interface_glosry.htm 'Glossary Entry') is a CDS projection view(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_projection_view_glosry.htm 'Glossary Entry') that is intended
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_transactional_interface.htm"
abapFile: "abencds_pv_transactional_interface.htm"
keywords: ["do", "if", "case", "try", "data", "abencds", "transactional", "interface"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_views.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS Projection View, Transactional Interface, ABENCDS_PV_TRANSACTIONAL_INTE
RFACE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS Projection View, Transactional Interface

A [CDS transactional interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_trans_interface_glosry.htm "Glossary Entry") is a [CDS projection view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_projection_view_glosry.htm "Glossary Entry") that is intended to serve as stable public interface. A CDS transactional interface should be released internally in the system under the [C1 contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc1_contract_glosry.htm "Glossary Entry"), and it can be released additionally under the [C0 contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_glosry.htm "Glossary Entry") for extensions. A CDS transactional interface is typically used in the context of the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarap_glosry.htm "Glossary Entry") to provide the basis for a [RAP BO interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry"). The feature set is restricted to projecting elements from the underlying [projected entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry"). No new associations, [virtual elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_virtual_element_glosry.htm "Glossary Entry"), or fields can be defined.

The following image shows the position of a CDS transactional interface in a CDS data model.

![Figure](abdoc_trans_interface.png)

A CDS transactional interface is built on top of a [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry") or [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). The projected entity must be part of a RAP BO: It must either be a root entity or contain a to-parent association. The transactional interface projects a subset of elements of its projected entity and is released for a specific API state. Under the precondition that the transactional interface is released under the C1 stability contract, a consumer can build a [CDS transactional query](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry") on top of a CDS transactional interface. This transactional query is the top-most layer of the data model and prepares the data for the particular use case.

As a global data type, a CDS projection view of type transactional interface represents a structured type with the elements of the CDS projection view as components. Usage:

-   CDS transactional interfaces can be used as data source for CDS transactional queries. They cannot be used as data source for any other CDS entity.
-   They can be used in ABAP programs as a data type for definitions and in ABAP SQL read statements.

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, topic Business Object Interface.

Continue
[CDS DDL - DEFINE VIEW ENTITY AS PROJECTION ON, Transactional Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_as_interface.htm)