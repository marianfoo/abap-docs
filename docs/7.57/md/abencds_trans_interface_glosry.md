---
title: "CDS transactional interface"
description: |
  A CDS transactional interface is a CDS projection view(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_projection_view_glosry.htm 'Glossary Entry') that is intended to serve as stable public interface for consumption. A CDS transactional interface should be classified by a rele
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_trans_interface_glosry.htm"
abapFile: "abencds_trans_interface_glosry.htm"
keywords: ["do", "if", "try", "class", "abencds", "trans", "interface", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS transactional interface, ABENCDS_TRANS_INTERFACE_GLOSRY, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS transactional interface

A CDS transactional interface is a [CDS projection view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_projection_view_glosry.htm "Glossary Entry") that is intended to serve as stable public interface for consumption. A CDS transactional interface should be classified by a [release contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrelease_contract_glosry.htm "Glossary Entry") and thus serve as [released API](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreleased_api_glosry.htm "Glossary Entry"). A CDS transactional interface is typically used in the context of the [ABAP RESTful Application Programming Model](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarap_glosry.htm "Glossary Entry") to provide the basis for a [RAP BO interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry"). A CDS transactional interface is defined using the [CDS DDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddl_glosry.htm "Glossary Entry") statement [DEFINE VIEW ENTITY AS PROJECTION ON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_as_interface.htm) and it must have its [provider contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_provider_contract.htm) set to TRANSACTIONAL\_INTERFACE.