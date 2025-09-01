  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Abstract Behavior Definitions](javascript:call_link\('abenbdl_abstract.htm'\)) →  [RAP - Entity Behavior Definition, Abstract BDEF](javascript:call_link\('abenbdl_define_beh_abstract.htm'\)) →  [RAP - Entity Behavior Body, Abstract BDEF](javascript:call_link\('abenbdl_body_abstract.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Field%20Characteristics%2C%20Abstract%20BDEF%2C%20ABENBDL_FIELD_ABSTRACT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

RAP - Field Characteristics, Abstract BDEF

Syntax

... field(suppress) Field1, Field2, ...;
       *|* (mandatory:execute) Field1, Field2, ...;

Variants:

[1\. ... field(suppress) Field1, Field2, ...](#!ABAP_VARIANT_1@1@)
[2\. ... field(mandatory:execute) Field1, Field2, ...](#!ABAP_VARIANT_2@2@)

Effect

This topic lists field attributes for the [fields](javascript:call_link\('abenrap_bo_field_glosry.htm'\) "Glossary Entry") of an [abstract BDEF](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry").

Commas can be used to classify multiple fields in the same way. Example: field(suppress) Field1, Field2, Field3;.

Variant 1   

... field(suppress) Field1, Field2, ...

Effect

-   Removes a field from all [derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") generated for the BDEF. In particular, the redundancy is avoided in the [TYPE TABLE FOR HIERARCHY](javascript:call_link\('abaptype_table_for.htm'\)) / [TYPE STRUCTURE FOR HIERARCHY](javascript:call_link\('abaptype_structure_for.htm'\)) types.
-   This is possible for all fields except for [key fields](javascript:call_link\('abenkey_field_glosry.htm'\) "Glossary Entry") and fields used by the current BDEF.

Hint

A typical use case for field(suppress) was to exclude foreign-key fields used in the ON condition of the [to-parent association](javascript:call_link\('abencds_absent_to_parent_assoc.htm'\)) to appear redundantly in the hierarchical type. This was particularly useful when it was still mandatory to define an ON condition in to-parent associations of CDS abstract entities. However, since release 7.56, the ON condition can be left out.

Example

The following abstract BDEF suppresses one field from its derived type.

abstract;
strict(2);
define behavior for DEMO\_CDS\_SCALAR\_ROOT\_3 alias Root
{
  field ( suppress ) field2;
}

Variant 2   

field(mandatory:execute) Field1, Field2, ...

Effect

-   Declares a field of an abstract BDEF as mandatory. Whenever the hierarchical type is used as [input parameter](javascript:call_link\('abenbdl_action_input_param.htm'\)) for a [RAP action](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") or a [RAP function](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry"), a value must be supplied. Otherwise, a [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") occurs.
-   As a prerequisite, the addition [with hierarchy](javascript:call_link\('abenbdl_bdef_abstract_header.htm'\)) must be used in the [behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry") and [with control](abenbdl_define_beh_abstract.htm#!ABAP_ALTERNATIVE_1@1@) must be specified for the [entity behavior definition](javascript:call_link\('abencds_entity_bdef_glosry.htm'\) "Glossary Entry") in question. Moreover, [BDEF strict mode](javascript:call_link\('abenrap_strict_mode_glosry.htm'\) "Glossary Entry") must be enabled.

Hint

When using [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\)), mandatory:execute does not have any effect.

Example

The following abstract BDEF defines the field NUM1 as mandatory:execute. It fulfills the mandatory prerequisites and uses both the additions with hierarchy and with control.

abstract;
strict;
with hierarchy;
define behavior for DEMO\_ABSTRACT\_ROOT with control
{
  association \_item1;
  association \_item2;
  association \_scalar;
  field ( mandatory :execute ) num1;
}
define behavior for DEMO\_HIER\_ABS\_ITEM1 with control
{
  field ( suppress ) root2\_id;
  association \_root2 with hierarchy;
}
define behavior for DEMO\_HIER\_ABS\_ITEM2 with control
{
}
scalar entity DEMO\_HIER\_ABS\_SCALAR field char1;

This abstract BDEF is used as input parameter for the action ACTION\_DEEP\_PARAM in the managed BDEF DEMO\_MANAGED\_HIERARCHY.

managed implementation in class bp\_demo\_managed\_hierarchy unique;
strict(2);
define behavior for DEMO\_MANAGED\_HIERARCHY
persistent table demo\_tab\_root\_6
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  field ( readonly, numbering : managed ) id;
  // flat
  static action action\_flat\_param parameter
    DEMO\_ABSTRACT\_ROOT result \[1..\*\] $self;
  // structure as input parameter
  static action action\_deep\_param deep parameter
    DEMO\_ABSTRACT\_ROOT result \[1..\*\] $self;
  // table as input parameter
  static action action\_deep\_table\_param deep table
    parameter DEMO\_ABSTRACT\_ROOT result \[1..\*\] $self;
  static action storeHData deep parameter
    DEMO\_ABSTRACT\_ROOT result \[1..\*\] $self;
  static action returnHData deep result \[1\] DEMO\_ABSTRACT\_ROOT;
}

The ABAP class CL\_DEMO\_MANDATORY\_EXECUTE executes the action ACTION\_DEEP\_PARAM. It supplies a value for the field NUM1 and sets the [%control](javascript:call_link\('abapderived_types_comp.htm'\)) structure for this field to if\_abap\_behv=>mk-on.

Code Snippet:

MODIFY ENTITY demo\_managed\_hierarchy
       EXECUTE action\_deep\_param
       FROM VALUE #( ( %cid = 'cid\_deep\_param'
                       %param = VALUE #(
                         char1 = 'a'
                         char2 = 'b'
                         "num1 and the corresponding field of the
                         "control-structure are mandatory.
                         num1 = 1
                         %control-num1 = if\_abap\_behv=>mk-on
                         num2 = 2
                         %control-num2 = if\_abap\_behv=>mk-off ) ) )
        RESULT FINAL(lt\_result2)
        MAPPED FINAL(ls\_mapped2)
        REPORTED FINAL(ls\_reported2)
        FAILED FINAL(ls\_failed2).

The following code results in a runtime error, since the %control structure for field NUM1 is set to if\_abap\_behv=>mk-off.

Code Snippet:

MODIFY ENTITY demo\_managed\_hierarchy
       EXECUTE action\_deep\_param
       FROM VALUE #( ( %cid = 'cid\_deep\_param'
                       %param = VALUE #(
                         char1 = 'a'
                         char2 = 'b'
                         num1 = 1
                         %control-num1 = if\_abap\_behv=>mk-off
                         num2 = 2
                         %control-num2 = if\_abap\_behv=>mk-off ) ) )
        RESULT FINAL(lt\_result2)
        MAPPED FINAL(ls\_mapped2)
        REPORTED FINAL(ls\_reported2)
        FAILED FINAL(ls\_failed2).

Executable Example

An executable example is available in topic [Using TYPE TABLE /TYPE STRUCTURE FOR HIERARCHY](javascript:call_link\('abenderived_type_hierarchy_abexa.htm'\)).