  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [RAP - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) →  [RAP - RAP BO Operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [RAP - RAP BO Operation, Additions](javascript:call_link\('abenbdl_operations_additions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20InputParameter%2C%20ABENBDL_ACTION_INPUT_PARAM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - InputParameter

Syntax Forms

Flat Parameter

... parameter *{* ParameterEntity *|* $self *}*;

Deep Parameter

... *\[*deep *\[*table*\]**\]* parameter AbstractBDEF;

Alternatives:

[1\. ... parameter *{* ParameterEntity *|* $self *}*;](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... *\[*deep *\[*table*\]**\]* parameter AbstractBDEF;](#!ABAP_ALTERNATIVE_2@2@)

Effect

Defines an [input parameter](javascript:call_link\('abeninput_parameter_glosry.htm'\) "Glossary Entry") for an [action](javascript:call_link\('abenbdl_action.htm'\)) or [function](javascript:call_link\('abenbdl_function.htm'\)). The input parameter can be flat or deep.

Further Information

Development guide for the ABAP RESTful Application Programming Model, topic [Action Definition](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/14ddc6b2442b4b97842af9158a1c9c44?version=sap_cross_product_abap).

Example

The following example shows a managed BDEF based on the CDS root view entity DEMO\_CDS\_ACTION\_INPUT\_PARAM. The business object describes a purchase order item. The BDEF defines one action, deductDiscount. This action has an input parameter for the discount percentage and it calculates the price of an item minus the discount. It is implemented in the behavior pool BP\_DEMO\_CDS\_ACTION\_INPUT\_PARAM.

managed implementation in class bp\_demo\_cds\_action\_input\_param unique;
strict(2);
define behavior for DEMO\_CDS\_ACTION\_INPUT\_PARAM alias PurchaseItem
persistent table demo\_purch\_doc\_i
lock master
authorization master (global)
{
  create;
  update;
  delete;
  action deductDiscount parameter DEMO\_CDS\_ABSTRACT\_DISCOUNT result \[1\] $self;
  field(readonly:update) PurchaseDocument, PurchaseDocumentItem;
  mapping for DEMO\_PURCH\_DOC\_I corresponding;
}

The class CL\_DEMO\_CDS\_ACTION\_REDUCE accesses the business object using [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") and carries out the following operations:

-   It asks the user to specify the discount in percent.
-   It creates two instances of a purchase order item, identified by the key PurchaseDocumentItem, and assigns a price Price to each.
-   It executes the action deductDiscount.
-   Using the ABAP SQL SELECT statement, the content of the underlying database table is displayed.

Result: the price is reduced by the specified discount - here, the discount was specified as 10 percent.

![Figure](abdoc_action_discount.png)

Executable Example

The example above is explained in detail in the executable example [RAP BDL - action with input parameter](javascript:call_link\('abenbdl_action2_abexa.htm'\)).

Alternative 1   

parameter *{* ParameterEntity *|* $self *}*

Effect

-   The input parameter entity ParameterEntity can be a [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") or a classic [DDIC type](javascript:call_link\('abenddic_type_glosry.htm'\) "Glossary Entry")
-   $self can be specified if the input parameter entity is the same abstract entity the action or function is assigned to.
-   Input parameters with $self are only allowed on static actions or functions. When specified for instance actions or functions, there is no syntax check warning, and a [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") occurs instead when a [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") accesses the action or function in question.

Hints

-   If [BDEF strict mode](javascript:call_link\('abenbdl_strict.htm'\)) is enabled, $self is not allowed as input parameter.
-   If a CDS abstract entity is specified as input parameter, the annotation [EndUserText.label](javascript:call_link\('abencds_f1_element_annotation.htm'\)) can be used to define a label that is displayed on the user interface in an OData scenario.

Alternative 2   

*\[*deep *\[*table*\]**\]* parameter AbstractBDEF

Effect

The input parameter AbstractBDEF must be a [RAP abstract BDEF](javascript:call_link\('abenbdl_abstract.htm'\)) [with hierarchy](javascript:call_link\('abenbdl_bdef_abstract_header.htm'\)). The [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") for an abstract BDEF is a hierarchy that contains all entity fields plus a component for every [CDS composition](javascript:call_link\('abencds_composition_glosry.htm'\) "Glossary Entry").

The following syntax options are available:

-   deep parameter AbstractBDEF: The input parameter is interpreted as a structure.
-   deep table parameter AbstractBDEF: The input parameter is interpreted a table.

Hint

An abstract BDEF can also be used as input parameter only with the keyword parameter. In this case, it is interpreted as flat parameter. It represents the same derived type as a single CDS abstract entity and does not offer any additional value.

Example

The following example shows an abstract BDEF with three nodes that is constructed as hierarchy.

abstract;
strict(2);
with hierarchy;
define behavior for DEMO\_CDS\_ABSTRACT\_ROOT alias Root
{
  field ( suppress ) Dummy;
  deep mapping for DEMO\_CDS\_ABSTRACT\_STRUC
  {
    char10 = char\_10;
    Integer4 = integer\_4;
    sub \_itemStructure = struktur;
    sub \_itemTable = tabelle;
  }
  association \_itemTable;
  association \_itemStructure;
}
define behavior for DEMO\_CDS\_ABSTRACT\_ITEMSTRUCT alias ItemStructure
{
  field ( suppress ) Dummy, ToRoot;
  deep mapping for DEMO\_ABSTRACT\_ITEMSTRUCT
  {
    Char10 = char\_10;
    Integer4 = integer\_4;
  }
  association \_parent;
}
define behavior for DEMO\_CDS\_ABSTRACT\_ITEMTABLE alias ItemTable
{
  field ( suppress ) Dummy, ToRoot;
  deep mapping for DEMO\_ABSTRACT\_ITEMTABLE corresponding
  {
    Char10 = char\_10;
    Integer4 = integer\_4;
  }
  association \_parent;
}

The managed BDEF DEMO\_CDS\_DEEP\_PARAMETER uses the abstract BDEF as action parameter in three actions.

managed implementation in class bp\_demo\_cds\_deep\_parameter unique;
strict(2);
define behavior for DEMO\_CDS\_DEEP\_PARAMETER
persistent table DEMO\_BO\_DEEP
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
    mapping for demo\_bo\_deep
    {
    RootBO = root;
    }
  field (readonly:update) RootBO;
// mapping: none
  action a2\_from\_flat              parameter DEMO\_CDS\_ABSTRACT\_ROOT;
// mapping: structure
  action a2\_from\_deep       deep  parameter DEMO\_CDS\_ABSTRACT\_ROOT;
// mapping: table
  action a2\_from\_deep\_table deep table
                                  parameter DEMO\_CDS\_ABSTRACT\_ROOT;
//deep selective output parameter
  action a2\_deep\_result deep result selective \[1\]
    DEMO\_CDS\_ABSTRACT\_ROOT;
}

The abstract BDEF is used as flat parameter, as structure, or as table, depending on the keywords used.

-   Usage as flat parameter in action a2\_from\_flat
    ![Figure](abdoc_abstract_flat.jpg)
-   Usage as structure in action a2\_from\_deep
    ![Figure](abdoc_abstract_structure.jpg)
-   Usage as table in action a2\_from\_deep\_table
    ![Figure](abdoc_abstract_table.jpg)