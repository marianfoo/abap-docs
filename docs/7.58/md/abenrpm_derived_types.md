  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20BDEF%20Derived%20Types%2C%20ABENRPM_DERIVED_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

BDEF Derived Types

[BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") are special data types in the context of RAP. The types are derived by the [ABAP runtime framework](javascript:call_link\('abenabap_runtime_frmwk_glosry.htm'\) "Glossary Entry") from [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") and their behavior definition in the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). In general, BDEF derived types are used in ABAP to enable a type-safe access to RAP BOs. As an essential part of RAP, internal tables and structures that are typed with BDEF derived types are used for the communication and to exchange data between [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") and [RAP BO providers](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry"), thus, allowing mass processing of data.

Each BDEF derived type can be categorized as input or output (result) derived type according to its use as import or export parameter in methods of [RAP BO providers](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry"). For example, the types ... FOR CREATE ... or ... FOR UPDATE ... are used for providing input; ... FOR READ RESULT ..., ... FOR ACTION RESULT ... or ... FOR FAILED ... are used to return a result.

Internal tables and structures that are typed with BDEF derived types contain components of CDS entities like key and data fields that retain their original line type. Yet, BDEF derived types also contain additional RAP components that do not derive their line type from the entity. They have special, tailor-made line types that provide additional information required in the context of transactional processing. The names of those RAP components begin with % to avoid naming conflicts with components of the CDS entities. Among the components, there are [component groups](javascript:call_link\('abencomponent_group_glosry.htm'\) "Glossary Entry") available summarizing groups of table columns under a single name. In doing so, they simplify the handling of derived types for developers. For example, %key summarizes all primary keys. For details on the components, see the topic [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)).

The parameters of [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") are mainly typed with BDEF derived types. Derived types can also be used outside of those operations in ABAP programs using [ABAP EML](javascript:call_link\('abenaeml_glosry.htm'\) "Glossary Entry"). They can be [explicitly declared](javascript:call_link\('abapderived_types_declaration.htm'\)) using a variable, for example, with the statements TYPES, DATA and CREATE.

Derived types can be declared using the following variants:

-   [TYPE TABLE FOR](javascript:call_link\('abaptype_table_for.htm'\))
-   [TYPE STRUCTURE FOR](javascript:call_link\('abaptype_structure_for.htm'\))
-   [TYPE REQUEST FOR](javascript:call_link\('abaptype_request_for.htm'\))
-   [TYPE RESPONSE FOR](javascript:call_link\('abaptype_response_for.htm'\))

Hint

BDEF derived types are created automatically and are known only to the ABAP compiler. For example, the element information for a variable typed with a BDEF derived type can be called by choosing F2 in ADT to display the components.

Continue
[Declaring Data Objects and Types with BDEF Derived Types](javascript:call_link\('abapderived_types_declaration.htm'\))
[Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\))
[TYPE REQUEST FOR](javascript:call_link\('abaptype_request_for.htm'\))
[TYPE RESPONSE FOR](javascript:call_link\('abaptype_response_for.htm'\))
[TYPE STRUCTURE FOR](javascript:call_link\('abaptype_structure_for.htm'\))
[TYPE TABLE FOR](javascript:call_link\('abaptype_table_for.htm'\))