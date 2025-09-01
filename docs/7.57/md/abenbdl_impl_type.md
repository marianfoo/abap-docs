  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - CDS Behavior Definition Header](javascript:call_link\('abenbdl_bdef_header.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Implementation Type, ABENBDL_IMPL_TYPE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Implementation Type

Syntax

*{* *\[*implementation*\]* managed
                 *|* unmanaged
                 *|* abstract
                 *|* projection *}*
                 *|* interface ...

Effect

CDS BDL offers the following statements for different [implementation types](javascript:call_link\('abencds_bdef_impl_type_glosry.htm'\) "Glossary Entry"):

-   managed
    
    The [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") and the [standard BO operations](javascript:call_link\('abenbdl_standard_operations.htm'\)) are handled by the managed RAP BO provider.
    
    Recommended for development scenarios in which all essential parts are developed from scratch, without a large amount of existing code (also known as "greenfield" development) with standard implementation.
    
    See also: [managed RAP business object](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
    
-   unmanaged
    
    The [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") and the [standard BO operations](javascript:call_link\('abenbdl_standard_operations.htm'\)) must be implemented in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").
    
    Recommended for development scenarios in which business logic already exists and is intended to be reused (also known as "brownfield" development).
    
    See also: [unmanaged RAP business object](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
    
-   projection
    
    A [RAP projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") is based on a managed or unmanaged RAP BO and represents a direct projection of its base behavior definition. It exposes a subset of the base behavior definition's operations and characteristics. In a business application, a projection BDEF provides the means to define service-specific behavior for a BO projection.
    
    See also: [CDS BDL - projection behavior definitions](javascript:call_link\('abenbdl_projection_bo.htm'\)).
    
-   abstract
    
    A [CDS abstract behavior definition](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") mainly serves as typing mechanism for deep action or function parameters. Only a limited range of syntax elements is available, such as associations and type mapping. It is not possible to define any transactional behavior in an abstract behavior definition.
    
    See also: [CDS abstract behavior definition](javascript:call_link\('abenbdl_abstract.htm'\))
    
-   interface
    
    Defines the behavior of a [RAP BO interface](javascript:call_link\('abenrap_bo_interface_glosry.htm'\) "Glossary Entry"), which serves as interface for stable consumption and is typically released as [released API](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry").
    
    See also: [CDS Interface Behavior Definition](javascript:call_link\('abenbdl_rap_bo_interface.htm'\)).
    

Hint

The syntax implementation *{*managed*|*unmanaged*|*projection*|*abstract*}* is obsolete and should not be used. The short syntax form that specifies only the implementation type, without the keyword implementation, should be used instead. If [BDEF strict mode](javascript:call_link\('abenbdl_strict.htm'\)) is enabled, this syntax must not be used and produces a syntax error.

Example

The following example shows a managed BDEF based on the CDS root view entity DEMO\_SALES\_CDS\_BUPA\_2. The implementation type managed is specified in the [CDS behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry").

managed;
define behavior for DEMO\_SALES\_CDS\_BUPA\_2
persistent table demo\_sales\_bupa
lock master
{
  create;
  update;
  delete;
  association \_BuPa {create; }
}
define behavior for DEMO\_SALES\_CDS\_BUPA\_ADDRESS
persistent table demo\_sales\_bupa1
lock dependent by \_Address
{
  field ( readonly ) Id;
  update;
  delete;
association \_Address { }
}