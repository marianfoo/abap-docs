---
title: "RAP - Implementation Type"
description: |
  Syntax  implementation managed  unmanaged  abstract  projection   interface ... Effect RAP BDL offers the following statements for different implementation types(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef_impl_type_glosry.htm 'Glossary Entry')
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_impl_type.htm"
abapFile: "abenbdl_impl_type.htm"
keywords: ["update", "delete", "do", "if", "try", "types", "abenbdl", "impl", "type"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo.htm) →  [RAP - Behavior Definition Header](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_bdef_header.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Implementation%20Type%2C%20ABENBDL_IMPL_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Implementation Type

Syntax

*{* *\[*implementation*\]* managed
                 *|* unmanaged
                 *|* abstract
                 *|* projection *}*
                 *|* interface ...

Effect

RAP BDL offers the following statements for different [implementation types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef_impl_type_glosry.htm "Glossary Entry"):

-   managed
    
    The [transactional buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") and the [standard BO operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_standard_operations.htm) are handled by the managed RAP BO provider.
    
    Recommended for development scenarios in which all essential parts are developed from scratch, without a large amount of existing code (also known as greenfield development) with standard implementation.
    
    See also: [managed RAP business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
    
-   unmanaged
    
    The [transactional buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") and the [standard BO operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_standard_operations.htm) must be implemented in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").
    
    Recommended for development scenarios in which business logic already exists and is intended to be reused (also known as brownfield development).
    
    See also: [unmanaged RAP business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")
    
-   projection
    
    A [RAP projection behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") is based on a managed or unmanaged RAP BO and represents a direct projection of its base behavior definition. It exposes a subset of the base behavior definition's operations and characteristics. In a business application, a projection BDEF provides the means to define service-specific behavior for a BO projection.
    
    See also: [RAP BDL - projection behavior definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_projection_bo.htm).
    
-   abstract
    
    A [RAP abstract behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry") mainly serves as typing mechanism for deep action or function parameters. Only a limited range of syntax elements is available, such as associations and type mapping. It is not possible to define any transactional behavior in an abstract behavior definition.
    
    See also: [RAP abstract behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_abstract.htm)
    
-   interface
    
    Defines the behavior of a [RAP BO interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry"), which serves as interface for stable consumption and is typically released as [released API](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreleased_api_glosry.htm "Glossary Entry").
    
    See also: [RAP Interface Behavior Definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo_interface.htm).
    

Hint

The syntax implementation *{*managed*|*unmanaged*|*projection*|*abstract*}* is obsolete and should not be used. The short syntax form that specifies only the implementation type, without the keyword implementation, should be used instead. If [BDEF strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_strict.htm) is enabled, this syntax must not be used and produces a syntax error.

Example

The following example shows a managed BDEF based on the CDS root view entity DEMO\_SALES\_CDS\_BUPA\_2. The implementation type managed is specified in the [RAP behavior definition header](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef_header_glosry.htm "Glossary Entry").

Note: This example does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

managed;
define behavior for DEMO\_SALES\_CDS\_BUPA\_2
persistent table demo\_sales\_bupa
lock master
{
  create;
  update;
  delete;
  field (readonly:update) id;
  association \_BuPa {create; }
}
define behavior for DEMO\_SALES\_CDS\_BUPA\_ADDRESS
persistent table demo\_sales\_bupa1
lock dependent by \_Address
{
  field ( readonly:update ) Id, child\_key;
  update;
  delete;
association \_Address { }
}